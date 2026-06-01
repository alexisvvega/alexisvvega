class ProjectsGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.displayCategoryMap = {
      Club: "Club/Personal",
      School: "School",
      Internship: "Internship",
    };

    this.projectsData = [
      {
      category: "School",
      title: "Apple FindMy Extension: Safety Alerts",
      date: "April - June 2026",
      image: "assets/images/projects/ucsd.png",
      modalVideo: "assets/images/projects/caseStudy.mp4",
      modalImages: [
        "assets/images/projects/Screen1.png",
        "assets/images/projects/Screen2.png",
        "assets/images/projects/Screen3.png",
        "assets/images/projects/Screen4.png",
        "assets/images/projects/Screen5.png",
      ],
      description: "Adding safety alerts to Apple FindMy for worried parents of teens.",
      longDescription: `
        <p><strong>The Problem:</strong> Millions of parents use Apple FindMy to track their teens and young adults. But FindMy only shows their location without context about whether that location has a reported crime, hazards, or emergencies. Parents are left anxious, manually checking outside news sources, or simply worrying until their child texts back.</p>

        <p><strong>Our Solution:</strong> We extended FindMy with two features: (1) a color-coded safety layer on the map (green/yellow/red based on recent incident density), and (2) customizable push notifications for when an incident occurs within a preset radius of their child's location.</p>

        <p><strong>User Research:</strong> We interviewed four parents who actively use FindMy. Key findings: "The location itself doesn't let me know how safe the area is." Parents check locations compulsively (every 30 minutes) and feel anxious even after checking because they lack safety context.</p>

        <p><strong>The Market Opportunity:</strong> The personal safety app market is projected to reach $48 billion by 2033. 70% of parents worry about their children's safety. Yet FindMy which is on over 1 billion devices, offers zero safety context.</p>
        
        <p><strong>Design Rationale:</strong> We chose a color-coded map overlay because parents told us they check locations quickly and compulsively. A visual signal (green/yellow/red) communicates safety in under a second without requiring them to leave the app. Push notifications were designed to be radius-based and customizable so parents aren't overwhelmed with every nearby incident, only ones that matter relative to their child's location.</p>

        <p><strong>User Testing:</strong> We tested two prototype variations with parents in our target audience. Participants preferred the version with the map overlay visible by default over the opt-in toggle version, saying the always-on context made them feel less anxious even before an alert fired. The main confusion point was the radius customization — users weren't sure if the radius was in miles or blocks, which flagged a labeling fix for our next iteration.</p>

        <p><strong>Point of View:</strong> We believe parents don't need another safety app. They need the tool they already trust (FindMy) to give them context they're currently missing. The anxiety comes not from not knowing where their child is, but from not knowing if where they are is safe.</p>

        <p><strong>Next Steps:</strong> We will refine the radius label to include explicit units, explore a notification digest option to reduce alert fatigue, and run one more round of testing with the updated overlay toggle placement based on user feedback.</p>    
        `,
        beforeAfter: [
          {
            title: "Screen 2: Person Details Card",
            beforeImg: "assets/images/projects/before1.png",
            afterImg: "assets/images/projects/after1.png",
            caption: `Based on user feedback, we restructured the information hierarchy of the person details card. The original design kept Apple's default layout: Contact, Directions, and Notifications. Users told us they wanted safety context immediately — not buried under navigation options. In the redesign, we elevated "Safety Insights" to the top of the card and added battery percentage to the status line, giving parents a complete at-a-glance picture of their child's situation without any extra taps.`
          },
          {
            title: "Screen 4: Alert Radius & Filters",
            beforeImg: "assets/images/projects/before2.png",
            afterImg: "assets/images/projects/after2.png",
            caption: `User testing revealed two major pain points: participants couldn't visualize what preset radius distances actually covered, and they were confused by vague alert category names. In the redesign, we replaced the preset buttons with a drag slider that shows a live map preview — users can see exactly what's included in their chosen radius in real time. We also added plain-language descriptions under each alert filter (e.g. "Assaults, theft, shootings, weapons, vandalism" under Crime & Weapons) and added a Registered Sex Offenders category after multiple participants independently requested it.`
          }
        ],
        tech: "Figma, User Research, UX Design, iOS Design Guidelines",
        role: "UX Designer & Researcher",
        contributions: [
          "Conducted semi-structured interviews with 2 parents of teens/young adults",
          "Synthesized user research findings into pain points, wishes, and unexpected behaviors",
          "Created 3 user flows (Safety Layer Toggle + Alert Setup & Response + Alert Notification) with multiple variations for each",
          "Designed 20+ hand-drawn UI sketches exploring layout variations",
          "Built high-fidelity Figma prototypes extending Apple's native design language",
          "Authored business impact case study connecting problem to market opportunity",
        ],
        links: {
          figma: "https://www.figma.com/design/tftAO5jNAHKdwCldswTck4/Cogs-127?node-id=0-1&t=ddyYZvLFJargeYI5-1",
        },
      },
      {
        category: "School",
        title: "MemorySpot",
        date: "April - June 2025",
        image: "assets/images/projects/memoryspot.png",
        modalImage: "assets/images/projects/memoryspot.jpeg",
        description: "Local-first memory card web app with map integration",
        longDescription:
          "MemorySpot is a card-based web application built for the CSE 110 Software Engineering course at UCSD. The app allows users to create, view, and manage memory cards linked to specific locations on a map. Each card can include a title, description, image, mood, and geolocation, enabling users to associate memories with physical spots. The project emphasizes local-first design using IndexedDB and LocalStorage, ensuring core functionality works even offline. Users can filter memory cards by mood, view them on a shared map, and interact with a responsive interface optimized for desktop and mobile devices. The app was developed with native web components, following Agile practices and a CI/CD pipeline with GitHub Actions. Testing included unit tests with Jest and end-to-end tests with Puppeteer.",
        tech: "HTML, CSS, JavaScript, Google Maps API, IndexedDB, LocalStorage, Jest, Puppeteer, GitHub Actions",
        role: "Co-Lead, UI/UX Designer & Frontend Developer",
        contributions: [
          "Led frontend and UI/UX design for responsive and user-friendly interface",
          "Implemented map integration with Google Maps API and location-based memory cards",
          "Developed local-first functionality using IndexedDB and LocalStorage",
          "Conducted user testing and contributed to project documentation",
          "Coordinated Agile workflow and CI/CD pipeline for project deployment",
        ],
        links: {
          github: "https://github.com/cse110-sp25-group24/cse110-sp25-group24",
          demo: "https://cse110-sp25-group24.github.io/cse110-sp25-group24/",
        },
      },
      {
        category: "School",
        title: "YouLostIt – STM32 Lost Tag Tracker",
        date: "January - March 2025",
        image: "assets/images/projects/youlostit.png",
        modalImage: "assets/images/projects/stm32.jpg",
        description: "Privacy-focused lost item tracker simulating AirTag.",
        longDescription:
          "YouLostIt is a privacy-conscious lost item tracker built on STM32 microcontrollers as part of the Wireless Embedded Systems course. The device uses an onboard accelerometer to detect inactivity and simulate loss, triggering Bluetooth Low Energy alerts and LED feedback to help identify missing items. It leverages I2C communication for sensor integration, efficient power management, and ITM console debugging for real-time system monitoring. Designed to balance functionality and privacy, YouLostIt demonstrates how embedded systems can be applied to create secure, low-power tracking solutions. This project provided hands-on experience in firmware development, wireless communication, and debugging complex hardware/software interactions.",
        tech: "STM32, C, Bluetooth",
        role: "Embedded Systems Engineer",
        contributions: [
          "Designed motion detection system with accelerometer",
          "Implemented I2C and LED feedback",
          "Optimized hardware comms with ITM debugging",
        ],
        links: {
          github: "https://github.com/alexisvvega/YouLostIt",
        },
      },
      {
        category: "School",
        title: "NovaSpero Website Redesign",
        date: "April - June 2024",
        image: "assets/images/projects/nova.png",
        modalImage: "assets/images/projects/nova.jpg",
        description:
          "Redesigned website to improve scheduling, communication, and educational support for refugees",
        longDescription:
          "As part of the Design for Development course at UCSD, I partnered with Nova Spero, a nonprofit empowering refugee communities through education. I contributed across research, design, and implementation, focusing on improving tutor attendance tracking, student progress monitoring, carpool coordination, and volunteer-family communication. I implemented a dynamic Google Calendar for scheduling, integrated the Remind app for messaging, and organized Google Drive systems for easy data access. Conducting stakeholder interviews and user testing informed iterative improvements, aligning solutions with SDGs on quality education and reduced inequality. The redesigned website now enables consistent access to educational resources, supports mentors, and empowers students, delivering tangible impact for Nova Spero’s mission.",
        tech: "Google Calendar, Remind App, Google Drive, HTML, CSS, JavaScript",
        role: "UX Designer & Developer",
        contributions: [
          "Conducted stakeholder interviews and user research to define problem statements",
          "Designed and implemented Google Calendar feature for streamlined scheduling",
          "Integrated Remind app for mass communication and improved volunteer coordination",
          "Organized Google Drive system for accessible data management",
          "Participated in user testing sessions and iteratively refined website functionality",
          "Authored project documentation including usability analysis, failure analysis, and references",
        ],
        links: {
          demo: "https://www.novaspero.org/",
        },
      },
      {
        category: "Club",
        title: "Psyches of Color",
        date: "November 2023 – Present",
        image: "assets/images/projects/psyches.png",
        modalImage: "assets/images/projects/psyches.jpg",
        description:
          "Full-stack mobile app supporting mental health in Black and Latinx communities.",
        longDescription:
          "Psyches of Color is a nonprofit-driven mobile application designed to support mental health awareness and resources for Black and Latinx communities. Built with React Native, Node.js/Express, and MongoDB, the app provides a cross-platform experience accessible on both Android and iOS. I contribute as a full-stack developer, building secure React Native components with TypeScript, integrating mobile APIs, and managing environment variables for both frontend and backend. In addition to coding, I actively participate in agile sprints, standups, pair programming, and code reviews. The project also includes an admin portal for managing content and community data. This ongoing work combines technical development with a strong equity-focused mission.",
        tech: "React Native, Node.js, Express.js, MongoDB, TypeScript",
        role: "Software Developer",
        contributions: [
          "Co-developing full-stack cross-platform app for iOS and Android",
          "Implemented secure React Native components with TypeScript and mobile APIs",
          "Integrated environment variables and ensured sensitive data handling",
          "Contributed to backend API development with Node.js and Express",
          "Tested for consistent performance across Android and iOS devices",
          "Collaborated through agile sprints, standups, and peer code reviews",
        ],
        links: {
          github: "https://github.com/TritonSE/Psyches-Of-Color-App",
          figma:
            "https://www.figma.com/design/3DE42BsgMUxrbAQxzWL29V/Psyches-of-Color-designs?node-id=0-1&p=f&t=Z3nUfEkvA3GkoDCy-0",
        },
      },
      {
        category: "Club",
        title: "RootsAI",
        date: "April 2025",
        image: "assets/images/projects/acm.png",
        modalImage: "assets/images/projects/rootsai.png",
        description: "Voice-powered, multilingual app for immigrant families",
        longDescription:
          "Built RootsAI, a voice-powered multilingual web app that helps immigrant families apply for government assistance, winning “Best Use of Letta” at UCSD’s 36-hour DiamondHacks. Worked in a team of 4, including 2 collaborators I met the same day, leading frontend and UI/UX design. Created high-fidelity Figma designs and implemented responsive React + TypeScript pages fully integrated with backend APIs. Collaborated on AI-powered workflows using Whisper, Gemini, and Letta to provide real-time guidance for users.",
        tech: "React, TypeScript, Figma, Whisper, Gemini, Letta",
        role: "Frontend & UI/UX Lead",
        contributions: [
          "Led frontend development and UI/UX design with responsive React pages",
          "Designed high-fidelity wireframes in Figma",
          "Integrated frontend with backend APIs for seamless functionality",
          "Collaborated on AI workflows using Whisper, Gemini, and Letta",
          "Adapted quickly to team of 4, including 2 new collaborators, under 36-hour hackathon pressure",
        ],
        links: {
          github: "https://github.com/lyeric2022/diamondhacks2025",
          demo: "https://diamondhacks2025.vercel.app/",
        },
      },
      {
        category: "Club",
        title: "Mario’s Playground",
        date: "November - December 2024",
        image: "assets/images/projects/mario.png",
        modalImage: "assets/images/projects/mario.jpg",
        description: "Nintendo-themed site with interactive mini-games.",
        longDescription:
          "Mario’s Playground is a Nintendo-themed website created with the WIC (Women in Computing) project team. Our goal was to build a Buzzfeed-inspired site that entertains users through interactive games and quizzes. I developed the MarioCoinfall game, where players collect coins while avoiding bombs, and also designed the homepage navigation to create a smooth, Mario-inspired user experience. Built with HTML, CSS, and JavaScript, the project combined playful design, retro-inspired gameplay, and responsive performance. Out of 20 competing teams, our project won 1st place for its creativity, polish, and user engagement.",
        tech: "HTML, CSS, JavaScript",
        role: "Frontend Developer",
        contributions: [
          "Developed MarioCoinfall game with JavaScript (coin collection + bomb collision detection)",
          "Designed Mario-themed homepage navigation with interactive character buttons",
          "Optimized code and assets for smooth, responsive performance",
        ],
        links: {
          github: "https://github.com/alexisvvega/Team11",
          demo: "https://alexisvvega.github.io/Team11/",
        },
      },
      {
        category: "Internship",
        title: "Helicoid Industries Website Redesign",
        date: "June 2025 – August 2025",
        image: "assets/images/projects/helicoid.png",
        modalImage: "assets/images/projects/helicoid.jpg",
        description:
          "Redesigned and developed corporate site from scratch with modern UX and responsive design.",
        longDescription:
          "As a Web Developer and Marketing Outreach Intern at Helicoid Industries, I led the complete redesign of the company’s outdated website. Starting with competitor analysis and UX research, I dissected pain points in the old site and mapped out desired improvements. I created user stories, flows, sketches, and wireframes before translating them into a high-fidelity Figma prototype. From there, I built the website from scratch using HTML, CSS, and JavaScript, ensuring responsive design and clear visual hierarchy. After multiple rounds of user testing, I launched the live site. The new design is now being used as the model for Helicoid’s sister companies’ websites, extending the impact of my work beyond the original scope. In addition, I support Helicoid’s social media and digital marketing outreach to grow brand presence across platforms.",
        tech: "HTML, CSS, JavaScript, Figma, UX Research",
        role: "Software Developer & Marketing Outreach Intern",
        contributions: [
          "Conducted UX research, competitor analysis, and drafted new sitemap",
          "Created wireframes, user stories, and full Figma design prototype",
          "Built modern, responsive website with HTML, CSS, and JavaScript",
          "Ran user testing and implemented feedback before launch",
          "Website adopted as outline for additional companies’ sites",
          "Contributed to social media and marketing campaign planning",
        ],
        links: {
          github: "https://github.com/alexisvvega/Helicoid/tree/main",
          figma:
            "https://www.figma.com/design/BUIhh8uqwCNAAUiZJvQm9k/Helicoid?node-id=7-2&p=f&t=ur8VvxSFXyHsdPtb-0",
          demo: "https://helicoidind.com/",
        },
      },
    ];
  }
