Vue.component('neue_input',{
    template: '<div><input type="text" v-model="nachricht">' +
        '<p><strong>Anzahl Buchstaben :</strong> {{bCount}}</p>'
        + '<p><strong>Anzahl Leerzeichen :</strong> {{lCount}}</p>' +
        '<p><strong>Anzahl Worte:</strong> {{wCount}}</p></div>',
    data: function () {
        return {
            nachricht: 'Aufgabe über Komponente',
            leerzeichen : 0
        }
    },
    computed: {
        bCount(){
            return this.nachricht.length - this.leerzeichen;
        },
        lCount(){
            return this.leerzeichen = this.nachricht.split(" ").length - 1;
        },
        wCount(){
            return this.nachricht.match(/(\w+)/g).length;
        }
    }
});

new Vue({
    el: '#app'
})