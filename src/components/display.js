import React, {Component} from 'react'
import axios from 'axios'
import Existing from './Existing'



class Display extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            id: 0,
            completeStory: {},
            clicked: false
        }
        this.handleChoiceButton = this.handleChoiceButton.bind(this)
        // this.ggpClicker = this.ggpClicker.bind(this)
    }

    handleChoiceButton (choice, id) {
        console.log(choice)
        axios.get(`/api/stories/${choice}`).then(res => {
            this.setState({
                clicked: true,
                completeStory: res.data
            })
            console.log(res.data)
            console.log(this.state.clicked)
            console.log(this.state.completeStory)
            console.log(this.state.completeStory.storyPt1)
        })
    }

    // ggpClicker = () => {
    //     this.setState ({
    //         clicked: false
    //     })
    // }

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
                        onClick={() => this.handleChoiceButton("Dragons", 0)}>
                    story 1</button>
                    <button 
                        className={classNameChoiceBtn} 
                        id="story2"
                        onClick={() => this.handleChoiceButton("Wolves", 1)}>
                    story 2</button>
                    <button 
                        className={classNameChoiceBtn} 
                        id="story3"
                        onClick={() => this.handleChoiceButton("Sharks", 2)}>
                    story 3</button>
                </div>
                  <Existing 
                    id={this.state.id} 
                    clicked={clickedVal}
                    completeStory={this.state.completeStory}
                    // ggpClicked={this.ggpClicker()}
                    />
                </div>
                
            </div>
        )
    }
}

export default Display