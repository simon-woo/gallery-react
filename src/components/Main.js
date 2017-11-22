require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//获取图片相关数据
var imageData = require('../data/imageData.json');

// 利用自执行函数 将图片名信息转成图片URL路径信息
//let yeomanImage = require('../images/yeoman.png');
imageData = (function getImageURL (imageDataArr) {
	for (var i=0, j = imageDataArr.length; i < j; i++) {
		var singleImageData = imageDataArr[i];

		singleImageData.imageURL = require('../images/'+singleImageData.fileName);

		imageDataArr[i] = singleImageData;
	}
	return imageDataArr;
})(imageData);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">
      	</section>
      	<nav className="controller-nav">
      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
