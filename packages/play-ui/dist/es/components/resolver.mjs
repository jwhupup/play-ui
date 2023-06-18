const isSSR = Boolean(
  {}.SSR || {}.SSG || {}.VITE_SSR || {}.VITE_SSG
);
function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, " $1").trim();
  return result.split(" ").join("-").toLowerCase();
}
function getSideEffects(dirName, options) {
  const { importStyle = true } = options;
  if (!importStyle || isSSR)
    return;
  const noStyleComps = [
    "tab-pane",
    "pagination",
    "breadcrumb",
    "virtual-list-item"
  ];
  if (noStyleComps.includes(dirName))
    return;
  if (importStyle === "less") {
    return [
      "play-ui/styles/base.less",
      `play-ui/components/${dirName}/src/index.less`
    ];
  }
  return [`play-ui/dist/styles/${dirName}/src/index.js`];
}
function PlayResolver(options = {}) {
  const { from = "play-ui" } = options;
  return {
    type: "component",
    resolve: (name) => {
      if (name.startsWith("Pl")) {
        const partialName = name.slice(2);
        return {
          name,
          from,
          sideEffects: getSideEffects(kebabCase(partialName), options)
        };
      }
    }
  };
}
export {
  PlayResolver,
  isSSR,
  kebabCase
};
//# sourceMappingURL=resolver.mjs.map
