import { ref, onMounted, toValue, onUnmounted } from "vue";
const useDraggable = (handle, options = {}) => {
  const {
    target = document.documentElement,
    translateX = 0,
    translateY = 0
  } = options;
  let unhandle;
  let untarget;
  const handleRect = ref();
  const pointerStartPos = ref({ x: 0, y: 0 });
  onMounted(() => {
    unhandle = toValue(handle);
    untarget = toValue(target);
    if (!unhandle || !untarget)
      return;
    unhandle.addEventListener("dragstart", dragstart);
    untarget.addEventListener("dragenter", dragenter);
    untarget.addEventListener("dragover", dragover);
    untarget.addEventListener("dragleave", dragleave);
    untarget.addEventListener("drop", drop);
  });
  onUnmounted(() => {
    if (!unhandle || !untarget)
      return;
    unhandle.removeEventListener("dragstart", dragstart);
    untarget.removeEventListener("dragenter", dragenter);
    untarget.removeEventListener("dragover", dragover);
    untarget.removeEventListener("dragleave", dragleave);
    untarget.removeEventListener("drop", drop);
  });
  function dragstart(evt) {
    handleRect.value = unhandle == null ? void 0 : unhandle.getBoundingClientRect();
    pointerStartPos.value.x = evt.clientX;
    pointerStartPos.value.y = evt.clientY;
  }
  function dragenter(evt) {
    evt.dataTransfer.dropEffect = "move";
  }
  function dragover(evt) {
    evt.preventDefault();
  }
  function dragleave(evt) {
    evt.dataTransfer.dropEffect = "none";
  }
  function drop(evt) {
    if (!handleRect.value || !unhandle)
      return;
    console.log(toValue(translateX));
    unhandle.style.position = "absolute";
    unhandle.style.top = `${handleRect.value.y + toValue(translateY) + evt.clientY - pointerStartPos.value.y}px`;
    unhandle.style.left = `${handleRect.value.x + toValue(translateX) + evt.clientX - pointerStartPos.value.x}px`;
  }
};
export {
  useDraggable
};
//# sourceMappingURL=useDraggable.mjs.map
