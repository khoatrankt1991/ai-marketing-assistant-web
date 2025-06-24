'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const bottomMenuItems = [
  { href: '/', icon: 'fas fa-home', label: 'Trang chủ' },
  { href: '/create-content', icon: 'fas fa-edit', label: 'Tạo bài' },
  { href: '/schedule', icon: 'fas fa-calendar-alt', label: 'Lịch đăng' },
  { href: '/chatbot', icon: 'fas fa-comments', label: 'Chatbot' },
  { href: '/analytics', icon: 'fas fa-chart-line', label: 'Báo cáo' },
];

export default function BottomMenu() {
  const pathname = usePathname();

  return (
    <nav className="bottom-menu">
      <div className="bottom-menu-items">
        {bottomMenuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`bottom-menu-item ${pathname === item.href ? 'active' : ''}`}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
} 