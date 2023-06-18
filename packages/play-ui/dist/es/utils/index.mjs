import { withInstall } from "./install.mjs";
import { isNonnegativeNumber, isNumber } from "./is.mjs";
function runAsync(cb) {
  const timer = setTimeout(() => {
    clearTimeout(timer);
    cb();
  }, 0);
}
function uppercaseFirstWord(word) {
  if (!word)
    return word;
  return word.toLowerCase().replace(/[a-z]{1}/, (letter) => letter.toUpperCase());
}
function range(start, stop, step) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
}
function animation(name, speed = "faster", repeat = 1) {
  return `  animate__animated animate__${name}   animate__${speed}   animate__${repeat === "infinite" ? "infinite" : `__repeat-${repeat}`}`;
}
export {
  animation,
  isNonnegativeNumber,
  isNumber,
  range,
  runAsync,
  uppercaseFirstWord,
  withInstall
};
//# sourceMappingURL=index.mjs.map
