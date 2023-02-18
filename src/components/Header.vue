<script>
import { ref, onMounted } from "vue"

export default {
  setup() {
    const fullpage = ref(false);
    const navLinks = ref({
      Home: {
        name: "Home",
        href: "/"
      },
      Shop: {
        name: "About",
        href: "/"
      },
      Contact: {
        name: "Contact",
        href: "/"
      },
    });

    onMounted(() => {

    });
    return {
      fullpage,
      navLinks,
    }
  },
}
</script>

<template>
	<div class="relative w-full flex justify-center z-[0]"> 
		<header class="w-[90%] pt-10 flex flex-row justify-between items-center">
			<div>
				<a href="/" class="flex flex-row items-center space-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-10 h-10">
					  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-11-4.69v.447a3.5 3.5 0 001.025 2.475L8.293 10 8 10.293a1 1 0 000 1.414l1.06 1.06a1.5 1.5 0 01.44 1.061v.363a1 1 0 00.553.894l.276.139a1 1 0 001.342-.448l1.454-2.908a1.5 1.5 0 00-.281-1.731l-.772-.772a1 1 0 00-1.023-.242l-.384.128a.5.5 0 01-.606-.25l-.296-.592a.481.481 0 01.646-.646l.262.131a1 1 0 00.447.106h.188a1 1 0 00.949-1.316l-.068-.204a.5.5 0 01.149-.538l1.44-1.234A6.492 6.492 0 0116.5 10z" clip-rule="evenodd" />
					</svg>
					<p class="text-[28px] font-AntonRegular tracking-[1px] text-gray-900">Earth</p>
				</a>
			</div>
			<div>
				<ul class="h-full hidden sm:flex flex-row space-x-6 items-center justify-center text-gray-900">
					<li 
					v-for="(link, index) in navLinks" :key="link.name"
					class="text-[16px] font-AntonRegular tracking-[1px]">
						<router-link :to="link.href">{{ link.name }}</router-link>
					</li>
				</ul>

				<span class="flex sm:hidden">
					<button  @click="fullpage = true;">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-900">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
						</svg>
					</button>
				</span>
			</div>
		</header>
	</div>
	
	<Teleport to="body">
		<div 
		v-if="fullpage" 
		class="fixed top-0 left-0 bg-gray-900 w-full h-full flex flex-col justify-center items-center z-50">
		<div class="relative">
			<ul class="flex flex-col space-y-6">
				<li 
				@click="fullpage = false;"
				class="text-[16px] font-AntonRegular tracking-[1px] text-white text-center">
					<a href="#home">Home</a>
				</li>
				<li 
				@click="fullpage = false;"
				class="text-[16px] font-AntonRegular tracking-[1px] text-white text-center">
					<a href="https://www.google.com.tw/?hl=zh_TW" target="_blank">Shop</a>
				</li>
				<li 
				@click="fullpage = false;"
				class="text-[16px] font-AntonRegular tracking-[1px] text-white text-center">
					<a href="#footer">Contact</a>
				</li>
			</ul>

			<span class="fixed top-6 right-6">
				<button @click="fullpage = false;">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
					  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</span>
		</div>
		</div>
	</Teleport>
</template>