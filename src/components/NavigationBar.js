import React from 'react';
import Link from 'next/link'

const headContent = [{
  title: '首页',
  herf: '/',
  content: [{
    text: '销售软件',
    herf: '/sales'
  }, {
    text: 'MES',
    herf: '/sales'
  }, {
    text: 'OMS',
    herf: '/sales'
  }]
}, {
  title: '公司简介',
  herf: '/culture',
  // herf: '/product',
  content: [{
    text: '公司文化',
    herf: '/culture',
  }, {
    text: '公司成员',
    herf: '/culture',
  }, {
    text: '公司发展',
    herf: '/culture',
  }]
}, {
  title: '销售系统',
  herf: '/sales',
  // herf: '/alliance?title=1',
  content: [{
    text: 'APP软件',
    herf: '/sales'
  }, {
    text: '微信小程序',
    herf: '/sales'
  }, {
    text: '订单处理',
    herf: '/sales'
  }]
}, {
  title: 'MES',
  herf: '/mes',
  // herf: '/news',
  content: [{
    text: '工控机',
    herf: '/mes'
  }, {
    text: 'PDA',
    herf: '/mes'
  }, {
    text: '订单处理',
    herf: '/mes'
  }]
}, {
  title: 'OMS',
  herf: '/oms',
  // herf: '/toolkit?title=1',
  content: [{
    text: '订单处理',
    herf: '/oms'
  }]
}, {
  title: '联系我们',
  herf: '/contact',
  content: [{
    text: '渠道合作',
    herf: '/contact'
  }, {
    text: '项目合作',
    herf: '/contact'
  }, {
    text: '战略合作',
    herf: '/contact'
  }]
}]

export default function NavigationBar() {
  return (
    <div className={'row bar'}>
      <nav className={'row nav'}>
        <div className={'row title'}>
          <div>力聚科技</div>
        </div>
        <ul className={'row mean cursor-default'}>
          {
            headContent.map((item, index) => {
              return (
                <Link href={item.herf} key={index}>
                  <li className={'cursor-pointer'}>
                    {item.title}
                    <ul>
                      {
                        item.content.map((cItem, cIndex) => {
                          return (
                            <Link href={cItem.herf} key={cIndex}>
                              <li>
                                {cItem.text}
                              </li>
                            </Link>
                          )
                        })
                      }
                    </ul>
                  </li>
                </Link>
              )
            })
          }
        </ul>
        {/* <div className={'nav-tail'}>
          加盟热线：0575-85103188
        </div> */}
      </nav>
      <style jsx>{`
      .bar{
        position:fixed;
        z-index:100;
        left:0;
        top:0;
        border:#fff;
        background: #000;
        margin:0;
      }

      .nav {
        justify-content: space-between;
        width:1200px;
        height:60px;
        margin:0
      }

      .logo{
        width:50px;
      }

      .title{
        font-size:20px;
        background:#fff;
        padding:4px 12px;
        user-select: none;
      }

      .mean{
        margin:0;
        padding:0;
        width:700px;
        height:60px;
        line-height:60px;
        justify-content: space-between;
      }

      .mean >li{
        width:80px;
        height:60px;
        line-height:60px;
        list-style-type:none;
        text-align:center ;
        color:#fff;
        font-size:16px;
        margin-left: 20px;
        position: relative;
      } 

      .mean >li:hover{
        height:60px;
        line-height:60px;
        font-size:20px;
        border-bottom:2px solid #fff;
      }

      .mean >li > ul{
        position:absolute;
        padding:0;
        left:0;
        top:60px;
        display: none;
        list-style-type:none;
      }

      .mean >li:hover > ul{
        display: inline;
        color:#333;
      }

      .mean >li > ul >li{
        height:60px;
        line-height:60px;
        width:80px;
        font-size:15px;
      }

      .mean >li > ul >li{
        opacity: 0.9;
        background-color: #FFFFFF;
        border: 1px solid rgba(151,151,151,0.10); 
        height:60px;
        line-height:60px;
      }

      .mean >li > ul >li:hover{
        background-color: #fff;
        border: 1px solid rgba(151,151,151,0.10); 
        opacity: 0.8;
        color:#000;
      }

      @media screen and (min-width: 1200px) {
        .bar{
          padding:0 calc((100% - 1200px)/2);
        }
      }
      @media screen and (max-width: 1200px) {
        .bar{
          padding:0;
        }
      }
      

      @media screen and (max-width: 767px) {
        .bar{
          padding:0;
          width:100%;
        }
        .nav{
          padding:0;
          width:100%;
          align-items:baseline ;
          justify-content:space-around;
        }
        .nav-img{
          width:10%;
          text-align:center;
        }
        .nav-img>img{
          width:100%;
        }
        .mean{
          width:80%;
          padding:0;
          justify-content:flex-start;
        }
        .mean>li{
          width:20%;
          font-size:0.3em;
        }
        .nav-tail{
          opacity:0;
          width:0;
          height:0;
        }
      }
      `}</style>
    </div>
  )
}

