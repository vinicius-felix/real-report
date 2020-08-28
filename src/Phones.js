import React, { Component } from 'react';
import { Table, Row, Col, Card, Modal, Form, Input, Popconfirm, Button, Divider, message } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { MainLayout } from './MainLayout';
import apiReceptivos from './Services/service-receptivos';
import apiCallbacks from './Services/service-callbacks';
import 'antd/dist/antd.css';

class Phones extends Component {

  state = {
    visibleEditModal: false,
    visibleAddModal: false,
    form: {},
    data: {}
  };

  componentDidMount(){

    apiReceptivos.get('/', (req, res) => {
      res.send(req.data)
    })
      .then(res => this.setState((prev, props) => ({
        telefones: {
          ...prev.telefones,
          receptivos: res.data.receptivos
        }
      })))
      .catch(err => console.warn(err));


      apiCallbacks.get('/', (req, res) => {
        res.send(req.data)
      })
        .then(res => this.setState((prev, props) => ({
          telefones: {
            ...prev.telefones,
            callbacks: res.data.callbacks
          }
        })))
        .catch(err => console.warn(err));

  }

  handleSubmit = e => {
    console.log('e', e)
    
  }

  handleDelete = (data) => {
    if(data.campanha.toLowerCase().includes('callback'))
      apiCallbacks.delete(`/apagar/${data._id}`);
    else
      apiReceptivos.delete(`/apagar/${data._id}`);
  }

  onConfirm = async (data) => {
    message.success('Registro removido com sucesso!');
    await this.handleDelete(data);
    //document.location.reload(true);
  }


  onOkModalReceptivo = (e) => {
    // const { receptivos } = this.state.telefones;
    // console.log("rec", e.target)
    //apiReceptivos.put(`/atualiza/${receptivos._id}`, receptivos);
    //document.location.reload(true);
  };

  onOkModalCallback = () => {
    const { callback } = this.state.telefones;
    apiCallbacks.put(`/atualiza/${callback._id}`, callback);
    //document.location.reload(true);
  };

  onCancelModal = () => {
    this.setState({ 
      visibleAddModal: false,
      visibleEditModal: false
    });
  }

  onEdit = (id) => {
    apiReceptivos.get(`/exibir/${id}`)
      .then(res => {
        console.log('res',res)
        this.setState({
          form: res.data.receptivo
        });
      })
      .catch(err => console.warn(err));
  };

  onConfirm = async (id) => {
    message.success('Alterado com sucesso');
    await this.handleDelete(id);
    document.location.reload(true);
  };

  handleEdit = (id) => {
    this.onEdit(id);
    this.setState({
      visibleEditModal: true
    });
  };

  handleAdd = (e) => {
    console.log("E:", e.target.value)
    this.setState({
      visibleAddModal: true
    });
  }

  onChange = e => {
    const value = e.target.value, key = e.target.id;

    this.setState((prev, props) => ({
      form: {
        ...prev.form,
        [key]: value
      }
    }));
  };

  columns = [
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
    },
  
