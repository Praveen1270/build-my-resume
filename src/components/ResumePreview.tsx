
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
