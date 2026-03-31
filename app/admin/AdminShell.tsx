'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch('/api/admin/auth', { cache: 'no-store' });
        const data = await response.json();
        setIsAuthenticated(Boolean(data.authenticated));
      } catch {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        return;
      }

      setError('Wrong password');
    } catch {
      setError('Something went wrong');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setIsAuthenticated(false);
    setPassword('');
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#0F0F0F' }}>
        <p style={{ color: '#9CA3AF' }}>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#0F0F0F' }}>
        <form
          onSubmit={handleLogin}
          style={{
            background: '#1A1A1A',
            padding: '2rem',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '400px',
            margin: '1rem',
          }}
        >
          <h1 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Admin Panel</h1>
          <p style={{ color: '#9CA3AF', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Enter the admin password to continue.</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              background: '#262626',
              border: '1px solid #404040',
              borderRadius: '8px',
              color: 'white',
              fontSize: '1rem',
              marginBottom: '1rem',
              boxSizing: 'border-box',
            }}
          />
          {error && <p style={{ color: '#EF4444', fontSize: '0.85rem', marginBottom: '1rem' }}>{error}</p>}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              background: '#E85A24',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0F0F0F' }}>
      <header
        style={{
          background: '#1A1A1A',
          borderBottom: '1px solid #262626',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href="/admin" style={{ color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>
            Ignite Admin
          </Link>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/admin/events" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>
              Events
            </Link>
            <Link href="/admin/announcements" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>
              Announcements
            </Link>
            <Link href="/admin/services" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>
              Services
            </Link>
          </nav>
        </div>
        <button
          onClick={handleLogout}
          style={{
            background: 'transparent',
            border: '1px solid #404040',
            color: '#9CA3AF',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.85rem',
          }}
        >
          Logout
        </button>
      </header>
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>{children}</main>
    </div>
  );
}
