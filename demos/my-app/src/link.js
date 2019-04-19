import React from 'react';

export default class Link extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = {
      class: '',
    };
  }
  handleMouseEnter() {
    this.setState({class: 'hovered' });
  }
  handleMouseLeave() {
    this.setState({class: 'normal' });
  }
  render() {
    return (
      <a
        className={ this.state.class }
        href={ this.props.page || '#' }
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }>
        { this.props.children }
      </a>
    );
  }
}