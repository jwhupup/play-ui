export const excludeFiles = (files: string[]) => {
  console.log(files, '///files///')

  const excludes = ['node_modules', 'test', 'gulpfile', 'dist', 'build']
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
