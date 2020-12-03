import React from 'react'
import ExistingChoice from './ExistingChoice'

const List = (props) => {
    
        return (
            <div className='listItem'>
                <p className='titleList'>{props.item}</p>
            </div>
        )
    }

export default List