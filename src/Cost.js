import React, { Component } from 'react';
import { Table, Row, Col, Card, Typography, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { MainLayout } from './MainLayout';
import 'antd/dist/antd.css';
import moment from 'moment';
import apiIP from './Services/service-ip';
import apiDiscadorAmbiente1 from './Services/service-discador-ambiente1';
import apiDiscadorAmbiente2 from './Services/service-discador-ambiente2';
import apiDiscadorAmbiente3 from './Services/service-discador-ambiente3';
import apiDiscadorAmbiente4 from './Services/service-discador-ambiente4';
import apiUras from './Services/service-uras';
import apiDiscadorOlos from './Services/service-discador-olos';
import apiDiscadorBaldussi from './Services/service-discador-baldussi';
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

  componentDidMount(){

      this.showDataIP();
      this.showDataDiscadorAmbiente1();
      this.showDataDiscadorAmbiente2();
      this.showDataDiscadorAmbiente3();
      this.showDataDiscadorAmbiente4();
      this.showDataURAs();
      this.showDataOlos();
      this.showDataDiscadorBaldussi();
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

  showDataDiscadorAmbiente1 = () => {
    apiDiscadorAmbiente1.get('/', (req, res) => {
      console.log('AMBIENTE 1', req.data)
      res.send(req.data)
    })
      .then(res => this.setState((prev, props) => ({        
        discadorAmbiente1: res.data.custo,
        loading: {
          ...prev.loading,
          discadorAmbiente1: false
        }
      })))
      .catch(err => console.warn(err));
  }

  showDataDiscadorAmbiente2 = () => {
    apiDiscadorAmbiente2.get('/', (req, res) => {
      console.log('AMBIENTE 2', req.data)
      res.send(req.data)
    })
      .then(res => this.setState((prev, props) => ({        
        discadorAmbiente2: res.data.custo,
        loading: {
          ...prev.loading,
          discadorAmbiente2: false
        }
      })))
      .catch(err => console.warn(err));
  }

  showDataDiscadorAmbiente3 = () => {
    apiDiscadorAmbiente3.get('/', (req, res) => {
      console.log('AMBIENTE 3', req.data)
      res.send(req.data)
    })
      .then(res => this.setState((prev, props) => ({        
        discadorAmbiente3: res.data.custo,
        loading: {
          ...prev.loading,
          discadorAmbiente3: false
        }
      })))
      .catch(err => console.warn(err));
  }

  showDataDiscadorAmbiente4 = () => {
    apiDiscadorAmbiente4.get('/', (req, res) => {
      console.log('AMBIENTE 4', req.data)
      res.send(req.data)
    })
      .then(res => this.setState((prev, props) => ({        
        discadorAmbiente4: res.data.custo,
        loading: {
          ...prev.loading,
          discadorAmbiente4: false
        }
      })))
      .catch(err => console.warn(err));
  }

  showDataURAs = () => {
    apiUras.get('/', (req, res) => {
      console.log('URAS', req.data)
      res.send(req.data)
    })
      .then(res => this.setState((prev, props) => ({        
        discadorUras: res.data.custo,
        loading: {
          ...prev.loading,
          discadorUras: false
        }
      })))
      .catch(err => console.warn(err));
  }

  showDataOlos = () => {
    apiDiscadorOlos.get('/', (req, res) => {
      console.log('OLOS', req.data)
      res.send(req.data)
    })
      .then(res => this.setState((prev, props) => ({        
        discadorOlos: res.data.custo,
        loading: {
          ...prev.loading,
          discadorOlos: false
        }
      })))
      .catch(err => console.warn(err));
  }

  showDataDiscadorBaldussi = () => {
    apiDiscadorBaldussi.get('/', (req, res) => {
      console.log('BALDUSSI', req.data)
      res.send(req.data)
    })
      .then(res => this.setState((prev, props) => ({        
        discadorBaldussi: res.data.custo,
        loading: {
          ...prev.loading,
          discadorBaldussi: false
        }
      })))
      .catch(err => console.warn(err));
  }

  showDataPABXBaldussi = () => {
    apiPABXBaldussi.get('/', (req, res) => {
      console.log('PABX-BALDUSSI', req.data)
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
      console.log('AV-TENTEC', req.data)
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
      console.log('AV-YPY', req.data)
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
    custos: {},

    loading: {
      pabxBaldussi: true,
      avTentec: true,
      avYpy: true
    },

    dt: [
      { hora: '07h às 08h' },
      { hora: '08h às 09h' },
      { hora: '09h às 10h' },
      { hora: '10h às 11h' },
      { hora: '10h às 12h' },
      { hora: '12h às 13h' },
      { hora: '13h às 14h' },
      { hora: '14h às 15h' },
      { hora: '15h às 16h' },
      { hora: '16h às 17h' },
      { hora: '17h às 18h' },
      { hora: '18h às 19h' },
      { hora: '19h às 20h' },
      { hora: '20h às 21h' }
    ]
    
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
      align: 'center',
      // render: (text) => text ? text : <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    },
    
    {
      title: 'Ambiente 2',
      dataIndex: 'ambiente_2',
      key: 'ambciente_2',
      align: 'center',
      // render: (text) => text ? text : <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    },

    {
      title: 'Ambiente 3',
      dataIndex: 'ambiente_3',
      key: 'ambiente_3',
      align: 'center',
      // render: (text) => text ? text : <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    },

    {
      title: 'Ambiente 4',
      dataIndex: 'ambiente_4',
      key: 'ambiente_4',
      align: 'center',
      // render: (text) => text ? text : <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    },

    {
      title: 'Olos',
      dataIndex: 'olos',
      key: 'olos',
      align: 'center',
      // render: (text) => text ? text : <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    },

    {
      title: 'Baldussi - Discador 1',
      dataIndex: 'baldussi_d1',
      key: 'baldussi_d1',
      align: 'center',
      // render: (text) => text ? text : <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    }

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
              gutter={1}
              rowKey='hora' 
              size='small' 
              style={gridTable}
              dataSource={this.state.dt} 
              columns={this.columns} 
              pagination={false}
            />

            <Row style={{...gridTable, paddingTop: 20}}>
              <Col span={8}>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} spinning={this.state.loading && this.state.loading.pabxBaldussi}>
                  <Card title='PABX - Baldussi'>
                    <Card.Grid style={gridStyle} hoverable={false} >{this.state.custos && 'R$ ' + (this.state.custos.pabxBaldussi || '0,00')}</Card.Grid>
                  </Card>
                </Spin>
              </Col>

              <Col span={8}>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} spinning={this.state.loading && this.state.loading.avTentec}>
                  <Card title='Ag. Virtual - TenTec'>
                    <Card.Grid style={gridStyle} hoverable={false} >{this.state.custos && 'R$ ' + (this.state.custos.avTentec || '0,00')}</Card.Grid>
                  </Card>
                </Spin>
              </Col>

              <Col span={8}>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} spinning={this.state.loading && this.state.loading.avYpy}>
                  <Card title='Ag. Virtual - Ypy'>
                    <Card.Grid style={gridStyle} hoverable={false} >{this.state.custos && 'R$ ' + (this.state.custos.avYpy || '0,00')}</Card.Grid>
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
