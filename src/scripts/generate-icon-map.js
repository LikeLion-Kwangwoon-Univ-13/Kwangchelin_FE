import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'fs'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const rootDir = resolve(__dirname, '../..')
const ASSETS_DIR = join(rootDir, 'src/assets')
const OUTPUT_DIR = join(rootDir, 'src/components/Icon')
const OUTPUT_FILE = join(OUTPUT_DIR, 'iconMap.js')

const toCamelCase = (str) =>
  str.replace(/-([a-z])/g, (_, char) => char.toUpperCase()).replace(/\.svg$/, '')

const generateIconMap = () => {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const folders = readdirSync(ASSETS_DIR).filter((folder) => {
    const folderPath = join(ASSETS_DIR, folder)
    return statSync(folderPath).isDirectory()
  })

  const imports = []
  const mapEntries = []

  for (const folder of folders) {
    const folderPath = join(ASSETS_DIR, folder)
    const files = readdirSync(folderPath).filter((file) => file.endsWith('.svg'))

    for (const file of files) {
      const importKey = `${file.replace('.svg', '')}`
      const varName = toCamelCase(`${folder}-${file}`)
      const importPath = `@/assets/${folder}/${file}`

      imports.push(`import ${varName} from '${importPath}?react'`)
      mapEntries.push(`  '${importKey}': ${varName},`)
    }
  }

  const content = `// 자동 생성된 아이콘 파일
${imports.join('\n')}

export const iconMap = {
${mapEntries.join('\n')}
}
`

  writeFileSync(OUTPUT_FILE, content)
}

generateIconMap()
