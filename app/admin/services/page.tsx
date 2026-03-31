'use client';
import { useState, useEffect } from 'react';

interface Service {
  id: number;
  title: string;
  day_of_week?: string;
  time: string;
  description: string;
  sort_order: number;
  is_active: boolean;
}

const emptyForm = {
  title: '',
  day_of_week: '',
  time: '',
  description: '',
  sort_order: 0,
  is_active: true,
};

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/services?include_inactive=true');
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingId ? `/api/services/${editingId}` : '/api/services';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm(emptyForm);
        setEditingId(null);
        setShowForm(false);
        fetchServices();
      }
    } catch (error) {
      console.error('Error saving service:', error);
    }
  };

  const handleEdit = (s: Service) => {
    setForm({
      title: s.title,
      day_of_week: s.day_of_week || '',
      time: s.time || '',
      description: s.description || '',
      sort_order: s.sort_order,
      is_active: s.is_active,
    });
    setEditingId(s.id);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this service?')) return;
    try {
      await fetch(`/api/services/${id}`, { method: 'DELETE' });
      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleActivate = async (service: Service) => {
    try {
      await fetch(`/api/services/${service.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: service.title,
          time: service.time,
          description: service.description,
          sort_order: service.sort_order,
          is_active: true,
        }),
      });
      fetchServices();
    } catch (error) {
      console.error('Error activating service:', error);
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

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: 'white', fontSize: '1.5rem' }}>Regular Services</h1>
        <button
          onClick={() => { setShowForm(!showForm); setEditingId(null); setForm(emptyForm); }}
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
          {showForm ? 'Cancel' : '+ Add Service'}
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
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>{editingId ? 'Edit Service' : 'New Service'}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Title *</label>
              <input style={inputStyle} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div>
              <label style={labelStyle}>Day of Week</label>
              <select
                style={inputStyle}
                value={form.day_of_week}
                onChange={(e) => setForm({ ...form, day_of_week: e.target.value })}
              >
                <option value="">No specific day</option>
                {days.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Time *</label>
              <input style={inputStyle} value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} placeholder="e.g. 10:00 AM" required />
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
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Description</label>
              <textarea
                style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
          </div>
          <button
            type="submit"
            style={{
              marginTop: '1rem',
              background: '#E85A24',
              color: 'white',
              border: 'none',
              padding: '0.6rem 1.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            {editingId ? 'Update Service' : 'Create Service'}
          </button>
        </form>
      )}

      {loading ? (
        <p style={{ color: '#9CA3AF' }}>Loading services...</p>
      ) : services.length === 0 ? (
        <p style={{ color: '#9CA3AF', textAlign: 'center', padding: '2rem' }}>No services yet. Add your first!</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {services.map((s) => (
            <div
              key={s.id}
              style={{
                background: '#1A1A1A',
                border: '1px solid #262626',
                borderRadius: '10px',
                padding: '1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                  <h4 style={{ color: 'white', margin: 0 }}>{s.title}</h4>
                  {!s.is_active && (
                    <span style={{ background: '#404040', color: '#9CA3AF', padding: '0.1rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem' }}>
                      INACTIVE
                    </span>
                  )}
                </div>
                <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: 0 }}>
                  {s.day_of_week || 'No specific day'} {s.time && `• ${s.time}`}
                </p>
                {s.description && <p style={{ color: '#6B7280', fontSize: '0.8rem', margin: '0.25rem 0 0' }}>{s.description}</p>}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => handleEdit(s)}
                  style={{ background: '#262626', color: '#9CA3AF', border: '1px solid #404040', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  Edit
                </button>
                {!s.is_active && (
                  <button
                    onClick={() => handleActivate(s)}
                    style={{ background: '#1f3f2f', color: '#86efac', border: '1px solid #2f5f45', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}
                  >
                    Activate
                  </button>
                )}
                <button
                  onClick={() => handleDelete(s.id)}
                  style={{ background: '#262626', color: '#EF4444', border: '1px solid #404040', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
