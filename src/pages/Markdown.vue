<template>
<div class="flex flex-wrap w-full">
  <h1 class="w-full text-center text-3xl my-4">Markdown app</h1>
  <section class="flex m-auto w-full min-h-screen">
      <article class="w-1/2 border">
        <textarea v-model="text" class="w-full h-full"></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText">
      </article>
  </section>
</div>
</template>

<script>
import marked from 'marked';
export default {
    data() {
        return {
            text: ''
        }
    },
    computed: {
        markedText() {
            return marked(this.text);
        }
    }
}
</script>

<style>

</style>