<template>
  <div class="relative flex flex-wrap justify-around my-8">
    <div class="w-full lg:w-1/2 lg:pr-5">
      <span class="text-2xl font-medium">Ultimos articulos</span>
      <div v-for="post in listaPost" :key="post.id">
        <summaryPost :titulo="post.titulo" :summary="post.resumen" :url="post.imagen.url" />
        <!-- {{post.etiquetas}} -->
      </div>
    </div>
    <div class="w-full my-8 lg:pl-5 lg:mt-0 lg:w-1/2">
      <span class="text-2xl font-medium">Recomendaciones</span>
      <div v-for="index in listaPostDestacados" :key="index">
        <summaryPost />
      </div>
    </div>
    <div class="absolute top-0 right-0">
      <BotonLink
        text="Leer más >"
        ruta="/blog"
        class="py-1 bg-darkAccent hover:bg-teal-600 transition-duration-250"
      />
    </div>
  </div>
</template>
<script>
import summaryPost from "~/components/blog/summaryPost.vue";
import listaPostQuery from "~/apollo/queries/blog/posts";

export default {
  name: "PostsPrincipales",
  data() {
    return {
      lista: [1, 2, 3, 4, 5, 6, 7],
      listaPost: []
    };
  },
  apollo: {
    listaPost: {
      prefetch: true,
      query: listaPostQuery
    }
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
    summaryPost
  }
};
</script>