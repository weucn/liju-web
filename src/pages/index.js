import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Carousel } from 'react-bootstrap';
import { Map, Marker } from 'react-amap';


class Home extends Component {
  constructor() {
    super();
    this.mapCenter = { longitude: 120.5392760000, latitude: 30.1238100000 };
    this.markerPosition = { longitude: 120.5392760000, latitude: 30.1238100000 };
  }

  render() {
    return (
      <Layout>
        <Carousel controls={false} interval={4000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/carousel1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/carousel1.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className={'col content cfff'}>
          <div className={'row w-100 row column fz24'}>
            <div>
              <img alt="芯理念" src='https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/column/column1.png' />
              <span>芯理念</span>
            </div>
            <div>
              <img alt="芯设计" src='https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/column/column2.png' />
              <span>芯设计</span>
            </div>
            <div>
              <img alt="芯工艺" src='https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/column/column3.png' />
              <span>芯工艺</span>
            </div>
            <div>
              <img alt="芯精神" src='https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/column/column4.png' />
              <span>芯精神</span>
            </div>
          </div>
          <iframe src="//player.bilibili.com/player.html?aid=71300213&cid=123540392&page=1" width="580" height="450" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
        </div>
        <div className={"col main c333"}>
          <h1 className={"fz28 main-title"}>女神家·有芯的家</h1>
          <div className={"cccc main-subtitle"}>Heartisan HOME WITH CODE</div>
          <div className={"main-column cfff"}>
            <div>
              <h2>芯理念·用芯做窗帘</h2>
              <span>为每一片窗帘植入专属芯片，从生产到安装全流程溯源跟踪</span>
              <img alt="芯理念" src='https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/maincolumn/maincolumn1.png' />
            </div>
            <div>
              <h2>芯设计·悦己先悦居</h2>
              <span>利用大数据分析结合不同人群喜好，设立五大产品线10000+款设计款式</span>
              <img alt="芯设计" src='https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/maincolumn/maincolumn2.png' />
            </div>
            <div>
              <h2>芯工艺·可溯源窗帘</h2>
              <span>从下料到配货共计88道工序，每片窗帘的工序流程和质量都可追溯</span>
              <img alt="芯工艺" src='https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/maincolumn/maincolumn3.png' />
            </div>
            <div>
              <h2>芯精神·为品质而生</h2>
              <span>天工开物，毕纤毫而传神，每片冠以女神家之芯的窗帘生来有品质之傲</span>
              <img alt="芯精神" src='https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/maincolumn/maincolumn4.png' />
            </div>
          </div>
          <h1 className={"fz28 main-title"}>热销产品</h1>
          <div className={"cccc main-subtitle"}>PRODUCT SELL LIKE HOT CAKES</div>
          <div className={"row hot"}>
            <div className={"col-t padding-right10"}>
              <img alt="极简系列" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/hot/极简系列.png" />
              <img alt="雅居风格" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/hot/雅居风格.png" />
            </div>
            <div className={"col-t padding-left10"}>
              <img alt="乐活系列" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/hot/乐活系列.png" />
              <img alt="自活系列" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/hot/自活系列.png" />
            </div>
          </div>
          <div>
            <img alt="好眠系列" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/hot/好眠系列.png" />
          </div>
        </div>
        <div className={'col address'}>
          <h1 className={"fz28"}>公司地址</h1>
          <div className={"cccc main-subtitle"}>THE COMPANY ADDRESS</div>
          <div style={{ width: 900, height: 500, marginBottom: 30 }}>
            <Map
              center={this.mapCenter}
              zoom={16}
            >
              <Marker position={this.markerPosition} />
            </Map>
          </div>
          <div className={'fz24 col-t'}>
            <div>
              女神家
            </div>
            <div>
              加盟热线：0575-85103188
            </div>
            <div>
              生产中心地址：浙江省绍兴市齐贤镇中意企业北门7号
            </div>
            <div>
              销售研发中心：浙江省绍兴市柯桥区黄社溇路银座国际商务中心
            </div>
          </div>
          <div className={'col-t'}>
            <div>
              Heartisan
            </div>
            <div>
              Join hotline: 0575-85103188
            </div>
            <div>
              Production center address: zhejiang shaoxing qixian town zhongyi enterprise north gate 7
            </div>
            <div>
              Sales r & d center: yinza international business center, huangshelou road, keqiao district, shaoxing city, zhejiang province
            </div>
          </div>
        </div>
        <style jsx>{`
        .margin-bottom{
          margin-bottom:30px;
        }

        .head{
          position:relative;
        }

        .content{
          padding:54px 0;
          background: rgba(0,0,0,0.05);
        }

        .column{
          max-width:1040px;
          padding-bottom:45px;
          justify-content: space-between;
        }

        .column>div{
          width:230px;
          line-height:180px;
          height:180px;
          position:relative;
        }

        .column img{
          width:100%;
          height:100%;
          object-fit: cover;
        }

        .column>div>span{
          position:absolute;
          width:100%;
          top:0;
          left:0;
          text-align:center;
        }

        .padding-left10{
          padding-left:10px;
        }

        .padding-right10{
          padding-right:10px;
        }
        .w50{
          width:50%;
        }

        .main{

        }

        .main-title{
          margin-top:60px;
        }

        .main-subtitle{
          margin-bottom:40px;
        }

        .main-column{
          max-width:1200px;
        }

        .main-column>div{
          position:relative;
          margin-top:38px;
        }

        .main-column>div:first-child{
          margin-top:0px;
        }

        .main-column>div>h2,.main-column>div>span{
          position:absolute;
          width:100%;
          text-align: center;
        }

        .main-column>div>h2{
          top:200px;
          font-size:48px;
        }

        .main-column>div>span{
          top:270px;
          font-size:18px;
        }

        .hot img{
          margin-bottom:20px;
        }

        .address{
          background: rgba(0,0,0,0.05);
          padding:60px 0;
        }
      `}</style>
      </Layout >
    )
  }
}


export default Home;