<template>
  <div class="relative flex flex-wrap w-full">
      <div v-for="(color, index) in sliders" :key="color" class="absolute w-full">
        <transition name="fade">
            <div v-if="currentSlide%3 === index" :class="color" style="height:350px"></div>
        </transition>
      </div>
      <div class="w-full" style="height:340px">
          <div class="absolute w-full bottom-0 flex justify-center">
            <div v-for="(slider, index) in sliders" :key="slider" :class="currentSlide%3 === index ? 'bg-gray-700' : 'bg-gray-300'" @click="makeActive(index)" class="shadow-md cursor-pointer mx-2 w-4 h-4 rounded-full bg-black"></div>
          </div>
      </div>
      <!-- <div class="my-10 flex w-full">
          <div class="m-auto">
            <transition name="fade">
                <h1 v-if="isTitleShowing">Slider Carousel</h1>
            </transition>
            <button @click="isTitleShowing = !isTitleShowing" class="px-2 rounded border">Toggle Text</button>
          </div>
      </div> -->
  </div>
</template>

<script>
export default {
    data() {
        return{
            currentSlide: 1,
            interval: "",
            sliders: ['bg-blue-600', 'bg-green-600', 'bg-yellow-600'],
            isTitleShowing: true,
        }
    },
    methods: {
        makeActive(index) {
            this.currentSlide = index;
        }
    },
    mounted() {
        this.interval = setInterval(() => {
            this.currentSlide++
        }, 2000)
    },
    beforeUnmount() {
        clearInterval(this.interval)
    }
}
</script>

<style>
.fade-enter-active, 
.fade-leave-active {
    transition: all 1s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateX(-100%);
}
.fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>