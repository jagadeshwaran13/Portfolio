//import project1 from "../assets/projects/project-1.jpg";
import clinical from "../assets/projects/clinical.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Angular.js, as well as back-end technologies like Node.js, MySQL  and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Angular.js, Node.js, MySQL, Express.js, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Sep-2023 - Apr-2024",
    role: "Associate Software Engineer",
    company: "Mphasis",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Angular.js", "mongoDB"],
  },
  {
    year: "Apr-2022 - Oct-2022",
    role: "Project Engineer",
    company: "Wipro",
    description: `I specialized in incident management for production environments, ensuring swift action on change management and migrations. Collaborated closely with backend teams to integrate frontend components with Node.js APIs, ensuring seamless B2B interactions.`,
    technologies: ["ServiceNow", "B2B", "Migration for Change Management"],
  },
];

export const PROJECTS = [
  {
    title: "Clinical Automation System",
    image: clinical,
    description:
      "The clinical automation system simplifies healthcare management by offering dedicated functionalities for pharmacists and front office staff. Pharmacists can efficiently manage medication dispensation and inventory, ensuring patient safety and compliance. Meanwhile, the front office page streamlines patient scheduling, registration, and billing processes, enhancing operational efficiency across healthcare facilities.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Angular"],
  },
  {
    title: "Online Grocery App",
    image: project2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Angular", "React", "Mongo DB", "Node.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Chennai, Tamil Nadu, India ",
  phoneNo: "+91 6383123151 ",
  email: "jagadesh082000@gmail.com",
};
