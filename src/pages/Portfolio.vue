<template>
  <div class="portfolio-page">
    <!-- Hero Section -->
    <section class="portfolio-hero">
      <div class="container">
        <h1 class="page-title">Creative Portfolio</h1>
        <p class="page-subtitle">
          Showcasing exceptional logo designs and motion graphics that bring brands to life
        </p>
        <div class="portfolio-filters">
          <a-button 
            v-for="filter in filters" 
            :key="filter.key"
            :type="activeFilter === filter.key ? 'primary' : 'default'"
            @click="setActiveFilter(filter.key)"
            class="filter-btn"
          >
            {{ filter.label }}
          </a-button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="portfolio-grid-section">
      <div class="container">
        <div class="portfolio-grid">
          <div 
            v-for="item in filteredPortfolio" 
            :key="item.id"
            class="portfolio-item"
            :class="item.category"
            @click="openModal(item)"
          >
            <div class="portfolio-image">
              <img :src="item.image" :alt="item.title" />
              <div class="portfolio-overlay">
                <div class="overlay-content">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.category }}</p>
                  <div class="overlay-actions">
                    <a-button type="primary" shape="circle">
                      <EyeOutlined />
                    </a-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-info">
              <h4>{{ item.title }}</h4>
              <span class="portfolio-category">{{ item.category }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills & Tools -->
    <section class="skills-tools-section">
      <div class="container">
        <h2 class="section-title">Skills & Tools</h2>
        <a-row :gutter="[48, 48]">
          <a-col :xs="24" :lg="12">
            <div class="skills-content">
              <h3>Design Skills</h3>
              <div class="skill-categories">
                <div class="skill-category">
                  <h4>Logo Design</h4>
                  <div class="skill-items">
                    <a-tag color="blue">Brand Identity</a-tag>
                    <a-tag color="green">Typography</a-tag>
                    <a-tag color="purple">Color Theory</a-tag>
                    <a-tag color="orange">Minimalism</a-tag>
                  </div>
                </div>
                <div class="skill-category">
                  <h4>Motion Graphics</h4>
                  <div class="skill-items">
                    <a-tag color="red">2D Animation</a-tag>
                    <a-tag color="cyan">Kinetic Typography</a-tag>
                    <a-tag color="gold">Visual Effects</a-tag>
                    <a-tag color="lime">Transitions</a-tag>
                  </div>
                </div>
                <div class="skill-category">
                  <h4>Branding</h4>
                  <div class="skill-items">
                    <a-tag color="magenta">Brand Strategy</a-tag>
                    <a-tag color="volcano">Style Guides</a-tag>
                    <a-tag color="geekblue">Print Design</a-tag>
                    <a-tag color="purple">Digital Assets</a-tag>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :xs="24" :lg="12">
            <div class="tools-content">
              <h3>Professional Tools</h3>
              <div class="tools-grid">
                <div class="tool-item">
                  <div class="tool-icon">
                    <img src="/api/placeholder/60/60" alt="Adobe Illustrator" />
                  </div>
                  <div class="tool-info">
                    <h4>Adobe Illustrator</h4>
                    <div class="tool-rating">
                      <a-progress :percent="95" size="small" />
                    </div>
                  </div>
                </div>
                <div class="tool-item">
                  <div class="tool-icon">
                    <img src="/api/placeholder/60/60" alt="After Effects" />
                  </div>
                  <div class="tool-info">
                    <h4>After Effects</h4>
                    <div class="tool-rating">
                      <a-progress :percent="90" size="small" />
                    </div>
                  </div>
                </div>
                <div class="tool-item">
                  <div class="tool-icon">
                    <img src="/api/placeholder/60/60" alt="Photoshop" />
                  </div>
                  <div class="tool-info">
                    <h4>Adobe Photoshop</h4>
                    <div class="tool-rating">
                      <a-progress :percent="88" size="small" />
                    </div>
                  </div>
                </div>
                <div class="tool-item">
                  <div class="tool-icon">
                    <img src="/api/placeholder/60/60" alt="Figma" />
                  </div>
                  <div class="tool-info">
                    <h4>Figma</h4>
                    <div class="tool-rating">
                      <a-progress :percent="85" size="small" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <h2 class="section-title">My Creative Process</h2>
        <div class="process-timeline">
          <div class="process-step">
            <div class="step-number">01</div>
            <div class="step-content">
              <h3>Discovery & Research</h3>
              <p>Understanding your brand, target audience, and project goals through detailed consultation and market research.</p>
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
    </section>

    <!-- CTA Section -->
    <section class="portfolio-cta-section">
      <div class="container">
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

const activeFilter = ref('all')
const modalVisible = ref(false)
const selectedItem = ref(null)

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

const openModal = (item: any) => {
  selectedItem.value = item
  modalVisible.value = true
}

const downloadPortfolio = () => {
  // Implement portfolio download functionality
  console.log('Downloading portfolio...')
}
</script>