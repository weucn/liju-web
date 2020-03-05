import React, { Component } from 'react';
import Layout from '../components/Layout';


class Mes extends Component {
    render() {
        return (
            <Layout>
                <div className={'col culture'}>
                    <div className={'layout'}>
                        <img className={'w-100'} alt="banner" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/home/banner.png" />
                        <div className={'background col cfff'}>
                            <img alt="bg" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/mes/5.jpg" className={'background-img'} />
                            <div className={'content col'}>
                                <span className={'fz36'}>工控机    为工业现场而设计的计算机</span>
                                <span className={'fz24'}>当然面料品控这块不能只靠供应商方面来解决，HeartisanHome内部也有一套品控流程：</span>
                                <span className={'fz24'}>从工厂采购回来的面料都会先进车间的仓储系统进行筛选比对，以此保证面料的品质。</span>
                            </div>
                        </div>
                        <div className={'background col cfff'}>
                            <img alt="bg" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/mes/4.jpg" className={'background-img'} />
                            <div className={'content col'}>
                                <span className={'fz36'}>PDA  让仓库信息化管理成为了现实</span>
                                <span className={'fz24'}>每片窗帘都有自己的一个专属芯片，犹如身份证。</span>
                                <span className={'fz24'}>进入车间环节后，都是靠芯片RFID卡，进行读取内容，</span>
                                <span className={'fz24'}>实现每片窗帘每个环节都可溯源。PDA扫描出库，窗帘的宽度尺寸，按照PDA上的用料清单进行出仓。</span>
                            </div>
                        </div>
                        <div className={'background col cfff'}>
                            <img alt="bg" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/mes/6.jpg" className={'background-img'} />
                            <div className={'content col'}>
                                <span className={'fz36'}>订单处理系统  让信息处理变得更加简单</span>
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

export default Mes;