import { withInstall } from "../../utils/install.mjs";
import VirtualList from "./src/index.mjs";
import VirtualListItem from "./src/item.mjs";
const PlVirtualList = withInstall(VirtualList);
const PlVirtualListItem = withInstall(VirtualListItem);
PlVirtualList.PlVirtualListItem = PlVirtualListItem;
export {
  PlVirtualList,
  PlVirtualListItem,
  PlVirtualList as default
};
//# sourceMappingURL=index.mjs.map
