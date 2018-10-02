<template>
  <renderless-tag-input 
    :tags="tags" 
    :remove-on-backspace="false" 
    @update="(newTags) => $emit('update', newTags)">
    <div 
      slot-scope="{ tags, addTag, removeButtonEvents, inputProps, inputEvents }" 
      class="stacked-tag-input">
      <div class="stacked-tag-input-form">
        <input 
          v-bind="inputProps" 
          class="form-input"
          placeholder="Add tag..."
          v-on="inputEvents"
        >
        <button 
          class="btn btn-indigo"
          @click="addTag"
        >Add Tag</button>
      </div>
      <ul class="stacked-tag-list">
        <li 
          v-for="tag in tags" 
          :key="tag">
          {{ tag }}
          <button 
            type="button" 
            class="stacked-tag-link"
            v-on="removeButtonEvents(tag)"
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  </renderless-tag-input>
</template>

<script>
import RenderlessTagInput from './RenderlessTagInput.vue';

export default {
  components: {
    RenderlessTagInput
  },
  model: {
    prop: 'tags',
    event: 'update'
  },
  props: {
    tags: { required: true }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
