 <template>
  <!-- Body -->
  <div class="relative w-full overflow-x-hidden">
    <!-- Tati -->
    <div class="flex-col-center min-h-screen-2/2">
      <TatiSection class="w-10/12 mx-auto" />
    </div>

    <WavesBotDivider :textcolor="'text-primary'" :height="'h-16'" />

    <!-- Vicente -->
    <div class="flex-col-center min-h-screen-2/3 bg-primary">
      <VicenteSection class="w-10/12 mx-auto" />
    </div>

    <WavesTopDivider :textcolor="'text-primary'" :height="'h-16'" />
    <WavesBotDivider :textcolor="'text-primary'" :height="'h-16'" :width="'w-5/2'" />

    <!-- Posts -->
    <div class="flex-col-center bg-primary">
      <PostsPrincipales class="w-10/12 mx-auto" />
    </div>
  </div>
</template>

<script>
import TatiSection from "~/components/sections/tatiSection.vue";
import VicenteSection from "~/components/sections/vicenteSection.vue";
import WavesBotDivider from "~/components/wavesBotDivider.vue";
import WavesTopDivider from "~/components/wavesTopDivider.vue";
import PostsPrincipales from "~/components/blog/postsPrincipales.vue";

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
    ImgWrapper
  }
};
</script>