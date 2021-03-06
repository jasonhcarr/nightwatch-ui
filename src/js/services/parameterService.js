angular.module('nightwatchUI').service('ParameterService', function(localStorageService) {
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
            },
            LCON_Correct: {
                labels: [{
                    label: 'Is the LCON information correct?',
                    options: [{
                            value: 'Yes'
                        },
                        {
                            value: 'No'
                        }
                    ]
                }]
            }
        },
        UA2_SA_SUBMAN_LCONNInfoLogEntry: {
            Question: {
                labels: [{
                    label: 'Do you have enough detail in the Problem Description?',
                    options: [{
                            value: 'Yes'
                        },
                        {
                            value: 'No'
                        }
                    ]
                }]
            }
        },
        UA2_SA_Submilestone_RNT_CreateTicket_InitialHandling: {
            Provide_TicketNum: {
                labels: [{
                    label: 'Provide the caller with the Main Ticket Number...',
                    options: [{
                        value: 'Continue'
                    }]
                }]
            }
        },
        UA2_SASUBMAN_VoiceDataIssues: {
            Data_Details_0010: {
                labels: [{
                    label: 'Please enter a detailed description of the issue that is being experienced if it has not already been provided.'
                }]
            }
        },
        UA2_SA_SUBAUTO_CheckDeviceCktHealthInbound: {
            Display_HealthCheck_0010: {
                labels: [{
                    label: 'The following show the detailed results of the Health Check tests.',
                    options: [{
                        value: 'Continue'
                    }]
                }]
            }
        },
        UA2_SA_Submilestone_RNT_WrapUp_Call: {
            Close_Call_0010: {
                labels: [{
                    label: 'Click continue to perform the closing operations for this task.',
                    options: [{
                        value: 'Continue'
                    }]
                }]
            }
        },
        UA2_SA_Milestone_FinalLogUpdateAndLockTicket: {
            Additional_Logs: {
                labels: [{
                    label: 'Are there any additional details that need to be added to the log?',
                    options: [{
                            value: 'Yes'
                        },
                        {
                            value: 'No'
                        }
                    ]
                }]
            }
        },
        UA2_SA_SUBAUTO_UATDebug: {
          Flow_Info_0010: {
            labels: [{
              label: 'Goliath/3i Info',
              options: [{
                value: 'Continue'
              }]
            }]
          }
        },
        Continue: 'Continue to the end of the flow'
    };

    function getFlows() {
        return Object.keys(info);
    }

    function getNodes(flow) {
        return Object.keys(info[flow]);
    }

    function getLabels(flow, node) {
        return info[flow][node].labels;
    }

    return {
        getFlows: getFlows,
        getNodes: getNodes,
        getLabels: getLabels
    };
});
