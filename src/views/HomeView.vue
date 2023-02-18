<script>
import AOS from "aos"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { onMounted, onUnmounted, ref, watch } from "vue"
import { useI18n } from "vue-i18n"
import Header from '../components/Header.vue'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup() {
    const { t, locale } = useI18n();

    watch(locale, (newlocale) => {
      localStorage.setItem("locale", newlocale);
    });

    const triggers = ScrollTrigger.getAll();
    const footer = ref();
    const divbgimg = ref();
    const divbg = ref();
    const bg = ref();
    const bgtwo = ref();
    const bgthree = ref();
    // let tl = null;
    // const gsapInit = () => {
    //     tl = gsap.timeline();
    //     tl.to(".pic1", {y: -1000, "opacity":1, duration: 1.5,delay: 1});
    //     tl.to(".pic2", {y: 1000, "opacity":1, duration: 1});
    // };

    onMounted(() => {
      // gsapInit();
      AOS.init();
      ScrollTrigger.refresh();
      let vr = gsap.utils.toArray('.vr');
      gsap.set(vr, {
        scale: 1,
      });
      gsap.to(vr, {
        scale: 150,
        delay: 1,
        duration: 3,
        scrollTrigger: {
          trigger: bgtwo.value,
          start: "top top",
          end: "bottom top",
          markers: false,
          scrub: true,
          pin: true,
        },
      });

      // let imgforfour = gsap.utils.toArray('.imgforfour');
      // gsap.set(imgforfour, {
      //   x: 2000,
      // });
      // gsap.to(imgforfour, {
      //   x: 0,
      //   ease: "power2.in",
      //   duration: 3,
      //   stagger: {
      //     amount: 1.5
      //   },
      //   scrollTrigger: {
      //     trigger: bgthree.value,
      //     start: "top top",
      //     end: "100px top",
      //     markers: false,
      //     scrub: true,
      //     pin: true,
      //   },
      // });

      let bgleft = gsap.utils.toArray('.bgleft');
      gsap.to(bgleft, {
        x: -2000,
        ease: "none",
        scrollTrigger: {
          trigger: divbg.value,
          scrub: true,
        },
      });
      let bgright = gsap.utils.toArray('.bgright');
      gsap.to(bgright, {
        x: 2000,
        ease: "none",
        scrollTrigger: {
          trigger: divbg.value,
          scrub: true,
        },
      });

      // let bgimg = gsap.utils.toArray('.bgimg');
      // gsap.to(bgimg, {
      //   yPercent: -20,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: divbgimg.value,
      //     scrub: true,
      //   },
      // });

      gsap.to(bg.value, {
        width: "100%",
        height: "100%",
        borderRadius: "0",
        duration: 0.5,
        scrollTrigger: {
          trigger: footer.value,
          start: "top top",
          end: "bottom top",
          markers: false,
          scrub: true,
          pin: true,
        },
      });
    });
    onUnmounted(() => {
      triggers.forEach((trigger) => {
        trigger.kill();
      });
      ScrollTrigger.clearMatchMedia();
    });

    return {
      bg,
      footer,
      divbgimg,

      divbg,

      bgtwo,bgthree,

      t,
      locale,
    };
  },
  components: {
    Header,
    
  },
}
</script>
<template>
  <Header />
  <!-- banner -->
  <div 
  id="home"
  class="relative w-full h-[720px] sm:h-[1000px] lg:h-[90vh] flex justify-center items-center overflow-hidden bg-white">
    <div class="w-[90%] flex flex-col lg:flex-row space-y-0 lg:space-x-12 justify-center items-end h-full">
      <div class="relative w-full lg:w-1/2 h-full order-2 lg:order-1">
        <div class="absolute bottom-0 z-20" >
          <img src="/image/p1.png" class="px-10">
        </div>
        <div class="absolute bottom-0 z-10" >
          <img src="/image/p2.png" class="px-10">
        </div>
      </div>
      <div class="relative w-full lg:w-1/2 flex flex-col justify-start lg:justify-center h-full order-1 lg:order-2 pt-12">
        <div class="absolute right-0 top-52 blur-[100px]">
            <img src="/image/p2.png" class="w-[200px]">
        </div>
        <p class="font-Roboto font-thin text-gray-900 text-[14px] tracking-[2px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <div class="my-6 lg:my-12 flex flex-col space-y-2">
          <p
        class="text-[42px] sm:text-[64px] font-AntonRegular text-gray-900 leading-none">Create</p>
          <p
          class="text-[42px] sm:text-[64px] font-AntonRegular text-gray-900 leading-none">experience</p>
          <p
          class="text-[42px] sm:text-[64px] font-AntonRegular text-gray-900 leading-none">life</p>
        </div>

        <ul class="flex flex-row space-x-4">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
          </li>
        </ul>
      </div>

    </div>
  </div>
  <!--  vr block  -->
  <div 
  ref="bgtwo"
  class="relative w-full h-screen flex flex-col justify-center items-center bg-cover bg-center overflow-hidden" 
  style="background-image: url('https://img.freepik.com/free-photo/woman-with-smart-glasses-futuristic-technology_53876-102978.jpg?w=1480&t=st=1669611896~exp=1669612496~hmac=92821590202a2c2f0d25da9ecda82242a61d4e986848280cc5d689d4f18cff2f');">
    <div class="border-2 border-white p-4 vr">
      <h2 class="text-[64px]  font-AntonRegular text-white tracking-[2px]">D</h2>
    </div>
  </div>
  <!--  four card -->
