$(document).ready(function (){
  var Loader = {
    el: $('.loader'),
    init: function () {
      setTimeout(function () {
        $('.path1').css('fill-opacity', '1')
        $('.loader #plane1').attr('class', 'shake1')
      }, 1700)

      setTimeout(function () {
        $('.path2').css('fill-opacity', '1')
      }, 2400)

      setTimeout(function () {
        $('.path3').css('fill-opacity', '1')
      }, 1400)

    },
    hide: function () {
      setTimeout(function () {
        Loader.el.addClass('hidden');
        var ele = $('#c_n1')
        ele.remove()
      }, 4000);
    }
  }

  $(function () {
    Loader.init()
    $.fn.fullpage.setAllowScrolling(false);
  })
  var chartsValue = [{
    // line: [138720, 12946, 45278, 27127, 18668, 19644, 59577, 57875, 7667, 8334, 9878, 13034],
    line: ["33.13", "3.09", "10.81", "6.48", "4.46", "4.69", "14.23", "13.82", "1.83", "1.99", "2.36", "3.11"],
    radar: [0.958484982, 0.41864115, 0.013850325, 0.033084004, 0.102368379, 0.008774021]
  }, {
    // line: [4306519, 5025590, 5725026, 6962555, 7182916, 7363532, 4124973, 5148180, 4274599, 3746744, 6614727, 5134031],
    line: ["6.56", "7.66", "8.73", "10.61", "10.95", "11.22", "6.29", "7.85", "6.52", "5.71", "10.08", "7.83"],
    radar: [0.909223713, 0.149778869, 0.044053256, 0.294121972, 0.097000073, 0.019557641]
  }, {
    // line: [714874, 277726, 541006, 397085, 668884, 515591, 730082, 774215, 605179, 614033, 473126, 807541],
    line: ["10.04", "3.90", "7.60", "5.58", "9.40", "7.24", "10.25", "10.87", "8.50", "8.62", "6.65", "11.34"],
    radar: [0.91077167, 0.273420578, 0.045606056, 0.166798185, 0.119680233, 0.024153101]
  }, {
    // line: [5533589, 12960900, 15022810, 14191578, 13542806, 11328624, 11711493, 12999326, 10990540, 9736682, 15460276, 15015992],
    line: ["3.73", "8.73", "10.12", "9.56", "9.12", "7.63", "7.89", "8.75", "7.40", "6.56", "10.41", "10.11"],
    radar: [0.888475984, 0.218644677, 0.043365405, 0.198337346, 0.126859829, 0.020381653]
  }, {
    // line: [3576914, 3071327, 4110536, 3549368, 2947095, 2797896, 3222032, 2821490, 2500366, 2354385, 2820077, 2456230],
    line: ["9.87", "8.48", "11.35", "9.80", "8.13", "7.72", "8.89", "7.79", "6.90", "6.50", "7.78", "6.78"],
    radar: [0.952180452, 0.214127869, 0.029001642, 0.135440762, 0.138625083, 0.017139947]
  }, {
    // line: [52812, 44150, 253230, 77184, 78939, 47405, 78745, 53432, 68486, 74847, 122389, 87602],
    line: ["5.08", "4.25", "24.37", "7.43", "7.60", "4.56", "7.58", "5.14", "6.59", "7.20", "11.78", "8.43"],
    radar: [0.906093122, 0.510899705, 0.355396116, 0.695627953, 0.263490688, 0.243266205]
  }]

  chartsValue.forEach(function (ele) {
    var arr = ele.radar
    var data = []
    arr.forEach(function (i) {
      var v = (i * 100).toFixed(2)
      data.push(v)
    })
    ele.radar = data
  })

  $('#wrap').fullpage({
    direction: 'vertical',
    scrollingSpeed: 500,
    scrollOverflow: true,
    css3: true,
    verticalCentered: false,
    onLeave: function (a, b) {
      // 进入动画
      if (a < b) {
        var str = '.section' + (b - 1) + ' .section-title-wrap'
        $(str).addClass('animated fadeInLeft')
        setTimeout(function () {
          $(str).removeClass('fadeInLeft')
        }, 1000)

        // 移出动画
        var str2 = '.section' + (b - 2) + ' .section-title-wrap'
        $(str2).addClass('animated fadeOutLeft')
        setTimeout(function () {
          $(str2).removeClass('fadeOutLeft')
        }, 1000)

        if (b == 2) {
          $('.tip').addClass('animated zoomIn')
        }
        if (b == 3) {
          for (var i = 1; i < 5; i++) {
            $('.section2-text-' + i).addClass('animated zoomIn')
          }
        }
        if (b == 4) {
          EchartsOptions.chartSection3Top.init()
          EchartsOptions.chartSection3Down.init()
        }
        if (b == 5) {
          var list1 = $('.child1 .bar-line');
          var list2 = $('.child2 .bar-line');
          var list3 = $('.child3 .bar-line');

          [].forEach.call(list1, function (ele, i) {
            $(ele).addClass('line' + (i + 1))
          });
          [].forEach.call(list2, function (ele, i) {
            $(ele).addClass('line' + (i + 1))
          });
          [].forEach.call(list3, function (ele, i) {
            $(ele).addClass('line' + (i + 1))
          })
        } else {
          var str = '.section' + (b - 1) + ' .section-title-wrap'
          $(str).addClass('animated fadeInLeft')
        }
      }
    },
    afterLoad: function () {
      $('.point-inner').on('mouseover', function () {
        $('.point-inner').removeClass('active');
        $(this).addClass('active')
      })
      $('.point-inner').on('mouseout', function () {
        $('.point-inner').removeClass('active');
      })
    }
  });
  
  $.fn.fullpage.setAllowScrolling(false);

  // swiper
  var chartL = EchartsOptions.chartLine
  var chartR = EchartsOptions.chartRadar
  var mySwiper = new Swiper('.swiper-container', {
    initialSlide: 0,
    speed: 500,
    // grabCursor: false,
    allowTouchMove: false,
    autoplay: true,
    on: {
      slideChange: function () {
        var i = this.activeIndex

        chartL.options.series[0].data = chartsValue[i].line
        chartR.options.series.data[0].value = chartsValue[i].radar

        chartL.init(chartL.el, i);
        chartR.init(chartR.el, i);
        $('ul .swiper-btn').removeClass('active')
        $($('ul .swiper-btn')[i]).addClass('active')
      },
    },
  })
  mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
  }
  mySwiper.el.onmouseleave = function () {
    mySwiper.autoplay.start();
  }
  chartL.options.series[0].data = chartsValue[0].line
  chartR.options.series.data[0].value = chartsValue[0].radar

  chartL.init(chartL.el, 0);
  chartR.init(chartR.el, 0);
  

  window.onresize = _.debounce(function(){
    var h = $(window).height()
    $('.section-con').height(h);
    EchartsInstance.forEach(function(ele){
      ele.resize()
    })
  }, 1000, false)
 
  
  var forMouseEnter = function (e, i) {
    var i = $(e.target).index()
    $('ul .swiper-btn').removeClass('active')
    $($('ul .swiper-btn')[i]).addClass('active')
    mySwiper.slideTo(i, 300, false)
  }

  var forSwiper = _.debounce(forMouseEnter, 300, false)
  $('.swiper-controller ul').on('mouseenter', 'li', forSwiper)

  window.onload = function(){
    Loader.hide()
    setTimeout(function () {
      $.fn.fullpage.setAllowScrolling(true);
    }, 5000);
  }
})