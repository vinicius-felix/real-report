import React, { Component } from 'react';
import { Table, Row, Col, DatePicker } from 'antd';
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
    sorter: (a, b) => a.Ambiente - b.Ambiente,
    align: 'center',
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
    align: 'center',
  },

  {
    title: 'Failed',
    dataIndex: 'Failed',
    key: 'failed',
    align: 'center',
  },

  {
    title: 'Busy',
    dataIndex: 'Busy',
    key: 'busy',
    align: 'center',
  },

  {
    title: 'No Answered',
    dataIndex: 'noAnswered',
    key: 'noAnswered',
    align: 'center',
  },

  {
    title: '% Answered',
    dataIndex: 'answeredPercent',
    key: 'answeredPercent',
    align: 'center',
    render: text => text && text + '%'
  },

  {
    title: '% Failed',
    dataIndex: 'failedPercent',
    key: 'failedPercent',
    align: 'center',
    render: text => text && text + '%'
  },

  {
    title: '% Busy',
    dataIndex: 'busyPercent',
    key: 'busyPercent',
    align: 'center',
    render: text => text && text + '%'
  },

  {
    title: '% No Answered',
    dataIndex: 'noAnsweredPercent',
    key: 'noAnsweredPercent',
    align: 'center',
    render: text => text && text + '%'
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
      pageSize: 15
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
            <Table rowKey='RowID' size='small' style={{ marginLeft: '3%', width: '100%', textAlign: 'center' }}  dataSource={this.state.dt} columns={columns} onChange={this.handleChange} pagination={pagination} />
          </div>
        } />
      </Row>
    );
  }
}

export default App;
