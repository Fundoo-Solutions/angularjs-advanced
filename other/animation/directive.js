angular.module('stockMarketApp').directive('simpleStockRepeat',
    ['$animate', function($animate) {
        return {
            restrict: 'A',
            template: '' +
                '<div class="container">' +
                '<div>'+
                '  <a href="" ng-click="previous()" ng-show="hasPrevious()"  style="float:left;">Previous</a> ' +
                '  <a href="" ng-click="next()" ng-show="hasNext()" style="float:right;">Next</a> ' +
                '</div>'+
                '  <div class="carousel"></div> ' +

                '</div>',
            // Capture and replace the entire element
            // instead of just its content
            transclude: true,
            // A $transclude is passed in as the fifth
            // argument to the link function
            link: function($scope, $element, $attrs, ctrl, $transclude) {
                var myArray = $scope.$eval($attrs.simpleStockRepeat);
                var childScope;
                var currentIndex = 0;
                $scope.next = function() {
                    $animate.leave(instance);
                    currentIndex++;
                    instance = $transclude($scope.$new(),
                        function(clonedElement, newScope) {
                            childScope = newScope;
                            childScope.stock = myArray[currentIndex];
                        });
                    instance.attr("id", 123)
                    $animate.enter(instance, container);

                };
                $scope.hasNext = function() {
                    return currentIndex < myArray.length - 1;
                };
                $scope.previous = function() {
                    $animate.leave(instance);
                    instance = $transclude($scope.$new(),
                        function(clonedElement, newScope) {
                            childScope = newScope;
                            childScope.stock = myArray[0];
                        });
                    instance.attr("id1", 23)
                    currentIndex--;
                    childScope.stock = myArray[currentIndex];
                    $animate.enter(instance, container);
                };
                $scope.hasPrevious = function() {
                    return currentIndex > 0;
                };
                var container = $element.find('.carousel');

                var instance = $transclude($scope.$new(),
                    function(clonedElement, newScope) {
                        childScope = newScope;
                        childScope.stock = myArray[0];
                    });
                // Add it to our container
                $animate.enter(instance, container);


            }
        };
    }]);