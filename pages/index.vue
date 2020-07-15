 <template>
  <!-- Body -->
  <div class="relative w-full overflow-x-hidden">
    <!-- Tati -->
    <div class="flex-col-center">
      <TatiSection class="w-10/12 mx-auto" />
    </div>

    <WavesBotDivider class="text-primary" :height="'h-20'" />
    <!-- <WavesTopDivider class="text-primary" :height="'h-16'" /> -->

    <!-- Vicente -->
    <div class="flex-col-center bg-primary">
      <VicenteSection class="w-10/12 mx-auto" />
    </div>

    <!-- <WavesTopDivider :textcolor="'text-primary'" :height="'h-16'" /> -->

    <!-- <WavesBotDivider class="text-darkAccent" :height="'h-16'" /> -->
    <WavesTopDivider class="text-primary w-5/2" :height="'h-16'" />

    <!-- Posts -->
    <div class="flex-col-center">
      <PostsPrincipales class="w-10/12 mx-auto" />
    </div>

    <div class="text-primary hover:text-pink-200 transition-duration-5000 w-full hover:w-5/2">
      <WavesBotDivider class="w-5/2" :height="'h-20'" />
      <WavesTopDivider :height="'h-16'" />
    </div>
    <!-- Seccion de clientes -->
    <div class="flex-col-center">
      <clientesContentos />
    </div>
    <WavesBotDivider class="text-darkText" :height="'h-40'" />
  </div>
</template>

<script>
import TatiSection from "~/components/sections/tatiSection.vue";
import VicenteSection from "~/components/sections/vicenteSection.vue";
import WavesBotDivider from "~/components/wavesBotDivider.vue";
import WavesTopDivider from "~/components/wavesTopDivider.vue";
import PostsPrincipales from "~/components/blog/postsPrincipales.vue";
import ClientesContentos from "~/components/clientesContentos.vue";

import ImgWrapper from "~/components/ImgWrapper.vue";

export default {
  data() {
    return {
      // tatiLogo: require("~/assets/img/tatiLogo.png"),
      // bgImage: require("~/assets/img/inkTexture.png")
      // perrosol: require("~/assets/img/perrosol.jpg")
    };
  },
  computed: {
    bgPerroSol() {
      let bgstyle = "background-image: url(" + this.perrosol + ");";
      bgstyle += "filter: grayscale(75%);";
      return bgstyle;
    }
  },
  components: {
    TatiSection,
    VicenteSection,
    WavesBotDivider,
    WavesTopDivider,
    PostsPrincipales,
    ClientesContentos,
    ImgWrapper
  }
};
</script>