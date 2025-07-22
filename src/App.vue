<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { MenuOutlined } from '@ant-design/icons-vue'

const router = useRouter()
const route = useRoute()
const collapsed = ref(false)
const selectedKeys = computed(() => [route.path])

const menuItems = [
  { key: '/', label: 'Home', icon: 'home' },
  { key: '/tuition', label: 'Tuition', icon: 'book' },
  { key: '/portfolio', label: 'Portfolio', icon: 'project' },
  { key: '/contact', label: 'Contact', icon: 'mail' }
]

const handleMenuClick = (key: string) => {
  router.push(key)
}
</script>

<template>
  <a-layout class="layout">
    <!-- Header -->
    <a-layout-header class="header">
      <div class="logo">
        <h2>Mehedi Hasan Shadin</h2>
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="horizontal"
        theme="dark"
        class="menu"
        @click="({ key }) => handleMenuClick(key)"
      >
        <a-menu-item v-for="item in menuItems" :key="item.key">
          {{ item.label }}
        </a-menu-item>
      </a-menu>
    </a-layout-header>

    <!-- Content -->
    <a-layout-content class="content">
      <router-view />
    </a-layout-content>

    <!-- Footer -->
    <a-layout-footer class="footer">
      <div class="footer-content">
        <p>&copy; 2025 Mehedi Hasan Shadin. All rights reserved.</p>
        <div class="social-links">
          <a-space>
            <a href="#" target="_blank">LinkedIn</a>
            <a href="#" target="_blank">GitHub</a>
            <a href="#" target="_blank">Behance</a>
          </a-space>
        </div>
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  padding: 0 50px;
  background: #001529;
}

.logo h2 {
  color: white;
  margin: 0;
  margin-right: 50px;
  font-weight: 600;
  letter-spacing: 1px;
}

.menu {
  flex: 1;
  border: none;
}

.content {
  padding: 0;
  background: #fff;
}

.footer {
  text-align: center;
  background: #f0f2f5;
  padding: 24px 50px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.social-links a {
  color: #1890ff;
  text-decoration: none;
}

.social-links a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .header {
    padding: 0 20px;
  }
  
  .logo h2 {
    font-size: 16px;
    margin-right: 20px;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
