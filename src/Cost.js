import React, { Component } from 'react';
import { Table, Row, Col, Card, Typography, Spin } from 'antd';
import { MainLayout } from './MainLayout';
import 'antd/dist/antd.css';
import moment from 'moment';
import apiIP from './Services/service-ip';
import apiPABXBaldussi from './Services/service-pabx-baldussi';
import apiAVTentec from './Services/service-av-tentec';
import apiAVYpy from './Services/service-av-ypy';

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

  state = {
    custos: {}
  }

  componentDidMount(){

    this.setState({
      loading: {
        pabxBaldussi: true,
        avTentec: true,
        avYpy: true
      }
    })

      this.showDataIP();
      this.showDataPABXBaldussi();
      this.showDataAVTentec();
      this.showDataAVYpy();
  }

  showDataIP = () => {
    apiIP.get('/', (req, res) => {
      res.send(req.data)
    })
      .then(res => (this.setState((prev, props) => ({
        ip: res.data
      }))))
      .catch(err => console.warn(err));
  }

  showDataPABXBaldussi = () => {
    apiPABXBaldussi.get('/', (req, res) => {
      res.send(req.data)
    })
      .then(res => this.setState((prev, props) => ({
        custos: {
          ...prev.custos,
          pabxBaldussi: res.data.custo
        },
        loading: {
          ...prev.loading,
          pabxBaldussi: false
        }
      })))
      .catch(err => console.warn(err));
  }

  showDataAVTentec = () => {
    apiAVTentec.get('/', (req, res) => {
      res.send(req.data)
    })
      .then(res => this.setState((prev, props) => ({
        custos: {
          ...prev.custos,
          avTentec: res.data.custo
        },
        loading: {
          ...prev.loading,
          avTentec: false
        }
      })))
      .catch(err => console.warn(err));
  }

  showDataAVYpy = () => {
    apiAVYpy.get('/', (req, res) => {
      res.send(req.data)
    })
      .then(res => this.setState((prev, props) => ({
        custos: {
          ...prev.custos,
          avYpy: res.data.custo
        },
        loading: {
          ...prev.loading,
          avYpy: false
        }
      })))
      .catch(err => console.warn(err));
  }

  state = {
    dt: [
      {
        hora: '7h às 8h',
        ambiente_1: 'R$ 100,00',
        ambiente_2: 'R$ 100,00',
        ambiente_3: 'R$ 100,00',
        ambiente_4: 'R$ 100,00',
        total_ambiente: 'R$ 100,00',
        olos: 'R$ 100,00',
        baldussi_d1: 'R$ 100,00'
      },

      {
        hora: '8h às 9h',
        ambiente_1: 'R$ 200,00',
        ambiente_2: 'R$ 200,00',
        ambiente_3: 'R$ 200,00',
        ambiente_4: 'R$ 200,00',
        total_ambiente: 'R$ 200,00',
        olos: 'R$ 200,00',
        baldussi_d1: 'R$ 200,00'
      },

      {
        hora: '9h às 10h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        hora: '10h às 11h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        hora: '11h às 12h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        hora: '12h às 13h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        hora: '13h às 14h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        hora: '14h às 15h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        hora: '15h às 16h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        hora: '16h às 17h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        hora: '17h às 18h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        hora: '18h às 19h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        hora: '19h às 20h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      },

      {
        hora: '20h às 21h',
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00'
      }
    ]
    
  }  

  columns = [
    {
      title: 'Hora',
      dataIndex: 'hora',
      key: 'hora',
      align: 'center',
      render: (text) => (text)
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
              rowKey='hora' 
              size='small' 
              style={gridTable}
              dataSource={this.state.dt} 
              columns={this.columns} 
              pagination={false}
            />            
            <Row style={{...gridTable, paddingTop: 20}}>
              <Col span={8}>
                <Spin spinning={this.state.loading && this.state.loading.pabxBaldussi} >
                  <Card title='PABX - Baldussi'>
                    <Card.Grid style={gridStyle} hoverable={false} >{this.state.custos && this.state.custos.pabxBaldussi}</Card.Grid>
                  </Card>
                </Spin>
              </Col>

              <Col span={8}>
                <Spin spinning={this.state.loading && this.state.loading.avTentec} >
                  <Card title='Ag. Virtual - TenTec'>
                    <Card.Grid style={gridStyle} hoverable={false} >{this.state.custos && this.state.custos.avTentec}</Card.Grid>
                  </Card>
                </Spin>
              </Col>

              <Col span={8}>
                <Spin spinning={this.state.loading && this.state.loading.avYpy} >
                  <Card title='Ag. Virtual - Ypy'>
                    <Card.Grid style={gridStyle} hoverable={false} >{this.state.custos && this.state.custos.avYpy}</Card.Grid>
                  </Card>
                </Spin>
              </Col>
            </Row>
          </div>
        } />
        {console.log('state', this.state)}
      </Row>
    );
  }
}

export default Cost;
