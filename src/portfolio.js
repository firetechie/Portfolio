/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vishwanath's Portfolio",
  description:
    "To secure a challenging position where I can effectively contribute my skills as software professional, possessing competent technical skills.",
  og: {
    title: "Portfolio",
    type: "website",
    url: "https://firetechie.github.io",
  },
};

//Home Page
const greeting = {
  title: "Vishwanath Hegde",
  logo_name: "Vishwanath Hegde",
  nickname: "Fire Techie",
  subTitle:
    "To secure a challenging position where I can effectively contribute my skills as software professional, possessing competent technical skills.",
  resumeLink:
    "https://drive.google.com/file/d/1sYNHvruMAMwRTVLkxGhLCakfBwEvdale",
  portfolio_repository: "https://github.com/firetechie",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/firetechie",
  // linkedin: "https://www.linkedin.com/in/firetechie",
  // gmail: "mailto:vishwahegde27@gmail.com",
  // facebook: "https://www.facebook.com/firetechie",
  // twitter: "https://twitter.com/firetechie",
  // instagram: "https://www.instagram.com/mr.karunadu"

  {
    name: "Github",
    link: "https://github.com/firetechie",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#333", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/firetechie",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vishwahegde27@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/firetechie",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#4267B2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mr.karunadu",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#bc2a8d", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Front-End Development",
      fileName: "FrontEndImg",
      skills: [
        "⚡ Manage website development projects from initial design through completion, optimizing all cross-browser and multi-platform compatibility.",
        "⚡ Work closely with programmers and clients to meet project requirements, goals, and desired functionality.",
        "⚡ Implemented enhancements that improved web functionality and responsiveness.",
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          fontAwesomeClassname: "vscode-icons:file-type-html",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "vscode-icons:file-type-css",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "tabler:brand-javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "emojione-monotone:b-button",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "logos:angular-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed full-stack web applications which processed, analyzed, and rendered data visually.",
        "⚡ Managed time-sensitive updates, including content changes and database upgrades.",
        "⚡ Planned, wrote, and debugged web applications and software with complete accuracy.",
      ],
      softwareSkills: [
        {
          skillName: "Web Development",
          fontAwesomeClassname: "mdi:web",
          style: {
            color: "#1E90FF",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "flat-color-icons:android-os",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Ios",
          fontAwesomeClassname: "logos:apple",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "la:wordpress",
          style: {
            color: " #21759b",
          },
        },
        {
          skillName: "Software",
          fontAwesomeClassname: "clarity:computer-outline-alerted",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
    {
      title: "Back-End Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Develop and improve features for different areas in our backend.",
        "⚡ Working in a very iterative/agile development environment.",
        "⚡ Work closely with the development team to deliver on-time, on budget, high value projects.",
        "⚡ Provide assistance in training on key functions of the product.",
      ],
      softwareSkills: [
        {
          skillName: "API",
          fontAwesomeClassname: "ant-design:api-filled",
          style: {
            color: "#FF4500",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Php",
          fontAwesomeClassname: "logos:php",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MS SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "cib:mysql",
          style: {
            color: "#fffff",
          },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "vscode-icons:file-type-bitbucketpipeline",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Free Code Camp",
      iconifyClassname: "fa-brands:free-code-camp",
      style: {
        color: "#2EC866",
      },
      // profileLink: "https://www.hackerrank.com/firetechie",
    },
    {
      siteName: "VMware",
      iconifyClassname: "carbon:logo-vmware",
      style: {
        color: "#F4D03F",
      },
      // profileLink: "https://www.codechef.com/firetechie",
    },
    {
      siteName: "Trailhead Salesforce",
      iconifyClassname: "logos:salesforce",
      style: {
        color: "#1F8ACB",
      },
      // profileLink: "http://codeforces.com/firetechie",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sir M. Visvesvaraya Institute of Technology, Bangalore",
      subtitle: "Master of Computer Application (MCA)",
      logo_path: "clg_logo.png",
      alt_name: "Sirmvit Bangalore",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ Sir MVIT is a place full of fun-learning, enthusiasm, competition, and an innovative atmosphere.",
        "⚡ The course was designed to provide solid technical foundation theoretically as well as Practically capable of providing quality services to industry.",
        "⚡ Apart from this, I have done courses on Artificial Intelligence, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.sirmvit.edu",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Responsive Web Design",
      subtitle: "- FreeCodeCamp",
      logo_path: "FreeCodeCamp.svg",
      certificate_link:
        "https://drive.google.com/file/d/1LBMxff6_RtczAJii6Rni8LI0xXAe-sHL",
      alt_name: "Responsive Web Design",
      color_code: "#ffffff",
    },
    {
      title: "Google Analytics for Beginners",
      subtitle: "- Google Analytics Academy",
      logo_path: "Google Analytics Academy.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1TpETywqHSPB6gtp-5AgvfXKOkJLWEid9",
      alt_name: "Google Analytics for Beginners",
      color_code: "#ffffff",
    },
    {
      title: "Selenium",
      subtitle: "- Learnvern",
      logo_path: "Learnvern.png",
      certificate_link:
        "https://drive.google.com/file/d/1b5_MXB7WB-0p048FYTEYBuNYxFlJuqzG",
      alt_name: "Selenium",
      color_code: "#ffffff",
    },
    {
      title: "SQL Fundamentals",
      subtitle: "- SoloLearn",
      logo_path: "SoloLearn.png",
      certificate_link:
        "https://drive.google.com/file/d/1Tw5-v6xiB0E7grKDT6sAk0V9GRB9VKxn",
      alt_name: "SQL Fundamentals",
      color_code: "#ffffff",
    },
    {
      title: "SEO",
      subtitle: "- eMarketing Institute",
      logo_path: "eMarketing Institute.png",
      certificate_link:
        "https://drive.google.com/file/d/1bJjorIf41afi27J5cWb4c96x6uFu3ZNT",
      alt_name: "SEO",
      color_code: "#ffffff",
    },
    {
      title: "Node.js Tutorial",
      subtitle: "- Skillzcafe",
      logo_path: "Skillzcafe.png",
      certificate_link:
        "https://drive.google.com/file/d/1U-UK2Lo5Pv7YtImhbCwgT9qrYRZ2ilr9",
      alt_name: "Node.js Tutorial",
      color_code: "#ffffff",
    },
    {
      title: "Introduction to IT & Cybersecurity",
      subtitle: "- Cybrary",
      logo_path: "Cybrary.png",
      certificate_link:
        "https://drive.google.com/file/d/1U8RE0aouSXVQNYTZvs2FfqN4aZ9dGepF",
      alt_name: "Introduction to IT & Cybersecurity",
      color_code: "#ffffff",
    },
    {
      title: "Introduction to Artificial Intelligence",
      subtitle: "- NPTEL",
      logo_path: "NPTEL.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1TzAfPM7Wgw1vXpxKFKVqwUzkLbJV8FG2",
      alt_name: "Introduction to Artificial Intelligence",
      color_code: "#ffffff",
    },
    {
      title: ".Net Associate",
      subtitle: "- TCCDNA",
      logo_path: "TCCDNA.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1aYvXgLiDww3baJmwWvBD-oyQbntDPsJv",
      alt_name: ".Net Associate",
      color_code: "#ffffff",
    },
    {
      title: "Introduction to IoT",
      subtitle: "- Cisco Networking Academy",
      logo_path: "Cisco Networking Academy.png",
      certificate_link:
        "https://drive.google.com/file/d/1BXqVvvADOHEB5onDWZIov_L_VrqX2CJK",
      alt_name: "Introduction to IoT",
      color_code: "#ffffff",
    },
    {
      title: "Digital Marketing",
      subtitle: "- ACS College of Engineering, Bangalore",
      logo_path: "ACS.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1qAmYd-XqOGpdjQFK5bziHH9E4mktyHxv",
      alt_name: "Digital Marketing",
      color_code: "#ffffff",
    },
    {
      title: " JavaScript Beginner",
      subtitle: "- MicroDegree",
      logo_path: "MicroDegree.png",
      certificate_link:
        "https://drive.google.com/file/d/1Y1pBTPp_xZxoXxWN_gQYxg85Og0-KbWY",
      alt_name: "JavaScript Beginner",
      color_code: "#ffffff",
    },
    {
      title: "Advanced Excel Workshop",
      subtitle: "- JS Academy",
      logo_path: "JSAcademy.png",
      certificate_link:
        "https://drive.google.com/file/d/1T1bW24RtyORcrNvnohKXV0SirsOkYTjs",
      alt_name: "Advanced Excel Workshop",
      color_code: "#ffffff",
    },
    {
      title: "Angular (Basic)",
      subtitle: "- Hacker Rank",
      logo_path: "Hackerrank.png",
      certificate_link:
        "https://drive.google.com/file/d/1DenwxJ3GuVDAQo6qHBU4xdUZ_-oc9q5-",
      alt_name: "Angular (Basic)",
      color_code: "#ffffff",
    },
    {
      title: "Scrum Master Certification",
      subtitle: "- Master of Project Academy",
      logo_path: "MPAcademy.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1NzbYIaAmXfcEuG6tVMsSkSDLm2W-zL8-",
      alt_name: "Scrum Master Certification",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked with many evolving startups as Web Developer, Designer and Software Architect. I have also worked with some well established companies mostly as Software Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Engineer - Product Engineering",
          company: "Sakon",
          company_url: "https://www.sakon.com",
          logo_path: "Sakon.png",
          duration: "February 2023 - Present",
          location: "Remote",
          description:
            "Opinionated on the roadmap and future of the product; making decisions on priorities and building new features.",
          color: "#fc1f20",
        },
        {
          title: "Junior SDE",
          company: "Maveric Systems Limited",
          company_url: "https://maveric-systems.com",
          logo_path: "Maveric.png",
          duration: "April 2021 - January 2023",
          location: "Bangalore, Karnataka",
          description:
            "Understanding customer requirements to develop technical requirements and architecture. Interacting with departments or customers on project requirements, proposals and status.",
          color: "#0879bf",
        },
        {
          title: "Senior Web Developer",
          company: "KNR Marine Exports",
          company_url: "http://knrmarineexports.com",
          logo_path: "KNR.png",
          duration: "June 2020 - March 2021",
          location: "Bangalore, Karnataka",
          description:
            "I have created complete Web Application relating Food, Education, Fashion, Ecommerce, HRM etc & implemented admin panel as well.",
          color: "#0879bf",
        },
        {
          title: "Web Developer",
          company: "Techbiz18 Infosolutions",
          company_url: "https://www.techbiz18.com",
          logo_path: "Techbiz18.png",
          duration: "July 2019 - Feb 2020",
          location: "Bangalore, Karnataka",
          description:
            "I had worked as Web Designer on front End Development. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer - Intern",
          company: "The Red Raccoon Studios",
          company_url: "https://theredraccoonstudios.com",
          logo_path: "Theredraccoonstudios.png",
          duration: "Jan 2021 - June 2021",
          location: "Remotely",
          description: "Fulfills all the requirements of the user.",
          color: "#0879bf",
        },
        {
          title: "Graduate Rotational Internship Program",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org",
          logo_path: "thesparksfoundation.png",
          duration: "March 2021",
          location: "Remotely",
          description:
            "Evaluating code to ensure it meets industry standards and compatible with all browsers, devices and operating systems.",
          color: "#0879bf",
        },
        {
          title: "Web Developer - Intern",
          company: "Yellow-Sponge Productions",
          company_url: "http://www.yellowspongeproductions.com",
          logo_path: "Yellowspongeproductions.png",
          duration: "Sep 2020",
          location: "Remotely",
          description:
            "The requirement of the role was to help re-design the existing dormant website - yellowspongeproductions.com and offer creative input to enhance and execute a better User lnterface.",
          color: "#0879bf",
        },
        {
          title: "Software Developer Intern",
          company: "Kramah Software India Pvt. Ltd",
          company_url: "https://www.kramah.com",
          logo_path: "Kramah.png",
          duration: "Jan 2019 - Feb 2019",
          location: "Bangalore, Karnataka",
          description:
            "Using technology as a learning resource, managing the activities of the institution in a technology -enabled way will ensure effective institutional functioning.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Software Development projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Developer.svg",
    description:
      "As a natural born go-getter, my passion has continuously driven me to expand my knowledge, experience, and relationships.",
  },
  blogSection: {
    title: "Quote",
    subtitle: "Today A Reader, Tomorrow A Leader..!🚩",
    link: "tel:08277748667",
    avatar_image_path: "Quote.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bangalore, Karnataka, India",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/q4adnSfoQ1f8USbp8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8277748667 / +91 9986689606",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
