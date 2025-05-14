<template>
  <section id="price" class="py-16 md:py-20 lg:py-24 bg-light relative overflow-hidden">
    <!-- Декоративные элементы -->
    <div class="absolute -left-16 top-40 w-64 h-64 rounded-full bg-accent opacity-5 parallax-bg"></div>
    <div class="absolute right-0 bottom-20 w-96 h-96 rounded-full bg-primary opacity-5 parallax-bg"></div>

    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="section-title" data-aos="fade-up">Прайс-лист</h2>
        <p class="max-w-2xl mx-auto text-muted" data-aos="fade-up" data-aos-delay="100">
          Доступные цены и отличное качество — наше преимущество
        </p>
      </div>

      <div class="flex flex-wrap -mx-4">
        <!-- Левая колонка прайса -->
        <div class="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
          <div class="bg-white rounded-lg shadow-card p-6 h-full" data-aos="fade-right" data-aos-delay="200">
            <h3 class="text-xl font-medium mb-6 text-primary pb-2 border-b border-gray-200">Стрижки и укладки</h3>

            <div class="space-y-4">
              <div v-for="(item, index) in priceListLeft" :key="index" class="service-item">
                <div class="flex items-start" data-aos="fade-right" :data-aos-delay="300 + (index * 50)">
                  <span class="font-medium">{{ item.service }}</span>
                </div>
                <div class="flex items-center" data-aos="fade-left" :data-aos-delay="300 + (index * 50)">
                  <span class="text-primary font-bold whitespace-nowrap">от {{ item.price }} ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Правая колонка прайса -->
        <div class="w-full lg:w-1/2 px-4">
          <div class="bg-white rounded-lg shadow-card p-6 h-full" data-aos="fade-left" data-aos-delay="200">
            <h3 class="text-xl font-medium mb-6 text-primary pb-2 border-b border-gray-200">Окрашивание</h3>

            <div class="space-y-4">
              <div v-for="(item, index) in priceListRight" :key="index" class="service-item">
                <div class="flex items-start" data-aos="fade-right" :data-aos-delay="300 + (index * 50)">
                  <span class="font-medium">{{ item.service }}</span>
                </div>
                <div class="flex items-center" data-aos="fade-left" :data-aos-delay="300 + (index * 50)">
                  <span class="text-primary font-bold whitespace-nowrap">от {{ item.price }} ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Примечание к прайсу -->
      <div class="mt-10 bg-primary bg-opacity-10 p-4 rounded-lg text-center" data-aos="fade-up" data-aos-delay="400">
        <p class="text-muted">
          * Окончательная стоимость услуг определяется после консультации с мастером и зависит от длины, густоты волос и
          сложности работы.
        </p>
      </div>

      <!-- Карточки акций -->
      <div class="mt-16">
        <h3 class="text-2xl font-medium text-center mb-8" data-aos="fade-up" data-aos-delay="500">Специальные
          предложения</h3>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            class="bg-white rounded-lg shadow-card overflow-hidden transition-transform duration-500 hover:transform hover:scale-105"
            data-aos="fade-up" data-aos-delay="600">
            <div class="bg-primary text-white p-4 text-center">
              <h4 class="text-lg font-medium">Скидка новым клиентам</h4>
            </div>
            <div class="p-6">
              <p class="mb-4">Скидка 10% на первое посещение нашей студии на любую услугу.</p>
              <p class="text-primary font-medium">Срок действия: постоянно</p>
            </div>
          </div>

          <div
            class="bg-white rounded-lg shadow-card overflow-hidden transition-transform duration-500 hover:transform hover:scale-105"
            data-aos="fade-up" data-aos-delay="700">
            <div class="bg-primary text-white p-4 text-center">
              <h4 class="text-lg font-medium">Комплексное предложение</h4>
            </div>
            <div class="p-6">
              <p class="mb-4">Стрижка + окрашивание = скидка 15% на окрашивание</p>
              <p class="text-primary font-medium">Выгода до 300 ₽</p>
            </div>
          </div>

          <div
            class="bg-white rounded-lg shadow-card overflow-hidden transition-transform duration-500 hover:transform hover:scale-105 md:col-span-2 lg:col-span-1"
            data-aos="fade-up" data-aos-delay="800">
            <div class="bg-primary text-white p-4 text-center">
              <h4 class="text-lg font-medium">Приведи подругу</h4>
            </div>
            <div class="p-6">
              <p class="mb-4">Приведи подругу и получи скидку 15% на следующее посещение</p>
              <p class="text-primary font-medium">Акция действует для всех услуг</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Распределяем услуги по категориям
const priceListLeft = computed(() => {
  return [
    { service: 'Стрижка', price: '600' },
    { service: 'Мужская стрижка', price: '400' },
    { service: 'Подравнивание кончиков', price: '400' },
    { service: 'Стрижка челки', price: '200' },
    { service: 'Причёска/укладка', price: '1500' },
    { service: 'Биозавивка', price: '1500' },
    { service: 'Мытье волос', price: '100' },
    { service: 'Уход', price: '200' }
  ]
})

const priceListRight = computed(() => {
  return [
    { service: 'Окрашивание в один тон', price: '1000' },
    { service: 'Окрашивание блонд', price: '2000' },
    { service: 'Мелирование', price: '1400' },
    { service: 'Тонирование', price: '800' },
    { service: 'Двойное окрашивание', price: '1500' },
    { service: 'Скрытое окрашивание', price: '1000' },
    { service: 'Колорирование', price: '1500' },
    { service: 'Окрашивание бровей', price: '300' }
  ]
})
</script>

<style scoped>
/* Эффект при наведении на карточки акций */
.card-special {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-special:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

/* Стилизация элементов прайс-листа */
.service-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px dashed rgba(60, 110, 113, 0.2);
}

.service-item:last-child {
  border-bottom: none;
}
</style>
