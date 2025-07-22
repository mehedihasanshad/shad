<template>
  <div class="tuition-page">
    <!-- Hero Section -->
    <section class="tuition-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Academic Excellence Through Personalized Learning</h1>
          <p class="page-subtitle">
            Unlock your potential in Mathematics and Physics with expert guidance and proven teaching methods
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">200+</span>
              <span class="stat-label">Students Taught</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">95%</span>
              <span class="stat-label">Success Rate</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Subjects Section -->
    <section class="subjects-section">
      <div class="container">
        <h2 class="section-title">Subjects I Teach</h2>
        <a-row :gutter="[32, 32]">
          <a-col :xs="24" :md="12">
            <div class="subject-card">
              <div class="subject-icon">
                <CalculatorOutlined />
              </div>
              <h3>Mathematics</h3>
              <div class="subject-levels">
                <a-tag color="blue">Class 6-12</a-tag>
                <a-tag color="green">SSC/HSC</a-tag>
                <a-tag color="purple">University Level</a-tag>
              </div>
              <ul class="subject-topics">
                <li>Algebra & Geometry</li>
                <li>Calculus & Trigonometry</li>
                <li>Statistics & Probability</li>
                <li>Discrete Mathematics</li>
                <li>Linear Algebra</li>
              </ul>
              <div class="subject-approach">
                <h4>My Approach:</h4>
                <p>Building strong foundations through step-by-step problem solving and real-world applications.</p>
              </div>
            </div>
          </a-col>
          <a-col :xs="24" :md="12">
            <div class="subject-card">
              <div class="subject-icon">
                <ExperimentOutlined />
              </div>
              <h3>Physics</h3>
              <div class="subject-levels">
                <a-tag color="blue">Class 9-12</a-tag>
                <a-tag color="green">SSC/HSC</a-tag>
                <a-tag color="orange">Conceptual Physics</a-tag>
              </div>
              <ul class="subject-topics">
                <li>Mechanics & Motion</li>
                <li>Electricity & Magnetism</li>
                <li>Waves & Optics</li>
                <li>Thermodynamics</li>
                <li>Modern Physics</li>
              </ul>
              <div class="subject-approach">
                <h4>My Approach:</h4>
                <p>Making complex concepts simple through visual demonstrations and practical examples.</p>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </section>

    <!-- Teaching Method -->
    <section class="method-section">
      <div class="container">
        <h2 class="section-title">My Teaching Philosophy</h2>
        <a-row :gutter="[48, 48]" align="middle">
          <a-col :xs="24" :lg="12">
            <div class="method-content">
              <div class="method-points">
                <div class="method-point">
                  <div class="point-icon">
                    <UserOutlined />
                  </div>
                  <div class="point-content">
                    <h4>Personalized Learning</h4>
                    <p>Every student learns differently. I adapt my teaching style to match your learning pace and preferences.</p>
                  </div>
                </div>
                <div class="method-point">
                  <div class="point-icon">
                    <BulbOutlined />
                  </div>
                  <div class="point-content">
                    <h4>Conceptual Understanding</h4>
                    <p>Focus on understanding the 'why' behind formulas and concepts, not just memorization.</p>
                  </div>
                </div>
                <div class="method-point">
                  <div class="point-icon">
                    <RocketOutlined />
                  </div>
                  <div class="point-content">
                    <h4>Progressive Learning</h4>
                    <p>Building knowledge step by step, ensuring strong foundations before advancing to complex topics.</p>
                  </div>
                </div>
                <div class="method-point">
                  <div class="point-icon">
                    <TrophyOutlined />
                  </div>
                  <div class="point-content">
                    <h4>Exam Excellence</h4>
                    <p>Strategic preparation for exams with practice tests, time management, and confidence building.</p>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :xs="24" :lg="12">
            <div class="method-visual">
              <div class="learning-cycle">
                <div class="cycle-step step-1">
                  <span class="step-number">1</span>
                  <span class="step-text">Assess</span>
                </div>
                <div class="cycle-step step-2">
                  <span class="step-number">2</span>
                  <span class="step-text">Plan</span>
                </div>
                <div class="cycle-step step-3">
                  <span class="step-number">3</span>
                  <span class="step-text">Teach</span>
                </div>
                <div class="cycle-step step-4">
                  <span class="step-number">4</span>
                  <span class="step-text">Practice</span>
                </div>
                <div class="cycle-center">
                  <BookOutlined />
                  <span>Success</span>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </section>

    <!-- Class Options -->
    <section class="class-options-section">
      <div class="container">
        <h2 class="section-title">Flexible Learning Options</h2>
        <a-row :gutter="[32, 32]">
          <a-col :xs="24" :md="8">
            <div class="option-card">
              <div class="option-icon">
                <HomeOutlined />
              </div>
              <h3>In-Person Classes</h3>
              <p>Face-to-face learning in a comfortable environment with direct interaction and immediate feedback.</p>
              <ul class="option-features">
                <li>Personalized attention</li>
                <li>Interactive whiteboard sessions</li>
                <li>Immediate doubt clearing</li>
                <li>Physical study materials</li>
              </ul>
              <div class="option-price">
                <span class="price">৳800-1200</span>
                <span class="duration">per session</span>
              </div>
            </div>
          </a-col>
          <a-col :xs="24" :md="8">
            <div class="option-card featured">
              <div class="featured-badge">Most Popular</div>
              <div class="option-icon">
                <LaptopOutlined />
              </div>
              <h3>Online Classes</h3>
              <p>Learn from anywhere with high-quality video sessions, digital tools, and flexible scheduling.</p>
              <ul class="option-features">
                <li>Flexible timing</li>
                <li>Digital whiteboard</li>
                <li>Recorded sessions</li>
                <li>Screen sharing</li>
              </ul>
              <div class="option-price">
                <span class="price">৳600-1000</span>
                <span class="duration">per session</span>
              </div>
            </div>
          </a-col>
          <a-col :xs="24" :md="8">
            <div class="option-card">
              <div class="option-icon">
                <TeamOutlined />
              </div>
              <h3>Group Classes</h3>
              <p>Learn with peers in small groups, encouraging discussion and collaborative problem-solving.</p>
              <ul class="option-features">
                <li>Small groups (3-5 students)</li>
                <li>Peer learning</li>
                <li>Cost-effective</li>
                <li>Group discussions</li>
              </ul>
              <div class="option-price">
                <span class="price">৳400-600</span>
                <span class="duration">per session</span>
              </div>
            </div>
          </a-col
