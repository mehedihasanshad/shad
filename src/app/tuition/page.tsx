import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Award, BookOpen, Calculator } from "lucide-react";

const subjects = [
  {
    icon: Calculator,
    title: "Mathematics",
    description: "Comprehensive math tutoring from basic algebra to advanced calculus",
    topics: ["Algebra", "Geometry", "Trigonometry", "Calculus", "Statistics"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: BookOpen,
    title: "Physics",
    description: "Understanding physics concepts through practical examples and problem-solving",
    topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"],
    color: "from-purple-500 to-purple-600",
  },
];

const features = [
  {
    icon: Users,
    title: "Personalized Learning",
    description: "One-on-one sessions tailored to your learning style and pace",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose times that work best for your schedule",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of helping students achieve their academic goals",
  },
];

export default function Tuition() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Academic <span className="bg-gradient-to-r from-red-500 to-gray-900 bg-clip-text text-transparent">Tutoring</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Personalized mathematics and physics education to help you excel in your studies and build confidence in STEM subjects.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Book a Session
          </Button>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subjects I Teach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tutoring in mathematics and physics with focus on understanding concepts and problem-solving techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-500">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{subject.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {subject.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {subject.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-sm">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose My Tutoring?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tutoring Packages
            </h2>
            <p className="text-xl text-gray-600">
              Flexible options to suit your learning needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-200 hover:border-red-500 transition-colors duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Individual Sessions</CardTitle>
                <div className="text-4xl font-bold text-red-600 mt-4">$30<span className="text-lg text-gray-600">/hour</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    One-on-one personalized attention
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Flexible scheduling
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Customized learning materials
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Progress tracking
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white">
                  Book Single Session
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Monthly Package</CardTitle>
                <div className="text-4xl font-bold text-red-600 mt-4">$100<span className="text-lg text-gray-600">/month</span></div>
                <p className="text-sm text-gray-600">4 sessions included</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    4 one-hour sessions per month
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Priority scheduling
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Homework help via email
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Monthly progress reports
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Save $20 per month
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white">
                  Choose Monthly Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-gray-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Excel in Your Studies?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Book your first session today and start your journey towards academic success.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-50">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}