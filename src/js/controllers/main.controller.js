angular.module('nightwatchUI').controller('mainCtrl', function(MainService, $state, $scope) {
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
