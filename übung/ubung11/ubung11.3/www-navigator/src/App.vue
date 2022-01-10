<template>
  <div id="app">
    <Header/>
    <Nav></Nav>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
      Header,
      Nav,
      Footer
  },
  data(){
    return {
      header: [
        {

        }
      ]
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
