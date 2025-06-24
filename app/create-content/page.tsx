'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import BottomMenu from '../components/BottomMenu';

export default function CreateContent() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('post');
  const [selectedPlatforms, setSelectedPlatforms] = useState(['facebook', 'instagram']);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const templates = [
    { id: 'post', name: 'Bài viết thường', icon: 'fas fa-file-alt' },
    { id: 'story', name: 'Story/Reel', icon: 'fas fa-play-circle' },
    { id: 'carousel', name: 'Carousel', icon: 'fas fa-images' },
    { id: 'video', name: 'Video', icon: 'fas fa-video' },
    { id: 'poll', name: 'Khảo sát', icon: 'fas fa-poll' },
    { id: 'event', name: 'Sự kiện', icon: 'fas fa-calendar-plus' },
  ];

  return (
    <div className="container">
      <Sidebar isMobileOpen={isMobileOpen} onToggleMobile={toggleMobileMenu} />

      <main className="main-content">
        <div className="top-bar">
          <div className="page-title">
            <h2>Tạo nội dung</h2>
            <p>Tạo nội dung marketing chất lượng với AI</p>
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
            <h3><i className="fas fa-magic"></i>Chọn mẫu nội dung</h3>
            <div className="quick-actions">
              {templates.map((template) => (
                <button 
                  key={template.id}
                  className={`action-btn ${selectedTemplate === template.id ? 'active' : ''}`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <i className={template.icon}></i>
                  {template.name}
                </button>
              ))}
            </div>
          </div>

          <div className="card">
            <h3><i className="fas fa-chart-line"></i>Thống kê nội dung</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">156</div>
                <div className="stat-label">Bài viết đã tạo</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">89%</div>
                <div className="stat-label">Tỷ lệ tương tác</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24</div>
                <div className="stat-label">Bài viết tháng này</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Mẫu đã lưu</div>
              </div>
            </div>
          </div>

          <div className="card content-creator">
            <h3><i className="fas fa-edit"></i>Tạo nội dung mới</h3>
            
            <div className="input-group">
              <label>Chủ đề/Từ khóa</label>
              <input 
                type="text" 
                placeholder="VD: Khuyến mãi mùa hè, sản phẩm mới, tips làm đẹp..."
              />
            </div>
            
            <div className="input-group">
              <label>Loại nội dung</label>
              <select>
                <option>Bài viết thường</option>
                <option>Story/Reel</option>
                <option>Carousel</option>
                <option>Video</option>
                <option>Khảo sát</option>
                <option>Sự kiện</option>
              </select>
            </div>
            
            <div className="input-group">
              <label>Mục tiêu bài viết</label>
              <select>
                <option>Tăng tương tác</option>
                <option>Bán hàng</option>
                <option>Xây dựng thương hiệu</option>
                <option>Giới thiệu sản phẩm</option>
                <option>Giáo dục khách hàng</option>
              </select>
            </div>
            
            <div className="input-group">
              <label>Thông tin bổ sung (tùy chọn)</label>
              <textarea 
                placeholder="Mô tả thêm về sản phẩm, dịch vụ hoặc thông điệp bạn muốn truyền tải..."
              />
            </div>
            
            <div className="input-group">
              <label>Chọn nền tảng đăng</label>
              <div className="platforms">
                <div 
                  className={`platform-btn ${selectedPlatforms.includes('facebook') ? 'active' : ''}`}
                  onClick={() => handlePlatformToggle('facebook')}
                >
                  <i className="fab fa-facebook facebook"></i>
                  Facebook
                </div>
                <div 
                  className={`platform-btn ${selectedPlatforms.includes('instagram') ? 'active' : ''}`}
                  onClick={() => handlePlatformToggle('instagram')}
                >
                  <i className="fab fa-instagram instagram"></i>
                  Instagram
                </div>
                <div 
                  className={`platform-btn ${selectedPlatforms.includes('linkedin') ? 'active' : ''}`}
                  onClick={() => handlePlatformToggle('linkedin')}
                >
                  <i className="fab fa-linkedin linkedin"></i>
                  LinkedIn
                </div>
              </div>
            </div>
            
            <button className="generate-btn">
              <i className="fas fa-magic"></i>
              Tạo nội dung với AI
            </button>
          </div>

          <div className="card recent-activity">
            <h3><i className="fas fa-history"></i>Nội dung gần đây</h3>
            <ul className="activity-list">
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-edit"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Tạo bài viết &ldquo;Khuyến mãi cuối tuần&rdquo;</div>
                  <div className="activity-time">2 giờ trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-play-circle"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Tạo Story &ldquo;Tips chăm sóc da&rdquo;</div>
                  <div className="activity-time">4 giờ trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-images"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Tạo Carousel &ldquo;Sản phẩm mới&rdquo;</div>
                  <div className="activity-time">1 ngày trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-video"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Tạo Video &ldquo;Hướng dẫn sử dụng&rdquo;</div>
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