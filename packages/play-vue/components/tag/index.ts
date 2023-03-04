import { withInstall } from '../../utils/install'
import Tag from './src/index.vue'

export const PlTag = withInstall(Tag, 'PlTag')
export default PlTag
export type { TagProps } from './src/tag'
