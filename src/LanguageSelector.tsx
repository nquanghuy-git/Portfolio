import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as const,flag: '🇺🇸' },
    { code: 'vi' as const,flag: '🇻🇳' },
  ];

  const currentLang = languages.find(lang => lang.code === language);

  const handleSelect = (code: 'en' | 'vi') => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div 
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '100%'
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100px',
          padding: '10px 15px',
          backgroundColor: '#333',
          color: '#fff',
          border: '1px solid #555',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginRight: '20px',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.backgroundColor = '#444';
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.backgroundColor = '#333';
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '20px' }}>{currentLang?.flag}</span>
          <span>{currentLang?.label}</span>
        </span>
        <span style={{ 
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            width: '100px',
            top: '100%',
            textAlign: 'center',
            left: 0,
            right: 0,
            backgroundColor: '#222',
            border: '1px solid #555',
            borderRadius: '4px',
            marginTop: '5px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            zIndex: 1000,
            overflow: 'hidden',
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              style={{
                width: '100%',
                padding: '12px 15px',
                backgroundColor: language === lang.code ? '#d4af37' : '#222',
                color: language === lang.code ? '#000' : '#fff',
                border: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: language === lang.code ? 'bold' : 'normal',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (language !== lang.code) {
                  (e.target as HTMLElement).style.backgroundColor = '#333';
                }
              }}
              onMouseLeave={(e) => {
                if (language !== lang.code) {
                  (e.target as HTMLElement).style.backgroundColor = '#222';
                }
              }}
            >
              <span style={{ fontSize: '20px' }}>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
