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
      text: "新增项目金额",
      subtext: "每年",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      data: ["2016", "2017", "2018"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "金额(单位万元)",
        data: [110, 134, 267],
        type: "line"
      }
    ]
  };

  myChart.setOption(option);
}
</script>

