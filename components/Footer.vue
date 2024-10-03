<template>
    <div>
        <footer class="w-full bg-gray-800 border-t border-gray">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!--Grid-->
            <div class="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
                <a href="/" class="flex justify-center">
                    <span class="self-center text-2xl font-bold whitespace-nowrap text-white">Electric Lamb</span>
                </a>
                <ul class="text-lg text-center sm:flex items-center justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
                    <li><NuxtLink to="/" class="text-white hover:text-gray-400">Accueil</NuxtLink></li>
                    <li class="sm:my-0 my-2"><NuxtLink to="/evenements" class="text-white hover:text-gray-400">Événements</NuxtLink></li>
                    <li><NuxtLink to="/programme" class="text-white hover:text-gray-400">Programme</NuxtLink></li>
                    <li class="sm:my-0 my-2"><NuxtLink to="/a-propos" class="text-white hover:text-gray-400">À Propos</NuxtLink></li>
                </ul>
                <div class="flex space-x-4 sm:justify-center">
                    <!-- Social media icons remain unchanged -->
                </div>
            </div>
            <!--Grid-->
            <div class="py-7 border-t border-gray-700">
                <div class="flex items-center justify-center">
                    <span class="text-gray-400">© Electric Lamb 2024, Tous droits réservés.</span>
                </div>
            </div>
        </div>
    </footer>
    </div>
</template>