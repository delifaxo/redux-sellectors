import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionAddedNote, clearTextNote } from '../actions/note'
import  {makeGetVisibleTodos} from '../reducers/sellector/filter'

class RenderNote extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    clearText = () => {
        this.props.clearTextNote()
    }

    addedText = (e) => {
        e.preventDefault();
        this.props.actionAddedNote(this.textInput.current.value);

    }
    render() {
        return (
            <div>
                <input ref={this.textInput} name="notetext" type="text"></input>
                <button onClick={this.addedText}>added note</button>
                <button onClick={this.clearText}>clear note</button>
                {this.props.store.map(item => <div>
                    <span>возраст {item.old} </span>
                    <span>result {item.result} </span>
                    <span>цвет {item.car} </span>
                    </div>)}
            </div>
        )
    }
}
const makeMapStateToProps = () => {
    const getVisibleTodos = makeGetVisibleTodos();
    const mapStateToProps = (state) => {
      return {
        store: getVisibleTodos(state)
      };
    };
    return mapStateToProps;
  };

  const mapDispatchToProps = {
    actionAddedNote,
    clearTextNote
  };
  
  const VisibleTodoList = connect(makeMapStateToProps, mapDispatchToProps)(
    RenderNote,
  );
  
  export default VisibleTodoList;