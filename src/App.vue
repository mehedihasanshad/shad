<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { MenuOutlined, HomeOutlined, BookOutlined, FolderOutlined, MailOutlined } from '@ant-design/icons-vue'

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
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav class="container-custom">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <router-link to="/" class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <span class="text-white font-bold text-lg">M</span>
              </div>
              <div class="hidden sm:block">
                <h1 class="text-xl lg:text-2xl font-bold gradient-text">Mehedi Hasan Shadin</h1>
                <p class="text-xs text-gray-500 -mt-1">Designer & Educator</p>
              </div>
            </router-link>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-8">
            <router-link
              v-for="item in menuItems"
              :key="item.key"
              :to="item.key"
              class="relative px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium group"
              :class="{ 'text-primary-600': route.path === item.key }"
            >
              <component :is="item.icon" class="inline-block w-4 h-4 mr-2" />
              {{ item.label }}
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                :class="{ 'scale-x-100': route.path === item.key }"
              ></span>
            </router-link>
          </div>

          <!-- CTA Button -->
          <div class="hidden lg:block">
            <router-link to="/contact" class="btn-primary">
              Get Started
            </router-link>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <MenuOutlined class="w-6 h-6 text-gray-700" />
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
                <h3 class="text-xl font-bold text-white">Mehedi Hasan Shadin</h3>
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
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            &copy; 2025 Mehedi Hasan Shadin. All rights reserved.
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
