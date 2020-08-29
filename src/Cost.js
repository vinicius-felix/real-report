import React, { Component } from 'react';
import { Table, Row, Col, Card, Typography } from 'antd';
import { MainLayout } from './MainLayout';
import 'antd/dist/antd.css';
import moment from 'moment';

const { Title } = Typography;

const gridTable = { 
  marginLeft: '3%',
  width: '100%', 
  textAlign: 'center' 
};

const gridStyle = {
  width: '100%',
  textAlign: 'center',
};

class Cost extends Component {

  state = {
    dt: [
      {
        id: 1,
        ambiente_1: 'R$ 100,00',
        ambiente_2: 'R$ 100,00',
        ambiente_3: 'R$ 100,00',
        ambiente_4: 'R$ 100,00',
        total_ambiente: 'R$ 100,00',
        olos: 'R$ 100,00',
        baldussi_d1: 'R$ 100,00',
        pabx_baldussi: 'R$ 1000,00',
        ag_virtual_tentec: 'R$ 1000,00',
        ag_virtual_ypy: 'R$ 1000,00'
      },

      {
        id:2,
        ambiente_1: 'R$ 200,00',
        ambiente_2: 'R$ 200,00',
        ambiente_3: 'R$ 200,00',
        ambiente_4: 'R$ 200,00',
        total_ambiente: 'R$ 200,00',
        olos: 'R$ 200,00',
        baldussi_d1: 'R$ 200,00',
        pabx_baldussi: 'R$ 2000,00',
        ag_virtual_tentec: 'R$ 2000,00',
        ag_virtual_ypy: 'R$ 2000,00'
      },

      {
        id: 3,
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00',
        pabx_baldussi: 'R$ 3000,00',
        ag_virtual_tentec: 'R$ 3000,00',
        ag_virtual_ypy: 'R$ 3000,00'
      },
    ]
  }  

  columns = [
    {
      title: 'Ambiente 1',
      dataIndex: 'ambiente_1',
      key: 'ambiente_1',
      align: 'center'
    },

    {
      title: 'Ambiente 2',
      dataIndex: 'ambiente_2',
      key: 'ambiente_2',
      align: 'center'
    },

    {
      title: 'Ambiente 3',
      dataIndex: 'ambiente_3',
      key: 'ambiente_3',
      align: 'center'
    },

    {
      title: 'Ambiente 4',
      dataIndex: 'ambiente_4',
      key: 'ambiente_4',
      align: 'center'
    },

    {
      title: 'Total Ambiente',
      dataIndex: 'total_ambiente',
      key: 'total_ambiente',
      align: 'center'
    },

    {
      title: 'Olos',
      dataIndex: 'olos',
      key: 'olos',
      align: 'center'
    },

    {
      title: 'Baldussi (Discador 1)',
      dataIndex: 'baldussi_d1',
      key: 'baldussi_d1',
      align: 'center'
    },

  ];

  render(){    
    return(
      <Row>
        <MainLayout content={
          <div>
            <Row style={{ marginLeft: '4%', marginTop: '2%', marginBottom: '0%', width: '100%' }} >
              <Title level={4}>Custos referentes ao dia de: { moment().format('DD/MM/YYYY') }</Title>
            </Row>
            <Table 
              rowKey='id' 
              size='small' 
              style={gridTable}
              dataSource={this.state.dt} 
              columns={this.columns} 
              pagination={false}
            />            
            <Row style={{...gridTable, paddingTop: 50}}>
              <Col span={8}>
                <Card title='PABX - Baldussi'>
                  <Card.Grid style={gridStyle} hoverable={false} >{'R$ 500,00'}</Card.Grid>
                </Card>
              </Col>

              <Col span={8}>
                <Card title='Ag. Virtual - TenTec'>
                  <Card.Grid style={gridStyle} hoverable={false} >{'R$ 500,00'}</Card.Grid>
                </Card>
              </Col>

              <Col span={8}>
                <Card title='Ag. Virtual - Ypy'>
                  <Card.Grid style={gridStyle} hoverable={false} >{'R$ 500,00'}</Card.Grid>
                </Card>
              </Col>
            </Row>
          </div>
        } />
      </Row>
    );
  }
}

export default Cost;
