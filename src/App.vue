<template>
<Appheader/>
<div class="min-w-full">
  <calendar/>
  <!-- <dc-heros/> -->
</div>
</template>

<script>
import Appheader from './components/Appheader.vue';
import Calendar from './components/Calendar.vue';
// import DcHeros from './components/DcHeros.vue';

export default {
  components: { Appheader, Calendar },
  name: 'App',
  
}
</script>

<style>

</style>
