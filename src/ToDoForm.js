import React from "react"
import {useState} from "react"

function ToDoForm ({addTask}) {
    const[userInput, setUserInput] = useState('')

    const handelChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handelSubmit(e)
        }
    }
  
    return (
        <form onSubmit={handelSubmit}>
            <input
            value={userInput}
            type="text"
            onChange={handelChange}
            onKeyDown= {handleKeyPress}
            placeholder = 'Введите что-нибудь...'
            />
            <button>Сохранить</button>
        </form>
    )
}

export default ToDoForm