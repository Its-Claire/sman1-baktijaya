<template>
    <section :id="sectionId" class="bg-base-200 py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-center text-gray-800">{{ title }}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProgramCard v-for="p in programs" :key="p.title" :title="p.title" :desc="p.desc" :badge="p.badge" />
            </div>
        </div>
    </section>
    
</template>

<script setup>
import ProgramCard from './shared/ProgramCard.vue'

const { sectionId, title, programs } = defineProps({
    sectionId: { type: String, default: 'program' },
    title: { type: String, default: 'Program Unggulan & Ekstrakurikuler' },
    programs: {
        type: Array,
        default: () => ([
            { title: 'Kelas Riset', desc: 'Penguatan literasi sains dan proyek penelitian siswa.', badge: 'Akademik' },
            { title: 'Robotik', desc: 'Ekskul teknologi dan kompetisi robot tingkat nasional.', badge: 'STEM' },
            { title: 'Paskibra', desc: 'Pembinaan kedisiplinan dan kepemimpinan.', badge: 'Karakter' },
            { title: 'Pramuka', desc: 'Kegiatan kepramukaan untuk membangun kemandirian.', badge: 'Karakter' },
            { title: 'KIR', desc: 'Kelompok Ilmiah Remaja menyalurkan minat riset.', badge: 'Akademik' },
            { title: 'Futsal', desc: 'Pengembangan bakat olahraga dan sportivitas.', badge: 'Olahraga' }
        ])
    }
})
</script>