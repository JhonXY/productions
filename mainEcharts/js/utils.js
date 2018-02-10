function toThousands(num){
  var num = (num || 0).toString(), result = '';
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) { result = num + result; }
  return result;
}  

function maxValue(data, attr){
  var newArray = []
  for (var i = 0; i<data.length; i++) {
    newArray.push(data[i][attr])
  }
  return Math.max.apply(Math, newArray);
}

function maxIndex(data, attr){
  var newArray = []
  for (var i = 0; i < data.length; i++) {
    newArray.push(data[i][attr])
  }
  var value = Math.max.apply(Math, newArray);
  return newArray.indexOf(value)
}

function setTime(time){
  time = parseInt(time)
  return (time + ':00--' + (time+=2)+ ':00')
}

function provinceForShort(province){
    switch(true){
      case province === '新疆维吾尔自治': return '新疆';
      case province === '内蒙古自治': return '内蒙古';
      case province === '广西壮族自治': return '广西';
      case province === '西藏自治': return '西藏';
      case province === '宁夏回族自治': return '宁夏';
      case province === '香港特别行政': return '香港';
      case province === '澳门特别行政': return '澳门';
      default : return province;
    }
}