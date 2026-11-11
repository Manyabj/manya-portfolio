// Single source of truth. Everything here comes from Resume.pdf.
// To update the site, edit this file only.

export const profile = {
  name: 'Manya B J',
  titles: ['AI Engineer', 'Machine Learning Practitioner', 'Software Developer', 'Data Analytics Enthusiast'],
  headline: 'I build data-driven AI solutions that learn, automate and explain.',
  intro:
    'Computer Science & Artificial Intelligence Engineering graduate with hands-on experience in software development and AI-based projects. Skilled in Python and Machine Learning, with a strong interest in building innovative, data-driven solutions.',
  email: 'manyabj85@gmail.com',
  phone: '+91-9353497265',
  linkedin: 'https://linkedin.com/in/manya-b-j',
  github: 'https://github.com/Manyabj',
  resumeFile: 'resume.pdf', // file lives in /public
  resumeDownloadName: 'Manya_B_J_Resume.pdf',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const aboutPoints = [
  { title: 'Education', text: 'B.E. in Computer Science – Artificial Intelligence Engineering, Maharaja Institute of Technology Mysore (2026), CGPA 9.41 / 10.' },
  { title: 'Achievement', text: '4th Rank in CSE–Artificial Intelligence at Visvesvaraya Technological University (VTU).' },
  { title: 'Interests', text: 'Machine learning, deep learning for image classification, data analytics dashboards, and Generative AI automation.' },
  { title: 'Looking for', text: 'Roles where I can solve problems in dynamic, fast-paced environments and build innovative AI-driven products.' },
]

export const skillGroups = [
  { title: 'Programming Languages', items: ['Python', 'Java', 'C', 'HTML'] },
  { title: 'AI & Machine Learning', items: ['Machine Learning', 'scikit-learn', 'Pandas', 'LLM'] },
  { title: 'Deep Learning', items: ['Deep Learning', 'TensorFlow', 'Keras', 'CNN', 'Image Classification', 'Transfer Learning', 'Data Augmentation'] },
  { title: 'Data Analytics & Visualisation', items: ['Exploratory Data Analysis', 'Insight Generation', 'Power BI', 'Tableau', 'MS Excel', 'SQL'] },
  { title: 'Generative AI & Automation', items: ['Generative AI', 'n8n', 'Webhooks', 'APIs', 'JSON workflows'] },
  { title: 'Tools & Platforms', items: ['Git', 'GitHub', 'Google Colab', 'Jupyter Notebook', 'VS Code'] },
]

// repo / demo are null because the resume gives no project links.
// Add them as strings, e.g. repo: 'https://github.com/Manyabj/your-repo' and the buttons appear automatically.
export const projects = [
  {
    id: 'pneumonia',
    title: 'Pneumonia Prediction Using CNN',
    period: 'Jan 2025 – Apr 2025',
    kind: 'Deep learning · Healthcare',
    description: 'A CNN-based deep learning model that classifies chest X-ray images for pneumonia detection with high prediction accuracy.',
    features: [
      'Engineered a CNN to classify chest X-ray images for pneumonia detection',
      'Applied data augmentation, class balancing and transfer learning to healthcare datasets to boost diagnostic accuracy and model robustness',
    ],
    tech: ['Python', 'TensorFlow'],
    repo: null,
    demo: null,
  },
  {
    id: 'sales',
    title: 'Sales Dashboard for Regional Performance',
    period: 'Feb 2025 – Mar 2025',
    kind: 'Data analytics · Dashboards',
    description: 'Interactive dashboards that turn multi-year retail sales data into KPIs and regional performance insights.',
    features: [
      'Conducted EDA on multi-year retail sales datasets to identify revenue trends and business performance insights',
      'Designed interactive dashboards in Tableau and Power BI to present KPIs and support data-driven decision-making for stakeholders',
    ],
    tech: ['Power BI', 'Tableau', 'EDA'],
    repo: null,
    demo: null,
  },
  {
    id: 'objection',
    title: 'AI Objection Handler Agent Using n8n',
    period: 'Feb 2026 – May 2026',
    kind: 'Generative AI · Automation',
    description: 'An AI-powered workflow automation system that automates intelligent response handling using n8n, webhooks and LLM integration.',
    features: [
      'Architected the workflow system using n8n, webhooks and LLM integration',
      'Implemented automated workflows for JSON response generation, input validation and real-time task automation to improve execution throughput',
    ],
    tech: ['n8n', 'Generative AI', 'Webhooks', 'LLM'],
    repo: null,
    demo: null,
  },
]

export const experience = [
  {
    role: 'AI & Automation Intern',
    org: 'Learner’s Byte',
    mode: 'Remote',
    period: 'Feb 2026 – May 2026',
    link: 'https://drive.google.com/file/d/1mSyLibuevVVsQC-bbdtqC6S4Yq5crdU2/view?usp=sharing',
    tech: ['n8n', 'Generative AI', 'Webhooks'],
    points: [
      'Leveraged Generative AI concepts and n8n automation workflows to develop intelligent and automated business solutions',
      'Integrated webhooks, APIs and JSON-based workflows for real-time task automation and process optimisation',
      'Collaborated on AI-driven automation projects to improve pipeline reliability, scalability and operational productivity',
    ],
  },
  {
    role: 'AI & Data Analytics Intern',
    org: 'Edunet Foundation',
    mode: 'Remote',
    period: 'Apr 2025 – May 2025',
    link: 'https://drive.google.com/file/d/1H97unpkUNElg3nykvocDgqLGI2xVGVR8/view?usp=sharing',
    tech: ['Python', 'SQL', 'Power BI'],
    points: [
      'Built and trained CNN-based deep learning models using TensorFlow and Keras, achieving up to 98% accuracy in image classification tasks',
      'Created interactive dashboards in Power BI and Tableau to visualise analytical insights and improve reporting efficiency',
      'Performed data preprocessing, model training and evaluation using Python to optimise model generalisation and reduce overfitting',
    ],
  },
]

export const education = {
  degree: 'B.E. in Computer Science – Artificial Intelligence Engineering',
  school: 'Maharaja Institute of Technology Mysore',
  graduated: '2026',
  highlights: [
    'Secured 4th Rank in CSE–Artificial Intelligence (CSE-AI) at Visvesvaraya Technological University (VTU).',
    'Achieved Silver Elite distinction with a score of 80/100 in NPTEL Programming in Java.',
  ],
}

// Only numbers that appear in the resume. Counters animate to these values.
export const stats = [
  { value: 4, prefix: 'Rank ', suffix: '', decimals: 0, label: 'CSE-AI, VTU' },
  { value: 9.41, suffix: ' / 10', decimals: 2, label: 'CGPA' },
  { value: 80, suffix: ' / 100', decimals: 0, label: 'NPTEL Java, Silver Elite' },
]

export const certifications = [
  { name: 'Programming in Java', issuer: 'NPTEL SWAYAM', year: '2024', note: '12-week course covering OOP, exception handling, collections, multithreading and core Java. Scored 80/100, Silver Elite.', link: 'https://drive.google.com/file/d/1S73eh-PxQFnj_pKqIpQpELugjKFLLHMX/view?usp=sharing' },
  { name: 'Machine Learning for All', issuer: 'Coursera', year: '2025', note: 'Supervised, unsupervised and deep learning techniques with hands-on implementation exercises.', link: 'https://www.coursera.org/account/accomplishments/verify/5DZRP7NJK0EL' },
  { name: 'Data Visualisation', issuer: 'Forage', year: '2025', note: 'Business scenario analysis, dashboard visualisation and effective communication of analytical insights.', link: 'https://drive.google.com/file/d/1CmOI6KunLAOW-ZH2ua3_HlRXBkAF8HAi/view?usp=sharing' },
  { name: 'Excel Basics for Data Analysis', issuer: 'Coursera', year: '2025', note: 'Foundational Excel skills for data analysis, reporting and visualisation tasks.', link: 'https://www.coursera.org/account/accomplishments/verify/PVALXHT53XL2' },
  {
  name: 'HTML Essentials',issuer: 'Cisco Networking Academy',year: '2026',note: 'Successfully completed HTML Essentials, covering the fundamentals of HTML and webpage structure.',link: 'https://www.netacad.com/recognitions/verify/b0828771-f83b-4d02-b07c-35b1ac6b3d95'
  },
]
