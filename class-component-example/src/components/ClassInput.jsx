/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Count from './Count';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      editing: '',
      editInputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  handleDelete(todoToDelete) {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo !== todoToDelete),
    }));
  }

  handleEdit(todo) {
    this.setState({
      editing: todo,
      editInputVal: todo,
    });
  }

  handleConfirm(oldTodo) {
    this.setState((state) => ({
      todos: state.todos.map((todo) =>
        todo === oldTodo ? state.editInputVal : todo,
      ),
      editing: '',
      editInputVal: '',
    }));
  }

  handleEditInputChange(e) {
    this.setState((state) => ({
      editInputVal: e.target.value,
    }));
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <Count count={this.state.todos.length} />
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) =>
            this.state.editing === todo ? (
              <li key={todo}>
                <input
                  type="text"
                  value={this.state.editInputVal}
                  onChange={this.handleEditInputChange}
                />

                <button type="button" onClick={() => this.handleDelete(todo)}>
                  X
                </button>

                <button type="button" onClick={() => this.handleConfirm(todo)}>
                  Confirm
                </button>
              </li>
            ) : (
              <li key={todo}>
                {todo}
                <button type="button" onClick={() => this.handleDelete(todo)}>
                  X
                </button>
                <button type="button" onClick={() => this.handleEdit(todo)}>
                  Edit
                </button>
              </li>
            ),
          )}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
