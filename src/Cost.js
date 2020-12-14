import React, { Component } from 'react';
import { Table, Row, Typography, Button, message, Col, Spin, Card } from 'antd';
import { ReloadOutlined, LoadingOutlined } from '@ant-design/icons';
import { MainLayout } from './MainLayout';
import 'antd/dist/antd.css';
import moment from 'moment';
import apiDiscadorAmbiente from './Services/service-discador-ambiente';
import apiUras from './Services/service-uras-2';
import apiOlos from './Services/service-discador-olos';
import apiAVTentec from './Services/service-av-tentec';
import apiAVYpy from './Services/service-av-ypy';
//import apiDiscadorBaldussi from './Services/service-discador-baldussi-2';

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

  constructor(props){
    super(props);
    this.state = {
      data: [],
      reload: false,
      loadingTable: true,
      loadData: false,
      spinningLoad: true
    }
  }

  componentDidMount = async () => {
    this.constructTable();
    this.showDataAVTentec();
    this.showDataAVYpy();
  }

  showDataAVTentec = () => {
    apiAVTentec.get('/', (req, res) => {
      res.send(req.data)
    })
      .then(res => this.setState((prev, props) => ({
        ...prev,
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
        ...prev,
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

  constructTable = async () => {
    
    const amb1 = '192.168.220.10', amb2 = '192.168.200.83', amb3 = '192.168.200.247', amb4 = '192.168.200.87';
    let currentHour = Number.parseInt(moment().format('HH'));
    let startHour = 7, count = 0;
    
    for(startHour; startHour <= currentHour; startHour++){

      // Ambiente 1
      message.warning('Acessando ambiente 1...');
      let ambiente1 = await apiDiscadorAmbiente.get(`/${amb1}/${startHour}/${(startHour)+1}`, (req, res) => {
        res.send(req.data)
      })
        .then(res => { return res.data.custo })
        .catch(err => { return '0,00' }); 


      // Ambiente 2
      message.warning('Acessando ambiente 2...');
      let ambiente2 = await apiDiscadorAmbiente.get(`/${amb2}/${startHour}/${(startHour)+1}`, (req, res) => {
        res.send(req.data)
      })
        .then(res => { return res.data.custo })
        .catch(err => { return '0,00' }); 


      // Ambiente 3
      message.warning('Acessando ambiente 3...');
      let ambiente3 = await apiDiscadorAmbiente.get(`/${amb3}/${startHour}/${(startHour)+1}`, (req, res) => {
        res.send(req.data)
      })
        .then(res => { return res.data.custo })
        .catch(err => { return '0,00' });


      // Ambiente 4
      message.warning('Acessando ambiente 4...');
      let ambiente4 = await apiDiscadorAmbiente.get(`/${amb4}/${startHour}/${(startHour)+1}`, (req, res) => {
        res.send(req.data)
      })
        .then(res => { return res.data.custo })
        .catch(err => { return '0,00' }); 


      // URAs
      message.warning('Acessando URAs...');
      let ura = await apiUras.get(`/${startHour}`, (req, res) => {
        res.send(req.data)
      })
        .then(res => { return res.data.custo })
        .catch(err => { return '0,00' });

      // Olos
      message.warning('Acessando Olos...');
      let olos = await apiOlos.get(`/`, (req, res) => {
        res.send(req.data)
      })
        .then(res => { return res.data.custo })
        .catch(err => { return '0,00' });


      // Baldussi
      // message.warning('Acessando Baldussi...');
      // let baldussi = await apiDiscadorBaldussi.get(`/${startHour}/${(startHour)+1}`, (req, res) => {
      //   res.send(req.data)
      // })
      //   .then(res => { return res.data.custo })
      //   .catch(err => { return 'R$ 0,00' }); 

      this.setState((prev, props) => ({ 
        loadingTable: false,
        data: [
          ...prev.data, 
          {
            ambiente1,
            ambiente2,
            ambiente3,
            ambiente4,
            totalAmbiente: (
              Number.parseFloat(ambiente1.replace(',', '.')) +
              Number.parseFloat(ambiente2.replace(',', '.')) +
              Number.parseFloat(ambiente3.replace(',', '.')) +
              Number.parseFloat(ambiente4.replace(',', '.'))
            ).toFixed(2).replace('.', ','),
            ura,
            olos: olos[count],
            //baldussi, 
            hora: `${startHour}h até ${startHour+1}h`, 
            horaInicial: startHour, 
            horaFinal: startHour+1
        }]}));

        count++;
    }

    this.setState({ reload: true, loadData: true, spinningLoad: false });
    message.success('Dados carregados com sucesso!');

  }

  updateRow = async (rec) => {
    if(this.state.reload){
      message.warning('Carregando dados. Aguarde!');
      this.setState({ 
        data: [], 
        reload: false, 
        loadingTable: true,
        loadData: false,
        spinningLoad: true
      });
      this.constructTable();
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
      dataIndex: 'ambiente1',
      key: 'ambiente1',
      align: 'center',
      render: text => text && 'R$ ' + text
    },

    {
      title: 'Ambiente 2',
      dataIndex: 'ambiente2',
      key: 'ambiente2',
      align: 'center',
      render: text => text && 'R$ ' + text
    },

    {
      title: 'Ambiente 3',
      dataIndex: 'ambiente3',
      key: 'ambiente3',
      align: 'center',
      render: text => text && 'R$ ' + text
    },

    {
      title: 'Ambiente 4',
      dataIndex: 'ambiente4',
      key: 'ambiente4',
      align: 'center',
      render: text => text && 'R$ ' + text
    },

    {
      title: 'Total Ambientes',
      dataIndex: 'totalAmbiente',
      key: 'totalAmbiente',
      align: 'center',
      render: text => text && 'R$ ' + text
    },

    {
      title: 'URAs',
      dataIndex: 'ura',
      key: 'ura',
      align: 'center',
      render: text => text && 'R$ ' + text
    },

    {
      title: 'Olos',
      dataIndex: 'olos',
      key: 'olos',
      align: 'center',
      render: text => text && 'R$ ' + text
    },

    // {
    //   title: 'Baldussi',
    //   dataIndex: 'baldussi',
    //   key: 'baldussi',
    //   align: 'center',
    //   render: text => text && 'R$ ' + text
    // },

    {
      key: 'actions',
      title: 'Ações',
      align: 'center',
      render: (textColumn, record) => (
        <span>
          <Button 
            style={{width: 30, textAlign: 'center'}} 
            type='primary' 
            size='small' 
            onClick={(rec) => { this.updateRow(rec) }}
            ghost
          >
            <ReloadOutlined style={{color: 'gray'}} />
          </Button>
        </span>
      )
    }  

  ];

  render(){    
    return(
      <Row>
        <MainLayout content={
          <div>
            <Row style={{ marginLeft: '4%', marginTop: '2%', marginBottom: '0%', width: '100%' }} >
              <Title level={4}>Custos referentes ao dia de: { moment().format('DD/MM/YYYY') } até as { moment().format('HH') }hrs </Title>
            </Row>
            <Row style={{ marginLeft: '4%', marginTop: '2%', marginBottom: '0%', width: '100%' }}>
              <Title level={4}>{this.state.loadData ? '' : 'Gerando relatório...' }</Title>
            </Row>
            
            <Table 
              gutter={1}
              rowKey='hora' 
              size='small' 
              style={gridTable}
              dataSource={this.state.data} 
              columns={this.columns} 
              pagination={false}
              loading={this.state.loadingTable}

              // onRow={ (rc, ri) => {
              //   return {
              //     onClick: event => { message.error('Função em desenvolvimento.'); }
              //   }
              // }}

            />

            <Row style={{...gridTable, paddingTop: 20}}>
              <Col span={24} style={{ textAlign: 'center', width: '99%' }}>
                { (this.state.data && this.state.data.length > 0) && <Spin indicator={<LoadingOutlined style={{ fontSize: 38 }} spin />} spinning={this.state.spinningLoad} /> }
              </Col>
            </Row>

            <Row style={{...gridTable, paddingTop: 20}}>
              <Col span={12}>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} spinning={this.state.loading && this.state.loading.avTentec}>
                  <Card title='Ag. Virtual - TenTec'>
                    <Card.Grid style={gridStyle} hoverable={false} >{this.state.custos && 'R$ ' + (this.state.custos.avTentec || '0,00')}</Card.Grid>
                  </Card>
                </Spin>
              </Col>

              <Col span={12}>
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