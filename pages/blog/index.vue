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
        <div class="flex h-72 mt-6 mb-4" v-if="listPosts.length > 0">

          <div class="md:w-6/12 xl:w-3/7 h-full px-4">
            <summaryPostPanoramic
              :titulo="postUltimo.content.title"
              :subtitulo="postUltimo.content.subtitle"
              :url="postUltimo.content.image"
              :autor="postUltimo.content.author"
              @eventPostSelected="goToPost(postUltimo)" 
            />
          </div>

          <div class="md:w-6/12 xl:w-2/7 px-3 flex flex-col justify-between">
            <summaryPostMini
              v-for="post in listaPostUltimos"
              :key="post.id"
              class="h-20"
              :titulo="post.content.title"
              :subtitulo="post.content.subtitle"
              :url="post.content.image"
              :autor="post.content.author"
              @eventPostSelected="goToPost(post)"
            />
          </div>
          <div class="w-2/7 hidden xl:block">
            <summaryPostPanoramic
              v-if="postDestacado"
              :titulo="postDestacado.content.title"
              :subtitulo="postDestacado.content.subtitle"
              :autor="postDestacado.content.author"
              :url="postDestacado.content.image"
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
            <div v-for="post in listPosts" :key="post.id" class="pb-6">
              <summaryPost
                :titulo="post.content.title"
                :resumen="post.content.intro"
                :url="post.content.image"
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
import newsletterVertical from "~/components/blog/newsletterVertical"
import { mapGetters, mapState } from 'vuex';

export default {
  name: "blogPrincipal",
  data: () =>({
  }),
  async fetch({store, params}){
    store.dispatch("posts/retrieveListPosts");
  },
  computed: {
    ...mapGetters({
      listPosts: 'posts/getListPosts'
    }),
    postDestacado() {
      let aux = this.listPosts.find((post) => post.content.destacado);
      return aux;
    },
    listaPostUltimos() {
      let aux = this.listPosts
        .filter((post) => post != this.postDestacado)
        .filter((post) => post != this.postUltimo)
        .slice(0, 3);
      return aux;
    },
    listaPostAntiguos() {
      let aux = this.listPosts
        .filter((post) => post != this.postDestacado)
        .filter((post) => post != this.postUltimo)
        .slice(3, this.listPosts.length);
      return aux;
    },

    postUltimo() {
      return this.listPosts.find((post) => !post.content.destacado);
    },
  },
  methods: {
    goToPost(postSelected) {
      this.$store.commit('posts/setSelectedPost', postSelected)
      const slug = postSelected.slug;
      this.$router.push(`/blog/${slug}`);
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