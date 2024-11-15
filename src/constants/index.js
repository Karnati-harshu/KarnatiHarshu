
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";

export const myContent = "Experienced Senior Software Engineer specializing in full-stack web development with a strong focus on React, Next.js, Node.js, and MongoDB. Proven track record of delivering high-impact web applications, optimizing performance, and integrating advanced technologies like AWS and Stripe.";

export const aboutMe = `
Hi, I'm Harshitha Karnati, a Senior Software Engineer with over 4 years of experience in full-stack development. 
I specialize in React, Next.js, Node.js, and MongoDB, creating high-impact web applications with a focus on performance optimization and seamless integration of advanced technologies like AWS and Stripe.

I hold a Master’s in Information Technology from North Carolina A&T State University and a Bachelor’s in Electronics and Communication Engineering from VNR Vignana Jyothi Institute of Engineering & Technology. 
My professional experience includes developing responsive web applications, optimizing performance, and conducting research on privacy-preserving techniques for medical data.

I excel in collaborative environments, demonstrate strong problem-solving skills, and have a proactive approach to continuous learning and skill development.
`;

export const experience = [
  {
    year: "2024-present",
    role: "Senior Software Engineer",
    organization: "Hoosier Community Network",
    description: `
        Led the full-stack development of the DWIG Talent Matcher using React, Node.js, Express.js, and MongoDB, where I designed RESTful APIs, optimized system efficiency by 15%, and integrated Redux for state management. To support scalability, I implemented a microservices architecture for the backend. Collaborated with a cross-functional team—including designers, project managers, and data analysts—to refine project objectives, ensure smooth feature rollouts, and uphold agile development practices. Tools used in this project included Git, GitHub, Jira, Vercel, and Docker.
        `,
    technologies: [
      "JavaScript",
      "React",
      "Tailwind CSS",
      "ExpressJS",
      "Node.js",
      "MongoDB",
      ],
  },{
    year: "2023-2024",
    role: "Graduate Research Assistant",
    organization: "North Carolina A&T State University",
    description: `
        Conducted research on privacy-preserving techniques for medical data, focusing on Renyi Differential Privacy (RDP).
        Performed experimentation with Python, TensorFlow, and PyTorch, demonstrating improved privacy with RDP.
        Submitted a research paper to the AIIOT 2024 conference, currently under review.
        `,
    technologies: ["Python", "TensorFlow", "PyTorch", "Opacus", "NumPy"],
  },
  {
    year: "2020-2022",
    role: "Junior Web Developer",
    organization: "Intense Technologies",
    description: `
        Developed and maintained web applications using React, Next.js, and TypeScript.
        Created over 50 RESTful APIs with ExpressJS, Node.js, and MongoDB.
        Collaborated with cross-functional teams to deliver high-quality products.
        Optimized application performance, improving response times by 20%.
        `,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "ExpressJS",
      "Node.js",
      "MongoDB",
      "AWS",
    ],
  },
]

export const projectsList = [
  {
    title: "E-Commerce Platform",
    image: project4,
    description: `
        Created an e-commerce website using Next.js, Redux, Stripe API, and MongoDB. 
        Features product listings, a shopping cart, secure checkout process, and payment integration for seamless online shopping.
        `,
    technologies: ["Next.js", "Redux", "Stripe API", "MongoDB"],
  },

  {
    title: "Portfolio",
    image: project5,
    description: `
            Developed a personal portfolio to showcase projects and skills using React and Framer Motion. 
            Features an interactive interface, responsive design, and integration with a content management system for easy updates.
            `,
    technologies: ["React", "CSS", "Framer Motion"],
  },
]

export const contact = {
    address: "6525 Providence Farm ln, Charlotte, NC 28277 ",
    phoneNo: "+1 (704)641-7810 ",
    email: "harshithareddi14@gmail.com",
}