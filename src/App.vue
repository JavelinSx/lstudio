<template>
  <div class="flex flex-col items-center max-w-5xl mx-auto">
    <Header />
    <About />
    <Examples />
    <Slogan />
    <Price />
    <Contact />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import About from './components/About.vue'
import Examples from './components/Examples.vue'
import Slogan from './components/Slogan.vue'
import Price from './components/Price.vue'
import Contact from './components/Contact.vue'
</script>