import { request } from "../../request/index.js"

Page({
  data: {
    leftMenuList: [],
    rightContent: [],
    currentIndex: 0
  },
  Cates: [],
  onLoad: function(options){
    this.getCates();
  },
  getCates(){
    request({url: "https://api-hmugo-web.itheima.net/api/public/v1/categories"})
      .then(result => {
        this.Cates = result.data.message;
        let leftMenuList = this.Cates.map(v => v.cat_name);
        let rightContent = this.Cates[0].children;
        this.setData({
          leftMenuList,
          rightContent
        })
      })
  }
});