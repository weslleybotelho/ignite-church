'use client';
import { useState, useEffect } from 'react';
import { ANNOUNCEMENT_ALLOWED_IMAGE_TYPES, ANNOUNCEMENT_IMAGE_MAX_BYTES } from '@/app/constants/uploads';

interface Announcement {
  id: number;
  title: string;
  description: string;
  image_url: string;
  link_url: string;
  sort_order: number;
  is_active: boolean;
}

const emptyForm = {
  title: '',
  description: '',
  link_url: '',
  sort_order: 0,
  is_active: true,
};

export default function AdminAnnouncements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const fetchAnnouncements = async () => {
    try {
      const res = await fetch('/api/announcements?include_inactive=true');
      const data = await res.json();
      if (Array.isArray(data)) setAnnouncements(data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (imageFile) {
      if (!ANNOUNCEMENT_ALLOWED_IMAGE_TYPES.includes(imageFile.type as (typeof ANNOUNCEMENT_ALLOWED_IMAGE_TYPES)[number])) {
        setFormError('Invalid image type. Please upload JPG, PNG, WEBP, or GIF.');
        return;
      }

      if (imageFile.size > ANNOUNCEMENT_IMAGE_MAX_BYTES) {
        setFormError(`Image is too large. Maximum allowed size is ${Math.floor(ANNOUNCEMENT_IMAGE_MAX_BYTES / (1024 * 1024))}MB.`);
        return;
      }
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('description', form.description);
      formData.append('link_url', form.link_url);
      formData.append('sort_order', String(form.sort_order));
      formData.append('is_active', String(form.is_active));
      if (imageFile) formData.append('image', imageFile);

      const url = editingId ? `/api/announcements/${editingId}` : '/api/announcements';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, { method, body: formData });

      if (res.ok) {
        setForm(emptyForm);
        setImageFile(null);
        setEditingId(null);
        setShowForm(false);
        fetchAnnouncements();
      } else {
        const data = await res.json().catch(() => null);
        setFormError(data?.error || 'Failed to save announcement.');
      }
    } catch (error) {
      console.error('Error saving announcement:', error);
      setFormError('Failed to save announcement. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (a: Announcement) => {
    setForm({
      title: a.title,
      description: a.description || '',
      link_url: a.link_url || '',
      sort_order: a.sort_order,
      is_active: a.is_active,
    });
    setImageFile(null);
    setEditingId(a.id);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this announcement?')) return;
    try {
      await fetch(`/api/announcements/${id}`, { method: 'DELETE' });
      fetchAnnouncements();
    } catch (error) {
      console.error('Error deleting announcement:', error);
    }
  };

  const handleActivate = async (announcement: Announcement) => {
    try {
      const formData = new FormData();
      formData.append('title', announcement.title);
      formData.append('description', announcement.description || '');
      formData.append('link_url', announcement.link_url || '');
      formData.append('sort_order', String(announcement.sort_order || 0));
      formData.append('is_active', 'true');

      await fetch(`/api/announcements/${announcement.id}`, {
        method: 'PUT',
        body: formData,
      });
      fetchAnnouncements();
    } catch (error) {
      console.error('Error activating announcement:', error);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.6rem 0.8rem',
    background: '#262626',
    border: '1px solid #404040',
    borderRadius: '6px',
    color: 'white',
    fontSize: '0.9rem',
    boxSizing: 'border-box' as const,
  };

  const labelStyle = { color: '#9CA3AF', fontSize: '0.8rem', display: 'block', marginBottom: '0.3rem' };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: 'white', fontSize: '1.5rem' }}>Announcements</h1>
        <button
          onClick={() => { setShowForm(!showForm); setEditingId(null); setForm(emptyForm); setImageFile(null); }}
          style={{
            background: '#E85A24',
            color: 'white',
            border: 'none',
            padding: '0.6rem 1.2rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          {showForm ? 'Cancel' : '+ Add Announcement'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          style={{
            background: '#1A1A1A',
            border: '1px solid #262626',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>{editingId ? 'Edit Announcement' : 'New Announcement'}</h3>
          {formError && (
            <div
              style={{
                marginBottom: '1rem',
                background: 'rgba(239, 68, 68, 0.12)',
                color: '#FCA5A5',
                border: '1px solid rgba(239, 68, 68, 0.5)',
                borderRadius: '8px',
                padding: '0.65rem 0.8rem',
                fontSize: '0.85rem',
              }}
            >
              {formError}
            </div>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Title *</label>
              <input style={inputStyle} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div>
              <label style={labelStyle}>Link URL</label>
              <input style={inputStyle} value={form.link_url} onChange={(e) => setForm({ ...form, link_url: e.target.value })} placeholder="https://..." />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Description</label>
              <textarea
                style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div>
              <label style={labelStyle}>Image {!editingId && '*'}</label>
              <input
                type="file"
                accept={ANNOUNCEMENT_ALLOWED_IMAGE_TYPES.join(',')}
                onChange={(e) => {
                  setFormError('');
                  const selectedFile = e.target.files?.[0] || null;
                  if (!selectedFile) {
                    setImageFile(null);
                    return;
                  }

                  if (!ANNOUNCEMENT_ALLOWED_IMAGE_TYPES.includes(selectedFile.type as (typeof ANNOUNCEMENT_ALLOWED_IMAGE_TYPES)[number])) {
                    setFormError('Invalid image type. Please upload JPG, PNG, WEBP, or GIF.');
                    e.currentTarget.value = '';
                    setImageFile(null);
                    return;
                  }

                  if (selectedFile.size > ANNOUNCEMENT_IMAGE_MAX_BYTES) {
                    setFormError(`Image is too large. Maximum allowed size is ${Math.floor(ANNOUNCEMENT_IMAGE_MAX_BYTES / (1024 * 1024))}MB.`);
                    e.currentTarget.value = '';
                    setImageFile(null);
                    return;
                  }

                  setImageFile(selectedFile);
                }}
                style={{ ...inputStyle, padding: '0.4rem' }}
                required={!editingId}
              />
              <p style={{ color: '#6B7280', fontSize: '0.75rem', marginTop: '0.3rem' }}>
                Max size: {Math.floor(ANNOUNCEMENT_IMAGE_MAX_BYTES / (1024 * 1024))}MB. Allowed: JPG, PNG, WEBP, GIF.
              </p>
              {editingId && <p style={{ color: '#6B7280', fontSize: '0.75rem', marginTop: '0.3rem' }}>Leave empty to keep existing image</p>}
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-end' }}>
              <div>
                <label style={labelStyle}>Sort Order</label>
                <input type="number" style={{ ...inputStyle, width: '80px' }} value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })} />
              </div>
              <label style={{ color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', paddingBottom: '0.6rem' }}>
                <input type="checkbox" checked={form.is_active} onChange={(e) => setForm({ ...form, is_active: e.target.checked })} />
                Active
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={submitting}
            style={{
              marginTop: '1rem',
              background: submitting ? '#9CA3AF' : '#E85A24',
              color: 'white',
              border: 'none',
              padding: '0.6rem 1.5rem',
              borderRadius: '8px',
              cursor: submitting ? 'not-allowed' : 'pointer',
              fontWeight: 600,
            }}
          >
            {submitting ? 'Uploading...' : editingId ? 'Update Announcement' : 'Create Announcement'}
          </button>
        </form>
      )}

      {loading ? (
        <p style={{ color: '#9CA3AF' }}>Loading announcements...</p>
      ) : announcements.length === 0 ? (
        <p style={{ color: '#9CA3AF', textAlign: 'center', padding: '2rem' }}>No announcements yet. Add your first!</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {announcements.map((a) => (
            <div
              key={a.id}
              style={{
                background: '#1A1A1A',
                border: '1px solid #262626',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              {a.image_url && (
                <div style={{ width: '100%', height: '160px', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.image_url}
                    alt={a.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}
              <div style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <h4 style={{ color: 'white', margin: 0, flex: 1 }}>{a.title}</h4>
                  {!a.is_active && (
                    <span style={{ background: '#404040', color: '#9CA3AF', padding: '0.1rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem' }}>
                      INACTIVE
                    </span>
                  )}
                </div>
                {a.description && <p style={{ color: '#9CA3AF', fontSize: '0.82rem', margin: '0 0 0.75rem' }}>{a.description}</p>}
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => handleEdit(a)}
                    style={{ background: '#262626', color: '#9CA3AF', border: '1px solid #404040', padding: '0.35rem 0.7rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}
                  >
                    Edit
                  </button>
                  {!a.is_active && (
                    <button
                      onClick={() => handleActivate(a)}
                      style={{ background: '#1f3f2f', color: '#86efac', border: '1px solid #2f5f45', padding: '0.35rem 0.7rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}
                    >
                      Activate
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(a.id)}
                    style={{ background: '#262626', color: '#EF4444', border: '1px solid #404040', padding: '0.35rem 0.7rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
