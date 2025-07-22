<template>
  <div class="home-page">
    <!-- Hero Section with Animated Background -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="container">
          <a-row align="middle" :gutter="[48, 48]">
            <a-col :xs="24" :lg="12">
              <div class="hero-text">
                <div class="greeting">
                  <span class="wave">👋</span>
                  <span>Hello, I'm</span>
                </div>
                <h1 class="hero-title">
                  <span class="name-highlight">Mehedi Hasan</span>
                  <span class="surname">Shadin</span>
                </h1>
                <div class="role-container">
                  <span class="role-prefix">I'm a</span>
                  <span class="animated-roles" ref="roleElement">{{ currentRole }}</span>
                </div>
                <p class="hero-description">
                  Crafting exceptional visual experiences through logo design and motion graphics, 
                  while empowering students through personalized tutoring in mathematics and physics.
                </p>
                <div class="hero-actions">
                  <a-button type="primary" size="large" @click="scrollToPortfolio" class="cta-button">
                    <EyeOutlined /> View My Work
                  </a-button>
                  <a-button size="large" @click="scrollToContact" class="secondary-button">
                    <MessageOutlined /> Get In Touch
                  </a-button>
                </div>
              </div>
            </a-col>
            <a-col :xs="24" :lg="12">
              <div class="hero-visual">
                <div class="profile-container">
                  <div class="profile-image">
                    <img src="/api/placeholder/400/400" alt="Mehedi Hasan Shadin" />
                    <div class="profile-overlay">
                      <div class="skill-badges">
                        <span class="badge">Logo Design</span>
                        <span class="badge">Motion Graphics</span>
                        <span class="badge">Tutoring</span>
                      </div>
                    </div>
                  </div>
                  <div class="floating-icons">
                    <div class="icon-item icon-1"><DesignServicesOutlined /></div>
                    <div class="icon-item icon-2"><VideoCameraOutlined /></div>
                    <div class="icon-item icon-3"><BookOutlined /></div>
                    <div class="icon-item icon-4"><BulbOutlined /></div>
                  </div>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </section>

    <!-- Skills Overview -->
    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">What I Do Best</h2>
        <a-row :gutter="[32, 32]">
          <a-col :xs="24" :md="8">
            <div class="skill-card">
              <div class="skill-icon">
                <DesignServicesOutlined />
              </div>
              <h3>Logo Design</h3>
              <p>Creating memorable brand identities that tell your story and connect with your audience.</p>
              <ul class="skill-features">
                <li>Brand Identity Development</li>
                <li>Logo Variations & Guidelines</li>
                <li>Print & Digital Optimization</li>
              </ul>
            </div>
          </a-col>
          <a-col :xs="24" :md="8">
            <div class="skill-card">
              <div class="skill-icon">
                <VideoCameraOutlined />
              </div>
              <h3>Motion Graphics</h3>
              <p>Bringing designs to life with engaging animations and visual storytelling.</p>
              <ul class="skill-features">
                <li>Social Media Animations</li>
                <li>Explainer Videos</li>
                <li>Brand Animations</li>
              </ul>
            </div>
          </a-col>
          <a-col :xs="24" :md="8">
            <div class="skill-card">
              <div class="skill-icon">
                <BookOutlined />
              </div>
              <h3>Academic Tutoring</h3>
              <p>Personalized learning experiences in mathematics and physics for academic excellence.</p>
              <ul class="skill-features">
                <li>High School Mathematics</li>
                <li>Physics Fundamentals</li>
                <li>Exam Preparation</li>
              </ul>
            </div>
          </a-col>
        </a-row>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <a-row :gutter="[32, 32]">
          <a-col :xs="12" :md="6">
            <div class="stat-item">
              <div class="stat-number">{{ animatedStats.projects }}</div>
              <div class="stat-label">Projects Completed</div>
            </div>
          </a-col>
          <a-col :xs="12" :md="6">
            <div class="stat-item">
              <div class="stat-number">{{ animatedStats.students }}</div>
              <div class="stat-label">Students Tutored</div>
            </div>
          </a-col>
          <a-col :xs="12" :md="6">
            <div class="stat-item">
              <div class="stat-number">{{ animatedStats.experience }}</div>
              <div class="stat-label">Years Experience</div>
            </div>
          </a-col>
          <a-col :xs="12" :md="6">
            <div class="stat-item">
              <div class="stat-number">{{ animatedStats.satisfaction }}%</div>
              <div class="stat-label">Client Satisfaction</div>
            </div>
          </a-col>
        </a-row>
      </div>
    </section>

    <!-- Quick Contact -->
    <section class="quick-contact-section">
      <div class="container">
        <div class="quick-contact-card">
          <h2>Ready to Start Your Project?</h2>
          <p>Whether you need stunning visuals or academic support, I'm here to help you succeed.</p>
          <div class="contact-options">
            <a-button type="primary" size="large" @click="$router.push('/contact')">
              <MailOutlined /> Send Message
            </a-button>
            <a-button size="large" @click="$router.push('/tuition')">
              <BookOutlined /> Learn More About Tutoring
            </a-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { 
  EyeOutlined,
  MessageOutlined,
  DesignServicesOutlined,
  VideoCameraOutlined,
  BookOutlined,
  BulbOutlined,
  MailOutlined
} from '@ant-design/icons-vue'

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

  // Animate stats
  animateStats()
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
  // Implement smooth scroll to portfolio section or navigate to portfolio page
  window.scrollTo({ top: document.querySelector('.skills-section')?.offsetTop || 0, behavior: 'smooth' })
}

