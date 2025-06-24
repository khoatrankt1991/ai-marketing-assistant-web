'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import BottomMenu from '../components/BottomMenu';

export default function Analytics() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const performanceData = [
    { platform: 'Facebook', posts: 45, engagement: 2340, reach: 12500, clicks: 890 },
    { platform: 'Instagram', posts: 32, engagement: 1890, reach: 8900, clicks: 567 },
    { platform: 'LinkedIn', posts: 18, engagement: 456, reach: 3200, clicks: 234 },
  ];

  const topPosts = [
    { title: 'Khuyến mãi cuối tuần', engagement: 456, reach: 2300, platform: 'Facebook' },
    { title: 'Tips chăm sóc da', engagement: 389, reach: 1800, platform: 'Instagram' },
    { title: 'Sản phẩm mới ra mắt', engagement: 234, reach: 1200, platform: 'LinkedIn' },
    { title: 'Hướng dẫn sử dụng', engagement: 198, reach: 950, platform: 'Facebook' },
  ];

  return (
    <div className="container">
      <Sidebar isMobileOpen={isMobileOpen} onToggleMobile={toggleMobileMenu} />

      <main className="main-content">
        <div className="top-bar">
          <div className="page-title">
            <h2>Báo cáo & Phân tích</h2>
            <p>Theo dõi hiệu quả marketing và tối ưu hóa chiến lược</p>
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
            <h3><i className="fas fa-chart-line"></i>Tổng quan hiệu quả</h3>
            <div style={{ marginBottom: '20px' }}>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                style={{
                  padding: '8px 12px',
                  border: '2px solid #f0f0f0',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              >
                <option value="week">Tuần này</option>
                <option value="month">Tháng này</option>
                <option value="quarter">Quý này</option>
                <option value="year">Năm nay</option>
              </select>
            </div>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">95</div>
                <div className="stat-label">Bài viết</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4,686</div>
                <div className="stat-label">Tương tác</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24,600</div>
                <div className="stat-label">Tiếp cận</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1,691</div>
                <div className="stat-label">Lượt click</div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3><i className="fas fa-chart-pie"></i>Hiệu quả theo nền tảng</h3>
            <div style={{ display: 'grid', gap: '15px' }}>
              {performanceData.map((data, index) => (
                <div
                  key={index}
                  style={{
                    padding: '15px',
                    border: '1px solid #f0f0f0',
                    borderRadius: '12px',
                    backgroundColor: 'white'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h4 style={{ margin: 0, color: '#333' }}>{data.platform}</h4>
                    <span style={{ color: '#667eea', fontWeight: '600' }}>{data.posts} bài</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', fontSize: '12px' }}>
                    <div>
                      <div style={{ color: '#666' }}>Tương tác</div>
                      <div style={{ fontWeight: '600', color: '#333' }}>{data.engagement}</div>
                    </div>
                    <div>
                      <div style={{ color: '#666' }}>Tiếp cận</div>
                      <div style={{ fontWeight: '600', color: '#333' }}>{data.reach}</div>
                    </div>
                    <div>
                      <div style={{ color: '#666' }}>Lượt click</div>
                      <div style={{ fontWeight: '600', color: '#333' }}>{data.clicks}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card content-creator">
            <h3><i className="fas fa-filter"></i>Bộ lọc báo cáo</h3>
            
            <div className="input-group">
              <label>Khoảng thời gian</label>
              <select>
                <option>7 ngày qua</option>
                <option>30 ngày qua</option>
                <option>90 ngày qua</option>
                <option>Tùy chỉnh</option>
              </select>
            </div>
            
            <div className="input-group">
              <label>Nền tảng</label>
              <div className="platforms">
                <div className="platform-btn active">
                  <i className="fab fa-facebook facebook"></i>
                  Facebook
                </div>
                <div className="platform-btn active">
                  <i className="fab fa-instagram instagram"></i>
                  Instagram
                </div>
                <div className="platform-btn active">
                  <i className="fab fa-linkedin linkedin"></i>
                  LinkedIn
                </div>
              </div>
            </div>
            
            <div className="input-group">
              <label>Loại nội dung</label>
              <select>
                <option>Tất cả</option>
                <option>Bài viết</option>
                <option>Story/Reel</option>
                <option>Video</option>
                <option>Carousel</option>
              </select>
            </div>
            
            <button className="generate-btn">
              <i className="fas fa-download"></i>
              Xuất báo cáo
            </button>
          </div>

          <div className="card recent-activity">
            <h3><i className="fas fa-trophy"></i>Bài viết hiệu quả nhất</h3>
            <ul className="activity-list">
              {topPosts.map((post, index) => (
                <li key={index} className="activity-item">
                  <div className="activity-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="activity-content">
                    <div className="activity-title">{post.title}</div>
                    <div className="activity-time">
                      {post.engagement} tương tác • {post.reach} tiếp cận • {post.platform}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3><i className="fas fa-trending-up"></i>Xu hướng tăng trưởng</h3>
            <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
              <div style={{ textAlign: 'center', color: '#667eea' }}>
                <i className="fas fa-chart-area" style={{ fontSize: '48px', marginBottom: '10px' }}></i>
                <div>Biểu đồ tăng trưởng</div>
                <div style={{ fontSize: '12px', marginTop: '5px' }}>Tương tác tăng 23% so với tuần trước</div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3><i className="fas fa-users"></i>Phân tích đối tượng</h3>
            <div style={{ display: 'grid', gap: '15px' }}>
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>Độ tuổi chính</span>
                  <span style={{ color: '#667eea', fontWeight: '600' }}>25-34</span>
                </div>
              </div>
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>Giới tính</span>
                  <span style={{ color: '#667eea', fontWeight: '600' }}>Nữ (65%)</span>
                </div>
              </div>
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>Khu vực</span>
                  <span style={{ color: '#667eea', fontWeight: '600' }}>TP.HCM</span>
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