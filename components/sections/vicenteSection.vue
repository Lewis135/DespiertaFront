<template>
  <div class="relative flex flex-col-reverse lg:flex-row py-8">
    <!-- <div class="flex"> -->
    <div class="w-full lg:w-1/2 flex-col-center">
      <div
        class="text-4xl font-medium"
      >Recupera energia y liberate del estres juntando el poder de los masajes con la aromaterapia.</div>
      <div class="text-2xl font-medium pt-4">Una experiencia que desperá tus sentidos.</div>
      <BotonLink
        class="mt-10 py-5 text-xl uppercase bg-darkAccent hover:bg-teal-500 transition-duration-250"
        text="Descubre como"
        ruta="/aromaterapia"
      />
    </div>
    <div class="w-full lg:w-1/2">
      <ImgWrapper :src="vicenLogo" class="w-4/5 mx-auto" />
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import ImgWrapper from "~/components/ImgWrapper.vue";

export default {
  name: "vicenteSection",
  data() {
    return {
      vicenLogo: require("~/assets/img/vicenteLogoQuiro.png"),
    };
  },
  components: {
    ImgWrapper,
  },
};
</script>