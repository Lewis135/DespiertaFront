<template>
  <div
    class="mx-auto px-5 text-center rounded-2xl rounded-tr-none select-none cursor-pointer shadow-lg"
  >
    <span class="text-lightShade font-medium">{{text}}</span>
  </div>
</template>
<script>
export default {
  name: "Boton",
  props: {
    text: { defaul: "Aceptar" }
  },
  computed: {}
};
</script>