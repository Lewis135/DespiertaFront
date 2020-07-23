<template>
  <div class="relative flex justify-center w-full py-8 font-serif text-lg">
    <!-- Content -->
    <div class="w-full max-w-2xl mx-32">
      <!-- Titulo -->
      <h1 class="text-4xl font-semibold">{{post.titulo}}</h1>
      <!-- Subtitulo -->
      <h2 class="font-medium font-sans text-gray-600">{{post.subtitulo}}</h2>

      <!-- Creador con foto?-->
      <div class="flex justify-between my-4">
        <div class="flex">
          <div class="w-14 h-14 rounded-1/2 bg-red-400 p-2">foto</div>
          <div class="font-medium px-2 my-auto">
            <div class="text-sm">{{post.creador}}</div>
            <div class="text-gray-600 text-xs">{{post.fechapublicacion}}</div>
          </div>
        </div>
        <div>Botones redes</div>
      </div>
      <!-- Foto -->
      <div class="my-12">
        <div class="mx-auto">
          <ImgWrapper :src="imgSrc" :alt="post.imagen.alternativeText" />
        </div>
        <!-- <div class="h-80 bg-darkAccent">{{post.imagen.alternativeText}}</div> -->
        <div class="text-center text-sm text-gray-600 py-2">{{post.imagen.caption}}</div>
      </div>

      <!-- Texto -->
      <div class="font-medium" v-html="contenido"></div>
    </div>
  </div>
</template>
<script>
import postQuery from "~/apollo/queries/blog/post";
import ImgWrapper from "~/components/ImgWrapper";
import marked from "marked";
import nuxtConfig from "../../../nuxt.config";

export default {
  name: "post",
  props: {},
  data() {
    return {
      post: Object,
      ruta: this.$route.params.id
    };
  },
  apollo: {
    post: {
      prefecth: true,
      query: postQuery,
      variables() {
        return {
          idpost: this.ruta
        };
      }
    }
  },
  computed: {
    contenido() {
      return marked(this.post.contenido);
    },
    imgSrc() {
      return nuxtConfig.env.strapiBaseUri + this.post.imagen.url;
    }
  },
  components: {
    ImgWrapper
  }
};
</script>