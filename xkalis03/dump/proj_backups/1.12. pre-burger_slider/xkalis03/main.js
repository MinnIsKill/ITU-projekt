const title = Vue.createApp({
   data: function() {
       return {
           title: 'Hudební škola',
           // Solution
           subtitle: '' 
           // Solution
       }
   }
})

//IMPORTING VUE-BURGER-MENU
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
export default {
    components: {
        Slide // Register your component
    }
}
