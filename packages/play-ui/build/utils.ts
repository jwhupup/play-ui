import { resolve } from 'path'

export function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', 'test', 'gulpfile', 'dist']
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  )
}
