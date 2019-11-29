import React from 'react'
import ReactDOM from 'react-dom'

export default function Input(props) {
    return (
        <form onSubmit={props.ara}>
            <input name={`${props.name}`} type="text"></input>
            <button   >clicked</button>
        </form>
    )
}