<template>
  <footer class="footer">
    <p class="pfooter"><span class="ft">Footer:</span>
      <a href="#"> About</a>
      <a href="#"> Services</a>
      <a href="#"> Clients</a>
      <a href="#"> Contact</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer{
  background-color: black;
  height: 50px;
  width: 100%;
}
.pfooter{
  text-align: center;
  color: white;
  padding: 10px;
}
.ft{
  font-size: 20px;
}
a{
  color: white;
  font-size: 20px;
}
</style>