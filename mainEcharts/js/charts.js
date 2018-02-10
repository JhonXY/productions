// var chart1 = echarts.init($('#chart1')[0])
// var chart2 = echarts.init($('#chart2')[0])
// var chart3 = echarts.init($('#chart3')[0])
// var chart4 = echarts.init($('#chart4')[0])
// var chart5 = echarts.init($('#chart5')[0])
// var chart6 = echarts.init($('#chart6')[0])
// var chart7 = echarts.init($('#chart7')[0])
// var chart8 = echarts.init($('#chart8')[0])
// var chart9 = echarts.init($('#chart9')[0])
// var chart10 = echarts.init($('#chart10')[0])

var EchartsOptions = {
  chart1: {
    el: echarts.init($('#chart1')[0]),
    init: function(){
      this.el.setOption(this.options)
    },
    setSeries: function(more){
      // this.init()
      var data = more.map(function(ele, index){
        return ele = {
          value: ele.statValue,
          name: ele.statKey
        }
      }) 
        
      this.options.series[0].data = data
      // this.init()
    },
    options: {
      title: {
        text: '使用邮箱',
        textStyle: {
          fontSize: 20,
          color: '#fff',
          align: 'left',
          fontWeight: 'normal'
        },
        top: 0
      },
      color: ['#3e73ee', '#4395e9', '#00baff', '#43d7e4', '#49fdf7', '#3441ec', '#2e3fc2', '#2458d3'],
      legend: {
        show: false
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      calculable: true,
      series: [{
        name: '邮箱名称',
        type: 'pie',
        radius: [50, 150],
        // center: ['50%', '50%'],
        roseType: 'area',
        // 接口获得
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' }
        ]
      }]
    }
  },
  chart2: {
    el: echarts.init($('#chart2')[0]),
    init:function(){
      this.el.setOption(this.options)
    },
    setSeries: function(more){
      var data = []
      data[0] = {name: '请求', value: more[0]}
      data[1] = {name: '送达', value: more[1]}
      data[2] = {name: '触达', value: more[2]}
      // var data = more.map(function (ele, index) {
      //   return ele = {
      //     value: ele.statValue,
      //     name: ele.statKey
      //   }
      // })
      this.options.series[0].data = data
      // this.init()
    },
    options: {
      title: {
        text: '发送情况',
        x: 'left',
        textStyle: {
          fontSize: 20,
          color: '#fff',
          align: 'left',
          fontWeight: 'normal'
        },
      },
      legend: {
        show: false
      },
      color: ['#4773f7', '#35b6fb', '#25f9ff'],
      grid: {
        top: '30%',
        bottom: '20%',
        left: '15%',
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}"
      },
      xAxis: {
        type: 'category',
        data: ['请求', '送达', '触达'],
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        // 横向切割线
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      series: [{
        name: "邮件数",
        data: [120, 200, 150],
        type: 'bar',
        center: ['50%', '50%'],
        label: {
          show: false
        },
        itemStyle: {
          color: function(params){
            var list = ['#4773f7', '#35b6fb', '#25f9ff']
            return list[params.dataIndex]
          }
        },
        barWidth: 98,
        // barMaxWidth: 98,
        // barGap: '100%',
        barCategoryGap: '100%'
      }]
    }
  },
  chart3: {
    el: echarts.init($('#chart3')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    setSeries: function (more) {
      // this.init()
      this.options.xAxis.data = more.xAxis.data
      this.options.series[0].data = more.series[0].data
      this.options.series[1].data = more.series[1].data
      // this.el.setOption(more)
    },
    options: {
      title: {
        text: '周发送情况',
        textStyle: {
          fontSize: 20,
          color: '#fff',
          align: 'left',
          fontWeight: 'normal'
        },
        top: 0
      },
      grid: {
        top: '20%',
        bottom: '20%'
      },
      color: ['#1c577e', '#3aa3fa'],
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: [{
          name: '请求数',
          icon: 'circle'
          }, {
          name: '送达数',
          icon: 'circle'
        }],
        textStyle: {
          fontSize: 14,
          color: '#fff',
        },
        // symbol: 'ci'
        left: 10,
        top: 35,
        // type: 'scroll',
        orient: 'vertical',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [],
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        // 横向切割线
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      series: [
        {
          name: '请求数',
          type: 'line',
          smooth: true,
          itemStyle: { normal: { areaStyle: { type: 'default' } } },
          data: [],
          showSymbol: false,
          areaStyle: {
            normal: {
              color: '#1c577e'
            }
          },
          markPoint: {
            data: [
              { type: 'max', name: '最大值' }
            ],
            symbolOffset: [-3, -45],
            symbol: 'image://img/request.png',
            symbolSize: [72, 88],
          }
        },
        {
          name: '送达数',
          type: 'line',
          smooth: true,
          itemStyle: { normal: { areaStyle: { type: 'default' } } },
          data: [],
          lineStyle: {
            color: '#4c3ff3'
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#4675f7'
              }, {
                offset: 1,
                color: '#23ffff'
              }])
            }
          },
          markPoint: {
            data: [{ type: 'max', name: '最大值' },],
            symbolOffset: [-2, -45],
            symbol: 'image://img/delivered.png',
            symbolSize: [72, 88],
          }
        }
      ]
    }
  },
  chart4: {
    el: echarts.init($('#chart4')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    setSeries: function (more) {
      var forMax = []
      
      var data = more.map(function(ele, index){
        forMax.push(ele.statValue)
        var forShort = provinceForShort(ele.statKey);

        return ele = {
          name: forShort,
          value: ele.statValue
        }
      })  
      // console.log(data);
      
      var max = Math.max.apply(Math, forMax)

      this.options.series[1].data = data
      this.options.visualMap.max = max
      // this.init()
    },
    options: {
      tooltip: {},
      title: {
        text: '阅读地域分布',
        textStyle: {
          fontSize: 20,
          color: '#fff',
          align: 'left',
          fontWeight: 'normal'
        }
      },
      visualMap: {
        min: 0,
        max: 50000,
        left: 'left',
        bottom: '10%',
        text: ['高', '低'],
        seriesIndex: [1],
        inRange: {
          color: ['#25f8ff', '#2c54d4']
        },
        textStyle: {
          color: '#ffffff'
        },
        calculable: false
      },
      geo: {
        map: 'china',
        roam: false,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#ffffff',
            },
            position: 'center',
            fontSize: 10,
            verticalAlign: 'middle'
          }
        },
        itemStyle: {
          normal: {
            borderColor: 'rgba(0, 0, 0, 0.2)'
          },
          emphasis: {
            areaColor: null,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 20,
            borderWidth: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        zoom: 1.2,
        regions: [
          { name: '南海诸岛', itemStyle: { normal: { opacity: 0 } }, label: { normal: { show: false } } },
          { name: '青海', label: { normal: { padding: [0, 90, 0, 0] } } },
          { name: '江苏', label: { normal: { padding: [0, 0, 20, 30] } } },
          { name: '黑龙江', label: { normal: { padding: [0, 0, 30, 40] } } },
          { name: '河北', label: { normal: { padding: [0, 0, 5, 5] } } },
          { name: '山西', label: { normal: { padding: [5, 0, 0, 0] } } },
          { name: '浙江', label: { normal: { padding: [20, 0, 0, 0] } } },
          { name: '湖南', label: { normal: { padding: [15, 20, 0, 0] } } },
          { name: '湖北', label: { normal: { padding: [0, 20, 10, 0] } } },
          { name: '广西', label: { normal: { padding: [0, 0, 10, 5] } } },
          { name: '云南', label: { normal: { padding: [10, 15, 0, 0] } } },
          { name: '台湾', label: { normal: { padding: [10, 10, 0, 0] } } },
          { name: '宁夏', label: { normal: { padding: [5, 0, 0, 0] } } },
          { name: '新疆', label: { normal: { padding: [40, 10, 0, 0] } } },
          { name: '西藏', label: { normal: { padding: [0, 20, 20, 0] } } },
          { name: '重庆', label: { normal: { padding: [0, 0, 5, 10] } } },
          { name: '内蒙古', label: { normal: { padding: [0, 8, 10, 0] } } },
        ]
      },
      series: [
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          label: {
            normal: {
              formatter: '{b}',
              position: 'center',
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#F06C00'
            }
          }
        },
        {
          name: '阅读量',
          type: 'map',
          geoIndex: 0,
          data: [
            { name: '北京', value: 0 },
            { name: '天津', value: 0 },
            { name: '上海', value: 0 },
            { name: '重庆', value: 0 },
            { name: '河北', value: 0 },
            { name: '河南', value: 0 },
            { name: '云南', value: 0 },
            { name: '辽宁', value: 0 },
            { name: '黑龙江', value: 0 },
            { name: '湖南', value: 0 },
            { name: '安徽', value: 0 },
            { name: '山东', value: 0 },
            { name: '新疆', value: 0 },
            { name: '江苏', value: 0 },
            { name: '浙江', value: 0 },
            { name: '江西', value: 0 },
            { name: '湖北', value: 0 },
            { name: '广西', value: 0 },
            { name: '甘肃', value: 0 },
            { name: '山西', value: 0 },
            { name: '内蒙古', value: 0 },
            { name: '陕西', value: 0 },
            { name: '吉林', value: 0 },
            { name: '福建', value: 0 },
            { name: '贵州', value: 0 },
            { name: '广东', value: 0 },
            { name: '青海', value: 0 },
            { name: '西藏', value: 0 },
            { name: '四川', value: 0 },
            { name: '宁夏', value: 0 },
            { name: '海南', value: 0 },
            { name: '台湾', value: 0 },
            { name: '香港', value: 0 },
            { name: '澳门', value: 0 }
          ]
        }
      ]
    }
  },
  chart5: {
    el: echarts.init($('#chart5')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    setSeries: function (more) {
      var arr = []
                 
      more.map(function (ele, index) {
        var key = +ele.statKey
        arr[key] = ele.statValue
      })                                                                                                               
      console.log(arr);
      console.log(more);
      var max = Math.max.apply(Math, arr)
      this.options.radar.indicator = this.options.radar.indicator.map(function (ele, i){
        if(i == 0){
          return {
            text: 24,
            max: max
          }
        } else {
          return {
            text: ele.text - 1,
            max: max
          }
        }
      })
      this.options.series[0].data[0].value = arr      
      // this.init()
    },
    options: {
      title: {
        text: '24小时阅读时间分布',
        textStyle: {
          fontSize: 20,
          color: '#fff',
          align: 'left',
          fontWeight: 'normal'
        }
      },
      legend: {
        show: false
      },
      radar: {
        // clockWise
        indicator: (function () {
          var res = [];
          for (var i = 1; i <= 24; i++) {
            // 这里的max需要获取
            res.push({ text: i });
          }
          return res;
        })(),
        splitArea: {
          areaStyle: {
            color: [],
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 10
          }
        },
        splitNumber: 3,
        radius: 180 // 控制图的大小
      },
      series: [{
        type: 'radar',
        // clockWise: false,
        data: [{
          name: '阅读量',
          areaStyle: {
            normal: {
              color: '#567eff',
              opacity: 0.5
            }
          },
          symbol: 'none',
          lineStyle: {
            normal: {
              color: '#23408d'
            }
          },
          itemStyle: {
            normal: {
              color: '#23408d'
            }
          },
          // 接口获取
          value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
        }]
      }]
    }
  },
  chart6: {
    el: echarts.init($('#chart6')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    // setSeries: function (more) {
    //   var data = more.map(function (ele, index) {
    //     return ele = {
    //       value: ele.statValue,
    //       name: ele.statKey
    //     }
    //   })
    //   this.options.series[0].data = data
    //   // this.init()
    // },
    // options: {
    //   title: {
    //     text: '阅读端分布',
    //     textStyle: {
    //       fontSize: 20,
    //       color: '#fff',
    //       align: 'left',
    //       fontWeight: 'normal'
    //     },
    //     top: 0
    //   },
    //   color: ['#b187ff', '#e8abff', '#8cffd2', '#0beaeb', '#3dbdf2', '#4778fa', '#8273eb'],
    //   tooltip: {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b}: {c} ({d}%)"
    //   },
    //   legend: {
    //     show: false
    //   },
    //   series: [
    //     {
    //       name: '访问来源',
    //       type: 'pie',
    //       radius: [135, 180],
    //       avoidLabelOverlap: false,
    //       label: {
    //         show: true,
    //         // position: 'center',
    //         emphasis: {
    //           show: true,
    //           position: 'center',
    //           textStyle: {
    //             fontWeight: 'bold'
    //           }
    //         }
    //       },
    //       labelLine: {
    //         show: true
    //       },
    //       data: [
    //         { value: 335, name: '直接访问' },
    //         { value: 310, name: '邮件营销' },
    //         { value: 234, name: '联盟广告' },
    //         { value: 135, name: '视频广告' },
    //         { value: 1548, name: '搜索引擎' }
    //       ]
    //     }
    //   ]
    // }
    setSeries: function (more) {
      var data = more.map(function (ele, index) {
        return ele = {
          value: ele.statValue,
          name: ele.statKey
        }
      })
      // this.options.series[0].data = data

      this.options.series = (function (data) {
        var series = [];
        for (var i = 0; i < 30; i++) {
          series.push({
            name: '阅读端分布',
            type: 'pie',
            // clockwise: true,
            hoverAnimation: false,
            startAngle: 0 - i * 2, // 实现旋涡，+-控制漩涡转向
            label: {
              show: i == 29,
              emphasis: {
                show: false
              }
            },
            labelLine: {
              show: i == 29,
              emphasis: {
                show: false
              }
            },
            radius: [i * 4.7 + 43.5, i * 4.7 + 46],
            data: data
          })
        }
        return series;
      })(data)
    },
    options: {
      title: {
        text: '阅读端分布',
        textStyle: {
          fontSize: 20,
          color: '#fff',
          align: 'left',
          fontWeight: 'normal'
        },
        top: 0
      },
      // color: ['#3472ff', '#2eabff', '#14d0ff', '#588aff', '#2d24ff'],
      color: ['#2d24ff', '#3472ff', '#2c97ff'],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {d}%"
      },
      legend: {
        show: false
      },
      calculable: false,
      series: []
    }
  },
  chart7: {
    el: echarts.init($('#chart7')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    // setSeries: function (more) {
    //   var tmp = 0,
    //       tmpIndex = null,
    //       data = []

    //   more.sort(function (pre, cur) {
    //     return pre.statValue - cur.statValue
    //   })
    //   for (var i = 0; i < more.length; i++) {
    //     var ele = more[i]
    //     if (ele.statKey === '-1') {
    //       tmpIndex = i
    //     }
    //   }
    //   if (tmpIndex != null){
    //     more.splice(tmpIndex, 1)
    //   }
      
    //   data = more.slice(-9)

      
    //   var final = data.map(function(ele){
    //     return {
    //       value: ele.statValue,
    //       name: ele.statKey
    //     }
    //   }) 
    
    //   this.options.series = (function (final) {
    //     var series = [];
    //     for (var i = 0; i < 30; i++) {
    //       series.push({
    //         name: '移动品牌分布',
    //         type: 'pie',
    //         // clockwise: true,
    //         hoverAnimation: false,
    //         startAngle: 0 - i * 2, // 实现旋涡，+-控制漩涡转向
    //         label: {
    //           show: i == 29,
    //           emphasis: {
    //             show: false
    //           }
    //         },
    //         labelLine: {
    //           show: i == 29,
    //           emphasis: {
    //             show: false
    //           }
    //         },
    //         radius: [i * 4.7 + 43.5, i * 4.7 + 46],
    //         data: final
    //       })
    //     }
    //     return series;
    //   })(final)
    //   // this.options.series[0].data = data
    //   // this.init()
    // },
    // options: {
    //   title: {
    //     text: '移动品牌分布',
    //     textStyle: {
    //       fontSize: 20,
    //       color: '#fff',
    //       align: 'left',
    //       fontWeight: 'normal'
    //     },
    //     top: 0
    //   },
    //   // color: ['#3472ff', '#2eabff', '#14d0ff', '#588aff', '#2d24ff'],
    //   color: ['#2d24ff', '#3472ff', '#2c97ff'],
    //   tooltip: {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b} : {d}%"
    //   },
    //   legend: {
    //     show: false
    //   },
    //   calculable: false,
    //   series: []
    // }
    setSeries: function (more) {
      // this.init()
      var tmp = 0,
        tmpIndex = null,
        data = []

      more.sort(function (pre, cur) {
        return pre.statValue - cur.statValue
      })
      for (var i = 0; i < more.length; i++) {
        var ele = more[i]
        if (ele.statKey === '-1') {
          tmpIndex = i
        }
      }
      if (tmpIndex != null) {
        more.splice(tmpIndex, 1)
      }

      data = more.slice(-9)


      var final = data.map(function (ele) {
        return {
          value: ele.statValue,
          name: ele.statKey
        }
      })
      this.options.series[0].data = final
    },
    options: {
      title: {
        text: '移动品牌分布',
        textStyle: {
          fontSize: 20,
          color: '#fff',
          align: 'left',
          fontWeight: 'normal'
        },
        top: 0
      },
      color: ['#2d24ff','#554eff', '#4778fa', '#8273eb', '#b187ff', '#e8abff', '#8cffd2', '#e8ff8c', '#0beaeb'],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {d}%"
      },
      legend: {
        show: false
      },
      series: [
        {
          name: '移动品牌',
          type: 'pie',
          radius: [135, 180],
          avoidLabelOverlap: false,
          label: {
            show: true,
            // position: 'center',
            emphasis: {
              show: true,
              position: 'center',
              textStyle: {
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }
      ]
    }
  },
  chart8: {
    el: echarts.init($('#chart8')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    setSeries: function (more) {
      var data = more.map(function (ele, index) {
        return ele = {
          value: ele.statValue,
          name: ele.statKey
        }
      })
      this.options.series[0].data = data
      // this.init()
    },
    options: {
      title: {
        // show:false
        text: '内容类型占比',
        bottom: 0,
        left: 'center',
        textStyle: {
          color: '#ffffff',
          fontSize: 20,
          fontWeight: 'normal'
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      color: ['#b187ff', '#439bf5', '#3dbdf2'],
      legend: {
        show: false
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: 180,
          // avoidLabelOverlap: false,
          label: {
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold'
              }
            }
          },
          itemStyle:{
            emphasis:{
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          data: []
        }
      ]
    }
  },
  chart9: {
    el: echarts.init($('#chart9')[0]),
    init: function () {
      this.el.setOption(this.options)
    },
    setSeries: function (more) {
      var data = more.map(function (ele, index) {
        return ele = {
          value: ele.statValue,
          name: ele.statKey
        }
      })
      this.options.series[0].data = data
      // this.init()
    },
    options: {
      title: {
        // show:false
        text: '业务类型占比',
        bottom: 0,
        left: 'center',
        textStyle: {
          color: '#ffffff',
          fontSize: 20,
          fontWeight: 'normal'
        },
      },
      color: ['#47b9fa', '#0beaeb', '#8cffd2', '#0beaeb', '#4778fa'],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        show: false
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: 180,
          avoidLabelOverlap: false,
          label: {
            show: true,
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold'
              }
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          data: []
        }
      ]
    }
  },
  chart10: {
    el: echarts.init($('#chart10')[0]),
    init: function () {
      console.log(10);
      
      this.el.setOption(this.options)
    },
    setSeries: function (more) {
      var total = 0 
      more.forEach(function(ele){
        total+=ele.statValue
      })
      
      more.sort(function(pre, cur){
        return pre.statValue - cur.statValue
      })
      var data = [],
          data2 = []
      for(var i=0; i<more.length; i++){
        var ele = more[i]
        data[i] = {
          percent: Math.round(ele.statValue / total * 10000) / 100.00,
          value: ele.statValue,
          name: ele.statKey,
          num: ele.statValue
        }
        data2[i] = {
          name: ele.statKey,
          value: 20 + i * 20
        }
      }
      this.options.series[0].data = data2
      this.options.series[1].data = data     
      // this.init()
    },
    options: {
      title: {
        // show:false
        text: '运营商占比图',
        bottom: 2,
        left: 'center',
        textStyle: {
          color: '#ffffff',
          fontSize: 20,
          fontWeight: 'normal'
        },
        padding: [100, -100, 0, 0]
      },
      color: ['#50cf9d', '#00c5c6', '#24a6dc', '#0085ec'],
      tooltip: {
        show: false
      },
      legend: {
        show: false
      },
      series: [
        {
          name: '',
          type: 'funnel',
          itemStyle: {
            borderWidth: 0,
            opacity: 0.7
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{b}',
            textStyle: {
              fontSize: 14
            },
            emphasis: {
              textStyle: {
                fontSize: 15
              },
            }
          },
          labelLine: {
            show: false
          },
          data: []
        },
        {
          name: '占比',
          type: 'funnel',
          maxSize:'80%',
          itemStyle: {
            borderWidth: 0
          },
          label: {
            show: true,
            position: 'inside',
            formatter: function (obj) {
              return obj.data.percent+'%'
            },
            textStyle: {
              color: '#fff'
            },
            emphasis: {
              textStyle: {
                fontSize: 15
              },
              formatter: function (obj) {
                return obj.data.num
              },
            }
          },
          data: []
        }
      ]
    }
  },
}