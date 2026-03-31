'use client';
import { useState, useEffect } from 'react';

interface Event {
  id: number;
  title: string;
  description: string;
  event_date: string;
  event_time: string;
  location: string;
  featured: boolean;
  sort_order: number;
  is_active: boolean;
}

const emptyEvent = {
  title: '',
  description: '',
  event_date: '',
  event_time: '',
  location: '',
  featured: false,
  sort_order: 0,
  is_active: true,
};

export default function AdminEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [form, setForm] = useState(emptyEvent);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events?include_inactive=true');
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingId ? `/api/events/${editingId}` : '/api/events';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm(emptyEvent);
        setEditingId(null);
        setShowForm(false);
        fetchEvents();
      }
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const handleEdit = (event: Event) => {
    setForm({
      title: event.title,
      description: event.description || '',
      event_date: event.event_date?.split('T')[0] || '',
      event_time: event.event_time || '',
      location: event.location || '',
      featured: event.featured,
      sort_order: event.sort_order,
      is_active: event.is_active,
    });
    setEditingId(event.id);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this event?')) return;
    try {
      await fetch(`/api/events/${id}`, { method: 'DELETE' });
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleActivate = async (event: Event) => {
    try {
      await fetch(`/api/events/${event.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: event.title,
          description: event.description,
          event_date: event.event_date?.split('T')[0] || event.event_date,
          event_time: event.event_time,
          location: event.location,
          featured: event.featured,
          sort_order: event.sort_order,
          is_active: true,
        }),
      });
      fetchEvents();
    } catch (error) {
      console.error('Error activating event:', error);
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
        <h1 style={{ color: 'white', fontSize: '1.5rem' }}>Events</h1>
        <button
          onClick={() => { setShowForm(!showForm); setEditingId(null); setForm(emptyEvent); }}
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
          {showForm ? 'Cancel' : '+ Add Event'}
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
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>{editingId ? 'Edit Event' : 'New Event'}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Title *</label>
              <input style={inputStyle} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div>
              <label style={labelStyle}>Date *</label>
              <input type="date" style={inputStyle} value={form.event_date} onChange={(e) => setForm({ ...form, event_date: e.target.value })} required />
            </div>
            <div>
              <label style={labelStyle}>Time</label>
              <input style={inputStyle} value={form.event_time} onChange={(e) => setForm({ ...form, event_time: e.target.value })} placeholder="e.g. 10:00 AM" />
            </div>
            <div>
              <label style={labelStyle}>Location</label>
              <input style={inputStyle} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="e.g. Ignite Church" />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Description</label>
              <textarea
                style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <label style={{ color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} />
                Featured
              </label>
              <label style={{ color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="checkbox" checked={form.is_active} onChange={(e) => setForm({ ...form, is_active: e.target.checked })} />
                Active
              </label>
            </div>
            <div>
              <label style={labelStyle}>Sort Order</label>
              <input type="number" style={inputStyle} value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })} />
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
            {editingId ? 'Update Event' : 'Create Event'}
          </button>
        </form>
      )}

      {loading ? (
        <p style={{ color: '#9CA3AF' }}>Loading events...</p>
      ) : events.length === 0 ? (
        <p style={{ color: '#9CA3AF', textAlign: 'center', padding: '2rem' }}>No events yet. Add your first event!</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {events.map((event) => (
            <div
              key={event.id}
              style={{
                background: '#1A1A1A',
                border: `1px solid ${event.featured ? '#E85A24' : '#262626'}`,
                borderRadius: '10px',
                padding: '1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                  <h4 style={{ color: 'white', margin: 0 }}>{event.title}</h4>
                  {event.featured && (
                    <span style={{ background: '#E85A24', color: 'white', padding: '0.1rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>
                      FEATURED
                    </span>
                  )}
                  {!event.is_active && (
                    <span style={{ background: '#404040', color: '#9CA3AF', padding: '0.1rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem' }}>
                      INACTIVE
                    </span>
                  )}
                </div>
                <p style={{ color: '#9CA3AF', fontSize: '0.85rem', margin: 0 }}>
                  {event.event_date?.split('T')[0]} {event.event_time && `• ${event.event_time}`} {event.location && `• ${event.location}`}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => handleEdit(event)}
                  style={{ background: '#262626', color: '#9CA3AF', border: '1px solid #404040', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  Edit
                </button>
                {!event.is_active && (
                  <button
                    onClick={() => handleActivate(event)}
                    style={{ background: '#1f3f2f', color: '#86efac', border: '1px solid #2f5f45', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}
                  >
                    Activate
                  </button>
                )}
                <button
                  onClick={() => handleDelete(event.id)}
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
