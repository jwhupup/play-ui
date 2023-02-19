export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', 'test', 'gulpfile', 'dist']
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  )
}