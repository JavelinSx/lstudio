<template>
  <section
    class="relative p-2.5 pt-[100px] flex flex-col items-center gap-2.5 overflow-hidden z-[7] md:px-[35px] md:pt-[100px]"
    id="about">
    <h1 class="z-[7] pb-2.5">О нашей студии</h1>
    <div class="z-[7] flex flex-col items-center gap-2.5 pb-4 md:gap-5 lg:grid lg:grid-cols-2">
      <h3 class="text-justify p-2.5 pb-[21px] text-base md:text-lg md:p-0 md:indent-[26px] lg:text-xl lg:col-span-2">
        Рада приветствовать Вас! Меня зовут Елена😉 Я парикмахер - универсал 💇‍♂💇‍♀, но так же люблю заниматься
        женскими стрижками, окрашиваниями и прическами, укладками. Работаю с душой, в уютной студии, с горячим чаем и
        отличным настроением!
      </h3>
      <img class="rounded-lg w-full max-h-[200px] object-cover shadow-card md:max-h-[320px] lg:max-h-[300px]"
        :src="studio2Image" alt="Интерьер студии красоты">
      <img class="rounded-lg w-full max-h-[200px] object-cover shadow-card md:max-h-[320px] lg:max-h-[300px]"
        :src="studio1Image" alt="Интерьер парикмахерской">
    </div>
  </section>
</template>

<script setup lang="ts">
import studio1Image from '@/assets/images/studio1.webp'
import studio2Image from '@/assets/images/studio2.webp'
</script>