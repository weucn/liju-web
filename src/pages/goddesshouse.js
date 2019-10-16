import React, { Component } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Map, Marker } from 'react-amap';

const titles = ["品牌简介", "品牌文化", "市场优势", "发展历程", "联系我们"]

const transTitle = (index) => {
  let title = ''
  switch (index) {
    case "1":
    default:
      title = "品牌简介"
      break;
    case "2":
      title = "品牌文化"
      break;
    case "3":
      title = "市场优势"
      break;
    case "4":
      title = "发展历程"
      break;
    case "5":
      title = "联系我们"
      break;
  }
  return title
}

const article1 = [{
  imgurl: 'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/goddesshouse/content-img1.png',
  title: '芯理念',
  content: '女神家用芯做窗帘，为每一片窗帘植入专属芯片，从生产到安装全部流程溯源跟踪，解决市场价格不透明。服务体验不佳，无法个性化定制等问题，全方位提升消费者的窗帘购物体验。/n女神家尊重每个人的不同人生阶段都有不同的生活方式，推崇积极向上、充满阳光的生活态度，用心去感受，找到适己的生活方式'
}, {
  imgurl: 'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/goddesshouse/content-img2.png',
  title: '芯设计',
  content: '女神家设计师团队利用大数据分析系统，根据现代人各个阶段的喜好，结合流行或经典元素，设立五大产品线，共有1000+款不同的设计款式。将设计融入生活的细枝末节，予人“被世界温柔以待”的美好期许。'
}, {
  imgurl: 'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/goddesshouse/content-img3.png',
  title: '芯工艺',
  content: '女神家车间实现无纸化沟通生产流程，一键下单后信息同步至车间。每片窗帘植入专属芯片，流程和质量可追溯。通过流水线的信息化改造，一条流水线从下料到配货约88道工序，制造出不同尺寸、不同原料等个性化定制窗帘。'
}, {
  imgurl: 'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/goddesshouse/content-img4.png',
  title: '芯精神',
  content: '女神家团队始终秉承精益求精，严苛要求的态度，天工开物，毕纤毫而传神，只为每一片冠以女神家之芯的窗帘都生来有品质之傲。'
}]

const article3 = [{
  imgurl: 'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/goddesshouse/content-img5.png',
  title: '实力派    不奢侈',
  content: '女神家自有4000平米智能化工厂，有专有的窗帘设计团队，从下料到配货约88道工序，最大限度保证女神家出品的多为品质窗帘，无论是款式、价格都在市场有极强的竞争力。'
}, {
  imgurl: 'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/goddesshouse/content-img6.png',
  title: '硬科技    有品质',
  content: '女神家自有科技团队，自主研发仓储管理系统WMS、生产制造执行系统MES，以及定制化订单管理系统OMS，实现信息传递零时差、零误差。'
}, {
  imgurl: 'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/goddesshouse/content-img7.png',
  title: '强服务    重体验',
  content: '从购买到安装，一切以客户的便捷省心为宗旨，可上门设计选款，客户甚至“足不出户”就能有一次愉快的购物体验，购买后客户可实时查看商品生产信息、物流信息等。'
}, {
  imgurl: 'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/goddesshouse/content-img8.png',
  title: '大结局    大追求',
  content: '女神家致力于用芯改造窗帘行业，打造中国的知名窗帘家居品牌。'
}]

