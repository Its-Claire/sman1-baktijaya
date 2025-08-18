<script setup>
import Navbar from './components/Navbar.vue'
import Heroes from './components/Heroes.vue';
import Profile from './components/Profile.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col bg-white">
        <Navbar />
        <Heroes />
        <Profile />
    </div>
</template>
