<template>
  <div class="relative h-40 flex border-b-2 border-darkAccent py-4 px-2">
    <!-- Imagen, WIP-->
    <div class="pr-2">
      <div class="w-40 h-full bg-lightAccent flex-col-center">
        <div class="w-10 h-10 rounded-full bg-primary mx-auto">
          <span></span>
        </div>
      </div>
    </div>
    <!-- Texto -->
    <div class="relative flex-grow pl-1 h-full overflow-hidden">
      <div class="font-semibold">{{titulo}}</div>
      <p class>{{summary}}</p>
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
        "Cursus fantasticum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.fantasticum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntfantasticum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    }
  }
};
</script>

<style>
</style>