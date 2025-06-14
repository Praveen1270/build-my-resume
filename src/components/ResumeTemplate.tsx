
import React from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export interface ContactInfo {
  email: string;
  website: string;
  github: string;
  linkedin: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Skills {
  languages: string[];
  technologies: string[];
  domains: string[];
}

export interface Project {
  name: string;
  description: string[];
  technologies: string[];
  links?: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  cgpa?: string;
  coursework?: string[];
}

export interface ResumeData {
  name: string;
  contactInfo: ContactInfo;
  experiences: Experience[];
  skills: Skills;
  projects: Project[];
  achievements: Achievement[];
  education: Education[];
}

interface ResumeTemplateProps {
  data: ResumeData;
  showDownloadButton?: boolean;
}

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({ data, showDownloadButton = true }) => {
  const downloadPDF = async () => {
    const element = document.getElementById('resume-template');
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
    });

    const imgData = canvas.getDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${data.name.replace(/\s+/g, '_')}_Resume.pdf`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white">
      {showDownloadButton && (
        <div className="mb-4 text-center">
          <button
            onClick={downloadPDF}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Download PDF
          </button>
        </div>
      )}
      
      <div
        id="resume-template"
        className="bg-white p-8 shadow-lg"
        style={{ fontFamily: 'Georgia, Times, serif', fontSize: '14px', lineHeight: '1.4' }}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#2c3e50' }}>
            {data.name}
          </h1>
          <div className="text-sm" style={{ color: '#34495e' }}>
            <span>✉ {data.contactInfo.email}</span>
            <span className="mx-2">|</span>
            <span>🌐 {data.contactInfo.website}</span>
            <br />
            <span>🔗 {data.contactInfo.github}</span>
            <span className="mx-2">|</span>
            <span>💼 {data.contactInfo.linkedin}</span>
          </div>
        </div>

        {/* Roles and Responsibilities */}
        {data.experiences.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-400 pb-1">
              Roles and Responsibilities
            </h2>
            {data.experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold">{exp.title}</h3>
                    <p className="italic text-sm">{exp.company}</p>
                  </div>
                  <div className="text-sm italic">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-400 pb-1">
            Skills
          </h2>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-bold">Languages: </span>
              <span>{data.skills.languages.join(', ')}</span>
            </div>
            <div>
              <span className="font-bold">Technologies & Tools: </span>
              <span>{data.skills.technologies.join(', ')}</span>
            </div>
            <div>
              <span className="font-bold">Domains & Expertise: </span>
              <span>{data.skills.domains.join(', ')}</span>
            </div>
          </div>
        </section>

        {/* Project Work */}
        {data.projects.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-400 pb-1">
              Project Work
            </h2>
            {data.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold text-sm mb-1">
                  {project.name}:
                  {project.links && project.links.map((link, i) => (
                    <span key={i}>
                      {' '}
                      <span className="text-blue-600 underline font-normal">{link}</span>
                    </span>
                  ))}
                </h3>
                <ul className="list-disc list-inside text-sm space-y-1 mb-2">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                {project.technologies.length > 0 && (
                  <p className="text-sm">
                    <span className="font-bold">Technologies Used: </span>
                    <span>{project.technologies.join(', ')}</span>
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Achievements */}
        {data.achievements.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-400 pb-1">
              Achievements
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              {data.achievements.map((achievement, index) => (
                <li key={index}>
                  <span className="font-bold">{achievement.title}: </span>
                  <span>{achievement.description}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-400 pb-1">
              Education
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm">{edu.institution}</h3>
                    <p className="text-sm">{edu.degree}</p>
                    {edu.cgpa && (
                      <p className="text-sm">CGPA: {edu.cgpa}</p>
                    )}
                    {edu.coursework && edu.coursework.length > 0 && (
                      <p className="text-sm">
                        <span className="font-bold">Relevant Coursework: </span>
                        <span>{edu.coursework.join(', ')}</span>
                      </p>
                    )}
                  </div>
                  <div className="text-sm italic">
                    {edu.duration}
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default ResumeTemplate;
