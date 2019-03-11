import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar  from 'react-bootstrap/Button';


class PrimerUno extends Component {
    render() {
      return (
      <ButtonToolbar >
        <Button variant="primary" size="lg" active>
          Primary button
        </Button>
        <Button variant="secondary" size="lg" active>
          Button
        </Button>
      </ButtonToolbar>
      );
    }
  }
  
  export default PrimerUno;
