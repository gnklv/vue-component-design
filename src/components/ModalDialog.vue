<template>
  <portal
    v-if="show"
    to="modals"
  >
    <div
      v-show="show"
      class="modal-backdrop"
    >
      <div 
        class="modal"
      >
        <slot/>
      </div>
    </div>
  </portal>
</template>

<script>
export default {
  name: 'ModalDialog',
  props: {
    show: { required: true },
    preventBackgroundScrolling: { default: true }
  },
  watch: {
    show: {
      immediate: true,
      handler(show) {
        this.preventBackgroundScrolling && show
          ? document.body.style.setProperty('overflow', 'hidden')
          : document.body.style.removeProperty('overflow');
      }
    }
  },
  created() {
    const escapeHandler = e => {
      if (e.key === 'Escape' && this.show) this.cancel();
    };

    document.addEventListener('keydown', escapeHandler);
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler);
    });
  },
  methods: {
    cancel() {
      this.$emit('close');
    }
  }
};
</script>