    {
      key: 'actions',
      title: 'Ações',
      align: 'center',
      render: (textColumn, record) => (
        <span>
          <Button style={{width: 30, textAlign: 'center'}} type='primary' size='small' onClick={() => this.handleEdit(record._id)} ghost>
            <EditOutlined style={{color: 'gray'}} />
          </Button>
  
          <Divider type='vertical' />
  
          <Popconfirm title='Deseja realmente apagar?' onConfirm={() => this.onConfirm(textColumn)} okText='Sim' cancelText='Não'>
            <Button style={{width: 30, color: 'gray'}} type='primary' size='small' ghost >
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </span>
      )
    }
  
  ];

  render(){

    const layout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 16 },
    };

    return(
      <Row>
        <MainLayout content={
          <div>
          <Col>
          <Row style={{paddingTop: 30, marginLeft: 10}}>
              <Card title='Receptivos' extra={
                <Button onClick={(e) => this.handleAdd(e)}>
                  <PlusOutlined />
                  Adicionar Receptivo
                </Button>
              }>
                <Table rowKey='_id' size='small' style={{ marginLeft: '3%', width: '100%', textAlign: 'center' }} dataSource={this.state.telefones && this.state.telefones.receptivos} columns={this.columns} pagination={false} />
              </Card>
            </Row>

            <Row style={{paddingTop: 30, marginLeft: 10}}>
              <Card title='Callbacks' extra={
                <Button onClick={this.handleAdd}>
                  <PlusOutlined />
                  Adicionar Callback
                </Button>
              }>
                <Table rowKey='_id' size='small' style={{ marginLeft: '3%', width: '100%', textAlign: 'center' }} dataSource={this.state.telefones && this.state.telefones.callbacks} columns={this.columns} pagination={false} />
              </Card>
            </Row>
          </Col>

          </div>
        } />

        <Modal 
          title={'Adicionar'} 
          visible={this.state.visibleAddModal} 
          onOk={(e) => this.onOkModalReceptivo(e)} 
          onCancel={this.onCancelModal}
        >
          <Form {...layout}>
            <Form.Item id='campanha' name='campanha' label='Campanha' rules={[{ required: true }]} >
              <Input placeholder='Campanha' />
            </Form.Item>

            <Form.Item id='status' name='status' label='status' rules={[{ required: true }]}>
              <Input placeholder='status' />
            </Form.Item>

            <Form.Item id='servidor' name='servidor' label='servidor' rules={[{ required: true }]}>
              <Input placeholder='servidor' />
            </Form.Item>

            <Form.Item id='receptivo' name='receptivo' label='receptivo' rules={[{ required: true }]}>
              <Input placeholder='receptivo' />
            </Form.Item>

            <Form.Item id='operadora' name='operadora' label='operadora' rules={[{ required: true }]}>
              <Input placeholder='operadora' />
            </Form.Item>

            <Form.Item id='dac' name='dac' label='dac' rules={[{ required: true }]}>
              <Input placeholder='dac' />
            </Form.Item>

            <Form.Item id='cockpit' name='cockpit' label='cockpit' rules={[{ required: true }]}>
              <Input placeholder='cockpit' />
            </Form.Item>

            <Form.Item id='carteira' name='carteira' label='carteira' rules={[{ required: true }]}>
              <Input placeholder='carteira' />
            </Form.Item>
          </Form>
        </Modal>


        <Modal 
          title={'Editar'}          
          visible={this.state.visibleEditModal} 
          onOk={this.onOkModalReceptivo} 
          onCancel={this.onCancelModal}
        >
          <Form {...layout} initialValues={
            { data: this.state.form }
          }>
            <Form.Item id='data.campanha' name='campanha' label='Campanha' rules={[{ required: true }]} >
              <Input placeholder='Campanha' />
            </Form.Item>

            <Form.Item id='status' name='status' label='status' rules={[{ required: true }]}>
              <Input placeholder='status' />
            </Form.Item>

            <Form.Item id='servidor' name='servidor' label='servidor' rules={[{ required: true }]}>
              <Input placeholder='servidor' />
            </Form.Item>

            <Form.Item id='receptivo' name='receptivo' label='receptivo' rules={[{ required: true }]}>
              <Input placeholder='receptivo' />
            </Form.Item>

            <Form.Item id='operadora' name='operadora' label='operadora' rules={[{ required: true }]}>
              <Input placeholder='operadora' />
            </Form.Item>

            <Form.Item id='dac' name='dac' label='dac' rules={[{ required: true }]}>
              <Input placeholder='dac' />
            </Form.Item>

            <Form.Item id='cockpit' name='cockpit' label='cockpit' rules={[{ required: true }]}>
              <Input placeholder='cockpit' />
            </Form.Item>

            <Form.Item id='carteira' name='carteira' label='carteira' rules={[{ required: true }]}>
              <Input placeholder='carteira' />
            </Form.Item>
          </Form>
        </Modal>


        {console.log(this.state)}
        
      </Row>
    );
  }
}

export default Phones;