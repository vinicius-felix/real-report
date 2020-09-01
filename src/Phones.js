import React, { Component } from 'react';
import { Table, Row, Col, Card, Modal, Form, Input, Popconfirm, Button, Divider, message } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { MainLayout } from './MainLayout';
import apiReceptivos from './Services/service-receptivos';
import apiCallbacks from './Services/service-callbacks';
import 'antd/dist/antd.css';

class Phones extends Component {

  constructor(props){
    super(props);
    this.state = {
      visibleEditModal: false,
      visibleEditModalCall: false,
      visibleAddModalRecep: false,
      visibleAddModalCall: false,
      form: {},
      data: {}
    };
  }  

  componentDidMount(){
    this.showData();
    this.showDataCall();
  }

  showData = () => {
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
  }

  showDataCall = () => {
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

  handleDelete = (data) => {    
    apiReceptivos.delete(`/apagar/${data._id}`);    
  }

  handleDeleteCall = (data) => {      
    apiCallbacks.delete(`/apagar/${data._id}`);
  }

  onConfirm = async (id) => {
    message.success('Alterado com sucesso');
    await this.handleDelete(id);
    this.setState({ visibleEditModal: false });
    this.showData();
    // document.location.reload(true);
  };

  onConfirmCall = async (data) => {
    message.success('Registro removido com sucesso!');
    await this.handleDeleteCall(data);
    this.setState({ visibleEditModalCall: false });
    this.showDataCall()
    // document.location.reload(true);
  }

  onOkModalReceptivo = (e) => {
    const { form } = this.state
    e.preventDefault();
    apiReceptivos.put(`/atualiza/${form._id}`, form);
    this.setState({ visibleEditModal: false });
    this.showData();
  };

  onOkModalCallback = (e) => {
    const { form } = this.state
    e.preventDefault();
    apiCallbacks.put(`/atualiza/${form._id}`, form);
    this.setState({ visibleEditModalCall: false });
    this.showDataCall();    
  };

  onCancelModal = () => {
    this.setState({ 
      visibleAddModalRecep: false,
      visibleAddModalCall: false,
      visibleEditModal: false,
      visibleEditModalCall: false,
    });
  }

  handleEdit = (id) => {
    apiReceptivos.get(`/exibir/${id}`)
      .then(res => {
        this.setState({ 
          form: res.data.receptivo, 
          visibleEditModal: true 
        });
      })
      .catch(err => console.warn(err));
  };

  handleEditCall = (id) => {
    apiCallbacks.get(`/exibir/${id}`)
      .then(res => {
        this.setState({ 
          form: res.data.callbacks,
          visibleEditModalCall: true 
        });
      })
      .catch(err => console.warn(err));
  };

  handleAddRecep = (e) => {
    this.setState({
      visibleAddModalRecep: true
    });
  }

  handleAddCall = (e) => {
    this.setState({
      visibleAddModalCall: true
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

  handleSubmit = e => {
    const { form } = this.state
    e.preventDefault();    
    apiReceptivos.post('/registrar', form);
    this.setState({ visibleAddModalRecep: false });
    this.showData();
    // document.location.reload(true);
  };

  handleSubmitCall = e => {
    const { form } = this.state
    e.preventDefault();    
    apiCallbacks.post('/registrar', form);
    this.setState({ visibleAddModalCall: false });
    this.showDataCall()
    // document.location.reload(true);
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
          <Button 
            style={{width: 30, textAlign: 'center'}} 
            type='primary' 
            size='small' 
            onClick={() => this.handleEdit(record._id)}
            ghost
          >
            <EditOutlined style={{color: 'gray'}} />
          </Button>
  
          <Divider type='vertical' />
  
          <Popconfirm title='Deseja realmente apagar?' onConfirm={() => this.onConfirm(textColumn)} okText='Sim' cancelText='Não'>
            <Button 
              style={{width: 30, color: 'gray'}} 
              type='primary' 
              size='small' 
              ghost 
            >
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </span>
      )
    }  
  ];

  columnsCall = [
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
          <Button 
            style={{width: 30, textAlign: 'center'}} 
            type='primary' 
            size='small' 
            onClick={() => this.handleEditCall(record._id)} 
            ghost
          >
            <EditOutlined style={{color: 'gray'}} />
          </Button>
  
          <Divider type='vertical' />
  
          <Popconfirm title='Deseja realmente apagar?' onConfirm={() => this.onConfirmCall(textColumn)} okText='Sim' cancelText='Não'>
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
              <Card style={{ width: '85%'}} title='Receptivos' extra={
                <Button onClick={(e) => this.handleAddRecep(e)}>
                  <PlusOutlined />
                  Adicionar Receptivo
                </Button>
              }>
                <Table 
                  rowKey='_id' 
                  size='small' 
                  style={{ marginLeft: '3%', width: '100%', textAlign: 'center' }} 
                  dataSource={this.state.telefones && this.state.telefones.receptivos}
                  columns={this.columns} 
                  pagination={false} 
                />
              </Card>
            </Row>

            <Row style={{paddingTop: 30, marginLeft: 10}}>
              <Card style={{ width: '85%'}} title='Callbacks' extra={
                <Button onClick={(e) => this.handleAddCall(e)}>
                  <PlusOutlined />
                  Adicionar Callback
                </Button>
              }>
                <Table 
                  rowKey='_id' 
                  size='small' 
                  style={{ marginLeft: '3%', width: '100%', textAlign: 'center' }} 
                  dataSource={this.state.telefones && this.state.telefones.callbacks}
                  columns={this.columnsCall} 
                  pagination={false} 
                />
              </Card>
            </Row>
          </Col>

          </div>
        } />

        <Modal 
          title={'Adicionar Receptivo'} 
          visible={this.state.visibleAddModalRecep} 
          onOk={e => this.handleSubmit(e)}
          onCancel={this.onCancelModal}
        >
          <Form {...layout} onChange={this.onChange}>
            <Form.Item id='campanha' name='campanha' label='Campanha' rules={[{ required: true }]} >
              <Input placeholder='Campanha' />
            </Form.Item>

            <Form.Item id='status' name='status' label='Status' rules={[{ required: true }]}>
              <Input placeholder='Status' />
            </Form.Item>

            <Form.Item id='servidor' name='servidor' label='Servidor' rules={[{ required: true }]}>
              <Input placeholder='Servidor' />
            </Form.Item>

            <Form.Item id='receptivo' name='receptivo' label='Número' rules={[{ required: true }]}>
              <Input placeholder='(00) 0000 0000' />
            </Form.Item>

            <Form.Item id='operadora' name='operadora' label='Operadora' rules={[{ required: true }]}>
              <Input placeholder='Operadora' />
            </Form.Item>

            <Form.Item id='dac' name='dac' label='DAC' rules={[{ required: false }]}>
              <Input placeholder='DAC' />
            </Form.Item>

            <Form.Item id='cockpit' name='cockpit' label='Cockpit' rules={[{ required: false }]}>
              <Input placeholder='Cockpit' />
            </Form.Item>

            <Form.Item id='carteira' name='carteira' label='Carteira' rules={[{ required: true }]}>
              <Input placeholder='Carteira' />
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title={'Editar Receptivo'}
          visible={this.state.visibleEditModal} 
          onOk={this.onOkModalReceptivo}
          onCancel={this.onCancelModal}
        >
          <Form {...layout} onChange={this.onChange}>
            <Form.Item id='campanha' name='campanha' label='Campanha' rules={[{ required: true }]}>
              <Input 
                placeholder='Campanha'
                defaultValue={this.state.form.campanha}
              />
            </Form.Item>

            <Form.Item id='status' name='status' label='status' rules={[{ required: true }]}>
              <Input
                placeholder='Status'
                defaultValue={this.state.form.status}
              />
            </Form.Item>

            <Form.Item id='servidor' name='servidor' label='servidor' rules={[{ required: true }]}>
            <Input
                placeholder='Servidor'
                defaultValue={this.state.form.servidor}
              />
            </Form.Item>

            <Form.Item id='receptivo' name='receptivo' label='Número' rules={[{ required: true }]}>
            <Input
                placeholder='(00) 0000-0000'
                defaultValue={this.state.form.receptivo}
              />
            </Form.Item>

            <Form.Item id='operadora' name='operadora' label='Operadora' rules={[{ required: true }]}>
            <Input
                placeholder='Operadora'
                defaultValue={this.state.form.operadora}
              />
            </Form.Item>

            <Form.Item id='dac' name='dac' label='DAC' rules={[{ required: false }]}>
            <Input
                placeholder='DAC'
                defaultValue={this.state.form.dac}
              />
            </Form.Item>

            <Form.Item id='cockpit' name='cockpit' label='Cockpit' rules={[{ required: false }]}>
            <Input
                placeholder='Cockpit'
                defaultValue={this.state.form.cockpit}
              />
            </Form.Item>

            <Form.Item id='carteira' name='carteira' label='Carteira' rules={[{ required: true }]}>
            <Input
                placeholder='Carteira'
                defaultValue={this.state.form.carteira}
              />
            </Form.Item>
          </Form>
        </Modal>

        <Modal 
          title={'Adicionar Callback'} 
          visible={this.state.visibleAddModalCall}
          onOk={e => this.handleSubmitCall(e)}
          onCancel={this.onCancelModal}
        >
          <Form {...layout} onChange={this.onChange}>
            <Form.Item id='campanha' name='campanha' label='Campanha' rules={[{ required: true }]} >
              <Input placeholder='Campanha' />
            </Form.Item>

            <Form.Item id='status' name='status' label='Status' rules={[{ required: true }]}>
              <Input placeholder='Status' />
            </Form.Item>

            <Form.Item id='servidor' name='servidor' label='Servidor' rules={[{ required: true }]}>
              <Input placeholder='Servidor' />
            </Form.Item>

            <Form.Item id='receptivo' name='receptivo' label='Número' rules={[{ required: true }]}>
              <Input placeholder='(00) 0000 0000' />
            </Form.Item>

            <Form.Item id='operadora' name='operadora' label='Operadora' rules={[{ required: true }]}>
              <Input placeholder='Operadora' />
            </Form.Item>

            <Form.Item id='dac' name='dac' label='DAC' rules={[{ required: false }]}>
              <Input placeholder='DAC' />
            </Form.Item>

            <Form.Item id='cockpit' name='cockpit' label='Cockpit' rules={[{ required: false }]}>
              <Input placeholder='Cockpit' />
            </Form.Item>

            <Form.Item id='carteira' name='carteira' label='Carteira' rules={[{ required: true }]}>
              <Input placeholder='Carteira' />
            </Form.Item>
          </Form>
        </Modal>
        
        <Modal
          title={'Editar Callback'}
          visible={this.state.visibleEditModalCall} 
          onOk={this.onOkModalCallback}
          onCancel={this.onCancelModal}
        >
          <Form {...layout} onChange={this.onChange}>
            <Form.Item id='campanha' name='campanha' label='Campanha' rules={[{ required: true }]}>
              <Input 
                placeholder='Campanha'
                defaultValue={this.state.form.campanha}
              />
            </Form.Item>

            <Form.Item id='status' name='status' label='status' rules={[{ required: true }]}>
              <Input
                placeholder='Status'
                defaultValue={this.state.form.status}
              />
            </Form.Item>

            <Form.Item id='servidor' name='servidor' label='servidor' rules={[{ required: true }]}>
            <Input
                placeholder='Servidor'
                defaultValue={this.state.form.servidor}
              />
            </Form.Item>

            <Form.Item id='receptivo' name='receptivo' label='Número' rules={[{ required: true }]}>
            <Input
                placeholder='(00) 0000-0000'
                defaultValue={this.state.form.receptivo}
              />
            </Form.Item>

            <Form.Item id='operadora' name='operadora' label='Operadora' rules={[{ required: true }]}>
            <Input
                placeholder='Operadora'
                defaultValue={this.state.form.operadora}
              />
            </Form.Item>

            <Form.Item id='dac' name='dac' label='DAC' rules={[{ required: false }]}>
            <Input
                placeholder='DAC'
                defaultValue={this.state.form.dac}
              />
            </Form.Item>

            <Form.Item id='cockpit' name='cockpit' label='Cockpit' rules={[{ required: false }]}>
            <Input
                placeholder='Cockpit'
                defaultValue={this.state.form.cockpit}
              />
            </Form.Item>

            <Form.Item id='carteira' name='carteira' label='Carteira' rules={[{ required: true }]}>
            <Input
                placeholder='Carteira'
                defaultValue={this.state.form.carteira}
              />
            </Form.Item>
          </Form>
        </Modal>
      </Row>
    );
  }
}

export default Phones;