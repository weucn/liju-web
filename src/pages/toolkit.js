import React, { Component } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const titles = ["APP下载", "小程序", "微信公众号"]

const transTitle = (index) => {
  let title = ''
  switch (index) {
    case "1":
    default:
      title = "APP下载"
      break;
    case "2":
      title = "小程序"
      break;
    case "3":
      title = "微信公众号"
      break;
  }
  return title
}

class Toolkit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'APP下载'
    }
  }

  componentDidMount() {
    const { asPath } = this.props.url
    const title = transTitle(asPath[asPath.length - 1])
    this.setState({
      title: title
    })
  }

  componentDidUpdate() {
    const { asPath } = this.props.url
    const title = transTitle(asPath[asPath.length - 1])
    if (title !== this.state.title) {
      this.setState({
        title: title
      })
    }
  }

  render() {
    const { title } = this.state;
    return (
      <Layout>
        <div className={'col'}>
          <div className={'layout'}>
            <div className={'title'}>
              首页-加盟中心-{title}
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
                        <Link href={`/toolkit?title=${title}`} key={index}>
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
                        <img alt='' src={'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/toolkit/app.png'} className={'img'} />
                      </div>
                    )
                  }
                  else if (index === 1) {
                    return (
                      <div className={item === title ? 'article col' : 'article col article-nodisplay'} key={index}>
                        <img alt='' src={'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/toolkit/publicaddress.png'} className={'img'} />
                      </div>
                    )
                  }
                  else {
                    return (
                      <div className={item === title ? 'article col' : 'article col article-nodisplay'} key={index}>
                        <img alt='' src={'https://ljkj-temp.oss-cn-hangzhou.aliyuncs.com/heartisan/toolkit/smallapp.png'} className={'img'} />
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
          padding:0;
          background: rgba(216,216,216,0.10);
        }

        .article-nodisplay{
          display:none;
        }

        .img{
          width:100%;
        }
        
        .tags{
          margin-top:30px;
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
      </Layout>
    )
  }
}

export default Toolkit;
