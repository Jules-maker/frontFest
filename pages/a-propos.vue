<template>
    <div class="bg-gray-50 dark:bg-gray-800 min-h-screen">
        <!-- Hero Section -->
        <div class="relative h-96">
            <img src="../assets/images/imgApropos.webp" alt="L'équipe Electric Lamb" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 class="text-5xl font-extrabold text-white">
                    À Propos de <span class="text-yellow-400">Electric Lamb</span>
                </h1>
            </div>
        </div>

        <!-- Content Section -->
        <div class="container mx-auto px-6 lg:px-8 py-12">
            <div class="max-w-3xl mx-auto space-y-8">
                <p class="text-lg text-gray-600 dark:text-gray-300">
                    Electric Lamb est à l'avant-garde de l'innovation technologique. Notre mission est de transformer vos idées audacieuses en solutions concrètes et efficaces.
                </p>
                <p class="text-lg text-gray-600 dark:text-gray-300">
                    Fondée en 2023, notre entreprise s'est rapidement imposée comme un leader dans le domaine des technologies émergentes, en mettant l'accent sur la créativité, la qualité et l'excellence.
                </p>
                <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Notre Vision</h2>
                    <p class="text-gray-600 dark:text-gray-300">
                        Façonner un avenir où la technologie améliore la vie de chacun, en repoussant constamment les limites de l'innovation.
                    </p>
                </div>
            </div>
            
            <div class="mt-12 text-center">
                <button @click="showModal = true" class="inline-block bg-yellow-400 text-gray-900 font-medium py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out">
                    Contactez-nous
                </button>
            </div>

            <!-- Modal -->
            <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-xl max-w-md w-full">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contactez-nous</h2>
                    <form @submit.prevent="submitForm" class="space-y-4">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nom</label>
                            <input type="text" id="name" v-model="form.name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <input type="email" id="email" v-model="form.email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500">
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                            <textarea id="message" v-model="form.message" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"></textarea>
                        </div>
                        <div class="flex justify-end space-x-3">
                            <button type="button" @click="showModal = false" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Annuler</button>
                            <button type="submit" class="px-4 py-2 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const showModal = ref(false)
const form = reactive({
    name: '',
    email: '',
    message: ''
})

const submitForm = () => {
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire soumis:', form)
    // Réinitialiser le formulaire et fermer la modal
    Object.assign(form, { name: '', email: '', message: '' })
    showModal.value = false
}
</script>
