<template>
    <div class="min-h-screen bg-gray-50 py-8">
        <div class="container mx-auto px-4">
            <!-- Header -->
            <div class="text-center mb-8">
                <router-link to="/" class="btn btn-ghost mb-4">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Kembali ke Beranda
                </router-link>
                <h1 class="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Pendaftaran Siswa Baru</h1>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">SMAN 1 Bakti Jaya - Tahun Ajaran 2025/2026</p>
            </div>

            <div class="max-w-5xl mx-auto">
                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <!-- Student Information -->
                    <div class="card bg-primary-content shadow-xl border border-primary/20">
                        <div class="card-body">
                            <h3 class="card-title text-xl font-semibold mb-6 text-primary">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                                Data Calon Siswa
                            </h3>
                            
                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Nama Lengkap</span>
                                    </label>
                                    <input 
                                        v-model="formData.student.name" 
                                        type="text" 
                                        class="input input-bordered bg-white" 
                                        placeholder="Masukkan nama lengkap"
                                        required
                                    />
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">NISN</span>
                                    </label>
                                    <input 
                                        v-model="formData.student.nisn" 
                                        type="text" 
                                        class="input input-bordered bg-white" 
                                        placeholder="Nomor Induk Siswa Nasional"
                                        required
                                    />
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Tempat Lahir</span>
                                    </label>
                                    <input 
                                        v-model="formData.student.birthPlace" 
                                        type="text" 
                                        class="input input-bordered bg-white" 
                                        placeholder="Kota tempat lahir"
                                        required
                                    />
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Tanggal Lahir</span>
                                    </label>
                                    <input 
                                        v-model="formData.student.birthDate" 
                                        type="date" 
                                        class="input input-bordered bg-white" 
                                        required
                                    />
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Jenis Kelamin</span>
                                    </label>
                                    <select v-model="formData.student.gender" class="select select-bordered bg-white" required>
                                        <option value="">Pilih Jenis Kelamin</option>
                                        <option value="L">Laki-laki</option>
                                        <option value="P">Perempuan</option>
                                    </select>
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Agama</span>
                                    </label>
                                    <select v-model="formData.student.religion" class="select select-bordered bg-white" required>
                                        <option value="">Pilih Agama</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Kristen">Kristen</option>
                                        <option value="Katolik">Katolik</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Buddha">Buddha</option>
                                        <option value="Konghucu">Konghucu</option>
                                    </select>
                                </div>
                                
                                <div class="form-control md:col-span-2">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Alamat Lengkap</span>
                                    </label>
                                    <textarea 
                                        v-model="formData.student.address" 
                                        class="textarea textarea-bordered bg-white" 
                                        rows="3"
                                        placeholder="Alamat lengkap siswa"
                                        required
                                    ></textarea>
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">No. Telepon</span>
                                    </label>
                                    <input 
                                        v-model="formData.student.phone" 
                                        type="tel" 
                                        class="input input-bordered bg-white" 
                                        placeholder="08xxxxxxxxxx"
                                        required
                                    />
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Email</span>
                                    </label>
                                    <input 
                                        v-model="formData.student.email" 
                                        type="email" 
                                        class="input input-bordered bg-white" 
                                        placeholder="email@example.com"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Parent Information -->
                    <div class="card bg-primary-content shadow-xl border border-primary/20">
                        <div class="card-body">
                            <h3 class="card-title text-xl font-semibold mb-6 text-primary">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                                Data Orang Tua/Wali
                            </h3>
                            
                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Nama Ayah</span>
                                    </label>
                                    <input 
                                        v-model="formData.parent.fatherName" 
                                        type="text" 
                                        class="input input-bordered bg-white" 
                                        placeholder="Nama lengkap ayah"
                                        required
                                    />
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Nama Ibu</span>
                                    </label>
                                    <input 
                                        v-model="formData.parent.motherName" 
                                        type="text" 
                                        class="input input-bordered bg-white" 
                                        placeholder="Nama lengkap ibu"
                                        required
                                    />
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Pekerjaan Ayah</span>
                                    </label>
                                    <input 
                                        v-model="formData.parent.fatherJob" 
                                        type="text" 
                                        class="input input-bordered bg-white" 
                                        placeholder="Pekerjaan ayah"
                                        required
                                    />
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Pekerjaan Ibu</span>
                                    </label>
                                    <input 
                                        v-model="formData.parent.motherJob" 
                                        type="text" 
                                        class="input input-bordered bg-white" 
                                        placeholder="Pekerjaan ibu"
                                        required
                                    />
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">No. Telepon Ayah</span>
                                    </label>
                                    <input 
                                        v-model="formData.parent.fatherPhone" 
                                        type="tel" 
                                        class="input input-bordered bg-white" 
                                        placeholder="08xxxxxxxxxx"
                                        required
                                    />
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">No. Telepon Ibu</span>
                                    </label>
                                    <input 
                                        v-model="formData.parent.motherPhone" 
                                        type="tel" 
                                        class="input input-bordered bg-white" 
                                        placeholder="08xxxxxxxxxx"
                                        required
                                    />
                                </div>
                                
                                <div class="form-control md:col-span-2">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Alamat Orang Tua</span>
                                    </label>
                                    <textarea 
                                        v-model="formData.parent.address" 
                                        class="textarea textarea-bordered bg-white" 
                                        rows="3"
                                        placeholder="Alamat lengkap orang tua"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Program Selection -->
                    <div class="card bg-primary-content shadow-xl border border-primary/20">
                        <div class="card-body">
                            <h3 class="card-title text-xl font-semibold mb-6 text-primary">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                Pilihan Program
                            </h3>
                            
                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Program Studi</span>
                                    </label>
                                    <select v-model="formData.program.studyProgram" class="select select-bordered bg-white" required>
                                        <option value="">Pilih Program Studi</option>
                                        <option value="IPA">IPA (Ilmu Pengetahuan Alam)</option>
                                        <option value="IPS">IPS (Ilmu Pengetahuan Sosial)</option>
                                    </select>
                                </div>
                                
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Ekstrakurikuler Pilihan</span>
                                    </label>
                                    <select v-model="formData.program.extracurricular" class="select select-bordered bg-white" required>
                                        <option value="">Pilih Ekstrakurikuler</option>
                                        <option value="OSIS">OSIS</option>
                                        <option value="PMR">PMR</option>
                                        <option value="Pramuka">Pramuka</option>
                                        <option value="Rohis">Rohis</option>
                                        <option value="English Club">English Club</option>
                                        <option value="Jurnalistik">Jurnalistik</option>
                                        <option value="Seni Musik">Seni Musik</option>
                                        <option value="Seni Tari">Seni Tari</option>
                                        <option value="Olahraga">Olahraga</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Additional Information -->
                    <div class="card bg-primary-content shadow-xl border border-primary/20">
                        <div class="card-body">
                            <h3 class="card-title text-xl font-semibold mb-6 text-primary">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                Informasi Tambahan
                            </h3>
                            
                            <div class="space-y-6">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text font-medium text-gray-700">Catatan Khusus</span>
                                    </label>
                                    <textarea 
                                        v-model="formData.additional.notes" 
                                        class="textarea textarea-bordered bg-white" 
                                        rows="3"
                                        placeholder="Informasi tambahan yang perlu diketahui sekolah..."
                                    ></textarea>
                                </div>
                                
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text font-medium text-gray-700">Saya menyetujui syarat dan ketentuan pendaftaran</span>
                                        <input 
                                            v-model="formData.additional.agreement" 
                                            type="checkbox" 
                                            class="checkbox checkbox-primary" 
                                            required
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="text-center pt-6">
                        <button 
                            type="submit" 
                            class="btn btn-primary btn-lg text-white px-12"
                            :disabled="isSubmitting"
                        >
                            <span v-if="isSubmitting" class="loading loading-spinner"></span>
                            {{ isSubmitting ? 'Mengirim...' : 'Kirim Pendaftaran' }}
                        </button>
                    </div>
                </form>
            </div>

            <!-- Success Modal -->
            <div v-if="showSuccessModal" class="modal modal-open">
                <div class="modal-box">
                    <div class="text-center">
                        <svg class="w-16 h-16 text-success mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 class="font-bold text-lg mb-2">Pendaftaran Berhasil!</h3>
                        <p class="py-4">Terima kasih telah mendaftar di SMAN 1 Bakti Jaya. Tim kami akan menghubungi Anda dalam waktu 1-2 hari kerja.</p>
                        <div class="modal-action">
                            <router-link to="/" class="btn btn-primary">Kembali ke Beranda</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)
const showSuccessModal = ref(false)

const formData = reactive({
    student: {
        name: '',
        nisn: '',
        birthPlace: '',
        birthDate: '',
        gender: '',
        religion: '',
        address: '',
        phone: '',
        email: ''
    },
    parent: {
        fatherName: '',
        motherName: '',
        fatherJob: '',
        motherJob: '',
        fatherPhone: '',
        motherPhone: '',
        address: ''
    },
    program: {
        studyProgram: '',
        extracurricular: ''
    },
    additional: {
        notes: '',
        agreement: false
    }
})

const handleSubmit = async () => {
    isSubmitting.value = true
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    isSubmitting.value = false
    showSuccessModal.value = true
    
    // Reset form
    Object.keys(formData.student).forEach(key => formData.student[key] = '')
    Object.keys(formData.parent).forEach(key => formData.parent[key] = '')
    Object.keys(formData.program).forEach(key => formData.program[key] = '')
    formData.additional.notes = ''
    formData.additional.agreement = false
}
</script>
