import { withInstall } from "../../utils/install.mjs";
import Tabs from "./src/index.mjs";
import { PL_TAB_KEY } from "./src/index.mjs";
import TabPane from "./src/pane.mjs";
const PlTabs = withInstall(Tabs);
const PlTabPane = withInstall(TabPane);
PlTabs.PlTabPane = PlTabPane;
export {
  PL_TAB_KEY,
  PlTabPane,
  PlTabs,
  PlTabs as default
};
//# sourceMappingURL=index.mjs.map
