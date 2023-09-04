chrome.sidePanel.setPanelBehavior({
        openPanelOnActionClick: !0
    }),
    function() {
        "use strict";
        chrome.runtime.onInstalled.addListener((function() {
            chrome.declarativeNetRequest.updateDynamicRules({
                removeRuleIds: [1],
                addRules: [{
                    id: 1,
                    priority: 1,
                    action: {
                        type: "modifyHeaders",
                        requestHeaders: [{
                            header: "Sec-Fetch-Dest",
                            operation: "set",
                            value: "document"
                        }, {
                            header: "Sec-Fetch-Mode",
                            operation: "set",
                            value: "navigate"
                        }, {
                            header: "Sec-Fetch-Site",
                            operation: "set",
                            value: "none"
                        }, {
                            header: "Referer",
                            operation: "remove"
                        }],
                        responseHeaders: [{
                            operation: "remove",
                            header: "X-Frame-Options"
                        }]
                    },
                    condition: {
                        initiatorDomains: [chrome.runtime.id],
                        requestDomains: ["vext.co.uk/treylyans"],
                        resourceTypes: ["sub_frame"]
                    }
                }]
            })
        }))
    }();