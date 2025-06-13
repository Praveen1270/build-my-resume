import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
            </nav>
            <div className="flex space-x-4">
              <Button variant="ghost" asChild>
                <a href="/auth">Login</a>
              </Button>
              <Button asChild>
                <a href="/auth">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build Your Perfect Resume in <span className="text-blue-600">Minutes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Create professional, ATS-friendly resumes that get you noticed. Choose from expertly designed templates and land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="/auth">Start Building Now</a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Templates
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Professionally Designed Templates
                </h3>
                <p className="text-gray-600">
                  Choose from a wide variety of modern and creative resume
                  templates.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Easy-to-Use Resume Builder
                </h3>
                <p className="text-gray-600">
                  Our intuitive drag-and-drop interface makes resume creation a
                  breeze.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  ATS-Friendly Formats
                </h3>
                <p className="text-gray-600">
                  Ensure your resume gets past applicant tracking systems with
                  our optimized formats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Choose a Template
                  </h3>
                  <p className="text-gray-600">
                    Select a resume template that best fits your experience and
                    industry.
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Customize Your Content
                  </h3>
                  <p className="text-gray-600">
                    Fill in your personal information, work experience, and
                    skills.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Download Your Resume
                  </h3>
                  <p className="text-gray-600">
                    Download your resume in various formats, ready to be sent to
                    employers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 italic mb-4">
                  "I was struggling to create a professional resume, but this
                  tool made it so easy! I landed my dream job within weeks."
                </p>
                <p className="text-gray-900 font-semibold">- Jane Smith</p>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 italic mb-4">
                  "The ATS-friendly templates were a game-changer for me. I
                  highly recommend this resume builder to anyone looking for a
                  job."
                </p>
                <p className="text-gray-900 font-semibold">- John Doe</p>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 italic mb-4">
                  "I love how customizable the templates are. I was able to
                  create a resume that truly reflects my skills and experience."
                </p>
                <p className="text-gray-900 font-semibold">- Emily Brown</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Basic
                </h3>
                <p className="text-gray-600 mb-4">
                  Free access to a limited number of templates and features.
                </p>
                <p className="text-gray-900 font-semibold">Free</p>
              </div>
              {/* Premium Plan */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Premium
                </h3>
                <p className="text-gray-600 mb-4">
                  Unlimited access to all templates and features.
                </p>
                <p className="text-gray-900 font-semibold">$9.99/month</p>
              </div>
              {/* Enterprise Plan */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Enterprise
                </h3>
                <p className="text-gray-600 mb-4">
                  Customized solutions for businesses and organizations.
                </p>
                <p className="text-gray-900 font-semibold">Contact Us</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Question 1 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How do I choose the right template?
                </h3>
                <p className="text-gray-600">
                  Consider your industry, experience level, and personal style
                  when selecting a template.
                </p>
              </div>
              {/* Question 2 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Is my data secure?
                </h3>
                <p className="text-gray-600">
                  Yes, we use industry-standard security measures to protect
                  your data.
                </p>
              </div>
              {/* Question 3 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Can I cancel my subscription at any time?
                </h3>
                <p className="text-gray-600">
                  Yes, you can cancel your subscription at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
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
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Templates</a></li>
                <li><a href="#" className="hover:text-white">Resume Builder</a></li>
                <li><a href="#" className="hover:text-white">Cover Letters</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
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
