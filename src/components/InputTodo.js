import React, { Component } from 'react';

class InputTodo extends Component {
  state = { // eslint-disable-line
    title: '',
  };

  onChange = (e) => { this.setState({ [e.target.name]: e.target.value }); };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) { //eslint-disable-line
      this.props.addTodoProps(this.state.title); //eslint-disable-line
      this.setState({
        title: '',
      });
    } else {
      alert('Please write task');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          name="title"
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={this.state.title} // eslint-disable-line
          onChange={this.onChange}
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
