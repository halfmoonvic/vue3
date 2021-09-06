<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue';
// import Home from './views/Home.vue';

import {
  ref,
  computed,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
} from 'vue';

export default {
  setup(props, ctx) {
    console.log('setup');

    const num1 = ref(1);
    const num2 = ref(2);
    const result = computed(() => parseInt(num1.value) + parseInt(num2.value));

    // function add() {
    //   result.value = parseInt(num1.value) + parseInt(num2.value);
    // }

    onMounted(() => {
      console.log('Home.vue mounted');
    });

    onRenderTracked(e => {
      console.log('home tracked', e);
    });
    onRenderTriggered(() => {
      console.log('home trigger');
    });

    function change() {
      ctx.emit('sendMsg', result.value);
      // console.log('click');
    }

    return {
      num1,
      num2,
      result,
      change,
      // add,
    };
  },
};
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <input v-model="num1" type="text" />
  <span>+</span>
  <input v-model="num2" type="text" />
  <span>{{ result }}</span>
  <button @click="change">fea</button>
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
