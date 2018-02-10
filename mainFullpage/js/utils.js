var _ = {
  now: Date.now || function () {
    return new Date().getTime();
  },
  debounce: function (func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function () {
      var last = _.now() - timestamp;
      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout)
            context = args = null;
        }
      }
    };
    return function () {
      context = this;
      args = arguments;

      timestamp = _.now();
      var callNow = immediate && !timeout;

      if (!timeout)
        timeout = setTimeout(later, wait);

      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    }
  },
  returnFloat: function(value){
    var value = Math.round(parseFloat(value) * 100) / 100;
    var xsd = value.toString().split(".");
    if (xsd.length == 1) {
      value = value.toString() + ".00";
      return value;
    }
    if (xsd.length > 1) {
      if (xsd[1].length < 2) {
        value = value.toString() + "0";
      }
      return value+'';
    }
  }
} 