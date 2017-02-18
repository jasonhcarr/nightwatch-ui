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
;angular.module('nightwatchUI').service('ParameterService', function(localStorageService) {
    var info = {
        UAT_Custom_Testing: {
            Custom_Testing_001: {
                labels: [{
                    label: 'Are you testing a Specific Test Case that has been flagged as Custom?',
                    options: [{
                            value: 'Yes'
                        },
                        {
                            value: 'No'
                        }
                    ]
                }]
            },
            Select_Custom_Testing_001: {
                labels: [{
                    label: 'Select the Specific Test Case Number you are working from the list below',
                    options: [{
                            value: 'Fail66271'
                        },
                        {
                            value: '91683'
                        },
                        {
                            value: '90802'
                        },
                        {
                            value: '90674'
                        },
                        {
                            value: '89401'
                        },
                        {
                            value: '89035'
                        },
                        {
                            value: 'Trinity_getAsset'
                        },
                        {
                            value: '83753'
                        },
                        {
                            value: '92919'
                        },
                        {
                            value: '80371'
                        }
                    ]
                }]
            }
        },
        UA2_SATOP_CombinedIBCallAndITP: {
            Contact_Method: {
                labels: [{
                    label: 'Select the type of issue to work from the choices below',
                    options: [{
                            value: 'Inbound Call/Chat',
                            subOptions: [{
                                label: 'How were you contacted to begin this workflow?',
                                options: [{
                                        value: 'Phone Call'
                                    },
                                    {
                                        value: 'SmartChat'
                                    },
                                    {
                                        value: 'Right Touch Chat'
                                    }
                                ]
                            }]
                        },
                        {
                            value: 'Get the Next Task',
                        },
                        {
                            value: 'Work a Specific Task Assigned by My Manager or Team Lead',
                        },
                        {
                            value: 'Work Escalated Off Hours Task',
                        },
                        {
                            value: 'UAT Add Task',
                        }
                    ]
                }]
            }
        },
        UA2_SA_SUBAUTO_CCMSkillGroup: {
            ManualSkillGroupForm: {
                labels: [{
                    label: 'Skill Group',
                    options: [{
                            value: 'BVOIP_AVOICS_HD'
                        },
                        {
                            value: 'BVOIP_IPF_HD'
                        },
                        {
                            value: 'BVOIP_V_SB_HD'
                        },
                        {
                            value: 'BVOIP_VDNA_HD'
                        },
                        {
                            value: 'BVOIP_JP_Morgan'
                        },
                        {
                            value: 'GCSC_Global_EN_Q'
                        },
                        {
                            value: 'GCSC_G_C1_E_L3Q'
                        },
                        {
                            value: 'MIS_Gov'
                        },
                        {
                            value: 'MIS_Tier1'
                        },
                        {
                            value: 'UA_Custom_Brazil'
                        },
                        {
                            value: 'UA_BusinessServices'
                        },
                        {
                            value: 'UA_Conferencing'
                        },
                        {
                            value: 'UA_Direct'
                        },
                        {
                            value: 'US_Escalation'
                        },
                        {
                            value: 'UA_GAMMA'
                        },
                        {
                            value: 'ABS_Virtual_DS1'
                        },
                        {
                            value: 'UA_General - VT'
                        },
                        {
                            value: 'UA_NSD'
                        },
                        {
                            value: 'USC2_AH_*'
                        },
                        {
                            value: 'Trinity_OrdersMACDs'
                        },
                        {
                            value: 'UA_Special'
                        },
                        {
                            value: 'UA_COLLABORATE_EXECUTIVE'
                        },
                        {
                            value: 'UA_CABS_BMP_Status'
                        },
                        {
                            value: 'UA_CABS_BMPSTATUS'
                        },
                        {
                            value: 'UA_WIFI_IPE01_Tier_1'
                        },
                        {
                            value: 'UA_WIFI_TOC_Disney'
                        },
                        {
                            value: 'UA_WIFI_Hilton_Rollo'
                        },
                        {
                            value: 'UA_WIFI_Stay_Cnnct_Pri'
                        },
                        {
                            value: 'UA_WIFI_Stay_Connected'
                        },
                        {
                            value: 'UA_WIFI_NOC_Info'
                        },
                        {
                            value: 'UA_WIFI_NOCRM_1_MCD'
                        },
                        {
                            value: 'Other'
                        },
                    ]
                }]
            }
        },
        UA2_SA_SUBMAN_DataCollectionFrontEnd: {
            NewExistingRedesign: {
                labels: [{
                        label: 'First Name'
                    },
                    {
                        label: 'Last Name'
                    },
                    {
                        label: 'Phone Number'
                    },
                    {
                        label: 'Email Address'
                    },
                    {
                        label: 'Is the caller calling about a new issue or an existing issue?',
                        options: [{
                                value: 'New Issue',
                                subOptions: [{
                                        label: 'Problem Description'
                                    },
                                    {
                                        label: 'Asset'
                                    }
                                ]
                            },
                            {
                                value: 'Existing Issue'
                            }
                        ]
                    }
                ]
            }
        },
        UA2_SA_Submilestone_RNT_CreateTicket_ExistingTicketLookup: {
            AOTS_Ticket_Data: {
                labels: [{
                    label: 'Is the the correct Asset?',
                    options: [{
                            value: 'Yes, open a ticket on this asset'
                        },
                        {
                            value: 'No, search again using additional data'
                        },
                        {
                            value: 'No, the asset cannot be located'
                        }
                    ]
                }]
            }
        },
        UA2_SA_SUBMAN_TroubleTypeForms: {
            TroubeType_Form_0020: {
                labels: [{
                    label: 'Select the Trouble Type using the options below.',
                    options: [{
                            value: 'Data Issue',
                            subOptions: [{
                                label: 'Data Issue option',
                                options: [{
                                        value: 'Site is completely without service'
                                    },
                                    {
                                        value: 'Site is experiencing Partial or Intermittent connectivity'
                                    },
                                    {
                                        value: 'Packet Loss or Latency'
                                    },
                                    {
                                        value: 'Contact needs to open a DNS Request'
                                    },
                                    {
                                        value: 'Site or users experiencing issues accessing the Internet or Web Sites'
                                    },
                                    {
                                        value: 'Single user or single application issue'
                                    },
                                    {
                                        value: 'Information or Other Request'
                                    }
                                ]
                            }]
                        },
                        {
                            value: 'Customer is informing AT&T of maintenance activity'
                        },
                        {
                            value: 'Move, Add, Change, Delete (MACD)'
                        },
                        {
                            value: 'Customer is requesting a Scrubbed Router Configuration'
                        },
                        {
                            value: 'Information or Other Request'
                        }
                    ]
                }]
            }
        },
        UA2_SA_SUBAUTO_ListExistingAOTSTickets: {
            List_Existing_Tickets: {
                labels: [{
                    label: 'Would you like to operate on one of the existing tickets or create a new ticket?',
                    options: [{
                            value: 'Update the ticket'
                        },
                        {
                            value: 'Escalate the ticket'
                        },
                        {
                            value: 'Create a new ticket for the customer'
                        }
                    ]
                }]
            }
        },
        FE_LConForm: {
            Universal_LCON_Form: {
                labels: [{
                        label: 'Problem Description or Information Requested'
                    },
                    {
                        label: 'Has the customer given authorization to dispatch?',
                        options: [{
                                value: 'Yes'
                            },
                            {
                                value: 'No'
                            }
                        ]
                    },
                    {
                        label: 'Is the customer able to provide site access hours?',
                        options: [{
                                value: 'Yes',
                                subOptions: [{
                                    label: 'Enter the customer provided Contact Hours below.',
                                    options: [{
                                            value: '24 x 7 (Monday-Sunday, 00:00-23:59)'
                                        },
                                        {
                                            value: '8 x 7 (Monday-Sunday, 8:00-17:00)'
                                        },
                                        {
                                            value: '24 x 5 (Monday-Friday, 00:00-23:59)'
                                        },
                                        {
                                            value: '8 x 5 (Monday-Friday, 8:00-17:00)'
                                        },
                                        {
                                            value: 'Manual Entry Using Menu Below'
                                        }
                                    ]
                                }]
                            },
                            {
                                value: 'No'
                            }
                        ]
                    },
                    {
                        label: 'Has the customer given authorization to test?',
                        options: [{
                                value: 'Yes'
                            },
                            {
                                value: 'No'
                            }
                        ]
                    },
                    {
                        label: 'Has power to equipment been confirmed by the customer?',
                        options: [{
                                value: 'Yes'
                            },
                            {
                                value: 'No'
                            },
                            {
                                value: 'Undetermined'
                            }
                        ]
                    }
                ]
            }
        }
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
