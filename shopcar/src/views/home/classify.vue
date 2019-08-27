<template>
  <div class="wrap">
    <Header>校园超市</Header>
    <div class="main">
      <class-search></class-search>
      <keep-alive >
        <div class="classification_conent">
          <div class="classification_left">
            <div
              v-for="(item,index) in shopTypeList"
              :key="item.id"
              :class="{'active':ind==index}"
              @click="shopTypeFn(index,item.id,item.children)"
            >{{item.title}}</div>
          </div>
          <div class="classification_right">
            <div class="right_top">
              <div
                v-for="(item,index) in children"
                :key="item.id"
                @click="typeRightFn(index,item)"
                :class="topInd===index?'top-active':''"
              >{{item.name}}</div>
            </div>
            <div class="right_bottom">
              <List v-for="item in selectType" :key="item.id" classify="classify" :item="item"/>
            </div>
          </div>
        </div>
      </keep-alive>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name:"classify",
  props: {},
  components: {},
  data() {
    return {
      ind: 0,
      topInd: 0,
      parentid:"2xe4he1vu9k00002xe4he1vu9",
      type_id:"2xe4he1vu9k00002xe4he1vu9"
    };
  },
  computed: {
    ...mapState("classification", ["shopTypeList", "selectType", "children"])
  },
  methods: {
    ...mapActions("classification", [
      "set_shopType_actions",
      "set_selectType_actions",
      "set_childrenType_actions"
    ]),
    ...mapMutations("classification", ["set_shopChildren_mutations"]),
    shopTypeFn(ind, type_id, children) {
      this.type_id = type_id;
      this.ind = ind;
      
      let flag = children.find(item => item.name == "全部");
      if (!flag) {
        children.unshift({
            name:"全部",
            id:"all",
            parent_id:""
        });
      }
      this.set_selectType_actions({ type_id });
      this.set_shopChildren_mutations(children);
    },
    typeRightFn(index,item) {
      this.topInd = index; //item.parent_id:"2xe4he1vu9k00002xe4he1vu9"  
      if(item.id === 'all'){
        this.parentid = '';
        this.set_childrenType_actions({type_id:this.type_id});
      }
      else{
        this.parentid = item.parent_id;
        this.set_childrenType_actions({type_id:this.parentid,category_id:item.id});
      }  
    }
    // goTo_Search(){
    //     this.$router.push("/search")
    // }
  },
  created() {
    //分类页面分类
    this.set_shopType_actions();
    //筛选分类页面商品
    this.set_selectType_actions({ type_id: "2xe4he1vu9k00002xe4he1vu9" });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
header{
  font-size:pxTorem(16px);
  line-height: pxTorem(44px);
}
.main {
  @include box_flex;
  @include direction(column);
  .classification_conent {
    flex: 1;
    overflow: hidden;
    @include box_flex;
    .classification_left {
      @include width(pxTorem(86px));
      background: #fafafa;
      overflow: auto;
      div {
        text-align: center;
        padding: pxTorem(20px) pxTorem(0px);
        font-size: pxTorem(14px);
        color: #ababab;
      }
      .active {
        color: red;
      }
    }
    .classification_right {
      flex: 1;
      @include box_flex;
      @include direction(column);
      .right_top {
        @include height(pxTorem(28px));
        overflow: auto;
        line-height: pxTorem(28px);
        div {
          float: left;
          @include height(100%);
          padding: pxTorem(0px) pxTorem(7px);
          text-align: center;
          font-size: pxTorem(12px);
          color: #666;
        }
        .top-active {
          color: #000;
        }
      }
      .right_bottom {
        flex: 1;
        overflow: auto;
      }
    }
  }
}
</style>
