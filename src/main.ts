import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// Import AOS for animations
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import GSAP for advanced animations
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

// Create the app
const app = createApp(App)

// Provide global instances
app.provide('aos', AOS)
app.provide('gsap', gsap)

// Mount the app
app.mount('#app')

// Initialize AOS with properly configured settings
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: false, // This is already correctly set to false
  mirror: false,
  offset: 100,
  delay: 100,
  anchorPlacement: 'top-bottom',
  startEvent: 'DOMContentLoaded',

  disableMutationObserver: false, // Make sure this is false
})
