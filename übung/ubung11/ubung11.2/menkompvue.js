Vue.component('vue-menu',{
    template: '#vmenue',
    data:()=>{
        return{
            currentmenu:'Home',
            listmenu : ['Home','News', 'Contact']
        }
    },
    computed:{
        currentmenuComponent: function (){
            return 'menu-'+this.currentmenu.toLowerCase()
        }
    }
});

Vue.component('menu-home',{
    template: '<div>Home content</div>'
});
Vue.component('menu-news',{
    template: '<div>News content</div>'
});
Vue.component('menu-contact',{
    template: '<div>Contact content</div>'
});
const vm=new Vue({
    el: '#App',
    data:{
        currentmenu:'Home',
        listmenu : ['Home','News', 'Contact']
    },
    computed:{
        currentmenuComponent: function (){
            return 'menu-'+this.currentmenu.toLowerCase()
        }
    }
})