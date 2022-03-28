import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePro } from '../../redux/actions/productsAction';

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.src} alt={this.props.src} />
        <button onClick={()=>this.props.deletePro(this.props.id)}>Delete</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
      return{
          deletePro: (id) => {
            dispatch(deletePro(id));
          },
      };
};
export default connect(null, mapDispatchToProps)(Card);