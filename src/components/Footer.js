import React from 'react';
import Link from 'next/link'

const footContent = [{
  title: '女神家',
  herf: '/',
  content: [{
    text: '品牌简介',
    herf: '/goddesshouse?title=1'
  }, {
    text: '品牌文化',
    herf: '/goddesshouse?title=2'
  }, {
    text: '市场优势',
    herf: '/goddesshouse?title=3'
  }, {
    text: '发展历程',
    herf: '/goddesshouse?title=4'
  }, {
    text: '联系我们',
    herf: '/goddesshouse?title=5'
  }]
}, {
  title: '产品中心',
  herf: '/product',
  content: [{
    text: '极简系列',
    herf: '/product',
  }, {
    text: '乐活系列',
    herf: '/product',
  }, {
    text: '雅居系列',
    herf: '/product',
  }, {
    text: '自我系列',
    herf: '/product',
  }, {
    text: '好眠系列',
    herf: '/product',
  }]
}, {
  title: '加盟中心',
  herf: '/alliance?title=1',
  content: [{
    text: '加盟支持',
    herf: '/alliance?title=1'
  }, {
    text: '加盟申请',
    herf: '/alliance?title=2'
  }]
}, {
  title: '新闻中心',
  herf: '/news',
  content: [{
    text: '行业发展',
    herf: '/news?title=1'
  }, {
    text: '公司资讯',
    herf: '/news?title=2'
  }]
}, {
  title: '工具包',
  herf: '/toolkit?title=1',
  content: [{
    text: 'APP下载',
    herf: '/toolkit?title=1'
  }, {
    text: '小程序',
    herf: '/toolkit?title=2'
  }, {
    text: '微信公众号',
    herf: '/toolkit?title=3'
  }]
}]

const Footer = () => (
  <footer className={'row footer c333 vertical-lt no-select'}>
    {
      footContent.map((item, index) => {
        return (
          <div className={'col'} key={index}>
            <div className="title">{item.title}</div>
            {
              item.content.map((cItem, cIndex) => {
                return (
                  <Link href={cItem.herf} key={cIndex}>
                    <div className={'fz14 cursor-pointer'}>
                      {cItem.text}
                    </div>
                  </Link>
                )
              })
            }
          </div>
        )
      })
    }
    <img alt="二维码" src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/QR code.jpg" />
    <style jsx>{`
    .footer{
      justify-content: space-around;
      background-color: #F5F5F5;
      margin:0;
      margin-top:40px;
      padding-top:40px;
      padding-bottom:40px;
    }

    .title{
      font-weight:500;
      margin-bottom:16px;
    }

    @media screen and (min-width: 1200px) {
      .footer{
        padding-left:calc((100% - 1200px)/2);
        padding-right:calc((100% - 1200px)/2);
      }
    }

    @media screen and (max-width: 768px) {
      .title{
        font-size:0.8em;
      }
      .footer{
        padding-left:0;
        padding-right:0;
      }
      .footer>div{
        padding-left:2%;
        padding-right:2%;
      }
      .footer>img{
        width:10%;
        height:10%;
      }
      .cursor-pointer{
        font-size:0.5em;
        text-align:center;
      }
    }
    `}
    </style>
  </footer>
);

export default Footer;