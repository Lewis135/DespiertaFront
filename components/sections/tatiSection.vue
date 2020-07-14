<template>
  <div class="relative py-8">
    <div class="flex flex-wrap mx-auto">
      <div class="w-1/2">
        <ImgWrapper :src="tatiLogo" :bgImage="bgImage" class="w-4/5 mx-auto" />
      </div>
      <div class="w-1/2 flex-col-center">
        <div class="text-4xl font-medium">Vive disfrutando de cada momento que pasas contigo mismo.</div>
        <Boton text="Descubre el mindfulness" bgcolor="bg-lightAccent hover:bg-pink-200" />
      </div>
    </div>
  </div>
</template>

<script>
import ImgWrapper from "~/components/ImgWrapper.vue";
import Boton from "~/components/Boton.vue";

export default {
  data() {
    return {
      tatiLogo: require("~/assets/img/tatiLogo.png"),
      bgImage: require("~/assets/img/inkTexture.png")
    };
  },
  components: {
    ImgWrapper,
    Boton
  }
};
</script>