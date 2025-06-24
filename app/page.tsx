'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import BottomMenu from './components/BottomMenu';

export default function Home() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
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

  const handleGenerateContent = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      alert('Đã tạo thành công bài viết! (Demo)');
    }, 2000);
  };

  const handleQuickAction = (action: string) => {
    alert(`Chuyển đến: ${action} (Demo)`);
  };

  return (
    <div className="container">
      <Sidebar isMobileOpen={isMobileOpen} onToggleMobile={toggleMobileMenu} />

      <main className="main-content">
        <div className="top-bar">
          <div className="welcome-text">
            <h2>Chào mừng trở lại!</h2>
            <p>Hãy cùng tạo nên những chiến dịch marketing tuyệt vời</p>
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
            <h3><i className="fas fa-rocket"></i>Hành động nhanh</h3>
            <div className="quick-actions">
              <button 
                className="action-btn"
                onClick={() => handleQuickAction('Tạo bài viết AI')}
              >
                <i className="fas fa-magic"></i>
                Tạo bài viết AI
              </button>
              <button 
                className="action-btn"
                onClick={() => handleQuickAction('Lên lịch đăng')}
              >
                <i className="fas fa-clock"></i>
                Lên lịch đăng
              </button>
              <button 
                className="action-btn"
                onClick={() => handleQuickAction('Cài đặt Chatbot')}
              >
                <i className="fas fa-robot"></i>
                Cài đặt Chatbot
              </button>
              <button 
                className="action-btn"
                onClick={() => handleQuickAction('Kết nối tài khoản')}
              >
                <i className="fas fa-link"></i>
                Kết nối tài khoản
              </button>
            </div>
          </div>

          <div className="card">
            <h3><i className="fas fa-chart-bar"></i>Thống kê nhanh</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">24</div>
                <div className="stat-label">Bài viết tháng này</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">156</div>
                <div className="stat-label">Tương tác</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Nền tảng kết nối</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">89%</div>
                <div className="stat-label">Chatbot hiệu quả</div>
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
            
            <button 
              className="generate-btn"
              onClick={handleGenerateContent}
              disabled={isGenerating}
            >
              <i className={isGenerating ? 'fas fa-spinner fa-spin' : 'fas fa-magic'}></i>
              {isGenerating ? 'Đang tạo nội dung...' : 'Tạo bài viết với AI'}
            </button>
          </div>

          <div className="card recent-activity">
            <h3><i className="fas fa-history"></i>Hoạt động gần đây</h3>
            <ul className="activity-list">
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-share"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Đăng bài &ldquo;Khuyến mãi cuối tuần&rdquo; lên Facebook</div>
                  <div className="activity-time">2 giờ trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Chatbot trả lời 15 câu hỏi khách hàng</div>
                  <div className="activity-time">4 giờ trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-edit"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Tạo bài viết &ldquo;Tips chăm sóc da mùa khô&rdquo;</div>
                  <div className="activity-time">1 ngày trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-calendar"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Lên lịch 5 bài viết cho tuần tới</div>
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
