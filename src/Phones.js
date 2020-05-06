import React, { Component } from 'react';
import { Table, Row, Col, Card } from 'antd';
import { MainLayout } from './MainLayout';
import { transformToJSONReceptives, transformToJSONCallbacks } from './utils';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Campanha',
    dataIndex: 'campanha',
    key: 'campanha'
  },

  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },

  {
    title: 'Servidor',
    dataIndex: 'servidor',
    key: 'servidor'
  },

  {
    title: 'Receptivo',
    dataIndex: 'receptivo',
    key: 'receptivo'
  },

  {
    title: 'Operadora',
    dataIndex: 'operadora',
    key: 'operadora'
  },

  {
    title: 'DAC',
    dataIndex: 'dac',
    key: 'dac'
  },

  {
    title: 'CockPit',
    dataIndex: 'cockpit',
    key: 'cockpit'
  },

  {
    title: 'Carteira',
    dataIndex: 'carteira',
    key: 'carteira'
  }

];

class Phones extends Component {

  state = {
    receptivo: transformToJSONReceptives(),
    callback: transformToJSONCallbacks()
  }

  render(){

    return(
      <Row>
        <MainLayout content={
          <Col>
            <Row>
              <Card title='Receptivos'>
                <Table rowKey='id' size='small' style={{ marginLeft: '3%', width: '100%', textAlign: 'center' }} dataSource={this.state.receptivo} columns={columns} pagination={false} />
              </Card>
            </Row>

            <Row>
              <Card title='Callbacks'>
                <Table rowKey='id' size='small' style={{ marginLeft: '3%', width: '100%', textAlign: 'center' }} dataSource={this.state.callback} columns={columns} pagination={false} />
              </Card>
            </Row>
          </Col>
        } />
      </Row>
    );
  }
}

export default Phones;
