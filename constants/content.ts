

import { Rule } from '../types';

export type Language = 'en' | 'te' | 'hi' | 'ta' | 'kn';

const commonRules: Rule[] = [
  { id: 'dress_code', icon: 'dress' },
  { id: 'prohibited_items', icon: 'prohibited' },
  { id: 'cleanliness', icon: 'clean' },
  { id: 'queue_discipline', icon: 'queue' },
  { id: 'mobile_usage', icon: 'mobile' },
  { id: 'respectful_behaviour', icon: 'respect' },
];

export const content = {
  en: {
    appName: 'Govinda Mitra',
    nav: {
      home: 'Home',
      important: 'Important Places',
      emergency: 'Emergency & Services',
      spiritual: 'Spiritual Places',
      rules: 'Rules & Guidelines',
    },
    home: {
      tagline1: 'Govinda Mitra – Your Devotee Friend in Tirumala',
      tagline2: 'Walk Every Step with Divine Guidance',
      tagline3: 'Simple Guidance for a Sacred Journey',
      intro: 'Govinda Mitra is your friendly guide in Tirumala, helping you find important places, understand spiritual spots, and follow temple rules with ease.',
    },
    places: {
        // Important Places
        cro_office: { name: 'CRO Office', category: 'Service', description: 'Central Reception Office for accommodation and general enquiries.' },
        railway_enquiry: { name: 'Railway Enquiry Office', category: 'Help', description: 'Information and booking for railway services.' },
        ttd_info_desk: { name: 'TTD Information / Help Desks', category: 'Help', description: 'Official help desks for any information regarding TTD services.' },
        accommodation_counters: { name: 'Accommodation Counters', category: 'Service', description: 'Counters for booking and checking into TTD accommodations.' },
        drinking_water: { name: 'Drinking Water Points', category: 'Facility', description: 'Purified drinking water available for all devotees.' },
        toilets: { name: 'Toilets / Washrooms', category: 'Facility', description: 'Public restrooms for men and women.' },
        baby_care: { name: 'Baby Care Rooms', category: 'Facility', description: 'Facilities for feeding and changing babies.' },
        // Emergency Services
        medical_emergency: { name: 'Medical Emergency / Hospital', category: 'Emergency', description: 'Aswini Hospital provides 24x7 medical services for devotees.' },
        police_security: { name: 'Police / Security', category: 'Emergency', description: 'Contact for any security-related issues. TTD vigilance is also available.' },
        fire_station: { name: 'Fire Station', category: 'Emergency', description: 'Emergency services for fire-related incidents.' },
        helpline: { name: '24x7 Helpline / Control Room', category: 'Emergency', description: 'Call 1800-425-4141 for any help or information.' },
        lost_and_found: { name: 'Lost & Found / Help Center', category: 'Help', description: 'Report lost items or seek help at the designated centers.' },
        // Spiritual Places
        main_temple: { name: 'Main Srivari Temple', category: 'Temple', description: 'The Kaliyuga Vaikuntam, the sacred abode of Sri Venkateswara Swamy, who stands here to protect his devotees.', importance: 'Known as "Bhuloka Vaikuntam" (Abode of Vishnu on Earth). The Lord appeared here as a Swayambhu (Self-manifested) deity. Viewing his divine form is believed to wash away sins and grant salvation.' },
        bedi_anjaneyaswamy: { name: 'Bedi Anjaneyaswamy Temple', category: 'Temple', description: 'A temple dedicated to Lord Hanuman, located opposite the main temple.', importance: 'It is believed that Lord Hanuman is stationed here to protect the main temple. Devotees offer prayers here before entering the Srivari Temple.' },
        varaha_swamy: { name: 'Varaha Swamy Temple', category: 'Temple', description: 'Located on the banks of Swami Pushkarini, dedicated to the Varaha avatar of Vishnu.', importance: 'As per tradition, devotees must first visit the Varaha Swamy Temple before visiting the main Srivari Temple.' },
        papavinasanam: { name: 'Papavinasanam', category: 'Theertham', description: 'A sacred waterfall where devotees take a holy dip to wash away their sins.', importance: 'The name itself means "Destroyer of Sins". The water here is believed to have divine purifying powers.' },
        akasha_ganga: { name: 'Akasha Ganga', category: 'Theertham', description: 'A perennial waterfall believed to be of celestial origin.', importance: 'The waters of Akasha Ganga are used for the daily Abhishekam of the main deity in the Srivari temple.' },
        japali_theertham: { name: 'Japali Theertham', category: 'Theertham', description: 'A sacred pond and Hanuman temple amidst serene forests.', importance: 'It is believed that Sage Jabali performed penance here. A dip in this holy water is considered highly meritorious.' },
        sila_thoranam: { name: 'Sila Thoranam', category: 'View Point', description: 'A natural rock arch, a unique geological formation.', importance: 'This natural arch is one of only three in the world and holds immense archaeological and Puranic significance.' },
        gogarbham: { name: 'Gogarbham Dam', category: 'View Point', description: 'A serene dam and reservoir supplying water to Tirumala.', importance: 'Also known as Papavinasanam Dam, it offers a tranquil environment and picturesque views.' },
        srivari_padalu: { name: 'Srivari Padalu', category: 'Sacred Spot', description: 'Believed to be the first place where Lord Venkateswara set his feet on Earth.', importance: 'Devotees visit this spot at the highest point of Narayanadri hill to seek the blessings of the divine footprints of the Lord.' },
        chakra_theertham: { name: 'Chakra Theertham', category: 'Theertham', description: 'A sacred water body associated with Lord Vishnu\'s Sudarshana Chakra.', importance: 'It is believed that Lord Brahma performed penance here, and Lord Vishnu plunged his Sudarshana Chakra to cleanse the spot, creating this holy pond.' }
    },
    buttons: {
      viewOnMap: 'View on Map',
      listenToExplanation: 'Play Audio Explanation',
      stopExplanation: 'Stop Audio',
      askNarada: 'Ask Narada',
      changeLanguage: 'Change Language',
      startSpeaking: 'Start Speaking',
      stopSpeaking: 'Stop Speaking'
    },
    rules: {
      title: 'Compulsory Rules and Guidelines',
      dress_code: { title: 'Dress Code', description: 'Men: Dhoti/Pants with a traditional upper cloth. Women: Saree/Chudidar with upper cloth. No shorts, T-shirts, or western wear.' },
      prohibited_items: { title: 'Prohibited Items', description: 'Alcohol, non-vegetarian food, tobacco, smoking, and any kind of weapon are strictly prohibited in Tirumala.' },
      cleanliness: { title: 'Cleanliness', description: 'Maintain cleanliness and do not litter. Use dustbins provided. Tirumala is a sacred and plastic-free zone.' },
      queue_discipline: { title: 'Queue Discipline', description: 'Maintain silence and discipline in queue lines. Do not push or try to jump the queue. Chant "Govinda" peacefully.' },
      mobile_usage: { title: 'Mobile Usage', description: 'Mobile phones must be switched off or in silent mode inside the temple premises, especially near the sanctum sanctorum.' },
      respectful_behaviour: { title: 'Respectful Behaviour', description: 'Show respect to temple staff, volunteers, and fellow devotees. Maintain a spiritual and devotional atmosphere.' },
      rulesList: commonRules,
    },
    narada: {
        header: 'Ask Narada – Your Devotee Guide',
        placeholder: 'Type your question...',
        tapToSpeak: 'Tap to speak',
        listening: 'Listening...',
        playingAudio: 'Playing audio...',
        generatingResponse: 'Narada is thinking...',
        greeting: 'Govinda! Govinda! Welcome, dear devotee. How may I assist you in your sacred journey today?'
    },
    virtualGuide: {
        title: 'Virtual Guide',
        prompt: 'Ask about this place...',
        speakPrompt: 'Tap the mic and ask a question'
    }
  },
  te: {
    appName: 'గోవింద మిత్ర',
    nav: {
      home: 'హోమ్',
      important: 'ముఖ్యమైన ప్రదేశాలు',
      emergency: 'అత్యవసర & సేవలు',
      spiritual: 'ఆధ్యాత్మిక ప్రదేశాలు',
      rules: 'నియమాలు',
    },
    home: {
      tagline1: 'గోవింద మిత్ర – తిరుమలలో మీ భక్తుని స్నేహితుడు',
      tagline2: 'ప్రతి అడుగు దైవిక మార్గదర్శకత్వంతో నడవండి',
      tagline3: 'పవిత్ర యాత్రకు సులభమైన మార్గదర్శకత్వం',
      intro: 'గోవింద మిత్ర తిరుమలలో మీ స్నేహపూర్వక మార్గదర్శి, ముఖ్యమైన ప్రదేశాలను కనుగొనడంలో సహాయపడుతుంది.',
    },
     places: {
        cro_office: { name: 'సి‌ఆర్‌ఓ కార్యాలయం', category: 'సేవ', description: 'వసతి మరియు సాధారణ విచారణల కోసం కేంద్ర రిసెప్షన్ కార్యాలయం.' },
        railway_enquiry: { name: 'రైల్వే విచారణ కార్యాలయం', category: 'సహాయ', description: 'రైల్వే సేవలకు సంబంధించిన సమాచారం మరియు బుకింగ్.' },
        ttd_info_desk: { name: 'టిటిడి సమాచారం / సహాయ కేంద్రాలు', category: 'సహాయ', description: 'టిటిడి సేవలకు సంబంధించిన ఏదైనా సమాచారం కోసం అధికారిక సహాయ కేంద్రాలు.' },
        accommodation_counters: { name: 'వసతి కౌంటర్లు', category: 'సేవ', description: 'టిటిడి వసతుల బుకింగ్ మరియు చెక్-ఇన్ కోసం కౌంటర్లు.' },
        drinking_water: { name: 'త్రాగునీటి పాయింట్లు', category: 'సౌకర్యం', description: 'భక్తులందరికీ శుద్ధి చేసిన త్రాగునీరు అందుబాటులో ఉంది.' },
        toilets: { name: 'మరుగుదొడ్లు', category: 'సౌకర్యం', description: 'పురుషులు మరియు మహిళల కోసం పబ్లిక్ వాష్‌రూమ్‌లు.' },
        baby_care: { name: 'శిశు సంరక్షణ గదులు', category: 'సౌకర్యం', description: 'పిల్లలకు పాలు పట్టడానికి మరియు బట్టలు మార్చడానికి సౌకర్యాలు.' },
        medical_emergency: { name: 'వైద్య అత్యవసర / ఆసుపత్రి', category: 'అత్యవసర', description: 'అశ్విని ఆసుపత్రి భక్తులకు 24x7 వైద్య సేవలను అందిస్తుంది.' },
        police_security: { name: 'పోలీస్ / భద్రత', category: 'అత్యవసర', description: 'ఏదైనా భద్రత సంబంధిత సమస్యల కోసం సంప్రదించండి.' },
        fire_station: { name: 'అగ్నిమాపక కేంద్రం', category: 'అత్యవసర', description: 'అగ్ని సంబంధిత సంఘటనల కోసం అత్యవసర సేవలు.' },
        helpline: { name: '24x7 హెల్ప్‌లైన్', category: 'అత్యవసర', description: 'ఏదైనా సహాయం లేదా సమాచారం కోసం 1800-425-4141 కి కాల్ చేయండి.' },
        lost_and_found: { name: 'లాస్ట్ & ఫౌండ్', category: 'సహాయం', description: 'కోల్పోయిన వస్తువులను నివేదించండి లేదా నిర్దేశించిన కేంద్రాలలో సహాయం కోరండి.' },
        main_temple: { name: 'ప్రధాన శ్రీవారి ఆలయం', category: 'ఆలయం', description: 'కలియుగ వైకుంఠం, ఆపద మొక్కులవాడు అయిన శ్రీ వేంకటేశ్వర స్వామి వారి పవిత్ర ఆలయం.', importance: 'ఇది "భూలోక వైకుంఠం"గా ప్రసిద్ధి చెందింది. ఇక్కడ స్వామివారు స్వయంభువుగా వెలసి, భక్తుల కోర్కెలను తీరుస్తారు. ఆ దివ్య మంగళ స్వరూప దర్శనం సకల పాపాలను హరించి మోక్షాన్ని ప్రసాదిస్తుందని ప్రతీతి.' },
        bedi_anjaneyaswamy: { name: 'బేడి ఆంజనేయస్వామి ఆలయం', category: 'ఆలయం', description: 'ప్రధాన ఆలయానికి ఎదురుగా ఉన్న హనుమంతుడికి అంకితం చేయబడిన ఆలయం.', importance: 'ప్రధాన ఆలయాన్ని రక్షించడానికి హనుమంతుడు ఇక్కడ ఉన్నాడని నమ్ముతారు. శ్రీవారి ఆలయంలోకి ప్రవేశించే ముందు భక్తులు ఇక్కడ ప్రార్థనలు చేస్తారు.' },
        varaha_swamy: { name: 'వరాహ స్వామి ఆలయం', category: 'ఆలయం', description: 'స్వామి పుష్కరిణి ఒడ్డున ఉన్న విష్ణువు యొక్క వరాహ అవతారానికి అంకితం చేయబడినది.', importance: 'సంప్రదాయం ప్రకారం, భక్తులు ప్రధాన శ్రీవారి ఆలయాన్ని సందర్శించే ముందు వరాహ స్వామి ఆలయాన్ని సందర్శించాలి.' },
        papavinasanam: { name: 'పాపవినాశనం', category: 'తీర్థం', description: 'భక్తులు తమ పాపాలను కడిగివేయడానికి పవిత్ర స్నానం చేసే పవిత్ర జలపాతం.', importance: 'దాని పేరులోనే "పాపాలను నాశనం చేసేది" అని ఉంది. ఇక్కడి నీటికి దైవిక శుద్ధి చేసే శక్తులు ఉన్నాయని నమ్ముతారు.' },
        akasha_ganga: { name: 'ఆకాశ గంగ', category: 'తీర్థం', description: 'స్వర్గలోకం నుండి ఉద్భవించినట్లుగా నమ్మబడే ఒక శాశ్వత జలపాతం.', importance: 'శ్రీవారి ఆలయంలోని ప్రధాన దైవానికి రోజువారీ అభిషేకం కోసం ఆకాశ గంగ జలాలను ఉపయోగిస్తారు.' },
        japali_theertham: { name: 'జపాలి తీర్థం', category: 'తీర్థం', description: 'ప్రశాంతమైన అడవుల మధ్య ఉన్న పవిత్ర కోనేరు మరియు హనుమాన్ ఆలయం.', importance: 'ఇక్కడ జబాలి మహర్షి తపస్సు చేశారని నమ్ముతారు. ఈ పవిత్ర జలంలో స్నానం చేయడం చాలా పుణ్యప్రదమని భావిస్తారు.' },
        sila_thoranam: { name: 'శిలా తోరణం', category: 'వ్యూ పాయింట్', description: 'ఒక సహజ రాతి వంపు, ఒక ప్రత్యేకమైన భౌగోళిక నిర్మాణం.', importance: 'ఈ సహజ వంపు ప్రపంచంలో మూడింటిలో ఒకటి మరియు అపారమైన పురావస్తు మరియు పౌరాణిక ప్రాముఖ్యతను కలిగి ఉంది.' },
        gogarbham: { name: 'గోగర్భం డ్యామ్', category: 'వ్యూ పాయింట్', description: 'తిరుమలకు నీటిని సరఫరా చేసే ప్రశాంతమైన డ్యామ్ మరియు జలాశయం.', importance: 'పాపవినాశనం డ్యామ్ అని కూడా పిలుస్తారు, ఇది ప్రశాంతమైన వాతావరణం మరియు సుందరమైన దృశ్యాలను అందిస్తుంది.' },
        srivari_padalu: { name: 'శ్రీవారి పాదాలు', category: 'పవిత్ర స్థలం', description: 'శ్రీ వేంకటేశ్వర స్వామి భూమిపై మొదట పాదాలు మోపిన ప్రదేశంగా నమ్ముతారు.', importance: 'నారాయణాద్రి కొండపై ఎత్తైన ప్రదేశంలో ఉన్న ఈ ప్రదేశాన్ని భక్తులు స్వామి వారి దివ్య పాదాల ఆశీర్వాదం కోసం సందర్శిస్తారు.' },
        chakra_theertham: { name: 'చక్ర తీర్థం', category: 'తీర్థం', description: 'విష్ణువు యొక్క సుదర్శన చక్రంతో సంబంధం ఉన్న పవిత్ర జలాశయం.', importance: 'ఇక్కడ బ్రహ్మ దేవుడు తపస్సు చేశాడని, మరియు విష్ణువు తన సుదర్శన చక్రాన్ని ఈ ప్రదేశాన్ని శుభ్రపరచడానికి ప్రయోగించగా ఈ పవిత్ర కోనేరు ఏర్పడిందని నమ్ముతారు.' }
    },
    buttons: {
      viewOnMap: 'మ్యాప్‌లో చూడండి',
      listenToExplanation: 'ఆడియో ప్లే చేయండి',
      stopExplanation: 'ఆడియో ఆపండి',
      askNarada: 'నారదుడిని అడగండి',
      changeLanguage: 'భాషను మార్చండి',
      startSpeaking: 'మాట్లాడటం ప్రారంభించండి',
      stopSpeaking: 'మాట్లాడటం ఆపండి'
    },
    rules: {
      title: 'తప్పనిసరి నియమాలు',
      dress_code: { title: 'వస్త్రధారణ', description: 'సంప్రదాయ వస్త్రధారణ తప్పనిసరి.' },
      prohibited_items: { title: 'నిషేధిత వస్తువులు', description: 'మద్యం, మాంసాహారం, పొగాకు నిషేధించబడ్డాయి.' },
      cleanliness: { title: 'పరిశుభ్రత', description: 'పరిశుభ్రతను పాటించండి.' },
      queue_discipline: { title: 'క్యూలో క్రమశిక్షణ', description: 'క్యూ లైన్లలో క్రమశిక్షణ పాటించండి.' },
      mobile_usage: { title: 'మొబైల్ వాడకం', description: 'మొబైల్ ఫోన్‌లను సైలెంట్ మోడ్‌లో ఉంచాలి.' },
      respectful_behaviour: { title: 'గౌరవప్రదమైన ప్రవర్తన', description: 'భక్తి వాతావరణాన్ని కాపాడండి.' },
      rulesList: commonRules,
    },
    narada: {
        header: 'నారదుడిని అడగండి',
        placeholder: 'మీ ప్రశ్నను టైప్ చేయండి...',
        tapToSpeak: 'మాట్లాడటానికి నొక్కండి',
        listening: 'వినడం జరుగుతోంది...',
        playingAudio: 'ఆడియో ప్లే అవుతోంది...',
        generatingResponse: 'నారదుడు ఆలోచిస్తున్నాడు...',
        greeting: 'గోవిందా! గోవిందా! స్వాగతం ప్రియ భక్తుడా. ఈ రోజు మీ పవిత్ర యాత్రలో నేను మీకు ఎలా సహాయపడగలను?'
    },
    virtualGuide: {
        title: 'వర్చువల్ గైడ్',
        prompt: 'ఈ స్థలం గురించి అడగండి...',
        speakPrompt: 'మైక్‌ను నొక్కి ఒక ప్రశ్న అడగండి'
    }
  },
  hi: {
    appName: 'गोविंद मित्र',
    nav: {
      home: 'होम',
      important: 'महत्वपूर्ण स्थान',
      emergency: 'आपातकालीन',
      spiritual: 'आध्यात्मिक स्थान',
      rules: 'नियम',
    },
    home: {
      tagline1: 'गोविंद मित्र – तिरुमाला में आपका भक्त मित्र',
      tagline2: 'हर कदम पर दिव्य मार्गदर्शन',
      tagline3: 'पवित्र यात्रा के लिए सरल मार्गदर्शन',
      intro: 'गोविंद मित्र तिरुमाला में आपका मार्गदर्शक है।',
    },
    places: {
        cro_office: { name: 'CRO कार्यालय', category: 'सेवा', description: 'आवास और सामान्य पूछताछ के लिए कार्यालय।' },
        railway_enquiry: { name: 'रेलवे पूछताछ', category: 'सहायता', description: 'रेलवे सेवाओं के लिए सूचना।' },
        ttd_info_desk: { name: 'टीटीडी सहायता डेस्क', category: 'सहायता', description: 'टीटीडी सेवाओं के बारे में जानकारी।' },
        accommodation_counters: { name: 'आवास काउंटर', category: 'सेवा', description: 'बुकिंग और चेक-इन के लिए काउंटर।' },
        drinking_water: { name: 'पीने का पानी', category: 'सुविधा', description: 'शुद्ध पीने का पानी उपलब्ध है।' },
        toilets: { name: 'शौचालय', category: 'सुविधा', description: 'सार्वजनिक शौचालय।' },
        baby_care: { name: 'शिशु देखभाल कक्ष', category: 'सुविधा', description: 'बच्चों के लिए सुविधा।' },
        medical_emergency: { name: 'चिकित्सा आपातकाल', category: 'आपातकालीन', description: 'अश्विनी अस्पताल 24x7 सेवाएं प्रदान करता है।' },
        police_security: { name: 'पुलिस / सुरक्षा', category: 'आपातकालीन', description: 'सुरक्षा संबंधी मुद्दे के लिए संपर्क करें।' },
        fire_station: { name: 'दमकल केंद्र', category: 'आपातकालीन', description: 'आग से संबंधित आपातकालीन सेवाएं।' },
        helpline: { name: 'हेल्पलाइन', category: 'आपातकालीन', description: '1800-425-4141 पर कॉल करें।' },
        lost_and_found: { name: 'खोया-पाया केंद्र', category: 'सहायता', description: 'खोई हुई वस्तुओं की रिपोर्ट करें।' },
        main_temple: { name: 'मुख्य श्रीवारी मंदिर', category: 'मंदिर', description: 'कलियुग वैकुंठम, भगवान वेंकटेश्वर का पवित्र निवास, जो अपने भक्तों की रक्षा के लिए यहां विराजमान हैं।', importance: 'इसे "भूलोक वैकुंठ" (पृथ्वी पर विष्णु का निवास) कहा जाता है। यहाँ भगवान स्वयंभू प्रकट हुए हैं। माना जाता है कि उनकी दिव्य मूर्ति के दर्शन मात्र से मोक्ष की प्राप्ति होती है और सभी मनोकामनाएं पूर्ण होती हैं।' },
        bedi_anjaneyaswamy: { name: 'बेदी अंजनेयस्वामी मंदिर', category: 'मंदिर', description: 'मुख्य मंदिर के ठीक सामने स्थित भगवान हनुमान को समर्पित एक मंदिर।', importance: 'माना जाता है कि भगवान हनुमान मुख्य मंदिर की रक्षा के लिए यहां तैनात हैं। भक्त श्रीवारी मंदिर में प्रवेश करने से पहले यहां प्रार्थना करते हैं।' },
        varaha_swamy: { name: 'वराह स्वामी मंदिर', category: 'मंदिर', description: 'स्वामी पुष्करिणी के तट पर स्थित, भगवान विष्णु के वराह अवतार को समर्पित।', importance: 'परंपरा के अनुसार, भक्तों को मुख्य श्रीवारी मंदिर जाने से पहले वराह स्वामी मंदिर के दर्शन करने चाहिए।' },
        papavinasanam: { name: 'पापविनाशनम', category: 'तीर्थम', description: 'एक पवित्र झरना जहां भक्त अपने पापों को धोने के लिए पवित्र स्नान करते हैं।', importance: 'नाम का अर्थ ही है "पापों का नाशक"। माना जाता है कि यहां के जल में दिव्य शुद्धिकरण शक्तियां हैं।' },
        akasha_ganga: { name: 'आकाश गंगा', category: 'तीर्थम', description: 'एक बारहमासी झरना जिसे आकाशीय मूल का माना जाता है।', importance: 'आकाश गंगा के जल का उपयोग श्रीवारी मंदिर में मुख्य देवता के दैनिक अभिषेक के लिए किया जाता है।' },
        japali_theertham: { name: 'जपाली तीर्थम', category: 'तीर्थम', description: 'शांत जंगलों के बीच एक पवित्र तालाब और हनुमान मंदिर।', importance: 'माना जाता है कि ऋषि जाबालि ने यहां तपस्या की थी। इस पवित्र जल में डुबकी लगाना अत्यंत पुण्यकारी माना जाता है।' },
        sila_thoranam: { name: 'सिला थोरणम', category: 'दृश्य बिंदु', description: 'एक प्राकृतिक चट्टान मेहराब, एक अद्वितीय भूवैज्ञानिक संरचना।', importance: 'यह प्राकृतिक मेहराब दुनिया में केवल तीन में से एक है और इसका अत्यधिक पुरातात्विक और पौराणिक महत्व है।' },
        gogarbham: { name: 'गोगर्भम बांध', category: 'दृश्य बिंदु', description: 'तिरुमाला को पानी की आपूर्ति करने वाला एक शांत बांध और जलाशय।', importance: 'इसे पापविनाशनम बांध के रूप में भी जाना जाता है, यह एक शांत वातावरण और सुंदर दृश्य प्रस्तुत करता है।' },
        srivari_padalu: { name: 'श्रीवारी पादालु', category: 'पवित्र स्थान', description: 'माना जाता है कि यह वह पहला स्थान है जहां भगवान वेंकटेश्वर ने पृथ्वी पर अपने चरण रखे थे।', importance: 'भक्त भगवान के दिव्य चरणों का आशीर्वाद लेने के लिए नारायणद्री पहाड़ी के सबसे ऊंचे बिंदु पर स्थित इस स्थान पर जाते हैं।' },
        chakra_theertham: { name: 'चक्र तीर्थम', category: 'तीर्थम', description: 'भगवान विष्णु के सुदर्शन चक्र से जुड़ा एक पवित्र जल निकाय।', importance: 'माना जाता है कि भगवान ब्रह्मा ने यहां तपस्या की थी, और भगवान विष्णु ने इस स्थान को शुद्ध करने के लिए अपना सुदर्शन चक्र चलाया, जिससे इस पवित्र तालाब का निर्माण हुआ।' }
    },
    buttons: {
      viewOnMap: 'मानचित्र पर देखें',
      listenToExplanation: 'ऑडियो चलाएं',
      stopExplanation: 'ऑडियो रोकें',
      askNarada: 'नारद से पूछें',
      changeLanguage: 'भाषा बदलें',
      startSpeaking: 'बोलना शुरू करें',
      stopSpeaking: 'बोलना बंद करें'
    },
    rules: {
      title: 'अनिवार्य नियम',
      dress_code: { title: 'ड्रेस कोड', description: 'पारंपरिक वेशभूषा अनिवार्य है।' },
      prohibited_items: { title: 'निषिद्ध वस्तुएं', description: 'शराब, मांसाहारी भोजन, तंबाकू वर्जित हैं।' },
      cleanliness: { title: 'स्वच्छता', description: 'स्वच्छता बनाए रखें।' },
      queue_discipline: { title: 'कतार अनुशासन', description: 'कतार में अनुशासन बनाए रखें।' },
      mobile_usage: { title: 'मोबाइल का उपयोग', description: 'मोबाइल साइलेंट मोड पर रखें।' },
      respectful_behaviour: { title: 'सम्मानजनक व्यवहार', description: 'भक्तिमय वातावरण बनाए रखें।' },
      rulesList: commonRules,
    },
    narada: {
        header: 'नारद से पूछें',
        placeholder: 'प्रश्न पूछें...',
        tapToSpeak: 'बोलने के लिए टैप करें',
        listening: 'सुन रहा है...',
        playingAudio: 'ऑडियो चल रहा है...',
        generatingResponse: 'नारद सोच रहे हैं...',
        greeting: 'गोविंदा! गोविंदा! स्वागत है, प्रिय भक्त। आज आपकी पवित्र यात्रा में मैं आपकी कैसे सहायता कर सकता हूँ?'
    },
     virtualGuide: {
        title: 'वर्चुअल गाइड',
        prompt: 'पूछें...',
        speakPrompt: 'प्रश्न पूछें'
    }
  },
  ta: {
    appName: 'கோவிந்த மித்ரா',
    nav: {
      home: 'முகப்பு',
      important: 'முக்கிய இடங்கள்',
      emergency: 'அவசர உதவி',
      spiritual: 'ஆன்மீக இடங்கள்',
      rules: 'விதிகள்',
    },
    home: {
      tagline1: 'கோவிந்த மித்ரா – திருமலையில் உங்கள் நண்பன்',
      tagline2: 'தெய்வீக வழிகாட்டுதல்',
      tagline3: 'எளிய வழிகாட்டி',
      intro: 'கோவிந்த மித்ரா திருமலையில் உங்கள் வழிகாட்டி.',
    },
    places: {
        cro_office: { name: 'சி.ஆர்.ஓ அலுவலகம்', category: 'சேவை', description: 'மத்திய வரவேற்பு அலுவலகம்.' },
        railway_enquiry: { name: 'ரயில்வே விசாரணை', category: 'உதவி', description: 'ரயில் சேவைத் தகவல்.' },
        ttd_info_desk: { name: 'TTD தகவல் மையம்', category: 'உதவி', description: 'தகவல் உதவி மையங்கள்.' },
        accommodation_counters: { name: 'தங்குமிட கவுண்டர்கள்', category: 'சேவை', description: 'தங்குமிட முன்பதிவு.' },
        drinking_water: { name: 'குடிநீர் வசதி', category: 'வசதி', description: 'சுத்திகரிக்கப்பட்ட குடிநீர்.' },
        toilets: { name: 'கழிவறைகள்', category: 'வசதி', description: 'பொதுக் கழிவறைகள்.' },
        baby_care: { name: 'குழந்தை பராமரிப்பு', category: 'வசதி', description: 'குழந்தை பராமரிப்பு வசதிகள்.' },
        medical_emergency: { name: 'மருத்துவமனை', category: 'அவசரம்', description: '24x7 மருத்துவ சேவை.' },
        police_security: { name: 'காவல்துறை', category: 'அவசரம்', description: 'பாதுகாப்பு உதவி.' },
        fire_station: { name: 'தீயணைப்பு நிலையம்', category: 'அவசரம்', description: 'தீயணைப்பு சேவை.' },
        helpline: { name: 'உதவி மையம்', category: 'அவசரம்', description: '1800-425-4141 ஐ அழைக்கவும்.' },
        lost_and_found: { name: 'மீட்பு மையம்', category: 'உதவி', description: 'தொலைந்த பொருட்கள் மீட்பு.' },
        main_temple: { name: 'ஸ்ரீவாரி கோவில்', category: 'கோவில்', description: 'கலியுக வைகுண்டம், பக்தர்களை காக்க நிற்கும் ஸ்ரீ வெங்கடேஸ்வர சுவாமியின் புனித ஆலயம்.', importance: 'இது "பூலோக வைகுண்டம்" என்று அழைக்கப்படுகிறது. இங்கு இறைவன் சுயம்புவாக (தானாகத் தோன்றியவர்) அருள்பாலிக்கிறார். அந்த திவ்ய மங்கள ரூபத்தை தரிசிப்பது பிறவிப் பெருங்கடலை கடக்க உதவும் என்று நம்பப்படுகிறது.' },
        bedi_anjaneyaswamy: { name: 'பேடி ஆஞ்சநேயர் கோவில்', category: 'கோவில்', description: 'முக்கிய கோவிலுக்கு எதிரே அமைந்துள்ள பகவான் அனுமனுக்கு அர்ப்பணிக்கப்பட்ட கோவில்.', importance: 'முக்கிய கோவிலைப் பாதுகாக்க அனுமன் இங்கு நிறுத்தப்பட்டுள்ளதாக நம்பப்படுகிறது. பக்தர்கள் ஸ்ரீவாரி கோவிலுக்குள் நுழைவதற்கு முன் இங்கு பிரார்த்தனை செய்கிறார்கள்.' },
        varaha_swamy: { name: 'வராஹ சுவாமி கோவில்', category: 'கோவில்', description: 'சுவாமி புஷ்கரிணி கரையில் அமைந்துள்ளது, விஷ்ணுவின் வராஹ அவதாரத்திற்கு அர்ப்பணிக்கப்பட்டுள்ளது.', importance: 'பாரம்பரியத்தின் படி, பக்தர்கள் முக்கிய ஸ்ரீவாரி கோவிலுக்குச் செல்வதற்கு முன் முதலில் வராஹ சுவாமி கோவிலுக்குச் செல்ல வேண்டும்.' },
        papavinasanam: { name: 'பாபவிநாசனம்', category: 'தீர்த்தம்', description: 'பக்தர்கள் தங்கள் பாவங்களைக் கழுவ புனித நீராடும் ஒரு புனித நீர்வீழ்ச்சி.', importance: 'பெயரே "பாவங்களை அழிப்பவர்" என்று பொருள்படும். இங்குள்ள நீர் தெய்வீக சுத்திகரிப்பு சக்திகளைக் கொண்டிருப்பதாக நம்பப்படுகிறது.' },
        akasha_ganga: { name: 'ஆகாய கங்கை', category: 'தீர்த்தம்', description: 'விண்ணுலகில் இருந்து தோன்றியதாக நம்பப்படும் வற்றாத நீர்வீழ்ச்சி.', importance: 'ஸ்ரீவாரி கோவிலில் உள்ள முக்கிய தெய்வத்தின் தினசரி அபிஷேகத்திற்கு ஆகாய கங்கை நீர் பயன்படுத்தப்படுகிறது.' },
        japali_theertham: { name: 'ஜாபாலி தீர்த்தம்', category: 'தீர்த்தம்', description: 'அமைதியான காடுகளுக்கு மத்தியில் உள்ள ஒரு புனித குளம் மற்றும் அனுமன் கோவில்.', importance: 'ஜாபாலி முனிவர் இங்கு தவம் செய்ததாக நம்பப்படுகிறது. இந்த புனித நீரில் நீராடுவது மிகவும் புண்ணியமாக கருதப்படுகிறது.' },
        sila_thoranam: { name: 'சிலா தோரணம்', category: 'காட்சி முனை', description: 'ஒரு இயற்கையான பாறை வளைவு, ஒரு தனித்துவமான புவியியல் உருவாக்கம்.', importance: 'இந்த இயற்கை வளைவு உலகில் உள்ள மூன்றில் ஒன்றாகும், மேலும் இது மகத்தான தொல்பொருள் மற்றும் புராண முக்கியத்துவத்தைக் கொண்டுள்ளது.' },
        gogarbham: { name: 'கோகர்ப்பம் அணை', category: 'காட்சி முனை', description: 'திருமலைக்கு நீர் வழங்கும் ஒரு அமைதியான அணை மற்றும் நீர்த்தேக்கம்.', importance: 'பாபவிநாசனம் அணை என்றும் அழைக்கப்படும் இது, அமைதியான சூழலையும் அழகிய காட்சிகளையும் வழங்குகிறது.' },
        srivari_padalu: { name: 'ஸ்ரீவாரி பாதங்கள்', category: 'புனித இடம்', description: 'பகவான் வெங்கடேஸ்வரர் பூமியில் தனது பாதங்களை வைத்த முதல் இடம் என்று நம்பப்படுகிறது.', importance: 'பக்தர்கள் நாராயணத்ரி மலையின் மிக உயர்ந்த இடத்தில் உள்ள இந்த இடத்திற்குச் சென்று இறைவனின் தெய்வீகப் பாதங்களின் ஆசீர்வாதத்தைப் பெறுகிறார்கள்.' },
        chakra_theertham: { name: 'சக்ர தீர்த்தம்', category: 'தீர்த்தம்', description: 'பகவான் விஷ்ணுவின் சுதர்சன சக்கரத்துடன் தொடர்புடைய ஒரு புனித நீர்நிலை.', importance: 'பகவான் பிரம்மா இங்கு தவம் செய்ததாகவும், பகவான் விஷ்ணு இந்த இடத்தை சுத்தப்படுத்த தனது சுதர்சன சக்கரத்தைச் செலுத்தி, இந்த புனித குளத்தை உருவாக்கியதாகவும் நம்பப்படுகிறது.' }
    },
    buttons: {
      viewOnMap: 'வரைபடம்',
      listenToExplanation: 'ஆடியோவை இயக்கவும்',
      stopExplanation: 'ஆடியோவை நிறுத்தவும்',
      askNarada: 'நாரதரிடம் கேளுங்கள்',
      changeLanguage: 'மொழி',
      startSpeaking: 'பேசத் தொடங்குங்கள்',
      stopSpeaking: 'நிறுத்துங்கள்'
    },
    rules: {
      title: 'கட்டாய விதிகள்',
      dress_code: { title: 'ஆடை கட்டுப்பாடு', description: 'பாரம்பரிய உடை அவசியம்.' },
      prohibited_items: { title: 'தடைசெய்யப்பட்டவை', description: 'மது, அசைவம், புகைபிடித்தல் தடை.' },
      cleanliness: { title: 'தூய்மை', description: 'தூய்மையைப் பேணுங்கள்.' },
      queue_discipline: { title: 'வரிசை ஒழுங்கு', description: 'வரிசையில் அமைதி காக்கவும்.' },
      mobile_usage: { title: 'மொபைல்', description: 'மொபைல் அணைக்கவும்.' },
      respectful_behaviour: { title: 'மரியாதை', description: 'பக்தி சூழலைப் பேணுங்கள்.' },
      rulesList: commonRules,
    },
    narada: {
        header: 'நாரதரிடம் கேளுங்கள்',
        placeholder: 'கேள்வி கேட்கவும்...',
        tapToSpeak: 'பேச தட்டவும்',
        listening: 'கேட்கிறது...',
        playingAudio: 'ஒலிக்கிறது...',
        generatingResponse: 'சிந்திக்கிறார்...',
        greeting: 'கோவிந்தா! கோவிந்தா! வருக பக்தரே. உங்கள் புனித யாத்திரையில் நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?'
    },
    virtualGuide: {
        title: 'வழிகாட்டி',
        prompt: 'கேளுங்கள்...',
        speakPrompt: 'கேள்வி'
    }
  },
  kn: {
    appName: 'ಗೋವಿಂದ ಮಿತ್ರ',
    nav: {
      home: 'ಮುಖಪುಟ',
      important: 'ಪ್ರಮುಖ ಸ್ಥಳಗಳು',
      emergency: 'ತುರ್ತು ಸೇವೆ',
      spiritual: 'ಆಧ್ಯಾತ್ಮಿಕ',
      rules: 'ನಿಯಮಗಳು',
    },
    home: {
      tagline1: 'ಗೋವಿಂದ ಮಿತ್ರ – ತಿರುಮಲದಲ್ಲಿ ನಿಮ್ಮ ಸ್ನೇಹಿತ',
      tagline2: 'ದೈವಿಕ ಮಾರ್ಗದರ್ಶನ',
      tagline3: 'ಸರಳ ಮಾರ್ಗದರ್ಶನ',
      intro: 'ಗೋವಿಂದ ಮಿತ್ರ ತಿರುಮಲದಲ್ಲಿ ನಿಮ್ಮ ಮಾರ್ಗದರ್ಶಿ.',
    },
    places: {
        cro_office: { name: 'ಸಿ.ಆರ್.ಒ ಕಚೇರಿ', category: 'ಸೇವೆ', description: 'ಕೇಂದ್ರ ಸ್ವಾಗತ ಕಚೇರಿ.' },
        railway_enquiry: { name: 'ರೈಲ್ವೆ ವಿಚಾರಣೆ', category: 'ಸಹಾಯ', description: 'ರೈಲ್ವೆ ಮಾಹಿತಿ.' },
        ttd_info_desk: { name: 'ಮಾಹಿತಿ ಕೇಂದ್ರ', category: 'ಸಹಾಯ', description: 'ಮಾಹಿತಿ ಸಹಾಯ.' },
        accommodation_counters: { name: 'ವಸತಿ ಕೌಂಟರ್‌ಗಳು', category: 'ಸೇವೆ', description: 'ವಸತಿ ಕಾಯ್ದಿರಿಸುವಿಕೆ.' },
        drinking_water: { name: 'ಕುಡಿಯುವ ನೀರು', category: 'ಸೌಲಭ್ಯ', description: 'ಶುದ್ಧ ಕುಡಿಯುವ ನೀರು.' },
        toilets: { name: 'ಶೌಚಾಲಯಗಳು', category: 'ಸೌಲಭ್ಯ', description: 'ಸಾರ್ವಜನಿಕ ಶೌಚಾಲಯಗಳು.' },
        baby_care: { name: 'ಶಿಶು ಆರೈಕೆ', category: 'ಸೌಲಭ್ಯ', description: 'ಮಕ್ಕಳ ಆರೈಕೆ.' },
        medical_emergency: { name: 'ಆಸ್ಪತ್ರೆ', category: 'ತುರ್ತು', description: '24x7 ವೈದ್ಯಕೀಯ ಸೇವೆ.' },
        police_security: { name: 'ಪೊಲೀಸ್', category: 'ತುರ್ತು', description: 'ಭದ್ರತಾ ಸೇವೆ.' },
        fire_station: { name: 'ಅಗ್ನಿಶಾಮಕ ಠಾಣೆ', category: 'ತುರ್ತು', description: 'ತುರ್ತು ಸೇವೆ.' },
        helpline: { name: 'ಸಹಾಯವಾಣಿ', category: 'ತುರ್ತು', description: '1800-425-4141 ಗೆ ಕರೆ ಮಾಡಿ.' },
        lost_and_found: { name: 'ಕಳೆದುಹೋದ ವಸ್ತುಗಳು', category: 'ಸಹಾಯ', description: 'ಸಹಾಯ ಪಡೆಯಿರಿ.' },
        main_temple: { name: 'ಶ್ರೀವಾರಿ ದೇವಾಲಯ', category: 'ದೇವಾಲಯ', description: 'ಕಲಿಯುಗ ವೈಕುంಠ, ಭಕ್ತರನ್ನು ರಕ್ಷಿಸಲು ನಿಂತಿರುವ ಶ್ರೀ ವೆಂಕಟೇಶ್ವರ ಸ್ವಾಮಿಯ ಪವಿತ್ರ ಸನ್ನಿಧಿ.', importance: 'ಇದನ್ನು "ಭೂಲೋಕ ವೈಕುಂಠ" ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಇಲ್ಲಿ ಸ್ವಾಮಿಯು ಸ್ವಯಂಭುವಾಗಿ ನೆಲೆಸಿದ್ದಾನೆ. ಆ ದಿವ್ಯ ಮೂರ್ತಿಯ ದರ್ಶನವು ಸಕಲ ಪಾಪಗಳನ್ನು ಪರಿಹರಿಸಿ ಮುಕ್ತಿಯನ್ನು ನೀಡುತ್ತದೆ ಎಂದು ನಂಬಲಾಗಿದೆ.' },
        bedi_anjaneyaswamy: { name: 'ಬೇಡಿ ಆಂಜನೇಯಸ್ವಾಮಿ', category: 'ದೇವಾಲಯ', description: 'ಮುಖ್ಯ ದೇವಾಲಯದ ಎದುರು ಇರುವ ಹನುಮಂತನಿಗೆ ಸಮರ್ಪಿತವಾದ ದೇವಾಲಯ.', importance: 'ಮುಖ್ಯ ದೇವಾಲಯವನ್ನು ರಕ್ಷಿಸಲು ಹನುಮಂತನು ಇಲ್ಲಿದ್ದಾನೆ ಎಂದು ನಂಬಲಾಗಿದೆ. ಭಕ್ತರು ಶ್ರೀವಾರಿ ದೇವಾಲಯವನ್ನು ಪ್ರವೇಶಿಸುವ ಮೊದಲು ಇಲ್ಲಿ ಪ್ರಾರ್ಥನೆ ಸಲ್ಲಿಸುತ್ತಾರೆ.' },
        varaha_swamy: { name: 'ವರಾಹ ಸ್ವಾಮಿ', category: 'ದೇವಾಲಯ', description: 'ಸ್ವಾಮಿ ಪುಷ್ಕರಿಣಿ ದಡದಲ್ಲಿದೆ, ವಿಷ್ಣುವಿನ ವರಾಹ ಅವತಾರಕ್ಕೆ ಸಮರ್ಪಿತವಾಗಿದೆ.', importance: 'ಸಂಪ್ರದಾಯದ ಪ್ರಕಾರ, ಭಕ್ತರು ಮುಖ್ಯ ಶ್ರೀವಾರಿ ದೇವಾಲಯಕ್ಕೆ ಭೇಟಿ ನೀಡುವ ಮೊದಲು ವರಾಹ ಸ್ವಾಮಿ ದೇವಾಲಯಕ್ಕೆ ಭೇಟಿ ನೀಡಬೇಕು.' },
        papavinasanam: { name: 'ಪಾಪವಿನಾಶನಂ', category: 'ತೀರ್ಥ', description: 'ಭಕ್ತರು ತಮ್ಮ ಪಾಪಗಳನ್ನು ತೊಳೆದುಕೊಳ್ಳಲು ಪವಿತ್ರ ಸ್ನಾನ ಮಾಡುವ ಪವಿತ್ರ ಜಲపಾತ.', importance: 'ಹೆಸರೇ ಸೂಚಿಸುವಂತೆ "ಪಾಪನಾಶಕ". ಇಲ್ಲಿನ ನೀರು ದೈವಿಕ ಶುದ್ಧೀಕರಣ ಶಕ್ತಿಯನ್ನು ಹೊಂದಿದೆ ಎಂದು ನಂಬಲಾಗಿದೆ.' },
        akasha_ganga: { name: 'ಆಕಾಶ ಗಂಗೆ', category: 'ತೀರ್ಥ', description: 'ದೈವಿಕ ಮೂಲದ ಎಂದು ನಂಬಲಾದ ಸದಾ ಹರಿಯುವ ಜಲಪಾತ.', importance: 'ಆಕಾಶ ಗಂಗೆಯ ನೀರನ್ನು ಶ್ರೀವಾರಿ ದೇವಾಲಯದ ಮುಖ್ಯ ದೇವರ ದೈನಂದಿನ ಅಭಿಷೇಕಕ್ಕೆ ಬಳಸಲಾಗುತ್ತದೆ.' },
        japali_theertham: { name: 'ಜಪಾಲಿ ತೀರ್ಥ', category: 'ತೀರ್ಥ', description: 'ಶಾಂತ ಕಾಡುಗಳ ನಡುವೆ ಇರುವ ಪವಿತ್ರ ಕೊಳ ಮತ್ತು ಹನುಮಾನ್ ದೇವಾಲಯ.', importance: 'ಜಬಾಲಿ ಮುನಿಗಳು ಇಲ್ಲಿ ತಪಸ್ಸು ಮಾಡಿದ್ದರೆಂದು ನಂಬಲಾಗಿದೆ. ಈ ಪವಿತ್ರ ನೀರಿನಲ್ಲಿ ಸ್ನಾನ ಮಾಡುವುದು ಅತ್ಯಂತ ಪುಣ್ಯದಾಯಕ.' },
        sila_thoranam: { name: 'ಶಿಲಾ ತೋರಣಂ', category: 'ವೀಕ್ಷಣೆ', description: 'ನೈಸರ್ಗಿಕ ಶಿಲಾ ಕಮಾನು, ಒಂದು ವಿಶಿಷ್ಟ ಭೂವೈಜ್ಞಾನಿಕ ರಚನೆ.', importance: 'ಈ ನೈಸರ್ಗಿಕ ಕಮಾನು ವಿಶ್ವದಲ್ಲಿರುವ ಮೂರರಲ್ಲಿ ಒಂದಾಗಿದೆ ಮತ್ತು ಅಪಾರ ಪುರಾತತ್ವ ಮತ್ತು ಪೌರಾಣಿಕ ಮಹತ್ವವನ್ನು ಹೊಂದಿದೆ.' },
        gogarbham: { name: 'ಗೋಗರ್ಭಂ ಅಣೆಕಟ್ಟು', category: 'ವೀಕ್ಷಣೆ', description: 'ತಿರುಮಲಕ್ಕೆ ನೀರು ಸರಬರಾಜು ಮಾಡುವ ಶಾಂತ ಅಣೆಕಟ್ಟು ಮತ್ತು ಜಲಾಶಯ.', importance: 'ಪಾಪವಿನಾಶನಂ ಅಣೆಕಟ್ಟು ಎಂದೂ ಕರೆಯಲ್ಪಡುವ ಇದು ಶಾಂತ ವಾತಾವರಣ ಮತ್ತು ಸುಂದರ ದೃಶ್ಯಗಳನ್ನು ನೀಡುತ್ತದೆ.' },
        srivari_padalu: { name: 'ಶ್ರೀವಾರಿ ಪಾದಗಳು', category: 'ಪವಿತ್ರ ಸ್ಥಳ', description: 'ಶ್ರೀ ವೆಂಕಟೇಶ್ವರ ಸ್ವಾಮಿ ಭೂಮಿಯ ಮೇಲೆ ಮೊದಲು ಪಾದ ಇಟ್ಟ ಸ್ಥಳ ಎಂದು ನಂಬಲಾಗಿದೆ.', importance: 'ನಾರಾಯಣಾದ್ರಿ ಬೆಟ್ಟದ ಅತ್ಯುನ್ನತ ಸ್ಥಳದಲ್ಲಿರುವ ಈ ತಾಣಕ್ಕೆ ಭಕ್ತರು ಸ್ವಾಮಿಯ ದೈವಿಕ ಪಾದಗಳಿಂದ ಆಶೀರ್ವಾದ ಪಡೆಯಲು ಭೇಟಿ ನೀಡುತ್ತಾರೆ.' },
        chakra_theertham: { name: 'ಚಕ್ರ ತೀರ್ಥ', category: 'ತೀರ್ಥ', description: 'ಭಗವಾನ್ ವಿಷ್ಣುವಿನ ಸುದರ್ಶನ ಚಕ್ರಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಪವಿತ್ರ ಜಲಮೂಲ.', importance: 'ಬ್ರಹ್ಮ ದೇವರು ಇಲ್ಲಿ ತಪಸ್ಸು ಮಾಡಿದರು ಮತ್ತು ವಿಷ್ಣುವು ಸ್ಥಳವನ್ನು ಶುದ್ಧೀಕರಿಸಲು ತನ್ನ ಸುದರ್ಶನ ಚಕ್ರವನ್ನು ಪ್ರಯೋಗಿಸಿ ಈ ಪವಿತ್ರ ಕೊಳವನ್ನು ಸೃಷ್ಟಿಸಿದನೆಂದು ನಂಬಲಾಗಿದೆ.' }
    },
    buttons: {
      viewOnMap: 'ನಕ್ಷೆ',
      listenToExplanation: 'ಆಡಿಯೋ ಪ್ಲೇ ಮಾಡಿ',
      stopExplanation: 'ಆಡಿಯೋ ನಿಲ್ಲಿಸಿ',
      askNarada: 'ನಾರದರನ್ನು ಕೇಳಿ',
      changeLanguage: 'ಭಾಷೆ',
      startSpeaking: 'ಮಾತನಾಡಿ',
      stopSpeaking: 'ನಿಲ್ಲಿಸಿ'
    },
    rules: {
      title: 'ನಿಯಮಗಳು',
      dress_code: { title: 'ವಸ್ತ್ರಸಂಹಿತೆ', description: 'ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಪು ಕಡ್ಡಾಯ.' },
      prohibited_items: { title: 'ನಿಷೇಧಿತ', description: 'ಮದ್ಯ, ಮಾಂಸ, ಧೂಮಪಾನ ನಿಷೇಧ.' },
      cleanliness: { title: 'ಸ್ವಚ್ಛತೆ', description: 'ಸ್ವಚ್ಛತೆ ಕಾಪಾಡಿ.' },
      queue_discipline: { title: 'ಶಿಸ್ತು', description: 'ಸರದಿಯಲ್ಲಿ ಶಿಸ್ತು ಪಾಲಿಸಿ.' },
      mobile_usage: { title: 'ಮೊಬೈಲ್', description: 'ಮೊಬೈಲ್ ಸ್ವಿಚ್ ಆಫ್ ಮಾಡಿ.' },
      respectful_behaviour: { title: 'ಗೌರವ', description: 'ಭಕ್ತಿ ಭಾವ ಕಾಪಾಡಿ.' },
      rulesList: commonRules,
    },
    narada: {
        header: 'ನಾರದರನ್ನು ಕೇಳಿ',
        placeholder: 'ಪ್ರಶ್ನೆ ಕೇಳಿ...',
        tapToSpeak: 'ಟ್ಯಾಪ್ ಮಾಡಿ',
        listening: 'ಕೇಳುತ್ತಿದೆ...',
        playingAudio: 'ಪ್ಲೇ ಆಗುತ್ತಿದೆ...',
        generatingResponse: 'ಯೋಚಿಸುತ್ತಿದ್ದಾರೆ...',
        greeting: 'ಗೋವಿಂದಾ! ಗೋವಿಂದಾ! ಸುಸ್ವಾಗತ ಪ್ರಿಯ ಭಕ್ತರೇ. ನಿಮ್ಮ ಈ ಪವಿತ್ರ ಯಾತ್ರೆಯಲ್ಲಿ ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?'
    },
    virtualGuide: {
        title: 'ಗೈಡ್',
        prompt: 'ಕೇಳಿ...',
        speakPrompt: 'ಪ್ರಶ್ನೆ'
    }
  }
};