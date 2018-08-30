const express = require('express')
const pug = require('pug')
const fs = require('fs')
const readline = require('readline')

let app = express()

app.get('/*', (req, res) => {
    let path = req.params[0]
    if (fs.existsSync(path)) {
        let input = readline.createInterface({
            input: fs.createReadStream(path)
        })
        let data = []
        input.on('line', line => {
            if (/main::init.*Starting/.test(line)) {
                data.push(`<span style="color: green">${line}</span>`)
            } else if (/(error)\b/i.test(line)) {
                data.push(`<span style="color: red">${line}</span>`)
            } else if (/(warn.*?)\b/i.test(line)) {
                data.push(`<span style="color: orange">${line}</span>`)
            } else {
                data.push(`<span>${line}</span>`)
            }
        })
        input.on('close', () => {
            res.send(pug.renderFile('index.pug', { title: path, data }))
        })
    } else {
        res.status(404)
        res.send('not found')
    }
})

app.listen(3000)