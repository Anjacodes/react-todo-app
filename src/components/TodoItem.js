import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
    state = { // eslint-disable-line
      editing: false,
    }

    handleEditing = () => {
      this.setState({
        editing: true,
      });
    }

    handleUpdatedDone = (event) => {
      if (event.key === 'Enter') {
        this.setState({ editing: false });
      }
    }

    render() {
      const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };
      const { completed, id, title } = this.props.todo; // eslint-disable-line
      const viewMode = {};
      const editMode = {};

      if (this.state.editing) { // eslint-disable-line
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }
      return (
        <li className={styles.item}>
          <div onDoubleClick={this.handleEditing} style={viewMode}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={completed}
              onChange={() => this.props.handleChangeProps(id)} // eslint-disable-line
            />
            <button
              type="submit"
              onClick={() => this.props.deleteTodoProps(id)} // eslint-disable-line
            >
              Delete
            </button>
            <span style={completed ? completedStyle : null}>{title}</span>
          </div>
          <input
            type="text"
            className={styles.textInput}
            style={editMode}
            value={title}
            onChange={(e) => {
              this.props.setUpdate(e.target.value, id); // eslint-disable-line
            }}
            onKeyDown={this.handleUpdatedDone}
          />
        </li>
      );
    }
}

export default TodoItem;
