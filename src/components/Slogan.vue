<template>
  <section
    class="relative z-[3] w-full h-full flex flex-col items-center min-h-[350px] md:min-h-[500px] lg:min-h-[620px]"
    id="slogan">
    <swiper :modules="modules" :slides-per-view="1" :space-between="30" :navigation="true"
      :pagination="{ clickable: true }" :loop="true" class="w-full">
      <swiper-slide class="flex flex-col items-center md:w-4/5 lg:w-4/5 lg:min-h-0">
        <div
          class="absolute w-[90%] h-[90%] rounded-[10px] z-[4] bg-black-color/50 flex flex-col items-center justify-center max-h-[450px] md:w-4/5 md:h-full md:max-h-[430px] lg:w-4/5 lg:h-full lg:max-h-[450px]">
        </div>
        <img
          class="rounded-[10px] w-[90%] object-cover max-h-[350px] shadow-card md:w-full md:max-h-[430px] lg:w-full lg:max-h-[450px]"
          :src="sostav1" alt="Профессиональная косметика">
        <h1
          class="text-[1.3rem] text-center text-white-color absolute top-[40%] w-4/5 z-[5] md:text-[2rem] md:w-[500px] md:top-[48%] lg:text-[2rem] lg:w-[500px] lg:top-[48%]">
          Профессиональная косметика для ваших волос
        </h1>
      </swiper-slide>

      <swiper-slide class="flex flex-col items-center md:w-4/5 lg:w-4/5 lg:min-h-0">
        <div
          class="absolute w-[90%] h-[90%] rounded-[10px] z-[4] bg-black-color/50 flex flex-col items-center justify-center max-h-[450px] md:w-4/5 md:h-full md:max-h-[430px] lg:w-4/5 lg:h-full lg:max-h-[450px]">
        </div>
        <h1
          class="text-[1.3rem] text-center text-white-color absolute top-[40%] w-4/5 z-[5] md:text-[2rem] md:w-[500px] md:top-[48%] lg:text-[2rem] lg:w-[500px] lg:top-[48%]">
          Индивидуальный подход для каждого клиента
        </h1>
        <img
          class="rounded-[10px] w-[90%] object-cover max-h-[350px] shadow-card md:w-full md:max-h-[430px] lg:w-full lg:max-h-[450px]"
          :src="sostav2" alt="Индивидуальный подход">
      </swiper-slide>

      <swiper-slide class="flex flex-col items-center md:w-4/5 lg:w-4/5 lg:min-h-0">
        <div
          class="absolute w-[90%] h-[90%] rounded-[10px] z-[4] bg-black-color/50 flex flex-col items-center justify-center max-h-[450px] md:w-4/5 md:h-full md:max-h-[430px] lg:w-4/5 lg:h-full lg:max-h-[450px]">
        </div>
        <h1
          class="text-[1.3rem] text-center text-white-color absolute top-[40%] w-4/5 z-[5] md:text-[2rem] md:w-[500px] md:top-[48%] lg:text-[2rem] lg:w-[500px] lg:top-[48%]">
          Рекомендации по уходу за вашими волосами
        </h1>
        <img
          class="rounded-[10px] w-[90%] object-cover max-h-[350px] shadow-card md:w-full md:max-h-[430px] lg:w-full lg:max-h-[450px]"
          :src="sostav3" alt="Уход за волосами">
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import sostav1 from '@/assets/images/sostav1.webp'
import sostav2 from '@/assets/images/sostav2.webp'
import sostav3 from '@/assets/images/sostav3.webp'

const modules = [Navigation, Pagination]
</script>

<style>
/* Кастомные стили для Swiper пагинации */
.swiper-pagination {
  bottom: -30px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .swiper-pagination {
    bottom: -20px;
  }
}

@media (min-width: 1024px) and (max-width: 1365px) {
  .swiper-pagination {
    bottom: 30px;
  }
}

@media (min-width: 1366px) {
  .swiper-pagination {
    bottom: 10px;
  }
}

.swiper-pagination-bullet {
  box-shadow: 0px 10px 10px -3px rgba(92, 85, 82, 0.5);
}
</style>