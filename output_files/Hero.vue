<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <!-- Фоновое изображение -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark opacity-50 z-10"></div>
      <img
        src="@/assets/images/studio1.webp"
        alt="Фон салона красоты"
        class="object-cover w-full h-full"
      >
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-dark opacity-70 z-20"></div>
    </div>

    <div class="container mx-auto px-4 relative z-30">
      <div class="max-w-3xl mx-auto text-center text-light">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl mb-4 font-bold hero-content"
          data-aos="fade-up"
        >
          Профессиональная забота о ваших волосах
        </h1>
        <p
          class="text-lg md:text-xl lg:text-2xl mb-8 hero-content"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Студия красоты Елены — место, где забота о ваших волосах возведена в искусство
        </p>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 hero-content"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a
            href="#services"
            class="btn btn-primary py-3 px-8 w-full sm:w-auto"
            @click="scrollToServices"
          >
            Узнать об услугах
          </a>
          <a
            href="#contact"
            class="btn btn-outline border-white text-white hover:bg-white hover:text-primary py-3 px-8 w-full sm:w-auto"
            @click="scrollToContact"
          >
            Записаться сейчас
          </a>
        </div>

        <!-- Скролл вниз индикатор -->
        <div
          class="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-offset="0"
        >
          <span class="text-white mb-2">Узнать больше</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-chevron-down text-white animate-bounce-slow"
            viewBox="0 0 16 16"
          >
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToServices = (event: MouseEvent) => {
  event.preventDefault()
  const servicesSection = document.querySelector('#services')
  if (servicesSection) {
    const offsetTop = servicesSection.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}

const scrollToContact = (event: MouseEvent) => {
  event.preventDefault()
  const contactSection = document.querySelector('#contact')
  if (contactSection) {
    const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
/* Дополнительные стили для анимации */
.animate-bounce-slow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

/* Затемнение и эффект при наведении на кнопки */
.btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.5s ease;
  z-index: -1;
}

.btn:hover::after {
  transform: translate(-50%, -50%) scale(1);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Эффект затемнения фона при прокрутке */
@media (min-width: 768px) {
  .absolute.inset-0.bg-dark {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  :global(.scrolled) .absolute.inset-0.bg-dark {
    opacity: 0.7;
  }
}
</style>
