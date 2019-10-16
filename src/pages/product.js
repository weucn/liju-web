import React from 'react';
import Layout from '../components/Layout';

const series = [{
  url: 'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/priture1.png',
  title: '极简系列',
  content: '专为“年轻一族”打造打造系列家，是疲惫生活里的灵魂归属'
}, {
  url: 'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/priture2.png',
  title: '乐活系列',
  content: '专为“新婚一族”打造系列家，不只是吃饭睡觉的水泥盒子，更是相爱相知、身心舒展的地方。'
}, {
  url: 'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/priture3.png',
  title: '雅居系列',
  content: '家，是每一样都选自己喜欢的，用各种方式取悦自己和家人。'
}, {
  url: 'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/priture4.png',
  title: '自我系列',
  content: '专为“精英一族”打造系列家，不再是陈旧的条条框框，而是无惧于打破规则的实验室。'
}, {
  url: 'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/priture5.png',
  title: '好眠系列',
  content: '专为“夜猫一族”打造系列克重高，遮光度高，守护您的日日夜夜。'
}]

const product = () => (
  <Layout>
    <div className={'col'}>
      <div className={'layout'}>
        <div className={'title'}>
          首页-女神家-产品中心
        </div>
        {
          series.map((item, index) => {
            return (
              <div className={'row-r colum cfff'} key={index}>
                <img alt="系列图" src={item.url} />
                <div className={'col colum-describe'}>
                  <h1 className={'fz36'}>{item.title}</h1>
                  <div>{item.content}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <img alt="系列图" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/product/smallprogram.png" />
      <span className={'tip'}>更多产品请扫：小程序二维码</span>
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

        .colum{
          position:relative;
          margin-top:40px;
        }

        .colum-describe{
          position:absolute;
          top:0;
          right:0;
          width:320px;
          height:100%;
          padding:0 50px;
          background: rgba(0,0,0,0.50);
        }

        .tip {
          margin-top:20px;
          margin-bottom:30px;
        }

        `}
    </style>
  </Layout>
);

export default product;