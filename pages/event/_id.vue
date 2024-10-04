<template>
    <div>
      <h1>Événements</h1>
      <div v-for="event in events" :key="event.id">
        <router-link :to="{ name: 'eventDetails', params: { id: event.id } }">
          {{ event.title }}
        </router-link>
      </div>
    </div>
  </template>
  