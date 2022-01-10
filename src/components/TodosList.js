import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component { // eslint-disable-line
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => // eslint-disable-line
          (<TodoItem // eslint-disable-line
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps} // eslint-disable-line
            deleteTodoProps={this.props.deleteTodoProps} // eslint-disable-line
            setUpdate={this.props.setUpdate} // eslint-disable-line
          />
          ))}
      </ul>
    );
  }
}

export default TodosList;
