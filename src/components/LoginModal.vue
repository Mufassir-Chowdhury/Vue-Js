<template>
<section class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-20" @click="$emit('closeLogin')">
</section>
<div class="absolute inset-0">
    <div class="flex h-full">
        <div class="z-30 m-auto bg-white rounded shadow p-2 w-1/3">
            <div class="p-2 border">
                <h1 class="text-xl text-center">Login</h1>
                <form class="p-2 my-2" @submit.prevent="submit">
                    <div class="my-4">
                        <label>Email or Username</label>
                        <input v-model="form.email" class="rounded shadow p-2 w-full" placeholder="Enter your email or username">
                    </div>
                    <div class="my-4">
                        <label>Password</label>
                        <input v-model="form.password" type="password" class="rounded shadow p-2 w-full" placeholder="Enter your password">
                    </div>
                    <div class="my-4">
                        <button type="submit" class="w-full rounded shadow bg-gradient-to-r from-red-800 to-pink-600 text-white p-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import firebase from '../utilities/firebase';
export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
            }
        }
    },
    methods: {
        submit() {
            firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
        }
    }
}
</script>

<style>

</style>