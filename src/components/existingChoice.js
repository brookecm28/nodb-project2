import React, {Component} from 'react'
import Existing from './Existing'


class ExistingChoice extends Component {
    constructor() {
        super()
        this.state = {
            fullStory: ""
        }
    }



    render () {
        let classNameEditBtn = this.props.clicked ? 'editBtns' : 'editBtnsHidden'
        let classNameTitle = this.props.clicked ? 'saveTitleInput' : 'editBtnsHidden'
        return (
          <div className="lastContainer">
            <div className='articleContainer'>
                <article className='storyDisplayed'>{this.props.finalStory}</article>
            </div>
            <div className='buttonsYo'>
                <input className={classNameTitle} placeholder='title' />
                <button className={classNameEditBtn}>save story</button>
                <button className={classNameEditBtn}>edit a title</button>
                <button className={classNameEditBtn}>delete a story</button>
            </div>
          </div>  
        )
    }
}

export default ExistingChoice