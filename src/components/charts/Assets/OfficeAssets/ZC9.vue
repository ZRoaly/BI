<template lang="html">
  <div style="height:100%;width:100%" ref  = 'chart' >
  </div>
</template>

<script>
import installTheme from "../../theme";

installTheme({}, echarts);

export default {
  name: "page-test",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const myChart = echarts.init(this.$refs.chart, "darkk"),
      _this = this;

    init(myChart);

    _this.$store.commit("charts/push", myChart);
  }
};

function init(myChart) {
  const option = {
    title: {
      text: "资产年度新增情况"
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      data: ["2014年", "2015年", "2016年", "2017年", "2018年"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "数量",
        data: [820, 932, 940, 1100, 1290, 1330, 1350],
        type: "line",
        smooth: true
      }
    ]
  };

  myChart.setOption(option);
}
</script>

