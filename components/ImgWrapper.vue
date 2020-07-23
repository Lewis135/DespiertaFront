<template>
  <div class="relative h-full">
    <img v-if="bgImage" :src="bgImage" :alt="alt" class="absolute z-0" />
    <div clas="w-full">
      <img :src="src" class="relative w-full z-1" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    src: String,
    bgImage: String,
    alt: String
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
