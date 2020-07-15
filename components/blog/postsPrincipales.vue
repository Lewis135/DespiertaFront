<template>
  <div class="relative flex justify-around py-8">
    <div class="mr-5">
      <span class="text-2xl font-medium">Ultimos posts</span>
      <div v-for="index in listaPostNuevos" :key="index">
        <summaryPost />
      </div>
    </div>
    <div class="ml-6">
      <span class="text-2xl font-medium">Destacados</span>
      <div v-for="index in listaPostDestacados" :key="index">
        <summaryPost />
      </div>
    </div>
    <div class="absolute top-8 right-0">
      <Boton text="Leer más >" class="py-1 bg-darkAccent" />
    </div>
  </div>
</template>
<script>
import summaryPost from "~/components/blog/summaryPost.vue";
import Boton from "~/components/Boton.vue";
export default {
  name: "PostsPrincipales",
  data() {
    return {
      lista: [1, 2, 3, 4, 5, 6, 7]
    };
  },
  computed: {
    listaPostNuevos() {
      return this.lista.slice(0, 3);
    },
    listaPostDestacados() {
      return this.lista.slice(0, 2);
    }
  },
  components: {
    summaryPost,
    Boton
  }
};
</script>