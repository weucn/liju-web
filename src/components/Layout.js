import React, { Fragment } from 'react';
import Head from 'next/head'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const Layout = props => (
  <Fragment>
    <Head>
      <title>女神家</title>
      <link rel="shortcut icon" href="./static/logo.ico" />
      <meta name="author" content="浙江芯云家居科技"></meta>
      <meta name="keywords" content="成品窗帘，合作加盟，附近窗帘" />
      <meta name="description" content="线下成品窗帘新零售，定制窗帘下单，智能化工厂生成，为您提供牌窗帘订单查询等服务。"></meta>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </Head>
    <NavigationBar />
    <div className="layout-container no-select">
      {props.children}
    </div>
    <Footer />
    <style global jsx>{`
      body {
        margin: 0px;
      }

      @media screen and (min-width: 768px) {
        .layout-container{
          min-width:1200px;
          margin:0 auto;
        }
      }

      @media screen and (max-width: 768px) {
        .layout-container{
          width:100%;
        }
      }

      .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      
      .row-l {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
      }
      
      .row-r {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
      }
      
      .row-sb {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      
      .col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .col-t {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }
      
      .col-b {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
      }
      
      .vertical-lt {
        align-items: flex-start;
      }
      
      .vertical-rb {
        align-items: flex-end;
      }
      
      .hidden {
        display: none;
      }
      
      .tc {
        text-align: center;
      }
      
      .tl {
        text-align: left;
      }
      
      .tr {
        text-align: right;
      }
      
      .w100 {
        width: 100%;
      }
      
      .h100 {
        height: 100%;
      }
      
      .bg-c000 {
        background-color: #000;
      }
      
      .bg-cfff {
        background-color: #fff;
      }
      
      .c000 {
        color: #000;
      }
      
      .c333 {
        color: #333;
      }
      
      .c666 {
        color: #666;
      }
      
      .c999 {
        color: #999;
      }
      
      .cccc {
        color: #cccc;
      }
      
      .cfff {
        color: #fff;
      }
      
      .fz10 {
        font-size: 10px;
      }
      
      .fz11 {
        font-size: 11px;
      }
      
      .fz12 {
        font-size: 12px;
      }
      
      .fz13 {
        font-size: 13px;
      }
      
      .fz14 {
        font-size: 14px;
      }
      
      .fz15 {
        font-size: 15px;
      }
      
      .fz16 {
        font-size: 16px;
      }
      
      .fz17 {
        font-size: 17px;
      }
      
      .fz18 {
        font-size: 18px;
      }
      
      .fz20 {
        font-size: 20px;
      }
      
      .fz22 {
        font-size: 22px;
      }
      
      .fz24 {
        font-size: 24px;
      }
      
      .fz26 {
        font-size: 26px;
      }
      
      .fz28 {
        font-size: 28px;
      }
      
      .content-padding {
        padding: 10px;
      }
      
      .ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
      }
      
      .ellipsis-line {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      
      .ellipsis-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
      }
      
      .cursor-default {
        cursor: default;
      }
      
      .cursor-pointer {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer
      }
      
      .font-underline {
        text-decoration: underline
      }

      .no-select {
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
      }
    `}</style>
  </Fragment>
);

export default Layout;