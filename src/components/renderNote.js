import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionAddedNote, clearTextNote, actionUpdateNote } from '../actions/note'
import  {newFilteredArrayNote} from '../reducers/sellector/filter'

class RenderNote extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.textUpdateFilterInput = React.createRef();

    }

    clearText = () => {
        this.props.clearTextNote()
    }

    addedText = (e) => {
        e.preventDefault();
        this.props.actionAddedNote(this.textInput.current.value);
    }

    updateFilter = () => {
      this.props.actionUpdateNote(this.props.note.filter(item => item !== this.textUpdateFilterInput.current.value));
    }

    render() {
        return (
            <div>
                <input ref={this.textInput} name="notetext" type="text"></input>
                <button onClick={this.addedText}>added note</button>
                <button onClick={this.clearText}>clear note</button>
                <div>(по цвету)</div>
                {this.props.store.map(item => <div>
                    <span>возраст {item.old} </span>
                    <span>result {item.result} </span>
                    <span>цвет {item.car} </span>
                    </div>)}
                    <div style={{height:'50px'}}></div>
                    <div>Укажите слово которое нужно удалить с списка фильтров</div>
                    <div><input ref={this.textUpdateFilterInput} type="text"/><button onClick={this.updateFilter}>delete</button></div>
            </div>
        )
    }
}
const makeMapStateToProps = () => {
    const getNewFilteredArray = newFilteredArrayNote();
    const mapStateToProps = (state) => {
      return {
        store: getNewFilteredArray(state),
        note: state.noteStore.note
      };
    };
    return mapStateToProps;
  };

  const mapDispatchToProps = {
    actionAddedNote,
    clearTextNote,
    actionUpdateNote
  };
  
  const VisibleTodoList = connect(makeMapStateToProps, mapDispatchToProps)(
    RenderNote,
  );
  
  export default VisibleTodoList;