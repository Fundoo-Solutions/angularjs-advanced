angular.module('stockMarketApp')
  .directive('tabs', [function() {
    return {
      restrict: 'E',
       template: '<div class="tab-headers">' +
        '  <div ng-repeat="tab in tabs"' +
        '       ng-click="selectTab($index)"' +
        '       ng-class="{selected: isSelectedTab($index)}">' +
        '     <span ng-bind="tab.title"></span>' +
        '  </div>' +
        '</div>' +
        '<div></div> ',
      controller: function($scope) {
        var currentIndex = 0;
        $scope.tabs = [];
        this.registerTab = function(title, scope) {

        };

        $scope.selectTab = function(index) {

        };

        $scope.isSelectedTab = function(index) {

        };
      }
    };
  }]);
