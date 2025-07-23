<template>
  <div class="portfolio-page">
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32 bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 text-white overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-white/10 to-white/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div class="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-yellow-200/20 to-pink-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style="animation-delay: 2s;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Creative <span class="text-yellow-300">Portfolio</span>
          </h1>
          <p class="text-xl text-purple-100 mb-12 leading-relaxed">
            Showcasing exceptional logo designs and motion graphics that bring brands to life through innovative visual storytelling
          </p>
          
          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-4">
            <button
              v-for="filter in filters"
              :key="filter.key"
              @click="setActiveFilter(filter.key)"
              :class="[
                'px-6 py-3 rounded-full font-semibold transition-all duration-300',
                activeFilter === filter.key
                  ? 'bg-white text-purple-600 shadow-lg transform scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              ]"
            >
              {{ filter.label }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="item in filteredPortfolio"
            :key="item.id"
            @click="openModal(item)"
            class="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
          >
            <!-- Portfolio Image -->
            <div class="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <div :class="[
                    'w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg',
                    item.iconBg
                  ]">
                    <component :is="item.icon" class="w-8 h-8 text-white" />
                  </div>
                  <p class="text-gray-500 font-medium">{{ item.title }}</p>
                </div>
              </div>
              
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-semibold text-lg">{{ item.title }}</h3>
                      <p class="text-sm opacity-90">{{ item.category }}</p>
                    </div>
                    <div class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Portfolio Info -->
            <div class="p-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-2">{{ item.title }}</h4>
              <p class="text-gray-600 mb-4 leading-relaxed">{{ item.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="px-3 py-1 bg-purple-50 text-purple-600 text-sm font-medium rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills & Tools Section -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & <span class="text-purple-600">Tools</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional expertise backed by industry-leading tools and years of experience
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Design Skills -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-8">Design Expertise</h3>
            <div class="space-y-8">
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 class="text-lg font-semibold text-gray-900 mb-4">Logo Design</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Brand Identity</span>
                  <span class="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Typography</span>
                  <span class="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">Color Theory</span>
                  <span class="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">Minimalism</span>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 class="text-lg font-semibold text-gray-900 mb-4">Motion Graphics</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">2D Animation</span>
                  <span class="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full">Kinetic Typography</span>
                  <span class="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full">Visual Effects</span>
                  <span class="px-3 py-1 bg-lime-100 text-lime-700 text-sm font-medium rounded-full">Transitions</span>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 class="text-lg font-semibold text-gray-900 mb-4">Brand Identity</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-pink-100 text-pink-700 text-sm font-medium rounded-full">Brand Strategy</span>
                  <span class="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">Style Guides</span>
                  <span class="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full">Print Design</span>
                  <span class="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">Digital Assets</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Professional Tools -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-8">Professional Tools</h3>
            <div class="space-y-6">
              <div class="flex items-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-white font-bold text-lg">Ai</span>
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Adobe Illustrator</h4>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style="width: 95%"></div>
                  </div>
                  <span class="text-sm text-gray-500 mt-1 block">Expert Level - 95%</span>
                </div>
              </div>

              <div class="flex items-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-white font-bold text-lg">Ae</span>
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">After Effects</h4>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gradient-to-r from-pink-500 to-red-500 h-2 rounded-full" style="width: 90%"></div>
                  </div>
                  <span class="text-sm text-gray-500 mt-1 block">Advanced Level - 90%</span>
                </div>
              </div>

              <div class="flex items-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-white font-bold text-lg">Ps</span>
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Adobe Photoshop</h4>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style="width: 88%"></div>
                  </div>
                  <span class="text-sm text-gray-500 mt-1 block">Advanced Level - 88%</span>
                </div>
              </div>

              <div class="flex items-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-white font-bold text-lg">F</span>
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Figma</h4>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style="width: 85%"></div>
                  </div>
                  <span class="text-sm text-gray-500 mt-1 block">Proficient Level - 85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Let's Create Something <span class="text-yellow-300">Amazing</span>
        </h2>
        <p class="text-xl text-purple-100 mb-8 leading-relaxed">
          Ready to elevate your brand with exceptional design? Let's discuss your project and bring your vision to life.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            Start Your Project
          </router-link>
          <button @click="downloadPortfolio" class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download Portfolio
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Modal -->
    <div v-if="modalVisible" class="fixed inset-0 z-50 overflow-y-auto" @click="closeModal">
      <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
        
        <div class="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-3xl" @click.stop>
          <div class="flex justify-between items-start mb-6">
            <div>
              <h3 class="text-2xl font-bold text-gray-900">{{ selectedItem?.title }}</h3>
              <p class="text-purple-600 font-medium">{{ selectedItem?.category }}</p>
            </div>
            <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
              <div class="text-center">
                <div :class="[
                  'w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg',
                  selectedItem?.iconBg
                ]">
                  <component :is="selectedItem?.icon" class="w-8 h-8 text-white" />
                </div>
                <p class="text-gray-500 font-medium">{{ selectedItem?.title }}</p>
              </div>
            </div>
            
            <div>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ selectedItem?.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in selectedItem?.tags"
                  :key="tag"
                  class="px-3 py-1 bg-purple-50 text-purple-600 text-sm font-medium rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface PortfolioItem {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  icon: any
  iconBg: string
}

const activeFilter = ref('all')
const modalVisible = ref(false)
const selectedItem = ref<PortfolioItem | null>(null)

const filters = [
  { key: 'all', label: 'All Work' },
  { key: 'logo', label: 'Logo Design' },
  { key: 'motion', label: 'Motion Graphics' },
  { key: 'branding', label: 'Brand Identity' }
]

// Define icons as components
const LogoIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path></svg>`
}

const MotionIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>`
}

const BrandIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>`
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'TechStart Logo',
    category: 'logo',
    description: 'Modern logo design for a technology startup, focusing on innovation and growth with clean geometric shapes.',
    tags: ['Logo Design', 'Technology', 'Minimalist'],
    icon: LogoIcon,
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Brand Animation',
    category: 'motion',
    description: 'Engaging brand animation for social media marketing campaigns with smooth transitions and eye-catching effects.',
    tags: ['Motion Graphics', 'Animation', 'Social Media'],
    icon: MotionIcon,
    iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600'
  },
  {
    id: 3,
    title: 'Restaurant Identity',
    category: 'branding',
    description: 'Complete brand identity package for a premium restaurant chain including logo, colors, and typography.',
    tags: ['Branding', 'Restaurant', 'Identity'],
    icon: BrandIcon,
    iconBg: 'bg-gradient-to-br from-green-500 to-green-600'
  },
  {
    id: 4,
    title: 'App Icon Design',
    category: 'logo',
    description: 'Mobile app icon design with modern aesthetics and clear symbolism for better user recognition.',
    tags: ['Icon Design', 'Mobile App', 'UI'],
    icon: LogoIcon,
    iconBg: 'bg-gradient-to-br from-orange-500 to-orange-600'
  },
  {
    id: 5,
    title: 'Product Explainer',
    category: 'motion',
    description: 'Animated explainer video showcasing product features and benefits through engaging visual storytelling.',
    tags: ['Explainer Video', 'Product Demo', 'Animation'],
    icon: MotionIcon,
    iconBg: 'bg-gradient-to-br from-red-500 to-red-600'
  },
  {
    id: 6,
    title: 'Fashion Brand',
    category: 'branding',
    description: 'Elegant brand identity for a luxury fashion boutique with sophisticated color palette and typography.',
    tags: ['Fashion', 'Luxury', 'Branding'],
    icon: BrandIcon,
    iconBg: 'bg-gradient-to-br from-pink-500 to-pink-600'
  }
]

const filteredPortfolio = computed(() => {
  if (activeFilter.value === 'all') {
    return portfolioItems
  }
  return portfolioItems.filter(item => item.category === activeFilter.value)
})

const setActiveFilter = (filter: string) => {
  activeFilter.value = filter
}

const openModal = (item: PortfolioItem) => {
  selectedItem.value = item
  modalVisible.value = true
}

const closeModal = () => {
  modalVisible.value = false
  selectedItem.value = null
}

const downloadPortfolio = () => {
  console.log('Downloading portfolio...')
}
</script>

<style>
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
</style>