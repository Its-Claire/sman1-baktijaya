<template>
    <section :id="sectionId" class="container mx-auto px-4 py-16">
        <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">{{ title }}</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">{{ description }}</p>
        </div>

        <div class="max-w-6xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Contact Information -->
                <div class="space-y-8">
                    <!-- School Info -->
                    <div class="card bg-primary-content shadow-xl border border-primary/20">
                        <div class="card-body">
                            <h3 class="card-title text-xl font-semibold mb-6 text-primary">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                                Informasi Sekolah
                            </h3>
                            
                            <div class="space-y-4">
                                <div class="flex items-start">
                                    <svg class="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <div>
                                        <h4 class="font-semibold text-gray-800">Alamat</h4>
                                        <p class="text-gray-600">Jl. Raya Bakti Jaya No. 123, Kec. Sukmajaya, Depok, Jawa Barat 16418</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <svg class="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <div>
                                        <h4 class="font-semibold text-gray-800">Telepon</h4>
                                        <p class="text-gray-600">021-1234567</p>
                                        <p class="text-gray-600">021-1234568 (Fax)</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <svg class="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <div>
                                        <h4 class="font-semibold text-gray-800">Email</h4>
                                        <p class="text-gray-600">info@sman1baktijaya.sch.id</p>
                                        <p class="text-gray-600">humas@sman1baktijaya.sch.id</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <svg class="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <div>
                                        <h4 class="font-semibold text-gray-800">Jam Operasional</h4>
                                        <p class="text-gray-600">Senin - Jumat: 07:00 - 15:00 WIB</p>
                                        <p class="text-gray-600">Sabtu: 07:00 - 12:00 WIB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Social Media -->
                    <div class="card bg-primary-content shadow-xl border border-primary/20">
                        <div class="card-body">
                            <h3 class="card-title text-xl font-semibold mb-6 text-primary">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
                                </svg>
                                Media Sosial
                            </h3>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <a href="#" class="flex items-center p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                                    <svg class="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                    <div>
                                        <h4 class="font-semibold text-gray-800">Twitter</h4>
                                        <p class="text-sm text-gray-600">@sman1baktijaya</p>
                                    </div>
                                </a>
                                
                                <a href="#" class="flex items-center p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                                    <svg class="w-6 h-6 text-blue-800 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                    <div>
                                        <h4 class="font-semibold text-gray-800">Facebook</h4>
                                        <p class="text-sm text-gray-600">SMAN 1 Bakti Jaya</p>
                                    </div>
                                </a>
                                
                                <a href="#" class="flex items-center p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                                    <svg class="w-6 h-6 text-pink-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                                    </svg>
                                    <div>
                                        <h4 class="font-semibold text-gray-800">Instagram</h4>
                                        <p class="text-sm text-gray-600">@sman1baktijaya</p>
                                    </div>
                                </a>
                                
                                <a href="#" class="flex items-center p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                                    <svg class="w-6 h-6 text-red-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                    <div>
                                        <h4 class="font-semibold text-gray-800">YouTube</h4>
                                        <p class="text-sm text-gray-600">SMAN 1 Bakti Jaya</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="card bg-primary-content shadow-xl border border-primary/20">
                    <div class="card-body">
                        <h3 class="card-title text-xl font-semibold mb-6 text-primary">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                            Kirim Pesan
                        </h3>
                        
                        <form @submit.prevent="handleSubmit" class="space-y-4">
                            <div class="grid md:grid-cols-2 gap-4">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Nama Lengkap</span>
                                    </label>
                                    <input 
                                        v-model="formData.name" 
                                        type="text" 
                                        class="input input-bordered bg-white" 
                                        placeholder="Masukkan nama lengkap"
                                        required
                                    />
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Email</span>
                                    </label>
                                    <input 
                                        v-model="formData.email" 
                                        type="email" 
                                        class="input input-bordered bg-white" 
                                        placeholder="email@example.com"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-medium text-gray-700">No. Telepon</span>
                                </label>
                                <input 
                                    v-model="formData.phone" 
                                    type="tel" 
                                    class="input input-bordered bg-white" 
                                    placeholder="08xxxxxxxxxx"
                                    required
                                />
                            </div>
                            
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-medium text-gray-700">Subjek</span>
                                </label>
                                <select v-model="formData.subject" class="select select-bordered bg-white" required>
                                    <option value="">Pilih Subjek</option>
                                    <option value="Informasi Sekolah">Informasi Sekolah</option>
                                    <option value="Pendaftaran Siswa Baru">Pendaftaran Siswa Baru</option>
                                    <option value="Kerjasama">Kerjasama</option>
                                    <option value="Keluhan">Keluhan</option>
                                    <option value="Saran">Saran</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                            </div>
                            
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-medium text-gray-700">Pesan</span>
                                </label>
                                <textarea 
                                    v-model="formData.message" 
                                    class="textarea textarea-bordered bg-white" 
                                    rows="4"
                                    placeholder="Tulis pesan Anda di sini..."
                                    required
                                ></textarea>
                            </div>
                            
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text font-medium text-gray-700">Saya setuju dengan kebijakan privasi</span>
                                    <input 
                                        v-model="formData.agreement" 
                                        type="checkbox" 
                                        class="checkbox checkbox-primary" 
                                        required
                                    />
                                </label>
                            </div>
                            
                            <div class="text-center pt-4">
                                <button 
                                    type="submit" 
                                    class="btn btn-primary btn-lg text-white w-full"
                                    :disabled="isSubmitting"
                                >
                                    <span v-if="isSubmitting" class="loading loading-spinner"></span>
                                    {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Map Section -->
            <div class="mt-12">
                <div class="card bg-primary-content shadow-xl border border-primary/20">
                    <div class="card-body">
                        <h3 class="card-title text-xl font-semibold mb-6 text-primary">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"></path>
                            </svg>
                            Lokasi Kami
                        </h3>
                        
                        <div class="bg-white rounded-lg p-6 text-center">
                            <div class="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                                <div class="text-center">
                                    <svg class="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <p class="text-gray-600">Peta Lokasi SMAN 1 Bakti Jaya</p>
                                    <p class="text-sm text-gray-500">Jl. Raya Bakti Jaya No. 123, Depok</p>
                                </div>
                            </div>
                            
                            <div class="grid md:grid-cols-3 gap-4 text-sm">
                                <div class="text-center">
                                    <h4 class="font-semibold text-gray-800 mb-1">Akses Transportasi</h4>
                                    <p class="text-gray-600">Angkot D01, D02, D03</p>
                                    <p class="text-gray-600">Bus Transjakarta</p>
                                </div>
                                <div class="text-center">
                                    <h4 class="font-semibold text-gray-800 mb-1">Fasilitas Umum</h4>
                                    <p class="text-gray-600">Masjid, Bank, Minimarket</p>
                                    <p class="text-gray-600">Halte Bus, Terminal</p>
                                </div>
                                <div class="text-center">
                                    <h4 class="font-semibold text-gray-800 mb-1">Parkir</h4>
                                    <p class="text-gray-600">Motor: Gratis</p>
                                    <p class="text-gray-600">Mobil: Rp 5.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Success Modal -->
        <div v-if="showSuccessModal" class="modal modal-open">
            <div class="modal-box">
                <div class="text-center">
                    <svg class="w-16 h-16 text-success mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 class="font-bold text-lg mb-2">Pesan Terkirim!</h3>
                    <p class="py-4">Terima kasih telah menghubungi kami. Tim kami akan merespons pesan Anda dalam waktu 1-2 hari kerja.</p>
                    <div class="modal-action">
                        <button @click="closeSuccessModal" class="btn btn-primary">Tutup</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const { sectionId, title, description } = defineProps({
    sectionId: { type: String, default: 'kontak' },
    title: { type: String, default: 'Hubungi Kami' },
    description: { type: String, default: 'Silakan hubungi kami untuk informasi lebih lanjut tentang SMAN 1 Bakti Jaya.' }
})

const isSubmitting = ref(false)
const showSuccessModal = ref(false)

const formData = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agreement: false
})

const handleSubmit = async () => {
    isSubmitting.value = true
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    isSubmitting.value = false
    showSuccessModal.value = true
    
    // Reset form
    Object.keys(formData).forEach(key => {
        if (key === 'agreement') {
            formData[key] = false
        } else {
            formData[key] = ''
        }
    })
}

const closeSuccessModal = () => {
    showSuccessModal.value = false
}
</script>
