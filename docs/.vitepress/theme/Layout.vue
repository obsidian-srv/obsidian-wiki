<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted, onUnmounted, ref } from 'vue'

const { Layout } = DefaultTheme
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 16
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div :class="{ 'is-scrolled': scrolled }">
    <Layout />
  </div>
</template>