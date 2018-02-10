var EchartsInstance = []
var EchartsOptions = {
  chartLine: {
    el: $('.chart-l'),
    init: function (el, index) {
      var chart = echarts.init(el[index])
      EchartsInstance.push(chart)
      chart.setOption(this.options)
    },
    options: {
      grid: {
        top: '20%',
        left: '15%',
        bottom: '30%'
      },
      xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisLine: {
          lineStyle: {
            color: '#3A1BB4'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#7F8FA4',
        }
      },
      yAxis: {
        show: true,
        type: 'value',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        // axisLabel: {
        //   color: '#7F8FA4',
        // },
        axisLabel: {
          color: '#7F8FA4',
          formatter: '{value}%'
        },
        splitLine: {
          lineStyle: {
            color: '#3A1BB4',
          }
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        // formatter: function(){
        //   return '', '月'
        // }
        formatter:  '{b}月 <br /> 发信量: {c}% '
      },
      series: [{
        name: '',
        data: [138720, 12946, 45278, 27127, 18668, 19644, 59577, 57875, 7667, 8334, 9878, 13034],
        // data: (function () {
        //   var list = [1333, 679, 138, 96, 1304, 836, 1051, 2864, 13721, 61779, 67507, 48963, 15711, 15634, 45578, 46108, 45836, 32031, 20908, 12751, 7108, 3284, 3550, 4245],
        //     total = 0,
        //     data = []
        //   list.forEach(function (ele) {
        //     total += ele
        //   })
        //   list.forEach(function (ele) {
        //     var e = (ele / total * 100).toFixed(2)
        //     data.push(e)
        //   })
        //   return data
        // })()
        type: 'line',
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 1,
            // color: '#3AACEC'
            color: 'rgba(255, 255, 255, .0)'
            // color: 'rgba(58, 172, 236, 1)'
          }, {
            offset: 0,
            // color: '#4BFFFF'
            color: 'rgba(0, 255, 255, .8)'
          }])
        },
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#d4882b'
          }, {
            offset: .2,
            color: '#71aca8'
          }, {
            offset: .3,
            color: '#899f89'
          }, {
            offset: .4,
            color: '#39c9f6'
          }, {
            offset: .5,
            color: '#3896f2'
          }, {
            offset: .6,
            color: '#355eda'
          }, {
            offset: .8,
            color: '#3099ca'
          }, {
            offset: .9,
            color: '#2bb3b6'
          }, {
            offset: 1,
            color: '#1ca9c7'
          }])
        }
      }]
    }
  },
  chartRadar: {
    el: $('.chart-r'),
    init: function (el, index) {
      var chart = echarts.init(el[index])
      EchartsInstance.push(chart)
      chart.setOption(this.options)
    },
    options: {
      tooltip: {
        // formatter: '{a} <br /> {b}: {c}% '
        formatter: function(params){
          console.log(params);
          return '发信效果 <br/>' + '送达率: ' 
          + params.value[0] + '% <br/>' + '打开率: ' 
          + params.value[1] + '% <br/>' + '点击率: ' 
          + params.value[2] + '% <br/>' + '阅读转化率: '
          + params.value[3] + '% <br/>' + '独立打开率: ' 
          + params.value[4] + '% <br/>' + '独立点击率: ' 
          + params.value[5] + '%'
        }
      },
      radar: {
        radius: '70%',
        indicator: [
          { text: '送达率', max: 100 },
          { text: '打开率', max: 100 },
          { text: '点击率', max: 100 },
          { text: '阅读转化率', max: 100 },
          { text: '独立打开率', max: 100 },
          { text: '独立点击率', max: 100 }
        ],
        splitNumber: 4,
        splitArea: {
          areaStyle: {
            color: 'rgba(46, 3, 172, .6)',
            shadowBlur: 20,
            shadowColor: '#2e03ac',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
          }
        },
        axisLine: {
          lineStyle: {
            color: '#fff',
            opacity: .1
          }
        },
        splitLine: {
          lineStyle: {
            color: '#fff',
            opacity: .1
          }
        },
      },
      series: {
        name: '发信效果',
        type: 'radar',
        data: [{
          value: [0.958, 0.419, 0.014, 0.033, 0.102, 0.009],
          name: '发信效果',
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#4BFFFF',
            // shadowBlur: 10,
            // shadowColor: '',
            // shadowOffsetX: 0,
            // shadowOffsetY: 10,
            opacity: 1
          },
          areaStyle: {
            opacity: 0.7,
            color: new echarts.graphic.RadialGradient(.6, .6, 1, [
              {
                color: '#3AACEC',
                offset: 0.21
              },
              {
                color: 'rgba(75, 255, 255, 1)',
                // opacity: .7,
                offset: 1
              }
            ])
          }
        }]
      }
    }
  },
  chartSection3Top: {
    el: $('.section3-chart')[0],
    init: function () {
      var chart = echarts.init(this.el)
      EchartsInstance.push(chart)
      chart.setOption(this.options)
    },
    options: {
      title: {
        text: '情求及发送效果时段分布',
        textStyle: {
          color: '#D0EBFF',
          fontSize: 16,
          align: 'left',
          fontWeight: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        // formatter: function(){
        //   return '', '月'
        // }
        formatter: '{b}:00 <br /> 请求占比: {c0}% <br /> 送达占比: {c1}%<br /> 打开占比: {c2}%<br /> 点击占比: {c3}%'
      },
      grid: {
        left: '4%',
        right: 0,
        top: '20%',
        bottom: '20%'
      },
      legend: {
        top: 'bottom',
        left: 'center',
        type: 'plain',
        textStyle: {
          color: '#FFFFFF',
          fontSize: 12
        },
        itemGap: 30,
        // padding: [0, 20, 0, 0],
        data: [{
          name: '点击',
          icon: 'circle'
        }, {
          name: '打开',
          icon: 'circle'
        }, {
          name: '请求',
          icon: 'circle'
        }, {
          name: '送达',
          icon: 'circle'
        }]
      },
      xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
        axisLine: {
          lineStyle: {
            color: '#3A1BB4'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#7F8FA4',
        }
      },
      yAxis: {
        show: true,
        type: 'value',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#7F8FA4',
          formatter: '{value}%'
        },
        splitLine: {
          lineStyle: {
            color: '#3A1BB4',
          }
        }
      },
      series: [{
          name: '点击',
          data: [0.79, 1.08, 1.56, 0.96, 11.21, 10.10, 5.14, 1.10, 2.86, 14.43, 9.80, 4.10, 1.29, 2.25, 3.34, 4.38, 4.93, 4.10, 1.57, 4.61, 0.77, 2.84, 1.63, 5.14],
          type: 'line',
          showSymbol: false,
          lineStyle: {
            color: '#FFA100'
          },
          color: '#FFA100',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              // color: 'rgba(172, 132, 47, .0)'
              color: 'rgba(27, 16, 164, .5)'
            }, {
              offset: 0,
              color: 'rgba(172, 132, 47, .5)'
            }])
          }
        },{
          name: '打开',
          data: [1.03, 1.42, 2.09, 0.56, 13.57, 6.68, 4.49, 1.69, 3.25, 11.53, 8.99, 4.40, 2.23, 3.11, 4.66, 5.92, 6.28, 4.55, 1.94, 2.41, 0.80, 1.63, 1.27, 5.51],
          type: 'line',
          showSymbol: false,
          lineStyle: {
            color: '#0294FF'
          },
          color: '#0294FF',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              // color: 'rgba(10, 101, 226, .0)'
              color: 'rgba(27, 16, 164, .5)'
            }, {
              offset: 0,
              color: 'rgba(10, 101, 226, .5)'
            }])
          }
        },{
          name: '请求',
          data: [1.14, 1.36, 1.93, 0.68, 7.83, 7.62, 4.24, 1.34, 3.48, 13.51, 10.63, 4.53, 1.85, 2.58, 4.91, 5.36, 5.83, 5.06, 2.63, 2.02, 1.32, 1.85, 1.45, 6.88],
          type: 'line',
          showSymbol: false,
          lineStyle: {
            color: '#FF4712'
          },
          color: '#FF4712',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              // color: 'rgba(252, 90, 44, .0)'
              color: 'rgba(27, 16, 164, .5)'
            }, {
              offset: 0,
              color: 'rgba(252, 90, 44, .5)'
            }])
          },
        },{
          name: '送达',
          data: [1.22, 1.49, 2.22, 0.75, 7.47, 8.53, 4.61, 1.40, 3.39, 12.88, 9.52, 4.44, 1.80, 2.47, 4.69, 5.26, 6.06, 4.72, 2.19, 2.30, 1.48, 2.04, 1.52, 7.51],
          type: 'line',
          showSymbol: false,
          lineStyle: {
            color: '#25F4A8'
          },
          color: '#25F4A8',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              // color: 'rgba(87, 191, 182, .0)'
              color: 'rgba(27, 16, 164, .5)'
            }, {
              offset: 0,
              color: 'rgba(87, 191, 182, .5)'
            }])
          }
        }]
    }
  },
  chartSection3Down: {
    el: $('.section3-chart')[1],
    init: function () {
      var chart = echarts.init(this.el)
      EchartsInstance.push(chart)
      chart.setOption(this.options)
    },
    options: {
      title: {
        text: '阅读响应效率24小时分布图',
        textStyle: {
          color: '#D0EBFF',
          fontSize: 16,
          align: 'left',
          fontWeight: 'normal'
        }
      },
      grid: {
        left: '5%',
        right: 0,
        top: '20%',
        bottom: '20%',
        cotainLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}:00 <br /> 0-10min: {c0}% <br /> 10min-1h: {c1}%<br /> 1h-3h: {c2}%<br /> 3h-24h: {c3}%<br /> 24h: {c4}%'
      },
      legend: {
        top: 'bottom',
        left: 'center',
        type: 'plain',
        textStyle: {
          color: '#FFFFFF',
          fontSize: 12
        },
        itemGap: 30,
        // padding: [0, 20, 0, 0],
        data: [{
          name: '0-10min',
          icon: 'circle'
        }, {
          name: '10min-1h',
          icon: 'circle'
        }, {
          name: '1h-3h',
          icon: 'circle'
        }, {
          name: '3h-24h',
          icon: 'circle'
        }, {
          name: '24h',
          icon: 'circle'
        }]
      },
      xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        axisLine: {
          lineStyle: {
            color: '#3A1BB4'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#7F8FA4',
        }
      },
      yAxis: {
        type: 'value',
        show: true,
        type: 'value',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#7F8FA4',
          formatter: '{value}%'
        },
        splitLine: {
          lineStyle: {
            color: '#3A1BB4',
          }
        }
      },
      series: [{
        name: '0-10min',
        type: 'bar',
        barWidth: 10,
        stack: '总量',
        // itemStyle: {
        //   color: ['#FF4712', '#7978B2', '#FD9F00', '#027EFF', '#25F4A8'],
        // },
        color: '#FF4712',
        data: (function () {
          var list = [1333, 679, 138, 96, 1304, 836, 1051, 2864, 13721, 61779, 67507, 48963, 15711, 15634, 45578, 46108, 45836, 32031, 20908, 12751, 7108, 3284, 3550, 4245],
            total = 0,
            data = []
          list.forEach(function (ele) {
            total += ele
          })
          list.forEach(function (ele) {
            var e = (ele / total * 100).toFixed(2)
            data.push(e)
          })
          return data
        })()
      }, {
        name: '10min-1h',
        type: 'bar',
        stack: '总量',
        barWidth: 10,
        color: '#7978B2',
        data: (function(){
          var list = [10745, 2690, 855, 307, 8299, 11859, 12392, 16081, 67089, 173470, 274529, 188677, 80982, 44246, 114628, 141347, 146471, 112264, 52532, 34868, 15794, 13067, 10261, 18749],
              total = 0,
              data = []
          list.forEach(function(ele){
            total+=ele
          })
          list.forEach(function(ele){
            var e = (ele / total * 100).toFixed(2)
            data.push(e)
          })
          return data
        })()
      },{
        name: '1h-3h',
        type: 'bar',
        stack: '总量',
        barWidth: 10,
        color: '#FD9F00',
        data: (function () {
          var list = [18346, 12324, 4370, 1536, 880, 17523, 62394, 81686, 106844, 100021, 170397, 256588, 167456, 137467, 85010, 109964, 142493, 138149, 102277, 58230, 40295, 28889, 16662, 13907],
              total = 0,
              data = []
          list.forEach(function (ele) {
            total += ele
          })
          list.forEach(function (ele) {
            var e = (ele / total * 100).toFixed(2)
            data.push(e)
          })
          return data
        })()
      },{
        name: '3h-24h',
        type: 'bar',
        stack: '总量',
        barWidth: 10,
        color: '#027EFF', 
        data: (function () {
          var list = [66697, 36598, 24962, 20960, 20282, 28568, 59385, 198104, 696590, 829883, 512963, 332802, 216967, 344188, 392685, 335291, 294755, 254496, 173284, 156464, 169263, 168636, 156150, 106554],
            total = 0,
            data = []
          list.forEach(function (ele) {
            total += ele
          })
          list.forEach(function (ele) {
            var e = (ele / total * 100).toFixed(2)
            data.push(e)
          })
          return data
        })()
      },{
        name: '24h',
        type: 'bar',
        stack: '总量',
        barWidth: 10,
        color: '#25F4A8',
        data: (function () {
          var list = [139421, 86628, 63823,	54628,	54120,	64404,	99384,	182120,	572964,	898186,	779272,	616666,	342504,	448700,	553995,	543515,	533601,	456960,	292031,	250405,	257816,	271932,	252645,	197371],
              total = 0,
              data = []
          list.forEach(function (ele) {
            total += ele
          })
          list.forEach(function (ele) {
            var e = (ele / total*100).toFixed(2)
            data.push(e)
          })
          return data
        })()
      },]
    }
  }
}

