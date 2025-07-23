<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="contact-hero bg-gradient-to-br from-primary-600 to-secondary-600 text-white text-center py-20 px-4">
      <div class="w-full max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Get In Touch</h1>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">Ready to start your project or need tutoring? Let's connect!</p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content bg-white py-20 px-4">
      <div class="w-full max-w-7xl mx-auto">
        <a-row :gutter="[48, 48]">
          <!-- Contact Form -->
          <a-col :xs="24" :lg="14">
            <div class="contact-form-section">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">Send Me a Message</h2>
              <a-form
                :model="form"
                :rules="rules"
                layout="vertical"
                @finish="handleSubmit"
                class="contact-form"
              >
                <a-row :gutter="16">
                  <a-col :xs="24" :sm="12">
                    <a-form-item label="Name" name="name">
                      <a-input v-model:value="form.name" size="large" placeholder="Your Name" />
                    </a-form-item>
                  </a-col>
                  <a-col :xs="24" :sm="12">
                    <a-form-item label="Email" name="email">
                      <a-input v-model:value="form.email" size="large" placeholder="your@email.com" />
                    </a-form-item>
                  </a-col>
                </a-row>
                
                <a-form-item label="Subject" name="subject">
                  <a-select v-model:value="form.subject" size="large" placeholder="Select a subject">
                    <a-select-option value="tuition">Tuition Inquiry</a-select-option>
                    <a-select-option value="logo">Logo Design Project</a-select-option>
                    <a-select-option value="motion">Motion Graphics Project</a-select-option>
                    <a-select-option value="branding">Brand Identity Project</a-select-option>
                    <a-select-option value="other">Other</a-select-option>
                  </a-select>
                </a-form-item>

                <a-form-item label="Message" name="message">
                  <a-textarea 
                    v-model:value="form.message" 
                    :rows="6" 
                    placeholder="Tell me about your project or tutoring needs..."
                  />
                </a-form-item>

                <a-form-item>
                  <a-button type="primary" html-type="submit" size="large" :loading="loading" block>
                    <SendOutlined /> Send Message
                  </a-button>
                </a-form-item>
              </a-form>
            </div>
          </a-col>

          <!-- Contact Info -->
          <a-col :xs="24" :lg="10">
            <div class="contact-info-section">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">Contact Information</h2>
              
              <div class="contact-methods">
                <div class="contact-method">
                  <div class="method-icon">
                    <MailOutlined />
                  </div>
                  <div class="method-content">
                    <h4 class="text-lg font-semibold text-gray-900">Email</h4>
                    <p class="text-gray-700">mehedi.Shad@email.com</p>
                    <a-button type="link" size="small">Send Email</a-button>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="method-icon">
                    <PhoneOutlined />
                  </div>
                  <div class="method-content">
                    <h4 class="text-lg font-semibold text-gray-900">Phone</h4>
                    <p class="text-gray-700">+880 XXX-XXXXXXX</p>
                    <a-button type="link" size="small">Call Now</a-button>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="method-icon">
                    <WhatsAppOutlined />
                  </div>
                  <div class="method-content">
                    <h4 class="text-lg font-semibold text-gray-900">WhatsApp</h4>
                    <p class="text-gray-700">Available for quick questions</p>
                    <a-button type="link" size="small">Message on WhatsApp</a-button>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="method-icon">
                    <EnvironmentOutlined />
                  </div>
                  <div class="method-content">
                    <h4 class="text-lg font-semibold text-gray-900">Location</h4>
                    <p class="text-gray-700">Dhaka, Bangladesh</p>
                    <a-button type="link" size="small">View on Map</a-button>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="social-section">
                <h3 class="text-lg font-semibold mb-4 text-gray-900">Follow Me</h3>
                <div class="social-links">
                  <a-button type="primary" shape="circle" size="large">
                    <LinkedinOutlined />
                  </a-button>
                  <a-button type="primary" shape="circle" size="large">
                    <GithubOutlined />
                  </a-button>
                  <a-button type="primary" shape="circle" size="large">
                    <BehanceSquareOutlined />
                  </a-button>
                  <a-button type="primary" shape="circle" size="large">
                    <InstagramOutlined />
                  </a-button>
                </div>
              </div>

              <!-- Availability -->
              <div class="availability-section">
                <h3 class="text-lg font-semibold mb-4 text-gray-900">Availability</h3>
                <div class="availability-info">
                  <div class="availability-item">
                    <ClockCircleOutlined class="time-icon" />
                    <div>
                      <p class="text-gray-900"><strong>Tuition Hours:</strong></p>
                      <p class="text-gray-700">Mon-Fri: 4:00 PM - 9:00 PM</p>
                      <p class="text-gray-700">Sat-Sun: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div class="availability-item">
                    <ProjectOutlined class="project-icon" />
                    <div>
                      <p class="text-gray-900"><strong>Design Projects:</strong></p>
                      <p class="text-gray-700">Flexible hours by appointment</p>
                      <p class="text-gray-700">Response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section bg-gray-100 py-20 px-4">
      <div class="w-full max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold mb-6 text-center text-gray-900">Frequently Asked Questions</h2>
        <a-collapse>
          <a-collapse-panel key="1" header="What subjects do you teach?">
            <p class="text-gray-700">I specialize in Mathematics and Physics for high school and college levels. I also provide study skills coaching and academic mentoring.</p>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="Do you offer online tutoring?">
            <p class="text-gray-700">Yes! I provide both in-person and online tutoring sessions. Online sessions are conducted via video calls with digital whiteboard tools.</p>
          </a-collapse-panel>
          <a-collapse-panel key="3" header="What's your design process?">
            <p class="text-gray-700">My design process includes consultation, concept development, initial designs, revisions based on feedback, and final delivery with all necessary files.</p>
          </a-collapse-panel>
          <a-collapse-panel key="4" header="How long does a logo design take?">
            <p class="text-gray-700">Typically 5-7 business days from initial consultation to final delivery, depending on the complexity and revision rounds.</p>
          </a-collapse-panel>
          <a-collapse-panel key="5" header="Do you provide motion graphics for social media?">
            <p class="text-gray-700">Absolutely! I create engaging motion graphics for social media platforms, including Instagram stories, Facebook posts, and YouTube intros.</p>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { message } from 'ant-design-vue'
