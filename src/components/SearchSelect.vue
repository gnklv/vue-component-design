<template>
  <on-click-outside :do="close">
    <div
      :class="{ 'is-active': isOpen }"
      class="search-select">
      <button
        ref="select"
        type="button"
        class="search-select-input"
        @click="open">
        <span v-if="value">{{ value }}</span>
        <span
          v-else
          class="search-select-placeholder"
        >Select a band...</span>
      </button>
      <div
        v-show="isOpen"
        ref="dropdown"
        class="search-select-dropdown">
        <input
          ref="search"
          v-model="search"
          class="search-select-search"
          @keydown.esc="close"
          @keydown.up="highlightPrev"
          @keydown.down="highlightNext"
          @keydown.enter.prevent="selectHighlighted"
          @keydown.tab.prevent
        >
        <ul
          v-show="filteredOptions.length > 0"
          ref="options"
          class="search-select-options">
          <li
            v-for="(option, i) in filteredOptions"
            :key="option"
            :class="{ 'is-active': i === highlightedIndex }"
            class="search-select-option"
            @click="select(option)"
          >{{ option }}</li>
        </ul>
        <div
          v-show="filteredOptions.length === 0"
          class="search-select-empty">No results found for "{{ search }}"</div>
      </div>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from '@/components/OnClickOutside';
import Popper from 'popper.js';

export default {
  name: 'SearchSelect',
  components: {
    OnClickOutside
  },
  props: ['value', 'options', 'filterFunction'],
  data() {
    return {
      isOpen: false,
      search: '',
      highlightedIndex: 0
    };
  },
  computed: {
    filteredOptions() {
      return this.filterFunction(this.search, this.options);
    }
  },
  beforeDestroy() {
    this.popper.destroy();
  },
  methods: {
    open() {
      if (this.isOpen) return;

      this.isOpen = true;
      this.$nextTick(() => {
        this.setupPopper();
        this.$refs.search.focus();
        this.scrollToHighlighted();
      });
    },
    close() {
      this.isOpen = false;
      this.$refs.select.focus();
    },
    setupPopper() {
      if (this.popper === undefined) {
        this.popper = new Popper(this.$refs.select, this.$refs.dropdown, {
          placement: 'bottom'
        });
      } else {
        this.popper.scheduleUpdate();
      }
    },
    select(option) {
      this.$emit('input', option);
      this.search = '';
      this.highlightedIndex = this.filteredOptions.findIndex(
        obj => obj === option
      );
      this.close();
    },
    selectHighlighted() {
      this.select(this.filteredOptions[this.highlightedIndex]);
    },
    scrollToHighlighted() {
      this.$refs.options.children[this.highlightedIndex].scrollIntoView({
        block: 'nearest'
      });
    },
    highlight(index) {
      this.highlightedIndex = index;

      if (this.highlightedIndex < 0)
        this.highlightedIndex = this.filteredOptions.length - 1;

      if (this.highlightedIndex === this.filteredOptions.length)
        this.highlightedIndex = 0;

      this.scrollToHighlighted();
    },
    highlightPrev() {
      this.highlight(this.highlightedIndex - 1);
    },
    highlightNext() {
      this.highlight(this.highlightedIndex + 1);
    }
  }
};
</script>