.tuition-hero {
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

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.tuition-services {
  padding: 80px 50px;
  background: #f8f9fa;
}

.approach-card {
  text-align: center;
  height: 100%;
}

.approach-icon {
  padding: 30px;
  font-size: 2.5rem;
  color: #1890ff;
  background: #f0f8ff;
}

.subjects {
  padding: 80px 50px;
  background: white;
}

.subject-card {
  height: 100%;
}

.subject-content {
  text-align: center;
  padding: 20px;
}

.subject-icon {
  font-size: 2.5rem;
  color: #1890ff;
  margin-bottom: 16px;
}

.subject-content h3 {
  margin: 16px 0 8px 0;
  color: #333;
}

.experience {
  padding: 80px 50px;
  background: #f8f9fa;
}

.pricing {
  padding: 80px 50px;
  background: white;
}

.pricing-card {
  text-align: center;
  height: 100%;
}

.pricing-header h3 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #333;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1890ff;
}

.price span {
  font-size: 1rem;
  color: #666;
}

.features {
  list-style: none;
  padding: 0;
  margin: 24px 0;
}

.features li {
  padding: 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.featured {
  transform: scale(1.05);
  border: 2px solid #1890ff;
}

@media (max-width: 768px) {
  .tuition-hero {
    padding: 40px 20px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .tuition-services, .subjects, .experience, .pricing {
    padding: 40px 20px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .featured {
    transform: none;
  }
}
</style>