<template>
  <div class="portfolio-page">
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div class="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-secondary-200 to-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style="animation-delay: 2s;"></div>
      </div>

      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Creative <span class="gradient-text">Portfolio</span>
          </h1>
          <p class="text-xl text-gray-700 mb-12 leading-relaxed">
            Showcasing exceptional logo designs and motion graphics that bring brands to life through innovative visual storytelling
          </p>
          
          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-4 mb-16">
            <button
              v-for="filter in filters"
              :key="filter.key"
              @click="setActiveFilter(filter.key)"
              :class="[
                'px-6 py-3 rounded-full font-semibold transition-all duration-300',
                activeFilter === filter.key
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-sm'
              ]"
            >
              {{ filter.label }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="section-padding bg-white">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="item in filteredPortfolio"
            :key="item.id"
            @click="openModal(item)"
            class="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            <!-- Portfolio Image -->
            <div class="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
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
              <p class="text-gray-600 mb-4">{{ item.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="px-3 py-1 bg-primary-50 text-primary-600 text-sm font-medium rounded-full"
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
    <section class="section-padding bg-gray-50">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & <span class="gradient-text">Tools</span>
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
              <div class="bg-white rounded-2xl p-6 shadow-sm">
                <h4 class="text-lg font-semibold text-gray-900 mb-4">Logo Design</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Brand Identity</span>
                  <span class="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Typography</span>
                  <span class="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">Color Theory</span>
                  <span class="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">Minimalism</span>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-6 shadow-sm">
                <h4 class="text-lg font-semibold text-gray-900 mb-4">Motion Graphics</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">2D Animation</span>
                  <span class="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full">Kinetic Typography</span>
                  <span class="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full">Visual Effects</span>
                  <span class="px-3 py-1 bg-lime-100 text-lime-700 text-sm font-medium rounded-full">Transitions</span>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-6 shadow-sm">
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
              <div class="flex items-center bg-white rounded-2xl p-6 shadow-sm">
                <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                  <span class="text-white font-bold text-lg">Ai</span>
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-semibold text-gray-900">Adobe Illustrator</h4>
                  <div class="w-full bg-gray-200 rounded-full h-2 mt-2"></div>
                </div>
              </div>
              <div class="process-step">
                <div class="step-number">02</div>
                <div class="step-content">
                  <h3>Concept Development</h3>
                  <p>Brainstorming creative ideas and developing initial concepts that align with your brand vision and objectives.</p>
                </div>
              </div>
              <div class="process-step">
                <div class="step-number">03</div>
                <div class="step-content">
                  <h3>Design & Creation</h3>
                  <p>Bringing concepts to life with professional design tools, focusing on aesthetics, functionality, and brand consistency.</p>
                </div>
              </div>
              <div class="process-step">
                <div class="step-number">04</div>
                <div class="step-content">
                  <h3>Refinement & Delivery</h3>
                  <p>Incorporating feedback, making revisions, and delivering final assets in all required formats and specifications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="portfolio-cta-section">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div class="cta-content">
          <h2>Let's Create Something Amazing Together</h2>
          <p>Ready to elevate your brand with exceptional design? Let's discuss your project and bring your vision to life.</p>
          <div class="cta-actions">
            <a-button type="primary" size="large" @click="$router.push('/contact')">
              <MessageOutlined /> Start Your Project
            </a-button>
            <a-button size="large" @click="downloadPortfolio">
              <DownloadOutlined /> Download Portfolio
            </a-button>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Modal -->
    <a-modal
      v-model:open="modalVisible"
      :title="selectedItem?.title"
      width="80%"
      :footer="null"
      class="portfolio-modal"
    >
      <div v-if="selectedItem" class="modal-content">
        <div class="modal-image">
          <img :src="selectedItem.image" :alt="selectedItem.title" />
        </div>
        <div class="modal-details">
          <h3>{{ selectedItem.title }}</h3>
          <p class="modal-category">{{ selectedItem.category }}</p>
          <p class="modal-description">{{ selectedItem.description }}</p>
          <div class="modal-tags">
            <a-tag v-for="tag in selectedItem.tags" :key="tag" color="blue">{{ tag }}</a-tag>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  EyeOutlined,
  MessageOutlined,
  DownloadOutlined
} from '@ant-design/icons-vue'

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
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

const portfolioItems = [
  {
    id: 1,
    title: 'TechStart Logo',
    category: 'logo',
    image: '/api/placeholder/400/300',
    description: 'Modern logo design for a technology startup, focusing on innovation and growth.',
    tags: ['Logo Design', 'Technology', 'Minimalist']
  },
  {
    id: 2,
    title: 'Brand Animation',
    category: 'motion',
    image: '/api/placeholder/400/300',
    description: 'Engaging brand animation for social media marketing campaigns.',
    tags: ['Motion Graphics', 'Animation', 'Social Media']
  },
  {
    id: 3,
    title: 'Restaurant Identity',
    category: 'branding',
    image: '/api/placeholder/400/300',
    description: 'Complete brand identity package for a premium restaurant chain.',
    tags: ['Branding', 'Restaurant', 'Identity']
  },
  {
    id: 4,
    title: 'App Icon Design',
    category: 'logo',
    image: '/api/placeholder/400/300',
    description: 'Mobile app icon design with modern aesthetics and clear symbolism.',
    tags: ['Icon Design', 'Mobile App', 'UI']
  },
  {
    id: 5,
    title: 'Product Explainer',
    category: 'motion',
    image: '/api/placeholder/400/300',
    description: 'Animated explainer video showcasing product features and benefits.',
    tags: ['Explainer Video', 'Product Demo', 'Animation']
  },
  {
    id: 6,
    title: 'Fashion Brand',
    category: 'branding',
    image: '/api/placeholder/400/300',
    description: 'Elegant brand identity for a luxury fashion boutique.',
    tags: ['Fashion', 'Luxury', 'Branding']
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

const downloadPortfolio = () => {
  // Implement portfolio download functionality
  console.log('Downloading portfolio...')
}
</script>