<template>
  <div class="portfolio">
    <!-- Hero Section -->
    <section class="portfolio-hero">
      <div class="container">
        <h1 class="page-title">My Portfolio</h1>
        <p class="page-subtitle">
          Showcasing creative designs and motion graphics work
        </p>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="portfolio-filter">
      <div class="container">
        <a-tabs v-model:activeKey="activeTab" centered size="large" @change="handleTabChange">
          <a-tab-pane key="all" tab="All Work" />
          <a-tab-pane key="logos" tab="Logo Design" />
          <a-tab-pane key="motion" tab="Motion Graphics" />
          <a-tab-pane key="branding" tab="Brand Identity" />
        </a-tabs>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="portfolio-grid">
      <div class="container">
        <a-row :gutter="[24, 24]">
          <a-col 
            v-for="item in filteredPortfolio" 
            :key="item.id" 
            :xs="24" 
            :sm="12" 
            :md="8" 
            :lg="6"
          >
            <a-card 
              class="portfolio-item" 
              hoverable
              @click="openModal(item)"
            >
              <template #cover>
                <div class="portfolio-image">
                  <div class="image-placeholder">
                    <component :is="item.icon" class="placeholder-icon" />
                    <p>{{ item.title }}</p>
                  </div>
                  <div class="overlay">
                    <EyeOutlined class="view-icon" />
                  </div>
                </div>
              </template>
              <a-card-meta :title="item.title" :description="item.category" />
              <div class="portfolio-tags">
                <a-tag v-for="tag in item.tags" :key="tag" :color="getTagColor(tag)">
                  {{ tag }}
                </a-tag>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </section>

    <!-- Portfolio Modal -->
    <a-modal
      v-model:open="modalVisible"
      :title="selectedItem?.title"
      width="80%"
      :footer="null"
      centered
    >
      <div v-if="selectedItem" class="modal-content">
        <div class="modal-image">
          <div class="large-placeholder">
            <component :is="selectedItem.icon" class="large-icon" />
            <p>{{ selectedItem.title }} - Full View</p>
          </div>
        </div>
        <div class="modal-details">
          <h3>Project Details</h3>
          <p><strong>Category:</strong> {{ selectedItem.category }}</p>
          <p><strong>Description:</strong> {{ selectedItem.description }}</p>
          <p><strong>Tools Used:</strong> {{ selectedItem.tools.join(', ') }}</p>
          <div class="modal-tags">
            <a-tag v-for="tag in selectedItem.tags" :key="tag" :color="getTagColor(tag)">
              {{ tag }}
            </a-tag>
          </div>
        </div>
      </div>
    </a-modal>

    <!-- Skills Section -->
    <section class="portfolio-skills">
      <div class="container">
        <h2 class="section-title">Design Tools & Skills</h2>
        <a-row :gutter="[32, 32]">
          <a-col :xs="24" :md="12">
            <h3>Design Software</h3>
            <div class="skill-grid">
              <div class="skill-item">
                <div class="skill-icon">
                  <DesignOutlined />
                </div>
                <span>Adobe Illustrator</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon">
                  <PictureOutlined />
                </div>
                <span>Adobe Photoshop</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon">
                  <PlayCircleOutlined />
                </div>
                <span>After Effects</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon">
                  <VideoCameraOutlined />
                </div>
                <span>Premiere Pro</span>
              </div>
            </div>
          </a-col>
          <a-col :xs="24" :md="12">
            <h3>Specializations</h3>
            <div class="specialization-list">
              <div class="spec-item">
                <CheckCircleOutlined class="check-icon" />
                <span>Logo Design & Brand Identity</span>
              </div>
              <div class="spec-item">
                <CheckCircleOutlined class="check-icon" />
                <span>Motion Graphics & Animation</span>
              </div>
              <div class="spec-item">
                <CheckCircleOutlined class="check-icon" />
                <span>Social Media Graphics</span>
              </div>
              <div class="spec-item">
                <CheckCircleOutlined class="check-icon" />
                <span>Print Design</span>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  EyeOutlined, 
  DesignOutlined, 
  PictureOutlined, 
  PlayCircleOutlined, 
  VideoCameraOutlined,
  CheckCircleOutlined,
  AppstoreOutlined,
  BgColorsOutlined,
  ThunderboltOutlined
} from '@ant-design/icons-vue'

const activeTab = ref('all')
const modalVisible = ref(false)
const selectedItem = ref(null)

