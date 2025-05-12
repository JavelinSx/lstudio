<template>
  <section id="examples" class="bg-white py-16 md:py-20 lg:py-24 relative">
    <!-- Декоративный элемент -->
    <div class="absolute -left-16 top-20 w-64 h-64 rounded-full bg-primary opacity-5 parallax-bg"></div>

    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="section-title" data-aos="fade-up">Примеры работ</h2>
        <p class="max-w-2xl mx-auto text-muted" data-aos="fade-up" data-aos-delay="100">
          Ознакомьтесь с моими работами, чтобы убедиться в профессионализме и качестве услуг
        </p>
      </div>

      <!-- Фильтр категорий -->
      <div class="flex flex-wrap justify-center gap-4 mb-10" data-aos="fade-up" data-aos-delay="200">
        <button v-for="category in categories" :key="category.id" @click="setActiveCategory(category.id)" :class="[
          'px-4 py-2 rounded-full transition-all duration-300',
          activeCategory === category.id
            ? 'bg-primary text-white shadow-button'
            : 'bg-gray-100 text-dark hover:bg-gray-200'
        ]">
          {{ category.name }}
        </button>
      </div>

      <!-- Галерея работ -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(tab, index) in filteredTabs" :key="index" class="group" data-aos="fade-up"
          :data-aos-delay="150 + (index * 50)">
          <div class="card overflow-hidden cursor-pointer" @click="openGallery(tab.images, 0)">
            <div class="relative overflow-hidden">
              <img :src="tab.images[0]" :alt="tab.title"
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
              <div
                class="absolute inset-0 bg-primary bg-opacity-0 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-30">
                <div
                  class="opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <div class="bg-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                      class="bi bi-search text-primary" viewBox="0 0 16 16">
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-medium">{{ tab.title }}</h3>
              <p class="text-muted mt-1 text-sm">{{ tab.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Лайтбокс для просмотра изображений -->
    <div v-if="isGalleryOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      @click="closeGallery">
      <div class="relative w-full max-w-4xl" @click.stop>
        <button
          class="absolute top-4 right-4 z-50 bg-white rounded-full p-2 text-dark hover:text-primary transition-colors duration-300"
          @click="closeGallery">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-lg"
            viewBox="0 0 16 16">
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>

        <div class="overflow-hidden rounded-lg">
          <img :src="currentImages[currentImageIndex]" alt="Просмотр работы" class="max-h-[80vh] w-auto mx-auto">
        </div>

        <!-- Навигационные кнопки -->
        <button
          class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 text-dark hover:text-primary transition-colors duration-300"
          @click.stop="prevImage">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-left"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
        </button>

        <button
          class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 text-dark hover:text-primary transition-colors duration-300"
          @click.stop="nextImage">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-right"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>

        <!-- Индикатор фото -->
        <div
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-full">
          {{ currentImageIndex + 1 }} / {{ currentImages.length }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Импорт изображений
import hairCut1 from '@/assets/images/haircut1.webp'
import hairCut2 from '@/assets/images/haircut2.webp'
import hairCut3 from '@/assets/images/haircut3.webp'
import blondColoring1 from '@/assets/images/coloring-blond1.webp'
import blondColoring2 from '@/assets/images/coloring-blond2.webp'
import blondColoring3 from '@/assets/images/coloring-blond3.webp'
import blondColoring4 from '@/assets/images/okrash1.jpg'
import blondColoring5 from '@/assets/images/okrash2.jpg'
import doubleColoring1 from '@/assets/images/double-coloring1.webp'
import doubleColoring2 from '@/assets/images/double-coloring2.webp'
import doubleColoring3 from '@/assets/images/double-coloring3.webp'
import hairstyle1 from '@/assets/images/hairstyle1.webp'
import hairstyle2 from '@/assets/images/hairstyle2.webp'
import hairstyle3 from '@/assets/images/hairstyle3.webp'
import melir1 from '@/assets/images/melir1.jpg'
import melir2 from '@/assets/images/melir2.jpg'
import melir3 from '@/assets/images/melir3.jpg'
import melir4 from '@/assets/images/melir4.jpg'
import melir5 from '@/assets/images/melir5.jpg'
import melir6 from '@/assets/images/melir6.jpg'
import ton1 from '@/assets/images/ton1.jpg'
import ton2 from '@/assets/images/ton2.jpg'
import ton3 from '@/assets/images/ton3.jpg'
import ton4 from '@/assets/images/ton4.jpg'
import ton5 from '@/assets/images/ton5.jpg'
import tonir1 from '@/assets/images/tonir1.jpg'
import tonir2 from '@/assets/images/tonir2.jpg'
import tonir3 from '@/assets/images/tonir3.jpg'
import tonir4 from '@/assets/images/tonir4.jpg'
import tonir5 from '@/assets/images/tonir5.jpg'

// Категории работ
const categories = [
  { id: 'all', name: 'Все работы' },
  { id: 'haircuts', name: 'Стрижки' },
  { id: 'coloring', name: 'Окрашивание' },
  { id: 'styling', name: 'Укладки' }
]

// Активная категория
const activeCategory = ref('all')

// Вкладки с работами
const tabs = [
  {
    id: 'haircuts',
    title: 'Стрижки',
    description: 'Современные стрижки для любого типа волос',
    images: [hairCut1, hairCut2, hairCut3],
    category: 'haircuts'
  },
  {
    id: 'blond',
    title: 'Окрашивание блонд',
    description: 'Различные техники для идеального блонда',
    images: [blondColoring1, blondColoring2, blondColoring3, blondColoring4, blondColoring5],
    category: 'coloring'
  },
  {
    id: 'double',
    title: 'Двойное окрашивание',
    description: 'Креативные решения для смелых клиентов',
    images: [doubleColoring1, doubleColoring2, doubleColoring3],
    category: 'coloring'
  },
  {
    id: 'hairstyles',
    title: 'Причёски и укладки',
    description: 'Элегантные укладки для особых случаев',
    images: [hairstyle1, hairstyle2, hairstyle3],
    category: 'styling'
  },
  {
    id: 'melir',
    title: 'Мелирование',
    description: 'Придание объема и игры цвета',
    images: [melir1, melir2, melir3, melir4, melir5, melir6],
    category: 'coloring'
  },
  {
    id: 'toning',
    title: 'Тонирование',
    description: 'Мягкие натуральные оттенки',
    images: [tonir1, tonir2, tonir3, tonir4, tonir5],
    category: 'coloring'
  },
  {
    id: 'single',
    title: 'Окрашивание в один тон',
    description: 'Глубокий насыщенный цвет',
    images: [ton1, ton2, ton3, ton4, ton5],
    category: 'coloring'
  }
]

// Фильтрация вкладок по категории
const filteredTabs = computed(() => {
  if (activeCategory.value === 'all') {
    return tabs
  }
  return tabs.filter(tab => tab.category === activeCategory.value)
})

// Установка активной категории
const setActiveCategory = (categoryId: string) => {
  activeCategory.value = categoryId
}

// Состояние галереи
const isGalleryOpen = ref(false)
const currentImages = ref<string[]>([])
const currentImageIndex = ref(0)

// Открытие галереи
const openGallery = (images: string[], index: number) => {
  currentImages.value = images
  currentImageIndex.value = index
  isGalleryOpen.value = true

  // Блокируем прокрутку страницы
  document.body.style.overflow = 'hidden'
}

// Закрытие галереи
const closeGallery = () => {
  isGalleryOpen.value = false

  // Разблокируем прокрутку страницы
  document.body.style.overflow = ''
}

// Переход к предыдущему изображению
const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + currentImages.value.length) % currentImages.value.length
}

// Переход к следующему изображению
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % currentImages.value.length
}

// Обработка клавиш для навигации
const handleKeyDown = (event: KeyboardEvent) => {
  if (!isGalleryOpen.value) return

  if (event.key === 'ArrowLeft') {
    prevImage()
  } else if (event.key === 'ArrowRight') {
    nextImage()
  } else if (event.key === 'Escape') {
    closeGallery()
  }
}

// Добавление и удаление обработчика клавиш
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
/* Дополнительные стили для галереи */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
