import React from 'react';

class Circle extends React.Component {

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log(nextProps.color)
    console.log(this.props.color)
    return this.props.colors == nextProps.color
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
