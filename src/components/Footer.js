import React from 'react';
import Link from 'next/link'

const footContent = [{
  title: '首页',
  herf: '/',
  content: [{
    text: '销售软件',
    herf: '/'
  }, {
    text: 'MES',
    herf: '/'
  }, {
    text: 'OMS',
    herf: '/'
  }]
}, {
  title: '公司简介',
  herf: '/',
  // herf: '/product',
  content: [{
    text: '公司文化',
    herf: '/',
  }, {
    text: '公司成员',
    herf: '/',
  }, {
    text: '公司发展',
    herf: '/',
  }]
}, {
  title: '销售系统',
  herf: '/',
  // herf: '/alliance?title=1',
  content: [{
    text: 'APP软件',
    herf: '/'
  }, {
    text: '微信小程序',
    herf: '/'
  }, {
    text: '订单处理软件',
    herf: '/'
  }]
}, {
  title: 'MES',
  herf: '/',
  // herf: '/news',
  content: [{
    text: '工控机',
    herf: '/'
  }, {
    text: 'PDA',
    herf: '/'
  }, {
    text: '订单处理',
    herf: '/'
  }]
}, {
  title: 'OMS',
  herf: '/',
  // herf: '/toolkit?title=1',
  content: [{
    text: '订单处理',
    herf: '/'
  }]
}, {
  title: '联系我们',
  herf: '/',
  content: [{
    text: '渠道合作',
    herf: '/'
  }, {
    text: '项目合作',
    herf: '/'
  }, {
    text: '战略合作',
    herf: '/'
  }]
}]

const Footer = () => (
  <footer className={'row-l footer cfff vertical-lt'}>
    {
      footContent.map((item, index) => {
        return (
          <div className={'col'} key={index}>
            <div className="title fz24">{item.title}</div>
            {
              item.content.map((cItem, cIndex) => {
                return (
                  <Link href={cItem.herf} key={cIndex}>
                    <div className={'fz16 cursor-pointer'}>
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
    <style jsx>{`
    .footer{
      height:300px;
      justify-content: space-around;
      background-color: #000;
      margin:0;
      padding:73px 240px;
    }

    .title{
      font-weight:500;
      margin-bottom:16px;
    }

    // @media screen and (min-width: 1200px) {
    //   .footer{
    //     padding-left:calc((100% - 1200px)/2);
    //     padding-right:calc((100% - 1200px)/2);
    //   }
    // }

    @media screen and (max-width:1200px) and (min-width:768px){
      .footer{
        padding-left:calc((100% - 1200px)/2);
        padding-right:calc((100% - 1200px)/2);
      }
    }

    @media screen and (max-width: 767px) {
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