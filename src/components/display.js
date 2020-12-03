import React, {Component} from 'react'
import axios from 'axios'
import Existing from './Existing'


class Display extends Component {
    constructor() {
        super()
        this.state = {
            storyId: 0,
            clicked: false
        }

    }

    handleChoiceButton (choice) {
        this.setState ({
            storyId: choice,
            clicked: true
        })
    }

    render () {
        let classNameChoiceBtn = this.state.clicked ? 'choiceBtnHidden' : 'choiceBtnShowing'
        let clickedVal = this.state.clicked ? true : false
        return (
            <div className="body">
                <div className='everythingContainer'>
                  <div className='chooseStory'>
                    <button 
                        className={classNameChoiceBtn}
                        id="story1"
                        onClick={() => this.handleChoiceButton(1)}>
                    story 1</button>
                    <button 
                        className={classNameChoiceBtn} 
                        id="story2"
                        onClick={() => this.handleChoiceButton(2)}>
                    story 2</button>
                    <button 
                        className={classNameChoiceBtn} 
                        id="story3"
                        onClick={() => this.handleChoiceButton(3)}>
                    story 3</button>
                  </div>
                  <Existing 
                    storyId={this.state.storyId} 
                    clicked={clickedVal} />
                </div>
            </div>
        )
    }
}

export default Display