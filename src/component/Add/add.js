import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addPro } from "../../redux/actions/productsAction";

export class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      src: this.state.input,
    };
    this.props.addPro(data);
  };
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="formInput">
        <input type="text" name="" onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPro: (data) => {
      dispatch(addPro(data));
    },
  };
};
export default connect(null, mapDispatchToProps)(Add);
