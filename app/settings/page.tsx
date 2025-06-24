'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import BottomMenu from '../components/BottomMenu';

export default function Settings() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false
  });

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleNotificationChange = (type: string) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  return (
    <div className="container">
      <Sidebar isMobileOpen={isMobileOpen} onToggleMobile={toggleMobileMenu} />

      <main className="main-content">
        <div className="top-bar">
          <div className="page-title">
            <h2>Cài đặt</h2>
            <p>Quản lý tài khoản và cấu hình hệ thống</p>
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
            <h3><i className="fas fa-user"></i>Thông tin tài khoản</h3>
            
            <div className="input-group">
              <label>Họ và tên</label>
              <input 
                type="text" 
                defaultValue="Admin User"
                placeholder="Nhập họ và tên..."
              />
            </div>
            
            <div className="input-group">
              <label>Email</label>
              <input 
                type="email" 
                defaultValue="admin@example.com"
                placeholder="Nhập email..."
              />
            </div>
            
            <div className="input-group">
              <label>Số điện thoại</label>
              <input 
                type="tel" 
                defaultValue="+84 123 456 789"
                placeholder="Nhập số điện thoại..."
              />
            </div>
            
            <div className="input-group">
              <label>Công ty</label>
              <input 
                type="text" 
                defaultValue="Công ty ABC"
                placeholder="Nhập tên công ty..."
              />
            </div>
            
            <button className="generate-btn">
              <i className="fas fa-save"></i>
              Lưu thông tin
            </button>
          </div>

          <div className="card">
            <h3><i className="fas fa-bell"></i>Thông báo</h3>
            <div style={{ display: 'grid', gap: '15px' }}>
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>Thông báo email</span>
                  <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                    <input 
                      type="checkbox" 
                      checked={notifications.email}
                      onChange={() => handleNotificationChange('email')}
                      style={{ opacity: 0, width: 0, height: 0 }} 
                    />
                    <span style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: notifications.email ? '#667eea' : '#ccc',
                      borderRadius: '24px',
                      transition: '0.4s'
                    }}></span>
                  </label>
                </div>
              </div>
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>Thông báo push</span>
                  <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                    <input 
                      type="checkbox" 
                      checked={notifications.push}
                      onChange={() => handleNotificationChange('push')}
                      style={{ opacity: 0, width: 0, height: 0 }} 
                    />
                    <span style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: notifications.push ? '#667eea' : '#ccc',
                      borderRadius: '24px',
                      transition: '0.4s'
                    }}></span>
                  </label>
                </div>
              </div>
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>Thông báo SMS</span>
                  <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                    <input 
                      type="checkbox" 
                      checked={notifications.sms}
                      onChange={() => handleNotificationChange('sms')}
                      style={{ opacity: 0, width: 0, height: 0 }} 
                    />
                    <span style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: notifications.sms ? '#667eea' : '#ccc',
                      borderRadius: '24px',
                      transition: '0.4s'
                    }}></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="card content-creator">
            <h3><i className="fas fa-shield-alt"></i>Bảo mật</h3>
            
            <div className="input-group">
              <label>Mật khẩu hiện tại</label>
              <input 
                type="password" 
                placeholder="Nhập mật khẩu hiện tại..."
              />
            </div>
            
            <div className="input-group">
              <label>Mật khẩu mới</label>
              <input 
                type="password" 
                placeholder="Nhập mật khẩu mới..."
              />
            </div>
            
            <div className="input-group">
              <label>Xác nhận mật khẩu mới</label>
              <input 
                type="password" 
                placeholder="Nhập lại mật khẩu mới..."
              />
            </div>
            
            <div className="input-group">
              <label>Xác thực 2 yếu tố</label>
              <select>
                <option>Bật</option>
                <option>Tắt</option>
              </select>
            </div>
            
            <button className="generate-btn">
              <i className="fas fa-key"></i>
              Cập nhật mật khẩu
            </button>
          </div>

          <div className="card">
            <h3><i className="fas fa-cog"></i>Cài đặt hệ thống</h3>
            <div style={{ display: 'grid', gap: '15px' }}>
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>Chế độ tối</span>
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
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>Ngôn ngữ</span>
                  <select style={{
                    padding: '4px 8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}>
                    <option>Tiếng Việt</option>
                    <option>English</option>
                  </select>
                </div>
              </div>
              <div style={{ padding: '15px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#333', fontWeight: '600' }}>Múi giờ</span>
                  <select style={{
                    padding: '4px 8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}>
                    <option>GMT+7 (Việt Nam)</option>
                    <option>GMT+8 (Singapore)</option>
                    <option>GMT+0 (London)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="card recent-activity">
            <h3><i className="fas fa-history"></i>Hoạt động gần đây</h3>
            <ul className="activity-list">
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-user-edit"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Cập nhật thông tin cá nhân</div>
                  <div className="activity-time">2 giờ trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-key"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Thay đổi mật khẩu</div>
                  <div className="activity-time">1 ngày trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-bell"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Cập nhật cài đặt thông báo</div>
                  <div className="activity-time">3 ngày trước</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-link"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">Kết nối tài khoản Facebook</div>
                  <div className="activity-time">1 tuần trước</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3><i className="fas fa-credit-card"></i>Gói dịch vụ</h3>
            <div style={{ padding: '20px', backgroundColor: 'rgba(102, 126, 234, 0.1)', borderRadius: '12px', textAlign: 'center' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>Gói Nâng cao</h4>
              <p style={{ margin: '0 0 15px 0', color: '#666' }}>499,000 VNĐ/tháng</p>
              <div style={{ display: 'grid', gap: '8px', marginBottom: '20px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  <span style={{ fontSize: '14px' }}>Tạo nội dung không giới hạn</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  <span style={{ fontSize: '14px' }}>Lên lịch đăng bài tự động</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  <span style={{ fontSize: '14px' }}>Phân tích chi tiết</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  <span style={{ fontSize: '14px' }}>Hỗ trợ 24/7</span>
                </div>
              </div>
              <button className="generate-btn" style={{ width: '100%' }}>
                <i className="fas fa-arrow-up"></i>
                Nâng cấp gói
              </button>
            </div>
          </div>
        </div>
      </main>

      <BottomMenu />
    </div>
  );
} 