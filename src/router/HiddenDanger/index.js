export default {
  name: '60',
  title: '安全隐患',
  children: [{
      name: '6001',
      title: '安全隐患排查',
      width:2,
      color:"rgb(0,135,255)",
      icon:'icon-yinhuanpaicha',
      children: [
        {
          name:'600101',
          component: () =>
          import ('../../components/pages/HiddenDanger/Investigation/Index.vue'),
          title: '安全隐患整改数据分析'
        }
      ]
    },
    {
      name: '6002',
      title: '作业风险',
      color:"rgb(0,135,255)",
      icon:'icon-zuoyefengxian',
      width:2,
      children: [
        {
          name:'600201',
          component: () =>
          import ('../../components/pages/HiddenDanger/Risk/Index.vue'),
          title: '作业风险'
        }
      ]
    }
  ]
}