<template>
<nav class="justify-between flex w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
    <router-link v-for="item in list" :key="item.to" :to="item.to" class="px-2">{{ item.title }}</router-link>
    <button @click="$emit('openLoginModal')">Login</button>
</nav>
</template>

<script>
export default {
    name: 'Appheader',
    data() {
        return {
            list: [
                {
                    title: 'Vue App', to: '/'
                },
                { 
                    title: 'DC Heros', to: "/dc-heros"
                },
                {
                    title: 'Calendar', to: '/Calendar'
                },
                {
                    title: 'Markdown', to: '/markdown'
                },
                {
                    title: 'Slider', to: '/slider'
                }
            ]
        }
    }
}
</script>

<style>

</style>