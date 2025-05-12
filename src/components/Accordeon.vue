<template>
  <div :class="[
    'box-border flex flex-col items-center w-[90%] transition-all duration-[600ms] relative hover:cursor-pointer',
    isOpen ? 'h-[500px] mb-20 md:h-[590px] md:mb-[90px] lg:h-[630px] lg:w-[97%]' : 'h-auto'
  ]">
    <div class="flex flex-row items-center justify-between max-h-10 w-full py-6 px-5 shadow-card rounded-lg"
      @click="handleToggle">
      <h3>{{ titleText }}</h3>
      <img :class="[
        'transition-all duration-300 w-[25px] h-[25px]',
        isOpen ? 'rotate-180' : 'rotate-0'
      ]" :src="arrowIcon" alt="Стрелка">
    </div>

    <div :class="[
      'w-full pt-2.5 h-full transition-all duration-[600ms]',
      isOpen ? 'max-h-[max-content] md:pt-5' : 'max-h-0'
    ]">
      <swiper :modules="modules" :slides-per-view="1" :space-between="30" :navigation="true"
        :pagination="{ clickable: true }" :loop="true" :class="[
          'w-full transition-all duration-300',
          isOpen ? 'h-[465px] md:h-[565px] lg:h-[630px]' : 'h-0'
        ]">
        <swiper-slide v-for="(item, index) in imgSlides" :key="index" class="flex flex-col items-center w-full pb-2.5">
          <img :class="[
            'w-[330px] transition-all duration-300 rounded-[0.7rem] object-cover',
            isOpen ? 'h-[450px] shadow-card md:h-[550px]' : 'h-0'
          ]" :src="item" alt="" @click="handleImageClick">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import arrowIcon from '@/assets/images/icon/arrow.svg'

interface AccordeonProps {
  titleText: string
  imgSlides: string[]
  imgClick?: () => void
}

const props = defineProps<AccordeonProps>()
const isOpen = ref(false)
const modules = [Navigation, Pagination]

const handleToggle = () => {
  isOpen.value = !isOpen.value
}

const handleImageClick = () => {
  if (props.imgClick) {
    props.imgClick()
  }
}
</script>

<style>
/* Кастомные стили для Swiper пагинации */
.swiper-pagination {
  visibility: hidden;
}

.h-\[465px\] .swiper-pagination,
.h-\[565px\] .swiper-pagination,
.h-\[630px\] .swiper-pagination {
  visibility: visible;
}

.swiper-pagination-bullet {
  box-shadow: 0px 10px 10px -3px rgba(92, 85, 82, 0.5);
}
</style>