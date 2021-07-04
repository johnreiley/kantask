<template>
  <div class="list-tab-container">
    <div class="list-tab" :class="{'list-tab--active': active}">
      <div v-if="active" class="list-tab__underlay" :class="[bgColor]"></div>
      <span class="list-tab__left">
        <span class="list-tab__icon" :class="iconColor">
          <global-icons icon="ph-folder-notch" size="24px"></global-icons>
        </span>
        <span class="list-tab__text">Work</span>
      </span>
      <span v-if="count" class="list-tab__count badge">10</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import colorMapper from '../../mixins/ColorMapper';

import GlobalIcons from '../GlobalIcons/GlobalIcons.vue';


export default defineComponent({
  mixins: [
    colorMapper
  ],
  components: {
    GlobalIcons
  },
  props: {
    color: {
      type: String,
      default: 'red',
      validator(value: string) {
        return [
          'red', 
          'orange', 
          'yellow', 
          'green', 
          'turqoise', 
          'blue', 
          'purple', 
          'magenta'].includes(value);
      }
    },
    text: String,
    active: {
      type: Boolean,
      default: false
    },
    count: Number
  },
  computed: {
    bgColor(): string {
      return this.getBgColorClass(this.color);
    },
    iconColor(): string {
      return this.getFontColorClass(this.color);
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../scss/partials/variables';

.list-tab-container {
  position: relative;
  z-index: 10;
}

.list-tab {
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50px;
  padding: 12px;
  font-size: 18px;
  align-items: center;
  justify-content: space-between;
  background-color: $UI-700;
  border-radius: $BR-3;

  &__underlay {
    position: absolute;
    height: inherit;
    top: 0;
    left: 0;
    width: 100%;
    padding: inherit;
    border-radius: inherit;
    z-index: -1;
  }

  &--active {
    background: linear-gradient(90deg, $UI-700+#{'95'} 0%, $UI-700 50%, $UI-700 100%);
  }

  &__left {
    display: flex;
    align-items: center;
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    margin-right: 8px;
  }
}
</style>