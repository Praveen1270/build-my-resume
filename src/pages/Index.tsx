
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/57519401-8dfd-48c4-abf1-26304a6c050d.png" 
                alt="BuildMyCV Logo" 
                className="w-10 h-10 mr-3"
              />
              <span className="text-2xl font-bold text-gray-900">BuildMyCV</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
            </nav>
            <div className="flex space-x-4">
              <Button variant="ghost" asChild>
                <a href="/auth">Login</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
                ✨ Launch Special — 50% Off ✨
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Stop wasting hours
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              managing <span className="text-blue-600">CV templates</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Build professional, ATS-friendly resumes in minutes. Focus on landing your dream job, 
              not formatting documents. 1-minute setup.
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              Why pay for complex tools?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Traditional CV Builders */}
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600 text-2xl">Traditional CV Builders</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">Pay monthly fees (up to $20)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">Or manually format templates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">Waste hours in design software</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">Can't update details once exported</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">Limited template customization</span>
                  </div>
                </CardContent>
              </Card>

              {/* BuildMyCV */}
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-600 text-2xl">BuildMyCV</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">One-time payment for unlimited resumes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Professional templates ready to use</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">No more design headaches</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Editable resumes to stay current</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">ATS-friendly formats included</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-16">
              Choose Your Plan
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Single Download Plan */}
              <Card className="relative">
                <CardHeader className="text-center">
                  <div className="text-5xl font-bold text-gray-900">₹50</div>
                  <div className="text-gray-600">INR</div>
                  <CardTitle className="text-xl mt-4">Single Download</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>1 Template access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>1 Resume download</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>ATS-friendly format</span>
                  </div>
                  <Button className="w-full mt-6 bg-green-600 hover:bg-green-700" asChild>
                    <a href="/auth">Get Started →</a>
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    <span className="text-red-600 font-medium">No refunds</span> - One-time payment
                  </p>
                </CardContent>
              </Card>

              {/* Unlimited Plan */}
              <Card className="relative border-2 border-green-500">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 text-sm font-medium rounded-full">
                    MOST POPULAR
                  </span>
                </div>
                <CardHeader className="text-center">
                  <div className="text-5xl font-bold text-gray-900">₹200</div>
                  <div className="text-gray-600">INR</div>
                  <CardTitle className="text-xl mt-4">Unlimited Access</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>1 Premium template</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-green-600">Unlimited downloads</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>ATS-friendly formats</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Update anytime</span>
                  </div>
                  <Button className="w-full mt-6 bg-green-600 hover:bg-green-700" asChild>
                    <a href="/auth">Get Unlimited →</a>
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    <span className="text-red-600 font-medium">No refunds</span> - One-time payment
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How do I choose the right template?
                </h3>
                <p className="text-gray-600">
                  Consider your industry, experience level, and personal style when selecting a template. All our templates are ATS-friendly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Is my data secure?
                </h3>
                <p className="text-gray-600">
                  Yes, we use industry-standard security measures to protect your data. Your information is encrypted and stored securely.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Can I update my resume after downloading?
                </h3>
                <p className="text-gray-600">
                  With the Unlimited plan, you can edit and re-download your resume as many times as you need.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  What formats can I download?
                </h3>
                <p className="text-gray-600">
                  You can download your resume in PDF, Word, and plain text formats for maximum compatibility.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/57519401-8dfd-48c4-abf1-26304a6c050d.png" 
                  alt="BuildMyCV Logo" 
                  className="w-8 h-8 mr-2"
                />
                <span className="text-xl font-bold">BuildMyCV</span>
              </div>
              <p className="text-gray-400">
                Build professional resumes that get you hired.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://twitter.com/praveenthotakur" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Follow us on X @praveenthotakur
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BuildMyCV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
