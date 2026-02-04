import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";

export const myContent = "Experienced Software Engineer specializing in full-stack web development with a strong focus on React, Next.js, Node.js, and MongoDB. Proven record of delivering high-impact web applications, optimizing performance, and integrating advanced technologies like AWS and Stripe.";

export const aboutMe = `
Hi, I'm Harshitha Karnati, a Software Engineer with a year of experience in full-stack development. 
I specialize in React, Next.js, Node.js, and MongoDB, creating high-impact web applications with a focus on performance optimization and seamless integration of advanced technologies like AWS and Stripe.

I hold a Master’s in Information Technology from North Carolina A&T State University and a Bachelor’s in Electronics and Communication Engineering from VNR Vignana Jyothi Institute of Engineering & Technology. 
My professional experience includes developing responsive web applications, optimizing performance, and conducting research on privacy-preserving techniques for medical data.

I excel in collaborative environments, demonstrate strong problem-solving skills, and have a proactive approach to continuous learning and skill development.
`;

export const experience = [{
        year: "August 2024- April 2025",
        role: "Software Engineer",
        organization: "Hoosier Community Network",
        description: `
        Led the development of the DWIG Talent Matcher using React, Node.js, Express.js, and MongoDB. Designed RESTful
APIs, optimizing system efficiency by 15% and integrating Redux for state management. Deployed CI/CD pipelines using Jenkins and GitLab CI, automating builds, tests, and deployments, which reduced
release cycles by 50% and improved deployment accuracy. Collaborated with cross-functional teams, including designers, project managers, and data analysts, to align project
objectives and streamline agile feature rollouts, while implementing event-driven architecture for asynchronous service
communication, enhancing scalability and responsiveness in high-throughput scenarios. Contributed to sprint planning, user story refinement, and technical debt management, helping the team adhere to agile
practices and ensuring timely delivery of project milestones.`,
        technologies: [
            "JavaScript",
            "React",
            "Tailwind CSS",
            "ExpressJS",
            "Node.js",
            "MongoDB",
        ],
    }, {
        year: "May 2023- May 2024",
        role: "Graduate Research Assistant",
        organization: "North Carolina A&T State University",
        description: `
        Analyzed large-scale medical datasets using neural networks, focusing on privacy-preserving techniques like R-DP, and
provided insights on privacy-accuracy trade-offs to develop secure, compliant solutions for medical data sharing in
collaboration with faculty and peers.
        `,
        technologies: ["Python", "TensorFlow", "PyTorch", "Opacus", "NumPy"],
    },

]

export const projectsList = [{
        title: "E-Commerce Platform",
        image: project4,
        description: `
        Built a scalable multi-vendor e-commerce platform using the MERN stack and Tailwind CSS, featuring JWT-based
authentication, real-time chat with Socket.io, Stripe payment integration, and role-specific dashboards.
Setup RESTful APIs, middleware for protected routes, stock management, Cloudinary-based image uploads, and
admin-to-vendor payment transfers while ensuring responsive design and optimal performance.
        `,
        technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS"],
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
    address: "Hyderabad, Telangana",
    phoneNo: "+91 93814xxxxx ",
    email: "harshithareddi14@gmail.com",
}