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
    //sortDirections: ['descend', 'ascend'],
    sorter: (a, b) => a > b ? a : b,
    width: 120
  },

  {
    title: 'Amb',
    dataIndex: 'Ambiente',
    key: 'ambiente',    
    sorter: (a, b) => a.Ambiente - b.Ambiente
  },

  {
    title: 'Nome Rota',
    dataIndex: 'Nome_Rota',
    key: 'nomeRota',
    //sortDirections: ['descend', 'ascend'],
    //sorter: (a, b) => a.Nome_Rota.length - b.Nome_Rota.length,
    minWidth: 300
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

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  }

  render(){
    return(
      <Row>
        <MainLayout content={<Table rowKey="Id" style={{ width: '100%', textAlign: 'center' }}  dataSource={this.state.dt} columns={columns} onChange={this.handleChange} />} />
      </Row>
    );
  }
}

export default App;
