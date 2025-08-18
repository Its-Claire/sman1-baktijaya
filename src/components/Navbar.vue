<template>
    <header class="sticky top-0 z-50 bg-base-100/90 backdrop-blur border-b border-base-200">
        <div class="navbar container mx-auto px-4">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li v-for="item in nav" :key="item.href"><a :href="item.href">{{ item.label }}</a></li>
                    </ul>
                </div>
                <a href="#" class="btn btn-ghost text-xl gap-2">
                    <div class="avatar placeholder"><div class="bg-primary text-primary-content w-8 rounded-full">SJ</div></div>
                    SMAN 1 Bakti Jaya
                </a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li v-for="item in nav" :key="item.href"><a :href="item.href">{{ item.label }}</a></li>
                </ul>
            </div>
            <div class="navbar-end gap-2">
                <select class="select select-bordered select-sm" v-model="theme" @change="applyTheme">
                    <option v-for="t in themes" :key="t" :value="t">{{ t }}</option>
                </select>
                <a href="#pendaftaran" class="btn btn-primary btn-sm">Daftar</a>
            </div>
        </div>
    </header>
</template>