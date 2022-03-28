import React, { Component } from 'react'
import { connect } from 'react-redux';
import Card from './Card';
import Text from './Text';

export class ListCard extends Component {
    renderCard = () => {
        return this.props.data.map((item, index)=>{
            return <Card key={index} src={item.src} id={item.id} />;
        });
    };

    renderText = () => {
        return this.props.data.map((item, index)=>{
            return <Text key={index} tenSP={item.tenSP} id={item.id} />;
        });
    };

  render() {
    return (
      <div>
        <div className="listCard">{this.renderCard()}</div>
        <div className="listCard">{this.renderText()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    data: state.productReducer.products,
});
export default connect(mapStateToProps,{})(ListCard);
