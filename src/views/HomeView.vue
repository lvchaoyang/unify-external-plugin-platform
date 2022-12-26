<template>
  <div class="home">
    <z-s-empty empty-tip="没有数据组件"></z-s-empty>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /examples

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
