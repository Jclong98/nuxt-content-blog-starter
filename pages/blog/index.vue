<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () =>
  queryContent()
    .where({ _path: { $contains: '/blog' } })
    .sort({
      date: -1,
    })
    .find()
)
</script>

<template>
  <div class="flex flex-col gap-4">
    <NuxtLink
      v-for="post in posts"
      :key="post._path"
      :to="post._path"
      class="border rounded p-4"
    >
      <p>
        {{
          new Date(post.date).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        }}
      </p>
      <h2 class="text-2xl font-semibold">{{ post.title }}</h2>
      <p>{{ post.description }}</p>
    </NuxtLink>
  </div>
</template>
