<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <EditForm/>
  </div>
</template>

<script>
import store from './store'
import EditForm from './components/EditForm'
export default {
  name: 'App',
  computed: {
    message() {
      return store.getters.message
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
