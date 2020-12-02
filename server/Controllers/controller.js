//stories
const stories = require('../data.json')

let storyList = []
let storyId = 0

module.exports = {
    getPremadeStories: (req, res) => {
        res.status(200).send(stories)
    },
    getOnePremadeStory: (req, res) => {
        const {title} = req.params
        
        const index = stories.findIndex(element => element.title === title)
        if (index === -1) {
            return res.status(404).send('Story does not exist')
        }

        res.status(200).send(stories[index])
    },
    getStoryList: (req, res) => {
        console.log(storyList)
        return res.status(200).send(storyList)
    },
    addStory: (req, res) => {
        const {title} = req.params
    
        const index = storyList.findIndex(element => {
            return title === element.newTitle
        })
        
        //if not already in list:
        if(index === -1) {
            let newStory = {}
            newStory.id = storyId
            newStory.newTitle = title
            storyList.push(newStory)
            storyId++           
        } else { //if already in list:
            return res.status(500).send('Title already exists. Please choose a new title.')
        }
        res.status(200).send(storyList)
    },
    changeTitle: (req, res) => {
        const {currentTitle, newTitle} = req.body

        const index = storyList.findIndex(element => {
            console.log(element.newTitle)
            return currentTitle === element.newTitle
        })

        if (index === -1) {
            return res.status(404).send('Story does not exist.')
        } else {
            let updatedStory = storyList[index]
            updatedStory.newTitle = newTitle
            storyList.splice(index, 1, updatedStory)
        }
        return res.status(200).send(storyList)
    },
    deleteStory: (req, res) => {
        const {title} = req.params

        const index = storyList.findIndex(element => {
            return title === element.newTitle
        })
        
        if (index === -1) {
            return res.status(404).send('Story does not exist.')
        } else {            
            storyList.splice(index, 1)
        }
        return res.status(200).send(storyList)
    }
}