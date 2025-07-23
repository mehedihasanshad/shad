<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
        ></div>
        <div
          class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary-200 to-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style="animation-delay: 2s"
        ></div>
        <div
          class="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style="animation-delay: 4s"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <!-- Hero Content -->
          <div
            class="w-full flex flex-col items-center justify-center text-center lg:text-left animate-slide-up"
          >
            <div
              class="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 mb-6 shadow-sm"
            >
              <span class="animate-pulse mr-2">👋</span>
              Hello, I'm available for new projects
            </div>

            <h1
              class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-gray-900"
            >
              <span class="block">Mehedi Hasan</span>
              <span class="block gradient-text">Shad</span>
            </h1>

            <div class="text-xl md:text-2xl text-gray-700 mb-2">
              <span class="font-medium">I'm a </span>
              <span class="font-bold text-primary-600 typing-animation">{{ currentRole }}</span>
            </div>

            <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional visual experiences through innovative logo design and captivating
              motion graphics, while empowering the next generation through personalized mathematics
              and physics education.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button @click="scrollToPortfolio" class="btn-primary group">
                <span>View My Work</span>
                <svg
                  class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
              <button @click="scrollToContact" class="btn-secondary group">
                <span>Get In Touch</span>
                <svg
                  class="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </button>
            </div>

            <!-- Social Media Section -->
            <div class="mt-12 space-y-6">
              <!-- Find Me Here -->
              <div class="text-center lg:text-left">
                <h3 class="text-lg font-semibold text-gray-700 mb-4">Find me here</h3>
                <div class="flex justify-center lg:justify-start space-x-4">
                  <a href="https://facebook.com/mhsshad" target="_blank" class="group">
                    <div class="w-12 h-12 bg-[#1877F2] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="https://instagram.com/mhsshad" target="_blank" class="group">
                    <div class="w-12 h-12 bg-gradient-to-br from-[#E4405F] via-[#F56040] to-[#FFDC80] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/mhsshad" target="_blank" class="group">
                    <div class="w-12 h-12 bg-[#0A66C2] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              <!-- See My Work -->
              <div class="text-center lg:text-left">
                <h3 class="text-lg font-semibold text-gray-700 mb-4">See my work</h3>
                <div class="flex justify-center lg:justify-start space-x-4">
                  <a href="https://behance.net/mhsshad" target="_blank" class="group">
                    <div class="w-12 h-12 bg-[#1769FF] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M0 7.5v9c0 .825.675 1.5 1.5 1.5h21c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5h-21c-.825 0-1.5.675-1.5 1.5zm22.5-1.5c.825 0 1.5.675 1.5 1.5v9c0 .825-.675 1.5-1.5 1.5h-21c-.825 0-1.5-.675-1.5-1.5v-9c0-.825.675-1.5 1.5-1.5h21zm-8.25 3.75c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5zm-6.75 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="https://youtube.com/@mhsshad" target="_blank" class="group">
                    <div class="w-12 h-12 bg-[#FF0000] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="https://dribbble.com/mhsshad" target="_blank" class="group">
                    <div class="w-12 h-12 bg-[#EA4C89] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Hero Visual -->
          <div class="relative animate-fade-in" style="animation-delay: 0.3s">
            <div class="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <!-- 3D Box Container (same design, same size) -->
              <div
                class="relative w-full h-full rounded-3xl shadow-2xl bg-gradient-to-br from-primary-500 to-secondary-500 p-1"
              >
                <!-- White inner box -->
                <div class="w-full h-full rounded-3xl bg-white"></div>
              </div>

              <!-- Photo Container - Head overflowing out of the box -->
              <div class="absolute inset-0 overflow-visible">
                <img
                  src="/shadphoto.jpg"
                  alt="Mehedi Hasan Shad"
                  class="w-full h-[120%] object-cover object-top rounded-3xl shadow-2xl transform -translate-y-16"
                />
              </div>

              <!-- Floating Skill Badges -->
              <div
                class="absolute -top-8 -left-8 bg-white rounded-2xl shadow-lg p-4 animate-float z-10"
              >
                <div class="flex items-center space-x-2">
                  <div
                    class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center"
                  >
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                      ></path>
                    </svg>
                  </div>
                  <span class="text-sm font-semibold text-gray-700">Logo Design</span>
                </div>
              </div>

              <div
                class="absolute -top-8 -right-8 bg-white rounded-2xl shadow-lg p-4 animate-float z-10"
                style="animation-delay: 1s"
              >
                <div class="flex items-center space-x-2">
                  <div
                    class="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center"
                  >
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                      ></path>
                    </svg>
                  </div>
                  <span class="text-sm font-semibold text-gray-700">Motion Graphics</span>
                </div>
              </div>

              <div
                class="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-lg p-4 animate-float z-10"
                style="animation-delay: 2s"
              >
                <div class="flex items-center space-x-2">
                  <div
                    class="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center"
                  >
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span class="text-sm font-semibold text-gray-700">Tutoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
              {{ animatedStats.projects }}+
            </div>
            <div class="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-secondary-600 mb-2">
              {{ animatedStats.students }}+
            </div>
            <div class="text-gray-600 font-medium">Students Taught</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-accent-600 mb-2">
              {{ animatedStats.experience }}+
            </div>
            <div class="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
              {{ animatedStats.satisfaction }}%
            </div>
            <div class="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section-padding bg-gray-50" id="services">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What I Do <span class="gradient-text">Best</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining creative design expertise with educational excellence to deliver outstanding
            results
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Logo Design -->
          <div
            class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Logo Design</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Creating memorable brand identities that tell your story and connect with your
              audience through thoughtful design.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Brand Identity Development
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Logo Variations & Guidelines
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Print & Digital Optimization
              </li>
            </ul>
          </div>

          <!-- Motion Graphics -->
          <div
            class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Motion Graphics</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Bringing designs to life with engaging animations and visual storytelling that
              captivates audiences.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Social Media Animations
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Explainer Videos
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Brand Animations
              </li>
            </ul>
          </div>

          <!-- Academic Tutoring -->
          <div
            class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-gray-100 md:col-span-2 lg:col-span-1"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Academic Tutoring</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Personalized learning experiences in mathematics and physics for academic excellence
              and confidence building.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                High School Mathematics
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Physics Fundamentals
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Exam Preparation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white"
      id="contact"
    >
      <div class="w-full max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Ready to Start Your <span class="text-accent-300">Journey?</span>
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Whether you need stunning visuals for your brand or academic support to excel in your
          studies, I'm here to help you achieve your goals.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            Send Message
          </router-link>
          <router-link
            to="/tuition"
            class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              ></path>
            </svg>
            Learn About Tutoring
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";

