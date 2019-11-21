import React, { Component } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import industry from '../../static/md/industry';
import company from '../../static/md/company';

const titles = ["行业发展", "公司资讯"]

const transTitle = (index) => {
  let title = ''
  switch (index) {
    case "1":
    default:
      title = "行业发展"
      break;
    case "2":
      title = "公司资讯"
      break;
  }
  return title
}

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '行业发展'
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
              首页-新闻中心-{title}
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
                        <Link href={`/news?title=${title}`} key={index}>
                          <div className={'col vertical-lt c333 content-title-back cursor-pointer'}>
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
                      <div className={item === title ? 'article col cursor-pointer' : 'article col article-nodisplay'} key={index}>
                        {
                          industry.map((nItem, nIndex) => {
                            return (
                              <div className={'article-list'} key={nIndex}>
                                <Link href={`/post?type=i&title=${nIndex}`}>
                                  <div className={'row-l vertical-lt'}>
                                    <div className={'article-date'}>
                                      {nItem.date.split('-').reverse().map((rItem, rIndex) => {
                                        return (
                                          <div key={rIndex} className={rIndex === 0 ? 'fz24' : ''}>
                                            {rItem}
                                          </div>
                                        )
                                      })}
                                    </div>
                                    <div className={'col vertical-lt'}>
                                      <h4 className={'fz18'}>
                                        {nItem.title}
                                      </h4>
                                      <div className={'fz12'}>
                                        {nItem.describe}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  }
                  else {
                    return (
                      <div className={item === title ? 'article col cursor-pointer' : 'article col article-nodisplay'} key={index}>
                        {
                          company.map((nItem, nIndex) => {
                            return (
                              <div className={'article-list'} key={nIndex}>
                                <Link href={`/post?type=c&title=${nIndex}`}>
                                  <div className={'row-l vertical-lt'}>
                                    <div className={'article-date'}>
                                      {nItem.date.split('-').reverse().map((rItem, rIndex) => {
                                        return (
                                          <div key={rIndex} className={rIndex === 0 ? 'fz24' : ''}>
                                            {rItem}
                                          </div>
                                        )
                                      })}
                                    </div>
                                    <div className={'col vertical-lt'}>
                                      <h4 className={'fz18'}>
                                        {nItem.title}
                                      </h4>
                                      <div className={'fz12'}>
                                        {nItem.describe}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            )
                          })
                        }
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

        .article-list{
          width:900px;
          height:140px;
          padding:26px 40px;
        }

        .article-date{
          width:88px;
          height:88px;
          background: #D8D8D8;
          padding-left:20px;
        }

        .article-date>span{
          width:88px;
        }

        h4{
          font-family: MicrosoftYaHei;
          font-weight:bold;
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

        // @media screen and (max-width: 767px) {
        //   .layout{
        //     min-width:100%;
        //     width:100%;
        //     padding:60px 0;
        //   }

        //   .row-l{
        //     display: flex;
        //     flex-direction: column ;
        //     justify-content: flex-start;
        //     align-items:conter;
        //   }

        //   .content-title{
        //     width:100%;
        //     display: flex;
        //     flex-direction: row;
        //     justify-content: flex-start;
        //     align-items:conter;
        //   }
        // }
        `}
        </style>
      </Layout>
    )
  }
}

export default News;