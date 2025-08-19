<template>
    <section :id="sectionId" class="container mx-auto px-4 py-16">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="text-gray-800">
                <h2 class="text-3xl lg:text-4xl font-bold mb-4">{{ title }}</h2>
                <p class="mb-4">{{ description }}</p>
            </div>
            <div class="grid grid-cols-2 gap-4 text-gray-800">
                <StatCard v-for="s in stats" :key="s.title" :title="s.title" :value="s.value" :desc="s.desc" />
            </div>
        </div>
    </section>
    
</template>

<script setup>
import StatCard from './shared/StatCard.vue'

const { sectionId, title, description, stats } = defineProps({
    sectionId: { type: String, default: 'profil' },
    title: { type: String, default: 'Profil Singkat' },
    description: { type: String, default: 'SMAN 1 Bakti Jaya berdiri sebagai lembaga pendidikan menengah atas yang menyiapkan generasi cerdas, kreatif, dan berakhlak mulia. Kami mengedepankan pembelajaran berbasis proyek, literasi digital, dan penguatan karakter Pancasila.' },
    stats: {
        type: Array,
        default: () => ([
            { title: 'Siswa', value: '1.020', desc: 'Tahun ajaran 2025/2026' },
            { title: 'Guru & Staff', value: '86', desc: 'Profesional & tersertifikasi' },
            { title: 'Ekstrakurikuler', value: '24', desc: 'Akademik & non-akademik' },
            { title: 'Akreditasi', value: 'A', desc: 'BAN-S/M' },
        ])
    }
})
</script>