const scrollToContact = () => {
  window.scrollTo({ top: document.querySelector('.quick-contact-section')?.offsetTop || 0, behavior: 'smooth' })
}
</script><style s
coped>
.home-page {
  overflow-x: hidden;
}

.hero-section {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  bottom: 30%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  top: 10%;
  right: 30%;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 80px 50px;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.greeting {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.wave {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
  margin-right: 8px;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-10deg); }
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.name-highlight {
  display: block;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.surname {
  display: block;
  color: white;
}

.role-container {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  height: 2rem;
}

.role-prefix {
  opacity: 0.8;
  margin-right: 8px;
}

.animated-roles {
  color: #ffd700;
  font-weight: 600;
  position: relative;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.cta-button {
  background: #ffd700;
  border-color: #ffd700;
  color: #333;
  font-weight: 600;
  height: 48px;
  padding: 0 32px;
}

.cta-button:hover {
  background: #ffed4e;
  border-color: #ffed4e;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
}

.secondary-button {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  height: 48px;
  padding: 0 32px;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  color: white;
}

.profile-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image {
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.profile-image:hover .profile-overlay {
  transform: translateY(0);
}

.skill-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.badge {
  background: #ffd700;
  color: #333;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.floating-icons {
  position: absolute;
  width: 100%;
  height: 100%;
}

.icon-item {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #ffd700;
  backdrop-filter: blur(10px);
  animation: floatIcon 4s ease-in-out infinite;
}

.icon-1 { top: 10%; left: -10%; animation-delay: 0s; }
.icon-2 { top: 30%; right: -15%; animation-delay: 1s; }
.icon-3 { bottom: 30%; left: -5%; animation-delay: 2s; }
.icon-4 { bottom: 10%; right: -10%; animation-delay: 3s; }

@keyframes floatIcon {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-15px) scale(1.1); }
}

.skills-section {
  padding: 100px 50px;
  background: white;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: #333;
}

.skill-card {
  text-align: center;
  padding: 40px 30px;
  border-radius: 20px;
  background: #f8f9fa;
  height: 100%;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border-color: #667eea;
}

.skill-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 2rem;
  color: white;
}

.skill-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.skill-card p {
  color: #666;
  margin-bottom: 24px;
  line-height: 1.6;
}

.skill-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-features li {
  color: #555;
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;
}

.skill-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.stats-section {
  padding: 80px 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #ffd700;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
}

.quick-contact-section {
  padding: 100px 50px;
  background: #f8f9fa;
}

.quick-contact-card {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 60px 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.quick-contact-card h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
}

.quick-contact-card p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.contact-options {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 40px 20px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .role-container {
    font-size: 1.2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .profile-image {
    width: 250px;
    height: 250px;
  }
  
  .skills-section, .quick-contact-section {
    padding: 60px 20px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .stats-section {
    padding: 60px 20px;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .contact-options {
    flex-direction: column;
    align-items: center;
  }
}
</style>