import { prompt } from 'enquirer'
import { readdirSync } from 'fs'
import { execSync } from 'child_process'

type Response = Record<string, string>

async function main() {
  const files = readdirSync('./src').filter(
    (file) => !file.includes('index.ts')
  )
  const response: Response = await prompt([
    {
      type: 'select',
      name: 'file',
      message: 'Select a file:',
      choices: files,
    },
  ])

  await runFile(response.file)
}

async function runFile(file: string) {
  execSync(`npx ts-node ./src/${file}`, {
    encoding: 'utf8',
    stdio: 'inherit',
  })
}

main()
