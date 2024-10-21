<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <v-alert
    title="Alert title"
    color="primary"
    variant="tonal"
    >
      {{ msg }}
    </v-alert>
</template>
