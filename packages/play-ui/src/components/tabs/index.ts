import { withInstall } from '../../utils'
import Tabs from './src/index'
import TabPane from './src/pane'

export const PlTabs = withInstall(Tabs)
export const PlTabPane = withInstall(TabPane)
PlTabs.PlTabPane = PlTabPane

export default PlTabs
export * from './src/index'
export * from './src/pane'
