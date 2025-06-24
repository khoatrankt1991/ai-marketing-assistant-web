'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isMobileOpen: boolean;
  onToggleMobile: () => void;
}

const navItems = [
  { href: '/', icon: 'fas fa-home', label: 'Dashboard' },
  { href: '/create-content', icon: 'fas fa-edit', label: 'Tạo nội dung' },
  { href: '/schedule', icon: 'fas fa-calendar-alt', label: 'Lên lịch đăng' },
  { href: '/chatbot', icon: 'fas fa-comments', label: 'AI Chatbot' },
  { href: '/social-media', icon: 'fas fa-share-alt', label: 'Mạng xã hội' },
  { href: '/analytics', icon: 'fas fa-chart-line', label: 'Báo cáo' },
  { href: '/strategy', icon: 'fas fa-lightbulb', label: 'Gợi ý chiến lược' },
  { href: '/settings', icon: 'fas fa-cog', label: 'Cài đặt' },
];

export default function Sidebar({ isMobileOpen, onToggleMobile }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <button 
        className="hamburger-menu" 
        onClick={onToggleMobile}
        aria-label="Toggle menu"
      >
        <i className="fas fa-bars"></i>
      </button>

      <div 
        className={`mobile-overlay ${isMobileOpen ? 'active' : ''}`} 
        onClick={onToggleMobile}
      />

      <nav className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="logo">
          <i className="fas fa-robot"></i>
          <h1>AI Marketing</h1>
        </div>
        
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.href} className="nav-item">
              <Link 
                href={item.href} 
                className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                onClick={() => {
                  if (window.innerWidth <= 768) {
                    onToggleMobile();
                  }
                }}
              >
                <i className={item.icon}></i>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
} 