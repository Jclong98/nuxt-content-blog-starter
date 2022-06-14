<template>
  <div>
    <NavBar />
    <main class="p4 max-w-prose mx-auto">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style>
html,
body {
  @apply transition-all duration-200 dark:(bg-black text-gray-100);
}
</style>
