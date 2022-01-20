Vue.component('my-footer',{
    template:
        '<footer class="footer">\n' +
        '    <p class="pfooter"><span class="ft">Footer:</span> Sitemap Home News Contact About</p>\n' +
        '</footer>'
});
new Vue({
    el: '#AppFooter'
});
Vue.component('my-header',{
    template:'<header>' +
        '<h1> WWW-Navigator</h1>'+
        '</header>'
});
new Vue({
    el: '#AppHeader'
});
Vue.component('vue-menu',{
    template: '#vmenue',
    data:()=>{
        return{
            currentmenu:'Home',
            listmenu : ['HTML','CSS', 'JavaScript'],
            listmenuhtml : ['heading','paragraph'],
            listmenucss : ['selector','color'],
            listmenujs : ['function','objekt'],
        }
    }
});
const vm=new Vue({
    el: '#App'
});

const url = 'navVue.json';
async  function getData(){
    const response = await fetch(url);
    const data = await response.json();

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
}
getData();