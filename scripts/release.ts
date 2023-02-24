import consola from 'consola'
import { execCommand, getCurrentGitBranch, hasGitTag } from './git'
import { updatePkgVersion } from './update-version'

async function main() {
  const [version, notes] = process.argv.slice(2)

  const currentBranch = await getCurrentGitBranch()
  const hasVersion = await hasGitTag(version)

  if (currentBranch !== 'main') {
    return consola.error(`Branch ${currentBranch} can not release!`)
  }

  if (hasVersion) {
    return consola.error(`Version ${version} already exists!`)
  }

  await buildRelease(version, notes)

  updatePkgVersion(version)
}

async function buildRelease(version: string, notes: string) {
  await execCommand('git', ['add', '.'])
  await execCommand('git', ['commit', '-m', notes])
  await execCommand('git', ['tag', '-a', version, '-m', notes])
  await execCommand('git', ['push'])
  await execCommand('git', ['push', 'origin', version])
}

main()
