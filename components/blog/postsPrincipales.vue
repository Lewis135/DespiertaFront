<template>
  <div class="relative flex flex-wrap justify-around my-8">
    <div class="w-full lg:w-1/2 lg:pr-5">
      <div class="mb-4">
        <span class="text-2xl font-medium">Ultimos articulos</span>
      </div>
      <div v-for="post in listaPost" :key="post.id" class="mb-6">
        <summaryPost
          v-if="post.imagen"
          :titulo="post.titulo"
          :resumen="post.resumen"
          :url="post.imagen.url"
        />
      </div>
    </div>
    <div class="w-full my-8 lg:pl-5 lg:mt-0 lg:w-1/2">
      <div class="mb-4">
        <span class="text-2xl font-medium">Recomendaciones</span>
      </div>

      <div v-for="post in listaPost" :key="post.id" class="mb-6">
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
      listaPost: [],
    };
  },
  apollo: {
    listaPost: {
      prefetch: true,
      query: listaPostQuery,
      variables: {
        limit: 2,
      },
    },
  },
  computed: {},
  components: {
    summaryPost,
  },
};
</script>