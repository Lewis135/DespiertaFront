<template>
  <div class="relative border-b-2 border-darkAccent pt-4 pb-2 px-2">
    <div class="flex min-w-32 h-48 overflow-hidden">
      <!-- Imagen, WIP-->
      <div class="pr-2">
        <div class="w-40">
          <ImgWrapper :src="imgUrl" />
        </div>
      </div>
      <!-- Texto -->
      <div class="relative flex-grow pl-1 h-full">
        <div class="font-semibold">{{titulo}}</div>
        <div class="postBackground absolute h-full w-full pointer-events-none" />
        <p class>{{summary}}</p>
      </div>
    </div>
    <!-- Etiquetas  -->
    <div class="flex text-xs mt-4">
      <div v-for="(tag,index) in listaTags" :key="index" class="px-2">#{{tag}}</div>
    </div>
  </div>
</template>

<script>
import ImgWrapper from "~/components/ImgWrapper";
import nuxtConfig from "~/nuxt.config";

export default {
  name: "SummaryPost",
  props: {
    titulo: { default: "Titulum fantasy" },
    summary: {
      default:
        "Cuanto mas texto pongas mejor, pero sin olvidar que esto es un resumen que no deberia exceder las 40 palabras porque si no puede exceder el tamaño deseado y no mola. Siempre es mejor que sobre espacio que que falte. Jorobate Flanders "
    },
    url: String
  },
  data() {
    return {
      listaTags: ["aromas", "masajes", "mindfulness"]
    };
  },
  computed: {
    imgUrl() {
      return nuxtConfig.env.strapiBaseUri + this.url;
    }
  },
  components: {
    ImgWrapper
  }
};
</script>

<style scoped>
.postBackground {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 0.8) 20%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>