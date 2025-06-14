
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { FileText, Settings, LogOut, Plus } from 'lucide-react';

const Home = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleCreateResume = () => {
    navigate('/resume-builder');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/57519401-8dfd-48c4-abf1-26304a6c050d.png" 
                alt="BuildMyCV Logo" 
                className="w-10 h-10 mr-3"
              />
              <h1 className="text-2xl font-bold text-gray-900">BuildMyCV</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user.user_metadata?.full_name || user.email}
              </span>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
          <p className="text-gray-600">Create your professional resume with our easy-to-use builder</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Create New Resume Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-dashed border-2 border-gray-300 hover:border-primary" onClick={handleCreateResume}>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-lg">Create New Resume</CardTitle>
              <CardDescription>
                Start building a professional resume with our template
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" onClick={handleCreateResume}>
                <Plus className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Resume Builder Info Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg text-center">Professional Template</CardTitle>
              <CardDescription className="text-center">
                Use our professionally designed template to create your resume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" onClick={handleCreateResume}>
                Start Building
              </Button>
            </CardContent>
          </Card>

          {/* Settings Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-lg text-center">Account Settings</CardTitle>
              <CardDescription className="text-center">
                Manage your profile and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Resumes Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Resumes</h3>
          <div className="bg-white rounded-lg border p-8 text-center">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">No resumes yet</h4>
            <p className="text-gray-600 mb-6">
              Create your first resume to get started on your job search journey
            </p>
            <Button onClick={handleCreateResume}>
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Resume
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
