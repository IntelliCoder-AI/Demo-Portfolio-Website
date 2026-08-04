import { Testimonial } from '@/types/testimonial';

// This data can be replaced with API calls
export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "Engineering Manager",
    company: "TechNova Solutions",
    avatar: "/images/testimonials/sarah.webp",
    content: "Radhe is an exceptional engineer who consistently delivers high-quality code. His expertise in Python and AWS has been instrumental in scaling our backend architecture. He's also a fantastic mentor to the junior developers on the team.",
    rating: 5
  },
  {
    id: "2",
    name: "David Chen",
    role: "Lead Product Manager",
    company: "CloudScale Inc.",
    avatar: "/images/testimonials/david.webp",
    content: "Working with Radhe was a pleasure. He has a unique ability to translate complex product requirements into robust technical solutions. His work on the FastAPI microservices significantly improved our platform's performance and reliability.",
    rating: 5
  },
  {
    id: "3",
    name: "Priya Sharma",
    role: "Senior Frontend Developer",
    company: "WebCraft Studio",
    avatar: "/images/testimonials/priya.webp",
    content: "Radhe is a truly versatile full-stack developer. His deep understanding of React and Next.js made integrating the frontend with his backend APIs seamless. He always writes clean, well-documented code and is a great team player.",
    rating: 5
  }
];
