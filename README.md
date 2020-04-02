# 口袋豆瓣



## 具体要求

1. 需要使用 `React` + `ES6` 来开发项目：
    - 列表页展示
    - 底部 Tab 切换类别
    - 顶部搜索框功能
    - 点击 item 展示详情页
    - 返回列表页等功能。

2. 拉取豆瓣上的数据：[豆瓣 API](https://developers.douban.com/wiki/?title=api_v2)（已下架，建议参考本文下面的文档）
3. 管理代码规范：[standard](https://standardjs.com/)

## 1. 具体功能介绍
### 1.1 列表展示
共有三种不同类型的列表（图示-电影-音乐），每一个列表需要展示至少一页的内容。


图书列表：

![](http://coding.imweb.io/img/p7/book-list.png)

电影列表：

![](http://coding.imweb.io/img/p7/movie-list.png)

音乐列表：

![](http://coding.imweb.io/img/p7/music-list.png)

### 1.2 底部导航
底部常驻导航栏，点击可切换不同类型，控制列表展示相应的内容。

![](http://coding.imweb.io/img/p7/navbar.png)

### 1.3 顶部搜索
顶部搜索框，输入内容点击搜索后，会在当前类别进行搜索出相关内容

![](http://coding.imweb.io/img/p7/search.png)

### 1.4 内容详情
点击列表中的每一项可以进入内容详情，点击左上角可返回

图书详情：

![](http://coding.imweb.io/img/p7/book-detail.png)

电影详情：

![](http://coding.imweb.io/img/p7/movie-detail.png)

音乐详情：

![](http://coding.imweb.io/img/p7/music-detail.png)

## 2. 通过JSONP 拉取豆瓣数据
使用豆瓣 API 接口，涉及到跨域问题，通过 `JSONP` 方式解决。
- [fetch-jsonp](https://github.com/camsong/fetch-jsonp)


### 豆瓣接口说明
豆瓣开发者网站有许多接口的说明文档，大家需要根据看豆瓣文档中接口的数据格式说明来进行开发页面。本应用涉及的接口文档如下：

### 图书相关
- 【拉取图书列表和搜索图书列表】

  http://git.imweb.io/imweb-teacher/douban-api/blob/master/book.md

### 音乐相关
- 【拉取音乐列表和搜索音乐列表】

  http://git.imweb.io/imweb-teacher/douban-api/blob/master/music.md

### 电影相关
由于拉取电影列表接口有点特殊，涉及接口需要有两条：
- 【拉取电影 top 250 列表】

  http://git.imweb.io/imweb-teacher/douban-api/blob/master/movie_top.md

- 【搜索电影】

  http://git.imweb.io/imweb-teacher/douban-api/blob/master/movie.md
