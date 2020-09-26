<template>
  <div id="aromaterapia">
    <div class="relative">
      <!-- Cuerpo -->
      <div class="h-screen-3/4 w-full flex-col-center">
        <div class="absolute w-full z-1 flex justify-center py-8">
          <div class="leading-none font-extrabold text-white text-6xl text-center">
            <div class>QUIROMASAJISTA</div>
            <div class>Vicente Sabater</div>
          </div>
        </div>
        <!-- background -->
        <div class="relative h-full bg-gray-400 bg-cover" :style="bgMassage" />
      </div>

      <!-- Hablemos de vicente -->
      <div class="w-full flex justify-center max-w-screen-xl mx-auto my-8">
        <!-- Foto -->
        <div class="w-1/2 min-h-screen-3/4">
          <div class="mx-12 h-full bg-primary text-center">foto vicente</div>
        </div>
        <!-- Texto -->
        <div class="w-1/2">
          <h1>
            Quiromasajista
            <span class="text-darkAccent">Vicente Sabater</span>
          </h1>
          <div class="mt-4 mb-8">
            <span
              class="italic leading-10 text-2xl"
            >"Un buen quiromasajista no trata el dolor, lo elimina y previene su aparición"</span>
          </div>

          <!-- Secciones Titulo-->
          <div class="flex">
            <div
              v-for="section in sections"
              :key="section.id"
              class="mr-4 cursor-pointer border-b-2 border-transparent hover:text-darkAccent px-0 lg:px-3 transition-duration-250"
              :class="{'text-darkAccent  border-darkAccent' : selectedSection == section.id}"
              @click="selectedSection = section.id"
            >
              <h3>{{section.name}}</h3>
            </div>
          </div>
          <!-- Secciones contenido -->
          <div class="my-4" v-html="sections[selectedSection].text" />
          <div v-if="sections[selectedSection].list">
            <ol class="list-disc ml-4">
              <li
                v-for="(element, index) in sections[selectedSection].list"
                :key="index"
              >{{element}}</li>
            </ol>
          </div>
        </div>
      </div>

      <!-- Hablemos de lugar de trabajo  -->
      <div class="w-full bg-gray-100 p-8">
        <div class="flex justify-center max-w-screen-xl mx-auto">
          <div class="w-1/2 flex-col ml-auto text-center px-12">
            <h2 class="font-normal text-darkAccent">Nuestras instalaciones</h2>
            <div class="flex flex-col justify-around h-full">
              <div>
                <h1 class="w-88 mx-auto leading-tight">
                  <span>
                    Sala completamente
                    preparada para ti.
                  </span>
                </h1>
                <h2 class="font-normal text-darkAccent">Quiromasajismo en Teruel</h2>
                <div class="mt-6">
                  <BotonLink
                    class="bg-darkAccent hover:bg-teal-600 transition-duration-250 py-4"
                    text="Descubrir instalaciones"
                    ruta="/#/contacto"
                  />
                </div>
              </div>

              <div>
                <p>El centro de quiromasajismo de Despierta, centro de bienestar integral esta perfectamente y diseñado para ofrecer una experiencia tranquilizadora.</p>
                <p>Preparate para conseguir las maravillosas kangreburguer y poder descubrir cuantos trozos de cosas te puedes comer...</p>
              </div>
              <div class="mb-12 hover:italic cursor-pointer">
                <h3 class="text-darkAccent hover:">Donde estamos ></h3>
              </div>
            </div>
          </div>
          <div class="w-1/2">
            <div class="min-h-screen-3/4 bg-white text-center">Foto de la camilla</div>
          </div>
        </div>
      </div>

      <!-- Hablemos de la aromaterapia  -->
      <div class="w-full max-w-screen-xl mx-auto p-8">
        <div>
          <h1 class="text-center">Descubre y utiliza los mismos productos que nosotros</h1>
        </div>
        <div class="w-56 ml-auto mt-8 mx-4">
          <botonLink
            class="bg-darkAccent hover:bg-teal-600 transition-duration-250 h-full"
            text="Ver mas productos > "
          />
        </div>
        <!-- Productos -->
        <div class="w-full max-w-screen-xl flex flex-wrap justify-around text-center mx-auto">
          <div v-for="(item,id) in listaProducts" :key="id" class="w-full md:w-1/4 px-4 py-6">
            <!-- Prd -->
            <div
              class="bg-gray-100 py-4 px-3 rounded shadow-lg hover:shadow-2xl transition-duration-250"
            >
              <div class="h-32 mx-auto rounded text-center bg-primary transition-duration-250"></div>
              <h3 class="mb-4">{{item.title}}</h3>
              <div class="flex justify-end">
                <h3 class>{{item.price}}€</h3>
                <div class="w-32 ml-8">
                  <botonLink
                    class="bg-darkAccent hover:bg-teal-600 transition-duration-250 h-full"
                    text="Lo quiero"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hablemos del Blog -->
      <div class="min-h-screen h-screen w-full">
        <div class="absolute w-full z-1 my-24">
          <div class="w-full max-w-screen-xl mx-auto">
            <div class="text-3xl text-green-400 mb-4 text-center">Nuestro Blog</div>
            <div class="text-4xl font-bold text-white uppercase text-center">Blog de quiromasajismo</div>
            <div class="flex justify-center my-8">
              <!-- Posts -->
              <div class="w-full flex justify-center">
                <div class="w-1/3 mx-12" v-for="(post, id) in listaPost" :key="id">
                  <div class="max-h-100 h-100 bg-primary p-4 flex flex-col justify-around">
                    <div>
                      <div class="h-32 bg-white">{{`${post.foto}` || "foto"}}</div>
                      <div class="font-semibold text-xl text-center">{{post.titulo}}</div>
                      <v-clamp :max-lines="5" class="mt-4">{{`${post.resumen}` || `${post.texto}`}}</v-clamp>
                    </div>
                    <div class="hover:italic cursor-pointer mt-auto mb-2 transition-duration-500">
                      <h4 class="text-darkAccent hover:">Leer más ></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Ver mas articulos -->
            <div
              class="hover:italic cursor-pointer mt-auto mb-2 transition-duration-500 text-center"
            >
              <h3 class="text-darkAccent uppercase">Mas articulos ></h3>
            </div>
          </div>
        </div>
        <!-- background -->
        <div
          class="relative h-full bg-gray-400 bg-cover hover:italics cursor-pointer"
          :style="bgBlog"
        />
      </div>

      <!-- especialidades -->
      <SeccionWrapper
        pretitle="Nuestras Especialidades de"
        title="Quiromasajismo y aromaterapia"
        class="text-center"
      >
        <!-- 1 -->
        <div class="flex flex-wrap my-12">
          <div class="w-1/2 px-3">
            <div class="h-102 bg-primary">Foto</div>
          </div>
          <div class="w-1/2 px-3 flex flex-col justify-center">
            <h2 class="mb-8">{{titleIpsum}}</h2>
            <p class="font-medium text-darkText">{{loremIpsum}}</p>
          </div>
        </div>
        <!-- 2 -->
        <div class="flex flex-wrap flex-row-reverse my-12">
          <div class="w-1/2 px-3">
            <div class="h-102 bg-primary">Foto</div>
          </div>
          <div class="w-1/2 px-3 flex flex-col justify-center">
            <h2 class="mb-8">{{titleIpsum}}</h2>
            <p class="font-medium text-darkText">{{loremIpsum}}</p>
          </div>
        </div>
      </SeccionWrapper>
    </div>
  </div>
