document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================
       DATA STORE — sourced from resume
    ===================================================== */
    const personal = {
        firstName: "Abhiram",
        lastName: "Yarlagadda",
        fullName: "Yarlagadda Abhiram",
        title: "AI Engineer & Data Scientist",
        email: "yarlagaddaabhi5@gmail.com",
        phone: "+91 9063313555",
        phoneDisplay: "+91 90633 13555",
        location: "Visakhapatnam, Andhra Pradesh, India",
        github: "https://github.com/ram90633",
        githubHandle: "github.com/ram90633",
        linkedin: "https://www.linkedin.com/in/y-abhiram/",
        linkedinHandle: "linkedin.com/in/y-abhiram",
        resume: "https://drive.google.com/file/d/1R7NoyrarkRltmyuUezm82FrlE6CKSExj/view?usp=sharing"
    };

    const taglines = [
        "AI Engineer Intern @ Hrudai",
        "Data Science @ GITAM University",
        "LLMs • Automation • ML Systems",
        "Building Intelligent Workflows",
        "Python • SQL • TensorFlow • Supabase",
        "Turning Data Into Decisions"
    ];

    const navigation = [
        { name: 'Home',          id: 'home',           icon: 'Home' },
        { name: 'About',         id: 'about',          icon: 'User' },
        { name: 'Education',     id: 'education',      icon: 'GraduationCap' },
        { name: 'Skills',        id: 'skills',         icon: 'Sparkles' },
        { name: 'Experience',    id: 'experience',     icon: 'Briefcase' },
        { name: 'Projects',      id: 'projects',       icon: 'Code' },
        { name: 'Certifications',id: 'certifications', icon: 'Award' },
        { name: 'Contact',       id: 'contact',        icon: 'Contact' }
    ];

    /* ---------- Skills ---------- */
    const skillsData = {
        languages: [
            { name: "Python",  level: 92, color: "from-yellow-400 to-yellow-600" },
            { name: "SQL",     level: 88, color: "from-blue-400 to-blue-600" },
            { name: "C",       level: 80, color: "from-gray-400 to-gray-600" },
            { name: "R",       level: 75, color: "from-sky-400 to-sky-600" },
            { name: "JavaScript", level: 78, color: "from-amber-400 to-yellow-500" }
        ],
        coreCs: [
            { name: "Data Structures & Algorithms", icon: "Binary" },
            { name: "Operating Systems",            icon: "Cpu" },
            { name: "DBMS",                         icon: "Database" },
            { name: "Data Mining",                  icon: "Pickaxe" },
            { name: "Object-Oriented Design",       icon: "Layers" },
            { name: "Computer Networks",            icon: "Network" }
        ],
        aiml: [
            { name: "Machine Learning",     icon: "BrainCircuit" },
            { name: "Deep Learning / CNNs", icon: "Network" },
            { name: "LLMs & Prompt Eng.",   icon: "MessageSquare" },
            { name: "Reinforcement Learning", icon: "Repeat" },
            { name: "TensorFlow & Keras",   icon: "Layers" },
            { name: "Scikit-learn",         icon: "BarChart3" },
            { name: "NLP",                  icon: "Languages" },
            { name: "Computer Vision",      icon: "Eye" }
        ],
        tools: [
            { name: "Git & GitHub",      icon: "GitBranch" },
            { name: "VS Code",           icon: "Code" },
            { name: "Supabase",          icon: "Database" },
            { name: "Google APIs",       icon: "Globe" },
            { name: "ERPNext",           icon: "Briefcase" },
            { name: "Fusion 360",        icon: "Box" },
            { name: "Star UML",          icon: "Workflow" },
            { name: "Dia",               icon: "PenTool" }
        ],
        soft: [
            "Strong Communication",
            "Team Collaboration",
            "Conflict Resolution",
            "Problem Solving",
            "Adaptability",
            "Mentoring"
        ]
    };

    /* ---------- Experience ---------- */
    const experienceData = [
        {
            role: "AI Engineer Intern",
            company: "Hrudai",
            logo: null,
            date: "Jan 2026 – Present",
            location: "Visakhapatnam, India",
            current: true,
            summary: "Building LLM-powered automation systems that streamline business workflows end-to-end.",
            points: [
                "Developed AI-driven automation solutions leveraging LLMs, Google APIs, and third-party integrations to streamline business workflows.",
                "Worked with Supabase for backend management — real-time databases, authentication, and data synchronization across systems.",
                "Built scalable automation systems with dynamic data handling capabilities using JavaScript and Python."
            ],
            skills: ['LLMs', 'Google APIs', 'Supabase', 'Python', 'JavaScript', 'Workflow Automation'],
            color: 'purple'
        },
        {
            role: "IT Operations Intern",
            company: "MyGate",
            logo: "https://i.ytimg.com/vi/zUwQGbrnjZE/maxresdefault.jpg",
            date: "May 2025 – Jun 2025",
            location: "Bangalore, India",
            current: false,
            summary: "Drove internal productivity by automating IT operations and ticketing systems.",
            points: [
                "Designed and deployed internal Google ChatBots to streamline task tracking and IT query resolution — cutting response time and improving team productivity.",
                "Developed and customized ERP modules on ERPNext to digitize equipment tracking and streamline internal workflows, reducing manual tracking effort.",
                "Optimized internal ticketing and asset management systems, cutting resolution time by 20% and enhancing transparency."
            ],
            skills: ['Google ChatBot', 'ERPNext', 'Process Optimization', 'Asset Management', 'Workflow Automation'],
            color: 'blue'
        },
        {
            role: "Community Member",
            company: "Meta Developer Communities",
            logo: "https://media.licdn.com/dms/image/v2/D560BAQFcOoOMREtoww/company-logo_200_200/company-logo_200_200/0/1695927119216/meta_developers_communities_gitam_visakhapatnam_logo?e=2147483647&v=beta&t=rn5ZdOvB1rfMmtYxESrOdaPXk4CBytXIk8slWEsMkOc",
            date: "Active Member",
            location: "GITAM Visakhapatnam",
            current: true,
            summary: "Driving developer community engagement through workshops and content.",
            points: [
                "Curated content for workshops and technical events to facilitate knowledge sharing and skill development.",
                "Collaborated with fellow developers to organize technical sessions and coding workshops for students."
            ],
            skills: ['Community Building', 'Content Creation', 'Workshop Development', 'Technical Mentoring'],
            color: 'green'
        }
    ];

    /* ---------- Projects ---------- */
    const projects = [
        {
            title: "Persona-Aware Dialogue Generation using Reinforcement Learning",
            shortTitle: "Persona-Aware Dialogue (RL)",
            description: "Fine-tuned a transformer-based conversational model with persona embeddings to maintain consistent tone, style, and character-specific responses. Implemented a reinforcement learning feedback loop that iteratively improves response coherence, contextual relevance, and identity alignment from user-provided evaluation signals.",
            highlights: [
                "Persona embeddings for character-consistent dialogue",
                "RL feedback loop for response quality refinement",
                "Coherence-aware reward shaping"
            ],
            tech: ["Python", "PyTorch", "Transformers", "Reinforcement Learning", "NLP", "Hugging Face"],
            github: personal.github,
            live: "#",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
            category: "NLP / Deep Learning",
            featured: true,
            stat: "Transformer + RL"
        },
        {
            title: "Fake Currency Prediction",
            shortTitle: "Fake Currency CNN",
            description: "Designed and trained a CNN model in Keras/TensorFlow to classify Indian currency images with 85%+ accuracy across 5 denominations. Applied image augmentation and preprocessing techniques to reduce validation error by 12%.",
            highlights: [
                "85%+ classification accuracy across 5 denominations",
                "12% reduction in validation error via augmentation",
                "End-to-end CNN training pipeline"
            ],
            tech: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV", "Image Augmentation"],
            github: personal.github,
            live: "#",
            image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&q=80",
            category: "Computer Vision",
            featured: false,
            stat: "85%+ Accuracy"
        },
        {
            title: "Semester Sense — MOOC Certificate Prediction",
            shortTitle: "Semester Sense",
            description: "Built an ensemble model to forecast the semester of MOOC certificate completion with 98% accuracy across 1,000+ academic records. Leveraged Bagging, Boosting, and Stacking strategies to improve model stability and predictive performance.",
            highlights: [
                "98% prediction accuracy on 1,000+ samples",
                "Bagging + Boosting + Stacking ensemble",
                "Robust to noisy academic data"
            ],
            tech: ["Python", "Scikit-learn", "Random Forest", "AdaBoost", "Stacking", "Pandas"],
            github: personal.github,
            live: "#",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            category: "Machine Learning",
            featured: false,
            stat: "98% Accuracy"
        },
        {
            title: "Multi-Class Animal Image Recognition",
            shortTitle: "Animal Classifier",
            description: "Deep learning model for classifying images across 90 different animal species using CNN architectures, transfer learning, and data augmentation.",
            highlights: [
                "90 animal classes",
                "Transfer learning from pretrained models",
                "Optimized inference pipeline"
            ],
            tech: ["Python", "TensorFlow", "Keras", "CNN", "Transfer Learning"],
            github: personal.github,
            live: "#",
            image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80",
            category: "Deep Learning",
            featured: false,
            stat: "90 Classes"
        }
    ];

    /* ---------- Certifications ---------- */
    const certifications = [
        {
            title: "IBM Data Science Professional Certificate",
            issuer: "IBM • Coursera",
            year: "2024",
            color: "blue",
            icon: "Award",
            skills: ["Python", "SQL", "Machine Learning", "Data Visualization", "Capstone Project"]
        },
        {
            title: "Data Analysis with Python",
            issuer: "IBM",
            year: "2024",
            color: "purple",
            icon: "BarChart3",
            skills: ["Pandas", "NumPy", "Data Wrangling", "Statistical Analysis"]
        },
        {
            title: "Software Engineering",
            issuer: "Great Learning",
            year: "2024",
            color: "emerald",
            icon: "Code",
            skills: ["SDLC", "System Design", "OOP", "Software Architecture"]
        }
    ];

    /* ---------- Academic CGPA ---------- */
    const cgpaData = [
        { semester: 1, sgpa: 8.50, cgpa: 8.50 },
        { semester: 2, sgpa: 8.33, cgpa: 8.42 },
        { semester: 3, sgpa: 9.08, cgpa: 8.64 },
        { semester: 4, sgpa: 8.16, cgpa: 8.52 },
        { semester: 5, sgpa: 9.71, cgpa: 8.76 },
        { semester: 6, sgpa: 9.36, cgpa: 8.84 },
        { semester: 7, sgpa: 9.40, cgpa: 8.92 },
        { semester: 8, sgpa: 9.66, cgpa: 8.96 }
    ];

    /* ---------- Contact reasons ---------- */
    const contactReasons = ["Job Opportunity", "Internship Opportunity", "Collaboration", "Mentorship", "Project Discussion", "General Inquiry", "Other"];

    /* =====================================================
       STATE & DOM
    ===================================================== */
    let activeSection = 'home';
    let isMenuOpen = false;
    const sections = {
        home:           document.getElementById('home-section'),
        about:          document.getElementById('about-section'),
        education:      document.getElementById('education-section'),
        skills:         document.getElementById('skills-section'),
        experience:     document.getElementById('experience-section'),
        projects:       document.getElementById('projects-section'),
        certifications: document.getElementById('certifications-section'),
        contact:        document.getElementById('contact-section')
    };
    const desktopNav = document.getElementById('desktop-nav');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const cgpaModal = document.getElementById('cgpa-modal');
    const scrollProgress = document.getElementById('scroll-progress');
    const brandBtn = document.getElementById('brand-btn');

    /* =====================================================
       ICONS — Lucide-style inline SVGs
    ===================================================== */
    const ic = (path, size = 18) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
    const icons = {
        Home:        ic('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'),
        User:        ic('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
        GraduationCap: ic('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'),
        Briefcase:   ic('<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'),
        Code:        ic('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'),
        Contact:     ic('<path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="18" x="3" y="4" rx="2"/><circle cx="12" cy="10" r="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/>'),
        Sparkles:    ic('<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/>'),
        Award:       ic('<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>'),
        Menu:        ic('<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>', 22),
        X:           ic('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>', 22),
        ExternalLink:ic('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>', 16),
        TrendingUp:  ic('<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>', 20),
        MapPin:      ic('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>', 20),
        Mail:        ic('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>', 20),
        Phone:       ic('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>', 20),
        LinkedIn:    ic('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>'),
        Github:      ic('<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>'),
        Database:    ic('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>'),
        BrainCircuit:ic('<path d="M12 5a3 3 0 1 0-5.997.125"/><path d="M12 5a3 3 0 1 1 5.997.125"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/><path d="M12 21v-3"/><path d="M12 9V6"/>'),
        BarChart3:   ic('<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>'),
        Layers:      ic('<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.84l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84Z"/><path d="m22 17.65-8.58 3.9a2 2 0 0 1-1.66 0L3.2 17.65"/><path d="m22 12.65-8.58 3.9a2 2 0 0 1-1.66 0L3.2 12.65"/>'),
        Cpu:         ic('<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>'),
        Network:     ic('<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>'),
        Binary:      ic('<rect x="14" y="14" width="4" height="6" rx="2"/><rect x="6" y="4" width="4" height="6" rx="2"/><path d="M6 20h4"/><path d="M14 10h4"/><path d="M6 14h2v6"/><path d="M14 4h2v6"/>'),
        Pickaxe:     ic('<path d="M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"/><path d="M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"/><path d="M17.7 3.7a1 1 0 0 0-1.4 1.4l6.6 6.6a1 1 0 0 0 1.4-1.4z"/>'),
        MessageSquare: ic('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
        Repeat:      ic('<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>'),
        Languages:   ic('<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>'),
        Eye:         ic('<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>'),
        GitBranch:   ic('<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>'),
        Globe:       ic('<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>'),
        Box:         ic('<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/>'),
        Workflow:    ic('<rect x="3" y="3" width="8" height="8" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect x="13" y="13" width="8" height="8" rx="2"/>'),
        PenTool:     ic('<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18z"/><circle cx="6" cy="6" r="2"/>'),
        Download:    ic('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>'),
        ArrowRight:  ic('<line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/>'),
        Send:        ic('<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>', 16),
        ChevronUp:   ic('<path d="m18 15-6-6-6 6"/>', 20),
        CheckCircle: ic('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'),
        Star:        ic('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>')
    };

    /* =====================================================
       CORE — Section switching & navigation
    ===================================================== */
    const setActiveSection = (sectionId) => {
        if (!sectionId || !sections[sectionId]) return;
        Object.values(sections).forEach(s => s.classList.add('hidden'));
        sections[sectionId].classList.remove('hidden');
        sections[sectionId].classList.add('animate-fade-in');
        setTimeout(() => sections[sectionId].classList.remove('animate-fade-in'), 800);
        activeSection = sectionId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        updateNavLinks();
        if (isMenuOpen) {
            isMenuOpen = false;
            mobileNav.classList.add('hidden');
            mobileMenuButton.innerHTML = icons.Menu;
        }
    };

    const updateNavLinks = () => {
        const createLink = (item) => `<button data-section="${item.id}" class="nav-link flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === item.id ? 'nav-link-active' : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'}">${icons[item.icon]}<span>${item.name}</span></button>`;
        const createMobileLink = (item) => `<button data-section="${item.id}" class="nav-link flex items-center gap-3 w-full px-3 py-3 rounded-lg transition-all ${activeSection === item.id ? 'nav-link-active' : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'}">${icons[item.icon]}<span>${item.name}</span></button>`;
        desktopNav.innerHTML = navigation.map(createLink).join('');
        mobileNav.innerHTML = `<div class="px-4 py-3 space-y-1">${navigation.map(createMobileLink).join('')}</div>`;
        document.querySelectorAll('.nav-link').forEach(btn => btn.addEventListener('click', (e) => setActiveSection(e.currentTarget.dataset.section)));
    };

    mobileMenuButton.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileNav.classList.toggle('hidden');
        mobileMenuButton.innerHTML = isMenuOpen ? icons.X : icons.Menu;
    });

    brandBtn.addEventListener('click', () => setActiveSection('home'));

    /* =====================================================
       Section heading helper
    ===================================================== */
    const sectionHeading = (eyebrow, title, subtitle = '') => `
        <div class="text-center mb-14 animate-fade-in-up">
            <div class="section-eyebrow mb-4">${icons.Sparkles} ${eyebrow}</div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">${title}</h2>
            <div class="divider-gradient"></div>
            ${subtitle ? `<p class="text-lg text-gray-600 max-w-2xl mx-auto">${subtitle}</p>` : ''}
        </div>
    `;

    /* =====================================================
       HOME
    ===================================================== */
    function renderHome() {
        return `
        <div class="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden mesh-bg">
            <!-- Decorative blobs -->
            <div class="absolute -z-10 w-[28rem] h-[28rem] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob top-0 -left-20"></div>
            <div class="absolute -z-10 w-[28rem] h-[28rem] bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000 bottom-10 -right-20"></div>
            <div class="absolute -z-10 w-[28rem] h-[28rem] bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 bottom-20 left-1/3"></div>

            <!-- Status pill -->
            <div class="mb-10 animate-fade-in-up">
                <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-green-200 shadow-sm text-sm font-medium text-gray-700">
                    <span class="relative flex h-2.5 w-2.5">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    Available for AI / Data Science opportunities
                </span>
            </div>

            <!-- Avatar -->
            <div class="relative mb-10 animate-fade-in-up delay-100">
                <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 blur-2xl opacity-50 animate-pulse-glow"></div>
                <div class="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-2xl animate-float">AY</div>
            </div>

            <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-6 tracking-tight animate-fade-in-up delay-300 text-balance">
                Abhiram <span class="gradient-text">Yarlagadda</span>
            </h1>

            <p id="tagline" class="text-xl md:text-2xl text-gray-600 mb-6 h-9 transition-opacity duration-500 animate-fade-in-up delay-500"></p>
            <p class="text-gray-500 max-w-xl mb-12 animate-fade-in-up delay-700 px-4 leading-relaxed">
                B.Tech CSE (Data Science) at GITAM University · Building intelligent automation with LLMs, ML & full-stack systems.
            </p>

            <!-- Combined CTA + social row -->
            <div class="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up delay-1000">
                <a href="${personal.resume}" target="_blank" rel="noopener noreferrer" class="btn-primary">
                    ${icons.Download} Download Resume
                </a>
                <button id="explore-work-btn" class="btn-outline">
                    Explore My Work ${icons.ArrowRight}
                </button>
                <a href="${personal.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md text-gray-600 hover:text-indigo-600 transition-all hover:-translate-y-0.5 border border-gray-100">
                    ${icons.LinkedIn}
                </a>
                <a href="${personal.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md text-gray-600 hover:text-indigo-600 transition-all hover:-translate-y-0.5 border border-gray-100">
                    ${icons.Github}
                </a>
                <a href="mailto:${personal.email}" aria-label="Email" class="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md text-gray-600 hover:text-indigo-600 transition-all hover:-translate-y-0.5 border border-gray-100">
                    ${icons.Mail}
                </a>
            </div>
        </div>

        <!-- Stats band — separate, with breathing room -->
        <div class="bg-white py-20 px-4 border-t border-gray-100">
            <div class="max-w-5xl mx-auto">
                <p class="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">By the numbers</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    ${[
                        { num: '8.96', label: 'Current CGPA',  color: 'from-indigo-600 to-cyan-500' },
                        { num: '3+',   label: 'Internships',   color: 'from-blue-500 to-cyan-500' },
                        { num: '15+',  label: 'Projects',      color: 'from-amber-500 to-orange-500' },
                        { num: '3',    label: 'Certifications',color: 'from-emerald-500 to-teal-500' }
                    ].map(s => `
                        <div class="glass-card rounded-2xl p-6 md:p-7 text-center hover:-translate-y-1 transition-transform">
                            <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r ${s.color} bg-clip-text text-transparent">${s.num}</div>
                            <div class="text-sm text-gray-600 font-medium mt-2">${s.label}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        `;
    }

    /* =====================================================
       ABOUT
    ===================================================== */
    const renderAbout = () => {
        const myInfoSkills = [
            { text: "AI Engineering & LLMs",    icon: "BrainCircuit" },
            { text: "Python & Machine Learning",icon: "Code" },
            { text: "SQL, DBMS & Data Mining",  icon: "Database" },
            { text: "Deep Learning / CV",       icon: "Eye" },
            { text: "Automation & Supabase",    icon: "Workflow" }
        ];

        sections.about.innerHTML = `
        <div class="mesh-bg pt-20 pb-12">
            <div class="max-w-7xl mx-auto px-4">
                ${sectionHeading('About Me', 'A Bit About Me', 'Curious mind, builder by habit, problem-solver by training.')}

                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div class="relative w-full max-w-md mx-auto h-[34rem] group">
                        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-200 to-cyan-200 rounded-3xl shadow-lg transform -rotate-6 transition-transform duration-500 ease-in-out group-hover:rotate-0"></div>
                        <div class="absolute top-0 left-0 w-full h-full p-2 bg-white/70 backdrop-blur-sm rounded-3xl border border-white/40 shadow-2xl overflow-hidden transform rotate-3 transition-transform duration-500 ease-in-out group-hover:rotate-0 group-hover:scale-105">
                            <img src="Pic.jpg" alt="Abhiram Yarlagadda" class="w-full h-full object-cover rounded-2xl">
                        </div>
                        <div class="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100 flex items-center gap-3 z-10">
                            <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white">${icons.BrainCircuit}</div>
                            <div>
                                <p class="text-xs text-gray-500">Currently</p>
                                <p class="font-semibold text-gray-800 text-sm">AI Engineer Intern @ Hrudai</p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div class="prose prose-lg text-gray-700 max-w-none">
                            <p class="text-lg leading-relaxed">
                                I'm a <strong>Data Science undergraduate</strong> at <strong>GITAM University</strong> and currently an <strong>AI Engineer Intern at Hrudai</strong>, where I build LLM-powered automation that streamlines real business workflows using Google APIs and Supabase.
                            </p>
                            <p class="text-lg leading-relaxed">
                                I love working at the intersection of <span class="gradient-text font-semibold">data, intelligence, and automation</span> — designing CNN classifiers, fine-tuning transformers with reinforcement learning, and shipping ensemble ML systems that hit 98%+ accuracy on noisy real-world data.
                            </p>
                            <p class="text-lg leading-relaxed">
                                Whether it's deploying ChatBots that cut IT ticket resolution time by 20% or training models that detect counterfeit currency, I focus on building things that <em>work, scale, and matter</em>.
                            </p>
                        </div>

                        <div class="grid grid-cols-2 gap-3 pt-4">
                            ${myInfoSkills.map(s => `
                                <div class="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-indigo-200 transition-all hover:-translate-y-0.5">
                                    <div class="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-100 to-cyan-100 text-indigo-600 flex items-center justify-center">${icons[s.icon]}</div>
                                    <span class="text-sm font-medium text-gray-700">${s.text}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ${renderFooter()}
        `;
        wireFooter();
    };

    /* =====================================================
       Footer (reusable)
    ===================================================== */
    const renderFooter = () => `
        <footer class="bg-gray-900 text-gray-300 py-16 mt-12">
            <div class="max-w-7xl mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div>
                        <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">${icons.ArrowRight} Quick Links</h3>
                        <ul class="space-y-2" id="footer-links"></ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">${icons.User} About</h3>
                        <p class="font-bold text-white text-lg">${personal.fullName}</p>
                        <p class="text-cyan-300 mb-3">CSE (Data Science) · GITAM</p>
                        <p class="text-sm text-gray-400">Currently AI Engineer Intern at Hrudai, building LLM-powered automation systems.</p>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">${icons.Contact} Get in Touch</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-3"><span class="text-cyan-400 mt-1">${icons.MapPin}</span><span class="text-sm">${personal.location}</span></li>
                            <li class="flex items-center gap-3"><span class="text-cyan-400">${icons.Mail}</span><a href="mailto:${personal.email}" class="text-sm hover:text-cyan-300">${personal.email}</a></li>
                            <li class="flex items-center gap-3"><span class="text-cyan-400">${icons.Phone}</span><a href="tel:${personal.phone}" class="text-sm hover:text-cyan-300">${personal.phoneDisplay}</a></li>
                        </ul>
                        <div class="flex gap-3 mt-4">
                            <a href="${personal.linkedin}" target="_blank" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">${icons.LinkedIn}</a>
                            <a href="${personal.github}" target="_blank" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">${icons.Github}</a>
                            <a href="mailto:${personal.email}" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">${icons.Mail}</a>
                        </div>
                    </div>
                </div>
                <div class="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-sm text-gray-400">© ${new Date().getFullYear()} ${personal.fullName}. Crafted with passion.</p>
                    <button id="back-to-top" class="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-cyan-500 hover:scale-110 rounded-full flex items-center justify-center transition-transform" aria-label="Back to top">${icons.ChevronUp}</button>
                </div>
            </div>
        </footer>
    `;

    const wireFooter = () => {
        const footerLinks = document.getElementById('footer-links');
        if (!footerLinks) return;
        footerLinks.innerHTML = navigation.filter(i => i.id !== 'home').map(item =>
            `<li><button data-section="${item.id}" class="nav-link text-sm text-gray-400 hover:text-cyan-300 transition-colors flex items-center gap-2">${item.name}</button></li>`
        ).join('');
        document.querySelectorAll('#footer-links .nav-link').forEach(btn =>
            btn.addEventListener('click', (e) => setActiveSection(e.currentTarget.dataset.section))
        );
        document.getElementById('back-to-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    };

    /* =====================================================
       EDUCATION
    ===================================================== */
    const renderEducation = () => {
        const lastCgpa = cgpaData.filter(d => d.cgpa).pop()?.cgpa.toFixed(2) || 'N/A';
        const edu = [
            {
                degree: "Bachelor of Technology",
                spec: "Computer Science & Engineering (Data Science)",
                school: "GITAM University, Visakhapatnam",
                link: "https://www.gitam.edu/",
                period: "2022 – 2026 (Expected)",
                score: lastCgpa,
                scoreLabel: "Current CGPA",
                color: "blue",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8N34GRPnd0baDPLmeGnpayP50zCDTWCiE4t3URbyloQ&s",
                showChart: true,
                desc: "Specializing in Data Science with coursework in DSA, OS, DBMS, Data Mining, ML, and Deep Learning."
            },
            {
                degree: "Intermediate — MPC",
                spec: "Mathematics, Physics, Chemistry",
                school: "Tirumala Junior College (BIEAP)",
                link: "https://tirumalaedu.com/",
                period: "2020 – 2022",
                score: "96%",
                scoreLabel: "Percentage",
                color: "green",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXNZSl80t93FynOyyyEtgyiGLV7kmLThIPt-x_W_67w&s",
                showChart: false,
                desc: "Board of Intermediate Education, AP — Strong foundation in mathematics and analytical reasoning."
            },
            {
                degree: "Secondary — CBSE",
                spec: "Central Board of Secondary Education",
                school: "Dr. K.K.R. Gowtham Concept School",
                link: "https://kkrgowtham.com/",
                period: "2019 – 2020",
                score: "95%",
                scoreLabel: "Percentage",
                color: "purple",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTGbMdgMFePsdLbnnjkeXslbjCFghrKPLlIBSF82HuA&s",
                showChart: false,
                desc: "Annadapuram, Visakhapatnam — Built early foundations in mathematics, science, and computing."
            }
        ];

        const colorMap = {
            blue:   { text: 'text-blue-600',   bg: 'bg-blue-50',   btn: 'bg-blue-600 hover:bg-blue-700' },
            green:  { text: 'text-green-600',  bg: 'bg-green-50',  btn: 'bg-green-600 hover:bg-green-700' },
            purple: { text: 'text-indigo-600', bg: 'bg-indigo-50', btn: 'bg-indigo-600 hover:bg-indigo-700' }
        };

        sections.education.innerHTML = `
        <div class="min-h-screen mesh-bg py-20">
            <div class="max-w-6xl mx-auto px-4">
                ${sectionHeading('Education', 'Education Journey', 'Strong academic foundations, consistently high performance.')}
                <div class="space-y-8">
                    ${edu.map((e, idx) => {
                        const c = colorMap[e.color];
                        return `
                        <div class="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 tilt-card border border-gray-100" style="animation: fade-in-up 0.6s ease-out ${idx * 0.1}s both">
                            <div class="flex flex-col md:flex-row items-center gap-6">
                                <img src="${e.logo}" alt="${e.school}" class="w-20 h-20 rounded-2xl object-cover shadow-md flex-shrink-0">
                                <div class="flex-1 text-center md:text-left">
                                    <h3 class="text-2xl font-bold text-gray-800">${e.degree}</h3>
                                    <a href="${e.link}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-lg ${c.text} font-semibold mb-1 hover:underline">${e.school} ${icons.ExternalLink}</a>
                                    <p class="text-gray-600">${e.spec}</p>
                                    <p class="text-gray-500 text-sm mt-1">${e.period}</p>
                                    <p class="text-gray-600 mt-3 text-sm">${e.desc}</p>
                                </div>
                                <div class="text-center md:text-right flex-shrink-0">
                                    <div class="text-4xl font-bold ${c.text}">${e.score}</div>
                                    <div class="text-sm text-gray-500 mb-3">${e.scoreLabel}</div>
                                    ${e.showChart ? `<button id="view-perf-btn" class="inline-flex items-center gap-2 px-4 py-2 ${c.btn} text-white rounded-lg transition-colors text-sm font-semibold shadow-md">${icons.TrendingUp} View Performance</button>` : ''}
                                </div>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
        </div>`;
        document.getElementById('view-perf-btn')?.addEventListener('click', openCgpaModal);
    };

    /* =====================================================
       SKILLS
    ===================================================== */
    const renderSkills = () => {
        const langHTML = skillsData.languages.map(s => `
            <div class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div class="flex justify-between items-center mb-2">
                    <span class="font-semibold text-gray-800">${s.name}</span>
                    <span class="text-sm font-bold text-indigo-600">${s.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-bar-fill" style="width:0" data-target="${s.level}%"></div>
                </div>
            </div>
        `).join('');

        const chipGrid = (items) => items.map(s => `
            <div class="skill-chip flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-100 to-cyan-100 text-indigo-600 flex items-center justify-center flex-shrink-0">${icons[s.icon] || icons.Code}</div>
                <span class="font-medium text-gray-700">${s.name}</span>
            </div>
        `).join('');

        sections.skills.innerHTML = `
        <div class="min-h-screen mesh-bg py-20">
            <div class="max-w-7xl mx-auto px-4">
                ${sectionHeading('Skills', 'Skills & Tech Stack', 'Languages, frameworks, and tools I work with daily.')}

                <div class="grid lg:grid-cols-2 gap-8 mb-12">
                    <!-- Languages with bars -->
                    <div class="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-lg border border-gray-100">
                        <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span class="text-indigo-600">${icons.Code}</span> Programming Languages
                        </h3>
                        <div class="space-y-3">${langHTML}</div>
                    </div>

                    <!-- Soft skills -->
                    <div class="bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-2xl p-6 shadow-lg text-white">
                        <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                            <span>${icons.Sparkles}</span> Soft Skills
                        </h3>
                        <div class="flex flex-wrap gap-2 mb-6">
                            ${skillsData.soft.map(s => `<span class="px-3 py-1.5 bg-white/20 backdrop-blur rounded-full text-sm font-medium">${s}</span>`).join('')}
                        </div>
                        <div class="pt-6 border-t border-white/20">
                            <p class="text-white/90 text-sm leading-relaxed">
                                <strong>Communication, teamwork, and conflict resolution</strong> are at the core of how I work — whether collaborating with developers, mentoring junior students, or coordinating with cross-functional internship teams.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Core CS -->
                <div class="mb-12">
                    <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <span class="text-indigo-600">${icons.Cpu}</span> Core Computer Science
                    </h3>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">${chipGrid(skillsData.coreCs)}</div>
                </div>

                <!-- AI / ML -->
                <div class="mb-12">
                    <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <span class="text-indigo-600">${icons.BrainCircuit}</span> AI, ML & Data Science
                    </h3>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">${chipGrid(skillsData.aiml)}</div>
                </div>

                <!-- Tools -->
                <div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <span class="text-indigo-600">${icons.Workflow}</span> Tools & Platforms
                    </h3>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">${chipGrid(skillsData.tools)}</div>
                </div>
            </div>
        </div>`;

        // Animate skill bars
        requestAnimationFrame(() => {
            document.querySelectorAll('.skill-bar-fill').forEach(el => {
                el.style.width = el.dataset.target;
            });
        });
    };

    /* =====================================================
       EXPERIENCE
    ===================================================== */
    const renderExperience = () => {
        const colorStyles = {
            blue:   { border: "border-blue-500",   bg: "bg-blue-100",   text: "text-blue-800",   gradFrom: "from-blue-500",   gradTo: "to-blue-700",   bullet: "bg-blue-500",   skillBg: "bg-blue-50",   skillText: "text-blue-700",   accent: "text-blue-600" },
            green:  { border: "border-green-500",  bg: "bg-green-100",  text: "text-green-800",  gradFrom: "from-green-500",  gradTo: "to-emerald-700",bullet: "bg-green-500",  skillBg: "bg-green-50",  skillText: "text-green-700",  accent: "text-green-600" },
            purple: { border: "border-indigo-500", bg: "bg-indigo-100", text: "text-indigo-800", gradFrom: "from-indigo-500", gradTo: "to-cyan-600",   bullet: "bg-indigo-500", skillBg: "bg-indigo-50", skillText: "text-indigo-700", accent: "text-indigo-600" }
        };

        const expHTML = experienceData.map((exp, idx) => {
            const s = colorStyles[exp.color] || colorStyles.blue;
            return `
            <div class="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 ${s.border} tilt-card" style="animation: fade-in-up 0.6s ease-out ${idx * 0.12}s both">
                ${exp.current ? `<span class="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700"><span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>Current</span>` : ''}
                <div class="flex flex-col md:flex-row items-start gap-6">
                    <div class="flex-shrink-0">
                        ${exp.logo
                            ? `<img src="${exp.logo}" alt="${exp.company}" class="w-16 h-16 rounded-2xl object-cover shadow-md">`
                            : `<div class="w-16 h-16 bg-gradient-to-br ${s.gradFrom} ${s.gradTo} rounded-2xl flex items-center justify-center shadow-md"><span class="text-white font-bold text-2xl">${exp.company.charAt(0)}</span></div>`
                        }
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2">
                            <h3 class="text-xl md:text-2xl font-bold text-gray-800">${exp.role}</h3>
                            <span class="px-3 py-1 ${s.bg} ${s.text} rounded-full text-xs font-semibold">${exp.date}</span>
                        </div>
                        <div class="flex items-center gap-2 mb-3 text-gray-600 text-sm">
                            <span class="font-semibold ${s.accent}">${exp.company}</span><span>•</span><span class="flex items-center gap-1">${icons.MapPin} ${exp.location}</span>
                        </div>
                        <p class="text-gray-700 italic mb-4 text-sm">${exp.summary}</p>
                        <ul class="space-y-2.5 text-gray-700 mb-4">
                            ${exp.points.map(p => `<li class="flex items-start gap-3 text-sm md:text-base"><div class="w-2 h-2 ${s.bullet} rounded-full mt-2 flex-shrink-0"></div><span>${p}</span></li>`).join('')}
                        </ul>
                        <div class="flex flex-wrap gap-2">
                            ${exp.skills.map(k => `<span class="px-3 py-1 ${s.skillBg} ${s.skillText} rounded-full text-xs font-medium">${k}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');

        sections.experience.innerHTML = `
        <div class="min-h-screen mesh-bg py-20">
            <div class="max-w-5xl mx-auto px-4">
                ${sectionHeading('Experience', 'Professional Journey', 'Real-world impact through internships and community work.')}
                <div class="space-y-6">${expHTML}</div>
            </div>
        </div>`;
    };

    /* =====================================================
       PROJECTS
    ===================================================== */
    const renderProjects = () => {
        const featured = projects.find(p => p.featured) || projects[0];
        const others = projects.filter(p => p !== featured);

        sections.projects.innerHTML = `
        <div class="min-h-screen mesh-bg py-20">
            <div class="max-w-7xl mx-auto px-4">
                ${sectionHeading('Projects', 'Featured Projects', 'Selected work spanning AI, ML, and data science.')}

                <!-- Featured -->
                <div class="mb-12 animate-fade-in-up">
                    <div class="relative bg-white rounded-3xl p-6 md:p-10 shadow-xl project-card overflow-hidden">
                        <div class="card-glow"></div>
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 animate-pulse"></div>
                            <span class="text-indigo-600 font-bold text-xs uppercase tracking-widest">⭐ Featured Project</span>
                        </div>
                        <div class="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <span class="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold mb-3">${featured.category}</span>
                                <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-3">${featured.title}</h3>
                                <p class="text-gray-600 mb-5 leading-relaxed">${featured.description}</p>
                                <ul class="space-y-2 mb-5">
                                    ${featured.highlights.map(h => `<li class="flex items-start gap-2 text-sm text-gray-700"><span class="text-green-500 mt-0.5">${icons.CheckCircle}</span>${h}</li>`).join('')}
                                </ul>
                                <div class="flex flex-wrap gap-2 mb-6">
                                    ${featured.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                                </div>
                                <div class="flex flex-wrap gap-3">
                                    <a href="${featured.github}" target="_blank" rel="noopener" class="btn-outline">${icons.Github} View Code</a>
                                    <a href="${featured.live}" target="_blank" rel="noopener" class="btn-primary">${icons.ExternalLink} Live Demo</a>
                                </div>
                            </div>
                            <div class="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                                <img src="${featured.image}" alt="${featured.title}" class="w-full h-full object-cover" onerror="this.style.display='none'">
                                <div class="absolute inset-0 bg-gradient-to-tr from-indigo-600/40 to-cyan-500/20"></div>
                                <div class="absolute bottom-4 left-4 right-4">
                                    <div class="bg-white/90 backdrop-blur rounded-xl p-3 shadow-md">
                                        <p class="text-xs text-gray-500">Highlight</p>
                                        <p class="font-bold text-gray-800">${featured.stat}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Other projects grid -->
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${others.map((p, idx) => `
                        <div class="relative bg-white rounded-2xl shadow-lg overflow-hidden project-card" style="animation: fade-in-up 0.6s ease-out ${idx * 0.1}s both">
                            <div class="card-glow"></div>
                            <div class="relative h-48 overflow-hidden">
                                <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" onerror="this.style.display='none'">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <span class="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur text-gray-700 rounded-full text-xs font-semibold">${p.category}</span>
                                <span class="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-full text-xs font-bold">${p.stat}</span>
                            </div>
                            <div class="p-6">
                                <h3 class="text-lg font-bold text-gray-800 mb-2">${p.shortTitle || p.title}</h3>
                                <p class="text-sm text-gray-600 mb-4 line-clamp-3">${p.description}</p>
                                <div class="flex flex-wrap gap-1.5 mb-4">
                                    ${p.tech.slice(0, 4).map(t => `<span class="tech-tag text-xs">${t}</span>`).join('')}
                                    ${p.tech.length > 4 ? `<span class="tech-tag text-xs">+${p.tech.length - 4}</span>` : ''}
                                </div>
                                <div class="flex gap-2">
                                    <a href="${p.github}" target="_blank" rel="noopener" class="flex-1 text-center py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-semibold flex items-center justify-center gap-2">${icons.Github} Code</a>
                                    <a href="${p.live}" target="_blank" rel="noopener" class="flex-1 text-center py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all text-sm font-semibold flex items-center justify-center gap-2">${icons.ExternalLink} Demo</a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>`;
    };

    /* =====================================================
       CERTIFICATIONS
    ===================================================== */
    const renderCertifications = () => {
        const colorMap = {
            blue:    { from: 'from-blue-500',    to: 'to-cyan-500',    text: 'text-blue-600',    bg: 'bg-blue-50' },
            purple:  { from: 'from-indigo-500',  to: 'to-violet-500',  text: 'text-indigo-600',  bg: 'bg-indigo-50' },
            emerald: { from: 'from-emerald-500', to: 'to-teal-500',    text: 'text-emerald-600', bg: 'bg-emerald-50' }
        };

        sections.certifications.innerHTML = `
        <div class="min-h-screen mesh-bg py-20">
            <div class="max-w-6xl mx-auto px-4">
                ${sectionHeading('Certifications', 'Certifications & Credentials', 'Continuously learning, formally certified.')}

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${certifications.map((c, idx) => {
                        const col = colorMap[c.color] || colorMap.blue;
                        return `
                        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 tilt-card border border-gray-100 relative overflow-hidden" style="animation: fade-in-up 0.6s ease-out ${idx * 0.1}s both">
                            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${col.from} ${col.to} opacity-10 rounded-full -mr-12 -mt-12"></div>
                            <div class="relative">
                                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${col.from} ${col.to} text-white flex items-center justify-center mb-4 shadow-md">${icons[c.icon] || icons.Award}</div>
                                <span class="inline-block text-xs font-semibold ${col.text} ${col.bg} px-2 py-0.5 rounded-md mb-2">${c.year}</span>
                                <h3 class="text-lg font-bold text-gray-800 mb-1">${c.title}</h3>
                                <p class="text-sm text-gray-500 mb-4">${c.issuer}</p>
                                <div class="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                                    ${c.skills.map(s => `<span class="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">${s}</span>`).join('')}
                                </div>
                            </div>
                        </div>`;
                    }).join('')}
                </div>

                <!-- Tools strip -->
                <div class="mt-12 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 class="text-2xl font-bold mb-2 flex items-center gap-2">${icons.Star} Always Learning</h3>
                            <p class="text-white/80">Actively expanding skills in LLMs, MLOps, and applied AI engineering.</p>
                        </div>
                        <a href="${personal.resume}" target="_blank" rel="noopener" class="px-6 py-3 bg-white text-indigo-600 rounded-full font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2">${icons.Download} Download Full Resume</a>
                    </div>
                </div>
            </div>
        </div>`;
    };

    /* =====================================================
       CONTACT
    ===================================================== */
    const renderContact = () => {
        sections.contact.innerHTML = `
        <div class="min-h-screen mesh-bg py-20">
            <div class="max-w-7xl mx-auto px-4">
                ${sectionHeading('Contact', 'Get In Touch', "Open to opportunities, collaborations, and conversations. Let's build something.")}

                <div class="grid lg:grid-cols-5 gap-6">
                    <!-- Form -->
                    <div class="lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
                        <h3 class="text-2xl font-bold text-gray-800 mb-1">Send a Message</h3>
                        <p class="text-gray-500 mb-6 text-sm">Fill out the form and I'll get back to you within 24 hours.</p>
                        <form id="contact-form" class="space-y-5">
                            <div class="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                    <input type="text" id="name" name="name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" placeholder="Your name" required>
                                    <div id="name-error" class="mt-1 text-xs text-red-600"></div>
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                    <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" placeholder="you@example.com" required>
                                    <div id="email-error" class="mt-1 text-xs text-red-600"></div>
                                </div>
                            </div>
                            <div class="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" placeholder="Optional">
                                    <div id="phone-error" class="mt-1 text-xs text-red-600"></div>
                                </div>
                                <div>
                                    <label for="reason" class="block text-sm font-medium text-gray-700 mb-2">Reason *</label>
                                    <select id="reason" name="reason" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white transition-all" required>
                                        <option value="">Select a reason</option>
                                        ${contactReasons.map(r => `<option value="${r}">${r}</option>`).join('')}
                                    </select>
                                    <div id="reason-error" class="mt-1 text-xs text-red-600"></div>
                                </div>
                            </div>
                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea id="message" name="message" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none transition-all" placeholder="Tell me about your project, role, or idea..."></textarea>
                            </div>
                            <button type="submit" id="submit-btn" class="btn-primary w-full">Send Message ${icons.Send}</button>
                            <div id="form-status"></div>
                        </form>
                    </div>

                    <!-- Side info -->
                    <div class="lg:col-span-2 space-y-6">
                        <div class="bg-gradient-to-br from-indigo-600 to-cyan-600 text-white rounded-2xl p-6 shadow-xl">
                            <h3 class="text-xl font-bold mb-4">Contact Info</h3>
                            <div class="space-y-4">
                                <a href="mailto:${personal.email}" class="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg transition-colors">
                                    <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">${icons.Mail}</div>
                                    <div class="min-w-0"><p class="text-xs text-white/70">Email</p><p class="font-semibold truncate">${personal.email}</p></div>
                                </a>
                                <a href="tel:${personal.phone}" class="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg transition-colors">
                                    <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">${icons.Phone}</div>
                                    <div><p class="text-xs text-white/70">Phone</p><p class="font-semibold">${personal.phoneDisplay}</p></div>
                                </a>
                                <div class="flex items-center gap-3 p-2">
                                    <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">${icons.MapPin}</div>
                                    <div><p class="text-xs text-white/70">Location</p><p class="font-semibold">Visakhapatnam, AP</p></div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Connect</h3>
                            <div class="space-y-3">
                                <a href="${personal.linkedin}" target="_blank" rel="noopener" class="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 transition-all">
                                    <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">${icons.LinkedIn}</div>
                                    <div class="min-w-0"><p class="font-semibold text-gray-800 text-sm">LinkedIn</p><p class="text-xs text-gray-500 truncate">${personal.linkedinHandle}</p></div>
                                </a>
                                <a href="${personal.github}" target="_blank" rel="noopener" class="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 transition-all">
                                    <div class="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">${icons.Github}</div>
                                    <div class="min-w-0"><p class="font-semibold text-gray-800 text-sm">GitHub</p><p class="text-xs text-gray-500 truncate">${personal.githubHandle}</p></div>
                                </a>
                            </div>
                        </div>

                        <div class="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="relative flex h-2.5 w-2.5">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                <span class="text-sm font-bold text-gray-700">Currently available</span>
                            </div>
                            <p class="text-sm text-gray-600">Open to full-time roles, internships, freelance, and research collaborations starting <strong>2026</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        attachFormListeners();
    };

    const attachFormListeners = () => {
        const form = document.getElementById('contact-form');
        if (!form) return;
        const submitBtn = document.getElementById('submit-btn');
        const formStatusEl = document.getElementById('form-status');
        const errorEls = {
            name:   document.getElementById('name-error'),
            email:  document.getElementById('email-error'),
            phone:  document.getElementById('phone-error'),
            reason: document.getElementById('reason-error')
        };

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            let isValid = true;
            Object.values(errorEls).forEach(el => el.textContent = '');
            const data = {
                name:   form.elements.name.value.trim(),
                email:  form.elements.email.value.trim(),
                phone:  form.elements.phone.value.trim(),
                reason: form.elements.reason.value
            };
            if (!data.name) { isValid = false; errorEls.name.textContent = 'Name is required.'; }
            if (!data.email) { isValid = false; errorEls.email.textContent = 'Email is required.'; }
            else if (!/^\S+@\S+\.\S+$/.test(data.email)) { isValid = false; errorEls.email.textContent = 'Invalid email.'; }
            if (data.phone && !/^\d{10}$/.test(data.phone.replace(/\D/g, ''))) { isValid = false; errorEls.phone.textContent = 'Phone must be 10 digits.'; }
            if (!data.reason) { isValid = false; errorEls.reason.textContent = 'Please select a reason.'; }
            if (!isValid) return;

            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending…';
            formStatusEl.innerHTML = '';
            await new Promise(r => setTimeout(r, 1400));
            formStatusEl.innerHTML = `<div class="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-center gap-2">${icons.CheckCircle} Message sent! I'll get back to you within 24 hours.</div>`;
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = `Send Message ${icons.Send}`;
            setTimeout(() => formStatusEl.innerHTML = '', 6000);
        });
    };

    /* =====================================================
       CGPA Modal
    ===================================================== */
    const openCgpaModal = () => {
        cgpaModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        renderCGPAModalContent();
    };
    const closeCgpaModal = () => {
        cgpaModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    };

    const renderCGPAModalContent = () => {
        const completed = cgpaData.filter(d => d.sgpa !== null);
        const highest = Math.max(...completed.map(d => d.sgpa));
        const current = completed[completed.length - 1].cgpa;
        const progress = Math.round((completed.length / cgpaData.length) * 100);

        cgpaModal.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-6xl animate-fade-in-up">
                <div class="p-6 md:p-8 max-h-[90vh] overflow-y-auto">
                    <div class="flex justify-between items-start mb-8">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-800">Academic Performance Dashboard</h3>
                            <p class="text-gray-500">A semester-by-semester view of my B.Tech journey.</p>
                        </div>
                        <button id="close-modal-btn" class="text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">${icons.X}</button>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        ${[
                            { label: 'Highest SGPA', value: highest.toFixed(2), from: 'from-green-400', to: 'to-emerald-600' },
                            { label: 'Current CGPA', value: current.toFixed(2), from: 'from-blue-400',  to: 'to-blue-600' },
                            { label: 'Completed Sems', value: completed.length, from: 'from-indigo-400', to: 'to-cyan-500' },
                            { label: 'Progress',     value: progress + '%',   from: 'from-orange-400', to: 'to-red-500' }
                        ].map(s => `
                            <div class="bg-gradient-to-br ${s.from} ${s.to} text-white p-4 rounded-xl shadow-md">
                                <p class="text-sm opacity-80">${s.label}</p>
                                <p class="text-3xl font-bold">${s.value}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="mb-8">
                        <h4 class="text-lg font-semibold text-gray-700 mb-4">Semester-wise Performance</h4>
                        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            ${cgpaData.map(sem => `
                                <div class="p-4 rounded-xl transition-all duration-300 ${sem.sgpa ? 'bg-white border border-gray-100 hover:scale-105 hover:shadow-lg' : 'bg-gray-50 text-gray-400'}">
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center gap-2">
                                            <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${sem.sgpa ? 'bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white' : 'bg-gray-200 text-gray-500'}">${sem.semester}</div>
                                            <span class="font-semibold text-sm ${sem.sgpa ? 'text-gray-700' : ''}">Sem ${sem.semester}</span>
                                        </div>
                                        <div class="text-right text-xs ${sem.sgpa ? 'text-gray-600' : ''}">
                                            <div>SGPA: <span class="font-bold">${sem.sgpa ? sem.sgpa.toFixed(2) : '—'}</span></div>
                                            <div>CGPA: <span class="font-bold">${sem.cgpa ? sem.cgpa.toFixed(2) : '—'}</span></div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div>
                        <h4 class="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4">
                            <span class="text-indigo-500">${icons.TrendingUp}</span>
                            <span>GPA Trend</span>
                        </h4>
                        <div class="bg-gradient-to-br from-indigo-50 to-cyan-50 p-4 rounded-xl">
                            <canvas id="gpaChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>`;
        cgpaModal.addEventListener('click', (e) => { if (e.target === cgpaModal) closeCgpaModal(); });
        document.getElementById('close-modal-btn').addEventListener('click', closeCgpaModal);
        initializeGpaChart();
    };

    const initializeGpaChart = () => {
        const ctx = document.getElementById('gpaChart')?.getContext('2d');
        if (!ctx) return;
        const labels = cgpaData.map(d => `Sem ${d.semester}`);
        const sgpa = cgpaData.map(d => d.sgpa);
        const cgpa = cgpaData.map(d => d.cgpa);
        const valid = sgpa.filter(Boolean);
        new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    { label: 'SGPA', data: sgpa, borderColor: '#a855f7', backgroundColor: 'rgba(168,85,247,0.15)', fill: true, tension: 0.35, pointRadius: 5, pointBackgroundColor: '#a855f7', borderWidth: 3 },
                    { label: 'CGPA', data: cgpa, borderColor: '#ec4899', backgroundColor: 'rgba(236,72,153,0.08)', fill: false, tension: 0.35, pointRadius: 5, pointBackgroundColor: '#ec4899', borderWidth: 3 }
                ]
            },
            options: {
                responsive: true, maintainAspectRatio: true,
                scales: {
                    y: { beginAtZero: false, min: Math.min(...valid) > 7 ? 7.5 : Math.floor(Math.min(...valid)), grid: { color: '#e5e7eb', borderDash: [4, 4] } },
                    x: { grid: { display: false }, ticks: { color: '#6b7280' } }
                },
                plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8, padding: 20 } } }
            }
        });
    };

    /* =====================================================
       Scroll progress
    ===================================================== */
    const updateScrollProgress = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
        scrollProgress.style.width = pct + '%';
    };
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    /* =====================================================
       Init
    ===================================================== */
    const initialize = () => {
        sections.home.innerHTML = renderHome();
        renderAbout();
        renderEducation();
        renderSkills();
        renderExperience();
        renderProjects();
        renderCertifications();
        renderContact();

        document.getElementById('explore-work-btn').addEventListener('click', () => setActiveSection('projects'));

        // Rotating tagline
        const taglineEl = document.getElementById('tagline');
        if (taglineEl) {
            let i = 0;
            taglineEl.textContent = taglines[i];
            setInterval(() => {
                i = (i + 1) % taglines.length;
                taglineEl.classList.add('opacity-0');
                setTimeout(() => {
                    taglineEl.textContent = taglines[i];
                    taglineEl.classList.remove('opacity-0');
                }, 400);
            }, 3000);
        }

        setActiveSection('home');
        mobileMenuButton.innerHTML = icons.Menu;
        updateScrollProgress();
    };

    initialize();
});
