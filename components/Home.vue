<template>
    <div class="text-center">
   
        <section class="bg-gray-50 dark:bg-gray-800 py-12">
            <div class="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                <!-- Left: Description -->
                <div class="lg:w-1/2 text-left space-y-6">
                  <img src="../assets/images/logo.png" alt="Electric Lamb Logo" class="logo-vibrate  mb-4 " />
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
        
        <!-- New Map Section -->
        <section class="bg-gray-50 dark:bg-gray-800 py-12">
            <div class="container mx-auto px-6 lg:px-8">
                <Map />
            </div>
        </section>
        <!-- New Sections with Text and Image -->
        <section class="bg-white dark:bg-gray-900 py-12">
            <div class="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
                <div class="lg:w-1/3 text-center">
                    <img src="../assets/images/img3.jpg" alt="Scène de concert" class="w-full h-auto rounded-lg shadow-lg mb-4">
                    <p class="text-lg text-gray-600 dark:text-gray-300">Vivez l'énergie électrisante de nos concerts avec des artistes de renommée internationale.</p>
                </div>
                <div class="lg:w-1/3 text-center">
                    <img src="../assets/images/img4.jpg" alt="Espace d'innovation" class="w-full h-auto rounded-lg shadow-lg mb-4">
                    <p class="text-lg text-gray-600 dark:text-gray-300">Découvrez nos espaces d'innovation où la technologie rencontre la créativité.</p>
                </div>
                <div class="lg:w-1/3 text-center">
                    <img src="../assets/images/img5.jpg" alt="Communauté Electric Lamb" class="w-full h-auto rounded-lg shadow-lg mb-4">
                    <p class="text-lg text-gray-600 dark:text-gray-300">Rejoignez notre communauté dynamique et participez à la révolution technologique.</p>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script setup>
import Map from './Map.vue'; // Import the Map component
</script>
<style scoped>
.logo-container {
    display: flex;
    justify-content: center;
}

.vibrating-logo {
    animation: vibrate 0.3s linear infinite;
}

@keyframes vibrate {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(-5deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(5deg); }
    100% { transform: rotate(0deg); }
}

.animate-fade-in {
    animation: fade-in 2s ease-in-out;
}

.logo-vibrate {
    width: 100px; /* Ajustez la taille selon vos besoins */
    height: auto;
    animation: vibrate 0.3s linear infinite;
}

@keyframes vibrate {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(3deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(-3deg); }
    100% { transform: rotate(0deg); }
}
</style>