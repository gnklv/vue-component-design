<template>
  <div class="min-h-screen bg-grey-darker p-8">

    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Stacked Tag Input</label>
      <stacked-tag-input v-model="tags"/>
    </div>

    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Inline Tag Input</label>
      <inline-tag-input v-model="tags"/>
    </div>

    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Original Tag Input</label>
      <tag-input v-model="tags"/>
    </div>

  </div>
</template>

<script>
import TagInput from '@/components/TagInput.vue';
import InlineTagInput from '@/components/InlineTagInput.vue';
import StackedTagInput from '@/components/StackedTagInput.vue';

export default {
  name: 'Tags',
  components: {
    TagInput,
    InlineTagInput,
    StackedTagInput
  },
  data() {
    return {
      tags: ['awesome', 'excellent', 'amazing']
    };
  }
};
</script>
