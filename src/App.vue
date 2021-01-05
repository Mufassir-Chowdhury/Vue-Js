<template>
  <Appheader @openLoginModal="isLoginOpen = true"/>
  <div id="nav">
    <router-view></router-view>
  </div>
  <login-modal v-if="isLoginOpen" @closeLogin="isLoginOpen = false"/>
</template>

<script>
import Appheader from './components/Appheader';
import LoginModal from './components/LoginModal.vue';

export default {
  name: 'App',
  components: { Appheader, LoginModal },
  data() {
        return {
            isLoginOpen: false,
        }
    }
}
</script>

<style>

</style>
