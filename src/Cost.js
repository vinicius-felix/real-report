import React, { Component } from 'react';
import { Table, Row, Col, Button } from 'antd';
import { MainLayout } from './MainLayout';
import 'antd/dist/antd.css';

class Cost extends Component {

  state = {
    dt: [
      {
        ambiente_1: 'R$ 100,00',
        ambiente_2: 'R$ 100,00',
        ambiente_3: 'R$ 100,00',
        ambiente_4: 'R$ 100,00',
        total_ambiente: 'R$ 100,00',
        olos: 'R$ 100,00',
        baldussi_d1: 'R$ 100,00',
        ag_virtual_baldussi: 'R$ 1000,00',
        ag_virtual_tentec: 'R$ 1000,00',
      },

      {
        ambiente_1: 'R$ 200,00',
        ambiente_2: 'R$ 200,00',
        ambiente_3: 'R$ 200,00',
        ambiente_4: 'R$ 200,00',
        total_ambiente: 'R$ 200,00',
        olos: 'R$ 200,00',
        baldussi_d1: 'R$ 200,00',
        ag_virtual_baldussi: 'R$ 2000,00',
        ag_virtual_tentec: 'R$ 2000,00',
      },

      {
        ambiente_1: 'R$ 300,00',
        ambiente_2: 'R$ 300,00',
        ambiente_3: 'R$ 300,00',
        ambiente_4: 'R$ 300,00',
        total_ambiente: 'R$ 300,00',
        olos: 'R$ 300,00',
        baldussi_d1: 'R$ 300,00',
        ag_virtual_baldussi: 'R$ 3000,00',
        ag_virtual_tentec: 'R$ 3000,00',
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

    {
      title: 'Baldussi (Ag. Virtual)',
      dataIndex: 'ag_virtual_baldussi',
      key: 'ag_virtual_baldussi',
      align: 'center'
    },

    {
      title: 'TenTec (Ag. Virtual)',
      dataIndex: 'ag_virtual_tentec',
      key: 'ag_virtual_tentec',
      align: 'center'
    },

  ];

  render(){    
    return(
      <Row>
        <MainLayout content={
          <div>
            <Row style={{margin: 16}}>                            
            </Row>
            <Table 
              rowKey='id' 
              size='small' 
              style={{ marginLeft: '3%', width: '100%', textAlign: 'center' }}  
              dataSource={this.state.dt} 
              columns={this.columns} 
            />
          </div>
        } />
      </Row>
    );
  }
}

export default Cost;
