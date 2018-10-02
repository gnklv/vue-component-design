<template>
  <div class="accordion-list">
    <slot/>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      accordionListState: this.sharedState
    };
  },
  name: 'AccordionList',
  data() {
    return {
      sharedState: {
        activeItem: 1
      }
    };
  }
};
</script>
