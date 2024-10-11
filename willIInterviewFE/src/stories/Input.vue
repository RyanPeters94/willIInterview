<template>
  <input  :type="props.type" :placeholder="props.placeholder">{{ label }} </input>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  /**
   * The label of the button
   */
  type?: string,

  placeholder?: string,

}>(), {});

</script>