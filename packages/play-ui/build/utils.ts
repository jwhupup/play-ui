export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', 'test', 'gulpfile', 'dist', 'build']

  console.log(files.filter(
    path => !excludes.some(exclude => path.includes(exclude)),
  ), '///files///')

  return files.filter(
    path => !excludes.some(exclude => path.includes(exclude)),
  )
}

export const uppercaseFirstWord = (word: string) => {
  if (!word)
    return word

  return word.split('-').reduce(
    (t, c) => t + c.toLowerCase().replace(/[a-z]{1}/, letter => letter.toUpperCase()), '',
  )
}