// Portfolio items (placeholder data)
const portfolioItems = [
  {
    id: 1,
    title: 'Tech Startup Logo',
    category: 'Logo Design',
    type: 'logos',
    description: 'Modern logo design for a technology startup focusing on clean lines and innovation.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    tags: ['Logo', 'Branding', 'Tech'],
    icon: DesignOutlined
  },
  {
    id: 2,
    title: 'Product Launch Animation',
    category: 'Motion Graphics',
    type: 'motion',
    description: 'Engaging motion graphics for product launch campaign with smooth transitions.',
    tools: ['After Effects', 'Adobe Illustrator'],
    tags: ['Animation', 'Motion', 'Product'],
    icon: PlayCircleOutlined
  },
  {
    id: 3,
    title: 'Restaurant Brand Identity',
    category: 'Brand Identity',
    type: 'branding',
    description: 'Complete brand identity package including logo, colors, and typography.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    tags: ['Branding', 'Restaurant', 'Identity'],
    icon: BgColorsOutlined
  },
  {
    id: 4,
    title: 'App Icon Design',
    category: 'Logo Design',
    type: 'logos',
    description: 'Mobile app icon design with modern aesthetics and user-friendly approach.',
    tools: ['Adobe Illustrator'],
    tags: ['Icon', 'Mobile', 'App'],
    icon: AppstoreOutlined
  },
  {
    id: 5,
    title: 'Social Media Animation',
    category: 'Motion Graphics',
    type: 'motion',
    description: 'Dynamic social media animations for brand engagement and marketing.',
    tools: ['After Effects', 'Premiere Pro'],
    tags: ['Social Media', 'Animation', 'Marketing'],
    icon: ThunderboltOutlined
  },
  {
    id: 6,
    title: 'Corporate Branding',
    category: 'Brand Identity',
    type: 'branding',
    description: 'Professional corporate branding solution with comprehensive guidelines.',
    tools: ['Adobe Illustrator', 'Adobe InDesign'],
    tags: ['Corporate', 'Professional', 'Guidelines'],
    icon: BgColorsOutlined
  }
]

const filteredPortfolio = computed(() => {
  if (activeTab.value === 'all') {
    return portfolioItems
  }
  return portfolioItems.filter(item => item.type === activeTab.value)
})

const handleTabChange = (key: string) => {
  activeTab.value = key
}

const openModal = (item: any) => {
  selectedItem.value = item
  modalVisible.value = true
}

const getTagColor = (tag: string) => {
  const colors = {
    'Logo': 'blue',
    'Branding': 'green',
    'Tech': 'purple',
    'Animation': 'orange',
    'Motion': 'red',
    'Product': 'cyan',
    'Restaurant': 'lime',
    'Identity': 'gold',
    'Icon': 'magenta',
    'Mobile': 'volcano',
    'App': 'geekblue',
    'Social Media': 'pink',
    'Marketing': 'yellow',
    'Corporate': 'navy',
    'Professional': 'gray',
    'Guidelines': 'brown'
  }
  return colors[tag] || 'default'
}
</script>

<style scoped>
.portfolio {
  min-height: 100vh;
}

.portfolio-hero {
  padding: 80px 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.portfolio-filter {
  padding: 40px 50px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
}

.portfolio-grid {
  padding: 60px 50px;
  background: #f8f9fa;
}

.portfolio-item {
  height: 100%;
  transition: transform 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
}

.portfolio-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.image-placeholder {
  height: 100%;
  background: linear-gradient(45deg, #f0f2f5, #e6f7ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 8px;
  color: #1890ff;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-item:hover .overlay {
  opacity: 1;
}

.view-icon {
  color: white;
  font-size: 2rem;
}

.portfolio-tags {
  margin-top: 12px;
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.modal-image {
  text-align: center;
}

.large-placeholder {
  height: 300px;
  background: linear-gradient(45deg, #f0f2f5, #e6f7ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  border-radius: 8px;
}

.large-icon {
  font-size: 4rem;
  margin-bottom: 16px;
  color: #1890ff;
}

.modal-details h3 {
  margin-bottom: 16px;
  color: #333;
}

.modal-details p {
  margin-bottom: 12px;
  line-height: 1.6;
}

.modal-tags {
  margin-top: 16px;
}

.portfolio-skills {
  padding: 80px 50px;
  background: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.skill-item:hover {
  background: #e6f7ff;
}

.skill-icon {
  font-size: 1.5rem;
  color: #1890ff;
}

.specialization-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
}

.check-icon {
  color: #52c41a;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .portfolio-hero {
    padding: 40px 20px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .portfolio-filter, .portfolio-grid, .portfolio-skills {
    padding: 40px 20px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .skill-grid {
    grid-template-columns: 1fr;
  }
}
</style>