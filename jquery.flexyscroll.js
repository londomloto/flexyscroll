

(function($){

var Flexyscroll = function(element, options) {
  this.element = $(element);
  this.init(options);
};

Flexyscroll.defaults = {
  itemHeight: 30,
  scrollDelay: 30,
  scrollMode: 'throttle' // 'debounce'
};

Flexyscroll.prototype = {
  init: function(options) {
    this.options = $.extend(true, {}, Flexyscroll.defaults, options || {});
  },
  render: function(data) {
    
  }
};

$.fn.flexyscroll = function() {
  var 
    args = $.makeArray(arguments),
    init = $.type(args[0]) !== 'string';
    
  var func, list;
  
  list = this.each(function(){
    var obj = $.data(this, 'flexyscroll');
    if ( ! obj) {
      $.data(this, 'flexyscroll', (obj = new Flexyscroll(this, args[0])));
    }
    if ( ! init) {
      var method = args.shift();
      if (obj[method] !== undefined) {
        func = obj[method].apply(method, args);
      } else {
        throw new Error('Flexyscroll: method `' + method + '` doesn\'t exists'); 
      }
    }
  });
  
  return init ? list : func;
};

}(jQuery))
