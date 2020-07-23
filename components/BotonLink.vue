<template>
  <div
    class="mx-auto px-5 text-center rounded-2xl rounded-tr-none select-none cursor-pointer shadow-lg"
  >
    <NuxtLink :to="ruta" class="text-lightShade font-medium">{{text}}</NuxtLink>
  </div>
</template>
<script>
export default {
  name: "BotonLink",
  props: {
    text: { default: "Aceptar" },
    ruta: { default: "/#" }
  },
  computed: {}
};
</script>