import { 
  SendOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  GithubOutlined,
  BehanceSquareOutlined,
  InstagramOutlined,
  ClockCircleOutlined,
  ProjectOutlined
} from '@ant-design/icons-vue'

const loading = ref(false)

const form = reactive<{ [key: string]: string }>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const rules = {
  name: [
    { required: true, message: 'Please enter your name' }
  ],
  email: [
    { required: true, message: 'Please enter your email' },
    { type: 'email', message: 'Please enter a valid email' }
  ],
  subject: [
    { required: true, message: 'Please select a subject' }
  ],
  message: [
    { required: true, message: 'Please enter your message' },
    { min: 10, message: 'Message should be at least 10 characters' }
  ]
}

const handleSubmit = async () => {
  loading.value = true
  
  // Simulate form submission
  setTimeout(() => {
    loading.value = false
    message.success('Message sent successfully! I will get back to you soon.')
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
  }, 2000)
}
</script>

<style scoped>
.contact {
  min-height: 100vh;
}

.contact-hero {
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

.contact-content {
  padding: 80px 50px;
  background: white;
}

.contact-form-section h2,
.contact-info-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
}

.contact-form {
  background: #f8f9fa;
  padding: 32px;
  border-radius: 12px;
}

.contact-methods {
  margin-bottom: 3rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
}

.contact-method:last-child {
  border-bottom: none;
}

.method-icon {
  width: 48px;
  height: 48px;
  background: #e6f7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #1890ff;
  flex-shrink: 0;
}

.method-content h4 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 1.1rem;
}

.method-content p {
  margin: 0 0 8px 0;
  color: #666;
}

.social-section {
  margin-bottom: 3rem;
}

.social-section h3 {
  margin-bottom: 1rem;
  color: #333;
}

.social-links {
  display: flex;
  gap: 12px;
}

.availability-section h3 {
  margin-bottom: 1rem;
  color: #333;
}

.availability-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 20px;
}

.time-icon,
.project-icon {
  color: #1890ff;
  font-size: 1.2rem;
  margin-top: 4px;
}

.availability-item p {
  margin: 0 0 4px 0;
  color: #666;
}

.faq-section {
  padding: 80px 50px;
  background: #f8f9fa;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

@media (max-width: 768px) {
  .contact-hero {
    padding: 40px 20px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .contact-content, .faq-section {
    padding: 40px 20px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-form {
    padding: 24px;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>