<template>
  <div class="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: 'App',
  components: {
    Navbar
  },
  setup() {
    document.getElementsByTagName('html')[0].classList.add('app-background')
    console.log(document.getElementsByTagName('html')[0])
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.app-background{
    background: linear-gradient(-45deg, #132b4c,#060850,#132b4c,#060850);
    min-height: 100vh;
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}


</style>
