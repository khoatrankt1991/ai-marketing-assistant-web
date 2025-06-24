'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import BottomMenu from '../components/BottomMenu';

interface SocialAccount {
  id: string;
  platform: string;
  name: string;
  followers: number;
  status: 'connected' | 'disconnected';
  lastSync: string;
}

export default function SocialMedia() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const socialAccounts: SocialAccount[] = [
    {
      id: 'fb1',
      platform: 'Facebook',
      name: 'Công ty ABC',
      followers: 12500,
      status: 'connected',
      lastSync: '2 giờ trước'
    },
    {
      id: 'ig1',
      platform: 'Instagram',
      name: '@congtyabc',
      followers: 8900,
      status: 'connected',
      lastSync: '1 giờ trước'
    },
    {
      id: 'li1',
      platform: 'LinkedIn',
      name: 'Công ty ABC',
      followers: 3200,
      status: 'connected',
      lastSync: '30 phút trước'
    }
  ];

  const recentPosts = [
    { title: 'Khuyến mãi cuối tuần', platform: 'Facebook', engagement: 234, time: '2 giờ trước' },
    { title: 'Tips chăm sóc da', platform: 'Instagram', engagement: 189, time: '4 giờ trước' },
    { title: 'Sản phẩm mới ra mắt', platform: 'LinkedIn', engagement: 67, time: '1 ngày trước' },
    { title: 'Hướng dẫn sử dụng', platform: 'Facebook', engagement: 156, time: '2 ngày trước' },
  ];

  return (
    <div className="container">
      <Sidebar isMobileOpen={isMobileOpen} onToggleMobile={toggleMobileMenu} />

      <main className="main-content">
        <div className="top-bar">
          <div className="page-title">
            <h2>Quản lý mạng xã hội</h2>
            <p>Kết nối và quản lý tài khoản mạng xã hội</p>
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
            <h3><i className="fas fa-link"></i>Tài khoản đã kết nối</h3>
            <div style={{ display: 'grid', gap: '15px' }}>
              {socialAccounts.map((account) => (
                <div
                  key={account.id}
                  style={{
                    padding: '15px',
                    border: '1px solid #f0f0f0',
                    borderRadius: '12px',
                    backgroundColor: 'white'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i 
                        className={`fab fa-${account.platform.toLowerCase()}`}
                        style={{ 
                          fontSize: '20px',
                          color: account.platform === 'Facebook' ? '#1877f2' : 
                                 account.platform === 'Instagram' ? '#e4405f' : '#0077b5'
                        }}
                      ></i>
                      <div>
                        <h4 style={{ margin: 0, color: '#333' }}>{account.name}</h4>
                        <p style={{ margin: 0, color: '#666', fontSize: '12px' }}>{account.platform}</p>
                      </div>
                    </div>
                    <span
                      style={{
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        backgroundColor: account.status === 'connected' ? '#28a745' : '#dc3545',
                        color: 'white'
                      }}
                    >
                      {account.status === 'connected' ? 'Đã kết nối' : 'Ngắt kết nối'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#666', fontSize: '14px' }}>
                      <i className="fas fa-users" style={{ marginRight: '5px' }}></i>
                      {account.followers.toLocaleString()} người theo dõi
                    </span>
                    <span style={{ color: '#999', fontSize: '12px' }}>
                      Đồng bộ: {account.lastSync}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3><i className="fas fa-chart-bar"></i>Thống kê tổng hợp</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Tài khoản kết nối</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24,600</div>
                <div className="stat-label">Tổng người theo dõi</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95</div>
                <div className="stat-label">Bài viết đã đăng</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4,686</div>
                <div className="stat-label">Tổng tương tác</div>
              </div>
            </div>
          </div>

          <div className="card content-creator">
            <h3><i className="fas fa-plus"></i>Kết nối tài khoản mới</h3>
            
            <div className="input-group">
              <label>Chọn nền tảng</label>
              <select>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>LinkedIn</option>
                <option>Twitter</option>
                <option>TikTok</option>
              </select>
            </div>
            
            <div className="input-group">
              <label>Loại tài khoản</label>
              <select>
                <option>Trang cá nhân</option>
                <option>Trang doanh nghiệp</option>
                <option>Nhóm</option>
              </select>
            </div>
            
            <div className="input-group">
              <label>Quyền truy cập</label>
              <div style={{ display: 'grid', gap: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" defaultChecked />
                  <span>Đăng bài</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" defaultChecked />
                  <span>Xem thống kê</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" defaultChecked />
                  <span>Trả lời bình luận</span>
                </label>
              </div>
            </div>
            
            <button className="generate-btn">
              <i className="fas fa-link"></i>
              Kết nối tài khoản
            </button>
          </div>

          <div className="card recent-activity">
            <h3><i className="fas fa-history"></i>Bài viết gần đây</h3>
            <ul className="activity-list">
              {recentPosts.map((post, index) => (
                <li key={index} className="activity-item">
                  <div className="activity-icon">
                    <i className="fas fa-share"></i>
                  </div>
                  <div className="activity-content">
                    <div className="activity-title">{post.title}</div>
                    <div className="activity-time">
                      {post.engagement} tương tác • {post.platform} • {post.time}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3><i className="fas fa-cog"></i>Cài đặt tự động</h3>
            <div style={{ display: 'grid', gap: '15px' }}>
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>Tự động đăng bài</span>
                  <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                    <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                    <span style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: '#667eea',
                      borderRadius: '24px',
                      transition: '0.4s'
                    }}></span>
                  </label>
                </div>
              </div>
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>Đồng bộ bình luận</span>
                  <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                    <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                    <span style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: '#667eea',
                      borderRadius: '24px',
                      transition: '0.4s'
                    }}></span>
                  </label>
                </div>
              </div>
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>Thông báo tương tác</span>
                  <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                    <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
                    <span style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: '#ccc',
                      borderRadius: '24px',
                      transition: '0.4s'
                    }}></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomMenu />
    </div>
  );
} 