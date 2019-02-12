const fs = require('fs')
const path = require('path')
const chalk = require('chalk')


const CHEW_BONE = /(?:==========\s)*?(.*?)(?:\s*\(.*?\)\s*)*\((.*?)\)(?=\s)\s*-.*?(标注|笔记).*?(\d{4})年(\d{1,2})月(\d{1,2})日.*?((?:上午|下午)\d:\d{1,2}:\d{1,2})\s*(.*)/mg

const DEFAULT_CHEWED_NAME = 'chewed.json'

const chew = (p1, p2) => {
  const clippingsPath = path.resolve(__dirname, p1)
  const clippingsDir = path.dirname(clippingsPath)
  const chewedPath = p2 ?
    path.resolve(__dirname, p2)
    : path.resolve(clippingsDir, DEFAULT_CHEWED_NAME)

  const file = fs.readFile(clippingsPath, 'utf8', (err, content) => {
    if (err) return console.log(err)

    const chewed = []
    let match = null
    while ((match = CHEW_BONE.exec(content)) !== null) {
      if (match.index === CHEW_BONE.lastIndex) CHEW_BONE.lastIndex++
      const [ _, title, author, type, year, month, day, time, sentence ] = match
      const item = {
        title: title.trim(),
        author,
        type,
        markDay: `${year}/${month}/${day}`,
        markTime: time,
        sentence
      }

      // cut off repeating item
      const sentenceFromLastItem = (chewed[chewed.length - 1] || {}).sentence
      if (!(sentenceFromLastItem || '').includes(sentence)) {
        chewed.push(item)
      } else if (sentence.includes(sentenceFromLastItem)) {
        chewed.pop()
        chewed.push(item)
      }
    }

    fs.writeFile(
      chewedPath, JSON.stringify(chewed)
      , err => {
        err ?
          console.log(`${chalk.red('Oops. Following error happened:')}\n${err}`)
          : console.log(chalk.green('Already chewed the bone out of ur kindle.'));
      }
    )
  })
}

chew(...process.argv.slice(2))
