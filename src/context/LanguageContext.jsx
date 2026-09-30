import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Navbar
    nav: {
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      contact: 'Contact',
      getQuote: 'Get a Quote',
      govApproved: 'UP GOVT. APPROVED A-CLASS ELECTRICAL CONTRACTOR',
      callUs: 'Call: +91 88823 50019',
      govApproved: 'UP GOVT. APPROVED A-CLASS ELECTRICAL CONTRACTOR',
      callUs: 'Call: +91 88823 50019',
    },
    // Hero
    hero: {
      title: 'Versha Associates',
      subtitle: 'A-Class Licensed Electrical Contractor',
      description: 'Trusted electrical contracting services in Ghaziabad and Uttar Pradesh since 2017. Licensed by the UP Government, Directorate of Electrical Safety.',
      cta1: 'Get in Touch',
      cta2: 'Our Services',
    },
    // About
    about: {
      badge: 'About Versha Associates',
      title: 'About Versha Associates',
      description: 'Versha Associates is a licensed A-Class Electrical Contractor operating from Loni, Ghaziabad. Under the proprietorship of Moolchand, the firm has been delivering reliable electrical contracting services since 2017.',
      highestTier: 'This is the highest tier of electrical contracting license in Uttar Pradesh, authorizing the firm to undertake large-scale electrical installation work including substation-related and higher-voltage contract work.',
      proprietor: 'Proprietor',
      established: 'Established',
      businessType: 'Business Type',
      businessTypeValue: 'Proprietorship — Electrical Contracting Firm',
      licenseClass: 'License Class',
      licenseClassValue: 'A-Class Electrical Contractor',
      licenseNumber: 'License Number',
      issuingAuthority: 'Issuing Authority',
      issuingAuthorityValue: 'Directorate of Electrical Safety, UP Govt.',
      location: 'Location',
      locationValue: 'Loni, Ghaziabad, Uttar Pradesh',
      stats: {
        years: '8+ Years',
        experience: 'Experience',
        since: 'Established in 2017',
        aclass: 'A-Class',
        license: 'License',
        highest: 'Highest Tier in UP',
        gst: 'GST',
        registered: 'Registered',
        projects: '100+',
        projectsLabel: 'Projects',
        region: 'Ghaziabad & NCR',
      },
    },
    // Services
    services: {
      badge: 'What We Offer',
      title: 'Our Services',
      subtitle: 'Comprehensive electrical contracting solutions backed by an A-Class license and years of proven expertise.',
      items: [
        {
          title: 'Electrical Installation',
          description: 'Complete wiring and installation for residential and commercial buildings, ensuring strict compliance with national safety standards and energy-efficient power distribution.',
          badge: 'Residential & Commercial',
        },
        {
          title: 'Substation Work',
          description: 'Design, installation, and maintenance of electrical substations, step-down transformers, switchgear, and HT/LT power distribution infrastructure.',
          badge: 'HT/LT Power',
        },
        {
          title: 'Government Contract Work',
          description: 'Execution of electrical works under government tenders (PVVNL, UPPCL) with full statutory clearances, quality testing, and on-time commissioning.',
          badge: 'PVVNL & UPPCL Approved',
        },
        {
          title: 'Residential & Commercial Work',
          description: 'Complete electrical solutions for homes, shops, offices, and commercial complexes — from new construction wiring to full electrical fit-outs.',
          badge: 'Homes & Offices',
        },
        {
          title: 'Maintenance & Repair',
          description: 'Regular maintenance, fault detection, and rapid repair services to prevent downtime and ensure safe, uninterrupted power supply.',
          badge: 'On-Call Support',
        },
      ],
    },
    // Why Choose Us
    whyUs: {
      badge: 'Our Strengths',
      title: 'Why Choose Us',
      items: [
        {
          title: 'A-Class Licensed',
          description: 'Holds the highest tier of electrical contracting license (GD00001264) issued by the UP Government, Directorate of Electrical Safety.',
        },
        {
          title: '8+ Years of Experience',
          description: 'Over 8 years of hands-on experience in electrical contracting across residential, commercial, and government projects since 2017.',
        },
        {
          title: 'GST Registered Since 2017',
          description: 'Fully compliant and GST-registered firm since inception, ensuring transparent, professional, and verifiable billing.',
        },
        {
          title: 'Government Tender Eligible',
          description: 'Eligible and actively registering for government tender work through PVVNL, UPPCL, and GeM — demonstrating growth and credibility.',
        },
      ],
    },
    // Gallery
    gallery: {
      badge: 'Portfolio',
      title: 'Our Work',
      subtitle: 'A glimpse of our electrical contracting projects',
      viewProject: 'View Project',
      project: 'Project',
      note: 'More project photos coming soon.',
    },
    // Contact
    contact: {
      badge: 'Contact Versha Associates',
      title: 'Get in Touch',
      subtitle: 'Need certified electrical contracting, HT/LT line work, or project consultations? Reach out to our team of licensed experts.',
      leftTitle: "Let's Discuss Your Electrical Requirements",
      leftDesc: 'As an A-Class Licensed Electrical Contractor based in Loni, Ghaziabad, we provide prompt technical assistance, site inspections, and turnkey execution.',
      address: 'Address',
      addressValue: 'E-287/3, Uttranchal Colony, Gali No-3, Loni, Ghaziabad, UP — 201102',
      phone: 'Phone',
      directHelpline: 'Direct Helpline',
      email: 'Email',
      emailValue: 'contact@vershaassociates.com',
      promptResponse: 'Prompt Response',
      hours: 'Business Hours',
      hoursValue: 'Mon–Sat, 9:00 AM – 6:00 PM',
      sundayClosed: 'Sunday Closed',
      govApproved: 'Govt. Approved',
      aClassContractor: 'A-Class Electrical Contractor',
      servingRegion: 'Serving UP & NCR regions.',
      formTitle: 'Send Us a Message',
      formSubtitle: 'Complete the form below and our team will get in touch with you promptly.',
      name: 'Name',
      phonePlaceholder: '+91 XXXXX XXXXX',
      phoneNumber: 'Phone Number',
      emailOptional: '(optional)',
      emailPlaceholder: 'your.email@example.com',
      message: 'Message',
      messagePlaceholder: 'Tell us about your project or query...',
      namePlaceholder: 'Your full name',
      submit: 'Send Message',
      thankYou: 'Thank you! We will get back to you soon.',
    },
    // Footer
    footer: {
      tagline: 'A-Class Licensed Electrical Contractor',
      description: 'Delivering high-reliability commercial, industrial, and government electrical infrastructure services with certified excellence.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      copyright: '© 2025 Versha Associates. All rights reserved.',
      developedBy: 'Developed by',
      team: 'Team SecureX',
    },
  },
  hi: {
    // Navbar
    nav: {
      about: 'हमारे बारे में',
      services: 'सेवाएं',
      gallery: 'गैलरी',
      contact: 'संपर्क',
      getQuote: 'कोटेशन लें',
    },
    // Hero
    hero: {
      title: 'वर्षा एसोसिएट्स',
      subtitle: 'ए-क्लास लाइसेंस प्राप्त इलेक्ट्रिकल ठेकेदार',
      description: '2017 से गाज़ियाबाद और उत्तर प्रदेश में विश्वसनीय इलेक्ट्रिकल ठेकेदारी सेवाएं। उत्तर प्रदेश सरकार, विद्युत सुरक्षा निदेशालय द्वारा लाइसेंस प्राप्त।',
      cta1: 'संपर्क करें',
      cta2: 'हमारी सेवाएं',
    },
    // About
    about: {
      badge: 'वर्षा एसोसिएट्स के बारे में',
      title: 'वर्षा एसोसिएट्स के बारे में',
      description: 'वर्षा एसोसिएट्स लोनी, गाज़ियाबाद से संचालित एक लाइसेंस प्राप्त ए-क्लास इलेक्ट्रिकल ठेकेदार है। मूलचंद जी के स्वामित्व में, यह फर्म 2017 से विश्वसनीय इलेक्ट्रिकल ठेकेदारी सेवाएं प्रदान कर रही है।',
      highestTier: 'यह उत्तर प्रदेश में इलेक्ट्रिकल ठेकेदारी लाइसेंस का सर्वोच्च स्तर है, जो फर्म को सबस्टेशन और उच्च-वोल्टेज अनुबंध कार्य सहित बड़े पैमाने पर विद्युत स्थापना कार्य करने का अधिकार देता है।',
      proprietor: 'स्वामी',
      established: 'स्थापित',
      businessType: 'व्यवसाय का प्रकार',
      businessTypeValue: 'स्वामित्व — विद्युत ठेकेदारी फर्म',
      licenseClass: 'लाइसेंस श्रेणी',
      licenseClassValue: 'ए-क्लास इलेक्ट्रिकल ठेकेदार',
      licenseNumber: 'लाइसेंस संख्या',
      issuingAuthority: 'जारीकर्ता प्राधिकरण',
      issuingAuthorityValue: 'विद्युत सुरक्षा निदेशालय, उ.प्र. सरकार',
      location: 'स्थान',
      locationValue: 'लोनी, गाज़ियाबाद, उत्तर प्रदेश',
      stats: {
        years: '8+ वर्ष',
        experience: 'अनुभव',
        since: '2017 से स्थापित',
        aclass: 'ए-क्लास',
        license: 'लाइसेंस',
        highest: 'उ.प्र. में सर्वोच्च',
        gst: 'GST',
        registered: 'पंजीकृत',
        projects: '100+',
        projectsLabel: 'प्रोजेक्ट',
        region: 'गाज़ियाबाद और NCR',
      },
    },
    // Services
    services: {
      badge: 'हम क्या प्रदान करते हैं',
      title: 'हमारी सेवाएं',
      subtitle: 'ए-क्लास लाइसेंस और वर्षों के सिद्ध अनुभव से समर्थित व्यापक विद्युत ठेकेदारी समाधान।',
      items: [
        {
          title: 'विद्युत स्थापना',
          description: 'आवासीय और वाणिज्यिक भवनों के लिए संपूर्ण वायरिंग और स्थापना, राष्ट्रीय सुरक्षा मानकों का पूर्ण अनुपालन सुनिश्चित करते हुए।',
          badge: 'आवासीय और वाणिज्यिक',
        },
        {
          title: 'सबस्टेशन कार्य',
          description: 'विद्युत सबस्टेशनों, स्टेप-डाउन ट्रांसफॉर्मर, स्विचगियर और HT/LT विद्युत वितरण बुनियादी ढांचे का डिज़ाइन, स्थापना और रखरखाव।',
          badge: 'HT/LT पावर',
        },
        {
          title: 'सरकारी अनुबंध कार्य',
          description: 'सरकारी टेंडरों (PVVNL, UPPCL) के तहत विद्युत कार्यों का निष्पादन, सभी वैधानिक मंजूरी और समय पर कमीशनिंग के साथ।',
          badge: 'PVVNL और UPPCL स्वीकृत',
        },
        {
          title: 'आवासीय और वाणिज्यिक कार्य',
          description: 'घरों, दुकानों, कार्यालयों और वाणिज्यिक परिसरों के लिए संपूर्ण विद्युत समाधान — नए निर्माण वायरिंग से लेकर पूर्ण फिट-आउट तक।',
          badge: 'घर और कार्यालय',
        },
        {
          title: 'रखरखाव और मरम्मत',
          description: 'डाउनटाइम को रोकने और सुरक्षित, निर्बाध बिजली आपूर्ति सुनिश्चित करने के लिए नियमित रखरखाव, दोष पहचान और तेज़ मरम्मत सेवाएं।',
          badge: 'ऑन-कॉल सपोर्ट',
        },
      ],
    },
    // Why Choose Us
    whyUs: {
      badge: 'हमारी ताकत',
      title: 'हमें क्यों चुनें',
      items: [
        {
          title: 'ए-क्लास लाइसेंस प्राप्त',
          description: 'उ.प्र. सरकार, विद्युत सुरक्षा निदेशालय द्वारा जारी सर्वोच्च श्रेणी का विद्युत ठेकेदारी लाइसेंस (GD00001264)।',
        },
        {
          title: '8+ वर्षों का अनुभव',
          description: '2017 से आवासीय, वाणिज्यिक और सरकारी परियोजनाओं में 8 वर्षों से अधिक का व्यावहारिक अनुभव।',
        },
        {
          title: '2017 से GST पंजीकृत',
          description: 'शुरुआत से ही पूर्ण अनुपालन और GST-पंजीकृत फर्म, पारदर्शी और सत्यापन योग्य बिलिंग सुनिश्चित करती है।',
        },
        {
          title: 'सरकारी टेंडर के लिए पात्र',
          description: 'PVVNL, UPPCL और GeM के माध्यम से सरकारी टेंडर कार्य के लिए पात्र और सक्रिय रूप से पंजीकरण कर रहे हैं।',
        },
      ],
    },
    // Gallery
    gallery: {
      badge: 'पोर्टफोलियो',
      title: 'हमारा कार्य',
      subtitle: 'हमारे विद्युत ठेकेदारी प्रोजेक्ट्स की एक झलक',
      viewProject: 'प्रोजेक्ट देखें',
      project: 'प्रोजेक्ट',
      note: 'और प्रोजेक्ट फ़ोटो जल्द आ रहे हैं।',
    },
    // Contact
    contact: {
      badge: 'वर्षा एसोसिएट्स से संपर्क करें',
      title: 'संपर्क करें',
      subtitle: 'प्रमाणित विद्युत ठेकेदारी, HT/LT लाइन कार्य, या प्रोजेक्ट परामर्श चाहिए? हमारे लाइसेंस प्राप्त विशेषज्ञों से संपर्क करें।',
      leftTitle: 'अपनी विद्युत आवश्यकताओं पर चर्चा करें',
      leftDesc: 'लोनी, गाज़ियाबाद स्थित ए-क्लास लाइसेंस प्राप्त विद्युत ठेकेदार के रूप में, हम त्वरित तकनीकी सहायता, साइट निरीक्षण और टर्नकी निष्पादन प्रदान करते हैं।',
      address: 'पता',
      addressValue: 'ई-287/3, उत्तरांचल कॉलोनी, गली नं.-3, लोनी, गाज़ियाबाद, उ.प्र. — 201102',
      phone: 'फ़ोन',
      directHelpline: 'सीधी हेल्पलाइन',
      email: 'ईमेल',
      emailValue: 'contact@vershaassociates.com',
      promptResponse: 'त्वरित प्रतिक्रिया',
      hours: 'कार्य समय',
      hoursValue: 'सोम-शनि, सुबह 9:00 – शाम 6:00',
      sundayClosed: 'रविवार बंद',
      govApproved: 'सरकार द्वारा अनुमोदित',
      aClassContractor: 'ए-क्लास इलेक्ट्रिकल ठेकेदार',
      servingRegion: 'उ.प्र. और NCR क्षेत्रों में सेवारत।',
      formTitle: 'हमें संदेश भेजें',
      formSubtitle: 'नीचे फ़ॉर्म भरें और हमारी टीम जल्द ही आपसे संपर्क करेगी।',
      name: 'नाम',
      phonePlaceholder: '+91 XXXXX XXXXX',
      phoneNumber: 'फ़ोन नंबर',
      emailOptional: '(वैकल्पिक)',
      emailPlaceholder: 'your.email@example.com',
      message: 'संदेश',
      messagePlaceholder: 'अपने प्रोजेक्ट या प्रश्न के बारे में बताएं...',
      namePlaceholder: 'आपका पूरा नाम',
      submit: 'संदेश भेजें',
      thankYou: 'धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।',
    },
    // Footer
    footer: {
      tagline: 'ए-क्लास लाइसेंस प्राप्त इलेक्ट्रिकल ठेकेदार',
      description: 'प्रमाणित उत्कृष्टता के साथ उच्च-विश्वसनीयता वाणिज्यिक, औद्योगिक और सरकारी विद्युत बुनियादी ढांचा सेवाएं।',
      quickLinks: 'त्वरित लिंक',
      contactInfo: 'संपर्क जानकारी',
      copyright: '© 2025 वर्षा एसोसिएट्स। सर्वाधिकार सुरक्षित।',
      developedBy: 'विकसित',
      team: 'टीम SecureX',
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
