(function(){
  var Loader = {
    el: $('#loader'),
    ready: 0,
    hide: function(){
      Loader.el.hide()
    }
  }
  
  getWeekReport()
  getData(EchartsOptions)
  window.aLi2 = $('#SMS-last li')
  window.aLi1 = $('#email-rate li')
  window.star = function(num) {
    var a = 0
    var num = num || a;
    var aLi = window.aLi1 || window.aLi2;
    for (var i = 0; i < aLi.length; i++) {//i:0,1,2,3,4
      aLi1[i].className = i < num ? 'active' : '';
      aLi2[i].className = i < num ? 'active' : '';
    }
  }
  // var a = 0;
  window.hasCommented = false;
  getComment()
  function getComment() {
    $.ajax({
      type: 'GET',
      url: '/score/showUserScore.do?year=2017',
      async: false,
      success: function (p) {
        if (p.success === true) {
          if (p.data.userScore) {
            hasCommented = true
            $('.report-comment').text('SendCloud期待与您2018继续携手同行')
            // console.log();
            console.log(p.data.userScore.starLevel);
            
            star(p.data.userScore.starLevel)
          }
        }
      }
    }).done(function () {
      var aLi = window.aLi1 || window.aLi2;
      for (var i = 0; i < aLi.length; i++) {
        if (window.aLi1) {
          aLi1[i].index = i;
          aLi1[i].onmouseover = function () {
            if (!window.hasCommented) {
              star(this.index + 1)
            }
          };
          aLi1[i].onmouseout = function () {
            if (!window.hasCommented) {
              star();
            }
          }
          aLi1[i].onclick = function () {
            if (!window.hasCommented) {
              $.ajax({
                type: 'GET',
                url: '/score/addUserScore.do',
                async: false,
                data: {
                  year: '2017',
                  starLevel: this.index + 1
                },
                success: function (p) {
                  if (p.success === true) {
                    $('.report-comment').text('感谢您的评分！')
                    window.hasCommented = true
                  }
                }
              })
            }
          }
        }
        
        if(window.aLi2){
          aLi2[i].index = i;
          aLi2[i].onmouseover = function () {
            if (!window.hasCommented) {
              star(this.index + 1)
            }
          };

          aLi2[i].onmouseout = function () {
            if (!window.hasCommented) {
              star();
            }
          }

          aLi2[i].onclick = function () {
            if (!window.hasCommented) {
              $.ajax({
                type: 'GET',
                url: '/score/addUserScore.do',
                async: false,
                data: {
                  year: '2017',
                  starLevel: this.index + 1
                },
                success: function (p) {
                  if (p.success === true) {
                    $('.report-comment').text('感谢您的评分！')
                    window.hasCommented = true
                  }
                }
              })
            }
          }
        }
      }
    })
  }
  
  function getWeekReport() {
    $.ajax({
      type: 'GET',
      url: '/userAnnualReport/getUserEmailWeekReport.do?year=2017',
      async: true,
      success: function (p) {
        if (p.success === true) {
          var res = p.data.weeklySendData
          
          EchartsOptions.chart3.setSeries({
            xAxis: {
              data: res.sendDateList
            },
            series: [{
              name: '请求数',
              data: res.requestNumList
            }, {
                name: '送达数',
                data: res.deliveredNumList
            }]
          })

          var data = p.data
          $('.chart3-title').find('span').eq(0).text(toThousands(data.maxSendWeek))
          $('.chart3-title').find('span').eq(1).text(toThousands(data.maxRequestNum))
          $('.chart3-title').find('span').eq(2).text(toThousands(data.maxDelieverdNum))
          $('.chart3-title').find('span').eq(3).text(toThousands(data.avgRequestNum))
          $('.chart3-title').find('span').eq(4).text(toThousands(data.avgDeliveredNum))
        }
      }
    }).done(function () {
      Loader.ready +=1
      if (Loader.ready == 2) {
        Loader.hide()
        $.fn.fullpage.setAllowScrolling(true);
      }
    })
  }

  function getData(charts) {
    $.ajax({
      type: 'GET',
      url: '/userAnnualReport/getUserYearReportData.do?year=2017',
      async: true,
      success: function (p) {
        if (p.status == 1) {
          var res = p.data

          var hasEmail = res.email_delivered_user_count // 触达数
          if (hasEmail.length != 0 && hasEmail[0].statValue > 0) {
            // [x].statKey 邮箱名  statValue 邮箱数量
            var chart1_data = res.email_delivered_domain_count // [] 邮箱触达人群域名占比
            charts.chart1.setSeries(chart1_data)
            var forChart1TitleL = chart1_data[maxIndex(chart1_data, 'statValue')].statKey  
            $('.chart1-title-l').find('span').text(forChart1TitleL)

            var email_req_num = res.email_request_num[0].statValue // 请求数
            var email_delivered_num = res.email_delivered_num[0].statValue // 送达数
            var email_reached_num = res.email_delivered_user_count[0].statValue // 触达数
            charts.chart2.setSeries([email_req_num, email_delivered_num, email_reached_num])
            $('.chart1-title-r').find('span').eq(0).text(toThousands(email_req_num))
            $('.chart1-title-r').find('span').eq(1).text(toThousands(email_delivered_num))
            $('.chart1-title-r').find('span').eq(2).text(toThousands(email_reached_num))

            // [x].statKey 数字地域代码 statValue 阅读量
            var chart4_data = res.email_open_position // 阅读地域分布
            if (chart4_data.length > 0){
              var forChart4TitleL = chart4_data[maxIndex(chart4_data, 'statValue')].statKey || 0
              $('.chart4-title-l').find('span').text(forChart4TitleL)
              charts.chart4.setSeries(chart4_data)
            } else {
              $('#ForChart4').remove()
            }
           

            // [x].statKey 数字阅读端代码 statValue 阅读数量
            if (res.email_open_device.length > 0) {
              // [x].statKey 0-23代表时间 statValue 阅读量
              var chart5_data = res.email_open_hour // 24小时阅读分布
              charts.chart5.setSeries(chart5_data)
              var time = chart5_data[maxIndex(chart5_data, 'statValue')].statKey
              $('.chart5-title-r').find('span').text(setTime(time))

              var chart6_data = res.email_open_device // 阅读端分布
              charts.chart6.setSeries(chart6_data)

              // [x].statKey 数字品牌代码 statValue 阅读量
              var chart7_data = res.email_open_phone // 阅读移动品牌分布
              charts.chart7.setSeries(chart7_data)
            } else {
              $('#ForChart6').remove()
            }
            

            // [x].statKey 发送时长("10s~1min"，"1min~5min"，"3s~10s"，"<3s"，">5min") statValue 阅读量
            var email_duration = res.email_tran_duration // 触发邮件发送时长
            var email_batch_duration = res.email_batch_duration // 批量邮件发送时长
            if (email_duration.length > 0 && email_duration[0].statValue >0) {
              var total = 0,
                less = 0
              email_duration.forEach(function (ele) {
                total += ele.statValue
                if (ele.statKey === "3s~10s" || ele.statKey === "<3s" || ele.statKey === "10s~1min") {
                  less += ele.statValue
                }
              })
              $('.icon-title').eq(0).find('span').text(Math.round(less / total * 100, 0) + '%')
            } else {
              $('.icon-title').eq(0).find('span').text(0 + '%')
            }

            if (email_batch_duration.length > 0 && email_batch_duration[0].statValue >0) {
              var total = 0,
                less = 0
              email_batch_duration.forEach(function (ele) {
                total += ele.statValue
                if (ele.statKey === "<10min" || ele.statKey === "1h~3h" || ele.statKey === "10min~1h") {
                  less += ele.statValue
                }
              })
              $('.icon-title').eq(1).find('span').text(Math.round(less / total * 100, 0) + '%')
            } else {
              $('.icon-title').eq(1).find('span').text(0 + '%')
            }
          } else {
            $('#Email').remove()
          }   

          // 短信
          var hasSMS = res.sms_delivered_user_count // 触达

          if (hasSMS.length != 0 && hasSMS[0].statValue > 0) {
            $('#SMS-last').height(window.innerHeight - 70)
            $('#SMS-rate').height(350)
            $('#email-rate').remove()
            // [x].statKey 数字内容类型代码 statValue 短信量
            var chart8_data = res.sms_type // 短信内容分布
            charts.chart8.setSeries(chart8_data)
            var sms_req_num = res.sms_request_num[0].statValue // 请求
            var sms_delivered_num = res.sms_delivered_num[0].statValue // 送达
            var sms_reached_num = res.sms_delivered_user_count[0].statValue // 触达
            $('.chart8-title').find('span').eq(0).text(toThousands(sms_req_num))
            $('.chart8-title').find('span').eq(1).text(toThousands(sms_delivered_num))

            // [x].statKey 数字业务类型代码 statValue 短信量
            var chart9_data = res.msg_type // 短信业务分布
            charts.chart9.setSeries(chart9_data)

            // [x].statkey 运营商()  statValue 短信量
            var chart10_data = res.sms_delivered_operator_count // 触达运营商占比
            charts.chart10.setSeries(chart10_data)
            $('.chart10-title').find('span').text(toThousands(sms_reached_num))
          } else {
            $('#sms-one').remove()
            $('#sms-two').remove()
          }
        }
      }
    }).done(function () {
      Loader.ready += 1
      if (Loader.ready == 2) {
        Loader.hide()
        $.fn.fullpage.setAllowScrolling(true);
      }
    })
  } 
})()