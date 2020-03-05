import React, { Component } from 'react';
import Layout from '../components/Layout';


class Sales extends Component {
  render() {
    return (
      <Layout>
        <div className={'col culture'}>
          <div className={'layout'}>
            <img className={'w-100'} alt="banner" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/home/banner.png" />
            <div className={'background col cfff'}>
              <img alt="bg" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/sales/3.jpg" className={'background-img'} />
              <div className={'content col'}>
                <span className={'fz36'}>B端用户APP用户</span>
                <span className={'fz24'}>商家App是集研发、生产、销售为一体的软装行业赋能平台，以信息化智能体系连接销售、设计、</span>
                <span className={'fz24'}>制造为软装行业植入互联网基因，打造行业线上线下信息化快销终端，实现行业的快速规模化定制，</span>
                <span className={'fz24'}>以小终端大后方的方式，让软装定制变得简单</span>
              </div>
            </div>
            <div className={'background col cfff'}>
              <img alt="bg" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/sales/2.jpg" className={'background-img'} />
              <div className={'content col'}>
                <span className={'fz36'}>C端用户小程序服务</span>
                <span className={'fz24'}>消费者专属小程序是集研发、销售为一体的软装行业赋能平台，以信息化智能体系连接销售、设计为软装行业</span>
                <span className={'fz24'}>植入互联网基因，打造行业线上线下信息化快销终端，实现行业的快速规模化定制，</span>
                <span className={'fz24'}>以小终端大后方的方式，让软装定制变得简单</span>
              </div>
            </div>
            <div className={'background col cfff'}>
              <img alt="bg" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/sales/7.jpg" className={'background-img'} />
              <div className={'content col'}>
                <span className={'fz36'}>B端用户订单处理网页软件</span>
                <span className={'fz24'}>一个完成生产进度的ERP系统，显示了每天需要发货的数量。各个岗位的主管，</span>
                <span className={'fz24'}>会对其部门未完成窗帘进行追溯，保证每套窗帘都能在客户的交单日前发货。</span>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
        .culture{
          padding:0;
        }
        .layout{
          min-width:1200px;
        }
        .background{
          padding:0;
        }
        .background-img{
          width:100%;
          z-index:-1;
          position:absolute;
          top:0px;
          background:#000;
        }
        .content{
          padding:16% 0;
        }
        .underline{
          width:33px;
          border:2px solid #4C506F;
          border-radius: 4px;
        }
        .padding{
          padding:10px 0;
        }
        
        `}
        </style>
      </Layout >
    )
  }
}

export default Sales;