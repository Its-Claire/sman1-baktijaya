<template>
    <header class="sticky top-0 z-50 bg-base-100/90 backdrop-blur border-base-200">
        <div class="navbar container mx-auto px-4">
            <div class="navbar-start">
                <a href="#" class="btn btn-ghost text-xl gap-2">
                    <div class="avatar placeholder"><div class="bg-success text-primary-content w-8 rounded-full">SJ</div></div>
                    {{ brandLabel }}
                </a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li v-for="item in nav" :key="item.href"><a :href="item.href">{{ item.label }}</a></li>
                </ul>
            </div>
            <div class="navbar-end gap-2">
                <form class="join hidden md:flex" @submit.prevent="submitSearch">
                    <input type="text" v-model="query" placeholder="Cari menu..." class="input input-bordered input-sm join-item w-40 lg:w-64" />
                    <button type="submit" class="btn btn-success btn-sm text-white join-item" aria-label="Cari">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                </form>
                <a :href="ctaHref" class="btn btn-success btn-sm text-white">{{ ctaLabel }}</a>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const { nav, brandLabel, ctaHref, ctaLabel } = defineProps({
    nav: {
        type: Array,
        default: () => ([
            { label: 'Beranda', href: '#beranda' },
            { label: 'Profil', href: '#profil' },
            { label: 'Program', href: '#program' },
            { label: 'Pendaftaran', href: '#pendaftaran' },
            { label: 'Kontak', href: '#kontak' },
        ])
    },
    brandLabel: {
        type: String,
        default: 'SMAN 1 Bakti Jaya'
    },
    ctaHref: {
        type: String,
        default: '#pendaftaran'
    },
    ctaLabel: {
        type: String,
        default: 'Daftar'
    }
})

const query = ref('')

function submitSearch() {
    const trimmed = query.value.trim()
    if (!trimmed) return
    const lower = trimmed.toLowerCase()
    const match = nav.find(item => String(item.label || '').toLowerCase().includes(lower))
    if (match && match.href) {
        if (String(match.href).startsWith('#')) {
            window.location.hash = String(match.href).slice(1)
        } else {
            window.location.href = String(match.href)
        }
    }
}
</script>