angular.module('nightwatchUI').controller('mainCtrl', function(MainService, ParameterService, $state, $scope) {
  var self = this;
  // var allOptions = MainService.getOptions();

  self.testingVariable = "Current Test";
  self.testSteps = [];
  self.allFlows = ParameterService.getFlows();

  self.stopFlowSearch = function() {
    setTimeout(function() {
      self.searchingFlows = false;
      $scope.$apply();
    }, 100);
  };

  self.stopNodeSearch = function() {
    setTimeout(function() {
      self.searchingNodes = false;
      $scope.$apply();
    }, 100);
  };

  self.stopOptionSearch = function() {
    setTimeout(function() {
      self.searchingOptions = false;
      $scope.$apply();
    }, 100);
  };

  self.stopValueSearch = function() {
    setTimeout(function() {
      self.searchingValues = false;
      $scope.$apply();
    }, 100);
  };

  self.stopSubOptionSearch = function() {
    setTimeout(function() {
      self.searchingSubOptions = false;
      $scope.$apply();
    }, 100);
  };

  self.stopSubValueSearch = function() {
    setTimeout(function() {
      self.searchingSubValues = false;
      $scope.$apply();
    }, 100);
  };

  self.selectFlow = function(flow) {
    self.flowName = flow;
    self.flowNodes = ParameterService.getNodes(flow);
  };

  self.selectNode = function(node) {
    self.nodeName = node;
    self.nodeLabels = ParameterService.getLabels(self.flowName, node);
  };

  self.selectOption = function(option) {
    self.nodeOption = option.label;
    self.optionValues = option.options;
  };

  self.selectValue = function(value) {
    self.optionValue = value.value;
    if (value.subOptions) {
      self.subOptionsPresent = true;
      self.nodeSubLabels = value.subOptions;
    }
  };

  self.selectSubOption = function(subOption) {
    self.nodeSubOption = subOption.label;
    self.subValues = subOption.options;
  };

  self.selectSubValue = function(subValue) {
    self.subValue = subValue.value;
  };

  self.addStep = function() {
    var newStep = {
      flow: self.flowName,
      node: self.nodeName,
      option: self.nodeOption,
      value: self.optionValue,
      subOption: self.nodeSubOption,
      subValue: self.subValue
    };
    self.testSteps.push(newStep);
    self.flowName = '';
    self.nodeName = '';
    self.nodeOption = '';
    self.optionValue = '';
    self.subOptionsPresent = false;
    self.nodeSubOption = '';
    self.subValue = '';
  };
});
