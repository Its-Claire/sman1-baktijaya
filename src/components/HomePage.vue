<template>
    <div class="min-h-screen flex flex-col bg-white">
        <Navbar :nav="nav" brand-label="SMAN 1 Bakti Jaya" />
        <Heroes :ctas="heroCtas" />
        <Profile />
        <ProgramEkskul />
        <Pendaftaran />
    </div>
</template>

<script setup>
import Navbar from './Navbar.vue'
import Heroes from './Heroes.vue';
import Profile from './Profile.vue';
import ProgramEkskul from './ProgramEkskul.vue';
import Pendaftaran from './Pendaftaran.vue';

const nav = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Profil', href: '#profil' },
    { label: 'Program', href: '#program' },
    { label: 'Pendaftaran', href: '/pendaftaran' },
    { label: 'Kontak', href: '#kontak' },
]

const heroCtas = [
    { label: 'Profil Sekolah', href: '#profil', class: 'btn btn-success text-white' },
    { label: 'Berita Terbaru', href: '#berita', class: 'btn btn-outline btn-success text-white' },
]
</script>
