<template>
  <div>
    <h1>From Inside NewComponent.vue:</h1>
    {{ date }}
    {{ digit }}
  </div>
</template>

<script>
export default {
  name: 'NewComponent',
  props: {
    date: Date,
    digit: Number,
  }
}
</script>

