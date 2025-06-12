import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Download, Edit } from "lucide-react";

const Index = () => {
  const handleGetStarted = () => {
    // This will be implemented later with payment integration
    console.log("Get started clicked");
  };

  const handleViewSample = () => {
    // Scroll to sample section
    document.getElementById('sample-resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ed398060-ef81-4c8c-85a3-510181b0bf1a.png" 
              alt="ResumeBuilder Logo" 
              className="h-8 w-8"
            />
            <span className="font-bold text-xl">ResumeBuilder</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#sample-resume" className="text-muted-foreground hover:text-foreground transition-colors">
              Sample
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <Button variant="outline" size="sm">
              Login
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
            🚀 Create professional resumes instantly
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Build your perfect resume for just{" "}
            <span className="text-emerald-600">₹50 each</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pay ₹50, create one professional resume, download instantly. No subscriptions, no hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
              onClick={handleGetStarted}
            >
              Create Resume - ₹50
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3" onClick={handleViewSample}>
              View Sample Resume
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
              <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm font-medium">No design skills needed</span>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
              <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm font-medium">ATS-friendly format</span>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
              <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm font-medium">Instant PDF download</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Resume Section */}
      <section className="py-20 px-4 bg-muted/30" id="sample-resume">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            See what your resume will look like
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Resume Preview */}
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Ashish Pratap Singh</h3>
                <div className="text-sm text-gray-600 mt-2">
                  <span>📧 xxx@gmail.com</span> | <span>📱 XXX-XXX-XXX</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span>🔗 github.com/ashishps1</span> | <span>💼 linkedin.com/in/ashishps1</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">Skills</h4>
                  <div className="text-sm text-gray-700">
                    <p><strong>Languages:</strong> C/C++, Java, Python, JavaScript, TypeScript, SQL</p>
                    <p><strong>Technologies:</strong> AWS, React, Node.js, Docker, Kubernetes</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">Work Experience</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-semibold text-gray-900">Adobe, Bangalore</h5>
                          <p className="text-sm text-emerald-600 italic">Computer Scientist</p>
                        </div>
                        <span className="text-sm text-gray-600">Mar 2021 - Present</span>
                      </div>
                      <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                        <li>Led migration of Hive and Presto jobs from Qubole to AWS EMR</li>
                        <li>Reduced operational costs by 80% through automated reporting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">Education</h4>
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-semibold text-gray-900">BITS Hyderabad</h5>
                        <p className="text-sm text-gray-700">B.E. in Computer Science and Engineering</p>
                      </div>
                      <span className="text-sm text-gray-600">Aug 2013 - Jun 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Professional template designed for success</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">ATS-Optimized Format</h4>
                    <p className="text-muted-foreground text-sm">Designed to pass Applicant Tracking Systems used by most companies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Edit className="h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Easy to Customize</h4>
                    <p className="text-muted-foreground text-sm">Simply fill in your information and download instantly</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Download className="h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Instant PDF Download</h4>
                    <p className="text-muted-foreground text-sm">Get your professional resume in seconds, ready to send</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-6"
                onClick={handleGetStarted}
              >
                Create Your Resume Now - ₹50
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why choose our resume builder?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Services */}
            <Card className="p-6 bg-red-50 border-red-200">
              <h3 className="text-xl font-semibold mb-4 text-red-800">Traditional Resume Services</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 text-lg">✖</span>
                  <span className="text-red-700">Pay ₹500–₹1000 per resume</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 text-lg">✖</span>
                  <span className="text-red-700">Wait 2-3 days for delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 text-lg">✖</span>
                  <span className="text-red-700">Limited revision rounds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 text-lg">✖</span>
                  <span className="text-red-700">No guarantee of ATS compatibility</span>
                </div>
              </div>
            </Card>

            {/* Our Service */}
            <Card className="p-6 bg-emerald-50 border-emerald-200">
              <h3 className="text-xl font-semibold mb-4 text-emerald-800">Our Resume Builder</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span className="text-emerald-700">Just ₹50 per resume</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span className="text-emerald-700">Instant download</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span className="text-emerald-700">Edit before final download</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span className="text-emerald-700">ATS-optimized template</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-muted/30" id="pricing">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            💸 ₹50 per resume — Pay as you go
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            No subscriptions, no monthly fees. Pay only when you need a resume.
          </p>
          
          <Card className="p-8 mt-8 border-2 border-emerald-200">
            <div className="text-center">
              <div className="mb-6">
                <span className="text-5xl font-bold">₹50</span>
                <span className="text-muted-foreground ml-2">per resume</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Professional ATS-friendly template</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Edit and preview before download</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Instant PDF download</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>No hidden charges or subscriptions</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg"
                onClick={handleGetStarted}
              >
                Create Resume Now - ₹50
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                <strong>No Refund Policy:</strong> All sales are final. Please review the sample before purchasing.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4" id="faq">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Do I need to create an account?</h3>
                <p className="text-muted-foreground">Yes. You must create an account before making a payment and starting your resume.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">When do I pay?</h3>
                <p className="text-muted-foreground">You need to pay ₹50 before you can create and download your resume.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I get a refund?</h3>
                <p className="text-muted-foreground">No. All payments are final. We do not offer refunds, so please proceed only if you're sure.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What if I face technical issues?</h3>
                <p className="text-muted-foreground">Reach out to our support team. We'll help you solve any technical problems quickly.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">How quickly can I download my resume?</h3>
                <p className="text-muted-foreground">Immediately after payment and filling in your details. The entire process takes less than 5 minutes.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Is the resume format ATS-friendly?</h3>
                <p className="text-muted-foreground">Yes, our template is specifically designed to pass Applicant Tracking Systems (ATS) used by most companies.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">We accept all major credit/debit cards, UPI, net banking, and digital wallets through our secure payment gateway.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Do I pay ₹50 once for unlimited resumes?</h3>
                <p className="text-muted-foreground">No, you pay ₹50 for each individual resume you create and download. Each payment gives you one resume.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="/lovable-uploads/ed398060-ef81-4c8c-85a3-510181b0bf1a.png" 
              alt="ResumeBuilder Logo" 
              className="h-8 w-8"
            />
            <span className="font-bold text-xl">ResumeBuilder</span>
          </div>
          <p className="text-muted-foreground mb-2">
            Build professional resumes in minutes, not hours.
          </p>
          <p className="text-sm text-muted-foreground">
            ₹50 per resume • No subscriptions • No refunds • Instant download
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
