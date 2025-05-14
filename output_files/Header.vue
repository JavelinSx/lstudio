<template>
  <header :class="[
    'fixed top-0 left-0 w-full z-50 transition-all duration-300',
    scrolled ? 'bg-primary shadow-lg py-2' : 'bg-transparent py-4'
  ]">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <!-- Логотип -->
        <div class="flex items-center">
          <img :class="[
            'h-10 mr-3 transition-all duration-300',
            scrolled ? 'opacity-100' : 'opacity-90'
          ]" :src="cutHairIcon" alt="Л-Студия">
          <h1 class="text-xl font-heading font-medium transition-all duration-300 text-light">
            Л-Студия
          </h1>
        </div>

        <!-- Навигация для десктопов -->
        <nav class="hidden md:block">
          <ul class="flex space-x-8">
            <li v-for="item in menuItems" :key="item.href">
              <a :href="item.href" :class="[
                'nav-link font-medium text-base',
                scrolled ? 'text-dark hover:text-primary' : 'text-light hover:text-white'
              ]" @click="item.href.startsWith('#') && handleNavClick($event, item.href)">
                {{ item.text }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Кнопка для VK на десктопах -->
        <a href="https://vk.com/id560785882" target="_blank" rel="noreferrer" :class="[
          'hidden md:flex items-center btn-sm transition-all duration-300',
          scrolled ? 'btn-primary' : 'btn-outline border-white text-white hover:bg-white hover:text-primary'
        ]">
          <span class="mr-1">Запись</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-calendar2-check" viewBox="0 0 16 16">
            <path
              d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
            <path
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
          </svg>
        </a>

        <!-- Гамбургер для мобильных -->
        <button :class="[
          'hamburger md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-[51]',
          isMenuOpen ? 'active' : ''
        ]" @click="toggleMenu" aria-label="Открыть меню">
          <span class="hamburger-line mb-1.5 "></span>
          <span class="hamburger-line mb-1.5 "></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>

    <!-- Мобильное меню -->
    <div :class="[
      'fixed top-0 inset-0 bg-dark bg-opacity-100 z-50 transition-all duration-300 md:hidden h-max-[80vh]',
      isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    ]">
      <div class="container mx-auto px-4 py-8">
        <nav>
          <ul class="flex flex-col space-y-4">
            <li v-for="item in menuItems" :key="item.href" data-aos="fade-right" data-aos-delay="100"
              data-aos-anchor=".mobile-menu" class="mobile-menu-item">
              <a :href="item.href" class="text-light hover:text-primary text-xl block py-2"
                @click="handleMobileNavClick($event, item.href)">
                {{ item.text }}
              </a>
            </li>
            <li data-aos="fade-right" data-aos-delay="300" class="pt-4">
              <a href="https://vk.com/id560785882" target="_blank" rel="noreferrer"
                class="btn btn-primary inline-flex items-center">
                <span class="mr-2">Запись</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-calendar2-check" viewBox="0 0 16 16">
                  <path
                    d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                  <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import cutHairIcon from '@/assets/images/icon/hair-cut.svg'

const isMenuOpen = ref(false)
const scrolled = ref(false)

const menuItems = [
  { href: '#hero', text: 'Главная' },
  { href: '#about', text: 'О студии' },
  { href: '#examples', text: 'Примеры работ' },
  { href: '#services', text: 'Услуги' },
  { href: '#price', text: 'Прайс' },
  { href: '#contact', text: 'Контакты' }
]

// Функция для закрытия меню при выборе пункта в мобильной версии
const handleMobileNavClick = (event: MouseEvent, anchor: string) => {
  if (anchor.startsWith('#')) {
    event.preventDefault()
    const targetElement = document.querySelector(anchor)
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    isMenuOpen.value = false
  }
}

// Функция для плавного скролла в десктопной версии
const handleNavClick = (event: MouseEvent, anchor: string) => {
  event.preventDefault()
  const targetElement = document.querySelector(anchor)
  if (targetElement) {
    const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Фиксация хедера при скролле
const checkScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll() // Проверяем при загрузке
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.btn-sm {
  @apply px-4 py-1.5 rounded text-sm font-medium;
}

.mobile-menu-item {
  transform: translateX(-20px);
  opacity: 0;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.mobile-menu-item.aos-animate {
  transform: translateX(0);
  opacity: 1;
}
</style>
