import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FileText, Brain, FolderOpen, Zap, Upload, BookOpen, Users, Star } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">StudyNotes AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How it Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
            🚀 MVP Launch - Early Access
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Study Materials with <span className="text-emerald-600">AI-Powered</span> Organization
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Stop wasting time organizing scattered documents. StudyNotes AI automatically sorts your files by subject
            and generates comprehensive study notes from any document format.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2">
              <Input placeholder="Enter your email for early access" className="w-80 h-12 text-lg" />
              <Button size="lg" className="h-12 px-8 bg-emerald-600 hover:bg-emerald-700">
                Get Early Access
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>500+ students waitlisted</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>Free during beta</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tired of Chaotic Study Materials?</h2>
            <p className="text-lg text-gray-600">
              You're not alone. Most students struggle with these common problems:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: "Scattered Documents",
                description: "PDFs, DOCs, PPTs, and images spread across different folders and devices",
              },
              {
                icon: FolderOpen,
                title: "Manual Organization",
                description: "Hours spent sorting files by subject instead of actually studying",
              },
              {
                icon: BookOpen,
                title: "Information Overload",
                description: "Difficulty extracting key points from lengthy academic materials",
              },
              {
                icon: Zap,
                title: "Inconsistent Notes",
                description: "No standardized format for notes across different sources and subjects",
              },
            ].map((problem, index) => (
              <Card key={index} className="text-center border-2 hover:border-emerald-200 transition-colors">
                <CardHeader>
                  <problem.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <CardTitle className="text-lg">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{problem.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Your AI Study Assistant</h2>
            <p className="text-lg text-gray-600">
              StudyNotes AI solves all your document organization and note-taking challenges
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Upload,
                title: "Smart Upload & Detection",
                description:
                  "Upload any document format (PDF, DOC, PPT, images) and our AI instantly recognizes the content type and subject matter.",
                color: "text-emerald-600",
              },
              {
                icon: FolderOpen,
                title: "Automatic Organization",
                description:
                  "AI automatically categorizes your documents by subject, creating a clean, organized digital library without any manual work.",
                color: "text-teal-600",
              },
              {
                icon: Brain,
                title: "AI-Generated Study Notes",
                description:
                  "Transform lengthy documents into concise, structured study notes with key concepts, summaries, and important points highlighted.",
                color: "text-cyan-600",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-2 hover:border-emerald-200 transition-all hover:shadow-lg">
                <CardHeader>
                  <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How StudyNotes AI Works</h2>
            <p className="text-lg text-gray-600">Get organized and start studying smarter in just 3 simple steps</p>
          </div>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Upload Your Documents",
                description:
                  "Drag and drop or upload your study materials in any format - PDFs, Word docs, PowerPoints, or even photos of handwritten notes.",
              },
              {
                step: "02",
                title: "AI Organizes Everything",
                description:
                  "Our AI analyzes your content, identifies subjects, and automatically sorts everything into organized folders. No manual categorization needed.",
              },
              {
                step: "03",
                title: "Get Study-Ready Notes",
                description:
                  "Receive AI-generated study notes with key concepts, summaries, and important points extracted from all your materials.",
              },
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Study Routine?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of students who are already studying smarter with AI-powered organization and note generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Input placeholder="Enter your email address" className="w-80 h-12 text-lg text-gray-900" />
            <Button size="lg" variant="secondary" className="h-12 px-8 bg-white text-emerald-600 hover:bg-gray-100">
              Start Free Beta
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-75">Free during beta • No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-emerald-400" />
                <span className="text-lg font-bold">StudyNotes AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered document organization and study note generation for students.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Beta Access
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 StudyNotes AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
