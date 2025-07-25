"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { SocialIcon } from 'react-social-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Get In <span className="bg-gradient-to-r from-red-500 to-gray-900 dark:from-red-400 dark:to-gray-100 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Ready to start your project or have questions about tutoring? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Send a Message</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {success && (
                  <div className="mb-4 p-3 rounded bg-green-100 text-green-800 text-center font-semibold border border-green-300 animate-fade-in">
                    Thank you! Your message has been sent.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What&apos;s this about?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or tutoring needs..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8 mt-8 lg:mt-0">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-2">Mehedi Hasan Shad</h2>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">Let&apos;s Connect</h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
                  Whether you need design work or academic support, I&apos;m here to help you achieve your goals.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">mhsshad143@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">+8801522102652</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Mirpur 12, Cantonment, Pallabi, Dhaka 1216, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Response Time</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm md:text-base">Follow Me</h3>
                <div className="flex space-x-3 md:space-x-4">
                  <SocialIcon url="https://www.linkedin.com/in/mehedi-hasan-shad-b3463b254/" target="_blank" style={{ height: 40, width: 40 }} />
                  <SocialIcon url="https://www.behance.net/mobasherhossain143" target="_blank" style={{ height: 40, width: 40 }} />
                  <SocialIcon url="https://instagram.com/mhsshad" target="_blank" style={{ height: 40, width: 40 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}