<!--   <div 
  id="card"
  ref="bgthree"
  class="relative w-full h-[720px] bg-gray-50 flex justify-center items-center py-24 overflow-hidden">
    <div class="w-[90%] flex flex-col">
      <div>
        <h2 
        class="text-[32px] sm:text-[64px] font-AntonRegular text-gray-900">Live in you life Live in you life</h2>
        <p 
        class="text-[16px] font-AntonRegular text-gray-700">Great life Great life Great life Great life Great life Great life</p>
      </div>
      <div class="flex flex-col sm:flex-row space-y-6 sm:space-y-0 space-x-0 sm:space-x-4 mt-6">
        <div class="w-full sm:w-1/4 h-[320px] imgforfour" v-for="i in 4">
          <img src="https://img.freepik.com/free-photo/woman-vr-glasses-float-neon-space-with-cables-attached-her-metaverse-avatar-concept_1217-3926.jpg?w=1800&t=st=1669700775~exp=1669701375~hmac=946701d04c45835a3ba868786a548958800b1e80013c58ce714c4b4e3a168cc8" class="h-full w-full rounded-[2rem]">
        </div>
      </div>
    </div>
  </div> -->
  <!-- -->
  <div class="relative bg-white w-full h-full flex flex-col justify-start items-center">
    <div class="w-[90%] flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2 pt-24 lg:py-24">
        <div class="sticky top-12"  data-aos="fade-right">
          <h5 class="text-gray-900 text-[48px] font-AntonRegular">Room 3D</h5>
          <p class="text-gray-900 text-[16px] font-Roboto leading-[2rem] pr-8">ELorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <img src="/image/3droom.png" class="pt-4">
        </div>
      </div>
      <div class="w-full lg:w-1/2 flex flex-col space-y-6 py-24">
        <div 
        v-for="(i,index) in 8" 
        data-aos="fade-up" 
        :data-aos-delay="index * 100" 
        class="relative overflow-hidden p-10 bg-gray-900 rounded-[1rem]">
          <div class="flex flex-row space-x-4 pb-6 items-end">
            <h5 class="text-white text-[32px] font-AntonRegular">Lorem</h5>
            <small class="text-white font-Roboto pb-2">X</small>
            <h5 class="text-white text-[32px] font-AntonRegular">Lorem</h5>
          </div>
          <div>
            <p class="text-white text-[16px] font-Roboto leading-[2rem]">HLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>

          <div class="absolute bottom-0 right-4 -z-[1] top-10 blur-[30px]">
            <img src="/image/p1.png">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- info block -->
  <div 
  id="info"
  class="relative w-full h-full flex flex-col items-center justify-center py-12">
    <div class="w-[90%] flex flex-col space-y-6">
      <div>
        <h2 
        class="text-[32px] sm:text-[64px] font-AntonRegular text-gray-900">Title Title</h2>
        <p 
        class="text-[16px] font-Roboto text-gray-700">description</p>
      </div>
      <div class="w-full flex flex-col md:flex-row space-x-0 md:space-x-12 space-y-6 md:space-y-0 items-end">
        <div class="w-full md:w-1/2">
          <div class="relative overflow-hidden rounded-[2rem]">
            <img src="https://img.freepik.com/free-photo/asian-child-feeling-excited-while-using-360-vr-headset-virtual-reality-metaverse-home_74952-1998.jpg?w=1480&t=st=1669612028~exp=1669612628~hmac=480fd5b37bdf82464c379a5b64e73317c8fd3766ab715a09fa61681cce88e237">
          </div>
        </div>
        <div 
        class="w-full md:w-1/2 flex flex-col space-y-3">
          <div 
          v-for="i in 4"
          class="w-full shadow p-6 text-white rounded-lg bg-gradient-to-r from-gray-900 via-gray-800 to-pink-900">
            <div class="flex flex-row justify-start items-center space-x-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-50">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                </svg>
              </span>
              <h2 class="text-[21px] font-AntonRegular text-gray-50">Title Title</h2>
            </div>
            <p class="font-Roboto text-gray-50 indent-[2rem]">description</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- left/right block -->
  <div
  ref="divbg"
  class="relative w-full h-[400px] flex justify-center items-center overflow-hidden bg-gray-900">
    <div 
    class="absolute bottom-36 bgleft">
      <p
      class="text-white  font-AntonRegular text-[140px] p-10 whitespace-nowrap" 
      style="text-stroke-width: 1px;text-stroke-color: black;">Create experience life Create experience life Create experience life Create experience life Create experience life</p>
    </div>
    <div 
    class="absolute bottom-0 bgright">
      <p
      class="text-white  font-AntonRegular text-[140px] p-10 whitespace-nowrap" 
      style="text-stroke-width: 1px;text-stroke-color: black;">Create experience life Create experience life Create experience life Create experience life Create experience life</p>
    </div>
  </div>
  <!-- footer -->
  <div 
  id="footer"
  ref="footer"
  class="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <div 
      ref="bg"
      class="w-[90%] h-[520px] rounded-[3rem] flex justify-center items-center bg-gray-900 relative overflow-hidden">
        <div class="absolute right-4 top-10 blur-[30px] z-[0]">
            <img src="/image/p1.png">
        </div>
