import React from 'react';
import Router from 'next/router'
import Layout from '../components/Layout';
import Markdown from "react-markdown";
import industry from '../../static/md/industry';
import company from '../../static/md/company';

const Post = props => {
  const { type, title } = props.query
  const markdown = type === 'i' ? industry[title] : company[title]
  const back = () => {
    Router.back();
  }
  return (
    <Layout>
      <div className={'col'}>
        <div className={'markdown-layout'}>
          <div className={'fz16 return-button cursor-pointer'} onClick={back}> &lt; 返回</div>
          <Markdown className={'markdown'} source={markdown.content} />
        </div>
      </div>
      <style jsx global>{`
          .markdown-layout{
            max-width:1200px;
            padding:60px;
            padding-top:90px;
          }

          .return-button:hover{
            color:#eb6866;
            text-decoration:underline;
          }

          .markdown {
            font-family: "Arial";
          }

          .markdown h1{
            text-align:center;
          }

          .markdown h2{
            text-align:center;
          }

          .markdown h3{
            text-align:left;
          }

          .markdown p{
            text-indent:35px;
            user-select: text;
          }

          .markdown img{
            margin-left:-35px;
            width:550px;
            margin-left:20%;
          }

          @media screen and (min-width:768px) and (max-width: 1200px){
            .markdown-layout{
              width:100%;
              padding:0px;
              padding-top:90px;
            }

            .markdown h2{
              font-size:20px;
            }

            .markdown h3{
              font-size:17px;
            }

            .markdown p{
              font-size:10px;
            }

            .markdown img{
              width:50%;
            }
          }

          @media screen and (max-width: 767px) {
            .markdown-layout{
              width:100%;
              padding:0px;
              padding-top:90px;
            }

            .markdown h2{
              font-size:20px;
            }

            .markdown h3{
              font-size:17px;
            }

            .markdown p{
              font-size:10px;
            }

            .markdown img{
              width:275px;
              margin:0;
            }
          }
       `}</style>
    </Layout>
  );
}

Post.getInitialProps = async function (context) {
  const query = context.query;
  return { query };
}


export default Post;