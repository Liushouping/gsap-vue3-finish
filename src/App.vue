<script>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import Loader from '@/components/Loader.vue'
export default {
  setup() {

    const triggers = ScrollTrigger.getAll();

    onMounted(() => {
      ScrollTrigger.refresh();

      let mm = gsap.matchMedia();
      mm.add("(min-width: 1280px)", () => {
        // let sections = gsap.utils.toArray('.process__item');
        // let process = document.querySelector('.process');
        // gsap.to(sections, {
        //   xPercent: -84 * (sections.length - 1),
        //   ease: "none",
        //   scrollTrigger: {
        //     trigger: process,
        //     markers: false,
        //     scrub: 1,
        //     pin: true,
        //   },
        // });
      });

    });
    onUnmounted(() => {
      triggers.forEach((trigger) => {
        trigger.kill();
      });
      ScrollTrigger.clearMatchMedia();
    });

    return {
    };
  },
  components: {
    Loader
  },
}
</script>

<template>
  <router-view></router-view>
  <Loader />
</template>