</template>
<script>
import VClamp from "vue-clamp";
import SeccionWrapper from "~/components/SeccionWrapper.vue";
export default {
  name: "Aromaterapia",
  data() {
    return {
      imgMassage: require("~/assets/img/massage.jpg"),
      imgBlog: require("~/assets/img/massageRoom.jpg"),
      sections: [
        {
          id: 0,
          name: "Clinica",
          text:
            "<div>Nuestro centro de quiromasajismo se encuentra en P.Sherman calle Wallaby, 42. Sidney. Este centro ha sido diseñado y planificado por todo el equipo cuidando" +
            "hasta el mas minimo detalle para poder garantizar un trabajo de excelencia en las condiciones más optimas, ademas de garantizar las mejores condiciones, " +
            "nos esforzamos para que sea lo mas acogedor posible.</div><br/><div>El centro Despierta se encuentra a pocos metros de la escultura de Nemo y su submarino, con salas " +
            "amplias preparadas para ti.</div>",
        },
        {
          id: 1,
          name: "Formación",
          text:
            "<div>Los años de formación y multitud de titulos se complementan con una amplia experiencia en todo tipo de tecnicas y tratamientos. </div><br/><div> Nuestro centro de quirmasajismo " +
            "y aromaterapia dispone de una biblioteca y multitud de cursos para continuar ofreciendo los ultimos avances con los tratamientos mas adecuados para cada caso.</div><br/><div> " +
            "La formación continua es un pilar importante y por ello no dejamos de formarnos para poder ofrecerte las últimas y mejores técnicas en nuestros tratamientos.</div>",
        },
        {
          id: 2,
          name: "Especialidades",
          text:
            "Nuestra clínica de quiromasajismo y aromaterapia esta especializado en todas las tecnicas y tratamientos:",
          list: [
            "Bailes de salon",
            "Construccion de capiteles",
            "Origami",
            "Shinkansen",
          ],
        },
        {
          id: 3,
          name: "Experiencia",
          text:
            "Nuestro centro de quiromasajismo y aromaterapia dispone de un equipo con una gran trayectoria profesional en el campo del quiromasajismo, en campos como:",
          list: [
            "Desacople de componentes",
            "Encuestas a pingüinos",
            "Rotuladores azules y verdes",
            "Ruedas sin eje",
            "Teteras de goteo",
            "Teteras continuas",
          ],
        },
      ],
      listaProducts: [
        {
          title: "Aceite de singapur",
          text: "Descubre una tortuga comiendose un calamar para desayunar",
          price: "233.00",
        },
        {
          title: "Lana de singapur",
          text: "Extraida de las mejores ovejas de singapur",

          price: "2.00",
        },
        {
          title: "Collar de singapur",
          text:
            "Si no sabes lo que son los collares de Singapur, puede que duermas mas tranquilo.",
          price: "3.00",
        },
        {
          title: "Vela de singapur",
          text: "No auyenta a los mosquitos, pero si a los tigres",
          price: "154.00",
        },
        {
          title: "Vela de singapur",
          text: "No auyenta a los mosquitos, pero si a los tigres",
          price: "154.00",
        },
        {
          title: "Aceite de singapur",
          text: "Descubre una tortuga comiendose un calamar para desayunar",
          price: "233.00",
        },
        {
          title: "Lana de singapur",
          text: "Extraida de las mejores ovejas de singapur",

          price: "2.00",
        },
        {
          title: "Collar de singapur",
          text:
            "Si no sabes lo que son los collares de Singapur, puede que duermas mas tranquilo.",
          price: "3.00",
        },
      ],
      listaPost: [
        {
          titulo: "Titulo post",
          resumen:
            "tem.resumen con lorem ipsum y blablablablablbla .. item.resumen con loremblablablablablbla .. um y blablablablablbla .. item.resumen con loremblablablablablbla .. item item.resumen con lorem blablablablablbla .. item.resumen con lorem ipsum y blablablablablbla .. item.resumen con lorem ipsum y blablablablablbla",
          texto: "",
        },
        {
          titulo: "Titulo post2",
          resumen:
            "tem.resumen con lorem ipsum y blablablablablbla .. item.resumen con loremblablablablablbla .. um y blablablablablbla .. item.resumen con loremblablablablablbla .. item item.resumen con lorem blablablablablbla .. item.resumen con lorem ipsum y blablablablablbla .. item.resumen con lorem ipsum y blablablablablbla",
          texto: "",
        },
        {
          titulo: "Titulo post3",
          resumen:
            "tem.resumen con lorem ipsum y blablablablablbla .. item.resumen con loremblablablablablbla .. um y blablablablablbla .. item.resumen con loremblablablablablbla .. item item.resumen con lorem blablablablablbla .. item.resumen con lorem ipsum y blablablablablbla .. item.resumen con lorem ipsum y blablablablablbla",
          texto: "",
        },
      ],
      titleIpsum: "Quiromasajismum",
      loremIpsum:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet felis a eros congue egestas at vitae leo. Morbi enim arcu, porta eget hendrerit et, blandit et ex. Praesent ornare nulla et ipsum faucibus, eu bibendum mauris vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla tempus laoreet neque, sed placerat mi lacinia sit amet. Quisque dui sem, congue vitae ex quis, finibus facilisis elit. Pellentesque at porttitor massa.",
      selectedSection: 0,
    };
  },
  computed: {
    bgMassage() {
      let bgStyle = "background-image: url(" + this.imgMassage + ");";
      bgStyle += "filter:  saturate(0.50) brightness(63%);";
      bgStyle += "background-position:50% 60%;";
      return bgStyle;
    },
    bgBlog() {
      let bgStyle = "background-image: url(" + this.imgBlog + ");";
      bgStyle += "filter: saturate(0.50) brightness(40%);";
      bgStyle += "background-position:50% 60%;";
      return bgStyle;
    },
  },
  components: {
    VClamp,
    SeccionWrapper,
  },
};
</script>

<style>
</style>