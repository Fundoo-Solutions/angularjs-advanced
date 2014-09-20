var app = angular.module('FundooModalApp', ['fundoo.services'])
  .controller('MainCtrl', ['$scope', 'createDialog', function($scope, createDialogService) {
    $scope.launchInlineModal = function() {
      createDialogService({
        id: 'simpleDialog',
        template:
          '<div class="row-fluid">' +
          ' <h3>This is how the Simple Modal was launched</h3>' +
          ' <div>' +
          '   <div class="codebox">' +
          '<pre>' +
          'createDialog({\n' +
          '    id: "inlineDialog",\n' +
          '    <span style="color:red">template: "&lt;div>&lt;!--template HTML here...-->&lt;/div>"</span>\n' +
          '    title: "A Inline Modal Dialog",\n' +
          '    backdrop: true,\n' +
          '    success: {\n' +
          '        label: "Yay",\n' +
          '        fn: function(){\n' +
          '            console.log("Inline modal closed");\n' +
          '        }\n' +
          '    }\n' +
          '});\n' +
          '</pre>\n' +
          '   </div>\n' +
          ' </div>\n' +
          '</div>',
        title: 'A Inline Modal Dialog',
        backdrop: true,
        success: {label: 'Success'}})
        .then(function() {
          console.log('Inline modal closed');
        });
    };
    $scope.launchSimpleModal = function() {
      createDialogService('simpleModal.html', {
        id: 'simpleDialog',
        title: 'A Simple Modal Dialog',
        backdrop: true,
        success: {label: 'Success'}
      }).then(function() {
        console.log('Simple modal closed');
      });
    };
  }]);
