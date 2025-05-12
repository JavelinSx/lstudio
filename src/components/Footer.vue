<template>
  <footer class="bg-dark text-white pt-16 pb-6">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-10">
        <!-- Логотип и информация -->
        <div>
          <div class="flex items-center mb-6">
            <img class="h-10 mr-3" :src="cutHairIcon" alt="Л-Студия">
            <h3 class="text-xl font-heading font-medium text-white">Л-Студия</h3>
          </div>
          <p class="text-gray-400 mb-6">
            Студия красоты с профессиональным подходом к каждому клиенту.
            Мы стремимся сделать вас не просто красивыми, а счастливыми.
          </p>
          <div class="flex space-x-4">
            <a href="https://vk.com/id560785882" target="_blank" rel="noreferrer"
              class="bg-primary bg-opacity-20 hover:bg-opacity-100 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                  d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Ссылки -->
        <div>
          <h4 class="text-lg font-medium mb-6 text-white">Навигация</h4>
          <ul class="space-y-3">
            <li v-for="(item, index) in menuLinks" :key="index">
              <a :href="item.href"
                class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Контакты -->
        <div>
          <h4 class="text-lg font-medium mb-6 text-white">Контакты</h4>
          <div class="space-y-4">
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <a href="tel:89626653341" class="text-gray-400 hover:text-white transition-colors duration-300">
                  8 (962) 665-33-41
                </a>
              </div>
            </div>

            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div class="text-gray-400">
                п.Плесецк, ул. Кооперативная 4Б, 3 этаж, офис 21
              </div>
            </div>

            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div class="text-gray-400">
                Пн-Пт: 9:00 - 20:00<br>
                Сб: 10:00 - 18:00<br>
                Вс: по записи
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-12 pt-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 Л-Студия. Все права защищены.
          </p>
          <div class="text-gray-500 text-sm">
            Made with ❤️ in Плесецк
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import cutHairIcon from '@/assets/images/icon/hair-cut.svg'

// Ссылки для навигации
const menuLinks = [
  { href: '#hero', text: 'Главная' },
  { href: '#about', text: 'О студии' },
  { href: '#examples', text: 'Примеры работ' },
  { href: '#services', text: 'Услуги' },
  { href: '#price', text: 'Прайс' },
  { href: '#contact', text: 'Контакты' }
]
</script>

<style scoped>
/* Переход для списка */
ul li {
  position: relative;
  transition: transform 0.3s ease;
}

ul li:hover {
  transform: translateX(5px);
}
</style>
