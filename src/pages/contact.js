import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Map, Marker } from 'react-amap';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.mapCenter = { longitude: 120.4875950000, latitude: 30.0851570000 };
    this.markerPosition = { longitude: 120.4875950000, latitude: 30.0851570000 };
  }
  render() {
    return (
      <Layout>
        <div className={'col contact'}>
          <div className={'layout'}>
            <img className={'w-100'} alt="banner" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/ljkj/home/banner.png" />
            <div className={'row-sa padding'}>
              <div className={'main'}>
                <div className={'main-padding1 fz28'}>渠道合作</div>
                <div className={'underline'}></div>
                <div className={'col-t vertical-lt fz20 c666'}>
                  <div className={'main-padding2'}>联系: 姚捷</div>
                  <div className={'main-padding'}>联系方式：135 2525 2525</div>
                  <div className={'main-padding'}>邮箱：1025639546@QQ.com</div>
                </div>
              </div>
              <div className={'main'}>
                <div className={'main-padding1 fz28'}>项目合作（技术支持）</div>
                <div className={'underline'}></div>
                <div className={'col-t vertical-lt fz20 c666'}>
                  <div className={'main-padding2'}>联系: 姚捷</div>
                  <div className={'main-padding'}>联系方式：135 2525 2525</div>
                  <div className={'main-padding'}>邮箱：1025639546@QQ.com</div>
                </div>
              </div>
              <div className={'main'}>
                <div className={'main-padding1 fz28'}>战略合作</div>
                <div className={'underline'}></div>
                <div className={'col-t vertical-lt fz20 c666'}>
                  <div className={'main-padding2'}>联系: 姚捷</div>
                  <div className={'main-padding'}>联系方式：135 2525 2525</div>
                  <div className={'main-padding'}>邮箱：1025639546@QQ.com</div>
                </div>
              </div>
            </div>
            <div className="map padding1">
              <Map
                center={this.mapCenter}
                zoom={16}
              >
                <Marker position={this.markerPosition} />
              </Map>
            </div>
          </div>
        </div>
        <style jsx>{`
        .contact{
          padding:0;
        }
        .layout{
          min-width:1200px;
        }
        .padding{
          padding:200px 240px;
        }
        .padding1{
          padding:0px 240px;
        }
        .underline{
          width:65px;
          border:2px solid #4C506F;
          border-radius: 4px;
        }
        .main{
          width:300px;
        }
        .main-padding{
          padding:2px 0;
        }
        .main-padding1{
          padding:0 0 20px 0;
        }
        .main-padding2{
          padding:20px 0 0 0;
        }
        .map{
          height: 700px;
        }
        
        `}
        </style>
      </Layout >
    )
  }
}

export default Contact;