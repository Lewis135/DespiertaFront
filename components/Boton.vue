<template>
  <div
    class="mx-auto p-5 text-center mt-10 rounded-2xl rounded-tr-none select-none cursor-pointer shadow-lg"
    :class="bgcolor"
  >
    <span class="text-xl text-lightShade uppercase font-medium">{{text}}</span>
  </div>
</template>
<script>
export default {
  name: "Boton",
  props: {
    text: { defaul: "Aceptar" },
    bgcolor: { default: "bg-primary" }
  },
  computed: {}
};
</script>