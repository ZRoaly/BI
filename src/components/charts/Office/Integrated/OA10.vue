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
      text: "特急办平均完成时间",
      subtext: "每月",
      x: "center"
    },
    tooltip: {
      trigger: "axis"
    },
    dataZoom: {
      show: true,
      realtime: true,
      start: 90,
      end: 100
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "2017-01-01",
        "2017-01-02",
        "2017-01-03",
        "2017-01-04",
        "2017-01-05",
        "2017-01-06",
        "2017-01-07",
        "2017-01-08",
        "2017-01-09",
        "2017-01-10",
        "2017-01-11",
        "2017-01-12",
        "2017-01-13",
        "2017-01-14",
        "2017-01-15",
        "2017-01-16",
        "2017-01-17",
        "2017-01-18",
        "2017-01-19",
        "2017-01-20",
        "2017-01-21",
        "2017-01-22",
        "2017-01-23",
        "2017-01-24",
        "2017-01-25",
        "2017-01-26",
        "2017-01-27",
        "2017-01-28",
        "2017-01-29",
        "2017-01-30",
        "2017-01-31",
        "2017-02-01",
        "2017-02-02",
        "2017-02-03",
        "2017-02-04",
        "2017-02-05",
        "2017-02-06",
        "2017-02-07",
        "2017-02-08",
        "2017-02-09",
        "2017-02-10",
        "2017-02-11",
        "2017-02-12",
        "2017-02-13",
        "2017-02-14",
        "2017-02-15",
        "2017-02-16",
        "2017-02-17",
        "2017-02-18",
        "2017-02-19",
        "2017-02-20",
        "2017-02-21",
        "2017-02-22",
        "2017-02-23",
        "2017-02-24",
        "2017-02-25",
        "2017-02-26",
        "2017-02-27",
        "2017-02-28",
        "2017-03-01",
        "2017-03-02",
        "2017-03-03",
        "2017-03-04",
        "2017-03-05",
        "2017-03-06",
        "2017-03-07",
        "2017-03-08",
        "2017-03-09",
        "2017-03-10",
        "2017-03-11",
        "2017-03-12",
        "2017-03-13",
        "2017-03-14",
        "2017-03-15",
        "2017-03-16",
        "2017-03-17",
        "2017-03-18",
        "2017-03-19",
        "2017-03-20",
        "2017-03-21",
        "2017-03-22",
        "2017-03-23",
        "2017-03-24",
        "2017-03-25",
        "2017-03-26",
        "2017-03-27",
        "2017-03-28",
        "2017-03-29",
        "2017-03-30",
        "2017-03-31",
        "2017-04-01",
        "2017-04-02",
        "2017-04-03",
        "2017-04-04",
        "2017-04-05",
        "2017-04-06",
        "2017-04-07",
        "2017-04-08",
        "2017-04-09",
        "2017-04-10",
        "2017-04-11",
        "2017-04-12",
        "2017-04-13",
        "2017-04-14",
        "2017-04-15",
        "2017-04-16",
        "2017-04-17",
        "2017-04-18",
        "2017-04-19",
        "2017-04-20",
        "2017-04-21",
        "2017-04-22",
        "2017-04-23",
        "2017-04-24",
        "2017-04-25",
        "2017-04-26",
        "2017-04-27",
        "2017-04-28",
        "2017-04-29",
        "2017-04-30",
        "2017-05-01",
        "2017-05-02",
        "2017-05-03",
        "2017-05-04",
        "2017-05-05",
        "2017-05-06",
        "2017-05-07",
        "2017-05-08",
        "2017-05-09",
        "2017-05-10",
        "2017-05-11",
        "2017-05-12",
        "2017-05-13",
        "2017-05-14",
        "2017-05-15",
        "2017-05-16",
        "2017-05-17",
        "2017-05-18",
        "2017-05-19",
        "2017-05-20",
        "2017-05-21",
        "2017-05-22",
        "2017-05-23",
        "2017-05-24",
        "2017-05-25",
        "2017-05-26",
        "2017-05-27",
        "2017-05-28",
        "2017-05-29",
        "2017-05-30",
        "2017-05-31",
        "2017-06-01",
        "2017-06-02",
        "2017-06-03",
        "2017-06-04",
        "2017-06-05",
        "2017-06-06",
        "2017-06-07",
        "2017-06-08",
        "2017-06-09",
        "2017-06-10",
        "2017-06-11",
        "2017-06-12",
        "2017-06-13",
        "2017-06-14",
        "2017-06-15",
        "2017-06-16",
        "2017-06-17",
        "2017-06-18",
        "2017-06-19",
        "2017-06-20",
        "2017-06-21",
        "2017-06-22",
        "2017-06-23",
        "2017-06-24",
        "2017-06-25",
        "2017-06-26",
        "2017-06-27",
        "2017-06-28",
        "2017-06-29",
        "2017-06-30",
        "2017-07-01",
        "2017-07-02",
        "2017-07-03",
        "2017-07-04",
        "2017-07-05",
        "2017-07-06",
        "2017-07-07",
        "2017-07-08",
        "2017-07-09",
        "2017-07-10",
        "2017-07-11",
        "2017-07-12",
        "2017-07-13",
        "2017-07-14",
        "2017-07-15",
        "2017-07-16",
        "2017-07-17",
        "2017-07-18",
        "2017-07-19",
        "2017-07-20",
        "2017-07-21",
        "2017-07-22",
        "2017-07-23",
        "2017-07-24",
        "2017-07-25",
        "2017-07-26",
        "2017-07-27",
        "2017-07-28",
        "2017-07-29",
        "2017-07-30",
        "2017-07-31",
        "2017-08-01",
        "2017-08-02",
        "2017-08-03",
        "2017-08-04",
        "2017-08-05",
        "2017-08-06",
        "2017-08-07",
        "2017-08-08",
        "2017-08-09",
        "2017-08-10",
        "2017-08-11",
        "2017-08-12",
        "2017-08-13",
        "2017-08-14",
        "2017-08-15",
        "2017-08-16",
        "2017-08-17",
        "2017-08-18",
        "2017-08-19",
        "2017-08-20",
        "2017-08-21",
        "2017-08-22",
        "2017-08-23",
        "2017-08-24",
        "2017-08-25",
        "2017-08-26",
        "2017-08-27",
        "2017-08-28",
        "2017-08-29",
        "2017-08-30",
        "2017-08-31",
        "2017-09-01",
        "2017-09-02",
        "2017-09-03",
        "2017-09-04",
        "2017-09-05",
        "2017-09-06",
        "2017-09-07",
        "2017-09-08",
        "2017-09-09",
        "2017-09-10",
        "2017-09-11",
        "2017-09-12",
        "2017-09-13",
        "2017-09-14",
        "2017-09-15",
        "2017-09-16",
        "2017-09-17",
        "2017-09-18",
        "2017-09-19",
        "2017-09-20",
        "2017-09-21",
        "2017-09-22",
        "2017-09-23",
        "2017-09-24",
        "2017-09-25",
        "2017-09-26",
        "2017-09-27",
        "2017-09-28",
        "2017-09-29",
        "2017-09-30",
        "2017-10-01",
        "2017-10-02",
        "2017-10-03",
        "2017-10-04",
        "2017-10-05",
        "2017-10-06",
        "2017-10-07",
        "2017-10-08",
        "2017-10-09",
        "2017-10-10",
        "2017-10-11",
        "2017-10-12",
        "2017-10-13",
        "2017-10-14",
        "2017-10-15",
        "2017-10-16",
        "2017-10-17",
        "2017-10-18",
        "2017-10-19",
        "2017-10-20",
        "2017-10-21",
        "2017-10-22",
        "2017-10-23",
        "2017-10-24",
        "2017-10-25",
        "2017-10-26",
        "2017-10-27",
        "2017-10-28",
        "2017-10-29",
        "2017-10-30",
        "2017-10-31",
        "2017-11-01",
        "2017-11-02",
        "2017-11-03",
        "2017-11-04",
        "2017-11-05",
        "2017-11-06",
        "2017-11-07",
        "2017-11-08",
        "2017-11-09",
        "2017-11-10",
        "2017-11-11",
        "2017-11-12",
        "2017-11-13",
        "2017-11-14",
        "2017-11-15",
        "2017-11-16",
        "2017-11-17",
        "2017-11-18",
        "2017-11-19",
        "2017-11-20",
        "2017-11-21",
        "2017-11-22",
        "2017-11-23",
        "2017-11-24",
        "2017-11-25",
        "2017-11-26",
        "2017-11-27",
        "2017-11-28",
        "2017-11-29",
        "2017-11-30",
        "2017-12-01",
        "2017-12-02",
        "2017-12-03",
        "2017-12-04",
        "2017-12-05",
        "2017-12-06",
        "2017-12-07",
        "2017-12-08",
        "2017-12-09",
        "2017-12-10",
        "2017-12-11",
        "2017-12-12",
        "2017-12-13",
        "2017-12-14",
        "2017-12-15",
        "2017-12-16",
        "2017-12-17",
        "2017-12-18",
        "2017-12-19",
        "2017-12-20",
        "2017-12-21",
        "2017-12-22",
        "2017-12-23",
        "2017-12-24",
        "2017-12-25",
        "2017-12-26",
        "2017-12-27",
        "2017-12-28",
        "2017-12-29",
        "2017-12-30",
        "2017-12-31"
      ]
    },
    yAxis: {
      type: "value",
      max: 300
    },
    series: [
      {
        name: "时间(分钟)",
        type: "line",
        smooth: true,
        areaStyle: {
          normal: {}
        },
        lineStyle: {
          normal: {
            width: 1
          }
        },
        data: [
          64,
          50,
          26,
          57,
          62,
          48,
          25,
          13,
          59,
          98,
          5,
          12,
          64,
          64,
          30,
          6,
          67,
          27,
          4,
          89,
          71,
          57,
          23,
          29,
          73,
          77,
          33,
          77,
          34,
          34,
          69,
          36,
          69,
          91,
          41,
          4,
          51,
          17,
          24,
          78,
          29,
          23,
          54,
          5,
          76,
          62,
          32,
          26,
          40,
          23,
          86,
          67,
          51,
          20,
          17,
          5,
          57,
          47,
          35,
          6,
          14,
          100,
          29,
          3,
          13,
          58,
          36,
          80,
          83,
          53,
          4,
          64,
          99,
          90,
          33,
          37,
          67,
          91,
          9,
          52,
          97,
          68,
          15,
          2,
          57,
          59,
          75,
          45,
          88,
          80,
          57,
          45,
          32,
          66,
          22,
          45,
          31,
          29,
          82,
          67,
          68,
          53,
          75,
          61,
          66,
          28,
          39,
          44,
          67,
          5,
          8,
          6,
          9,
          83,
          40,
          53,
          38,
          10,
          73,
          30,
          14,
          16,
          89,
          23,
          91,
          95,
          33,
          57,
          44,
          22,
          83,
          74,
          95,
          85,
          68,
          44,
          31,
          76,
          10,
          84,
          4,
          71,
          81,
          95,
          17,
          22,
          8,
          63,
          46,
          81,
          41,
          11,
          92,
          32,
          97,
          8,
          81,
          36,
          56,
          4,
          78,
          90,
          96,
          2,
          3,
          68,
          32,
          78,
          21,
          84,
          63,
          70,
          76,
          9,
          12,
          60,
          94,
          56,
          17,
          30,
          6,
          96,
          93,
          57,
          15,
          18,
          68,
          82,
          43,
          48,
          3,
          7,
          90,
          59,
          89,
          65,
          59,
          27,
          30,
          60,
          48,
          61,
          33,
          11,
          15,
          97,
          62,
          73,
          88,
          56,
          12,
          97,
          13,
          55,
          34,
          51,
          79,
          81,
          85,
          41,
          94,
          35,
          92,
          38,
          67,
          76,
          17,
          27,
          29,
          21,
          4,
          98,
          12,
          99,
          88,
          56,
          24,
          59,
          81,
          61,
          58,
          74,
          62,
          57,
          36,
          99,
          14,
          65,
          24,
          49,
          97,
          55,
          84,
          19,
          52,
          41,
          90,
          8,
          46,
          8,
          14,
          17,
          50,
          95,
          63,
          34,
          45,
          95,
          50,
          32,
          58,
          86,
          75,
          79,
          84,
          10,
          27,
          45,
          63,
          74,
          64,
          29,
          14,
          1,
          20,
          6,
          11,
          54,
          57,
          26,
          73,
          67,
          34,
          66,
          73,
          64,
          92,
          21,
          38,
          77,
          74,
          6,
          99,
          81,
          94,
          65,
          43,
          28,
          95,
          24,
          87,
          30,
          17,
          75,
          35,
          93,
          38,
          79,
          12,
          48,
          72,
          97,
          51,
          67,
          40,
          84,
          57,
          75,
          80,
          30,
          71,
          83,
          32,
          22,
          81,
          59,
          33,
          25,
          66,
          18,
          100,
          96,
          15,
          47,
          9,
          30,
          9,
          71,
          57,
          52,
          18,
          93,
          18,
          29,
          24,
          100,
          29,
          61,
          66,
          98,
          85,
          7,
          7,
          68,
          52
        ]
      }
    ]
  };

  myChart.setOption(option);
}
</script>

