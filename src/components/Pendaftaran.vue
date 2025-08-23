<template>
    <section :id="sectionId" class="container mx-auto px-4 py-16">
        <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">{{ title }}</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">{{ description }}</p>
        </div>

        <div class="max-w-4xl mx-auto">
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Registration Info -->
                <div class="card bg-primary-content shadow-xl border border-primary/20">
                    <div class="card-body text-center">
                        <div class="mb-6">
                            <svg class="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            <h3 class="text-xl font-semibold text-primary mb-2">Pendaftaran Siswa Baru</h3>
                            <p class="text-gray-600">Tahun Ajaran 2025/2026</p>
                        </div>
                        
                        <div class="space-y-4 mb-6">
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Kuota Tersedia:</span>
                                <span class="badge badge-primary">150 Siswa</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Pendaftar Saat Ini:</span>
                                <span class="badge badge-outline">89 Siswa</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-gray-700">Status:</span>
                                <span class="badge badge-success">Dibuka</span>
                            </div>
                        </div>

                        <div class="text-left space-y-3 mb-6">
                            <h4 class="font-semibold text-gray-800">Persyaratan:</h4>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li class="flex items-start">
                                    <svg class="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Lulusan SMP/MTs atau sederajat
                                </li>
                                <li class="flex items-start">
                                    <svg class="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Usia maksimal 18 tahun
                                </li>
                                <li class="flex items-start">
                                    <svg class="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Fotokopi Ijazah & SKHUN
                                </li>
                                <li class="flex items-start">
                                    <svg class="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Fotokopi KK & Akta Kelahiran
                                </li>
                            </ul>
                        </div>

                        <router-link to="/pendaftaran" class="btn btn-primary btn-lg text-white w-full">
                            Daftar Sekarang
                        </router-link>
                    </div>
                </div>

                <!-- Important Dates -->
                <div class="card bg-primary-content shadow-xl border border-primary/20">
                    <div class="card-body">
                        <h3 class="card-title text-xl font-semibold mb-6 text-primary">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            Jadwal Penting
                        </h3>
                        
                        <div class="space-y-4">
                            <div class="flex items-center p-3 bg-white rounded-lg">
                                <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                                    <span class="text-primary font-bold text-sm">01</span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Pendaftaran Dibuka</h4>
                                    <p class="text-sm text-gray-600">1 Januari 2025</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center p-3 bg-white rounded-lg">
                                <div class="flex-shrink-0 w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mr-4">
                                    <span class="text-warning font-bold text-sm">15</span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Tes Seleksi</h4>
                                    <p class="text-sm text-gray-600">15 Februari 2025</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center p-3 bg-white rounded-lg">
                                <div class="flex-shrink-0 w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mr-4">
                                    <span class="text-success font-bold text-sm">01</span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Pengumuman</h4>
                                    <p class="text-sm text-gray-600">1 Maret 2025</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center p-3 bg-white rounded-lg">
                                <div class="flex-shrink-0 w-12 h-12 bg-info/10 rounded-full flex items-center justify-center mr-4">
                                    <span class="text-info font-bold text-sm">15</span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Daftar Ulang</h4>
                                    <p class="text-sm text-gray-600">15 Maret 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contact Info -->
            <div class="mt-8 text-center">
                <p class="text-gray-600 mb-4">Butuh bantuan? Hubungi kami:</p>
                <div class="flex flex-wrap justify-center gap-4">
                    <div class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span>021-1234567</span>
                    </div>
                    <div class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span>info@sman1baktijaya.sch.id</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { sectionId, title, description } = defineProps({
    sectionId: { type: String, default: 'pendaftaran' },
    title: { type: String, default: 'Pendaftaran Siswa Baru' },
    description: { type: String, default: 'Informasi pendaftaran siswa baru SMAN 1 Bakti Jaya untuk tahun ajaran 2025/2026.' }
})
</script>
