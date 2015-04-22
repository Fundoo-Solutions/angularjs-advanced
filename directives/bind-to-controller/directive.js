angular.module('stockMarketApp')
  .directive('stockWidget', [function() {
    return {
      templateUrl: 'stock.html',
      restrict: 'AE',
      scope: {
        stockData: '='
      },
      controller: function() {
        var self = this;
        self.getChange = function(stock) {
          return Math.ceil(((stock.price - stock.previous) /
          stock.previous) * 100);
        }
      },
      controllerAs: 'ctrl',
      bindToController: true
    };
  }]);
