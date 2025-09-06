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
        title: "MemorySpot",
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
          figma: "https://figma.com/my-prototype",
          demo: "https://youlostit-demo.com",
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
  }

  render() {
    const style = `
      <style>
        .projects-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem;
        }
        .category-section { margin-bottom: 3rem; }
        .category-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 3px solid var(--primary-accent-color, #7458C0);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        /* Cards: fixed height + consistent layout */
        .project-card {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 420px;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }
        .project-card img {
          width: 80%;
          padding-top: 1.5rem;
          height: 180px;
          object-fit: contain;
          align-self: center;
        }
        .project-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.2rem;
        }
        .project-content h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          min-height: 2.6rem;
        }
        .project-content p {
          flex-grow: 1;
          font-size: 0.95rem;
          color: #444;
          margin-bottom: 0.8rem;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .learn-more {
          align-self: flex-start;
          margin-top: auto;
          display: inline-block;
          color: var(--primary-accent-color, #7458C0);
          font-weight: 600;
          cursor: pointer;
        }
      </style>
    `;

    // Group projects by category
    const categories = [...new Set(this.projectsData.map((p) => p.category))];

    const sectionsHTML = categories
      .map((category) => {
        const items = this.projectsData.filter((p) => p.category === category);
        return `
          <div class="category-section">
            <h2 class="category-title">${this.displayCategoryMap[category] || category}</h2>
            <div class="projects-grid">
              ${items.map((item, i) => this.renderCard(item, i)).join("")}
            </div>
          </div>
        `;
      })
      .join("");

    this.shadowRoot.innerHTML = `
      ${style}
      <div class="projects-container">
        ${sectionsHTML}
      </div>
    `;

    this.shadowRoot.querySelectorAll(".learn-more").forEach((btn) => {
      const title = btn
        .closest(".project-card")
        .querySelector("h3").textContent;
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
      </div>
    `;
  }

  openModal(item) {
    const modal = document.createElement("div");
    modal.classList.add("project-modal");

    const buttonsHTML = `
      ${item.links?.github ? `<a href="${item.links.github}" target="_blank" class="modal-link github">GitHub</a>` : ""}
      ${item.links?.figma ? `<a href="${item.links.figma}"  target="_blank" class="modal-link figma">Figma</a>` : ""}
      ${item.links?.demo ? `<a href="${item.links.demo}"   target="_blank" class="modal-link demo">Live Demo</a>` : ""}
    `;

    modal.innerHTML = `
      <style>
        .project-modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100000;
        }
        .modal-content {
          background: #fff;
          width: min(1000px, 92vw);
          max-height: min(85dvh, 85vh); /* dvh fixes mobile viewport toolbars */
          border-radius: 12px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          overflow: hidden; /* keep rounded corners when inner scrolls */
          position: relative;
        }
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid #eee;
        }
        .modal-title {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 700;
        }
        .modal-date {
          font-size: 0.85rem;
          color: #777;
          margin: 0.25rem 0 0;
          font-weight: 400;
        }
        .modal-close {
          background: none;
          border: none;
          font-size: 1.8rem;
          line-height: 1;
          cursor: pointer;
          padding: 0 0 0 0.25rem;
        }
        .modal-body {
          padding: 1rem 1.25rem;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .modal-body img {
          max-width: 90%;
          height: auto;
          border-radius: 8px;
          display: block;
          margin: 1rem auto; /* centers image horizontally */
        }
        .modal-footer {
          padding: 1rem 1.25rem;
          border-top: 1px solid #eee;
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .modal-link {
          display: inline-block;
          padding: 0.6rem 1.1rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          color: #fff;
          text-align: center;
          transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
          min-width: 120px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }
        .modal-link:hover { transform: translateY(-2px); opacity: 0.95; }
        .modal-link:active { transform: translateY(0); opacity: 1; }
        .modal-link.github { background: #A7C1A8; }
        .modal-link.figma  { background: #eb8768; }
        .modal-link.demo   { background: #89A8B2; }

        /* Scrollbar aesthetics (optional) */
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
          <button class="modal-close" aria-label="Close modal">&times;</button>
        </div>

        <div class="modal-body">
          ${item.modalImage ? `<img src="${item.modalImage}" alt="${item.title}">` : ""}
          <p><strong>Role:</strong> ${item.role}</p>
          <p><strong>Tech:</strong> ${item.tech}</p>
          <p>${item.longDescription || item.description}</p>
          ${
            item.contributions?.length
              ? `
            <h4>Key Contributions:</h4>
            <ul>
              ${item.contributions.map((c) => `<li>${c}</li>`).join("")}
            </ul>
          `
              : ""
          }
        </div>

        <div class="modal-footer">
          ${buttonsHTML.trim() || "<span style='color:#777;'>No external links available</span>"}
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // open animation (fade in)
    requestAnimationFrame(() => modal.classList.add("active"));

    // close handlers
    const closeModal = () => {
      modal.classList.remove("active");
      setTimeout(() => modal.remove(), 150);
      window.removeEventListener("keydown", onEsc);
    };
    const onEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    modal.querySelector(".modal-close").onclick = closeModal;
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    window.addEventListener("keydown", onEsc, { once: true });
  }

  addFilterListeners() {
    const filterButtons = document.querySelectorAll(".filter-button");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        const filter = button.dataset.filter;
        this.filterCards(filter);
      });
    });
  }

  filterCards(filter) {
    const container = this.shadowRoot.querySelector(".projects-container");
    if (filter === "all") {
      this.render();
      return;
    }

    const filtered = this.projectsData.filter((p) => p.category === filter);
    container.innerHTML = `
    <div class="category-section">
      <h2 class="category-title">${this.displayCategoryMap[filter] || filter}</h2>
      <div class="projects-grid">
        ${filtered.map((item, i) => this.renderCard(item, i)).join("")}
      </div>
    </div>
  `;

    container.querySelectorAll(".learn-more").forEach((btn, i) => {
      btn.addEventListener("click", () => this.openModal(filtered[i]));
    });
  }
}

customElements.define("projects-grid", ProjectsGrid);
