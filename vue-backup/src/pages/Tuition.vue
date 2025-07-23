<template>
  <div class="tuition-page">
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-white/10 to-white/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div class="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-blue-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style="animation-delay: 2s;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Academic Excellence Through <span class="text-cyan-300">Personalized Learning</span>
          </h1>
          <p class="text-xl text-blue-100 mb-12 leading-relaxed">
            Unlock your potential in Mathematics and Physics with expert guidance and proven teaching methods
          </p>
          
          <!-- Hero Stats -->
          <div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">200+</div>
              <div class="text-blue-100 font-medium">Students Taught</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">95%</div>
              <div class="text-blue-100 font-medium">Success Rate</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">5+</div>
              <div class="text-blue-100 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Teaching Approach -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My Teaching <span class="text-blue-600">Philosophy</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Every student learns differently. I adapt my teaching methods to match your unique needs and help you excel.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center group">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
              <UserOutlined class="text-white text-4xl" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Personalized Learning</h3>
            <p class="text-gray-600 leading-relaxed">
              Adapting my teaching style to your pace and preferences for the best results.
            </p>
          </div>
          <div class="text-center group">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
              <BulbOutlined class="text-white text-4xl" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Conceptual Understanding</h3>
            <p class="text-gray-600 leading-relaxed">
              Focus on understanding the 'why' behind formulas and concepts, not just memorization.
            </p>
          </div>
          <div class="text-center group">
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
              <RocketOutlined class="text-white text-4xl" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Progressive Learning</h3>
            <p class="text-gray-600 leading-relaxed">
              Building knowledge step by step, ensuring strong foundations before advancing to complex topics.
            </p>
          </div>
          <div class="text-center group">
            <div class="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
              <TrophyOutlined class="text-white text-4xl" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Exam Excellence</h3>
            <p class="text-gray-600 leading-relaxed">
              Strategic preparation for exams with practice tests, time management, and confidence building.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Subjects Section -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Subjects I Teach
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tutoring in core subjects with personalized attention to your learning needs.
          </p>
        </div>
        <div class="grid md:grid-cols-2 gap-12">
          <div class="bg-white p-8 rounded-2xl shadow-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">Mathematics</h3>
            <ul class="list-disc pl-5 text-gray-700 dark:text-primary-200 space-y-2">
              <li>Algebra, Geometry, Trigonometry</li>
              <li>Calculus &amp; Pre-Calculus</li>
              <li>Statistics &amp; Probability</li>
              <li>Math Olympiad Prep</li>
            </ul>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">Physics</h3>
            <ul class="list-disc pl-5 text-gray-700 dark:text-primary-200 space-y-2">
              <li>Mechanics, Waves, Thermodynamics</li>
              <li>Electricity &amp; Magnetism</li>
              <li>Modern Physics</li>
              <li>Physics Olympiad Prep</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Class Options -->
    <section class="class-options-section bg-white py-24 px-4 dark:bg-gray-900 dark:text-primary-100">
      <div class="w-full max-w-7xl mx-auto">
        <h2 class="text-center text-4xl font-bold mb-8 text-gray-900">Flexible Learning Options</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-16">
          <div class="bg-gray-100 p-12 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-center mb-6">
              <HomeOutlined class="text-5xl text-blue-500" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">In-Person Classes</h3>
            <p class="text-gray-700 dark:text-primary-200 mb-6">Face-to-face learning in a comfortable environment with direct interaction and immediate feedback.</p>
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
            <div class="bg-white p-8 rounded-xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <span class="block text-2xl font-bold text-blue-600">৳800-1200</span>
              <span class="block text-gray-700 text-lg dark:text-primary-200">per session</span>
            </div>
          </div>
          <div class="bg-gray-100 p-12 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-center mb-6">
              <LaptopOutlined class="text-5xl text-blue-500" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">Online Classes</h3>
            <p class="text-gray-700 dark:text-primary-200 mb-6">Learn from anywhere with high-quality video sessions, digital tools, and flexible scheduling.</p>
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
            <div class="bg-white p-8 rounded-xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <span class="block text-2xl font-bold text-blue-600">৳600-1000</span>
              <span class="block text-gray-700 text-lg dark:text-primary-200">per session</span>
            </div>
          </div>
          <div class="bg-gray-100 p-12 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-center mb-6">
              <TeamOutlined class="text-5xl text-blue-500" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">Group Classes</h3>
            <p class="text-gray-700 dark:text-primary-200 mb-6">Learn with peers in small groups, encouraging discussion and collaborative problem-solving.</p>
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
            <div class="bg-white p-8 rounded-xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <span class="block text-2xl font-bold text-blue-600">৳400-600</span>
              <span class="block text-gray-700 text-lg dark:text-primary-200">per session</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule -->
    <section class="schedule-section bg-gray-100 py-24 px-4 dark:bg-gray-900 dark:text-primary-100">
      <div class="w-full max-w-7xl mx-auto">
        <h2 class="text-center text-4xl font-bold mb-8 text-gray-900">Class Schedule</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-16">
          <div class="bg-white p-12 rounded-2xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">Weekdays</h3>
            <div class="flex flex-col gap-4 mb-6">
              <div class="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                <ClockCircleOutlined class="text-blue-500 text-2xl" />
                <span class="text-gray-700 dark:text-primary-200">4:00 PM - 6:00 PM</span>
              </div>
              <div class="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                <ClockCircleOutlined class="text-blue-500 text-2xl" />
                <span class="text-gray-700 dark:text-primary-200">7:00 PM - 9:00 PM</span>
              </div>
            </div>
            <p class="text-gray-700 dark:text-primary-200 italic">Perfect for after-school learning</p>
          </div>
          <div class="bg-white p-12 rounded-2xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <h3 class="text-2xl font-semibold mb-4 text-gray-900">Weekends</h3>
            <div class="flex flex-col gap-4 mb-6">
              <div class="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                <ClockCircleOutlined class="text-blue-500 text-2xl" />
                <span class="text-gray-700 dark:text-primary-200">10:00 AM - 12:00 PM</span>
              </div>
              <div class="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                <ClockCircleOutlined class="text-blue-500 text-2xl" />
                <span class="text-gray-700 dark:text-primary-200">2:00 PM - 4:00 PM</span>
              </div>
              <div class="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                <ClockCircleOutlined class="text-blue-500 text-2xl" />
                <span class="text-gray-700 dark:text-primary-200">5:00 PM - 7:00 PM</span>
              </div>
            </div>
            <p class="text-gray-700 dark:text-primary-200 italic">Extended sessions available</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="testimonials-section bg-white py-24 px-4 dark:bg-gray-900 dark:text-primary-100">
      <div class="w-full max-w-7xl mx-auto">
        <h2 class="text-center text-4xl font-bold mb-8 text-gray-900">Student Success Stories</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-16">
          <div class="bg-gray-100 p-12 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500 dark:bg-gray-800 dark:border-gray-700">
            <div class="testimonial-content">
              <p class="text-gray-700 dark:text-primary-200 italic">"Mehedi sir made calculus so easy to understand! His step-by-step approach helped me improve my grades from C to A+."</p>
            </div>
            <div class="testimonial-author flex justify-between items-center">
              <div class="author-info">
                <h4 class="text-2xl font-semibold mb-2 text-gray-900">Sarah Ahmed</h4>
                <span class="text-gray-700 text-lg dark:text-primary-200">HSC Student</span>
              </div>
              <div class="testimonial-rating">
                <a-rate :value="5" disabled />
              </div>
            </div>
          </div>
          <div class="bg-gray-100 p-12 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500 dark:bg-gray-800 dark:border-gray-700">
            <div class="testimonial-content">
              <p class="text-gray-700 dark:text-primary-200 italic">"The physics concepts that seemed impossible before are now crystal clear. Thank you for your patience and excellent teaching!"</p>
            </div>
            <div class="testimonial-author flex justify-between items-center">
              <div class="author-info">
                <h4 class="text-2xl font-semibold mb-2 text-gray-900">Rafiq Hassan</h4>
                <span class="text-gray-700 text-lg dark:text-primary-200">University Student</span>
              </div>
              <div class="testimonial-rating">
                <a-rate :value="5" disabled />
              </div>
            </div>
          </div>
          <div class="bg-gray-100 p-12 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500 dark:bg-gray-800 dark:border-gray-700">
            <div class="testimonial-content">
              <p class="text-gray-700 dark:text-primary-200 italic">"Online classes were so convenient and effective. The digital whiteboard made complex problems easy to follow."</p>
            </div>
            <div class="testimonial-author flex justify-between items-center">
              <div class="author-info">
                <h4 class="text-2xl font-semibold mb-2 text-gray-900">Fatima Khan</h4>
                <span class="text-gray-700 text-lg dark:text-primary-200">SSC Student</span>
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
    <section class="cta-section bg-gradient-to-br from-blue-400 to-cyan-300 text-white text-center py-24 px-4 dark:from-gray-900 dark:to-gray-800 dark:text-primary-100">
      <div class="w-full max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold mb-4 text-white">Ready to Excel in Your Studies?</h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto dark:text-primary-200">Join hundreds of successful students who have achieved their academic goals with personalized tutoring.</p>
        <div class="flex flex-wrap justify-center gap-8 mb-8">
          <a-button type="primary" size="large" @click="$router.push('/contact')" class="text-white bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 dark:border-blue-700 dark:hover:border-blue-800">
            <MessageOutlined class="mr-2" /> Book a Free Trial Class
          </a-button>
          <a-button size="large" @click="scrollToSchedule" class="text-white bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 dark:border-blue-700 dark:hover:border-blue-800">
            <CalendarOutlined class="mr-2" /> View Schedule
          </a-button>
        </div>
        <div class="flex justify-center items-center gap-4 text-white text-lg opacity-90 dark:text-primary-200">
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