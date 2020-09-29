import React, { Component } from 'react';
import { Row, Table } from 'antd';
import { MainLayout } from './MainLayout';
import 'antd/dist/antd.css';
import apiTickets from './Services/service-tickets';

const columns = [
  {
    title: 'Id',
    dataIndex: 'ticket',
    key: 'ticket',
    align: 'center'
  },

  {
    title: 'Título',
    dataIndex: 'título',
    key: 'título'
  },

  {
    title: 'Responsável',
    dataIndex: 'responsável',
    key: 'responsável'
  },

  {
    title: 'Data Abertura',
    dataIndex: 'aberto',
    key: 'aberto',
    align: 'center'
  },

  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    align: 'center'
  },

  {
    title: 'Última Mensagem',
    dataIndex: 'ultima',
    key: 'ultima'
  }
  
];

const gridTable = { 
  marginLeft: '2%',
  width: '100%', 
  textAlign: 'center' 
};

class Tickets extends Component {

  state = {
    tickets: []
  }

  componentDidMount = async () => {
    this.showDataTickets();
  }

  showDataTickets = async () => {
    await apiTickets.get('/', (req, res) => {
      res.send(req.data)
    })
      .then(res => (this.setState((prev, props) => ({
        tickets: res.data.finalRes
      }))))
      .catch(err => console.warn(err));

      console.log('>>',this.state)
  }

  render(){
    
    return(
      <Row>
        <MainLayout content={
          <div>
            <Table
                gutter={1}
                rowKey='ticket'
                size='small' 
                style={gridTable}
                dataSource={this.state.tickets}
                columns={columns} 
                pagination={false} 
              />              
          </div>
        } />
      </Row>
    );
  }
}

export default Tickets;
