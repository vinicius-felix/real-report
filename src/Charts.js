import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { MainLayout } from './MainLayout';
import { Row, Col, Radio } from "antd";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { transformToJSON, getEnv, getKMG, getAMD } from './utils';
//import dataSource from './dataSource';

const marginChart = { top: 5, right: 3, left: 3, bottom: 5 }
class Charts extends Component{

  state = {
    dt: transformToJSON()
  }

  render(){

    // Quebrando obj por ambiente
    const env1 = getEnv(this.state && this.state.dt, 1);
    const env2 = getEnv(this.state && this.state.dt, 2);
    const env3 = getEnv(this.state && this.state.dt, 3);
    const env4 = getEnv(this.state && this.state.dt, 4);

    // Quebrando os objs por tipos de rotas dos ambientes
    const env1KMG = getKMG(env1);    
    const env1AMD = getAMD(env1);

    const env2KMG = getKMG(env2);    
    const env2AMD = getAMD(env2);

    const env3KMG = getKMG(env3);    
    const env3AMD = getAMD(env3);

    const env4KMG = getKMG(env4);    
    const env4AMD = getAMD(env4);

    return(      
      <MainLayout content={
        <div>
          <div style={{paddingBottom: 150}}>
            <EnvCharts envName={"Ambiente 1"} dataSource={env1} />
            <Row style={{paddingTop: 30}}>
              <EnvCharts envName={"KMG"} dataSource={env1KMG} colSpan={12} colWidth={400} colHeight={200}/>
              <EnvCharts envName={"AMD"} dataSource={env1AMD} colSpan={12} colWidth={400} colHeight={200}/>
            </Row>
          </div>

          <div style={{paddingBottom: 150}}>
            <EnvCharts envName={"Ambiente 2"} dataSource={env2} />
            <Row style={{paddingTop: 30}}>
              <EnvCharts envName={"KMG"} dataSource={env2KMG} colSpan={12} colWidth={400} colHeight={200}/>
              <EnvCharts envName={"AMD"} dataSource={env2AMD} colSpan={12} colWidth={400} colHeight={200}/>
            </Row>
          </div>

          <div style={{paddingBottom: 150}}>
            <EnvCharts envName={"Ambiente 3"} dataSource={env3} />
            <Row style={{paddingTop: 30}}>
              <EnvCharts envName={"KMG"} dataSource={env3KMG} colSpan={12} colWidth={400} colHeight={200}/>
              <EnvCharts envName={"AMD"} dataSource={env3AMD} colSpan={12} colWidth={400} colHeight={200}/>
            </Row>
          </div>

          <div style={{paddingBottom: 150}}>
            <EnvCharts envName={"Ambiente 4"} dataSource={env4} />
            <Row style={{paddingTop: 30}}>
              <EnvCharts envName={"KMG"} dataSource={env4KMG} colSpan={12} colWidth={400} colHeight={200}/>
              <EnvCharts envName={"AMD"} dataSource={env4AMD} colSpan={12} colWidth={400} colHeight={200}/>
            </Row>
          </div>
        </div>
      } />
    )
  }
}

const EnvCharts = (props) => (
  <div>
    <div style={{ marginLeft: "40%"}}><h2>{props.envName}</h2></div>
    {/* <Col span={24}>
      <LineChart width={650} height={300} data={props.dataSource} margin={marginChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Nome_Rota" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Answered" stroke="red" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Failed" stroke="blue" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="No Answer" stroke="green" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Busy" stroke="black" activeDot={{ r: 8 }} />
      </LineChart>
    </Col> */}

    <Col span={props.colSpan || 24}>
      <BarChart width={props.colWidth || 800} height={props.colHeight || 300} data={props.dataSource} margin={marginChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Nome_Rota" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Answered" fill="#236467" />
        <Bar dataKey="Failed" fill="#2E4272" />
        <Bar dataKey="No Answer" fill="#AA8539" />
        <Bar dataKey="Busy" fill="#AA6D39" />
      </BarChart>
    </Col>
  </div>
)

export default Charts;