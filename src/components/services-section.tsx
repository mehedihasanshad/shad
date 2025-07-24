import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Palette, Video, BookOpen, Megaphone, Check } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    description:
      "Creating memorable brand identities that tell your story and connect with your audience through thoughtful design.",
    features: [
      "Brand Identity Development",
      "Logo Variations & Guidelines",
      "Print & Digital Optimization",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Video,
    title: "Motion Graphics",
    description:
      "Bringing designs to life with engaging animations and visual storytelling that captivates audiences.",
    features: [
      "Social Media Animations",
      "Explainer Videos",
      "Brand Animations",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: BookOpen,
    title: "Academic Tutoring",
    description:
      "Personalized learning experiences in mathematics and physics for academic excellence and confidence building.",
    features: [
      "High School Mathematics",
      "Physics Fundamentals",
      "Exam Preparation",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Megaphone,
    title: "Digital Media Marketing",
    description:
      "Strategic digital marketing campaigns and social media management to boost your brand's online presence and engagement.",
    features: [
      "Social Media Strategy",
      "Content Marketing",
      "Brand Promotion",
      "Digital Campaigns",
    ],
    color: "from-orange-500 to-orange-600",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What I Do{" "}
            <span className="bg-gradient-to-r from-red-500 to-gray-900 bg-clip-text text-transparent">
              Best
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining creative design expertise with educational excellence to
            deliver outstanding results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border border-gray-100 hover:scale-105"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-600"
                      >
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
