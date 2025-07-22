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
          </a-col>
        </a-row>
      </div>
    </section>

    <!-- Schedule -->
    <section class="schedule-section">
      <div class="container">
        <h2 class="section-title">Class Schedule</h2>
        <div class="schedule-grid">
          <div class="schedule-card">
            <h3>Weekdays</h3>
            <div class="time-slots">
              <div class="time-slot">
                <ClockCircleOutlined />
                <span>4:00 PM - 6:00 PM</span>
              </div>
              <div class="time-slot">
                <ClockCircleOutlined />
                <span>7:00 PM - 9:00 PM</span>
              </div>
            </div>
            <p class="schedule-note">Perfect for after-school learning</p>
          </div>
          <div class="schedule-card">
            <h3>Weekends</h3>
            <div class="time-slots">
              <div class="time-slot">
                <ClockCircleOutlined />
                <span>10:00 AM - 12:00 PM</span>
              </div>
              <div class="time-slot">
                <ClockCircleOutlined />
                <span>2:00 PM - 4:00 PM</span>
              </div>
              <div class="time-slot">
                <ClockCircleOutlined />
                <span>5:00 PM - 7:00 PM</span>
              </div>
            </div>
            <p class="schedule-note">Extended sessions available</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">Student Success Stories</h2>
        <a-row :gutter="[32, 32]">
          <a-col :xs="24" :md="8">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"Mehedi sir made calculus so easy to understand! His step-by-step approach helped me improve my grades from C to A+."</p>
              </div>
              <div class="testimonial-author">
                <div class="author-info">
                  <h4>Sarah Ahmed</h4>
                  <span>HSC Student</span>
                </div>
                <div class="testimonial-rating">
                  <a-rate :value="5" disabled />
                </div>
              </div>
            </div>
          </a-col>
          <a-col :xs="24" :md="8">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"The physics concepts that seemed impossible before are now crystal clear. Thank you for your patience and excellent teaching!"</p>
              </div>
              <div class="testimonial-author">
                <div class="author-info">
                  <h4>Rafiq Hassan</h4>
                  <span>University Student</span>
                </div>
                <div class="testimonial-rating">
                  <a-rate :value="5" disabled />
                </div>
              </div>
            </div>
          </a-col>
          <a-col :xs="24" :md="8">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"Online classes were so convenient and effective. The digital whiteboard made complex problems easy to follow."</p>
              </div>
              <div class="testimonial-author">
                <div class="author-info">
                  <h4>Fatima Khan</h4>
                  <span>SSC Student</span>
                </div>
                <div class="testimonial-rating">
                  <a-rate :value="5" disabled />
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Excel in Your Studies?</h2>
          <p>Join hundreds of successful students who have achieved their academic goals with personalized tutoring.</p>
          <div class="cta-actions">
            <a-button type="primary" size="large" @click="$router.push('/contact')">
              <MessageOutlined /> Book a Free Trial Class
            </a-button>
            <a-button size="large" @click="scrollToSchedule">
              <CalendarOutlined /> View Schedule
            </a-button>
          </div>
          <div class="cta-guarantee">
            <SafetyCertificateOutlined />
            <span>100% Satisfaction Guarantee - First class is always free!</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  CalculatorOutlined,
  ExperimentOutlined,
  UserOutlined,
  BulbOutlined,
  RocketOutlined,
  TrophyOutlined,
  BookOutlined,
  HomeOutlined,
  LaptopOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  MessageOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined
} from '@ant-design/icons-vue'

const scrollToSchedule = () => {
  const el = document.querySelector('.schedule-section') as HTMLElement | null;
  window.scrollTo({ 
    top: el?.offsetTop || 0, 
    behavior: 'smooth' 
  })
}
</script><style
 scoped>
.tuition-page {
  min-height: 100vh;
}

