<template>
  <span
    :aria-checked="toggled.toString()"
    class="toggle"
    role="checkbox"
    tabindex="0"
    @click="toggle"
    @keydown.space.prevent="toggle"
  />
</template>

<script>
export default {
  model: {
    prop: 'toggled',
    event: 'toggle'
  },
  props: ['toggled'],
  methods: {
    toggle() {
      this.$emit('toggle', !this.toggled);
    }
  }
};
</script>
