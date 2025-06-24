'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import BottomMenu from '../components/BottomMenu';

interface ScheduledPost {
  id: number;
  title: string;
  platform: string;
  scheduledTime: string;
  status: 'scheduled' | 'published' | 'draft';
  content: string;
}

export default function Schedule() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [scheduledPosts] = useState<ScheduledPost[]>([
    {
      id: 1,
      title: 'Khuyến mãi cuối tuần',
      platform: 'Facebook',
      scheduledTime: '2024-01-15 09:00',
      status: 'scheduled',
      content: '🎉 Khuyến mãi cuối tuần với ưu đãi lên đến 50%...'
    },
    {
      id: 2,
      title: 'Tips chăm sóc da',
      platform: 'Instagram',
      scheduledTime: '2024-01-15 14:00',
      status: 'scheduled',
      content: '💆‍♀️ Bí quyết chăm sóc da mùa khô...'
    },
    {
      id: 3,
      title: 'Sản phẩm mới ra mắt',
      platform: 'LinkedIn',
      scheduledTime: '2024-01-16 10:00',
      status: 'draft',
      content: '🚀 Chúng tôi tự hào giới thiệu sản phẩm mới...'
    }
  ]);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return '#667eea';
      case 'published': return '#28a745';
      case 'draft': return '#ffc107';
      default: return '#6c757d';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'scheduled': return 'Đã lên lịch';
      case 'published': return 'Đã đăng';
      case 'draft': return 'Bản nháp';
      default: return 'Không xác định';
    }
  };

  return (
    <div className="container">
      <Sidebar isMobileOpen={isMobileOpen} onToggleMobile={toggleMobileMenu} />

      <main className="main-content">
        <div className="top-bar">
          <div className="page-title">
            <h2>Lên lịch đăng bài</h2>
            <p>Lên lịch và tự động đăng nội dung lên mạng xã hội</p>
          </div>
          <div className="user-profile">
            <div className="user-avatar">A</div>
            <div>
              <div style={{ fontWeight: 600, color: '#333' }}>Admin User</div>
              <div style={{ fontSize: '12px', color: '#666' }}>Gói Nâng cao</div>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="card">
            <h3><i className="fas fa-calendar-alt"></i>Lịch đăng bài</h3>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="date"
                value={selectedDate.toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                style={{
                  padding: '10px',
                  border: '2px solid #f0f0f0',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              />
            </div>
            
            <div style={{ display: 'grid', gap: '15px' }}>
              {scheduledPosts.map((post) => (
                <div
                  key={post.id}
                  style={{
                    padding: '15px',
                    border: '1px solid #f0f0f0',
                    borderRadius: '12px',
                    backgroundColor: 'white'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h4 style={{ margin: 0, color: '#333' }}>{post.title}</h4>
                    <span
                      style={{
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        backgroundColor: getStatusColor(post.status),
                        color: 'white'
                      }}
                    >
                      {getStatusText(post.status)}
                    </span>
                  </div>
                  <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>
                    <i className="fas fa-clock" style={{ marginRight: '5px' }}></i>
                    {post.scheduledTime}
                  </p>
                  <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>
                    <i className="fas fa-share-alt" style={{ marginRight: '5px' }}></i>
                    {post.platform}
                  </p>
                  <p style={{ margin: '10px 0 0 0', color: '#333', fontSize: '13px' }}>
                    {post.content.substring(0, 100)}...
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3><i className="fas fa-chart-bar"></i>Thống kê lịch đăng</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">24</div>
                <div className="stat-label">Bài đã lên lịch</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">18</div>
                <div className="stat-label">Bài đã đăng</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6</div>
                <div className="stat-label">Bản nháp</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Đúng giờ</div>
              </div>
            </div>
          </div>

          <div className="card content-creator">
            <h3><i className="fas fa-plus"></i>Lên lịch bài mới</h3>
            
            <div className="input-group">
              <label>Tiêu đề bài viết</label>
              <input 
                type="text" 
                placeholder="Nhập tiêu đề bài viết..."
              />
            </div>
            
            <div className="input-group">
              <label>Nội dung</label>
              <textarea 
                placeholder="Nhập nội dung bài viết..."
                rows={4}
              />
            </div>
            
            <div className="input-group">
              <label>Thời gian đăng</label>
              <input 
                type="datetime-local"
                style={{
                  padding: '12px 16px',
                  border: '2px solid #f0f0f0',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              />
            </div>
            
            <div className="input-group">
              <label>Nền tảng</label>
              <select>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>LinkedIn</option>
                <option>Tất cả</option>
              </select>
            </div>
            
            <button className="generate-btn">
              <i className="fas fa-calendar-plus"></i>
              Lên lịch đăng bài
            </button>
          </div>

          <div className="card recent-activity">
            <h3><i className="fas fa-history"></i>Hoạt động gần đây</h3>
            <ul className="activity-list">
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Đăng bài &ldquo;Khuyến mãi cuối tuần&rdquo;</div>
                  <div className="activity-time">2 giờ trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-calendar-plus"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Lên lịch 3 bài viết cho tuần tới</div>
                  <div className="activity-time">4 giờ trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-edit"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Chỉnh sửa lịch đăng bài</div>
                  <div className="activity-time">1 ngày trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-share"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Đăng bài &ldquo;Tips chăm sóc da&rdquo;</div>
                  <div className="activity-time">2 ngày trước</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <BottomMenu />
    </div>
  );
} 