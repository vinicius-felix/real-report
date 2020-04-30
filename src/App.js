import React, { Component } from 'react';
import { Table, Row, Col, DatePicker } from "antd";
import { MainLayout } from './MainLayout';
import 'antd/dist/antd.css';
import { transformToJSON } from './utils';
import moment from 'moment';

const columns = [
  {
    title: 'Data',
    dataIndex: 'Data',
    key: 'data',    
    sorter: (a, b) => a.Data > b.Data ? a.Data > b.Data : a.Data < b.Data,
    width: 120,
    render: text => moment(text).format('DD/MM/YYYY')
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
    sorter: (a, b) => a.Nome_Rota < b.Nome_Rota ? -1 : 1,
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

const dateFormat = 'DD/MM/YYYY';
const today = moment().format('DD/MM/YYYY');

class App extends Component {

  state = {
    dt: transformToJSON(),
    pagination: {
      pageSize: 10
    }
  }

  filterByDay = (day) => {
    let obj = transformToJSON();
    let filtered = obj && obj.filter( function(elem) { return moment(elem.Data).format('DD/MM/YYYY') === day } )
    return filtered;
  }

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  }

  render(){
    const { pagination } = this.state;
    return(
      <Row>
        <MainLayout content={
          <div>
            <Row style={{margin: 16}}>
              <Col style={{padding: 2, marginRight: 5}}> <h3><b>Filtrar Data:</b></h3> </Col>
              <Col>
                <DatePicker allowClear={false} defaultValue={moment(today, dateFormat)} format={dateFormat} onChange={ (e) => this.setState({dt: this.filterByDay(moment(e).format('DD/MM/YYYY'))}) } />
              </Col>
            </Row>
            <Table rowKey="Id" style={{ width: '100%', textAlign: 'center' }}  dataSource={this.state.dt} columns={columns} onChange={this.handleChange} pagination={pagination} />
          </div>
        } />
      {console.log(this.state)}
      </Row>
    );
  }
}

export default App;
