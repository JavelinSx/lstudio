<template>
  <section id="about" class="bg-light py-16 md:py-20 lg:py-24 relative overflow-hidden">
    <!-- Декоративные элементы -->
    <div class="absolute -right-16 top-10 w-64 h-64 rounded-full bg-primary opacity-10 parallax-bg"></div>
    <div class="absolute -left-32 bottom-10 w-96 h-96 rounded-full bg-accent opacity-10 parallax-bg"></div>

    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="section-title" data-aos="fade-up">О нашей студии</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Левая колонка с текстом -->
        <div data-aos="fade-right" data-aos-delay="100">
          <h3 class="text-2xl mb-4 text-primary font-heading">Студия красоты для тех, кто ценит профессионализм</h3>
          <p class="mb-6">
            Рада приветствовать Вас! Меня зовут Елена 😉 Я парикмахер-универсал 💇‍♂💇‍♀,
            но особенно люблю заниматься женскими стрижками, окрашиваниями и прическами, укладками.
          </p>
          <p class="mb-6">
            Каждый клиент для меня особенный, и я подбираю индивидуальный подход к каждому,
            учитывая форму лица, структуру волос и пожелания.
          </p>
          <p class="mb-6">
            Работаю с душой, в уютной студии, с горячим чаем и отличным настроением!
          </p>

          <div class="flex flex-wrap gap-4 mt-8">
            <div class="flex items-center">
              <div class="bg-primary text-white rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                  class="bi bi-check-lg" viewBox="0 0 16 16">
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
              <span>Профессиональные материалы</span>
            </div>
            <div class="flex items-center">
              <div class="bg-primary text-white rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                  class="bi bi-check-lg" viewBox="0 0 16 16">
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
              <span>Уютная атмосфера</span>
            </div>
            <div class="flex items-center">
              <div class="bg-primary text-white rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                  class="bi bi-check-lg" viewBox="0 0 16 16">
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
              <span>Индивидуальный подход</span>
            </div>
            <div class="flex items-center">
              <div class="bg-primary text-white rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                  class="bi bi-check-lg" viewBox="0 0 16 16">
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
              <span>Консультация по уходу</span>
            </div>
          </div>
        </div>

        <!-- Правая колонка с изображениями -->
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-4">
            <div class="overflow-hidden rounded-lg shadow-card" data-aos="fade-up" data-aos-delay="200">
              <img src="@/assets/images/studio1.webp" alt="Интерьер студии"
                class="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500">
            </div>
            <div class="overflow-hidden rounded-lg shadow-card" data-aos="fade-up" data-aos-delay="300">
              <img src="@/assets/images/coloring-blond2.webp" alt="Примеры работ"
                class="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500">
            </div>
          </div>
          <div class="space-y-4 pt-8">
            <div class="overflow-hidden rounded-lg shadow-card" data-aos="fade-up" data-aos-delay="400">
              <img src="@/assets/images/studio2.webp" alt="Интерьер студии"
                class="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500">
            </div>
            <div class="overflow-hidden rounded-lg shadow-card" data-aos="fade-up" data-aos-delay="500">
              <img src="@/assets/images/double-coloring2.webp" alt="Примеры работ"
                class="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Тут пусто, поскольку мы используем только шаблон с изображениями
</script>

<style scoped>
/* Дополнительные стили для выделения элементов при наведении */
.overflow-hidden {
  position: relative;
}

.overflow-hidden::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(60, 110, 113, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overflow-hidden:hover::after {
  opacity: 1;
}
</style>
