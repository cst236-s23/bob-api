const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const users = {
  '1': {
    name: 'Bob Smith',
    age: 42,
    profilePic: 'url'
  }
}

const tweets = {
  '1': {
    text: 'what a lovely day',
    author: 'Bob Smith',
  }
}

app.get('/users', (req, res) => {
  res.send(users)
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id
  const user = users[id]
  res.send(user)
})

app.get('/tweets/:id', (req, res) => {
  const id = req.params.id
  const tweet = tweets[id]
  res.send(tweet)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
