<template>
  <div class="fixed w-full h-[60px] flex flex-row justify-between items-center z-[1]">
    <img class="z-[9] absolute top-2.5 left-[18px] h-[45px]" :src="cutHairIcon" alt="Иконка парикмахерской">
    <h1 class="w-full text-center z-10">Л - Студия</h1>

    <button :class="[
      'bg-inherit absolute right-px mr-[13px] z-20 flex flex-col w-12 h-11 gap-2 justify-center items-center transition-all duration-500 ease-in-out',
      isOpen ? 'burger-toggle-close' : 'burger-toggle-open'
    ]" @click="handleToggle" aria-label="Меню навигации">
      <span v-for="n in 3" :key="n" :class="[
        'relative bg-secondary-color h-0.5 w-4/5 rounded-[9px] opacity-100 transition-all duration-300 ease-in-out',
        isOpen && n === 1 && 'rotate-45 translate-x-[7px] translate-y-[7px]',
        isOpen && n === 2 && 'opacity-0 left-[60px]',
        isOpen && n === 3 && '-rotate-45 translate-x-[7px] -translate-y-[7px]'
      ]"></span>
    </button>

    <ul :class="[
      'z-10 fixed top-[78px] left-0 flex flex-col items-center p-2.5 gap-[15px] w-full bg-white-color transition-all duration-500 ease-in-out h-full',
      isOpen ? 'opacity-100 max-h-[230px] shadow-header' : 'opacity-0 p-0 h-0 max-h-0'
    ]">
      <li v-for="item in menuItems" :key="item.href" :class="[
        'box-border relative w-[190px] text-center transition-all duration-300 ease-in-out',
        isOpen ? 'opacity-100 pointer-events-auto py-[5px] px-[15px]' : 'opacity-0 pointer-events-none'
      ]" @click="item.href.startsWith('#') && handleClick($event, item.href)">
        <a v-if="!item.isVk" class="block text-black-color w-full hover:shadow-inner hover:rounded-[10px]"
          :href="item.href">
          {{ item.text }}
        </a>
        <a v-else
          class="block py-2.5 px-3 rounded-md text-white-color bg-[#0077ff] transition-all duration-300 ease-in-out hover:shadow-[0px_6px_10px_0px_rgba(34,60,80,0.2)]"
          :href="item.href" target="_blank" rel="noreferrer">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import cutHairIcon from '@/assets/images/icon/hair-cut.svg'

const isOpen = ref(false)

const menuItems = [
  { href: '#about', text: 'О студии' },
  { href: '#examples', text: 'Примеры работ' },
  { href: '#price', text: 'Прайс / Услуги' },
  { href: '#contact', text: 'Контакты' },
  { href: 'https://vk.com/id560785882', text: 'Страница ВК', isVk: true }
]

const handleToggle = () => {
  isOpen.value = !isOpen.value
}

const handleClick = (event: MouseEvent, anchor: string) => {
  event.preventDefault()
  const targetElement = document.querySelector(anchor)
  if (targetElement) {
    const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 200
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
  isOpen.value = false
}
</script>

<style>
/* Только для специфичных случаев, которые сложно сделать через Tailwind */
.burger-item:hover {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2) inset;
}
</style>