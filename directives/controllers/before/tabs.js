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
          // Set selected on scope based on $scope.tabs length
          // Push into tabs title and scope
        };

        $scope.selectTab = function(index) {
          // Set on all tabs.scope selected based on currentIndex and index
        };

        $scope.isSelectedTab = function(index) {
          // is it currentIndex?
        };
      }
    };
  }]);
