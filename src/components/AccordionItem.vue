<template>
  <div class="accordion-item">
    <div 
      role="button" 
      class="accordion-item-header" 
      @click="toggle">
      <slot name="header"/>
      <svg 
        :class="{ 'rotate-90': active }"
        class="icon"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
    </div>
    <div 
      v-show="active" 
      class="accordion-item-body">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionItem',
  inject: ['accordionListState'],
  props: ['itemId'],
  computed: {
    active() {
      return this.accordionListState.activeItem === this.itemId;
    }
  },
  methods: {
    toggle() {
      this.accordionListState.activeItem = this.active ? null : this.itemId;
    }
  }
};
</script>

<style lang="scss">
.rotate-90 {
  transform: rotate(90deg);
}
</style>
