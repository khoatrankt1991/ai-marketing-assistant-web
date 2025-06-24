'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import BottomMenu from '../components/BottomMenu';

interface Strategy {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  impact: number;
}

export default function Strategy() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const strategies: Strategy[] = [
    {
      id: 1,
      title: 'Tăng tần suất đăng bài',
      description: 'Đăng bài 3-5 lần/tuần để duy trì sự hiện diện và tăng tương tác',
      category: 'Content',
      priority: 'high',
      impact: 85
    },
    {
      id: 2,
      title: 'Tối ưu hóa thời gian đăng',
      description: 'Đăng bài vào 19:00-21:00 để đạt hiệu quả tương tác cao nhất',
      category: 'Timing',
      priority: 'high',
      impact: 78
    },
    {
      id: 3,
      title: 'Sử dụng hashtag phù hợp',
      description: 'Nghiên cứu và sử dụng hashtag trending để tăng khả năng tiếp cận',
      category: 'Content',
      priority: 'medium',
      impact: 65
    },
    {
      id: 4,
      title: 'Tạo nội dung video',
      description: 'Tăng tỷ lệ nội dung video lên 40% để tăng engagement',
      category: 'Content',
      priority: 'medium',
      impact: 72
    },
    {
      id: 5,
      title: 'Tương tác với khách hàng',
      description: 'Trả lời bình luận trong vòng 2 giờ để tăng sự tin tưởng',
      category: 'Engagement',
      priority: 'high',
      impact: 90
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#dc3545';
      case 'medium': return '#ffc107';
      case 'low': return '#28a745';
      default: return '#6c757d';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return 'Cao';
      case 'medium': return 'Trung bình';
      case 'low': return 'Thấp';
      default: return 'Không xác định';
    }
  };

  return (
    <div className="container">
      <Sidebar isMobileOpen={isMobileOpen} onToggleMobile={toggleMobileMenu} />

      <main className="main-content">
        <div className="top-bar">
          <div className="page-title">
            <h2>Gợi ý chiến lược</h2>
            <p>AI phân tích và đề xuất chiến lược marketing tối ưu</p>
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
            <h3><i className="fas fa-lightbulb"></i>Chiến lược được đề xuất</h3>
            <div style={{ marginBottom: '20px' }}>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  padding: '8px 12px',
                  border: '2px solid #f0f0f0',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              >
                <option value="all">Tất cả danh mục</option>
                <option value="Content">Nội dung</option>
                <option value="Timing">Thời gian</option>
                <option value="Engagement">Tương tác</option>
                <option value="Audience">Đối tượng</option>
              </select>
            </div>
            
            <div style={{ display: 'grid', gap: '15px' }}>
              {strategies
                .filter(strategy => selectedCategory === 'all' || strategy.category === selectedCategory)
                .map((strategy) => (
                <div
                  key={strategy.id}
                  style={{
                    padding: '15px',
                    border: '1px solid #f0f0f0',
                    borderRadius: '12px',
                    backgroundColor: 'white'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <h4 style={{ margin: 0, color: '#333', flex: 1 }}>{strategy.title}</h4>
                    <span
                      style={{
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        backgroundColor: getPriorityColor(strategy.priority),
                        color: 'white',
                        marginLeft: '10px'
                      }}
                    >
                      {getPriorityText(strategy.priority)}
                    </span>
                  </div>
                  <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>
                    {strategy.description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                    <span style={{ color: '#999', fontSize: '12px' }}>
                      <i className="fas fa-tag" style={{ marginRight: '5px' }}></i>
                      {strategy.category}
                    </span>
                    <span style={{ color: '#667eea', fontWeight: '600', fontSize: '14px' }}>
                      Tác động: {strategy.impact}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3><i className="fas fa-chart-line"></i>Hiệu quả chiến lược</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">85%</div>
                <div className="stat-label">Tăng tương tác</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">23%</div>
                <div className="stat-label">Tăng tiếp cận</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">156%</div>
                <div className="stat-label">Tăng chuyển đổi</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Chiến lược áp dụng</div>
              </div>
            </div>
          </div>

          <div className="card content-creator">
            <h3><i className="fas fa-magic"></i>Phân tích chiến lược</h3>
            
            <div className="input-group">
              <label>Lĩnh vực kinh doanh</label>
              <select>
                <option>Thời trang & Làm đẹp</option>
                <option>Thực phẩm & Đồ uống</option>
                <option>Công nghệ</option>
                <option>Giáo dục</option>
                <option>Dịch vụ</option>
              </select>
            </div>
            
            <div className="input-group">
              <label>Mục tiêu chính</label>
              <select>
                <option>Tăng tương tác</option>
                <option>Tăng doanh số</option>
                <option>Xây dựng thương hiệu</option>
                <option>Tăng người theo dõi</option>
                <option>Quảng bá sản phẩm</option>
              </select>
            </div>
            
            <div className="input-group">
              <label>Ngân sách marketing</label>
              <select>
                <option>Dưới 5 triệu/tháng</option>
                <option>5-10 triệu/tháng</option>
                <option>10-20 triệu/tháng</option>
                <option>Trên 20 triệu/tháng</option>
              </select>
            </div>
            
            <div className="input-group">
              <label>Đối tượng mục tiêu</label>
              <textarea 
                placeholder="Mô tả đối tượng khách hàng mục tiêu..."
                rows={3}
              />
            </div>
            
            <button className="generate-btn">
              <i className="fas fa-brain"></i>
              Phân tích và đề xuất
            </button>
          </div>

          <div className="card recent-activity">
            <h3><i className="fas fa-history"></i>Chiến lược đã áp dụng</h3>
            <ul className="activity-list">
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Áp dụng chiến lược tăng tần suất đăng bài</div>
                  <div className="activity-time">Tăng 45% tương tác • 1 tuần trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Tối ưu hóa thời gian đăng bài</div>
                  <div className="activity-time">Tăng 32% tiếp cận • 2 tuần trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Đang thử nghiệm hashtag trending</div>
                  <div className="activity-time">Đang theo dõi • 3 ngày trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-play-circle"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Bắt đầu tạo nội dung video</div>
                  <div className="activity-time">Kế hoạch thực hiện • 1 tuần trước</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3><i className="fas fa-trending-up"></i>Xu hướng thị trường</h3>
            <div style={{ display: 'grid', gap: '15px' }}>
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>Video ngắn</span>
                  <span style={{ color: '#667eea', fontWeight: '600' }}>+156%</span>
                </div>
                <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '12px' }}>
                  Xu hướng tăng trưởng mạnh
                </p>
              </div>
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>Live streaming</span>
                  <span style={{ color: '#667eea', fontWeight: '600' }}>+89%</span>
                </div>
                <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '12px' }}>
                  Tương tác trực tiếp cao
                </p>
              </div>
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>User-generated content</span>
                  <span style={{ color: '#667eea', fontWeight: '600' }}>+67%</span>
                </div>
                <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '12px' }}>
                  Nội dung từ người dùng
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomMenu />
    </div>
  );
} 