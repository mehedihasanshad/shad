<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { MenuOutlined, HomeOutlined, BookOutlined, FolderOutlined, MailOutlined, BulbOutlined } from '@ant-design/icons-vue'

const router = useRouter()
const route = useRoute()
const mobileMenuOpen = ref(false)
const selectedKeys = computed(() => [route.path])

const menuItems = [
  { key: '/', label: 'Home', icon: HomeOutlined },
  { key: '/tuition', label: 'Tuition', icon: BookOutlined },
  { key: '/portfolio', label: 'Portfolio', icon: FolderOutlined },
  { key: '/contact', label: 'Contact', icon: MailOutlined }
]

const handleMenuClick = (key: string) => {
  router.push(key)
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Dark mode toggle logic
const isDark = ref(false)
const toggleDark = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
onMounted(() => {
  // Set initial dark mode based on system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-black dark:text-primary-100">
    <!-- Navigation Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <nav class="container-custom">
        <div class="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-20 py-2 gap-2 lg:gap-0">
          <div class="flex flex-col lg:flex-row items-center gap-2 lg:gap-6 w-full">
            <!-- Logo and Name -->
            <div class="flex-shrink-0 flex items-center space-x-3">
              <router-link to="/" class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <span class="text-white font-bold text-lg">M</span>
                </div>
                <div class="hidden sm:block text-center">
                  <h1 class="text-lg lg:text-xl font-bold gradient-text">Mehedi Hasan Shad</h1>
                  <p class="text-xs text-gray-500 dark:text-primary-200 -mt-1">Designer & Educator</p>
                </div>
              </router-link>
            </div>
            <!-- Social Media: Find me here -->
            <div class="flex flex-col items-center lg:items-start">
              <span class="text-xs text-gray-700 dark:text-primary-200 mb-1">Find me here:</span>
              <div class="flex space-x-2">
                <a href="https://facebook.com/mhsshad" target="_blank" aria-label="Facebook" class="hover:scale-110 transition-transform">
                  <svg class="w-6 h-6" fill="#1877F3" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                </a>
                <a href="https://instagram.com/mhsshad" target="_blank" aria-label="Instagram" class="hover:scale-110 transition-transform">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="url(#ig-gradient)"/><defs><linearGradient id="ig-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#f58529"/><stop offset=".5" stop-color="#dd2a7b"/><stop offset="1" stop-color="#515bd4"/></linearGradient></defs><path fill="#fff" d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.8A3 3 0 1 1 12 9a3 3 0 0 1 0 6Zm4.95-7.05a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z"/><rect x="2.5" y="2.5" width="19" height="19" rx="4.5" stroke="#fff" stroke-width="1.5"/></svg>
                </a>
                <a href="https://linkedin.com/in/mhsshad" target="_blank" aria-label="LinkedIn" class="hover:scale-110 transition-transform">
                  <svg class="w-6 h-6" fill="#0A66C2" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.369-1.849 3.602 0 4.267 2.369 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452z"/></svg>
                </a>
              </div>
            </div>
            <!-- See my work -->
            <div class="flex flex-col items-center lg:items-start">
              <span class="text-xs text-gray-700 dark:text-primary-200 mb-1 mt-2 lg:mt-0">See my work:</span>
              <div class="flex space-x-2">
                <a href="https://behance.net/mhsshad" target="_blank" aria-label="Behance" class="hover:scale-110 transition-transform">
                  <svg class="w-6 h-6" fill="#1769FF" viewBox="0 0 24 24"><path d="M8.007 10.708s.062-1.309-1.309-1.309c-1.373 0-1.373 1.309-1.373 1.309h2.682zm10.13 1.309c-1.309 0-1.309 1.309-1.309 1.309h2.682s.062-1.309-1.373-1.309zm-10.13 2.618c0 1.309 1.309 1.309 1.309 1.309s1.309 0 1.309-1.309v-1.309H7.698v1.309zm10.13-1.309c0 1.309 1.309 1.309 1.309 1.309s1.309 0 1.309-1.309v-1.309h-2.618v1.309zM12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-3.993 13.927c-2.618 0-2.618-2.618-2.618-2.618s0-2.618 2.618-2.618c2.618 0 2.618 2.618 2.618 2.618s0 2.618-2.618 2.618zm7.986 0c-2.618 0-2.618-2.618-2.618-2.618s0-2.618 2.618-2.618c2.618 0 2.618 2.618 2.618 2.618s0 2.618-2.618 2.618zm-7.986-5.236c-1.309 0-1.309 1.309-1.309 1.309h2.682s.062-1.309-1.373-1.309zm10.13 1.309c-1.309 0-1.309 1.309-1.309 1.309h2.682s.062-1.309-1.373-1.309z"/></svg>
                </a>
                <a href="https://youtube.com/@mhsshad" target="_blank" aria-label="YouTube" class="hover:scale-110 transition-transform">
                  <svg class="w-6 h-6" fill="#FF0000" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.072 0 12 0 12s0 3.928.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.928 24 12 24 12s0-3.928-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://dribbble.com/mhsshad" target="_blank" aria-label="Dribbble" class="hover:scale-110 transition-transform">
                  <svg class="w-6 h-6" fill="#EA4C89" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm6.93 6.36a8.003 8.003 0 0 0-3.11-3.11A7.963 7.963 0 0 1 20 12c0 .32-.02.637-.05.95a13.07 13.07 0 0 0-3.02-.25c-.09-.22-.18-.44-.28-.66a13.07 13.07 0 0 0-2.13-3.13c.13-.02.26-.03.39-.03 1.13 0 2.19.19 3.17.54zm-1.45-1.45a8.003 8.003 0 0 0-3.11-3.11A7.963 7.963 0 0 1 12 4c-.32 0-.637.02-.95.05a13.07 13.07 0 0 0-.25 3.02c.22.09.44.18.66.28a13.07 13.07 0 0 0 3.13 2.13c.02-.13.03-.26.03-.39 0-1.13-.19-2.19-.54-3.17zm-1.45 1.45a8.003 8.003 0 0 0-3.11-3.11A7.963 7.963 0 0 1 12 4c.32 0 .637.02.95.05a13.07 13.07 0 0 0 .25 3.02c-.22.09-.44.18-.66.28a13.07 13.07 0 0 0-2.13 3.13c-.13.02-.26.03-.39.03-1.13 0-2.19-.19-3.17-.54zm-1.45 1.45a8.003 8.003 0 0 0-3.11-3.11A7.963 7.963 0 0 1 4 12c0-.32.02-.637.05-.95a13.07 13.07 0 0 0 3.02.25c.09.22.18.44.28.66a13.07 13.07 0 0 0 2.13 3.13c-.13.02-.26.03-.39.03-1.13 0-2.19-.19-3.17-.54zm1.45 1.45a8.003 8.003 0 0 0 3.11 3.11A7.963 7.963 0 0 1 12 20c.32 0 .637-.02.95-.05a13.07 13.07 0 0 0 .25-3.02c-.22-.09-.44-.18-.66-.28a13.07 13.07 0 0 0-3.13-2.13c-.02.13-.03.26-.03.39 0 1.13.19 2.19.54 3.17zm1.45-1.45a8.003 8.003 0 0 0 3.11 3.11A7.963 7.963 0 0 1 12 20c-.32 0-.637-.02-.95-.05a13.07 13.07 0 0 0-.25-3.02c.22-.09.44-.18.66-.28a13.07 13.07 0 0 0-2.13-3.13c.13-.02.26-.03.39-.03 1.13 0 2.19.19 3.17.54zm1.45-1.45a8.003 8.003 0 0 0 3.11-3.11A7.963 7.963 0 0 1 20 12c0 .32-.02.637-.05.95a13.07 13.07 0 0 0-3.02-.25c-.09-.22-.18-.44-.28-.66a13.07 13.07 0 0 0-2.13-3.13c.13-.02.26-.03.39-.03 1.13 0 2.19.19 3.17.54z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-8">
            <router-link
              v-for="item in menuItems"
              :key="item.key"
              :to="item.key"
              class="relative px-4 py-2 text-gray-700 dark:text-primary-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-medium group"
              :class="{ 'text-primary-600 dark:text-primary-400': route.path === item.key }"
            >
              <component :is="item.icon" class="inline-block w-4 h-4 mr-2" />
              {{ item.label }}
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                :class="{ 'scale-x-100': route.path === item.key }"
              ></span>
            </router-link>
          </div>

          <!-- CTA Button & Dark Toggle -->
          <div class="flex items-center space-x-2">
            <router-link to="/contact" class="btn-primary hidden lg:block">
              Get Started
            </router-link>
            <button @click="toggleDark" :aria-pressed="isDark" aria-label="Toggle dark mode" class="ml-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
              <BulbOutlined v-if="!isDark" class="text-xl text-gray-700" />
              <BulbOutlined v-else class="text-xl text-primary-500" />
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <MenuOutlined class="w-6 h-6 text-gray-700 dark:text-primary-100" />
          </button>
        </div>
      </nav>

      <!-- Mobile Navigation Menu -->
      <div 
        v-show="mobileMenuOpen"
        class="lg:hidden bg-white border-t border-gray-100 shadow-lg"
      >
        <div class="container-custom py-4">
          <div class="flex flex-col space-y-2">
            <router-link
              v-for="item in menuItems"
              :key="item.key"
              :to="item.key"
              @click="handleMenuClick(item.key)"
              class="flex items-center px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium"
              :class="{ 'text-primary-600 bg-primary-50': route.path === item.key }"
            >
              <component :is="item.icon" class="w-5 h-5 mr-3" />
              {{ item.label }}
            </router-link>
            <div class="pt-4 border-t border-gray-100">
              <router-link to="/contact" class="btn-primary w-full text-center block">
                Get Started
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="pt-16 lg:pt-20">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <div class="container-custom py-12 lg:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Brand Section -->
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <span class="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Mehedi Hasan Shad</h3>
                <p class="text-gray-400 text-sm">Designer & Educator</p>
              </div>
            </div>
            <p class="text-gray-300 mb-6 max-w-md">
              Creating exceptional visual experiences through logo design and motion graphics, 
              while empowering students through personalized education.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span class="text-sm font-semibold">Li</span>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span class="text-sm font-semibold">Gh</span>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span class="text-sm font-semibold">Be</span>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span class="text-sm font-semibold">Ig</span>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><router-link to="/" class="text-gray-300 hover:text-white transition-colors duration-200">Home</router-link></li>
              <li><router-link to="/portfolio" class="text-gray-300 hover:text-white transition-colors duration-200">Portfolio</router-link></li>
              <li><router-link to="/tuition" class="text-gray-300 hover:text-white transition-colors duration-200">Tuition</router-link></li>
              <li><router-link to="/contact" class="text-gray-300 hover:text-white transition-colors duration-200">Contact</router-link></li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Services</h4>
            <ul class="space-y-2">
              <li><span class="text-gray-300">Logo Design</span></li>
              <li><span class="text-gray-300">Motion Graphics</span></li>
              <li><span class="text-gray-300">Brand Identity</span></li>
              <li><span class="text-gray-300">Academic Tutoring</span></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center text-center gap-4">
          <p class="text-gray-400 text-sm">
            &copy; 2025 Mehedi Hasan Shad. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
