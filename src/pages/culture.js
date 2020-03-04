import React, { Component } from 'react';
import Layout from '../components/Layout';

class Culture extends Component {
  render() {
    return (
      <Layout>
        <div className={'col culture'}>
          <div className={'layout'}>
            <img className={'w-100'} alt="banner" src="../../static/home/banner.png" />
            <div className={'background col cfff'}>
              <img alt="bg" src="../../static/culture/1.jpg" className={'background-img'} />
              <div className={'content col'}>
                <span className={'fz36'}>公司简介</span>
                <span className={'fz24'}>绍兴力聚信息科技有限公司成立于2016年10月11日，</span>
                <span className={'fz24'}>公司经营范围包括计算机软件开发；计算机信息技术开发；计算机系统集成；</span>
                <span className={'fz24'}>计算机网络工程技术开发；自动化控制系统集成的技术开发、技术服务、技术咨询、成果转让；</span>
                <span className={'fz24'}>网页设计；批发、零售：计算机软硬件。</span>
              </div>

            </div>
            <div className={'col-t staff'}>
              <h1>人员介绍</h1>
              <div className={'fz24 c333'}>Personnel translation</div>
              <div className={'row-sa staff-body c333'}>
                <div className={'clo-sa'}>
                  <div className={'fz32 padding'}>姚捷</div>
                  <div className={'underline'}></div>
                  <div className={'fz24 padding'}>浙江大学硕士</div>
                  <div className={'fz24 padding'}>柔性供应链系统总架构师</div>
                </div>
                <img alt="1" src="../../static/culture/yj.jpg" className={'culture-img'}/>
              </div>
              <div className={'row-sa staff-body c333'}>
                <img alt="2" src="../../static/culture/hhj.jpg" />
                <div className={'clo-sa'}>
                  <div className={'fz32 padding'}>黄汉军</div>
                  <div className={'underline'}></div>
                  <div className={'fz24 padding'}>北京大学</div>
                  <div className={'fz24 padding'}>生产执行与仓储系统开发负责人</div>
                </div>
              </div>
              <div className={'row-sa staff-body c333'}>
                <div className={'clo-sa'}>
                  <div className={'fz32 padding'}>刘涛</div>
                  <div className={'underline'}></div>
                  <div className={'fz24 padding'}>东南大学硕士</div>
                  <div className={'fz24 padding'}>销售与营销系统项目开发经理</div>
                </div>
                <img alt="3" src="../../static/culture/lt.jpg" />
              </div>
            </div>
            <div className={'background col cfff'}>
              <img alt="bg" src="../../static/culture/1.jpg" className={'background-img'} />
              <div className={'content col'}>
                <span className={'fz36'}>企业文化</span>
                <span className={'fz24'}>企业定位：融合物联网整体解决方案提供商</span>
                <span className={'fz24'}>企业愿景：用智慧改变世界，做万物互联新时代的领跑者</span>
                <span className={'fz24'}>企业价值观：正心  优术  取势  明道</span>
                <span className={'fz24'}>企业人才：不学习的人，实际上是在选择落后</span>
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
        .staff{
          padding:60px 0;
        }
        .staff-body{
          width:100%;
          padding:50px 240px;
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

export default Culture;