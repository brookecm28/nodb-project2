import React, {Component} from 'react'
import Display from './Display'
import axios from 'axios'


class Existing extends Component {
    constructor() {
        super ()
        this.state = {
            clicked: false
        }
        
    }

    componentWillUpdate() {
        // let checker = this.props.clicked
        if (this.props.clicked === true) {
        this.setState ({
            clicked: true
        }) 
        // checker = false 
    }}

    handleSubmitBtnClick() {
        this.setState ({
            clicked: true
        })
    }

    render () {
        let classNameInput = this.state.clicked ? 'inputHidden' : 'inputShowing'
        let classNameSubmitBtn = this.state.clicked ? 'submitWordsBtnHidden' : 'submitWordsBtnShowing'
        return (
            <div className='inputContainer'>
                <div className='inputFields'>
                    <input className={classNameInput} id='input1' placeholder='adjective' />
                    <input className={classNameInput} id='input2' placeholder='plural noun' />
                    <input className={classNameInput} id='input3' placeholder='past tense verb' />
                    <input className={classNameInput} id='input4' placeholder='past tense verb' />
                    <input className={classNameInput} id='input5' placeholder='adjective' />
                    <input className={classNameInput} id='input6' placeholder='noun' />
                    <input className={classNameInput} id='input7' placeholder='past tense verb' />
                    <input className={classNameInput} id='input8' placeholder='verb ending in -ing' />
                    <input className={classNameInput} id='input9' placeholder='emotion' />
                </div>
                <button className={classNameSubmitBtn} onClick={() => this.handleSubmitBtnClick()}>submit words</button>
            </div>
        )
    }
}

export default Existing