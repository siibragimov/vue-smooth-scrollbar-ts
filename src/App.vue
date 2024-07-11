<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import Sidebar from './components/Sidebar.vue'
  import VueSmoothScrollbarTs from '../lib/VueSmoothScrollbarTs.vue'
</script>

<template>
  <div class="page">
    <aside ref="container" class="container">
      <VueSmoothScrollbarTs>
        <div class="container__content">
          <h1>Smooth scroll</h1>
          <p><strong>Scroll down to see how it works</strong></p>

          <hr>
          <p><strong>Note:</strong> the <code>.container</code> should have limited height of the block, it works the same way as in the case with <i>overflow: scroll</i></p>
          <hr>
          
          <img src="./assets/vue.svg" class="logo" alt="Vue logo" />

          <Sidebar/>
        </div>
      </VueSmoothScrollbarTs>
    </aside>

    <section class="section">
      <VueSmoothScrollbarTs class="section__scroll">
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
        <HelloWorld msg="Vue + Nuxt compatible" />
      </VueSmoothScrollbarTs>
    </section>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2em;
  width: 100%;
  height: calc(100vh - 4rem);
  max-height: 100vh;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.section {
  width: calc(100% - 300px);
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  gap: 2rem;
}

/* Define styles of Sidebar container */
.container {
  position: relative;
  width: 300px;
  height: calc(100vh - 4rem);
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.container__content {
  width: 300px;
}
</style>

<style>
/* Override styles of second scrollbar */
.section__scroll .scrollbar-track::after {
  background-color: #000;
  opacity: 0.2;
  width: 1px;
  content: '';
  display: block;
  height: 100%;
  z-index: 0;
  position: relative;
  margin: 0 auto;
}

.section__scroll .scrollbar-track.scrollbar-track-y {
  background-color: transparent;
  width: 5px;
}

.section__scroll .scrollbar-thumb.scrollbar-thumb-y {
  z-index: 1;
  background-color: #a1a1a1;
  width: 5px;
}
</style>
