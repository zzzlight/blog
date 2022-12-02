<template>
  <div
    class="main-container page-about d-flex flex-column ai-center pt-9 content"
  >
    <div class="page p-5">
      <div class="text-green fs-xxxxl">About</div>
      <div class="text-grey-2 fs-sm mt-5">Published on 2022</div>
      <div class="mt-5 mb-5"></div>
      <div class="py-4">
        <span class="fs-xxl text-green">#</span>
        &nbsp;
        <span class="fs-xxl text-grey-1">关于自己</span>
      </div>
   
      <div class="py-4">
        <span class="fs-xxl text-green">#</span>
        &nbsp;
        <span class="fs-xxl text-grey-1">关于博客</span>
      </div>
      <div class="pl-5 text-green-1">
        <p>
          •
          该博客用Vue实现，express提供数据接口，mongoDB储存数据，部署在腾讯云的linux服务器上，搭建博客的初衷是记录一下日常学习,以及技术练习。
        </p>
        <p>• 如有错误、bug的地方烦请指正</p>
      </div>
      <div class="py-4 mt-6">
        <span class="fs-xxl text-green">#</span>
        &nbsp;
        <span class="fs-xxl text-grey-1">Side Project (Coding)</span>
      </div>
      <div class="pl-5 text-green-1 mb-9">
        <p>
          <a
            href="https://github.com/zzzlight/blog"
            target="_blank"
            class="text-green-1 bd-bottom-about"
          >
            • Blog(本博客)
          </a>
          -- 基于NodeJs、Vue、MongoDB实现的博客系统，因为源代码上含有一些安全信息，目前为private库状态。
        </p>
       
     
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
.content {
  line-height: 1.8 !important;
}

.bd-bottom-about {
  border-bottom: 1px solid grey;
  &.bd-bottom-about:hover {
    color: map-get($colors, 'red');
  }
}
</style>
