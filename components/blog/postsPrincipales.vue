<template>
  <div class="relative flex flex-wrap justify-around my-8">
    <div class="w-full lg:w-1/2 lg:pr-5">
      <div class="mb-4">
        <span class="text-2xl font-medium">Últimos articulos</span>
      </div>
      <div v-for="post in listPosts" :key="post.id" class="mb-6">
          <!-- v-if="post.contentimagen" -->
        <summaryPost
          :titulo="post.content.title"
          :resumen="post.content.intro"
          :url="post.content.image"
          @eventPostSelected="goToPost(post)" 
        />
      </div>
    </div>
    <div class="w-full my-8 lg:pl-5 lg:mt-0 lg:w-1/2">
      <div class="mb-4">
        <span class="text-2xl font-medium">Recomendaciones</span>
      </div>

      <div v-for="post in listPosts" :key="post.id" class="mb-6">
        <summaryPost 
          :titulo="post.content.title"
          :resumen="post.content.intro"
          :url="post.content.image"
          @eventPostSelected="goToPost(post)"
        />
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
import { mapGetters } from "vuex"

export default {
  name: "PostsPrincipales",
  data: () => ({
  }),
  computed: {
    ...mapGetters({
      listPosts: 'posts/getListPosts'
    })
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
  },
};
</script>