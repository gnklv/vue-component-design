<template>
  <button
    type="button"
    @click="modalOpen = true"
  >
    <slot/>
    <confirm-delete-modal
      :show="modalOpen"
      :account-id="accountId"
      @close="modalOpen = false"
    />
  </button>
</template>

<script>
import ConfirmDeleteModal from './ConfirmDeleteModal.vue';

export default {
  name: 'DeleteAccountButton',
  components: {
    ConfirmDeleteModal
  },
  props: ['accountId'],
  data() {
    return {
      modalOpen: false
    };
  }
};
</script>

<style scoped>
</style>
