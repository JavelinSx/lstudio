<template>
  <section
    class="flex flex-col items-center gap-2.5 w-full p-2.5 box-border"
    id="price"
  >
    <h2 class="pt-2.5">Прайс / Услуги</h2>
    <ul class="w-full p-2.5 flex flex-col">
      <li
        v-for="(item, index) in parsedPriceList"
        :key="index"
        class="text-[17px] flex flex-row justify-between pl-2.5 pr-[5px] md:text-[22px] md:pl-[65px] md:pr-[60px] lg:text-[22px] lg:pl-[65px] lg:pr-[60px]"
      >
        <span>{{ item.service }}</span>
        <span class="w-[70px] md:w-[90px] lg:w-[90px]">{{ item.price }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { priceList } from '@/utils/utils'

const parsedPriceList = computed(() => {
  return priceList.map(item => {
    const indexStr = item.lastIndexOf(' от ')
    const service = item.substring(0, indexStr)
    const price = item.substring(indexStr + 1)

    return { service, price }
  })
})
</script>