class Goddesshouse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '品牌简介'
    }
    this.mapCenter = { longitude: 120.5392760000, latitude: 30.1238100000 };
    this.markerPosition = { longitude: 120.5392760000, latitude: 30.1238100000 };
  }

  componentDidMount() {
    const { asPath } = this.props.url
    const title = transTitle(asPath[asPath.length - 1])
    this.updateTitle(title)
  }

  componentDidUpdate() {
    const { asPath } = this.props.url
    const title = transTitle(asPath[asPath.length - 1])
    if (title !== this.state.title) {
      this.updateTitle(title)
    }
  }

  render() {
    const { title } = this.state;
    return (
      <Layout>
        <div className={'col'}>
          <div className={'layout'}>
            <div className={'title'}>
              首页-女神家-{title}
            </div>
            <div className={'row-l vertical-lt'}>
              <div className={'content-title'}>
                {
                  titles.map((item, index) => {
                    if (item === title) {
                      return (
                        <div className={'col vertical-lt cfff content-title-back content-title-back-select'} key={index}>
                          <span className={'fz18'}>
                            0{index + 1}
                          </span>
                          <div className={"strip strip-background-select"}></div>
                          <div className={"strip strip-background-select"}></div>
                          <span>
                            {item}
                          </span>
                        </div>
                      )
                    }
                    else {
                      const title = index + 1;
                      return (
                        <Link href={`/goddesshouse?title=${title}`} key={index}>
                          <div className={'col vertical-lt c333 content-title-back'}>
                            <span className={'fz18'}>
                              0{title}
                            </span>
                            <div className={"strip strip-background"}></div>
                            <div className={"strip strip-background"}></div>
                            <span>
                              {item}
                            </span>
                          </div>
                        </Link>
                      )
                    }
                  })
                }
              </div>
              {
                titles.map((item, index) => {
                  if (index === 0) {
                    return (
                      <div className={item === title ? 'article col' : 'article col article-nodisplay'} key={index}>
                        {
                          article1.map((aItem, aIndex) => {
                            return (
                              <div key={aIndex}>
                                <img alt='' src={aItem.imgurl} key={aIndex} />
                                <h3 className={'fz24'}>{aItem.title}</h3>
                                {
                                  aItem.content.split('/n').map((cItem, cIndex) => <p key={cIndex}>{cItem}</p>)
                                }
                              </div>)
                          })
                        }
                      </div>
                    )
                  } else if (index === 1) {
                    return (
                      <div className={item === title ? 'article col' : 'article col article-nodisplay'} key={index}>
                        <img alt='' src={'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/goddesshouse/content-img9.png'} />
                        <h3 className={'fz24'}>女神家</h3>
                        <p>品牌识别：源自品牌英文名HeartisanHome的开头双H经纬交织而来，创意组合词“Heartisan”是以“heart+air+artisan”三词融合打通，为“梦想艺术品质”，让女神家成为梦想之家的实现者。</p>
                        <div className={'padding-portrait'}>
                          <p><b>品牌价值观:</b>无限改进  感动客户  自我实现 诚信  尊重  感恩</p>
                          <p><b>品牌使命:</b>让窗帘定制变得简单</p>
                          <p><b>品牌愿景:</b>成为窗帘行业全链路解决方案领跑者</p>
                        </div>
                      </div>
                    )
                  } else if (index === 2) {
                    return (
                      <div className={item === title ? 'article col' : 'article col article-nodisplay'} key={index}>
                        {
                          article3.map((aItem, aIndex) => {
                            return (
                              <div key={aIndex}>
                                <img alt='' src={aItem.imgurl} key={aIndex} />
                                <h3 className={'fz24'}>{aItem.title}</h3>
                                {
                                  aItem.content.split('/n').map((cItem, cIndex) => <p key={cIndex}>{cItem}</p>)
                                }
                              </div>)
                          })
                        }
                      </div>
                    )
                  } else if (index === 3) {
                    return (
                      <div className={item === title ? 'article col' : 'article col article-nodisplay'} key={index}>
                        <img alt='' src={'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/goddesshouse/content-img10.png'} />
                        <ul className={'tags'}>
                          <li>2009年，入驻淘宝店</li>
                          <li>2011年，公司成立，同年旗下电商连续5年创造淘宝单店电销售第一</li>
                          <li>2014年，将柔性流水线的方式应用到窗帘定制行业。正式组建技术团队，研究窗帘布艺软装类到一体化系统解决方案，打造窗帘布艺信息化柔性生产线</li>
                          <li>2017年，国内服务用户累计达到670000家庭</li>
                          <li>2018年，单店粉丝达330000+。全链路信息化系统打通并发布（测量-设计-销售-生产-仓储-采购-发货-安装）。第一次线下招商会启动</li>
                          <li>2019年，入选CCTV信用中国民族品牌</li>
                        </ul>
                      </div>
                    )
                  } else if (index === 4) {
                    return (
                      <div className={item === title ? 'article vertical-lt col' : 'article col vertical-lt article-nodisplay'} key={index}>
                        <div style={{ width: 900, height: 500, marginBottom: 30 }}>
                          <Map
                            center={this.mapCenter}
                            zoom={16}
                          >
                            <Marker position={this.markerPosition} />
                          </Map>
                        </div>
                        <h3 className={'fz24'}>联系我们</h3>
                        <p>
                          加盟热线：0575-85103188
                        </p>
                        <p>
                          生产中心地址：浙江省绍兴市齐贤镇中意企业北门7号楼
                        </p>
                        <p>
                          销售研发中心：浙江省绍兴市柯桥区黄社溇路银座国际商务中心
                        </p>
                      </div>
                    )
                  }

                })
              }
            </div>
          </div>
        </div>
        <style jsx>{`
        .layout{
          min-width:1200px;
          padding:60px;
        }
        
        .title{
          margin-top:30px;
          margin-bottom:30px;
          font-family: MicrosoftYaHei-Bold;
          font-size: 24px;
          color: #333333;
        }

        .content-title{
          padding:0;
        }

        .content-title-back{
          width:140px;
          height:100px;
          margin-bottom:40px;
          padding:20px;
          background: rgba(216,216,216,0.10);
        }

        .content-title-back-select{
          background-image: linear-gradient(270deg, #EB6866 0%, #FF8764 100%);
        }

        .strip{
          width:66px;
          height:2px;
          margin-bottom:2px;
        }

        .strip-background{
          background-color:red;
        }

        .strip-background-select{
          background-color:#fff;
        }

        .article{
          margin:0 20px;
          width:900px;
          background: rgba(216,216,216,0.10);
        }

        .article-nodisplay{
          display:none;
        }

        .article p{
          width:860px;
          margin-left:40px;
          margin-bottom:8px;
        }

        .article h3{
          margin-top:25px;
          margin-bottom:25px;
          margin-left:40px;
        }

        .article img{
          width:900px;
        }

        .padding-portrait{
          padding:40px 0;
        }

        .tags{
          padding-left:20px;
        }

        .tags li{
          list-style-type:none
        }

        .tags li::before{
          content: "";
          display: inline-block;
          width: 10px; height: 10px;
          border-radius: 8px;
          vertical-align: center;
          margin-right: .2em;
          border: 1px solid #ccc;
          background-color: #ccc;
        }


        `}
        </style>
      </Layout >
    )
  }


  updateTitle = (title) => {
    this.setState({
      title: title
    })
  }
}

export default Goddesshouse;