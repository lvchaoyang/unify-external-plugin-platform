<template>
  <div class="zs-empty">
    <img src="./assets/images/img_blank_empty.png" />
    <p class="empty-text">{{ emptyTip }}</p>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";



@Component({
  name: "ZSEmpty"
})
export default class ZSEmpty extends Vue {
  @Prop({default: '暂无数据'})
  emptyTip?: string;
}
</script>

<style scoped lang="scss">
.zs-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  img{
    width:454px;
  }
  .empty-text{
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #969899;
    line-height: 28px;
    position: absolute;
    top:322px;

  }
}
</style>
