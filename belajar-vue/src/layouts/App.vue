<<<<<<< HEAD
<script setup>
    import Navbar from '@/components/app/Navbar.vue';
    import Breadcrumb from '@/components/app/Breadcrumb.vue';
</script>

<template>
    <div class="app-layout">
        <Navbar />
        <main class="main-content">
            <Breadcrumb />
            <router-view />
        </main>
    </div>
=======
<script setup lang="ts">
import Navbar from '@/components/app/Navbar.vue'
import Breadcrumb from '@/components/app/Breadcrumb.vue'
</script>

<template>
  <div class="app-layout">
    <Navbar />
    <main class="main-content">
      <Breadcrumb />
      <router-view />
    </main>
  </div>
>>>>>>> fe8196a (first commit)
</template>

<style scoped>
.app-layout {
<<<<<<< HEAD
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
    padding: 2rem;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
=======
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
>>>>>>> fe8196a (first commit)
}
</style>