import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { MainLayout } from './MainLayout';
import { Row, Col, DatePicker } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { transformToJSON, getEnv } from './utils';
import moment from 'moment';

const marginChart = { top: 5, right: 3, left: 3, bottom: 5 }
const dateFormat = 'DD/MM/YYYY';
const today = moment().format('DD/MM/YYYY');

class Charts extends Component{

  filterByDay = (day) => {
    let obj = transformToJSON();
    let filtered = obj && obj.filter( function(elem) { return moment(elem.Data).format('DD/MM/YYYY') === day } )
    return filtered;
  }

  state = {
    dt: this.filterByDay(today)
  }
  
  render(){

    // Quebrando obj por ambiente
    const env1 = getEnv(this.state.dt, 1);
    const env2 = getEnv(this.state.dt, 2);
    const env3 = getEnv(this.state.dt, 3);
    const env4 = getEnv(this.state.dt, 4);

    // Quebrando os objs por tipos de rotas dos ambientes
    // const env1KMG = getKMG(env1);    
    // const env1AMD = getAMD(env1);

    // const env2KMG = getKMG(env2);    
    // const env2AMD = getAMD(env2);

    // const env3KMG = getKMG(env3);    
    // const env3AMD = getAMD(env3);

    // const env4KMG = getKMG(env4);    
    // const env4AMD = getAMD(env4);

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
              <Row>
                <Col span={12}>
                  <EnvChartsPercent envName={'Ambiente 1 - Percentual'} dataSource={env1} uId={'amb1Percent'} />
                </Col>

                <Col span={12}>
                  <EnvCharts envName={'Ambiente 1 - Quantitativo'} dataSource={env1} uId={'amb1'} />
                </Col>
              </Row>
              
              {/* <Row style={{paddingTop: 30}}>
                <EnvCharts envName={'KMG'} dataSource={env1KMG} colSpan={12} colWidth={400} colHeight={200} uId={'amb1-KMG'} />
                <EnvCharts envName={'AMD'} dataSource={env1AMD} colSpan={12} colWidth={400} colHeight={200} uId={'amb1-AMD'} />
              </Row> */}
            </div>

            <div style={{paddingBottom: 150}}>
              <Row>
                <Col span={12}>
                  <EnvChartsPercent envName={'Ambiente 2 - Percentual'} dataSource={env2} uId={'amb2Percent'} />
                </Col>

                <Col span={12}>
                  <EnvCharts envName={'Ambiente 2 - Quantitativo'} dataSource={env2} uId={'amb2'} />
                </Col>
              </Row>
              {/* <Row style={{paddingTop: 30}}>
                <EnvCharts envName={'KMG'} dataSource={env2KMG} colSpan={12} colWidth={400} colHeight={200} uId={'amb2-KMG'} />
                <EnvCharts envName={'AMD'} dataSource={env2AMD} colSpan={12} colWidth={400} colHeight={200} uId={'amb2-AMD'} />
              </Row> */}
            </div>

            <div style={{paddingBottom: 150}}>
              <Row>
                <Col span={12}>
                  <EnvChartsPercent envName={'Ambiente 3 - Percentual'} dataSource={env3} uId={'amb3Percent'} />
                </Col>

                <Col span={12}>
                  <EnvCharts envName={'Ambiente 3 - Quantitativo'} dataSource={env3} uId={'amb3'} />
                </Col>
              </Row>
              
              {/* <Row style={{paddingTop: 30}}>
                <EnvCharts envName={'KMG'} dataSource={env3KMG} colSpan={12} colWidth={400} colHeight={200} uId={'amb3-KMG'} />
                <EnvCharts envName={'AMD'} dataSource={env3AMD} colSpan={12} colWidth={400} colHeight={200} uId={'amb3-AMD'} />
              </Row> */}
            </div>

            <div style={{paddingBottom: 150}}>
              <Row>
                <Col span={12}>
                  <EnvChartsPercent envName={'Ambiente 4 - Percentual'} dataSource={env4} uId={'amb4Percent'} />
                </Col>

                <Col span={12}>
                  <EnvCharts envName={'Ambiente 4 - Quantitativo'} dataSource={env4} uId={'amb4'} />
                </Col>
              </Row>

              {/* <Row style={{paddingTop: 30}}>
                <EnvCharts envName={'KMG'} dataSource={env4KMG} colSpan={12} colWidth={400} colHeight={200} uId={'amb4-KMG'} />
                <EnvCharts envName={'AMD'} dataSource={env4AMD} colSpan={12} colWidth={400} colHeight={200} uId={'amb4-AMD'} />
              </Row> */}
            </div>

          </div>
        </div>
      } />
    )
  }
}

const CustomizedAxisTick = (props) => (
  <g transform={`translate(${props.x},${props.y})`}>
    <text x={0} y={0} dy={16} textAnchor='end' fill='#666' transform='rotate(-75)'>{props.payload.value}</text>
  </g>
);

const EnvCharts = (props) => (
  <div>
    <Col span={props.colSpan || 24} style={{marginBottom: 20}}>
      <div style={{ marginLeft: 60 }}><h2>{props.envName}</h2></div>
      <BarChart isAnimationActive={false} width={props.colWidth || 600} height={props.colHeight || 300} data={props.dataSource} margin={marginChart} syncId={props.uId} >
        <CartesianGrid strokeDasharray='3 3'  />
        <XAxis dataKey='Nome_Rota' style={{fontSize: 11}} tick={<CustomizedAxisTick />} height={155} width={10} interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='Answered' fill='#12b33d' />
        <Bar dataKey='Failed' fill='#c91616' />
        <Bar dataKey='noAnswered' fill='#1f48db' />
        <Bar dataKey='Busy' fill='#303030' />
      </BarChart>
    </Col>
  </div>
)

const EnvChartsPercent = (props) => (
  <div>
    <Col span={props.colSpan || 24}>
      <div style={{ marginLeft: 60 }}><h2>{props.envName}</h2></div>
      <BarChart isAnimationActive={false} width={props.colWidth || 600} height={props.colHeight || 300} data={props.dataSource} margin={marginChart} syncId={props.uId} >
        <CartesianGrid strokeDasharray='3 3'  />
        <XAxis dataKey='Nome_Rota' style={{fontSize: 11}} tick={<CustomizedAxisTick />} height={155} width={10} interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='answeredPercent' fill='#12b33d' />
        <Bar dataKey='failedPercent' fill='#c91616' />
        <Bar dataKey='noAnsweredPercent' fill='#1f48db' />
        <Bar dataKey='busyPercent' fill='#303030' />
      </BarChart>
    </Col>
  </div>
)

export default Charts;