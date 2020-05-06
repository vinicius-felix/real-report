import React, { Component } from 'react';
import { Row } from 'antd';
import { MainLayout } from './MainLayout';
import 'antd/dist/antd.css';

class Routes extends Component {

  render(){

    return(
      <Row>
        <MainLayout content={<Row><h2> Soon™ </h2></Row>} />
      </Row>
    );
  }
}

export default Routes;
