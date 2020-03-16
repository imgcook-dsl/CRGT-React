'use strict';

import React, { Component } from 'react';
import './index.scss';

class Page_0 extends Component {
  state = {
    data: [
      {
        title: '小户型卫浴怎样才能装得高大上？',
        coverImage: 'https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png',
        readCount: 200,
        user: { userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png', userName: '时尚家居' },
        url: 'https://www.imgcook.com'
      },
      {
        title: '拥有超多功能的40平米简约小公寓了解一下',
        coverImage: 'https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png',
        readCount: 500,
        user: {
          userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png',
          userName: '花花设计工作'
        },
        url: 'https://www.imgcook.com/docs'
      }
    ]
  };
  constructor(props, context) {
    super();
    console.log('super props');
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}
  isReadCountShow(readCount) {
    return readCount > 300;
  }
  render() {
    return (
      <div className="box">
        {this.state.data.map((item, index) => {
          return (
            <div
              key={index}
              onClick={e => {
                window.open(item.url, '_blank');
              }}
              data-url={item.url}
              key={item.index}
            >
              <div className="bd">
                <img className="layer" src={'https://img.alicdn.com/tfs/TB1bLoWoYH1gK0jSZFwXXc7aXXa-684-684.png'} />
                <img className="bg" src={item.coverImage} />
                <div className="wrap">
                  <img
                    className="riverdinwei"
                    src={'https://img.alicdn.com/tfs/TB1mtZRoVT7gK0jSZFpXXaTkpXa-28-36.png'}
                  />
                  <span className="distance">距离500m</span>
                </div>
              </div>
              <div className="main">
                <span className="title">{item.title}</span>
              </div>
              <div className="ft">
                <div className="block">
                  <img className="xianjin" src={'https://img.alicdn.com/tfs/TB1OvsYoW61gK0jSZFlXXXDKFXa-60-60.png'} />
                  <span className="fashionHome">{item.user.userName}</span>
                </div>
                {this.isReadCountShow(item.readCount) && (
                  <div className="group">
                    <img
                      className="favorite"
                      src={'https://img.alicdn.com/tfs/TB1arwYo7T2gK0jSZFkXXcIQFXa-46-44.png'}
                    />
                    <span className="num">{item.readCount}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Page_0;
