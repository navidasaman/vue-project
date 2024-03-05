<template>   <!-- root tag -->
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to My Vue.js App"/>
    <h2 id='myOwnMessage'>{{ message }}</h2>
    <button @click="handlePress">Press Me!</button>
    <button @click="handleRunVueApp">What's the command to run the app, again?</button>
      <input type="text" ref="name">
      <button @click="handleInput">Submit Input Value</button>
      
      <NewComponent :description="date" :digit="digitValue" />
      <input type="date" ref="dates">  
      <button @click="handleDate">Submit Date</button>    
      <input type="number" ref="integer">
      <button @click="handleInteger">Submit Integer Value</button>
      <p :style="{ color }" @click="toggleColor">{{ date }} click me {{ digitValue }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NewComponent from './components/NewComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NewComponent
  },
  data() {
    return {
      message: 'This is my first change in a vue application',
      digitValue: null,
      date: null,
      color: 'red'
    }
  },
  methods: {
    handlePress() {
      this.message = "You clicked the button, Bravo!"
    },
    handleRunVueApp() {
      this.message = "npm run serve is the command!"
    },
    handleInput() {
      this.message = this.$refs.name.value;
    },
    handleInteger() {
      this.digitValue = parseInt(this.$refs.integer.value);

    },
    handleDate() {
      this.date = this.$refs.dates.value
    },
    toggleColor() {
      this.color = this.color === 'red' ? 'blue' : 'red'    
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
  color: #2c3e50;
  margin-top: 60px;
}
#myOwnMessage {
  color:rgba(84, 129, 114, 0.519);
}
button, input {
  margin-left: 10px;
}
</style>
