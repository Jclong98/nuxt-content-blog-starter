<script setup lang="ts"></script>
<template>
  <nav>
    <div class="flex justify-between p-4 max-w-prose mx-auto">
      <NuxtLink to="/">Home</NuxtLink>

      <div class="flex gap-4">
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>

        <DarkToggle />
      </div>
    </div>
  </nav>
</template>
