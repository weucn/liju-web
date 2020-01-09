import React, { Component } from 'react';
import Layout from '../components/Layout';

class product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      PCpic: [
        "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/pc/1.jpg",
        "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/pc/2.jpg",
        "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/pc/3.jpg",
        "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/pc/4.jpg",
      ],
      Phonepic: [
        "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/phone/1.png",
        "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/phone/2.png",
        "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/phone/3.png",
        "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/phone/4.png",
        "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/phone/5.png",
        "https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/phone/6.png",
      ]
    }
  }

  handleMouseEnterPCpic1 = () => {
    this.refs.PCpic.src = this.state.PCpic[0]
  }

  handleMouseEnterPCpic2 = () => {
    this.refs.PCpic.src = this.state.PCpic[1]
  }

  handleMouseEnterPCpic3 = () => {
    this.refs.PCpic.src = this.state.PCpic[2]
  }

  handleMouseEnterPCpic4 = () => {
    this.refs.PCpic.src = this.state.PCpic[3]
  }

  handleMouseEnterPhonepic1 = () => {
    this.refs.Phonepic.src = this.state.Phonepic[0]
  }

  handleMouseEnterPhonepic2 = () => {
    this.refs.Phonepic.src = this.state.Phonepic[1]
  }

  handleMouseEnterPhonepic3 = () => {
    this.refs.Phonepic.src = this.state.Phonepic[2]
  }

  handleMouseEnterPhonepic4 = () => {
    this.refs.Phonepic.src = this.state.Phonepic[3]
  }

  handleMouseEnterPhonepic5 = () => {
    this.refs.Phonepic.src = this.state.Phonepic[4]
  }

  handleMouseEnterPhonepic6 = () => {
    this.refs.Phonepic.src = this.state.Phonepic[5]
  }




  componentDidMount() {

  }

  render() {
    return (
      <Layout>
        <div className={'first-figure'}>
          <img
            className={'banner'}
            src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/banner.jpg"
            alt="First slide"
          />
        </div>
        <div className={'col'}>
          {/* 云系统 */}
          <div className={'body'}>
            <div className={'module'}>
              <p className={'module-title'}>多元软装数字化管理</p>
              <p className={'module-title-EN fz18'}>Multi - digital management of soft installation</p>
              <div>
                <div className={'module-text'}>
                  <div className={'fz18'} onMouseEnter={this.handleMouseEnterPCpic1.bind(this)}>
                    <p className={'module-ti'}>多端/前端</p>
                    <p className={'module-te fz16'}>多媒体、PC端、IPAD端、苹果、安卓</p>
                  </div>
                  <div className={'fz18'} onMouseEnter={this.handleMouseEnterPCpic3.bind(this)}>
                    <p className={'module-ti'}>数字化系统</p>
                    <p className={'module-te fz16'}>OMS订单系统、电商ERP、OPS支付系统、柔性链定制系统</p>
                  </div>
                </div>
                {/* 图片动画 */}
                <div style={{ height: 382 }}>
                  <img alt="PC" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/pc/0.png" />
                  <img className={'digitization-phone'} ref="PCpic" alt="PC-pic" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/pc/1.jpg" />
                </div>

                <div className={'module-text'}>
                  <div className={'fz18'} onMouseEnter={this.handleMouseEnterPCpic2.bind(this)}>
                    <p className={'module-ti'}>中台/管理</p>
                    <p className={'module-te fz16'}>角色管理、物流管理、售后管理</p>
                  </div>
                  <div className={'fz18'} onMouseEnter={this.handleMouseEnterPCpic4.bind(this)}>
                    <p className={'module-ti'}>云服务</p>
                    <p className={'module-te fz16'}>数据服务中心、阿里云</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
          {/* 专属app+小程序 */}
          <div className={'body'}>
            <div className={'module'}>
              <p className={'module-title'}>你的专属app门店+小程序</p>
              <p className={'module-title-EN fz18'}>digital system</p>
              <div>
                <div className={'module-text'}>
                  <div className={'fz18'} onMouseEnter={this.handleMouseEnterPhonepic1.bind(this)}>
                    <p className={'module-ti'}>产品管理</p>
                    <p className={'module-te fz16'}>快速选择产品，快捷分类</p>
                  </div>
                  <div className={'fz18'} onMouseEnter={this.handleMouseEnterPhonepic3.bind(this)}>
                    <p className={'module-ti'}>产品选购</p>
                    <p className={'module-te fz16'}>一键下单，选购你想要产品</p>
                  </div>
                  <div className={'fz18'} onMouseEnter={this.handleMouseEnterPhonepic5.bind(this)}>
                    <p className={'module-ti'}>购物车管理</p>
                    <p className={'module-te fz16'}>复杂的订单，复杂的样式，简单的表现</p>
                  </div>
                </div>
                {/* 图片动画 */}
                <div style={{ height: 600 }}>
                  <img alt="Phone" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/phone/0.png" />
                  <img className={'exclusive-phone'} ref="Phonepic" alt="PC-pic" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/phone/1.png" />
                </div>

                <div className={'module-text'}>
                  <div className={'fz18'} onMouseEnter={this.handleMouseEnterPhonepic2.bind(this)}>
                    <p className={'module-ti'}>软装记</p>
                    <p className={'module-te fz16'}>及时更新软装搭配，为你提供帮助</p>
                  </div>
                  <div className={'fz18'} onMouseEnter={this.handleMouseEnterPhonepic4.bind(this)}>
                    <p className={'module-ti'}>模型设计</p>
                    <p className={'module-te fz16'}>一键设计，为你提供更好款式</p>
                  </div>
                  <div className={'fz18'} onMouseEnter={this.handleMouseEnterPhonepic6.bind(this)}>
                    <p className={'module-ti'}>订单管理</p>
                    <p className={'module-te fz16'}>随时随地的展示产品信息情况</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 转型升级 */}
          <div className={'body'}>
            <div className={'upgrade'}>
              <p className={'module-title'}>IT助力软装转型升级</p>
              <p className={'module-title-EN fz18'}>自主研发千人千面的商家专属app、小程序</p>
              <div>
                <div className={'back-color1 cfff unit1'}>
                  <img alt="商家专属app" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/system-background/1.png" />
                </div>
                <div className={'back-color2 c666 unit2'}>
                  <img alt="客户专属小程序" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/system-background/2.png" />
                </div>
                <div className={'back-color1 cfff unit3'}>
                  <img alt="ERP系统" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/system-background/3.png" />
                </div>
                <div className={'back-color2 c666 unit4'}>
                  <img alt="客户管理" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/system-background/4.png" />
                </div>
                <div className={'back-color1 cfff unit5'}>
                  <img alt="模型设计" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/system-background/5.png" />
                </div>
                <div className={'back-color2 c666 unit6'}>
                  <img alt="无界新零售" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/system-background/6.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
        .back-color1 {
          background-color: #BE7052;
        }
        
        .back-color2 {
          background-color: #f1f1f1;
        }
        
        .first-figure{
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .banner{
          width:100%;
        }

        .body {
          width: 100%;
          margin:50px;
        }

        .body>.module {
          width: 1200px;
          margin: 0 auto;
          margin-top: 60px;
          text-align: center;
        }

        .module-title{
          font-size: 30px;
          margin-bottom: 10px;
        }

        .module-title-EN{
          margin-bottom: 40px;
        }

        .module>div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .module>div>div {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .module-text>div {
          border-radius: 10px;
          padding:0 16px 3px;
          text-align: left;
          width: 200px;
          height: 110px;
        }

        .module-text>div:hover{
          background-color:#b17052;
        }

        .module-text>div:hover>p{
          color:#fff;
        }

        .module-ti{
          margin-top: 10px;
          margin-bottom: 0;
          font-weight: bold;
        }

        .module-te {
          margin: 0;
          color: #666;
        }

        .digitization-phone {
          position: absolute;
          left: 85px;
          top: 23px;
        }

        .exclusive-phone {
          position: absolute;
          left: 24px;
          top: 23px;
        }

        .body>.upgrade {
          width: 1200px;
          margin: 0 auto;
          margin-top: 60px;
          text-align: center;
        }

        .upgrade>div {
          display: flex;
          justify-content: space-between;
          flex-flow: wrap;
        }

        .upgrade>div>div {
          width: 390px;
          height: 300px;
          margin-bottom: 10px;
          position: relative;
        }

        .unit1:hover {
          background-image:url("https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/system/1.jpg");
        }

        .unit2:hover {
          background-image:url("https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/system/2.jpg");
        }

        .unit3:hover {
          background-image:url("https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/system/3.jpg");
        }

        .unit4:hover {
          background-image:url("https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/system/4.jpg");
        }

        .unit5:hover {
          background-image:url("https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/system/5.jpg");
        }

        .unit6:hover {
          background-image:url("https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/it/system/6.jpg");
        }

        .upgrade>div>div:hover>img{
          display:none;
        }

        .upgrade>div>div:hover>p{
          display:none;
        }

        .upgrade>div>div>img{
          margin-top: 30px;
        }

        .upgrade-text {
          font-size: 18px !important;
          color: #000000 !important;
          margin: 10px auto;
        }

        .upgrade-ti{
          margin-top: 10px;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .upgrade-te {
          margin: 0;
        }
        `}
        </style>
      </Layout >
    )
  }
};

export default product;