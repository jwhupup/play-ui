import { withInstall } from '../../utils'
import VirtualList from './src/index'
import VirtualListItem from './src/item'

export const PlVirtualList = withInstall(VirtualList)
export const PlVirtualListItem = withInstall(VirtualListItem)
PlVirtualList.PlVirtualListItem = PlVirtualListItem

export default PlVirtualList
export * from './src/index'
