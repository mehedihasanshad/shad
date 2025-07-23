import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-gray-900 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Mehedi Hasan Shad</h3>
                <p className="text-gray-400 text-sm">Designer & Educator</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creating exceptional visual experiences through logo design, motion graphics, and digital marketing, while
              empowering students through personalized education.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mehedi-hasan-shad-b3463b254/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-sm font-semibold">Li</span>
              </a>
              <a
                href="https://www.youtube.com/@ShadsVisualGfx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-sm font-semibold">YT</span>
              </a>
              <a
                href="https://www.behance.net/mobasherhossain143"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-sm font-semibold">Be</span>
              </a>
              <a
                href="https://sites.google.com/view/mhs-shad-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-sm font-semibold">Web</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/tuition" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Tuition
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Logo Design</span></li>
              <li><span className="text-gray-300">Motion Graphics</span></li>
              <li><span className="text-gray-300">Digital Marketing</span></li>
              <li><span className="text-gray-300">Academic Tutoring</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center text-center gap-4">
          <p className="text-gray-400 text-sm">&copy; 2025 Mehedi Hasan Shad. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}