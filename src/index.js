import project1 from "./assets/assets/projects/project-1.png";
import project2 from "./assets/assets/projects/project-2.png";
import project3 from "./assets/assets/projects/project-3.png";
import project4 from "./assets/assets/projects/project-4.png";
import project5 from "./assets/assets/projects/project-5.jpg";
import project6 from "./assets/assets/projects/project-6.png";

export const HERO_CONTENT = `I am a dedicated Computer Science student with a strong passion for full-stack development. Throughout my junior year, I have developed projects both independently and collaboratively, gaining valuable experience in front-end technologies like React, Next.js, Taipy.py as well as back-end technologies such as Node.js and MySQL. I am now seeking an internship to further expand my skills and contribute to innovative projects that enhance user experiences and support business growth.`;

export const ABOUT_TEXT = `I am a passionate developer and junior Computer Science student with experience in both full stack web and app development. I’ve worked with technologies like React, Next.js, Node.js, MySQL, PostgreSQL, MongoDB, and programming languages such as Python, C, C++, Pandas, Matplotlib, Tkinter, and NumPy. I enjoy collaborating on projects and solving complex problems, always seeking new challenges to expand my skills. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Python Course Instructor",
    company: "St Mark Cathedral Kuwait",
    description: `Taught a beginner’s Python course to middle school students and older, using Python in VS Code to demonstrate fundamental coding concepts and structures. I developed and delivered engaging lessons to help students understand basic programming skills.`,
    technologies: ["Python", "Math.py", "Random.py"],
  },
  {
    year: "2018 - 2022",
    role: "Computer Hardeware Technician",
    company: "St Mark Cathedral Kuwait",
    description: `I troubleshoot and repaired hardware components for various systems, replacing faulty parts to ensure efficiency. Additionally, I supported the IT team in maintaining and upgrading equipment used to stream church services and liturgies at the Cathedral. I also collaborated with a small team to work on the Cathedral’s website.`,
    technologies: ["Javascript", "React.js", "Next.js", "HTML", "CSS"],
  },
  
];

export const PROJECTS = [
  {
    title: "BMI Calculator Website",
    image: project1,
    description:
      "A fully functional website that calculates a user's BMI, informs them if they are overweight, and provides personalized calorie intake recommendations to maintain, lose, or gain weight.",
    technologies: ["Python", "Taipy", "Taipy.gui", "Panda"],
  },
  {
    title: "Simon game",
    image: project2,
    description:
      "A game that helps kids memorize patterns and also fun to play with a basic interface making it very easy to naviagte",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Snake Game",
    image: project4,
    description:
      "A game that is widely known and easy to play using the arrow keys and very fun to challenge friends as it count scores",
    technologies: ["Python", "Tkinter.py", "Random.py"],
  },
  {
    title: "Moving Robot",
    image: project5,
    description:
      "Using some hardware and coding an ardunio chip a group project of a train-like robot that follows a wall and takes the dimentions of the room",
    technologies: ["TinkerCAD", "Ardunio Uno", "Ultrasonic sensor"],
  },
  {
    title: "Cathedral's Website",
    image: project6,
    description:
      "A website that was made to serve the church community of around 70000 people by always updating the website with services timings and church news",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
  },
];

export const CONTACT = {
  address: "Tampa, FL 33613 ",
  phoneNo: "+1 (813) 957 7843 ",
  email: "yousefmark16@gmail.com",
};
