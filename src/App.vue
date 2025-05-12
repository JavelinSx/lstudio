<template>
  <div class="bg-light min-h-screen">
    <Header />
    <main>
      <Hero />
      <About />
      <Examples />
      <Services />
      <Price />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    <BackToTop />
    <MobileNav />
    <QuickBooking />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Examples from './components/Examples.vue'
import Services from './components/Services.vue'
import Price from './components/Price.vue'
import Testimonials from './components/Testimonials.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
import MobileNav from './components/MobileNav.vue'
import QuickBooking from './components/QuickBooking.vue'

// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Инициализируем AOS
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: false,
    offset: 50,
    delay: 100
  })

  // Базовые GSAP анимации
  gsap.from('.hero-content', {
    opacity: 1,
    y: 20,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })

  // Создаем эффект параллакса для фоновых элементов
  gsap.utils.toArray('.parallax-bg').forEach((element) => {
    // Используем приведение типа внутри функции
    const el = element as Element;
    gsap.to(el, {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  })
})
</script>
