const express = require('express')
const ctrl = require('./Controllers/Controller')

const app = express()
const SERVER_PORT = 5007

app.use(express.json())

app.get('/api/stories', ctrl.getPremadeStories)
app.get('/api/stories/:title', ctrl.getOnePremadeStory)
app.get('/api/storiesList', ctrl.getStoryList)
app.post('/api/stories/:title', ctrl.addStory)
app.put('/api/stories', ctrl.changeTitle)
app.delete('/api/stories/delete/:title', ctrl.deleteStory)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))