<template>
  <h1 class="bg-blue-500">{{ title }}</h1>
  <div>Time elapsed: {{ count }}</div>
</template>

<script>
export default {
    name: 'DcHeros',
    data() {
    return {
      title: 'hello world!',
      count: 0,
      dcHeros: [
        'Supergirl',
        'Flash',
        'Batman',
        'superman',
        'arrow'
      ]
    };
  },

  mounted() {
    setInterval(() => {
      this.count++;
    }, 1000)
  }
}
</script>

<style>

</style>