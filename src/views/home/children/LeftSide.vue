<template>
  <div class="left-side-box">
    <SubNav ref="subnav" :nav-lists="navLists" class="sub-nav-component" />
    <ArticleItem
      v-for="(item,index) in articleLists"
      :key="index"
      :list-img="item.list_img_src"
      :aritcle-title="item.title"
      :header-img="item.headerImg"
      :author="item.author"
      :created-time="parseTimec(item.created_time)"
      :view="item.view"
      :like-number="item.like_number"
      :article-id="item.id"
      class="article-item-component"
    />
  </div>
</template>

<script>
import SubNav from '@/components/project/nav/SubNav'
import ArticleItem from './ArticleItem'
import { getArticleLists } from '@/network/data'
import { parseTime } from '@/utils/index'

export default {
  name: 'LeftSide',
  components: {
    SubNav,
    ArticleItem
  },
  data() {
    return {
      navLists: ['推荐', '最热', '应用推荐', '生活方式', 'Power+'],
      articleLists: [],
      subnavTopDistance: 0,
      imgSrcArr: [],
      timer: null
    }
  },
  computed: {
    articleClassifyId() {
      return this.$store.state.articleClassifyId
    }
  },
  watch: {
    articleClassifyId() {
      this.reqData()
      if (this.subnavTopDistance <= 60) {
        const screenWidth = document.documentElement.clientWidth || document.body.clientWidth
        if (screenWidth <= 960) {
          document.documentElement.scrollTop = -document.body.getBoundingClientRect().top + this.subnavTopDistance - 60
          document.body.scrollTop = -document.body.getBoundingClientRect().top + this.subnavTopDistance - 60
        } else {
          document.documentElement.scrollTop = -document.body.getBoundingClientRect().top + this.subnavTopDistance + 1
          document.body.scrollTop = -document.body.getBoundingClientRect().top + this.subnavTopDistance + 1
        }
      }
    }
  },
  created() {
    this.reqData()
  },
  mounted() {
    // 监听（绑定）滚轮滚动事件
    window.addEventListener('scroll', this.handleScroll, false)
    this.getLazyLoadingEl()
    this.lazyLoading()
  },
  updated() {
    this.getLazyLoadingEl()
    this.lazyLoading()
  },
  destroyed() {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    window.removeEventListener('scroll', this.handleScroll) //  离开页面清除（移除）滚轮滚动事件
    this.$store.state.changeNav = false// 离开当前页面的时候将nav置为默认状态
  },
  methods: {
    parseTimec(time) {
      return parseTime(time).toString().slice(0, 10)
    },
    reqData() {
      // 根据分类请求数据
      this.articleLists = getArticleLists(this.articleClassifyId)
    },
    handleScroll() {
      // 获取元素到顶部的距离
      this.subnavTopDistance = this.$refs.subnav.$el.getBoundingClientRect().top
      const changeNav = this.$store.state.changeNav
      if (this.subnavTopDistance <= 0) {
        if (!changeNav) {
          this.$store.state.changeNav = true
        }
      } else {
        if (changeNav) {
          this.$store.state.changeNav = false
        }
      }
      /* 获取页面可视区的高度，滚动条顶部所处的位置，元素可滚动的总高度 */
      const el = document.documentElement || document.body
      const scrollTop = el.scrollTop// 滚动条顶部位置
      const visibleTop = el.clientHeight// 可视区高度
      const scrollheight = el.offsetHeight// 可滚动总高度
      if (scrollTop + visibleTop === scrollheight) {
        // 已经滚动到底部，可以做一些事情
      }
      if (scrollTop >= 1000) {
        this.$emit('isShowGoTop', true)
      } else {
        this.$emit('isShowGoTop', false)
      }
      // 添加定时器，避免执行次数过多
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.lazyLoading()
      }, 50)
    },
    lazyLoading() {
      for (let i = 0; i < this.imgSrcArr.length; i++) {
        if (this.isInVisibleArea(this.imgSrcArr[i])) {
          this.imgSrcArr[i].src = this.imgSrcArr[i].getAttribute('data-src')
          this.imgSrcArr.splice(i, 1)
          i--
        }
      }
    },
    getLazyLoadingEl() {
      // 把所有需要懒加载的图片放在一个数组中
      const arr = document.querySelectorAll('.lazy-loading')
      // 将类数组转为数组
      this.imgSrcArr = Array.from(arr)
    },
    // 判断元素是否在可视区
    isInVisibleArea(el) {
      const rect = el.getBoundingClientRect()
      return (
        rect.top > 0 &&
        rect.top < window.innerHeight &&
        rect.left > 0 &&
        rect.left < window.innerWidth
      )
    }
  }
}
</script>

<style lang='scss' scoped>
.left-side-box {
  position: relative;
  .sub-nav-component {
    position: absolute;
    top: -60px;
  }
}
.article-item-component {
  margin-bottom: 20px;
}
</style>
