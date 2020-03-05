import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Carousel } from 'react-bootstrap';

class Home extends Component {

  render() {
    return (
      <Layout>
        <div className="carousel-pic">
          <Carousel controls={false} interval={4000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/home/banner.png"
                alt="First slide"
              />
            </Carousel.Item>
            {/* <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/carousel2.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/carousel3.jpg"
                alt="Third slide"
              />
            </Carousel.Item> */}
          </Carousel>
        </div>
        <div className={'col content cfff'}>
          <img alt="sales" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/home/sales.png" className={'background-img'} />
          <div className={'col-t sales-title w100'}>
            <h1>销售系统软件</h1>
            <div className={'fz24'}>Sales system software</div>
            <div className={'row-sa w100 sale-pic'}>
              <div className={'col-t vertical-lt'}>
                <img alt="1" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/home/sale1.png" />
                <div className={'fz36'}>B端用户APP服务</div>
                <div className={'fz24'}>软装专属APP</div>
                <a className={'fz24 cfff'} href="./sales">查看更多 ></a>
              </div>
              <div className={'col-t vertical-lt'}>
                <img alt="2" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/home/sale2.png" />
                <div className={'fz36'}>C端用户小程序服务</div>
                <div className={'fz24'}>软装专属APP关联小程序</div>
                <a className={'fz24 cfff'} href="./sales">查看更多 ></a>
              </div>
              <div className={'col-t vertical-lt'}>
                <img alt="3" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/home/sale3.png" />
                <div className={'fz36'}>B端用户网页服务</div>
                <div className={'fz24'}>软装专属后台管理软件</div>
                <a className={'fz24 cfff'} href="./sales">查看更多 ></a>
              </div>
            </div>
          </div>
        </div>
        <div className={"col main c333"}>
          <h1 className={"fz36 main-title c333"}>MES（制造企业生产过程执行管理系统）</h1>
          <div className={"c666 main-subtitle fz24"}>Manufacturing process execution management system</div>
          <div className={"main-column row-sa w100"}>
            <div className={'col-sa fz28 c333'}>
              工控机
              <img className={'PC'} alt="Industrial-PC" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/home/Industrial-PC.png" />
              <div className={'col-t'}>
                <div className={'fz20 c333'}>为工业现场二设计的计算机</div>
                <a className={'fz16 c999 content-padding'} href="./mes">查看更多 ></a>
              </div>
            </div>
            <div className={'col-sa PDA fz28 cfff'}>
              PDA
            <img className={'PDA-img'} alt="PDA" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/home/PDA.png" />
              <div className={'col-t'}>
                <div className={'fz20 cfff'}>让仓库信息化管理成为了现实</div>
                <a className={'fz16 c999 content-padding'} href="./mes">查看更多 ></a>
              </div>
            </div>
            <div className={'col-sa fz28 c333'}>
              订单处理软件
              <img className={'order'} alt="order" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/home/order.png" />
              <div className={'col-t'}>
                <div className={'fz20 c333'}>让信息处理变得更加简单</div>
                <a className={'fz16 c999 content-padding'} href="./mes">查看更多 ></a>
              </div>
            </div>
          </div>
        </div>
        <div className={'col OMS'}>
          <img alt="OMS" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/home/6.jpg" className={'background-img'} />
          <h1 className={"fz36 main-title cfff"}>OMS  使仓储、运输、订单成为一个有机整体，满足物流系统信息化的需求</h1>
          <div className={"cfff main-subtitle fz24"}>订单处理系统  让信息处理变得更加简单</div>
          <a className={'fz24 cfff content-padding'} href="./oms">查看更多 ></a>
        </div>
        <style jsx>{`
        .margin-bottom{
          margin-bottom:30px;
        }

        .head{
          position:relative;
        }

        .content{
          padding:0;
        }

        .background-img{
          width:100%;
          z-index:-1;
          position:absolute;
          top:0px;
          background:#000;
        }
        
        .sales-title{
          padding:100px 100px;
        }

        .sale-pic{
          margin-top:47px;
        }

        .sale-pic>div{
      	  width: 320px;
        }
        img{
          width:100%;
          height:100%;
        }

        .PC{
          width:50%;
          height:30%;
        }
      
        .PDA-img{
          width:40%;
          height:30%;
        }
        .order{
          width:40%;
          height:30%;
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

        .main-title{
          margin-top:60px;
        }

        .main-subtitle{
          margin-bottom:40px;
        }

        .main-column{
          max-width:1200px;
        }

        .PDA{
          background: #4C506F;
        }

        .main-column>div{
          width:480px;
          height:607px;
        }

        .map{
          width: 900px;
          height: 500px;
        }

        .OMS{
          height: 800px;
          background: rgba(0,0,0,0.05);
          padding:0px;
        }

        @media screen and (max-width: 767px) {
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
            // width:20%
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