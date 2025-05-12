<template>
  <div class="fixed bottom-24 right-6 z-50 md:hidden">
    <button @click="openBookingPopup" class="btn-floating" aria-label="Быстрая запись">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-calendar-plus"
        viewBox="0 0 16 16">
        <path
          d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
        <path
          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
      </svg>
    </button>

    <!-- Всплывающее окно быстрой записи -->
    <div v-if="isBookingPopupOpen"
      class="booking-popup bg-white rounded-lg shadow-xl p-4 absolute right-0 bottom-16 w-64">
      <div class="flex justify-between items-center mb-3">
        <h3 class="text-lg font-medium text-primary">Быстрая запись</h3>
        <button @click="closeBookingPopup" class="text-muted">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x"
            viewBox="0 0 16 16">
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>

      <div class="mb-3">
        <div class="mb-2 font-medium">Варианты записи:</div>
        <div class="space-y-2">
          <a href="tel:89626653341" class="flex items-center text-primary hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-telephone mr-2" viewBox="0 0 16 16">
              <path
                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            8 (962) 665-33-41
          </a>

          <a href="https://vk.com/id560785882" target="_blank" rel="noreferrer"
            class="flex items-center text-primary hover:underline">
            <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor"
                d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z" />
            </svg>
            ВКонтакте
          </a>
        </div>
      </div>

      <!-- Популярные услуги -->
      <div>
        <div class="mb-2 font-medium">Топ услуги:</div>
        <div class="space-y-1 text-sm">
          <div class="flex justify-between">
            <span>Стрижка</span>
            <span class="text-primary font-medium">от 600 ₽</span>
          </div>
          <div class="flex justify-between">
            <span>Окрашивание</span>
            <span class="text-primary font-medium">от 1000 ₽</span>
          </div>
          <div class="flex justify-between">
            <span>Укладка</span>
            <span class="text-primary font-medium">от 800 ₽</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isBookingPopupOpen = ref(false)

const openBookingPopup = () => {
  isBookingPopupOpen.value = true
}

const closeBookingPopup = () => {
  isBookingPopupOpen.value = false
}
</script>

<style scoped>
.btn-floating {
  @apply flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg transition-all duration-300;
}

.btn-floating:hover {
  @apply bg-accent transform scale-110;
}

.booking-popup {
  animation: slideUp 0.3s ease-out forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
