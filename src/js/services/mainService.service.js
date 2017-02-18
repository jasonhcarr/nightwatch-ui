angular.module('nightwatchUI').service('MainService', function(localStorageService) {

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
