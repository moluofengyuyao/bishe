<template>
  <div class="home">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Footer from "../components/Footer";
import Main from "../components/Main";

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Main
  }
}
</script>
