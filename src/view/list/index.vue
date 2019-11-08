<template>
  <div class="wrap">
    <div class="layout">
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo"></div>
        <div class="layout-nav">
          <Menu-item name="1">
            <Icon type="ios-navigate"></Icon>导航一
            <Icon type="ios-navigate"></Icon>导航一
            <Icon type="ios-navigate"></Icon>导航一
            <Icon type="ios-navigate"></Icon>导航一
            <Icon type="ios-navigate"></Icon>导航一
            <Icon type="ios-navigate"></Icon>导航一
            <Icon type="ios-navigate"></Icon>导航一
          </Menu-item>
          <Menu-item name="2">
            <Icon type="ios-keypad"></Icon>导航二
          </Menu-item>
          <Menu-item name="3">
            <Icon type="ios-analytics"></Icon>导航三
          </Menu-item>
          <Menu-item name="4">
            <Icon type="ios-paper"></Icon>导航四
          </Menu-item>
        </div>
      </Menu>
      <Menu mode="horizontal" active-name="1">
        <div class="layout-assistant">
          <Menu-item name="1">二级导航</Menu-item>
          <Menu-item name="3">二级导航</Menu-item>
        </div>
      </Menu>
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo"></div>
        <div class="layout-nav">
          <Menu-item name="1">
            <Icon type="ios-navigate"></Icon>导航一
          </Menu-item>
          <Menu-item name="2">
            <Icon type="ios-keypad"></Icon>导航二
          </Menu-item>
          <Menu-item name="3">
            <Icon type="ios-analytics"></Icon>导航三
          </Menu-item>
          <Menu-item name="4">
            <Icon type="ios-paper"></Icon>导航四
          </Menu-item>
        </div>
      </Menu>
      <Menu mode="horizontal" active-name="1">
        <div class="layout-assistant">
          <Menu-item name="1">二级导航</Menu-item>
          <Menu-item name="3">二级导航</Menu-item>
        </div>
      </Menu>
      <div class="layout-content">
        <Row>
          <i-col span="5">
            <Menu active-name="1-2" width="auto" :open-names="['1']">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>导航一
                </template>
                <Menu-item name="1-1">选项 1</Menu-item>
                <Menu-item name="1-2">选项 2</Menu-item>
                <Menu-item name="1-3">选项 3</Menu-item>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>导航二
                </template>
                <Menu-item name="2-1">选项 1</Menu-item>
                <Menu-item name="2-2">选项 2</Menu-item>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>导航三
                </template>
                <Menu-item name="3-1">选项 1</Menu-item>
                <Menu-item name="3-2">选项 2</Menu-item>
              </Submenu>
            </Menu>
          </i-col>
          <i-col span="19">
            <div class="layout-content-main">内容区域</div>
          </i-col>
        </Row>
      </div>
      <div class="layout-copy">2011-2016 &copy; TalkingData</div>
    </div>
    <div>
      <Card style="width:350px">
        <p slot="title">
          <Icon type="ios-film-outline"></Icon>经典电影
        </p>
        <a href="#" slot="extra" @click.prevent="changeLimit">
          <Icon type="ios-loop-strong"></Icon>换一换
        </a>
        <ul>
          <li v-for="item in randomMovieList">
            <a :href="item.url" target="_blank">{{ item.name }}</a>
            <span>
              <Icon type="ios-star" v-for="n in 4" :key="n"></Icon>
              <Icon type="ios-star" v-if="item.rate >= 9.5"></Icon>
              <Icon type="ios-star-half" v-else></Icon>
              {{ item.rate }}
            </span>
          </li>
        </ul>
          <ul>
          <li v-for="item in randomMovieList">
            <a :href="item.url" target="_blank">{{ item.name }}</a>
            <span>
              <Icon type="ios-star" v-for="n in 4" :key="n"></Icon>
              <Icon type="ios-star" v-if="item.rate >= 9.5"></Icon>
              <Icon type="ios-star-half" v-else></Icon>
              {{ item.rate }}
            </span>
          </li>
        </ul>
          <ul>
          <li v-for="item in randomMovieList">
            <a :href="item.url" target="_blank">{{ item.name }}</a>
            <span>
              <Icon type="ios-star" v-for="n in 4" :key="n"></Icon>
              <Icon type="ios-star" v-if="item.rate >= 9.5"></Icon>
              <Icon type="ios-star-half" v-else></Icon>
              {{ item.rate }}
            </span>
          </li>
        </ul>
      </Card>
    </div>
    <div>
      <Input-number :max="10" :min="1" v-model="value1"></Input-number>
    </div>
    <div>
      <Timeline>
        <Timeline-item>
          <p class="time">1976年</p>
          <p class="content">Apple I 问世</p>
        </Timeline-item>
        <Timeline-item>
          <p class="time">1984年</p>
          <p class="content">发布 Macintosh</p>
        </Timeline-item>
        <Timeline-item>
          <p class="time">2007年</p>
          <p class="content">发布 iPhone</p>
        </Timeline-item>
        <Timeline-item>
          <p class="time">2010年</p>
          <p class="content">发布 iPad</p>
        </Timeline-item>
        <Timeline-item>
          <p class="time">2011年10月5日</p>
          <p class="content">史蒂夫·乔布斯去世</p>
        </Timeline-item>
      </Timeline>
    </div>
    <div>
      <i-circle :percent="percent" :stroke-color="color">
        <Icon v-if="percent == 100" type="ios-checkmark-empty" size="700" style="color:#5cb85c"></Icon>
        <span v-else style="font-size:24px">{{ percent }}%</span>
      </i-circle>
      <Button-group size="large">
        <Button icon="ios-plus-empty" @click="add"></Button>
        <Button icon="ios-minus-empty" @click="minus"></Button>
      </Button-group>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      value1: 1,
      percent: 0,
      movieList: [
        {
          name: "肖申克的救赎",
          url: "https://movie.douban.com/subject/1292052/",
          rate: 9.6
        },
        {
          name: "这个杀手不太冷",
          url: "https://movie.douban.com/subject/1295644/",
          rate: 9.4
        },
        {
          name: "霸王别姬",
          url: "https://movie.douban.com/subject/1291546/",
          rate: 9.5
        },
        {
          name: "阿甘正传",
          url: "https://movie.douban.com/subject/1292720/",
          rate: 9.4
        },
        {
          name: "美丽人生",
          url: "https://movie.douban.com/subject/1292063/",
          rate: 9.5
        },
        {
          name: "千与千寻",
          url: "https://movie.douban.com/subject/1291561/",
          rate: 9.2
        },
        {
          name: "辛德勒的名单",
          url: "https://movie.douban.com/subject/1295124/",
          rate: 9.4
        },
        {
          name: "海上钢琴师",
          url: "https://movie.douban.com/subject/1292001/",
          rate: 9.2
        },
        {
          name: "机器人总动员",
          url: "https://movie.douban.com/subject/2131459/",
          rate: 9.3
        },
        {
          name: "盗梦空间",
          url: "https://movie.douban.com/subject/3541415/",
          rate: 9.2
        }
      ],
      randomMovieList: []
    };
  },
  computed: {
    color() {
      let color = "#2db7f5";
      if (this.percent == 100) {
        color = "#5cb85c";
      }
      return color;
    }
  },
  methods: {
    add() {
      if (this.percent >= 100) {
        return false;
      }
      this.percent += 10;
    },
    minus() {
      if (this.percent <= 0) {
        return false;
      }
      this.percent -= 10;
    },
    changeLimit() {
      function getArrayItems(arr, num) {
        const temp_array = [];
        for (let index in arr) {
          temp_array.push(arr[index]);
        }
        const return_array = [];
        for (let i = 0; i < num; i++) {
          if (temp_array.length > 0) {
            const arrIndex = Math.floor(Math.random() * temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
          } else {
            break;
          }
        }
        return return_array;
      }
      this.randomMovieList = getArrayItems(this.movieList, 5);
    }
  },
  mounted() {
    this.changeLimit();
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.wrap {
  width: 100%;
  height: 100%;
}
.time {
  font-size: 14px;
  font-weight: bold;
}
.content {
  padding-left: 5px;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
}
.layout-assistant {
  width: 300px;
  margin: 0 auto;
  height: inherit;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
</style>