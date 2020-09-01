import React, { Component } from 'react';
import { Table, Row, Col, Card, Typography } from 'antd';
import { MainLayout } from './MainLayout';
import 'antd/dist/antd.css';
import moment from 'moment';
import apiIP from './Services/service-ip';

const { Title } = Typography;

const gridTable = { 
  marginLeft: '2%',
  width: '100%', 
  textAlign: 'center' 
};

const gridStyle = {
  width: '100%',
  textAlign: 'center',
};

class Cost extends Component {

  componentDidMount(){
    apiIP.get('/', (req, res) => {
      res.send(req.data)
    })
      .then(res => (console.log('res', res), this.setState((prev, props) => ({
        ip: res.data
      }))))
      .catch(err => console.warn(err));
  }

  state = {
    dt: [
      {
        id: 1,
        hora: '7h as 8h',
        ambiente_1: 'R$ 100,00',
        ambiente_2: 'R$ 100,00',
        ambiente_3: 'R$ 100,00',
        ambiente_4: 'R$ 100,00',
        total_ambiente: 'R$ 100,00',
        olos: 'R$ 100,00',
        baldussi_d1: 'R$ 100,00'
      },

      {
        id:2,
        hora: '8h as 9h',
        ambiente_1: 'R$ 200,00',
        ambiente_2: 'R$ 200,00',
        ambiente_3: 'R$ 200,00',
        ambiente_4: 'R$ 200,00',
        total_ambiente: 'R$ 200,00',
        olos: 'R$ 200,00',
        baldussi_d1: 'R$ 200,00'
      },

      {
        id: 3,
        hora: '9h as 10h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        id: 3,
        hora: '10h as 11h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        id: 3,
        hora: '11h as 12h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        id: 3,
        hora: '12h as 13h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        id: 3,
        hora: '13h as 14h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        id: 3,
        hora: '14h as 15h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        id: 3,
        hora: '15h as 16h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        id: 3,
        hora: '16h as 17h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        id: 3,
        hora: '17h as 18h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        id: 3,
        hora: '18h as 19h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        id: 3,
        hora: '19h as 20h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        id: 3,
        hora: '20h as 21h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      }
    ],
    pabx: {
      baldussi: 'R$ 1000,00'
    },
    av: {
      tentec: 'R$ 2000,00',
      ypy: 'R$ 3000,00'
    }
  }  

  columns = [
    {
      title: 'Hora',
      dataIndex: 'hora',
      key: 'hora',
      align: 'center'
    },

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
            <Row style={{...gridTable, paddingTop: 20}}>
              <Col span={8}>
                <Card title='PABX - Baldussi'>
                  <Card.Grid style={gridStyle} hoverable={false} >{this.state.pabx.baldussi}</Card.Grid>
                </Card>
              </Col>

              <Col span={8}>
                <Card title='Ag. Virtual - TenTec'>
                  <Card.Grid style={gridStyle} hoverable={false} >{this.state.av.tentec}</Card.Grid>
                </Card>
              </Col>

              <Col span={8}>
                <Card title='Ag. Virtual - Ypy'>
                  <Card.Grid style={gridStyle} hoverable={false} >{this.state.av.ypy}</Card.Grid>
                </Card>
              </Col>
            </Row>
          </div>
        } />
        {console.log(this.state)}
      </Row>
    );
  }
}

export default Cost;
