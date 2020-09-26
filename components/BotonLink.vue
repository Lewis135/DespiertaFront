<template >
  <div
    class="w-full mx-auto px-5 rounded-2xl rounded-tr-none cursor-pointer shadow-lg flex-col-center"
  >
    <NuxtLink :to="ruta" class="text-center select-none text-lightShade font-medium">{{text}}</NuxtLink>
  </div>
</template>
<script>
export default {
  name: "BotonLink",
  props: {
    text: { default: "Aceptar" },
    ruta: { default: "/#" },
  },
  computed: {},
};
</script>