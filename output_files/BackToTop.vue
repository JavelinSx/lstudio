<template>
  <div v-show="showButton" class="fixed bottom-8 right-8 z-50 opacity-0 transition-all duration-300"
    :class="{ 'opacity-100': showButton }" @click="scrollToTop">
    <button
      class="w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-accent hover:transform hover:scale-110"
      aria-label="Прокрутить наверх">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-up"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const showButton = ref(false)

// Проверка, нужно ли показывать кнопку
const checkScroll = () => {
  showButton.value = window.scrollY > 300
}

// Плавный скролл наверх
const scrollToTop = () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: 0,
    ease: 'power2.inOut'
  })
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
/* Анимация при показе/скрытии кнопки */
.opacity-0 {
  transform: translateY(20px);
}

.opacity-100 {
  transform: translateY(0);
}
</style>
