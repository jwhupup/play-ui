<template>
  <div class="pl-mask">
    <slot />
  </div>
</template>

<style scoped lang="less">
.pl-mask {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 888;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
}
</style>
