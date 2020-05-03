import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { MainLayout } from './MainLayout';
import { Row, Col, DatePicker } from "antd";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { transformToJSON, getEnv, getKMG, getAMD } from './utils';
import moment from 'moment';

const marginChart = { top: 5, right: 3, left: 3, bottom: 5 }
const dateFormat = 'DD/MM/YYYY';
const today = moment().format('DD/MM/YYYY');
let dataSet;

class Charts extends Component{

  state = {
    dt: transformToJSON()
  }

  filterByDay = (day) => {
    let obj = transformToJSON();
    let filtered = obj && obj.filter( function(elem) { return moment(elem.Data).format('DD/MM/YYYY') === day } )
    return filtered;
  }
  
  render(){

    dataSet = this.state && this.state.dt;

    // Quebrando obj por ambiente
    const env1 = getEnv(dataSet, 1);
    const env2 = getEnv(dataSet, 2);
    const env3 = getEnv(dataSet, 3);
    const env4 = getEnv(dataSet, 4);

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
          <Row style={{marginTop: 35, marginLeft: 60, marginBottom: 25}} >
            <Col style={{padding: 2, marginRight: 5}}> 
              <h3><b>Filtrar Data:</b></h3>
            </Col>

            <Col>
              <DatePicker 
                allowClear={false} 
                defaultValue={moment(today, dateFormat)} 
                format={dateFormat} 
                onChange={ (e) => this.setState({dt: this.filterByDay(moment(e).format('DD/MM/YYYY'))}) } 
              />
            </Col>
          </Row>
          
          <div>
            <div style={{paddingBottom: 150}}>
              <EnvCharts envName={"Ambiente 1"} dataSource={env1} />
              <Row style={{paddingTop: 30}}>
                <EnvCharts envName={"KMG"} dataSource={env1KMG} colSpan={12} colWidth={400} colHeight={200} />
                <EnvCharts envName={"AMD"} dataSource={env1AMD} colSpan={12} colWidth={400} colHeight={200} />
              </Row>
            </div>

            <div style={{paddingBottom: 150}}>
              <EnvCharts envName={"Ambiente 2"} dataSource={env2} />
              <Row style={{paddingTop: 30}}>
                <EnvCharts envName={"KMG"} dataSource={env2KMG} colSpan={12} colWidth={400} colHeight={200} />
                <EnvCharts envName={"AMD"} dataSource={env2AMD} colSpan={12} colWidth={400} colHeight={200} />
              </Row>
            </div>

            <div style={{paddingBottom: 150}}>
              <EnvCharts envName={"Ambiente 3"} dataSource={env3} />
              <Row style={{paddingTop: 30}}>
                <EnvCharts envName={"KMG"} dataSource={env3KMG} colSpan={12} colWidth={400} colHeight={200} />
                <EnvCharts envName={"AMD"} dataSource={env3AMD} colSpan={12} colWidth={400} colHeight={200} />
              </Row>
            </div>

            <div style={{paddingBottom: 150}}>
              <EnvCharts envName={"Ambiente 4"} dataSource={env4} />
              <Row style={{paddingTop: 30}}>
                <EnvCharts envName={"KMG"} dataSource={env4KMG} colSpan={12} colWidth={400} colHeight={200} />
                <EnvCharts envName={"AMD"} dataSource={env4AMD} colSpan={12} colWidth={400} colHeight={200} />
              </Row>
            </div>
          </div>

        </div>
      } />
    )
  }
}

const CustomizedAxisTick = (props) => (
  <g transform={`translate(${props.x},${props.y})`}>
    <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-75)">{props.payload.value}</text>
  </g>
);

const EnvCharts = (props) => (
  <div>
    <Col span={props.colSpan || 24}>
      <div style={{ marginLeft: 60 }}><h2>{props.envName}</h2></div>
      <BarChart width={props.colWidth || 800} height={props.colHeight || 300} data={props.dataSource} margin={marginChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Nome_Rota" style={{fontSize: 11}} tick={<CustomizedAxisTick/>} height={50} width={10} interval={0} />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="Answered" fill="#236467" />
        <Bar dataKey="Failed" fill="#2E4272" />
        <Bar dataKey="No Answer" fill="#AA8539" />
        <Bar dataKey="Busy" fill="#AA6D39" />
      </BarChart>
    </Col>
  </div>
)

export default Charts;