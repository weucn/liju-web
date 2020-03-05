import React, { Component } from 'react';
import Layout from '../components/Layout';


class Oms extends Component {
    render() {
        return (
            <Layout>
                <div className={'col culture'}>
                    <div className={'layout'}>
                        <img className={'w-100'} alt="banner" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/home/banner.png" />
                        <div className={'background col cfff'}>
                            <img alt="bg" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/oms/8.jpg" className={'background-img'} />
                            <div className={'content col'}>
                                <span className={'fz36'}>工控机    为工业现场而设计的计算机</span>
                                <span className={'fz24'}>一个完成生产进度的ERP系统，显示了每天需要发货的数量。</span>
                                <span className={'fz24'}>各个岗位的主管，会对其部门未完成窗帘进行追溯，保证每套窗帘都能在客户的交单日前发货。</span>
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

export default Oms;