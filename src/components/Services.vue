<template>
  <section id="services"
    class="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
    <!-- Декоративные элементы -->
    <div class="absolute -right-32 -bottom-16 w-96 h-96 rounded-full bg-primary opacity-5 parallax-bg"></div>

    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="section-title" data-aos="fade-up">Наши услуги</h2>
        <p class="max-w-2xl mx-auto text-muted" data-aos="fade-up" data-aos-delay="100">
          Предоставляем полный спектр парикмахерских услуг с использованием профессиональных материалов
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Карточка услуги -->
        <div v-for="(service, index) in services" :key="service.id"
          class="card p-6 text-center group hover:border-primary transition-all duration-300 border-2 border-transparent"
          data-aos="fade-up" :data-aos-delay="100 + (index * 50)">
          <div
            class="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <svg v-if="service.id === 'haircut'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>

            <svg v-else-if="service.id === 'coloring'" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.172 2.172a2 2 0 010 2.828l-8.486 8.486a2 2 0 01-2.828 0l-2.172-2.172a2 2 0 010-2.828L7.344 12.5M11 7.343l8.457 8.457" />
            </svg>

            <svg v-else-if="service.id === 'highlighting'" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>

            <svg v-else-if="service.id === 'toning'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>

            <svg v-else-if="service.id === 'blond'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>

            <svg v-else-if="service.id === 'styling'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-medium mb-4">{{ service.title }}</h3>
          <p class="text-muted mb-6">{{ service.description }}</p>
          <p class="text-primary font-medium">От {{ service.price }} ₽</p>
        </div>
      </div>

      <!-- Особенности услуг -->
      <div class="mt-16 bg-white shadow-lg rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="300">
        <div class="grid md:grid-cols-2 lg:grid-cols-4">
          <div v-for="(feature, index) in features" :key="index"
            class="p-6 text-center hover:bg-primary hover:text-white transition-all duration-300" data-aos="fade-up"
            :data-aos-delay="400 + (index * 100)">
            <div class="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <svg v-if="feature.id === 'master'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>

              <svg v-else-if="feature.id === 'materials'" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              <svg v-else-if="feature.id === 'individual'" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>

              <svg v-else-if="feature.id === 'comfort'" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h4 class="text-lg font-medium mb-2">{{ feature.title }}</h4>
            <p class="text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- Призыв к действию -->
      <div class="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
        <p class="text-lg mb-6">Готовы преобразиться? Запишитесь на консультацию или сразу на услугу.</p>
        <a href="#contact" class="btn btn-primary">Записаться сейчас</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Услуги с иконками и ценами
const services = [
  {
    id: 'haircut',
    title: 'Стрижка',
    description: 'Профессиональная стрижка с учетом особенностей лица и структуры волос',
    price: '600'
  },
  {
    id: 'coloring',
    title: 'Окрашивание',
    description: 'Качественное окрашивание с подбором оттенка и сохранением здоровья волос',
    price: '1000'
  },
  {
    id: 'highlighting',
    title: 'Мелирование',
    description: 'Различные техники мелирования для создания объема и игры цвета',
    price: '1400'
  },
  {
    id: 'toning',
    title: 'Тонирование',
    description: 'Деликатное тонирование для придания волосам нужного оттенка',
    price: '800'
  },
  {
    id: 'blond',
    title: 'Окрашивание блонд',
    description: 'Профессиональное осветление с минимальным повреждением волос',
    price: '2000'
  },
  {
    id: 'styling',
    title: 'Причёска/укладка',
    description: 'Создание прически для особого случая или повседневной укладки',
    price: '1500'
  }
]

// Особенности услуг
const features = [
  {
    id: 'master',
    title: 'Опытный мастер',
    description: 'Профессионал своего дела с многолетним опытом работы'
  },
  {
    id: 'materials',
    title: 'Качественные материалы',
    description: 'Используем только профессиональную косметику для волос'
  },
  {
    id: 'individual',
    title: 'Индивидуальный подход',
    description: 'Подбираем стиль с учетом особенностей внешности'
  },
  {
    id: 'comfort',
    title: 'Комфортная атмосфера',
    description: 'Уютный салон, где вы почувствуете себя желанным гостем'
  }
]
</script>

<style scoped>
/* Плавный переход при наведении для карточек услуг */
.card {
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