<!--         <div class="w-[240px] h-[240px] rounded-full bg-white absolute top-0 -right-12 opacity-10">
        </div> -->
        <div class="w-[90%] h-full px-10 py-12 flex flex-col z-[10]">
          <div class="h-full flex flex-col md:flex-row">
            <div class="w-full lg:w-1/2 h-full flex flex-col relative">
              <h5 class="text-white text-[32px]  font-AntonRegular">Footer</h5>
              <p class="text-white font-AntonRegular font-light tracking-[1px] text-[16px] text-left">?????? ???? ??????</p>

              <ul class="text-white  font-AntonRegular py-12 space-y-2">
                <li class="flex flex-row space-x-4">
                  <span v-for="i in 3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                  </span>
                </li>
                <li class="text-[16px]">Tel: 09123123123</li>
                <li class="text-[16px]">Email: abc@gmail.com</li>
                <li class="text-[16px]">Address: NARUTO. In addition 21 F</li>
              </ul>
            </div>
            <div class="w-full lg:w-1/2 h-full flex justify-center items-center">

            </div>
          </div>
          <hr class="my-2">
          <p class="text-white text-[12px] sm:text-[16px] font-AntonRegular">Copyright © 2022 Qiaozai Inc. All Rights Reserved</p>
        </div>
      </div>
  </div>
</template>

