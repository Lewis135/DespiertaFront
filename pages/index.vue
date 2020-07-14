 <template>
  <!-- Body -->
  <div class="relative w-full">
    <TatiSection />
    <WavesBotDivider :textcolor="'text-primary'" :height="'h-16'" />
    <VicenteSection />
    <WavesTopDivider :textcolor="'text-primary'" :height="'h-16'" />

    <div>Seccion con los posts</div>
  </div>
</template>

<script>
import TatiSection from "~/components/sections/tatiSection.vue";
import VicenteSection from "~/components/sections/vicenteSection.vue";
import WavesBotDivider from "~/components/wavesBotDivider.vue";
import WavesTopDivider from "~/components/wavesTopDivider.vue";

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
    ImgWrapper
  }
};
</script>