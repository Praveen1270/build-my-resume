
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Download, Eye, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  website: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

interface ResumeData {
  personalInfo: PersonalInfo;
  objective: string;
  experiences: Experience[];
  education: Education[];
  skills: string[];
  languages: string[];
}

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('personal');
  const [showPreview, setShowPreview] = useState(false);
  
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      website: ''
    },
    objective: '',
    experiences: [],
    education: [],
    skills: [],
    languages: []
  });

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    setResumeData(prev => ({
      ...prev,
      experiences: [...prev.experiences, newExp]
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(exp => exp.id !== id)
    }));
  };

  const updateExperience = (id: string, field: keyof Experience, value: any) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      school: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: ''
    };
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEdu]
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const updateSkill = (index: number, value: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }));
  };

  const removeSkill = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const sections = [
    { id: 'personal', name: 'Personal Information' },
    { id: 'objective', name: 'Objective' },
    { id: 'experience', name: 'Experience' },
    { id: 'education', name: 'Education' },
    { id: 'skills', name: 'Skills' },
    { id: 'languages', name: 'Languages' }
  ];

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={resumeData.personalInfo.fullName}
            onChange={(e) => setResumeData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, fullName: e.target.value }
            }))}
            placeholder="John Doe"
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={resumeData.personalInfo.email}
            onChange={(e) => setResumeData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, email: e.target.value }
            }))}
            placeholder="john@example.com"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            value={resumeData.personalInfo.phone}
            onChange={(e) => setResumeData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, phone: e.target.value }
            }))}
            placeholder="+1 234 567 8900"
          />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            value={resumeData.personalInfo.address}
            onChange={(e) => setResumeData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, address: e.target.value }
            }))}
            placeholder="City, State, Country"
          />
        </div>
        <div>
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            value={resumeData.personalInfo.linkedin}
            onChange={(e) => setResumeData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, linkedin: e.target.value }
            }))}
            placeholder="linkedin.com/in/johndoe"
          />
        </div>
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            value={resumeData.personalInfo.website}
            onChange={(e) => setResumeData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, website: e.target.value }
            }))}
            placeholder="www.johndoe.com"
          />
        </div>
      </div>
    </div>
  );

  const renderObjective = () => (
    <div>
      <Label htmlFor="objective">Career Objective</Label>
      <Textarea
        id="objective"
        value={resumeData.objective}
        onChange={(e) => setResumeData(prev => ({ ...prev, objective: e.target.value }))}
        placeholder="Write a brief summary of your career goals and what you bring to the role..."
        className="min-h-[120px]"
      />
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Work Experience</h3>
        <Button onClick={addExperience} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Experience
        </Button>
      </div>
      
      {resumeData.experiences.map((exp, index) => (
        <Card key={exp.id} className="p-4">
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-medium">Experience {index + 1}</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeExperience(exp.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Company *</Label>
              <Input
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                placeholder="Company Name"
              />
            </div>
            <div>
              <Label>Position *</Label>
              <Input
                value={exp.position}
                onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                placeholder="Job Title"
              />
            </div>
            <div>
              <Label>Start Date</Label>
              <Input
                type="month"
                value={exp.startDate}
                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
              />
            </div>
            <div>
              <Label>End Date</Label>
              <Input
                type="month"
                value={exp.endDate}
                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                disabled={exp.current}
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
              />
              <span>I currently work here</span>
            </label>
          </div>
          
          <div className="mt-4">
            <Label>Job Description</Label>
            <Textarea
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
              placeholder="Describe your responsibilities and achievements..."
              className="min-h-[100px]"
            />
          </div>
        </Card>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Education</h3>
        <Button onClick={addEducation} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Education
        </Button>
      </div>
      
      {resumeData.education.map((edu, index) => (
        <Card key={edu.id} className="p-4">
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-medium">Education {index + 1}</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeEducation(edu.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>School/University *</Label>
              <Input
                value={edu.school}
                onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                placeholder="University Name"
              />
            </div>
            <div>
              <Label>Degree *</Label>
              <Input
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                placeholder="Bachelor's, Master's, etc."
              />
            </div>
            <div>
              <Label>Field of Study</Label>
              <Input
                value={edu.field}
                onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                placeholder="Computer Science, Business, etc."
              />
            </div>
            <div>
              <Label>GPA (Optional)</Label>
              <Input
                value={edu.gpa}
                onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                placeholder="3.8"
              />
            </div>
            <div>
              <Label>Start Date</Label>
              <Input
                type="month"
                value={edu.startDate}
                onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
              />
            </div>
            <div>
              <Label>End Date</Label>
              <Input
                type="month"
                value={edu.endDate}
                onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Skills</h3>
        <Button onClick={addSkill} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Skill
        </Button>
      </div>
      
      <div className="space-y-3">
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="flex gap-2">
            <Input
              value={skill}
              onChange={(e) => updateSkill(index, e.target.value)}
              placeholder="e.g., JavaScript, Python, Project Management"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeSkill(index)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLanguages = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Languages</h3>
        <Button 
          onClick={() => setResumeData(prev => ({ ...prev, languages: [...prev.languages, ''] }))} 
          size="sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Language
        </Button>
      </div>
      
      <div className="space-y-3">
        {resumeData.languages.map((language, index) => (
          <div key={index} className="flex gap-2">
            <Input
              value={language}
              onChange={(e) => setResumeData(prev => ({
                ...prev,
                languages: prev.languages.map((lang, i) => i === index ? e.target.value : lang)
              }))}
              placeholder="e.g., English (Native), Spanish (Fluent)"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setResumeData(prev => ({
                ...prev,
                languages: prev.languages.filter((_, i) => i !== index)
              }))}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'personal': return renderPersonalInfo();
      case 'objective': return renderObjective();
      case 'experience': return renderExperience();
      case 'education': return renderEducation();
      case 'skills': return renderSkills();
      case 'languages': return renderLanguages();
      default: return null;
    }
  };

  if (showPreview) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => setShowPreview(false)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Edit
              </Button>
              <h1 className="text-xl font-semibold">Resume Preview</h1>
            </div>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white shadow-lg rounded-lg p-8 min-h-[800px]">
            {/* Resume Template Preview */}
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center border-b pb-6">
                <h1 className="text-3xl font-bold text-gray-900">{resumeData.personalInfo.fullName || 'Your Name'}</h1>
                <div className="mt-2 text-gray-600 space-y-1">
                  <p>{resumeData.personalInfo.email}</p>
                  <p>{resumeData.personalInfo.phone}</p>
                  {resumeData.personalInfo.address && <p>{resumeData.personalInfo.address}</p>}
                  {resumeData.personalInfo.linkedin && <p>{resumeData.personalInfo.linkedin}</p>}
                  {resumeData.personalInfo.website && <p>{resumeData.personalInfo.website}</p>}
                </div>
              </div>

              {/* Objective */}
              {resumeData.objective && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">OBJECTIVE</h2>
                  <p className="text-gray-700">{resumeData.objective}</p>
                </div>
              )}

              {/* Experience */}
              {resumeData.experiences.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">EXPERIENCE</h2>
                  <div className="space-y-4">
                    {resumeData.experiences.map((exp) => (
                      <div key={exp.id}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                            <p className="text-gray-700">{exp.company}</p>
                          </div>
                          <div className="text-gray-600 text-sm">
                            {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                          </div>
                        </div>
                        {exp.description && (
                          <p className="text-gray-700 mt-2">{exp.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {resumeData.education.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">EDUCATION</h2>
                  <div className="space-y-3">
                    {resumeData.education.map((edu) => (
                      <div key={edu.id} className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                          <p className="text-gray-700">{edu.school}</p>
                          {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {edu.startDate} - {edu.endDate}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {resumeData.skills.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">SKILLS</h2>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.filter(skill => skill.trim()).map((skill, index) => (
                      <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages */}
              {resumeData.languages.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">LANGUAGES</h2>
                  <div className="space-y-1">
                    {resumeData.languages.filter(lang => lang.trim()).map((language, index) => (
                      <p key={index} className="text-gray-700">{language}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Button variant="ghost" onClick={() => navigate('/home')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <Separator orientation="vertical" className="mx-4 h-6" />
              <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={() => setShowPreview(true)}>
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Resume Sections</CardTitle>
                <CardDescription>Complete all sections to build your resume</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                        activeSection === section.id ? 'bg-primary/10 border-r-2 border-primary text-primary' : ''
                      }`}
                    >
                      {section.name}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>{sections.find(s => s.id === activeSection)?.name}</CardTitle>
                <CardDescription>
                  Fill in your information below. All fields marked with * are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {renderSectionContent()}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
