import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Carousel } from 'react-bootstrap';
import { Map, Marker } from 'react-amap';

const titles = ["极简系列", "乐活系列", "自我系列", "雅居系列", "好眠系列"]

const image1 = [
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/极简/1.jpg",
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/乐活/1.jpg",
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/自我/1.jpg",
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/雅居/1.jpg",
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/好眠/1.jpg"
]

const image2 = [
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/极简/2.jpg",
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/乐活/2.jpg",
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/自我/2.jpg",
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/雅居/2.jpg",
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/好眠/2.jpg"
]

const image3 = [
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/极简/3.jpg",
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/乐活/3.jpg",
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/自我/3.jpg",
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/雅居/3.jpg",
  "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/好眠/3.jpg"
]

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.onChange = this.onChange.bind(this);
    this.mapCenter = { longitude: 120.5392760000, latitude: 30.1238100000 };
    this.markerPosition = { longitude: 120.5392760000, latitude: 30.1238100000 };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this)) //监听窗口大小改变
  }

  componentWillUnmount() { //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  handleResize = e => {
    console.log('浏览器窗口大小改变事件', e.target.innerWidth)
  }

  render() {
    return (
      <Layout>
        <div className="carousel-pic">
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
                src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/carousel2.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/carousel3.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
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
          <iframe src="//player.bilibili.com/player.html?aid=71300213&cid=123540392&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
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
          <h1 className={"fz28 main-title"}>产品系列</h1>
          <div className={"cccc main-subtitle"}>PRODUCT SERIES</div>
          <div className="row-l hot">
            <div className="col-t padding-right20 c333 hot-left">
              <div className="hot-title row cfff">
                <h2>产品系列</h2>
              </div>
              {
                titles.map((item, index) => {
                  return (
                    <div className="hot-title1 row cursor-pointer" onClick={() => this.onChange(item, index)}>
                      <div className="col">
                        <h5>{item}</h5>
                        <div className="fz12">CLICK TO ENTER</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            {
              titles.map((item, index) => {
                if (index === this.state.index) {
                  return (
                    <div className="row-l" key={index}>
                      <div className="padding-right20">
                        <img className="hot-img1" alt={item} src={image1[index]}></img>
                      </div>
                      <div className="col-t">
                        <img className="hot-img2" alt={item} src={image2[index]}></img>
                        <img className="hot-img3" alt={item} src={image3[index]}></img>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
        <div className={'col address'}>
          <h1 className={"fz28"}>公司地址</h1>
          <div className={"cccc main-subtitle"}>THE COMPANY ADDRESS</div>
          <div style={{ marginBottom: 30 }} className="map">
            <Map
              center={this.mapCenter}
              zoom={16}
            >
              <Marker position={this.markerPosition} />
            </Map>
          </div>
          <div className={'fz18 col-t map-CH'}>
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
          <div className={'col-t map-EN'}>
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

        iframe{
          width:580px;
          height:450px;
        }

        .padding-left10{
          padding-left:10px;
        }

        .padding-right10{
          padding-right:10px;
        }

        .padding-right20{
          padding-right:20px;
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

        .hot-left{
          width:230px;
        }

        .hot-title{
          height:100px;
          width:210px;
          font-weight:bold;
          background: #999999;
        }

        .hot-title1{
          height:80px;
          width:210px;
          background: #F4F4F4;
        }

        .hot-title1:hover{
          background: #EB6866;
          color: #FFF;
        }

        .hot-img1{
          width:600px;
          height:500px;
        }

        .hot-img2,.hot-img3{
          height:240px;
          width:349px;
        }

        .hot-img2{
          margin-bottom:20px;
        }

        .hot-img-bottom{
          margin:0;
        }

        .map{
          width: 900px;
          height: 500px;
        }

        .address{
          background: rgba(0,0,0,0.05);
          padding:60px 0px 20px 0px;
          margin-top:20px;
        }

        @media screen and (max-width: 768px) {
          .carousel-pic{
            margin-top:60px;
          }
          .content{
            padding:10.5% 0;
          }
          .column{
            padding:0 8%;
            padding-bottom:5.5%;
            
          }
          .column>div{
            width:45%;
            height:120px;
            margin-bottom:5%;
          }
          iframe{
            width:70%;
            height:50%;
            margin-top:5%;
          }
          .main-column>div>img{
            width:100%;
          }
          .main-column>div>h2,.main-column>div>span{
            position:absolute;
            width:100%;
            text-align: center;
          }
          .main-column>div>h2{
            top:25%;
            font-size:1.3em;
          }
          .main-column>div>span{
            top:55%;
            font-size:0.5em;
            opacity:.85;
          }
          .hot{
            width:100%;
            align-items:felx-start;
            justify-content:center;
          }
          .hot-img1,.hot-img2,.hot-img3{
            width:20%
          }
          .hot-left{
            // padding:0 0 0 4.5%;
          }
          .map{
            width:22em;
            height:15em;
          }
          .map-CH>div{
            font-size:0.54em;
          }
          .map-EN>div{
            text-align: center;
            font-size:0.5em;
          }
      `}</style>
      </Layout >
    )
  }
  onChange = (item, index) => {
    this.setState({
      index: index,
      title: item
    })
  }
}


export default Home;