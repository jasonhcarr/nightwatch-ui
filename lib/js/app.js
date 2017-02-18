(function() {
  "use strict";

  angular.module('nightwatchUI', ['ui.router', 'LocalStorageModule'])
        .config(function($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise('/');

          $stateProvider.state('main', {
            url: '/',
            templateUrl: 'src/views/main.html',
            controller: 'mainCtrl as main'
          }).state('main.first', {
            url: 'first',
            templateUrl: 'src/views/first.html',
            controller: 'firstCtrl as first'
          }).state('main.second', {
            url: 'second',
            templateUrl: 'src/views/second.html',
            controller: 'secondCtrl as second'
          });
        });
})();
;angular.module('nightwatchUI').service('MainService', function(localStorageService) {

  var options = {
    'flow' : {
      'node' : {
        'option1' : 'Select1',
        'option2' : 'Select2'
      }
    }
  };

  function getOptions () {
    return options;
  }

  return {
    getOptions: getOptions
  };
});
;angular.module('nightwatchUI').controller('firstCtrl', function(MainService, $state, $scope) {
  var self = this;

  self.testingVariable = "First View";
});
;angular.module('nightwatchUI').controller('mainCtrl', function(MainService, $state, $scope) {
  var self = this;
  // var allOptions = MainService.getOptions();

  self.testingVariable = "Current Test";

  // self.nodeOptions = allOptions[self.flowName] ? ( allOptions[self.flowName][self.nodeName] ? allOptions[self.flowName][self.nodeName] : noResultString) : noResultString;
  self.testSteps = [];
  self.optionValue = "Possible Values";
  self.optionValues = [
    'Yes',
    'No'
  ];

  self.addStep = function() {
    var currentFlow = self.flowName;
    var currentNode = self.nodeName;
    var currentOption = self.nodeOption;
    var currentValue = self.optionValue;
    var newStep = currentFlow + " " + currentNode + " " + currentOption + " " + currentValue;
    self.testSteps.push(newStep);
  }
});
;angular.module('nightwatchUI').controller('secondCtrl', function(MainService, $state, $scope) {
  var self = this;

  self.testingVariable = "Second View";
});
