import Link from 'next/link';

export default function AdminDashboard() {
  const cards = [
    { title: 'Events', description: 'Manage upcoming events and calendar', href: '/admin/events', count: null },
    { title: 'Announcements', description: 'Manage homepage announcement slides', href: '/admin/announcements', count: null },
    { title: 'Services', description: 'Manage regular service schedules', href: '/admin/services', count: null },
  ];

  return (
    <div>
      <h1 style={{ color: 'white', fontSize: '1.75rem', marginBottom: '0.5rem' }}>Dashboard</h1>
      <p style={{ color: '#9CA3AF', marginBottom: '2rem' }}>Manage your church website content.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            style={{
              background: '#1A1A1A',
              border: '1px solid #262626',
              borderRadius: '12px',
              padding: '1.5rem',
              textDecoration: 'none',
              transition: 'border-color 0.2s',
            }}
          >
            <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{card.title}</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', margin: 0 }}>{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
