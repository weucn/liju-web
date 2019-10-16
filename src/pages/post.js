import React from 'react';
import Layout from '../components/Layout';
import Markdown from "react-markdown";
import industry from '../../static/md/industry';
import company from '../../static/md/company';

const Post = props => {
  const { type, title } = props.query
  const markdown = type === 'i' ? industry[title] : company[title]
  return (
    <Layout>
      <div className={'col'}>
        <div className={'markdown-layout'}>
          <Markdown className={'markdown'} source={markdown.content} />
        </div>
      </div>
      <style jsx global>{`
          .markdown-layout{
            max-width:1200px;
            padding:60px;
            padding-top:90px;
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
            width:1100px;
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