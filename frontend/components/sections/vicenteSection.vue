<template>
  <div class="relative min-h-screen-2/3 w-full bg-primary flex-col-center py-8">
    <div class="flex-col-center">
      <div class="flex flex-wrap w-10/12 mx-auto">
        <div class="w-1/2 flex-col-center">
          <div
            class="text-4xl font-medium"
          >Recupera energia y liberate del estres juntando el poder de los masajes con la aromaterapia.</div>
          <div class="text-2xl font-medium pt-4">Una experiencia que desperá tus sentidos.</div>
          <div
            class="mx-auto p-5 text-center mt-10 bg-darkAccent hover:bg-yellow-600 rounded-2xl rounded-tr-none select-none cursor-pointer shadow-lg"
          >
            <span class="text-xl text-lightShade uppercase font-medium">Descubre como</span>
          </div>
        </div>
        <div class="w-1/2">
          <ImgWrapper :src="vicenLogo" class="w-4/5 mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgWrapper from "~/components/ImgWrapper.vue";

export default {
  name: "vicenteSection",
  data() {
    return {
      vicenLogo: require("~/assets/img/vicenteLogoQuiro.png")
    };
  },
  components: {
    ImgWrapper
  }
};
</script>