import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, BookOpen } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-red-600 via-red-700 to-gray-600 text-white" id="contact">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Ready to Start Your <span className="text-red-300">Journey?</span>
        </h2>
        <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
          Whether you need stunning visuals for your brand or academic support to excel in your
          studies, I&apos;m here to help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-red-100 dark:bg-gray-800 text-red-700 dark:text-red-200 hover:bg-red-200 dark:hover:bg-gray-700 font-semibold shadow-lg hover:scale-105 transition-all duration-300">
              <MessageCircle className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </Link>
          <Link href="/tuition">
            <Button variant="outline" size="lg" className="border-2 border-red-200 dark:border-gray-700 text-red-700 dark:text-red-200 hover:bg-red-50 dark:hover:bg-gray-700 hover:text-red-800 dark:hover:text-red-100 font-semibold transition-all duration-300">
              <BookOpen className="w-5 h-5 mr-2" />
              Learn About Tutoring
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}