const roles = ["Logo Designer", "Motion Graphics Expert", "Academic Tutor", "Visual Storyteller"];
const currentRole = ref(roles[0]);
const roleIndex = ref(0);

const animatedStats = reactive({
  projects: 0,
  students: 0,
  experience: 0,
  satisfaction: 0,
});

const finalStats = {
  projects: 150,
  students: 200,
  experience: 5,
  satisfaction: 98,
};

onMounted(() => {
  // Animate role switching
  setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % roles.length;
    currentRole.value = roles[roleIndex.value];
  }, 3000);

  // Animate stats when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStats();
        observer.unobserve(entry.target);
      }
    });
  });

  // Observe stats section
  const statsSection = document.querySelector(".grid.grid-cols-2.md\\:grid-cols-4");
  if (statsSection) {
    observer.observe(statsSection);
  }
});

const animateStats = () => {
  const duration = 2000;
  const steps = 60;
  const stepDuration = duration / steps;

  let currentStep = 0;
  const interval = setInterval(() => {
    const progress = currentStep / steps;
    const easeOut = 1 - Math.pow(1 - progress, 3);

    animatedStats.projects = Math.floor(finalStats.projects * easeOut);
    animatedStats.students = Math.floor(finalStats.students * easeOut);
    animatedStats.experience = Math.floor(finalStats.experience * easeOut);
    animatedStats.satisfaction = Math.floor(finalStats.satisfaction * easeOut);

    currentStep++;
    if (currentStep > steps) {
      clearInterval(interval);
    }
  }, stepDuration);
};

const scrollToPortfolio = () => {
  const element = document.getElementById("services");
  element?.scrollIntoView({ behavior: "smooth" });
};

const scrollToContact = () => {
  const element = document.getElementById("contact");
  element?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style>
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.typing-animation::after {
  content: "|";
  animation: blink 1s infinite;
  margin-left: 0.5rem;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
