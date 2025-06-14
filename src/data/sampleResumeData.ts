
import { ResumeData } from '../components/ResumeTemplate';

export const sampleResumeData: ResumeData = {
  name: "Aditya Kumar Jha",
  contactInfo: {
    email: "2005akjha@gmail.com",
    website: "adityajhaa.co",
    github: "github.com/adityajha2005",
    linkedin: "linkedin.com/in/aditya-jha-654800280/"
  },
  experiences: [
    {
      title: "Full Stack AI Engineer Intern",
      company: "Aiphi AI (Remote, Bangalore)",
      location: "Remote, Bangalore",
      startDate: "Feb 2025",
      endDate: "April 2025",
      responsibilities: [
        "Developing and optimizing AI-powered applications, integrating machine learning models into full-stack systems.",
        "Designing and implementing scalable backend solutions to support AI-driven features.",
        "Collaborating with cross-functional teams to enhance AI solutions for real-world applications.",
        "Assisted in developing and testing machine learning models to analyze data for AI-driven projects across various domains"
      ]
    }
  ],
  skills: {
    languages: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL", "Solidity", "Rust"],
    technologies: ["ReactJS", "Angular", "Next.js", "Node.js", "Nest.js", "Express", "TensorFlow", "Keras", "Scikit-learn", "Flask", "Firebase", "MongoDB", "PostgreSQL", "Jupyter Notebook", "VS Code", "Git", "GitHub", "Anchor", "Solana SDK", "HTML"],
    domains: ["Natural Language Processing (NLP)", "Machine Learning (ML)", "Computer Vision (CV)", "Data Analysis", "Cloud Computing", "Web Development", "Algorithm Development", "Blockchain Development (Solana, Ethereum, Aptos)"]
  },
  projects: [
    {
      name: "Kosu",
      description: [
        "Developed an AI-powered recruitment ecosystem that leverages MOVE AI and Aptos blockchain to ensure efficient, transparent, and decentralized hiring.",
        "Integrated AI-driven assessment models with on-chain verifications to enhance trust, automate evaluations, and streamline candidate selection.",
        "Enables seamless hiring by combining decentralized automation with verifiable, skill-based assessments for an unbiased recruitment experience at KOSU."
      ],
      technologies: ["MOVE AI", "Aptos Blockchain", "TypeScript", "Next.js", "MongoDB", "Express", "Node.js", "Hugging Face"]
    },
    {
      name: "CareInsight",
      description: [
        "Developed an AI-powered Healthcare Platform to streamline health management and deliver smarter, user-friendly solutions.",
        "Key features include AI-powered medical analysis (e.g., X-rays, MRIs), prescription management, mental health quizzes, a health news feed, smart medication reminders, multi-language support (Powered by NLP), and secure authentication with Clerk.",
        "Integrated real-time updates, an interactive health insights dashboard, and curated catalogs for common diseases to enhance user engagement and efficiency. CareInsight."
      ],
      technologies: ["Next.js", "TypeScript", "Firebase", "Python", "NLP (Hugging Face, Cohere API)", "Clerk", "Google Gemini API"],
      links: ["CareInsight"]
    },
    {
      name: "SolanaFlow",
      description: [
        "Developed a developer SDK enabling gasless transactions on Solana dApps using Firebase-authenticated users.",
        "Eliminated the need for SOL or wallet setup by automating wallet creation and abstracting private key management.",
        "Implemented backend-signed transactions, Google/GitHub OAuth via Firebase, and rate limiting for abuse prevention.",
        "Designed for seamless integration—just two lines of code to onboard new users. Available on GitHub and npm."
      ],
      technologies: ["Solana Web3.js", "Firebase", "Node.js", "Express.js", "TypeScript"],
      links: ["GitHub", "npm"]
    },
    {
      name: "VibeCraft",
      description: [
        "Developed an interactive AI-powered sketch-to-image generation platform, allowing users to create sketches and generate matching AI images based on custom prompts.",
        "Features include real-time sketching, AI-generated image rendering, and a seamless user experience.",
        "Garnered 500+ users and 1,000+ sketches created. VibeCraft."
      ],
      technologies: ["Next.js", "TypeScript", "Hugging Face", "Clipdrop API"],
      links: ["VibeCraft"]
    }
  ],
  achievements: [
    {
      title: "Solana Grants",
      description: "Awarded a $2,700 grant for my Solana based project, selected as one of only 126 recipients across India."
    },
    {
      title: "Solana Superteam India Member",
      description: "Selected among the top 250 contributors from India for exceptional contributions to the Solana ecosystem."
    },
    {
      title: "Build with India Hackathon",
      description: "Secured a Top 10 position out of 30,000 participants."
    },
    {
      title: "Mantra Blockchain Hackathon",
      description: "Ranked 2nd and won a prize of 500 dollars."
    },
    {
      title: "Dean's List",
      description: "Named to the Dean's List in the 2nd semester for academic excellence."
    }
  ],
  education: [
    {
      institution: "Manipal University Jaipur",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "Aug 2023 - Jun 2027 (Expected)",
      cgpa: "8.84/10",
      coursework: ["Object-Oriented Programming", "Operating System", "Database", "Machine Learning", "Data Structures and Algorithms", "Computer Organization", "Statistics and Probability"]
    }
  ]
};
</lov-web>

Now I'll update the ResumeBuilder to integrate this new template:

<lov-write file_path="src/components/ResumePreview.tsx">
import React from 'react';
import ResumeTemplate from './ResumeTemplate';
import { ResumeData } from './ResumeTemplate';

interface ResumePreviewProps {
  resumeData: any; // This will be the data from ResumeBuilder
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData }) => {
  // Transform ResumeBuilder data to ResumeTemplate format
  const transformedData: ResumeData = {
    name: resumeData.personalInfo.fullName || 'Your Name',
    contactInfo: {
      email: resumeData.personalInfo.email || '',
      website: resumeData.personalInfo.website || '',
      github: resumeData.personalInfo.linkedin || '', // Using linkedin field for github
      linkedin: resumeData.personalInfo.linkedin || ''
    },
    experiences: resumeData.experiences.map((exp: any) => ({
      title: exp.position,
      company: exp.company,
      location: '', // Not available in current form
      startDate: exp.startDate || '',
      endDate: exp.current ? 'Present' : (exp.endDate || ''),
      responsibilities: exp.description ? [exp.description] : []
    })),
    skills: {
      languages: resumeData.skills.filter((skill: string) => skill.trim()),
      technologies: [], // Split skills into categories if needed
      domains: resumeData.languages.filter((lang: string) => lang.trim())
    },
    projects: [], // Not available in current form
    achievements: [], // Not available in current form
    education: resumeData.education.map((edu: any) => ({
      institution: edu.school,
      degree: `${edu.degree}${edu.field ? ` in ${edu.field}` : ''}`,
      duration: `${edu.startDate || ''} - ${edu.endDate || ''}`,
      cgpa: edu.gpa || undefined,
      coursework: undefined
    }))
  };

  return <ResumeTemplate data={transformedData} showDownloadButton={false} />;
};

export default ResumePreview;
