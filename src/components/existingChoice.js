import axios from 'axios'
import React, {Component} from 'react'
import Existing from './Existing'
import List from './List'


class ExistingChoice extends Component {
    constructor() {
        super()
        this.state = {
            fullStory: "",
            titleInput: "",
            storyList: [],
            key: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSaveBtn = this.handleSaveBtn.bind(this)
        this.handleEditBtn = this.handleEditBtn.bind(this)
        this.handleDeleteBtn = this.handleDeleteBtn.bind(this)
    }

    handleInputChange(e) {
        this.setState({
            titleInput: e.target.value
        })
    }

    handleSaveBtn (title) {
        if (this.state.titleInput === "") {
            return window.alert('Um, enter a title please...')
        } else {
            axios.post(`./api/stories/${title}`).then(res => {
                this.setState({
                    storyList: res.data,
                })
            })
        }
        this.setState ({
            titleInput: ""
        })
    }

    handleEditBtn () {
        const currentTitle = prompt("Title you wish to edit:")
        const newTitle = prompt("New Title")
        console.log(currentTitle)
        console.log(newTitle)
        const body = {currentTitle: currentTitle, newTitle: newTitle}
        axios.put(`/api/stories`, body).then(res => {
            this.setState ({
                storyList: res.data,
                key: this.state.key++
            })
        })
        console.log(this.state.storyList)
    }

    handleDeleteBtn () {
        const deleteTitle = prompt("Title you wish to delete:")
        console.log(deleteTitle)
        axios.delete(`/api/stories/delete/${deleteTitle}`).then(res => {
            this.setState ({
                storyList: res.data
            })
        })
    }

    handleNewStoryBtn () {
        this.setState ({
            fullStory: "",
            titleInput: ""
        })
    }

    render () {
        const listMap = this.state.storyList.map(element => {
            return <List 
                        key={this.state.key}
                        title={this.state.titleInput}
                        storyList={this.state.storyList}
                        item={element}
                    />
        })

        let classNameEditBtn = this.props.clicked ? 'editBtns' : 'editBtnsHidden'
        let classNameTitle = this.props.clicked ? 'saveTitleInput' : 'editBtnsHidden'
        return (
          <div className="lastContainer">
            <div className='inputOnly'>
                <input 
                    className={classNameTitle}
                    value={this.state.titleInput} 
                    placeholder='title' 
                    onChange={(e) => this.handleInputChange(e)}
                />
            </div>
            <div className='articleContainer'>
                <article className='storyDisplayed'>{this.props.finalStory}</article>
            </div>
            
            <div className='buttonsYo'>
                
                <button 
                    className={classNameEditBtn}
                    onClick={() => {this.handleSaveBtn(this.state.titleInput)}}    
                >save story</button>
                <button 
                    className={classNameEditBtn}
                    onClick={() => this.handleEditBtn()}
                >edit a title</button>
                <button 
                    className={classNameEditBtn}
                    onClick={() => this.handleDeleteBtn()}    
                >delete a story</button>
                {/* <button
                    className={classNameEditBtn}
                    onClick={() => this.handleNewStoryBtn()}
                >new story</button> */}
            </div>
            <div className='list'>
                {listMap}
            </div>
          </div>  
        )
    }
}

export default ExistingChoice