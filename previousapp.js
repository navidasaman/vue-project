import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'

const app = Vue.createApp({ // create app, we pass in object=(root component), i.e. data and functions, templates etc
  //template: '<h2>h2 template from app.js</h2>'
  data(){ // function where an object is returned within
    return{
      dynamicValue: 'dynamic value',
      anotherDynamicValue: 'another dynamic value',
      thirdDynamicValue: 'third dynamic value',
      person: { name: 'Charlie', lastname: 'Peterson', img:'assets/1.jpg'},
      person: { name: 'Michelle', lastname: 'Carlson'},  
      number: 10,
      ifStatementBoolean: true
    }
  },
  methods: {
    changeAnotherDynamicValue(){
      this.anotherDynamicValue = "world"
    },
    changeThirdDynamicValue(thirdValue){
      this.thirdDynamicValue = thirdValue
    },
    toggleBoolean(){
      this.ifStatementBoolean = !this.ifStatementBoolean
    }
  }

})
app.mount('#app') // mount it to the div in the html page, dynamic events or data etc will be controlled by the vue app.