import React from 'react';

class Circle extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props);
    return (this.props.circles !== nextProps.circles)
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
