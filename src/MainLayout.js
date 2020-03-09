import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';
import { LineChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Footer, Content, Sider } = Layout;
const fillWindow = {
  height: '100%',
  position: 'absolute',
  left: '0',
  width: '100%',
  overflow: 'hidden'
}

const colorWhite = {
  color: 'white'
}

const paddingAll = {
  padding: 10
}

const menus = [  
  {
    name: 'Início',
    icon: 'home',
    to: '/'
  },

  {
    name: 'Gráficos',
    icon: 'charts',
    to: '/charts'
  }

];

export class MainLayout extends Component {

  render(){
    return(
      <div>
        <MainLayoutSite content={this.props.content} />
      </div>
    )
  }
}

const MainLayoutSite = (props) => (
  
  <Layout style={fillWindow}>

    <Header style={{backgroundColor: '#A0D6D9' }}>
      <Col span={3}></Col>
      <Col span={18}>
        <h3 style={{...colorWhite, textAlign: 'center'}}>Reports</h3>
      </Col>
      <Col span={3}>        
        
      </Col>
    </Header>

    <Layout style={{ backgroundColor: 'white' }}>

      <Sider style={{ backgroundColor: '#99bbc2', paddingTop: "14%" }}> {/* red */}      

        { menus.map(menu => (
          <Row key={menu.name} style={paddingAll}>
            <Col span={5} />
            {/* <Col span={4}><Icon style={{color:'white', fontSize: 18}} type={menu.icon} /></Col> */}
            <Col span={4}><LineChartOutlined /></Col>
            <Col span={10}><Link style={{color: 'black'}} to={menu.to}>{menu.name}</Link></Col>
            <Col span={5} />
          </Row>
          ))
        }
      </Sider>

      <Content style={{ backgroundColor: 'white', paddingLeft: '10%', margin: 0, minHeight: 280 }}> {/* white */}

        <Col span={2} />

        <Col span={20} style={{ paddingTop: 50 }}>
          {props.content}
        </Col>

        <Col span={2} />

      </Content>
    </Layout>

    <Footer style={{fontSize: 10, textAlign: 'center', backgroundColor: '#e3e3e3'}}>Versão 1.0.0</Footer>
    
  </Layout>    
);