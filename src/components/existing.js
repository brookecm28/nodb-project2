import React, {Component} from 'react'
import Display from './Display'
import ExistingChoice from './ExistingChoice'
import axios from 'axios'


class Existing extends Component {
    constructor() {
        super ()
        this.state = {
            clicked: false,
            input: "",
            wordHolder: ["","","","","","","","",""],
            finalStory: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmitBtnClick = this.handleSubmitBtnClick.bind(this)
    }

    handleInputChange (e, num) {
        e.preventDefault()

        let newWord = []
        if (num === 0) {
            let newWord1 = this.state.wordHolder.slice(1,9)
            newWord = [e.target.value, ...newWord1]
        } else if (num === 8) {
            let newWord1 = this.state.wordHolder.slice(0,8)
            newWord = [...newWord1, e.target.value]
        } else {
            let newWord1 = this.state.wordHolder.slice(0,num)
            let newWord2 = this.state.wordHolder.slice(num+1, 9)
            newWord = [...newWord1, e.target.value, ...newWord2]
        }     
        console.log(newWord)
        this.setState ({
            input: e.target.value,
            wordHolder: newWord
        })
        return this.state
    }

    handleSubmitBtnClick() {
        const {id, completeStory} = this.props
        const {wordHolder} = this.state  
        
        let finalStory = 
            `${completeStory.storyPt1}` + `${wordHolder[0]}` +
            `${completeStory.storyPt2}` + `${wordHolder[1]}` +
            `${completeStory.storyPt3}` + `${wordHolder[2]}` +
            `${completeStory.storyPt4}` + `${wordHolder[3]}` +
            `${completeStory.storyPt5}` + `${wordHolder[4]}` +
            `${completeStory.storyPt6}` + `${wordHolder[5]}` +
            `${completeStory.storyPt7}` + `${wordHolder[6]}` +
            `${completeStory.storyPt8}` + `${wordHolder[7]}` +
            `${completeStory.storyPt9}` + `${wordHolder[8]}` +
            `${completeStory.storyPt10}`       
        this.setState ({
            clicked: true,
            finalStory: finalStory
        })
        return this.state 
    }

    render () {
        let classNameInput = this.state.clicked ? 'inputHidden' : 'inputShowing'
        let classNameSubmitBtn = this.state.clicked ? 'submitWordsBtnHidden' : 'submitWordsBtnShowing'
        return (
            <div className='inputContainer'>
                <div className='middleSection'>
                  <div className='inputFields'>
                    <input className={classNameInput} id='input1' onChange={(e) => this.handleInputChange(e, 0)} placeholder='adjective' />
                    <input className={classNameInput} id='input2' onChange={(e) => this.handleInputChange(e, 1)} placeholder='plural noun' />
                    <input className={classNameInput} id='input3' onChange={(e) => this.handleInputChange(e, 2)} placeholder='past tense verb' />
                    <input className={classNameInput} id='input4' onChange={(e) => this.handleInputChange(e, 3)} placeholder='past tense verb' />
                    <input className={classNameInput} id='input5' onChange={(e) => this.handleInputChange(e, 4)} placeholder='adjective' />
                    <input className={classNameInput} id='input6' onChange={(e) => this.handleInputChange(e, 5)} placeholder='noun' />
                    <input className={classNameInput} id='input7' onChange={(e) => this.handleInputChange(e, 6)} placeholder='past tense verb' />
                    <input className={classNameInput} id='input8' onChange={(e) => this.handleInputChange(e, 7)} placeholder='verb ending in -ing' />
                    <input className={classNameInput} id='input9' onChange={(e) => this.handleInputChange(e, 8)} placeholder='emotion' />
                  </div>
                <button className={classNameSubmitBtn} onClick={() => this.handleSubmitBtnClick()}>submit words</button>
                </div>
                <ExistingChoice 
                  inputs={this.state.wordHolder} 
                  finalStory={this.state.finalStory}
                  clicked={this.state.clicked}
                //   ggpClicked={this.props.ggpClicked}
                />
            </div>
        )
    }
}

export default Existing