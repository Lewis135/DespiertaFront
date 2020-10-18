<template>
  <div class="relative flex justify-center w-full py-8 font-serif text-lg min-h-screen">
    <!-- Content Post-->
    <!-- <div class="w-full max-w-2xl mx-32" v-if="post"> -->
      <!-- {{selectedPost}} -->
    <div class="max-w-screen-xl w-full mx-32 pb-24 border-b-2 border-primary" v-if="selectedPost">
      <!-- Titulo -->
      <h1 class>{{selectedPost.content.title}}</h1>
      <!-- Subtitulo Post-->
      <h2 class="font-sans text-gray-600 px-2">{{selectedPost.content.subtitle}}</h2>

      <!-- Creador Post-->
      <div class="flex justify-between my-4">
        <div class="flex">
          <div class="w-14 h-14 rounded-1/2 bg-red-400 p-2">foto</div>
          <div class="font-medium px-2 my-auto">
            <div class="text-sm">{{selectedPost.content.author}}</div>
            <div class="text-gray-600 text-xs">{{selectedPost.content.published_at}}</div>
          </div>
        </div>
        <div>Botones redes</div>
      </div>

      <!-- post en si mismo -->
      <div class="w-full max-w-2xl mx-auto">
        <!-- Foto Post-->
        <div class="my-12">
          <div class="mx-auto p-2 shadow-lg rounded-md">
            <ImgWrapper class="shadow-md" :src="imgSrc" alt="" />
          </div>
          <div class="text-center text-sm text-gray-600 py-2">Texto de caption{{selectedPost.content.imageCaption}}</div>
        </div>

        <!-- Texto Post-->
        <!-- <div class="font-medium" v-html="contenido" /> -->
        <div class="font-medium">
          <p class="my-4" v-for="(paragraph, index) in selectedPost.content.long_text.content" :key="index">
            <span v-if="paragraph.content">{{paragraph.content[0].text}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ImgWrapper from "~/components/ImgWrapper";
import marked from "marked";
import { mapGetters } from 'vuex';

export default {
  name: "post",
  props: {},
  data() {
    return {
      slug: this.$route.params.id,
    };
  },
  created(){
    this.$store.dispatch("posts/retrieveSelectedPost", this.slug);
  },
  computed: {
    ...mapGetters({
      selectedPost: "posts/getSelectedPost"
    }),
    contenido() {
      return marked(this.selectedPost.contenido);
    },
    imgSrc() {
      return this.selectedPost.content.image;
    },
  },
  components: {
    ImgWrapper,
  },
};
</script>