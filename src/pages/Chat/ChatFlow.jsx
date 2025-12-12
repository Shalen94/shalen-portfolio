import React from 'react'

const ChatFlow = () => {
    return {
    start: {
      message: `👋Greetings,  I’m Shalen katta . Which part of my profile would you like to explore first?`,
      options: [
        { text: "👤 About Shalen", next: "aboutMe" },
        { text: "💪 Skills/Certificates", next: "skillsCertificates" },
        { text: "🚀 Projects/Internship", next: "projectsInternship" },
        { text: "📝 Resume", next: "resume" },
        { text: "💬 Contact Info", next: "contact" }
      ]
    },
    aboutMe: {
      message: `I’m Shalen Katta, a passionate web developer focused on creating clean, modern, and user-friendly digital experiences. I enjoy building projects that solve real problems and constantly push myself to learn new technologies and improve my craft.
      \nWhich section are you interested in exploring?`,
      options: [
        { text: "🎓 Education", next: "education" },
        { text: "🧘 Hobbies", next: "hobbies" },
        { text: "⬅️ Back", next: "start" }
      ]
    },
    education: {
      message:"May I know which degree you’d like details on?”",
      options: [
        {text:"Btech" ,next: "btech"},
        {text:"Intermediate" ,next: "inter"},
        {text:"10th" ,next: "tenth"},

        { text: "⬅️ Back", next: "aboutMe" },
        { text: "🔄 start Again", next: "start" }
      ]
    },
    btech: {
      message:
      `Bachelor of Technology (B.Tech) - Computer Science and Engineering\n
       VIT-AP University, Andhra Pradesh\n
       2021 - 2025\n
       Highlights:\n
       Developed multiple full-stack projects as part of semester work.\n
       Completed capstone project focused on modern web development.\n
      `
      ,

      options: [
        {text:"CGPA",next:"cgpa"},
        {text:"Intermediate" ,next: "inter"},
        {text:"10th" ,next: "tenth"},

        { text: "⬅️ Back", next: "aboutMe" },
        { text: "🔄 start Again", next: "start" }
      ]
    },
    cgpa: {
      message:`
      I usually prefer not to highlight my CGPA, but since you’ve explored this far, you deserve to know it \n
      My CGPA is 8.13 \n
      It may not be extraordinary, but the work I do speaks far beyond numbers. `
      ,
      options: [
        { text: "⬅️ Back", next: "education" },
        { text: "🔄 start Again", next: "start" }
      ]
    },



    inter: {
      message:`
      Intermediate (Class XII)\n
      Narayana Junior College, Chirala\n
      2019 - 2021\n
      Stream: MPC (Maths, Physics, Chemistry)\n
      Percentage: 95.4%\n
      `
      ,
      options: [
        {text:"Btech" ,next: "btech"},
        {text:"10th" ,next: "tenth"},

        { text: "⬅️ Back", next: "aboutMe" },
        { text: "🔄 start Again", next: "start" }
      ]
    },

    tenth: {
      message:`
      Secondary School (Class X)\n
      Bhashyam High School, Chirala\n
      2018 - 2019\n
      GPA: 10 / 10\n
      `
      ,
      options: [
        {text:"Btech" ,next: "btech"},
        {text:"Intermediate" ,next: "inter"},

        { text: "⬅️ Back", next: "aboutMe" },
        { text: "🔄 start Again", next: "start" }
      ]
    },

    //skill or certificates
    skillsCertificates: {
      message:"Which section would you like to explore — Skills or Certificates?",
      options: [
        {text:"Skills" ,next: "skills"},
        {text:"Certificates" ,next: "certificates"},
        { text: "⬅️ Back", next: "start" }
      ]
    },

    skills: {
      message:`
      🖥️ Frontend Development:- \n
          HTML5,CSS3 / Tailwind CSS,JavaScript (ES6+),React.js,Next.js,Responsive Web Design,UI/UX Basics \n
      ⚙️ Backend Development:- \n
          Node.js,Express.js,PHP,REST API Development \n
      🗄️ Databases:- \n
          MongoDB, PostgreSQL , MySQL \n
      📱 Programming Languages \n
          Java,JavaScript(basics) \n
      🛠️ Tools & Technologies:- \n
          Git & GitHub, Postman, JWT Authentication , VS Code \n
      💼 Soft Skills:- \n
          Communication, Problem-Solving, Team Collaboration, Adaptability, Time Management, Critical Thinking, Leadership (project handling) \n
      `,
      options: [
        {text:"Certificates" ,next: "certificates"},
        { text: "🔄 start Again", next: "start" }
   
      ]
    },
    certificates: {
      message:`
      1. MERN Full-Stack Development
        Ethnus Training
        Covered MongoDB, Express.js, React.js, and Node.js
        Hands-on projects and full-stack application development

      2.Java (Basic)
        HackerRank
        Verified skills in OOP, loops, arrays, and problem-solving
        Earned HackerRank Java Certificate

      3.SQL (Basic)
        HackerRank
        Strong understanding of SQL queries, joins, aggregations
        HackerRank SQL Certificate achieved

      4.Excel Fundamentals
        Coursera
        Basics of spreadsheets, formulas, data filtering, and charts
        Completed Coursera Excel Essentials course

      I've already mentioned all my certificates above — I think you might have missed them. Feel free to explore; I’ve attached the documents to the icons. Just click any icon to view the certificate image.
      `,
      options: [
        {text:"Certificates" ,next: "certificates"},
        { text: "🔄 start Again", next: "start" }
      ]
    },



    //projects/internship
    projectsInternship: {
      message:"Which section would you like to explore — Projects or Internship ?",
      options: [
        {text:"Projects" ,next: "projects"},
        {text:"Internship" ,next: "internship"},
        { text: "⬅️ Back", next: "start" }
      ]
    },
    projects: {
      message:"Which project are you interested in exploring?",
      options: [
        {text:"BusEasy" ,next: "busEasy"},
        {text:"CryptoScope" ,next: "cryptoScope"},
        {text:"Skypulse" ,next: "skyPulse"},
        {text:"Taskify" ,next: "taskify"},
        {text:"Internship" ,next: "internship"},
        { text: "⬅️ Back", next: "start" }
      ]
    },
    busEasy: {
      message:`
          ⭐ BusEasy - Bus Management System \n
              Built using PHP, MySQL, and XAMPP, BusEasy is a full-stack web application that allows users to book bus tickets, manage regional passes, and handle parcel registrations. It includes a complete admin panel for adding buses, viewing bookings, managing drivers, and monitoring payments. The system features secure login, session handling, and a structured database for storing routes, users, and booking details. It's a compact, fully functional platform showcasing my backend logic and database skills.
      `,
      options: [
        {text:"CryptoScope" ,next: "cryptoScope"},
        {text:"Skypulse" ,next: "skyPulse"},
        {text:"Taskify" ,next: "taskify"},
        {text:"Internship" ,next: "internship"},
        { text: "⬅️ Back", next: "projectsInternship" },
        { text: "🔄 start Again", next: "start" }

      ]
    },
    cryptoScope: {
      message:`
          ⭐ CryptoScope - Cryptocurrency Tracking Platform \n
              Built using the MERN stack, CryptoScope is a real-time crypto tracking web app that displays live market data, price charts, coin details, and watchlist features. The backend uses Node.js + Express to fetch and serve API data, while React handles dynamic UI updates and interactive charts. MongoDB is used to store user preferences like favorites or watchlists. The project highlights my skills in API integration, state management, responsive UI, and end-to-end full-stack development.
      `,
      options: [
        {text:"BusEasy" ,next: "busEasy"},
        {text:"Skypulse" ,next: "skyPulse"},
        {text:"Taskify" ,next: "taskify"},
        {text:"Internship" ,next: "internship"},
        { text: "⬅️ Back", next: "projectsInternship" },
        { text: "🔄 start Again", next: "start" }

      ]
    },
    skyPulse: {
      message: `
            ⭐ SkyPulse - Weather Web Application \n
                SkyPulse is a modern React-based weather app that provides real-time weather updates, forecasts, and location-based results using external weather APIs. It features a clean, responsive UI, dynamic temperature visuals, and fast search functionality. The project highlights my skills in API integration, state management, React hooks, and building smooth, user-friendly interfaces.
      `,
      options: [
        {text:"BusEasy" ,next: "busEasy"},
        {text:"CryptoScope" ,next: "cryptoScope"},
        {text:"Taskify" ,next: "taskify"},
        {text:"Internship" ,next: "internship"},
        { text: "⬅️ Back", next: "projectsInternship" },
        { text: "🔄 start Again", next: "start" }

      ]
    },
    taskify: {
      message:`
          ⭐ Taskify - To-Do Web App (PERN Stack)
              Taskify is a simple yet powerful PERN stack application that allows users to create, update, and manage daily tasks. The backend uses Node.js + Express with a PostgreSQL database for storing tasks, while the frontend is built in React for smooth, responsive interactions. It includes CRUD functionality, organized UI components, and a clean workflow that highlights my skills in API development, database handling, and full-stack project structure.
      `,
      options: [
        {text:"BusEasy" ,next: "busEasy"},
        {text:"CryptoScope" ,next: "cryptoScope"},
        {text:"Skypulse" ,next: "skyPulse"},
        {text:"Internship" ,next: "internship"},
        { text: "⬅️ Back", next: "projectsInternship" },
        { text: "🔄 start Again", next: "start" }

      ]
    },

    internship: {
      message:`
          ⭐ MERN Full-Stack Development Internship
              Ethnus
              Aug 2023 - Nov 2023
              I completed a 3-month MERN internship at Ethnus, where I learned to build full-stack web applications using MongoDB, Express.js, React.js, and Node.js. During the internship, I worked on creating responsive UIs, developing REST APIs, connecting frontend and backend, and handling database operations with MongoDB. I also practiced GitHub version control, API testing with Postman, and implemented authentication using JWT. The internship concluded with a full MERN project where I built a complete application with login, CRUD features, and a fully connected frontend–backend system.
      `
      ,
      options: [
        {text:"Projects" ,next: "projects"},
        { text: "⬅️ Back", next: "start" }
      ]
    },

    resume: {
      message:`
      I've shared my resume link below — you may go ahead and explore it anytime.
      <a href="https://drive.google.com/file/d/17catFFmBHE7APdS363nZAQxE_2P5UuRh/view?usp=sharing" target="_blank">📄 Resume Link</a>
      `,
      options: [
        { text: "⬅️ Back", next: "start" },
      ]
    },

    contact: {
      message:`
      Here are my contact details.
      📧 Email: <a href="mailto:shalenkatta@gmail.com" target="_blank">shalenkatta@gmail.com</a>
      📱 Phone: +91 8008432165
      🌐 LinkedIn: <a href="https://www.linkedin.com/in/shalen-katta" target="_blank">linkedin.com/in/shalenkatta </a>
      💻 GitHub:  <a href="https://github.com/Shalen94" target="_blank">github.com/shalenkatta</a>
      📍 Location: Andhra Pradesh, India

      `,
      options: [
        { text: "⬅️ Back", next: "start" }
      ]
    },












    coinInfo: {
      message: "Which category are you interested in?",
      options: [
        { text: "Top Coins (BTC, ETH...)", next: "topCoins" },
        { text: "Altcoins", next: "trendingAltCoins" },
        { text: "Can't find my coin", next: "coinNotFound" },
        { text: "⬅️ Back", next: "start" }
      ]
    },
  } ;
};

export default ChatFlow ;