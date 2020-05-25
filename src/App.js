import React, { Component } from 'react';
import { Table, Row, Col, DatePicker, Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { MainLayout } from './MainLayout';
import 'antd/dist/antd.css';
import { transformToJSON } from './utils';
import moment from 'moment';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

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
    sorter: (a, b) => a.Answered - b.Answered,
  },

  {
    title: 'Failed',
    dataIndex: 'Failed',
    key: 'failed',
    align: 'center',
    sorter: (a, b) => a.Failed - b.Failed,
  },

  {
    title: 'Busy',
    dataIndex: 'Busy',
    key: 'busy',
    align: 'center',
    sorter: (a, b) => a.Busy - b.Busy,
  },

  {
    title: 'No Answered',
    dataIndex: 'noAnswered',
    key: 'noAnswered',
    align: 'center',
    sorter: (a, b) => a.noAnswered - b.noAnswered,
  },

  {
    title: '% Answered',
    dataIndex: 'answeredPercent',
    key: 'answeredPercent',
    align: 'center',
    sorter: (a, b) => a.answeredPercent - b.answeredPercent,
    render: text => text && text + '%'
  },

  {
    title: '% Failed',
    dataIndex: 'failedPercent',
    key: 'failedPercent',
    align: 'center',
    sorter: (a, b) => a.failedPercent - b.failedPercent,
    render: text => text && text + '%'
  },

  {
    title: '% Busy',
    dataIndex: 'busyPercent',
    key: 'busyPercent',
    align: 'center',
    sorter: (a, b) => a.busyPercent - b.busyPercent,
    render: text => text && text + '%'
  },

  {
    title: '% No Answered',
    dataIndex: 'noAnsweredPercent',
    key: 'noAnsweredPercent',
    align: 'center',
    sorter: (a, b) => a.noAnsweredPercent - b.noAnsweredPercent,
    render: text => text && text + '%'
  },

  {
    title: 'Total',
    dataIndex: 'Total',
    key: 'total',
    sorter: (a, b) => a.Total - b.Total,
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
    console.log("day", day)
    const obj = transformToJSON();
    // const obj = this.state.dt
    let filtered = obj && obj.filter( function(elem) { return moment(elem.Data).format('DD/MM/YYYY') === day } )
    return filtered;
  }

  filterByName = name => {
    // const obj = this.state && this.state.dt
    const obj = transformToJSON();
    let filtered = obj.filter( function(elem){ return elem.Nome_Rota.toLowerCase().includes(name.toLowerCase()) } )
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
                <DatePicker allowClear defaultValue={moment(today, dateFormat)} format={dateFormat} onChange={ (e) => this.setState({dt: this.filterByDay(moment(e).format('DD/MM/YYYY'))}) } />
              </Col>

              <Col>
                <Search
                  placeholder="input search text"
                  onSearch={value => this.setState({ dt: this.filterByName(value) })}
                  onChange={(e) => this.setState({ dt: this.filterByName(e.target.value) })}
                  style={{ width: 200 }}
                />
              </Col>
            </Row>
            <Table rowKey='RowID' size='small' style={{ marginLeft: '3%', width: '100%', textAlign: 'center' }}  dataSource={this.state.dt} columns={columns} onChange={this.handleChange} pagination={pagination} />
          </div>
        } />
        {console.log(this.state)}
      </Row>
    );
  }
}

export default App;
