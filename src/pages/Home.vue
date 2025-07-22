<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary-200 to-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style="animation-delay: 2s;"></div>
        <div class="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style="animation-delay: 4s;"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Hero Content -->
          <div class="text-center animate-slide-up">
            <div class="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 mb-6 shadow-sm">
              <span class="animate-pulse mr-2">👋</span>
              Hello, I'm available for new projects
            </div>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span class="block text-gray-900">Mehedi Hasan</span>
              <span class="block gradient-text">Shad</span>
            </h1>
            
            <div class="text-xl md:text-2xl text-gray-600 mb-2">
              <span class="font-medium">I'm a </span>
              <span class="font-bold text-primary-600 typing-animation">{{ currentRole }}</span>
            </div>
            
            <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Crafting exceptional visual experiences through innovative logo design and captivating motion graphics, 
              while empowering the next generation through personalized mathematics and physics education.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button @click="scrollToPortfolio" class="btn-primary group">
                <span>View My Work</span>
                <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
              <button @click="scrollToContact" class="btn-secondary group">
                <span>Get In Touch</span>
                <svg class="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Hero Visual -->
          <div class="relative animate-fade-in" style="animation-delay: 0.3s;">
            <div class="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <!-- Profile Image Container -->
              <div class="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
                <div class="w-full h-full rounded-3xl overflow-hidden">
                  <img 
                    src="/shadphoto.jpg" 
                    alt="Mehedi Hasan Shad" 
                    class="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <!-- Floating Skill Badges -->
              <div class="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-float">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                    </svg>
                  </div>
                  <span class="text-sm font-semibold text-gray-700">Logo Design</span>
                </div>
              </div>

              <div class="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 animate-float" style="animation-delay: 1s;">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                    </svg>
                  </div>
                  <span class="text-sm font-semibold text-gray-700">Motion Graphics</span>
                </div>
              </div>

              <div class="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-float" style="animation-delay: 2s;">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
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
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{{ animatedStats.projects }}+</div>
            <div class="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-secondary-600 mb-2">{{ animatedStats.students }}+</div>
            <div class="text-gray-600 font-medium">Students Taught</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-accent-600 mb-2">{{ animatedStats.experience }}+</div>
            <div class="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{{ animatedStats.satisfaction }}%</div>
            <div class="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section-padding bg-gray-50" id="services">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What I Do <span class="gradient-text">Best</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining creative design expertise with educational excellence to deliver outstanding results
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Logo Design -->
          <div class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-gray-100">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Logo Design</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Creating memorable brand identities that tell your story and connect with your audience through thoughtful design.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Brand Identity Development
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Logo Variations & Guidelines
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Print & Digital Optimization
              </li>
            </ul>
          </div>

          <!-- Motion Graphics -->
          <div class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-gray-100">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Motion Graphics</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Bringing designs to life with engaging animations and visual storytelling that captivates audiences.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Social Media Animations
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Explainer Videos
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Brand Animations
              </li>
            </ul>
          </div>

          <!-- Academic Tutoring -->
          <div class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-gray-100 md:col-span-2 lg:col-span-1">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Academic Tutoring</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Personalized learning experiences in mathematics and physics for academic excellence and confidence building.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                High School Mathematics
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Physics Fundamentals
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Exam Preparation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white" id="contact">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Start Your <span class="text-accent-300">Journey?</span>
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Whether you need stunning visuals for your brand or academic support to excel in your studies, 
          I'm here to help you achieve your goals.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            Send Message
          </router-link>
          <router-link to="/tuition" class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            Learn About Tutoring
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'

const roles = ['Logo Designer', 'Motion Graphics Expert', 'Academic Tutor', 'Visual Storyteller']
const currentRole = ref(roles[0])
const roleIndex = ref(0)

const animatedStats = reactive({
  projects: 0,
  students: 0,
  experience: 0,
  satisfaction: 0
})

const finalStats = {
  projects: 150,
  students: 200,
  experience: 5,
  satisfaction: 98
}

onMounted(() => {
  // Animate role switching
  setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % roles.length
    currentRole.value = roles[roleIndex.value]
  }, 3000)

  // Animate stats when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStats()
        observer.unobserve(entry.target)
      }
    })
  })

  // Observe stats section
  const statsSection = document.querySelector('.grid.grid-cols-2.md\\:grid-cols-4')
  if (statsSection) {
    observer.observe(statsSection)
  }
})

const animateStats = () => {
  const duration = 2000
  const steps = 60
  const stepDuration = duration / steps

  let currentStep = 0
  const interval = setInterval(() => {
    const progress = currentStep / steps
    const easeOut = 1 - Math.pow(1 - progress, 3)

    animatedStats.projects = Math.floor(finalStats.projects * easeOut)
    animatedStats.students = Math.floor(finalStats.students * easeOut)
    animatedStats.experience = Math.floor(finalStats.experience * easeOut)
    animatedStats.satisfaction = Math.floor(finalStats.satisfaction * easeOut)

    currentStep++
    if (currentStep > steps) {
      clearInterval(interval)
    }
  }, stepDuration)
}

const scrollToPortfolio = () => {
  const element = document.getElementById('services')
  element?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToContact = () => {
  const element = document.getElementById('contact')
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.typing-animation {
  position: relative;
}

.typing-animation::after {
  content: '|';
  animation: blink 1s infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>