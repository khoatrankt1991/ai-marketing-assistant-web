'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import BottomMenu from '../components/BottomMenu';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Xin chào! Tôi là AI Marketing Assistant. Tôi có thể giúp bạn tạo nội dung, lên lịch đăng bài, phân tích dữ liệu và nhiều hơn nữa. Bạn cần hỗ trợ gì?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "Tôi hiểu rồi! Để tôi giúp bạn tạo nội dung phù hợp.",
        "Đây là một ý tưởng tuyệt vời. Tôi sẽ gợi ý một số cách tiếp cận.",
        "Dựa trên thông tin bạn cung cấp, tôi đề xuất chiến lược sau:",
        "Tôi có thể giúp bạn tối ưu hóa nội dung này để tăng tương tác.",
        "Hãy để tôi phân tích và đưa ra gợi ý cụ thể cho bạn."
      ];

      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Làm thế nào để tăng tương tác?",
    "Tạo bài viết về khuyến mãi",
    "Phân tích hiệu quả marketing",
    "Lên lịch đăng bài tự động"
  ];

  return (
    <div className="container">
      <Sidebar isMobileOpen={isMobileOpen} onToggleMobile={toggleMobileMenu} />

      <main className="main-content">
        <div className="top-bar">
          <div className="page-title">
            <h2>AI Chatbot</h2>
            <p>Trò chuyện với AI để được hỗ trợ marketing</p>
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
          <div className="card" style={{ gridColumn: '1 / -1', height: '600px', display: 'flex', flexDirection: 'column' }}>
            <h3><i className="fas fa-comments"></i>Chat với AI Assistant</h3>
            
            <div style={{ flex: 1, overflowY: 'auto', marginBottom: '20px', padding: '10px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    style={{
                      display: 'flex',
                      justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                      marginBottom: '10px'
                    }}
                  >
                    <div
                      style={{
                        maxWidth: '70%',
                        padding: '12px 16px',
                        borderRadius: '18px',
                        backgroundColor: message.isUser 
                          ? 'linear-gradient(135deg, #667eea, #764ba2)' 
                          : 'rgba(102, 126, 234, 0.1)',
                        color: message.isUser ? 'white' : '#333',
                        wordWrap: 'break-word'
                      }}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: '18px',
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      color: '#333'
                    }}>
                      <i className="fas fa-spinner fa-spin"></i> AI đang nhập...
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '20px' }}>
              <div className="input-group" style={{ marginBottom: '15px' }}>
                <label>Câu hỏi nhanh</label>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      style={{
                        padding: '8px 12px',
                        border: '1px solid #667eea',
                        borderRadius: '20px',
                        backgroundColor: 'transparent',
                        color: '#667eea',
                        cursor: 'pointer',
                        fontSize: '12px',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => setInputText(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Nhập tin nhắn của bạn..."
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    border: '2px solid #f0f0f0',
                    borderRadius: '25px',
                    fontSize: '14px'
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  style={{
                    padding: '12px 20px',
                    backgroundColor: inputText.trim() ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#ccc',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: inputText.trim() ? 'pointer' : 'not-allowed',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <h3><i className="fas fa-chart-line"></i>Thống kê Chatbot</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">156</div>
                <div className="stat-label">Cuộc hội thoại</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">89%</div>
                <div className="stat-label">Độ chính xác</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24</div>
                <div className="stat-label">Hôm nay</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Phút trung bình</div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3><i className="fas fa-lightbulb"></i>Gợi ý sử dụng</h3>
            <ul className="activity-list">
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-edit"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">"Tạo bài viết về sản phẩm mới"</div>
                  <div className="activity-time">Gợi ý nội dung</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">"Phân tích hiệu quả marketing"</div>
                  <div className="activity-time">Báo cáo chi tiết</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-calendar"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">"Lên lịch đăng bài tuần tới"</div>
                  <div className="activity-time">Tự động hóa</div>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-title">"Tối ưu hóa target audience"</div>
                  <div className="activity-time">Chiến lược</div>
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