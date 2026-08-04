import { Experience } from '@/types/experience';

// This data can be replaced with API calls
export const experienceData: Experience[] = [
  {
    id: "1",
    type: "work",
    title: "Senior Software Engineer",
    company: "TechNova Solutions",
    location: "Remote",
    startDate: "2024-01-01T00:00:00Z",
    endDate: "Present",
    description: "Leading the development of cloud-native enterprise applications and mentoring junior engineers.",
    achievements: [
      "Architected and deployed a microservices-based platform on AWS, improving scalability by 300%.",
      "Led the migration from React to Next.js, resulting in a 45% improvement in LCP and SEO scores.",
      "Implemented an internal AI tool using LangChain and OpenAI that reduced support ticket resolution time by 30%.",
      "Mentored a team of 4 junior developers, conducting regular code reviews and pair programming sessions."
    ],
    technologies: ["Next.js", "Python", "AWS", "FastAPI", "PostgreSQL", "Docker"]
  },
  {
    id: "2",
    type: "work",
    title: "Python Developer",
    company: "CloudScale Inc.",
    location: "Bangalore, India",
    startDate: "2022-03-01T00:00:00Z",
    endDate: "2023-12-31T00:00:00Z",
    description: "Developed and maintained highly scalable backend services and APIs.",
    achievements: [
      "Designed and implemented RESTful APIs using FastAPI handling 5M+ requests daily.",
      "Optimized database queries, reducing average response time by 40%.",
      "Built automated CI/CD pipelines using GitHub Actions and AWS CodeDeploy.",
      "Integrated third-party payment gateways (Stripe, PayPal) with 99.99% uptime."
    ],
    technologies: ["Python", "FastAPI", "AWS EC2", "Redis", "PostgreSQL", "GitHub Actions"]
  },
  {
    id: "3",
    type: "work",
    title: "Junior Full-Stack Developer",
    company: "WebCraft Studio",
    location: "Mumbai, India",
    startDate: "2021-06-01T00:00:00Z",
    endDate: "2022-02-28T00:00:00Z",
    description: "Developed responsive web applications for diverse client portfolios.",
    achievements: [
      "Built and launched 5+ full-stack client projects using React and Node.js.",
      "Implemented responsive designs using Tailwind CSS, increasing mobile user engagement by 25%.",
      "Collaborated closely with UI/UX designers to translate Figma mockups into pixel-perfect components.",
      "Wrote comprehensive unit tests using Jest, achieving 80% code coverage across major projects."
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Jest"]
  },
  {
    id: "4",
    type: "education",
    title: "B.Tech in Computer Science",
    company: "National Institute of Technology",
    location: "India",
    startDate: "2017-08-01T00:00:00Z",
    endDate: "2021-05-31T00:00:00Z",
    description: "Comprehensive study in computer science fundamentals, algorithms, and software engineering.",
    achievements: [
      "Graduated with First Class Honors (CGPA: 8.5/10).",
      "Led the college coding club and organized 3 inter-college hackathons.",
      "Developed a smart campus navigation app as the final year project using React Native.",
      "Published a research paper on machine learning applications in predictive maintenance."
    ],
    technologies: ["Data Structures", "Algorithms", "C++", "Python", "Machine Learning"]
  }
];
