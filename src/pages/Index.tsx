
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const handleGetStarted = () => {
    // This will be implemented later with payment integration
    console.log("Get started clicked");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-xl">ResumeBuilder</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
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
            🚀 Stop wasting time on complicated resume formats
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Build your perfect resume in minutes for just{" "}
            <span className="text-emerald-600">₹50</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let your users generate, edit, and download a professional resume — all with one simple link.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
              onClick={handleGetStarted}
            >
              Get Your Resume Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              View Sample
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto" id="features">
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
              <span className="text-sm font-medium">ATS-friendly & professional layout</span>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
              <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm font-medium">Download-ready in PDF format</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why pay a designer for a resume?
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
                  <span className="text-red-700">No instant downloads</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 text-lg">✖</span>
                  <span className="text-red-700">No edits after submission</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 text-lg">✖</span>
                  <span className="text-red-700">Long waiting times</span>
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
                  <span className="text-emerald-700">Instant PDF download</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span className="text-emerald-700">Editable anytime</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span className="text-emerald-700">Professional templates</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Time Saving Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ⏱ Save hours — Build your resume instantly
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get rid of messy Word docs or overpriced design services. 
            Our no-code resume builder gets the job done — clean, fast, and effective.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-muted/30" id="pricing">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            💸 Just ₹50 per resume — One-time payment
          </h2>
          
          <Card className="p-8 mt-8 border-2 border-emerald-200">
            <div className="text-center">
              <div className="mb-6">
                <span className="text-5xl font-bold">₹50</span>
                <span className="text-muted-foreground ml-2">per resume</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Choose from professional templates</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Edit anytime before downloading</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>No hidden charges</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span>Instant PDF download</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg"
                onClick={handleGetStarted}
              >
                Get Your Resume Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                One-time payment, then it's yours forever
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-xl">ResumeBuilder</span>
          </div>
          <p className="text-muted-foreground">
            Build professional resumes in minutes, not hours.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
