import React, { createContext, useState, useContext } from 'react';

type Language = 'en' | 'vi';

interface Translations {
  menu: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    news: string;
    contact: string;
  };
  hero: {
    greeting: string;
  };
  about: {
    title: string;
    subtitle: string;
    intro: string;
    description: string;
    birthday: string;
    age: string;
    city: string;
    interests: string;
    study: string;
    degree: string;
    website: string;
    mail: string;
    phone: string;
    twitter: string;
    downloadCV: string;
    sendMessage: string;
    labels: {
      birthday: string;
      age: string;
      city: string;
      interests: string;
      study: string;
      degree: string;
      website: string;
      mail: string;
      phone: string;
      twitter: string;
      address: string;
      email: string;
    };
  };
  skills: {
    title: string;
    description: string;
    wordpress: string;
    css: string;
    html: string;
    afterEffect: string;
    yearsOfExperience: string;
  };
  services: {
    title: string;
    subtitle: string;
    photography: string;
    webDesign: string;
    branding: string;
    socialMedia: string;
    illustrator: string;
    marketing: string;
    description: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    all: string;
    design: string;
    photography: string;
    development: string;
  };
  news: {
    title: string;
    subtitle: string;
    readMore: string;
  };
  contact: {
    title: string;
    subtitle: string;
    getInTouch: string;
    address: string;
    email: string;
    phone: string;
    website: string;
    yourName: string;
    yourEmail: string;
    yourMessage: string;
    sendMessage: string;
    copyright: string;
    successMessage: string;
    fillRequired: string;
    labels: {
      address: string;
      email: string;
      phone: string;
      website: string;
    };
  };
  counter: {
    projectsCompleted: string;
    linesOfCode: string;
    happyClients: string;
    awards: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    menu: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      news: 'News',
      contact: 'Contact',
    },
    hero: {
      greeting: "I'm a",
    },
    about: {
      title: 'About Me',
      subtitle: 'Main informations about me',
      intro: "I'm Nguyễn Quang Huy and",
      description:
        "Hi! My name is Nguyễn Quang Huy. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.",
      birthday: '01.07.1990',
      age: '28',
      city: 'New York, USA',
      interests: 'Soccer, UFC',
      study: 'Chicago University',
      degree: 'Master',
      website: 'www.mywebsite.com',
      mail: 'mymail@gmail.com',
      phone: '+77 022 177 05 05',
      twitter: '@myusername',
      downloadCV: 'Download CV',
      sendMessage: 'Send Message',
      labels: {
        birthday: 'Birthday',
        age: 'Age',
        city: 'City',
        interests: 'Interests',
        study: 'Study',
        degree: 'Degree',
        website: 'Website',
        mail: 'Mail',
        phone: 'Phone',
        twitter: 'Twitter',
        address: 'Address',
        email: 'Email',
      },
    },
    skills: {
      title: 'Some About my Abilities',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.",
      wordpress: 'Wordpress',
      css: 'Css',
      html: 'HTML',
      afterEffect: 'After Effect',
      yearsOfExperience: 'years of experience',
    },
    services: {
      title: 'Amazing Services',
      subtitle: 'Meet our amazing services',
      photography: 'Photography',
      webDesign: 'Web Design',
      branding: 'Branding',
      socialMedia: 'Social Media',
      illustrator: 'Illustrator',
      marketing: 'Marketing',
      description:
        'Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...',
    },
    portfolio: {
      title: 'Creative Works',
      subtitle: 'Check out our latest creative works',
      all: 'All',
      design: 'Design',
      photography: 'Photography',
      development: 'Development',
    },
    news: {
      title: 'Latest News',
      subtitle: 'Check out our latest News',
      readMore: 'Read More',
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Get in touch with me',
      getInTouch: 'Get in Touch',
      address: '123 Qwerty Avenue NYC, USA',
      email: 'example@gmail.com',
      phone: '+77 022 177 05 05',
      website: 'www.yourdomain.com',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      yourMessage: 'Your Message',
      sendMessage: 'Send Message',
      copyright: '© Copyright 2019. All Rights are Reserved.',
      successMessage: 'Your message has been received, We will contact you soon.',
      fillRequired: 'Please Fill Required Fields',
      labels: {
        address: 'Address',
        email: 'Email',
        phone: 'Phone',
        website: 'Website',
      },
    },
    counter: {
      projectsCompleted: 'Projects Completed',
      linesOfCode: 'Lines of Code',
      happyClients: 'Happy Clients',
      awards: 'My Awwwards',
    },
  },
  vi: {
    menu: {
      home: 'Trang chủ',
      about: 'Về tôi',
      services: 'Dịch vụ',
      portfolio: 'Portfolio',
      news: 'Tin tức',
      contact: 'Liên hệ',
    },
    hero: {
      greeting: 'Tôi là một',
    },
    about: {
      title: 'Về Tôi',
      subtitle: 'Thông tin chính về tôi',
      intro: 'Tôi là Nguyễn Quang Huy và',
      description:
        'Xin chào! Tên tôi là Nguyễn Quang Huy. Tôi là một Web Developer, và tôi rất đam mê và tập trung vào công việc của mình. Với 20 năm kinh nghiệm làm Web developer chuyên nghiệp, tôi đã có được kỹ năng và kiến thức cần thiết để làm cho dự án của bạn thành công. Tôi thích mỗi bước của quá trình thiết kế, từ thảo luận và hợp tác cho đến khái niệm và thực hiện, nhưng tôi thấy hài lòng nhất khi thấy sản phẩm hoàn chỉnh hoạt động đúng như được tạo ra.',
      birthday: '01.07.1990',
      age: '28',
      city: 'New York, USA',
      interests: 'Bóng đá, UFC',
      study: 'Đại học Chicago',
      degree: 'Thạc sĩ',
      website: 'www.mywebsite.com',
      mail: 'mymail@gmail.com',
      phone: '+77 022 177 05 05',
      twitter: '@myusername',
      downloadCV: 'Tải xuống CV',
      sendMessage: 'Gửi tin nhắn',
      labels: {
        birthday: 'Ngày sinh',
        age: 'Tuổi',
        city: 'Thành phố',
        interests: 'Sở thích',
        study: 'Trường học',
        degree: 'Bằng cấp',
        website: 'Website',
        mail: 'Email',
        phone: 'Điện thoại',
        twitter: 'Twitter',
        address: 'Địa chỉ',
        email: 'Email',
      },
    },
    skills: {
      title: 'Một số kỹ năng của tôi',
      description:
        'Lorem Ipsum là văn bản giả trong ngành in và thiết kế kiểu chữ. Lorem Ipsum vẫn là văn bản giả tiêu chuẩn của ngành kể từ những năm 1500. Lorem Ipsum đã trở thành công nghiệp. Lorem Ipsum là văn bản giả tiêu chuẩn của ngành kể từ những năm đó. Lorem Ipsum rất đơn giản.',
      wordpress: 'Wordpress',
      css: 'Css',
      html: 'HTML',
      afterEffect: 'After Effect',
      yearsOfExperience: 'năm kinh nghiệm',
    },
    services: {
      title: 'Dịch vụ tuyệt vời',
      subtitle: 'Gặp các dịch vụ tuyệt vời của chúng tôi',
      photography: 'Chụp ảnh',
      webDesign: 'Thiết kế web',
      branding: 'Thương hiệu',
      socialMedia: 'Mạng xã hội',
      illustrator: 'Minh họa',
      marketing: 'Marketing',
      description:
        'Thiết kế web là một quy trình tạo tương tự, với mục đích trình bày nội dung trên các trang điện tử...',
    },
    portfolio: {
      title: 'Tác phẩm sáng tạo',
      subtitle: 'Xem các tác phẩm sáng tạo mới nhất của chúng tôi',
      all: 'Tất cả',
      design: 'Thiết kế',
      photography: 'Chụp ảnh',
      development: 'Phát triển',
    },
    news: {
      title: 'Tin tức mới nhất',
      subtitle: 'Xem tin tức mới nhất của chúng tôi',
      readMore: 'Đọc thêm',
    },
    contact: {
      title: 'Liên hệ tôi',
      subtitle: 'Liên hệ với tôi',
      getInTouch: 'Liên hệ',
      address: '123 Qwerty Avenue NYC, USA',
      email: 'example@gmail.com',
      phone: '+77 022 177 05 05',
      website: 'www.yourdomain.com',
      yourName: 'Tên của bạn',
      yourEmail: 'Email của bạn',
      yourMessage: 'Tin nhắn của bạn',
      sendMessage: 'Gửi tin nhắn',
      copyright: '© Bản quyền 2019. Tất cả các quyền được bảo lưu.',
      successMessage: 'Tin nhắn của bạn đã được nhận, chúng tôi sẽ liên hệ với bạn sớm.',
      fillRequired: 'Vui lòng điền các trường bắt buộc',
      labels: {
        address: 'Địa chỉ',
        email: 'Email',
        phone: 'Điện thoại',
        website: 'Website',
      },
    },
    counter: {
      projectsCompleted: 'Dự án hoàn thành',
      linesOfCode: 'Dòng mã',
      happyClients: 'Khách hàng hài lòng',
      awards: 'Giải thưởng của tôi',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved && (saved === 'en' || saved === 'vi') ? saved : 'en';
  });

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
