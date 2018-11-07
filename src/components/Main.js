import React, { Component } from 'react';
import { Link } from 'react-router';
import { Header, Container } from 'semantic-ui-react'

class Main extends Component {
  render() {
    return (
      <Container text>
        <br />
        <Header as="h1" textAlign="center">
          <Link to="/">Behance</Link>
        </Header>
        {React.cloneElement(this.props.children, this.props)}
      </Container>
    )
  }
}

export default Main;

