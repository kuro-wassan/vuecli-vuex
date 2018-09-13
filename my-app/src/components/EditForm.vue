<template>
  <div class="edit-form">
    <h3>バインドとイベントを使った場合</h3>
    <input type="text" :value="message" @input="doUpdata">
    <h3>v-modelを使った場合</h3>
    <input v-model="message2">
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'EditForm',
  computed: {
    message () {
      return store.getters.message
    },
    message2: {
      get() { return store.getters.message },
      set(value) { store.dispatch('doUpdate', value) }
    }
  },
  methods: {
    doUpdate(event) {
      store.dispatch('doUpdate', event.target.value)
    }
  }
}
</script>

