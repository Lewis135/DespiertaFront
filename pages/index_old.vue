<template>
  <!-- <div class="absolute min-h-full w-full text-darkShade bg-lightShade"> -->
    <!-- Body -->
    <div id="body" class="relative w-full">
      <!-- Carrousel -->
      <div class="pt-24 flex justify-center h-screen bg-image">
        <!-- Principal view -->
        <div class="w-3/4 flex">
          <div class="w-2/3 flex-col-center">
            <div class="text-lightShade">
              <!-- <div class="text-6xl font-hairline font-semibold text-primary">Despierta</div> -->
              <div class="text-5xl">Vive disfrutando de cada momento que pasas contigo mismo.</div>
              <div
                class="w-48 py-5 text-center mt-10 bg-darkAccent hover:bg-yellow-600 text-xl text-lightShade rounded-2xl rounded-tr-none uppercase select-none cursor-pointer"
              >Empieza aquí</div>
            </div>
          </div>
          <!-- <div class="w-128 mx-auto flex-col-center"></div> -->
        </div>
      </div>
      <!-- Cuadritos de colores -->
      <div class="relative my-10 text-lightShade">
        <div class="w-4/5 mx-auto flex justify-around">
          <div class="px-10 w-1/3">
            <div
              class="h-48 bg-green-400 hover:bg-green-600 p-8 rounded-2xl rounded-tr-none text-center shadow-lg"
            >
              <h1 class="text-3xl uppercase mb-4">Aprende</h1>
              <div class="text-xl">cursos online para mejorar tu vida</div>
            </div>
          </div>
          <div class="px-10 w-1/3">
            <div
              class="h-48 bg-red-400 hover:bg-red-600 p-8 rounded-2xl rounded-tr-none text-center shadow-lg"
            >
              <h1 class="text-3xl uppercase mb-4">Siente</h1>
              <div class="text-xl">el presente y cambia tu forma de vivir</div>
            </div>
          </div>
          <div class="px-10 w-1/3">
            <div
              class="h-48 bg-orange-400 hover:bg-yellow-600 p-8 rounded-2xl rounded-tr-none text-center shadow-lg"
            >
              <h1 class="text-3xl uppercase mb-4">Descubre</h1>
              <div class="text-xl">tu mundo interior y a ti misma, te ayudamos en el proceso</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Posts -->
      <div class="flex w-3/4 mx-auto">
        <!-- Left -->
        <div class="w-2/3 pr-8">
          <div v-for="index in lista" :key="index" class="my-4 h-40">
            <div
              class="relative h-full border-darkAccent border-opacity-50 border-b flex pr-8 py-4"
            >
              <div class="mx-auto flex">
                <div
                  class="font-bold text-darkAccent h-full w-2/5 bg-lightAccent rounded-sm flex-col-center"
                >
                  <div class="w-10 h-10 rounded-full bg-primary mx-auto">
                    <span></span>
                  </div>
                </div>
                <div class="px-4 flex-col">
                  <div class="font-semibold">Titulum fantasi</div>
                  <div>
                    Cursus fantasticum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Right -->
        <div class="w-1/3 my-8 p-4 px-6 bg-lightAccent h-128 rounded">
          <div class="font-bold text-2xl">Noticias</div>
          <div class="text-sm">Te avisamos de nuevos cursos y noticias:</div>
          <input
            placeholder="correo@elec.es"
            class="mt-2 w-full rounded-t border-b border-darkAccent focus:outline-none"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data() {
    return {
      lista: [1, 2, 3, 4, 6, 7],
      mandalaImg: require("~/assets/img/tatiLogo.png"),
      perrosol: require("~/assets/img/perrosol.jpg")
    };
  },
  computed: {
    bgPerroSol() {
      let bgstyle = "background-image: url(" + this.perrosol + ");";
      bgstyle += "filter: grayscale(75%);";
      return bgstyle;
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
