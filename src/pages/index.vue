<script lang="ts" setup>
usePageStore().pageData.title = 'Homepage'
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink to="/projects">Projects</RouterLink>
  </div>
</template>
