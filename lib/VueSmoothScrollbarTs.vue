<script setup lang="ts">
  import type { Scrollbar, ScrollbarOptions } from 'smooth-scrollbar/interfaces';
  import { ScrollbarPlugin } from 'smooth-scrollbar/plugin';
  import SmoothScrollbar from 'smooth-scrollbar';
  import { computed, onBeforeUnmount, onMounted, onUpdated, ref, nextTick } from 'vue';

  type Maybe<T> = T | null;

  const defaults = (...args: Record<string, unknown>[]) =>
    args.reverse().reduce((acc, obj) => ({ ...acc, ...obj }), {});

  const DEFAULT_OPTIONS: Partial<ScrollbarOptions> = {
    damping: 0.1,
    thumbMinSize: 20,
    renderByPixels: true,
    alwaysShowTracks: false,
    continuousScrolling: true,
    delegateTo: null,
    plugins: {},
  };

  interface Props {
    options?: Partial<ScrollbarOptions>;
    plugins?: Array<typeof ScrollbarPlugin>;
    scrollIntoView?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    options: () => ({}),
    plugins: () => [],
    scrollIntoView: false,
  });

  const scrollable = ref<Maybe<HTMLDivElement>>(null);
  const scrollBar = ref<Maybe<Scrollbar>>(null);

  const hasPlugins = computed<boolean>(() => (Array.isArray(props.plugins) ? !!props.plugins.length : false));

  const focus = (): void => {
    if (!props.scrollIntoView) {
      return;
    }

    scrollBar.value?.containerEl.focus();
  };

  const init = () => {
    nextTick(() => {
      if (hasPlugins.value) {
        props.plugins.forEach((plugin) => {
          SmoothScrollbar.use(plugin);
        });
      }

      if (scrollable.value) {
        scrollBar.value = SmoothScrollbar.init(scrollable.value, defaults(props.options, DEFAULT_OPTIONS));
      }
    });
  };

  onMounted(() => {
    init();
  });

  onBeforeUnmount(() => {
    if (!scrollBar.value) {
      return;
    }

    scrollBar.value.destroy();
  });

  onUpdated(() => {
    scrollBar.value && scrollBar.value.update();
  });
</script>

<template>
  <div
    class="smooth-scrollbar c-scroll-view"
    data-scrollbar
    @mouseenter="focus">
    <div
      ref="scrollable"
      class="scrollable c-scroll-view__content">
      <slot />
    </div>
  </div>
</template>

<style lang="css">
  .smooth-scrollbar {
    display: block;
    width: 100%;
    height: 100%;
  }

  .scrollable {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
