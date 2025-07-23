<template>
  <div class="tuition-page">
    <!-- Hero Section -->
    <section class="tuition-hero bg-gradient-to-br from-blue-400 to-cyan-300 text-white text-center py-24 px-4">
      <div class="w-full max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Academic Excellence Through Personalized Learning</h1>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">Unlock your potential in Mathematics and Physics with expert guidance and proven teaching methods</p>
        <div class="flex flex-wrap justify-center gap-8 mb-8">
          <div class="text-center">
            <span class="block text-3xl md:text-4xl font-bold text-yellow-400 mb-2">200+</span>
            <span class="text-primary-100 font-medium">Students Taught</span>
          </div>
          <div class="text-center">
            <span class="block text-3xl md:text-4xl font-bold text-yellow-400 mb-2">95%</span>
            <span class="text-primary-100 font-medium">Success Rate</span>
          </div>
          <div class="text-center">
            <span class="block text-3xl md:text-4xl font-bold text-yellow-400 mb-2">5+</span>
            <span class="text-primary-100 font-medium">Years Experience</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Subjects Section -->
    <section class="subjects-section bg-white py-24 px-4">
      <div class="w-full max-w-7xl mx-auto">
        <h2 class="text-center text-4xl font-bold mb-8 text-gray-900">Subjects I Teach</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-16">
          <div class="bg-gray-100 p-12 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500">
            <div class="flex justify-center mb-6">
              <CalculatorOutlined class="text-5xl text-blue-500" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">Mathematics</h3>
            <div class="flex flex-wrap justify-center gap-2 mb-4">
              <a-tag color="blue">Class 6-12</a-tag>
              <a-tag color="green">SSC/HSC</a-tag>
              <a-tag color="purple">University Level</a-tag>
            </div>
            <ul class="list-none p-0 mb-6">
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">📚</span> Algebra & Geometry
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">📚</span> Calculus & Trigonometry
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">📚</span> Statistics & Probability
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">📚</span> Discrete Mathematics
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">📚</span> Linear Algebra
              </li>
            </ul>
            <div class="bg-white p-8 rounded-xl border border-gray-200">
              <h4 class="text-xl font-semibold mb-4 text-blue-600">My Approach:</h4>
              <p class="text-gray-700">Building strong foundations through step-by-step problem solving and real-world applications.</p>
            </div>
          </div>
          <div class="bg-gray-100 p-12 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500">
            <div class="flex justify-center mb-6">
              <ExperimentOutlined class="text-5xl text-blue-500" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">Physics</h3>
            <div class="flex flex-wrap justify-center gap-2 mb-4">
              <a-tag color="blue">Class 9-12</a-tag>
              <a-tag color="green">SSC/HSC</a-tag>
              <a-tag color="orange">Conceptual Physics</a-tag>
            </div>
            <ul class="list-none p-0 mb-6">
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">��</span> Mechanics & Motion
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">📚</span> Electricity & Magnetism
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">📚</span> Waves & Optics
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">📚</span> Thermodynamics
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">📚</span> Modern Physics
              </li>
            </ul>
            <div class="bg-white p-8 rounded-xl border border-gray-200">
              <h4 class="text-xl font-semibold mb-4 text-blue-600">My Approach:</h4>
              <p class="text-gray-700">Making complex concepts simple through visual demonstrations and practical examples.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Teaching Method -->
    <section class="method-section bg-gray-100 py-24 px-4">
      <div class="w-full max-w-7xl mx-auto">
        <h2 class="text-center text-4xl font-bold mb-8 text-gray-900">My Teaching Philosophy</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="bg-white p-12 rounded-2xl border border-gray-200">
            <div class="flex flex-col gap-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl">
                  <UserOutlined />
                </div>
                <div>
                  <h4 class="text-2xl font-semibold mb-2 text-gray-900">Personalized Learning</h4>
                  <p class="text-gray-700">Every student learns differently. I adapt my teaching style to match your learning pace and preferences.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl">
                  <BulbOutlined />
                </div>
                <div>
                  <h4 class="text-2xl font-semibold mb-2 text-gray-900">Conceptual Understanding</h4>
                  <p class="text-gray-700">Focus on understanding the 'why' behind formulas and concepts, not just memorization.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl">
                  <RocketOutlined />
                </div>
                <div>
                  <h4 class="text-2xl font-semibold mb-2 text-gray-900">Progressive Learning</h4>
                  <p class="text-gray-700">Building knowledge step by step, ensuring strong foundations before advancing to complex topics.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl">
                  <TrophyOutlined />
                </div>
                <div>
                  <h4 class="text-2xl font-semibold mb-2 text-gray-900">Exam Excellence</h4>
                  <p class="text-gray-700">Strategic preparation for exams with practice tests, time management, and confidence building.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white p-12 rounded-2xl border border-gray-200">
            <div class="relative w-full h-full flex flex-col items-center justify-center">
              <div class="absolute inset-0 flex items-center justify-center">
                <BookOutlined class="text-5xl text-blue-500" />
              </div>
              <div class="text-center">
                <span class="block text-3xl font-bold text-blue-600">Success</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Class Options -->
    <section class="class-options-section bg-white py-24 px-4">
      <div class="w-full max-w-7xl mx-auto">
        <h2 class="text-center text-4xl font-bold mb-8 text-gray-900">Flexible Learning Options</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-16">
          <div class="bg-gray-100 p-12 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500">
            <div class="flex justify-center mb-6">
              <HomeOutlined class="text-5xl text-blue-500" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">In-Person Classes</h3>
            <p class="text-gray-700 mb-6">Face-to-face learning in a comfortable environment with direct interaction and immediate feedback.</p>
            <ul class="list-none p-0 mb-6 text-left">
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">✓</span> Personalized attention
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">✓</span> Interactive whiteboard sessions
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">✓</span> Immediate doubt clearing
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">✓</span> Physical study materials
              </li>
            </ul>
            <div class="bg-white p-8 rounded-xl border border-gray-200">
              <span class="block text-2xl font-bold text-blue-600">৳800-1200</span>
              <span class="block text-gray-700 text-lg">per session</span>
            </div>
          </div>
          <div class="bg-gray-100 p-12 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500">
            <div class="flex justify-center mb-6">
              <LaptopOutlined class="text-5xl text-blue-500" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">Online Classes</h3>
            <p class="text-gray-700 mb-6">Learn from anywhere with high-quality video sessions, digital tools, and flexible scheduling.</p>
            <ul class="list-none p-0 mb-6 text-left">
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">✓</span> Flexible timing
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">✓</span> Digital whiteboard
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">✓</span> Recorded sessions
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">✓</span> Screen sharing
              </li>
            </ul>
            <div class="bg-white p-8 rounded-xl border border-gray-200">
              <span class="block text-2xl font-bold text-blue-600">৳600-1000</span>
              <span class="block text-gray-700 text-lg">per session</span>
            </div>
          </div>
          <div class="bg-gray-100 p-12 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500">
            <div class="flex justify-center mb-6">
              <TeamOutlined class="text-5xl text-blue-500" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">Group Classes</h3>
            <p class="text-gray-700 mb-6">Learn with peers in small groups, encouraging discussion and collaborative problem-solving.</p>
            <ul class="list-none p-0 mb-6 text-left">
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">✓</span> Small groups (3-5 students)
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">✓</span> Peer learning
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">✓</span> Cost-effective
              </li>
              <li class="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                <span class="mr-2 text-gray-700">✓</span> Group discussions
              </li>
            </ul>
            <div class="bg-white p-8 rounded-xl border border-gray-200">
              <span class="block text-2xl font-bold text-blue-600">৳400-600</span>
              <span class="block text-gray-700 text-lg">per session</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule -->
    <section class="schedule-section bg-gray-100 py-24 px-4">
      <div class="w-full max-w-7xl mx-auto">
        <h2 class="text-center text-4xl font-bold mb-8 text-gray-900">Class Schedule</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-16">
          <div class="bg-white p-12 rounded-2xl border border-gray-200">
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">Weekdays</h3>
            <div class="flex flex-col gap-4 mb-6">
              <div class="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg">
                <ClockCircleOutlined class="text-blue-500 text-2xl" />
                <span class="text-gray-700">4:00 PM - 6:00 PM</span>
              </div>
              <div class="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg">
                <ClockCircleOutlined class="text-blue-500 text-2xl" />
                <span class="text-gray-700">7:00 PM - 9:00 PM</span>
              </div>
            </div>
            <p class="text-gray-700 italic">Perfect for after-school learning</p>
          </div>
          <div class="bg-white p-12 rounded-2xl border border-gray-200">
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">Weekends</h3>
            <div class="flex flex-col gap-4 mb-6">
              <div class="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg">
                <ClockCircleOutlined class="text-blue-500 text-2xl" />
                <span class="text-gray-700">10:00 AM - 12:00 PM</span>
              </div>
              <div class="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg">
                <ClockCircleOutlined class="text-blue-500 text-2xl" />
                <span class="text-gray-700">2:00 PM - 4:00 PM</span>
              </div>
              <div class="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg">
                <ClockCircleOutlined class="text-blue-500 text-2xl" />
                <span class="text-gray-700">5:00 PM - 7:00 PM</span>
              </div>
            </div>
            <p class="text-gray-700 italic">Extended sessions available</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="testimonials-section bg-white py-24 px-4">
      <div class="w-full max-w-7xl mx-auto">
        <h2 class="text-center text-4xl font-bold mb-8 text-gray-900">Student Success Stories</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-16">
          <div class="bg-gray-100 p-12 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500">
            <div class="testimonial-content">
              <p class="text-gray-700 italic">"Mehedi sir made calculus so easy to understand! His step-by-step approach helped me improve my grades from C to A+."</p>
            </div>
            <div class="testimonial-author flex justify-between items-center">
              <div class="author-info">
                <h4 class="text-2xl font-semibold mb-2 text-gray-900">Sarah Ahmed</h4>
                <span class="text-gray-700 text-lg">HSC Student</span>
              </div>
              <div class="testimonial-rating">
                <a-rate :value="5" disabled />
              </div>
            </div>
          </div>
          <div class="bg-gray-100 p-12 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500">
            <div class="testimonial-content">
              <p class="text-gray-700 italic">"The physics concepts that seemed impossible before are now crystal clear. Thank you for your patience and excellent teaching!"</p>
            </div>
            <div class="testimonial-author flex justify-between items-center">
              <div class="author-info">
                <h4 class="text-2xl font-semibold mb-2 text-gray-900">Rafiq Hassan</h4>
                <span class="text-gray-700 text-lg">University Student</span>
              </div>
              <div class="testimonial-rating">
                <a-rate :value="5" disabled />
              </div>
            </div>
          </div>
          <div class="bg-gray-100 p-12 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500">
            <div class="testimonial-content">
              <p class="text-gray-700 italic">"Online classes were so convenient and effective. The digital whiteboard made complex problems easy to follow."</p>
            </div>
            <div class="testimonial-author flex justify-between items-center">
              <div class="author-info">
                <h4 class="text-2xl font-semibold mb-2 text-gray-900">Fatima Khan</h4>
                <span class="text-gray-700 text-lg">SSC Student</span>
              </div>
              <div class="testimonial-rating">
                <a-rate :value="5" disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section bg-gradient-to-br from-blue-400 to-cyan-300 text-white text-center py-24 px-4">
      <div class="w-full max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold mb-4 text-white">Ready to Excel in Your Studies?</h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">Join hundreds of successful students who have achieved their academic goals with personalized tutoring.</p>
        <div class="flex flex-wrap justify-center gap-8 mb-8">
          <a-button type="primary" size="large" @click="$router.push('/contact')" class="text-white bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700">
            <MessageOutlined class="mr-2" /> Book a Free Trial Class
          </a-button>
          <a-button size="large" @click="scrollToSchedule" class="text-white bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700">
            <CalendarOutlined class="mr-2" /> View Schedule
          </a-button>
        </div>
        <div class="flex justify-center items-center gap-4 text-white text-lg opacity-90">
          <SafetyCertificateOutlined />
          <span>100% Satisfaction Guarantee - First class is always free!</span>
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
</script>