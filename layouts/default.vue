<template>
  <div class="body min-h-screen text-darkText">
    <div
      class="sticky top-0 w-full z-100 bg-lightShade shadow-lg border-b-6 border-lightAccent bg-opacity-98 h-32"
    >
      <div class="flex h-full w-3/4 mx-auto">
        <!-- Logo -->
        <div class="w-64 py-2 flex flex-col justify-end">
          <div class="text-yellow-600 text-3xl font-bold">Despierta</div>
        </div>
        <!-- Menu -->
        <div class="flex w-auto px-4 py-2 cursor-pointer">
          <div class="font-bold mt-auto text-lg px-8">Cursos</div>
          <div class="font-bold mt-auto text-lg px-8">Blog</div>
          <div class="font-bold mt-auto text-lg px-8">Contacto</div>
        </div>
      </div>
    </div>
    <nuxt class="relative" />

    <!-- Footer -->
    <div class="relative bg-darkText text-white shadow-2xl flex-col-end">
      <div class="mx-auto w-1/3">iconos de facebook y tal</div>
      <div class="relative mx-auto w-1/3 flex justify-between py-6">
        <a href="#" class="hover:text-lightAccent">Aviso legal</a>
        <a href="#" class="hover:text-lightAccent">Politica de privacidad</a>
        <a href="#" class="hover:text-lightAccent">Politica de cookies</a>
      </div>
      <!-- <div
        class="absolute bottom-0 right-2 text-sm text-primary"
      >Con mucho ♥♥ por Ricardo Montaner Lopez</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-os-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
