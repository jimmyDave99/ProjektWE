<template>
  <nav class="content">
    <div class="menu"></div>
    <div class="docu">
      <h2>html</h2>
      <h3>headings</h3>
      <p>
        <span id="Htmlcontent"> </span>
      </p>
      <h3>Paragraph</h3>
      <p>
        <span id="parcontent"> </span>
      </p>
      <h2>css</h2>
      <h3>selectors</h3>
      <p>
        <span id="seleccontent"> </span>
      </p>
      <h3>colors</h3>
      <p>
        <span id="colorcontent"> </span>
      </p>
      <h2>Javascript</h2>
      <h3>function</h3>
      <p>
        <span id="funccontent"> </span>
      </p>
      <h3>object</h3>
      <p>
        <span id="objectcontent"> </span>
      </p>
    </div>

    <div class="ref">
      <p>
        <span id="Html_ref"> </span>
      </p>
      <p>
        <span id="pararef"> </span>
      </p>
      <p>
        <span id="selecref"> </span>
      </p>
      <p>
        <span id="colorref"> </span>
      </p>
      <p>
        <span id="funcref"> </span>
      </p>
      <p>
        <span id="objectref"> </span>
      </p>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data: function (){
    return {
      url : 'nav.json'
    }
  },
  methods: {
    async  getData(){
      const response = await fetch(this.url);
      const data = await response.json();
      //const {html}= data;

      document.getElementById('Htmlcontent').textContent=data['html']['headings']['content'];
      document.getElementById('Html_ref').textContent=data['html']['headings']['references'];
      document.getElementById('parcontent').textContent=data['html']['paragraph']['content'];
      document.getElementById('pararef').textContent=data['html']['paragraph']['references'];
      document.getElementById('seleccontent').textContent=data['css']['selectors']['content'];
      document.getElementById('selecref').textContent=data['css']['selectors']['references'];
      document.getElementById('colorcontent').textContent=data['css']['colors']['content'];
      document.getElementById('colorref').textContent=data['css']['colors']['references'];
      document.getElementById('funccontent').textContent=data['javascript']['function']['content'];
      document.getElementById('funcref').textContent=data['javascript']['function']['references'];
      document.getElementById('objectcontent').textContent=data['javascript']['object']['content'];
      document.getElementById('objectref').textContent=data['javascript']['object']['references'];
      console.log(data);
    }
  }
}
</script>

<style scoped>
.content{
  display: grid;
  grid-template-columns: 20% 60% 20%;
  padding: 0;
  margin: 0;
}
.menu{
  background-color: #c28283;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 0;
  margin: 0;
}
.docu{
  background-color: #95d2f4;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.ref{
  background-color: #c28283;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  color: white;
}
</style>