.tuition-hero {
  padding: 100px 50px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.page-subtitle {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffd700;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
}

.subjects-section {
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

.subject-card {
  background: #f8f9fa;
  padding: 40px;
  border-radius: 20px;
  height: 100%;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.subject-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border-color: #4facfe;
}

.subject-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 2rem;
  color: white;
}

.subject-card h3 {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.subject-levels {
  text-align: center;
  margin-bottom: 24px;
}

.subject-topics {
  list-style: none;
  padding: 0;
  margin-bottom: 24px;
}

.subject-topics li {
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
  position: relative;
  padding-left: 20px;
}

.subject-topics li::before {
  content: '📚';
  position: absolute;
  left: 0;
}

.subject-approach {
  background: white;
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid #4facfe;
}

.subject-approach h4 {
  margin: 0 0 12px 0;
  color: #4facfe;
  font-weight: 600;
}

.subject-approach p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.method-section {
  padding: 100px 50px;
  background: #f8f9fa;
}

.method-points {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.method-point {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.point-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
}

.point-content h4 {
  margin: 0 0 12px 0;
  font-size: 1.3rem;
  color: #333;
}

.point-content p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.learning-cycle {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

.cycle-step {
  position: absolute;
  width: 100px;
  height: 100px;
  background: white;
  border: 3px solid #4facfe;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #4facfe;
  box-shadow: 0 10px 30px rgba(79, 172, 254, 0.2);
}

.step-1 { top: 0; left: 50%; transform: translateX(-50%); }
.step-2 { top: 50%; right: 0; transform: translateY(-50%); }
.step-3 { bottom: 0; left: 50%; transform: translateX(-50%); }
.step-4 { top: 50%; left: 0; transform: translateY(-50%); }

.step-number {
  font-size: 1.5rem;
  font-weight: 800;
}

.step-text {
  font-size: 0.9rem;
}

.cycle-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: 600;
}

.class-options-section {
  padding: 100px 50px;
  background: white;
}

.option-card {
  background: #f8f9fa;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  height: 100%;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
}

.option-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border-color: #4facfe;
}

.option-card.featured {
  border-color: #ffd700;
  background: linear-gradient(135deg, #fff9e6, #f8f9fa);
}

.featured-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: #ffd700;
  color: #333;
  padding: 6px 20px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.option-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 2rem;
  color: white;
}

.option-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.option-card p {
  color: #666;
  margin-bottom: 24px;
  line-height: 1.6;
}

.option-features {
  list-style: none;
  padding: 0;
  margin-bottom: 24px;
  text-align: left;
}

.option-features li {
  padding: 6px 0;
  position: relative;
  padding-left: 20px;
  color: #555;
}

.option-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4facfe;
  font-weight: bold;
}

.option-price {
  background: white;
  padding: 16px;
  border-radius: 12px;
  border: 2px solid #e9ecef;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #4facfe;
  display: block;
}

.duration {
  font-size: 0.9rem;
  color: #666;
}

.schedule-section {
  padding: 100px 50px;
  background: #f8f9fa;
}

.schedule-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 800px;
  margin: 0 auto;
}

.schedule-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.schedule-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: #333;
}

.time-slots {
  margin-bottom: 20px;
}

.time-slot {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 12px;
  color: #4facfe;
  font-weight: 500;
}

.schedule-note {
  color: #666;
  font-style: italic;
  margin: 0;
}

.testimonials-section {
  padding: 100px 50px;
  background: white;
}

.testimonial-card {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 20px;
  height: 100%;
  border-left: 4px solid #4facfe;
}

.testimonial-content {
  margin-bottom: 24px;
}

.testimonial-content p {
  font-style: italic;
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.testimonial-author {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.author-info h4 {
  margin: 0 0 4px 0;
  color: #333;
  font-weight: 600;
}

.author-info span {
  color: #666;
  font-size: 0.9rem;
}

.cta-section {
  padding: 100px 50px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.cta-guarantee {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 1rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .tuition-hero, .subjects-section, .method-section, 
  .class-options-section, .schedule-section, 
  .testimonials-section, .cta-section {
    padding: 60px 20px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .hero-stats {
    gap: 30px;
  }
  
  .learning-cycle {
    width: 300px;
    height: 300px;
  }
  
  .cycle-step {
    width: 80px;
    height: 80px;
  }
  
  .cycle-center {
    width: 100px;
    height: 100px;
    font-size: 1.5rem;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>