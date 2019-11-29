import React, { Component } from 'react'
import Input from './container/input'
export default class Render extends Component {
state = {
    ara : null
}
    ara = (e) => {
        e.preventDefault();
        let currentSearch1 = e.target.id.value;
        if (e.target.ida) {
            console.log(e.target.ida.value)

        }
        else if (e.target.id) {
            console.log(e.target.id.value)

        }
        else {
            console.log(e.target.id1.value)
        } 
    }


    render() {
        return (
            <div>
                <Input ara={this.ara} name={`id`} />
                <Input ara={this.ara} name={`id1`} />
                <Input ara={this.ara} name={`ida`} />
            </div>
        )
    }
}
