//index.js
//获取应用实例
Page({
  data: {
    imgUrls: [
      {
        url: "../img/food1.jpeg",
        title:"法式羊排",
        point:'4.5',
        people:'125',
        pho:'../img/photo.png',
        phoname:'陌生人'

      },
      {
        title:"草莓蛋糕",
        url: "../img/food2.jpeg",
        point:'2.1',
        people:'330',
        pho:'../img/photo.png',
        phoname:'jack'
      },
      {
        title:"酱鸭",
        url: "../img/food3.jpeg",
        point:'5.0',
        people:'241',
        pho:'../img/photo.png',
        phoname:'哈哈哈'
      }
    ]
  },
  low: function(e) {
    console.log("您已经滑到底部")
  },
  onPullDownRefresh: function(e){
    console.log("onPullDownRefresh");
    wx.stopPullDownRefresh()
  }
  
})

