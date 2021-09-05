<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue';
// import Home from './views/Home.vue';

import { ref, reactive, computed } from 'vue';

export default {
  setup() {
    console.log('setup');

    const state = reactive({
      num1: 1,
      num2: 2,
      result: computed(() => {
        return parseInt(state.num1) + parseInt(state.num2);
      }),
    });

    // function add() {
    //   state.result = parseInt(state.num1) + parseInt(state.num2);
    // }

    return {
      state,
      // add,
    };
  },
};
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <input v-model="state.num1" type="text" @keyup="add" />
  <span>+</span>
  <input v-model="state.num2" type="text" @keyup="add" />
  <span>{{ state.result }}</span>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
