<template>
  <input
    ref="input"
    :value="value"
    :placeholder="format"
    class="form-input"
    type="text"
  >
</template>

<script>
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';

export default {
  name: 'DatePicker',
  props: {
    value: { required: true },
    format: { default: 'YYYY-MM-DD' },
    options: { default: {} }
  },
  mounted() {
    const picker = new Pikaday({
      field: this.$refs.input,
      format: this.format,
      onSelect: () => {
        this.$emit('input', picker.toString());
      },
      ...this.options
    });
  }
};
</script>
