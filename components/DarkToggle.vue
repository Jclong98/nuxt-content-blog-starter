<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
  <button
    aria-label="Toggle Dark Mode"
    title="Toggle Dark Mode"
    class="text-xl"
    @click="toggleDark()"
  >
    <i class="dark:i-iconoir-sun-light i-iconoir-half-moon"></i>
  </button>
</template>
