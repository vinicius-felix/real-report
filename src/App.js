import React, { Component } from 'react';
import { Table, Row, Col } from "antd";
import { MainLayout } from './MainLayout';
import 'antd/dist/antd.css';
import { transformToJSON } from './utils';
//import dataSource from './dataSource';

const columns = [
  {
    title: 'Data',
    dataIndex: 'Data',
    key: 'data',
    width: 120
  },

  {
    title: 'Ambiente',
    dataIndex: 'Ambiente',
    key: 'ambiente'
  },

  {
    title: 'Nome_Rota',
    dataIndex: 'Nome_Rota',
    key: 'nomeRota',
    width: 300
  },

  {
    title: 'Answered',
    dataIndex: 'Answered',
    key: 'answered',
  },

  {
    title: 'Failed',
    dataIndex: 'Failed',
    key: 'failed',
  },

  {
    title: 'Busy',
    dataIndex: 'Busy',
    key: 'busy',
  },

  {
    title: 'No Answered',
    dataIndex: 'No Answer',
    key: 'noAnswered',
  },

  {
    title: '% Answered',
    dataIndex: '% Answered',
    key: 'answeredPercent',
  },

  {
    title: '% Failed',
    dataIndex: '% Failed',
    key: 'failedPercent',
  },

  {
    title: '% Busy',
    dataIndex: '% Busy',
    key: 'busyPercent',
  },

  {
    title: '% No Answered',
    dataIndex: '% No Answer',
    key: 'noAnsweredPercent',
  },

  {
    title: 'Total',
    dataIndex: 'Total',
    key: 'total',
  }

];

class App extends Component {

  state = {
    dt: transformToJSON()
  }

  render(){
    return(
      <Row>
        <MainLayout content={<Table style={{ width: '100%', textAlign: 'center' }}  dataSource={this.state.dt} columns={columns} />} />
      </Row>
    );
  }
}

export default App;
