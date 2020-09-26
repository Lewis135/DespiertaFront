<template>
  <div id="blog">
    <div class="flex justify-center">
      <!-- Seccion de arriba -->
      <div class="max-w-screen-xl w-full mx-32 border-b-2 border-primary">
        <h1>Publicaciones</h1>

        <div class="flex">
          <div>Tipo de post:</div>
          <label class="w-32 bg-primary rounded px-2 mx-2">Mindfulness</label>
        </div>
        <div class="flex h-72 mt-6 mb-4" v-if="listaPost.length > 0">
          <div class="md:w-6/12 xl:w-3/7 h-full px-4">
            <summaryPostPanoramic
              :titulo="postUltimo.titulo"
              :subtitulo="postUltimo.subtitulo"
              :url="postUltimo.imagen.url"
              :autor="postUltimo.creador"
              @eventPostSelected="goToPost(postUltimo)"
            />
          </div>

          <div class="md:w-6/12 xl:w-2/7 px-3 flex flex-col justify-between">
            <summaryPostMini
              v-for="post in listaPostUltimos"
              :key="post.id"
              class="h-20"
              :titulo="post.titulo"
              :subtitulo="post.subtitulo"
              :url="post.imagen.url"
              :autor="post.creador"
              @eventPostSelected="goToPost(post)"
            />
          </div>
          <div class="w-2/7 hidden xl:block">
            <summaryPostPanoramic
              :titulo="postDestacado.titulo"
              :subtitulo="postDestacado.subtitulo"
              :autor="postDestacado.creador"
              :url="postDestacado.imagen.url"
              @eventPostSelected="goToPost(postDestacado)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="my-4">
      <WavesTopDivider class="text-primary" :height="'h-8'" />
      <WavesBotDivider class="text-primary" :height="'h-6'" />
    </div>

    <!-- Seccion abajo -->
    <div class="flex justify-center">
      <div class="flex max-w-screen-xl w-full mx-32 pt-8">
        <!-- Lista post abajo-->
        <div class="xl:w-5/7 px-4">
          <div class="h-full">
            <div v-for="post in listaPost" :key="post.id" class="pb-6">
              <summaryPost
                :titulo="post.titulo"
                :resumen="post.resumen"
                :url="post.imagen.url"
                @eventPostSelected="goToPost(post)"
              />
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <newsletterVertical />
      </div>
    </div>
  </div>
</template>

<script>
import summaryPost from "~/components/blog/summaryPost";
import summaryPostPanoramic from "~/components/blog/summaryPostPanoramic";
import summaryPostMini from "~/components/blog/summaryPostMini";
import listaPostQuery from "~/apollo/queries/blog/posts";
import newsletterVertical from "~/components/blog/newsletterVertical"
export default {
  name: "blogPrincipal",
  data() {
    return {
      listaPost: [],
    };
  },
  computed: {
    postDestacado() {
      return this.listaPost.find((post) => post.destacado);
    },
    listaPostUltimos() {
      let aux = this.listaPost
        .filter((post) => post != this.postDestacado)
        .filter((post) => post != this.postUltimo)
        .slice(0, 3);
      return aux;
    },
    listaPostAntiguos() {
      let aux = this.listaPost
        .filter((post) => post != this.postDestacado)
        .filter((post) => post != this.postUltimo)
        .slice(3, this.listaPost.length);
      return aux;
    },

    postUltimo() {
      return this.listaPost.find((post) => !post.destacado);
    },
  },
  methods: {
    goToPost(postSelected) {
      console.log(postSelected);
      const idPost = postSelected.id;
      this.$router.push(`/blog/${idPost}`);
      // ", params: { idPost } });
    },
  },
  apollo: {
    listaPost: {
      // prefetch: true,
      query: listaPostQuery,
      variables: { limit: 10 },
    },
  },
  components: {
    summaryPost,
    summaryPostPanoramic,
    summaryPostMini,
    newsletterVertical
  },
};
</script>

<style>
</style>