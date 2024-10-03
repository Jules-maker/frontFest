<template>
    <div>
  <section class="bg-gray-50 dark:bg-gray-800 py-12">
    <div class="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
      <!-- Left: Description -->
      <div class="lg:w-1/2 text-left space-y-6">
        <h1 class="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Bienvenue sur <span class="text-yellow-400">Electric Lamb</span>
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Découvrez la nouvelle ère de l'innovation technologique. Nous concevons des solutions innovantes pour répondre à vos besoins les plus exigeants. Joignez-vous à nous pour transformer vos idées en réalité.
        </p>
        <a href="#services" class="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
          En savoir plus
        </a>
      </div>
      <!-- Right: Image -->
      <div class="lg:w-1/2 mt-8 lg:mt-0">
        <img src="../assets/images/imgeFest1.webp" alt="Présentation de Electric Lamb" class="w-full h-auto rounded-lg shadow-lg">
      </div>
    </div>
  </section>
        
    </div>
</template>
<script>
</script>
<style>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100%{
    opacity: 0;

  }
}

.animate-fade-in {
  animation: fade-in 2s ease-in-out;
}
</style>