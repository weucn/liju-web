import React from 'react';
import Link from 'next/link'

const headContent = [{
  title: '软装云',
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
  title: 'IT赋能',
  herf: '/product',
  content: [{
    text: '多元产品',
    herf: '/product',
  }, {
    text: '专属软件',
    herf: '/product',
  }, {
    text: 'IT助力',
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
  }, {
    text: '全国加盟店',
    herf: '/alliance?title=3'
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

export default function NavigationBar() {
  return (
    <div className={'row bar'}>
      <nav className={'row nav'}>
        <div className="nav-img">
          <Link href={'/'}>
            <img className={'logo cursor-pointer'} src="https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/logo.png" alt="my image" />
          </Link>
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
        <div className={'nav-tail'}>
          加盟热线：0575-85103188
        </div>
      </nav>
      <style jsx>{`
      .bar{
        position:fixed;
        z-index:100;
        left:0;
        top:0;
        border:#fff;
        background: #fcfcfc;
        box-shadow: 0 2px 8px rgba(0,0,0,.4);
        margin:0;
      }

      

      .nav {
        justify-content: space-between;
        align-items:baseline;
        width:1200px;
        padding:0 60px;
        height:60px;
        margin:0
      }

      .logo{
        width:117px;
      }

      .mean li{
        width:100px;
        list-style-type:none;
        text-align:center ;
      }

      .mean >li{
        position: relative;
        height:60px;
        line-height: 60px;
      } 

      .mean >li:hover{
        background-color: #BE7052;
        color:#fff;
      }

      .mean >li > ul{
        position:absolute;
        padding:0;
        left:0;
        top:60px;
        display: none;
      }

      .mean >li:hover > ul{
        display: inline;
        color:#333;
      }

      .mean >li > ul >li{
        height:30px;
        line-height:30px;
        font-size:14px;
      }

      .mean >li > ul >li{
        opacity: 0.9;
        background-color: #FFFFFF;
        border: 1px solid rgba(151,151,151,0.10); 
        height:30px;
        line-height:30px;
      }

      .mean >li > ul >li:hover{
        background-color: #BE7052;
        border: 1px solid rgba(151,151,151,0.10); 
        opacity: 0.8;
        color:#fff;
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

