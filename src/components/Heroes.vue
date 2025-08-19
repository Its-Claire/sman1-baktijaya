<template>
    <section :id="sectionId" class="relative">
        <div class="hero min-h-[70vh]" :style="{ backgroundImage: `url('${backgroundImage}')` }">
            <div class="hero-overlay bg-opacity-70"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-2xl">
                        <h1 class="mb-5 text-4xl lg:text-6xl font-extrabold leading-tight" v-html="titleHtml"></h1>
                        <p class="mb-6 text-lg opacity-90">{{ subtitle }}</p>
                        <div class="flex flex-wrap items-center justify-center gap-3">
                        <a v-for="(cta, idx) in ctas" :key="idx" :href="cta.href" :class="cta.class">{{ cta.label }}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { sectionId, backgroundImage, titleHtml, subtitle, ctas } = defineProps({
    sectionId: { type: String, default: 'beranda' },
    backgroundImage: { type: String, default: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2000&auto=format&fit=crop' },
    titleHtml: { type: String, default: 'Selamat Datang di <span class="text-success">SMAN 1 Bakti Jaya</span>' },
    subtitle: { type: String, default: 'Sekolah unggulan dengan budaya berprestasi, berkarakter, dan berwawasan global.' },
    ctas: {
        type: Array,
        default: () => ([
            { label: 'Profil Sekolah', href: '#profil', class: 'btn btn-success text-white' },
            { label: 'Berita Terbaru', href: '#berita', class: 'btn btn-outline btn-success text-white' },
        ])
    }
})
</script>