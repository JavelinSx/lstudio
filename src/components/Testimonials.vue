<template>
  <section class="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <!-- Декоративные элементы -->
    <div class="absolute -left-32 -bottom-16 w-96 h-96 rounded-full bg-primary opacity-5 parallax-bg"></div>

    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="section-title" data-aos="fade-up">Отзывы клиентов</h2>
        <p class="max-w-2xl mx-auto text-muted" data-aos="fade-up" data-aos-delay="100">
          Что говорят о нас наши довольные клиенты
        </p>
      </div>

      <div class="relative" data-aos="fade-up" data-aos-delay="200">
        <swiper :modules="modules" :slides-per-view="slidesPerView" :space-between="30"
          :pagination="{ clickable: true }" :autoplay="{ delay: 5000, disableOnInteraction: false }" :loop="true">
          <swiper-slide v-for="(testimonial, index) in testimonials" :key="index" class="pb-12">
            <div class="bg-white rounded-lg shadow-card p-6 h-full">
              <div class="flex items-center mb-4">
                <div class="flex text-primary">
                  <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                    :class="i <= testimonial.rating ? 'text-primary' : 'text-gray-300'" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span class="ml-2 text-muted text-sm">{{ testimonial.date }}</span>
              </div>

              <blockquote class="mb-4 italic text-muted">
                "{{ testimonial.text }}"
              </blockquote>

              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                  {{ testimonial.name.charAt(0) }}
                </div>
                <div class="ml-3">
                  <h4 class="font-medium">{{ testimonial.name }}</h4>
                  <p class="text-sm text-muted">{{ testimonial.service }}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Статистика -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="(stat, index) in statistics" :key="index" class="text-center" data-aos="fade-up"
          :data-aos-delay="300 + (index * 100)">
          <div class="text-4xl font-bold text-primary mb-2">{{ stat.value }}</div>
          <div class="text-muted">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { gsap } from 'gsap'

// Компоненты Swiper
const modules = [Pagination, Autoplay]

// Адаптивное количество слайдов
const slidesPerView = computed(() => {
  if (window.innerWidth < 768) {
    return 1
  } else if (window.innerWidth < 1024) {
    return 2
  } else {
    return 3
  }
})

// Обновление количества слайдов при изменении размера окна
const handleResize = () => {
  slidesPerView.value
}

onMounted(() => {
  window.addEventListener('resize', handleResize)

  // Анимация счетчиков
  gsap.from('.counter', {
    textContent: 0,
    duration: 2,
    ease: 'power1.out',
    snap: { textContent: 1 },
    stagger: 0.25,
    scrollTrigger: {
      trigger: '.statistics',
      start: 'top 80%',
    },
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// Отзывы клиентов
const testimonials = [
  {
    name: 'Анна К.',
    text: 'Хожу к Елене уже больше года. Всегда получаю именно то, что хочу. Мастер не только профессионал своего дела, но и очень приятный человек. Рекомендую!',
    rating: 5,
    date: '15.03.2025',
    service: 'Окрашивание блонд'
  },
  {
    name: 'Мария С.',
    text: 'Делала двойное окрашивание, результат просто потрясающий! Елена дала много советов по уходу за волосами и подобрала идеальные оттенки.',
    rating: 5,
    date: '02.02.2025',
    service: 'Двойное окрашивание'
  },
  {
    name: 'Ольга Д.',
    text: 'Была на стрижке и укладке для особого случая. Очень довольна результатом, прическа продержалась весь день! Приятная атмосфера и профессиональный подход.',
    rating: 5,
    date: '20.01.2025',
    service: 'Стрижка и укладка'
  },
  {
    name: 'Екатерина М.',
    text: 'Восстанавливала волосы после неудачного окрашивания. Елена буквально спасла мои волосы! Теперь только к ней.',
    rating: 5,
    date: '10.12.2024',
    service: 'Восстановление волос'
  },
  {
    name: 'Наталья В.',
    text: 'Делала мелирование, очень боялась, так как волосы тонкие. Результат превзошел ожидания! Волосы выглядят здоровыми и объемными.',
    rating: 5,
    date: '05.11.2024',
    service: 'Мелирование'
  },
  {
    name: 'Ирина Л.',
    text: 'Прекрасное место с душевной атмосферой. Мастер всегда готов дать профессиональный совет и качественно выполнить работу.',
    rating: 5,
    date: '15.10.2024',
    service: 'Стрижка'
  }
]

// Статистика
const statistics = [
  { value: '5+', label: 'Лет опыта' },
  { value: '1000+', label: 'Довольных клиентов' },
  { value: '7', label: 'Видов услуг' },
  { value: '100%', label: 'Положительных отзывов' }
]
</script>

<style scoped>
/* Стили для карточек отзывов */
.swiper-slide {
  height: auto !important;
}

blockquote {
  position: relative;
  padding-left: 20px;
}

blockquote::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #3C6E71, transparent);
  border-radius: 4px;
}

/* Анимация статистики */
.statistics {
  position: relative;
}

.statistics::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: #3C6E71;
  border-radius: 3px;
}
</style>
