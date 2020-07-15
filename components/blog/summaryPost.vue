<template>
  <div class="relative border-b-2 border-darkAccent pt-4 pb-2 px-2">
    <div class="flex h-40 max-h-64 overflow-hidden">
      <!-- Imagen, WIP-->
      <div class="pr-2">
        <div class="w-40 h-full bg-lightAccent flex-col-center">
          <div class="w-10 h-10 rounded-full bg-primary mx-auto">
            <span></span>
          </div>
        </div>
      </div>
      <!-- Texto -->
      <div class="relative flex-grow pl-1 h-full">
        <div class="font-semibold">{{titulo}}</div>
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
export default {
  name: "SummaryPost",
  props: {
    titulo: { default: "Titulum fantasy" },
    summary: {
      default:
        "Cuanto mas texto pongas mejor, pero sin olvidar que esto es un resumen que no deberia exceder las 40 palabras porque si no puede exceder el tamaño deseado y no mola. Siempre es mejor que sobre espacio que que falte. Jorobate Flanders "
    }
  },
  data() {
    return {
      listaTags: ["aromas", "masajes", "mindfulness"]
    };
  }
};
</script>

<style>
</style>