connectedCallback() {
    this.render();
    this.addFilterListeners();
 
    setTimeout(() => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const match = this.projectsData.find((p) => {
          const slug = p.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
          return slug === hash;
        });
        if (match) this.openModal(match);
      }
    }, 100);
  }
 
  render() {
    const style = `
      <style>
        .projects-container { max-width: 1100px; margin: 0 auto; padding: 2rem; }
        .category-section { margin-bottom: 3rem; }
        .category-title {
          font-size: 1.8rem; font-weight: 600; margin-bottom: 1rem;
          padding-bottom: 0.5rem; border-bottom: 3px solid var(--primary-accent-color, #7458C0);
        }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; }
        .project-card {
          background: #fff; border-radius: 10px; overflow: hidden;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex; flex-direction: column; justify-content: space-between; height: 420px;
        }
        .project-card:hover { transform: translateY(-5px); box-shadow: 0 12px 24px rgba(0,0,0,0.15); }
        .project-card img { width: 80%; padding-top: 1.5rem; height: 180px; object-fit: contain; align-self: center; }
        .project-content { flex: 1; display: flex; flex-direction: column; justify-content: space-between; padding: 1.2rem; }
        .project-content h3 { font-size: 1.1rem; margin-bottom: 0.5rem; min-height: 2.6rem; }
        .project-content p {
          flex-grow: 1; font-size: 0.95rem; color: #444; margin-bottom: 0.8rem;
          overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;
        }
        .learn-more { align-self: flex-start; margin-top: auto; display: inline-block; color: var(--primary-accent-color, #7458C0); font-weight: 600; cursor: pointer; }
      </style>
    `;
 
    const categories = [...new Set(this.projectsData.map((p) => p.category))];
    const sectionsHTML = categories.map((category) => {
      const items = this.projectsData.filter((p) => p.category === category);
      return `
        <div class="category-section">
          <h2 class="category-title">${this.displayCategoryMap[category] || category}</h2>
          <div class="projects-grid">${items.map((item, i) => this.renderCard(item, i)).join("")}</div>
        </div>`;
    }).join("");
 
    this.shadowRoot.innerHTML = `${style}<div class="projects-container">${sectionsHTML}</div>`;
 
    this.shadowRoot.querySelectorAll(".learn-more").forEach((btn) => {
      const title = btn.closest(".project-card").querySelector("h3").textContent;
      const project = this.projectsData.find((p) => p.title === title);
      btn.addEventListener("click", () => this.openModal(project));
    });
  }
 
  renderCard(item, index) {
    return `
      <div class="project-card">
        <img src="${item.image}" alt="${item.title}">
        <div class="project-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <span class="learn-more" data-index="${index}">Learn More →</span>
        </div>
      </div>`;
  }
 
  openModal(item) {
    const slug = item.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    history.pushState(null, "", `#${slug}`);
 
    const modal = document.createElement("div");
    modal.classList.add("project-modal");
 
    const buttonsHTML = `
      ${item.links?.github ? `<a href="${item.links.github}" target="_blank" class="modal-link github">GitHub</a>` : ""}
      ${item.links?.figma  ? `<a href="${item.links.figma}"  target="_blank" class="modal-link figma">Figma</a>`  : ""}
      ${item.links?.demo   ? `<a href="${item.links.demo}"   target="_blank" class="modal-link demo">Live Demo</a>`  : ""}
    `;
 
    const expandIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
      <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
    </svg>`;
    const collapseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/>
      <line x1="10" y1="14" x2="3" y2="21"/><line x1="21" y1="3" x2="14" y2="10"/>
    </svg>`;
 
    // Build coverflow slides: video first (index 0), then images
    // We'll use a virtual list for infinite looping
    let covercoverHTML = "";
    if (item.modalVideo || item.modalImages?.length) {
      const slides = [];
      if (item.modalVideo) slides.push({ type: "video", src: item.modalVideo });
      (item.modalImages || []).forEach((src) => slides.push({ type: "image", src }));
 
      const slideItems = slides.map((s, i) => {
        if (s.type === "video") {
          return `<div class="cf-slide" data-index="${i}">
            <video src="${s.src}" autoplay loop muted playsinline class="cf-video"></video>
          </div>`;
        }
        return `<div class="cf-slide" data-index="${i}">
          <img src="${s.src}" alt="Design ${i}">
        </div>`;
      }).join("");
 
      covercoverHTML = `
        <div class="coverflow-wrap" id="coverflow-${slug}">
          <button class="cf-arrow cf-arrow-left" aria-label="Previous">&#8249;</button>
          <div class="cf-track">${slideItems}</div>
          <button class="cf-arrow cf-arrow-right" aria-label="Next">&#8250;</button>
        </div>`;
    } else if (item.modalImage) {
      covercoverHTML = `<img src="${item.modalImage}" alt="${item.title}" style="max-width:90%;height:auto;border-radius:8px;display:block;margin:1rem auto;">`;
    }
 
    modal.innerHTML = `
      <style>
        .project-modal {
          position: fixed; inset: 0; background: rgba(0,0,0,0.6);
          display: flex; align-items: center; justify-content: center; z-index: 100000;
        }
        .modal-content {
          background: #fff; width: min(580px, 92vw); max-height: min(85dvh, 85vh);
          border-radius: 12px; box-sizing: border-box; display: flex; flex-direction: column;
          overflow: hidden; position: relative;
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1), max-height 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        @media (min-width: 769px) {
          .modal-content.expanded { width: min(1300px, 94vw); max-height: 90dvh; }
        }
        /* === EXPANDED STATE COVERFLOW OVERRIDES === */
        @media (min-width: 769px) {
          .modal-content.expanded .cf-track {
            height: 380px;
          }
          .modal-content.expanded .cf-slide img {
            height: 340px;
            max-width: 280px;
          }
          .modal-content.expanded .cf-slide .cf-video {
            height: 340px;
            max-width: 200px;
            width: 200px;
          }
          .modal-content.expanded .coverflow-wrap {
            gap: 0.1rem;  /* Minimal gap - arrows almost touching images */
            padding-left: 4rem;
            padding-right: 4rem;
          }
          /* Fix video position — center it properly */
          .modal-content.expanded .cf-slide[data-pos="0"] .cf-video {
            margin: 0 auto;
          }
          
        }
        /* === COVERFLOW === */
        .coverflow-wrap {
          display: flex; align-items: center; justify-content: center;
          gap: 0.5rem; padding: 1.5rem 0 1rem; position: relative;
          /* prevent modal overflow:hidden from clipping slide corners */
          margin: 0 -1.25rem;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }
        .cf-track {
          display: flex; align-items: center; justify-content: center;
          position: relative; height: 240px; flex: 1;
          /* NO overflow:hidden — let side slides show */
        }
        .cf-slide {
          position: absolute;
          transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer; border-radius: 12px; overflow: hidden;
        }
        /* Active (center) */
        .cf-slide[data-pos="0"] {
          transform: translateX(0) scale(1);
          opacity: 1; filter: none; z-index: 5;
        }
        /* ±1 */
        .cf-slide[data-pos="-1"] {
          transform: translateX(-55%) scale(0.75);
          opacity: 0.5; filter: blur(1px); z-index: 4;
        }
        .cf-slide[data-pos="1"] {
          transform: translateX(55%) scale(0.75);
          opacity: 0.5; filter: blur(1px); z-index: 4;
        }
        /* ±2 */
        .cf-slide[data-pos="-2"] {
          transform: translateX(-90%) scale(0.55);
          opacity: 0.25; filter: blur(2px); z-index: 3;
        }
        .cf-slide[data-pos="2"] {
          transform: translateX(90%) scale(0.55);
          opacity: 0.25; filter: blur(2px); z-index: 3;
        }
        /* ±3+ hidden */
        .cf-slide[data-pos="-3"], .cf-slide[data-pos="3"],
        .cf-slide[data-pos="-4"], .cf-slide[data-pos="4"],
        .cf-slide[data-pos="-5"], .cf-slide[data-pos="5"] {
          opacity: 0; pointer-events: none; z-index: 0;
          transform: translateX(0) scale(0.3);
        }
        /* Slide media — natural proportions, fixed height only */
        .cf-slide img {
          height: 220px;
          width: auto;
          max-width: 180px;
          object-fit: contain;
          display: block; border-radius: 12px; margin: 0;
        }
        .cf-slide .cf-video {
          height: 220px;
          width: auto;
          max-width: 120px;
          object-fit: contain;
          background: #000;
          display: block; border-radius: 12px; margin: 0;
        }

        .cf-arrow {
          background: none; border: 1px solid #ddd; border-radius: 50%;
          width: 34px; height: 34px; font-size: 1.5rem; cursor: pointer;
          color: #555; flex-shrink: 0; z-index: 10;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .cf-arrow:hover {
          background: #f3f0ff;
          border-color: var(--primary-accent-color, #8394f7);
          color: var(--primary-accent-color, #8394f7);
        }
        
        /* === REST OF MODAL === */
        .modal-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem 1.25rem; border-bottom: 1px solid #eee; flex-shrink: 0;
        }
        .modal-title { margin: 0; font-size: 1.25rem; font-weight: 700; }
        .modal-date { font-size: 0.85rem; color: #777; margin: 0.25rem 0 0; font-weight: 400; }
        .modal-header-actions { display: flex; align-items: center; gap: 0.5rem; }
        .modal-expand-btn {
          display: none; background: none; border: 1px solid #ddd; border-radius: 6px;
          padding: 5px 7px; cursor: pointer; color: #555; line-height: 1;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .modal-expand-btn:hover {
          background: #f3f0ff;
          border-color: var(--primary-accent-color, #8394f7);
          color: var(--primary-accent-color, #8394f7);
        }
        @media (min-width: 769px) {
          .modal-expand-btn { display: inline-flex; align-items: center; justify-content: center; }
        }
        .modal-close {
          background: none; border: none; font-size: 1.8rem; line-height: 1;
          cursor: pointer; padding: 0 0 0 0.25rem; color: #555;
        }
        .modal-body { padding: 1rem 1.25rem; overflow-y: auto; -webkit-overflow-scrolling: touch; flex: 1; }
        .modal-body > img { max-width: 90%; height: auto; border-radius: 8px; display: block; margin: 1rem auto; }
        .modal-footer {
          padding: 1rem 1.25rem; border-top: 1px solid #eee;
          display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center; flex-shrink: 0;
        }
        .modal-link {
          display: inline-block; padding: 0.6rem 1.1rem; border-radius: 8px;
          text-decoration: none; font-weight: 700; color: #fff; text-align: center;
          transition: transform 0.2s, opacity 0.2s, box-shadow 0.2s;
          min-width: 120px; box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }
        .modal-link:hover { transform: translateY(-2px); opacity: 0.95; }
        .modal-link:active { transform: translateY(0); opacity: 1; }
        .modal-link.github { background: #A7C1A8; }
        .modal-link.figma  { background: #eb8768; }
        .modal-link.demo   { background: #89A8B2; }
        .modal-body::-webkit-scrollbar { width: 8px; }
        .modal-body::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.25); border-radius: 4px; }
        .modal-body::-webkit-scrollbar-track { background: transparent; }
        @media (max-width: 480px) {
          .modal-content { border-radius: 10px; }
          .modal-title { font-size: 1.1rem; }
        }
      </style>
 
      <div class="modal-content" role="dialog" aria-modal="true" aria-label="${item.title}">
        <div class="modal-header">
          <div>
            <h2 class="modal-title">${item.title}</h2>
            ${item.date ? `<p class="modal-date">${item.date}</p>` : ""}
          </div>
          <div class="modal-header-actions">
            <button class="modal-expand-btn" aria-label="Expand modal" title="Expand view">${expandIcon}</button>
            <button class="modal-close" aria-label="Close modal">&times;</button>
          </div>
        </div>
 
        <div class="modal-body">
          ${covercoverHTML}
          <div class="modal-body-text">
            <p><strong>Role:</strong> ${item.role}</p>
            <p><strong>Tech:</strong> ${item.tech}</p>
            <p>${item.longDescription || item.description}</p>
            ${item.contributions?.length ? `
              <h4>Key Contributions:</h4>
              <ul>${item.contributions.map((c) => `<li>${c}</li>`).join("")}</ul>
            ` : ""}
            ${item.beforeAfter?.length ? `
            <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid #eee;">
            <h4 style="font-size:1rem; font-weight:700; margin-bottom:1rem;">Before & After: Design Iterations</h4>
            ${item.beforeAfter.map(ba => `
              <div style="margin-bottom: 2rem;">
                <p style="font-weight:600; margin-bottom:0.75rem;">${ba.title}</p>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:0.75rem;">
                  <div>
                    <p style="font-size:0.75rem; font-weight:600; color:#888; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.4rem;">Before</p>
                    <img src="${ba.beforeImg}" alt="Before: ${ba.title}" style="width:100%; height:auto; max-height:400px; object-fit:contain; border-radius:8px; border:1px solid #eee; display:block; margin:0 auto; max-width:unset;">
                  </div>
                  <div>
                    <p style="font-size:0.75rem; font-weight:600; color:#8394f7; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.4rem;">After</p>
                    <img src="${ba.afterImg}" alt="After: ${ba.title}" style="width:100%; height:auto; max-height:400px; object-fit:contain; border-radius:8px; border:1px solid #eee; display:block; margin:0 auto; max-width:unset;">
                </div>
                </div>
                <p style="font-size:0.9rem; color:#555; line-height:1.6;">${ba.caption}</p>
              </div>
            `).join("")}
          ` : ""}
          </div>
        </div>
 
        <div class="modal-footer">
          ${buttonsHTML.trim() || "<span style='color:#777;'>No external links available</span>"}
        </div>
      </div>
    `;
 
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add("active"));
 
    // --- Coverflow carousel with infinite looping ---
    const carousel = modal.querySelector(`#coverflow-${slug}`);
    if (carousel) {
      const slides = [...carousel.querySelectorAll(".cf-slide")];
      const total = slides.length;
      // Start at 0 (video is first slide)
      let current = 0;
 
      function updatePositions() {
        slides.forEach((slide, i) => {
          // Calculate shortest circular distance
          let pos = i - current;
          // Wrap to range [-half, half]
          if (pos > total / 2)  pos -= total;
          if (pos < -total / 2) pos += total;
          pos = Math.max(-5, Math.min(5, pos));
          slide.dataset.pos = pos.toString();
        });
      }
 
      function advance(dir) {
        // Wrap around for infinite loop
        current = ((current + dir) % total + total) % total;
        updatePositions();
      }
 
      updatePositions();
 
      carousel.querySelector(".cf-arrow-left").addEventListener("click", () => advance(-1));
      carousel.querySelector(".cf-arrow-right").addEventListener("click", () => advance(1));
      slides.forEach((slide, i) => {
        slide.addEventListener("click", () => { current = i; updatePositions(); });
      });
    }
 
    // --- Expand / collapse ---
    const modalContent = modal.querySelector(".modal-content");
    const expandBtn = modal.querySelector(".modal-expand-btn");
    let expanded = false;
    expandBtn.addEventListener("click", () => {
      expanded = !expanded;
      modalContent.classList.toggle("expanded", expanded);
      expandBtn.setAttribute("aria-label", expanded ? "Collapse modal" : "Expand modal");
      expandBtn.setAttribute("title", expanded ? "Collapse view" : "Expand view");
      expandBtn.innerHTML = expanded ? collapseIcon : expandIcon;
    });
 
    // --- Close handlers ---
    const closeModal = () => {
      history.pushState(null, "", window.location.pathname);
      modal.classList.remove("active");
      setTimeout(() => modal.remove(), 150);
      window.removeEventListener("keydown", onEsc);
    };
    const onEsc = (e) => { if (e.key === "Escape") closeModal(); };
    modal.querySelector(".modal-close").onclick = closeModal;
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    window.addEventListener("keydown", onEsc, { once: true });
  }
 
  addFilterListeners() {
    const filterButtons = document.querySelectorAll(".filter-button");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        this.filterCards(button.dataset.filter);
      });
    });
  }
 
  filterCards(filter) {
    const container = this.shadowRoot.querySelector(".projects-container");
    if (filter === "all") { this.render(); return; }
    const filtered = this.projectsData.filter((p) => p.category === filter);
    container.innerHTML = `
      <div class="category-section">
        <h2 class="category-title">${this.displayCategoryMap[filter] || filter}</h2>
        <div class="projects-grid">${filtered.map((item, i) => this.renderCard(item, i)).join("")}</div>
      </div>`;
    container.querySelectorAll(".learn-more").forEach((btn, i) => {
      btn.addEventListener("click", () => this.openModal(filtered[i]));
    });
  }
}
 
customElements.define("projects-grid", ProjectsGrid);
 