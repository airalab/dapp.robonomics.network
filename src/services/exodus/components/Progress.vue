<template>
  <div class="">
    <div class="info">
      <div class="left">0 XRT</div>
      <div class="right">1000000 XRT</div>
    </div>
    <div class="progress">
      <div
        class="bar"
        :style="{ width: (percent > 100 ? 100 : percent) + '%' }"
      ></div>
    </div>
    <div
      class="current"
      :style="{ 'padding-left': (percent > 84 ? 84 : percent) + '%' }"
    >
      {{ amount }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["percent", "amount"]
};
</script>

<style scoped>
.progress {
  position: relative;
  background: #ebebeb;
  padding: 3px;
}
.bar {
  height: 20px;
  background-color: #03a5ed;
  position: relative;
  overflow: hidden;
}
.info {
  overflow: hidden;
  font-size: 12px;
}
.info .left {
  float: left;
}
.info .right {
  float: right;
}
.current {
  font-size: 14px;
  margin: 3px;
  font-weight: bold;
  overflow: hidden;
  height: 24px;
  white-space: nowrap;
}
</style>
