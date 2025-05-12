<template>
  <section
    class="flex flex-col items-center w-full py-[30px] px-2.5 box-border md:-mb-[14px] lg:pt-[30px] lg:pb-[70px] lg:px-2.5 lg:-mb-[110px]"
    id="examples">
    <h2 class="pb-2.5">Примеры работ</h2>
    <Accordeon title-text="Стрижки" :img-slides="hairCuts" :img-click="handleOpenPopup" />
    <Accordeon title-text="Окрашивание блонд" :img-slides="blondColorings" :img-click="handleOpenPopup" />
    <Accordeon title-text="Двойное/скрытое окрашивание" :img-slides="doubleColorings" :img-click="handleOpenPopup" />
    <Accordeon title-text="Причёски/укладки" :img-slides="hairStyles" :img-click="handleOpenPopup" />
    <Accordeon title-text="Мелирование" :img-slides="melir" :img-click="handleOpenPopup" />
    <Accordeon title-text="Тонирование" :img-slides="tonir" :img-click="handleOpenPopup" />
    <Accordeon title-text="Окрашивание один тон" :img-slides="ton" :img-click="handleOpenPopup" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Accordeon from './Accordeon.vue'

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

// Состояние для слайдов
const hairCuts = ref([hairCut1, hairCut2, hairCut3])
const blondColorings = ref([blondColoring1, blondColoring2, blondColoring3, blondColoring4, blondColoring5])
const doubleColorings = ref([doubleColoring1, doubleColoring2, doubleColoring3])
const hairStyles = ref([hairstyle1, hairstyle2, hairstyle3])
const melir = ref([melir1, melir2, melir3, melir4, melir5, melir6])
const ton = ref([ton1, ton2, ton3, ton4, ton5])
const tonir = ref([tonir1, tonir2, tonir3, tonir4, tonir5])

const handleOpenPopup = () => {
  // Обработчик для открытия popup (можно добавить функционал позже)
}
</script>