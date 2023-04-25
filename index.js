const fs = require('fs')
const CryptoJS = require('crypto-js')
const argv = require('minimist')(process.argv.slice(2))

const YOUR_SECRET_KEY = ''

function readFile (file) {
  try {
    const data = fs.readFileSync(file, 'utf8')
    return data
  } catch (err) {
    console.error(err)
  }
}

function writeFile (content, file) {
  fs.writeFile(file, content, err => {
    if (err) {
      console.error(err)
    }
    console.log(`  --> Archivo ${file.split('./')[1]} creado con exito`)
  })
}

if (argv.d) {
  const results = readFile('./envCrypt')
  const bytes = CryptoJS.AES.decrypt(results, YOUR_SECRET_KEY)
  const originalText = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  const text = originalText.map(item => {
    const [[key, value]] = Object.entries(item)
    return `${key}=${value}`
  })
  writeFile(text.join('\n'), './.env')
}

if (argv.c) {
  const results = readFile('./.env')
  const lines = results.split(/\r?\n/)
  const envs = lines.map(item => {
    const obj = {}
    const sep = item.split('=')
    const prefix = sep[0]
    const words = sep.slice(1, sep.length).join()
    obj[prefix] = words
    return obj
  })
  const json = JSON.stringify(envs)
  const crypText = CryptoJS.AES.encrypt(json, YOUR_SECRET_KEY).toString()

  writeFile(crypText, './envCrypt')
}
