<template>
  <section
    class="flex flex-col items-center relative md:w-4/5 lg:w-[85%] lg:p-0 lg:pb-[30px]"
    id="contact"
  >
    <h1 class="pb-2.5">Контакты</h1>

    <div
      class="flex flex-col items-center gap-5 w-screen md:w-screen md:text-[22px] md:relative lg:w-screen lg:text-[22px] lg:relative"
    >
      <iframe
        v-if="isDesktop"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A397d6169aa8aad70275c37250a3b90040ebeb1cc65750de311709e36aa926d29&amp;source=constructor"
        width="100%"
        height="400"
        frameBorder="0"
      ></iframe>

      <iframe
        v-else
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa99ac96c267b07d270fd51cb90541a1f27be5084d370ec70a458a372b1798187&amp;source=constructor"
        width="100%"
        height="400"
        frameBorder="0"
      ></iframe>

      <div
        class="max-w-[500px] max-h-[500px] flex flex-col gap-[15px] p-[30px] md:absolute md:bg-[#B6CAC6] md:h-[340px] md:left-[70px] md:justify-evenly md:text-[1.3rem] md:text-white lg:absolute lg:bg-[#B6CAC6] lg:h-[340px] lg:left-[245px] lg:justify-evenly lg:text-[1.3rem] lg:text-white xl:left-[520px]"
      >
        <span class="contact-personal">Мастер: Елена</span>
        <span class="contact-telefon">
          Телефон:
          <a
            class="underline md:text-white lg:text-white"
            href="tel:89626653341"
          >
            89626653341
          </a>
        </span>
        <span class="w-full">Адрес: п.Плесецк, ул. Кооперативная 4Б, 3 этаж, офис 21</span>
        <button
          class="self-center bg-inherit h-10 w-full text-sm rounded-lg transition-all duration-300 ease-in-out border-none shadow-card hover:cursor-pointer hover:shadow-[0px_6px_10px_0px_rgba(34,60,80,0.2)] md:text-xl md:h-[50px] md:mt-5 lg:text-lg lg:h-[50px] lg:mt-5"
        >
          <a
            href="https://yandex.ru/maps/-/CDeuqWy~"
            target="_blank"
            rel="noreferrer"
            class="flex items-center justify-center w-full h-full lg:text-white"
          >
            ОТКРЫТЬ НА КАРТЕ
          </a>
        </button>
        <button
          class="self-center h-10 w-full text-base rounded-lg transition-all duration-300 ease-in-out bg-[#0077ff] border-none shadow-card hover:cursor-pointer hover:shadow-[0px_6px_10px_0px_rgba(34,60,80,0.2)] md:h-[50px] lg:h-[50px]"
        >
          <a
            href="https://vk.com/id560785882"
            target="_blank"
            rel="noreferrer"
            class="flex items-center justify-center w-full h-full text-white-color"
          >
            VK
          </a>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isDesktop = ref(window.innerWidth >= 769)

const handleResize = () => {
  isDesktop.value = window.innerWidth >= 769
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>