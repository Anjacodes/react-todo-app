import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) =>
          (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps} // eslint-disable
            deleteTodoProps={this.props.deleteTodoProps} // eslint-disable
            setUpdate={this.props.setUpdate} // eslint-disable
          />
          ))}
      </ul>
    );
  }
}

export default TodosList;
