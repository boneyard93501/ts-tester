import { v5_callFunction as callFunction$$, v5_registerService as registerService$$, } from '@fluencelabs/js-client.api';
export function registerTService() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    registerService$$(args, {
        "defaultServiceId": "two-mpc",
        "functions": {
            "tag": "labeledProduct",
            "fields": {
                "generateSessionId": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "nil"
                    },
                    "codomain": {
                        "tag": "unlabeledProduct",
                        "items": [
                            {
                                "tag": "scalar",
                                "name": "string"
                            }
                        ]
                    }
                }
            }
        }
    });
}
// Functions
export var generate_session_id_script = "\n                    (xor\n                     (seq\n                      (seq\n                       (call %init_peer_id% (\"getDataSrv\" \"-relay-\") [] -relay-)\n                       (call %init_peer_id% (\"two-mpc\" \"generateSessionId\") [] session_id)\n                      )\n                      (xor\n                       (call %init_peer_id% (\"callbackSrv\" \"response\") [session_id])\n                       (call %init_peer_id% (\"errorHandlingSrv\" \"error\") [%last_error% 1])\n                      )\n                     )\n                     (call %init_peer_id% (\"errorHandlingSrv\" \"error\") [%last_error% 2])\n                    )\n    ";
export function generate_session_id() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return callFunction$$(args, {
        "functionName": "generate_session_id",
        "arrow": {
            "tag": "arrow",
            "domain": {
                "tag": "labeledProduct",
                "fields": {}
            },
            "codomain": {
                "tag": "unlabeledProduct",
                "items": [
                    {
                        "tag": "scalar",
                        "name": "string"
                    }
                ]
            }
        },
        "names": {
            "relay": "-relay-",
            "getDataSrv": "getDataSrv",
            "callbackSrv": "callbackSrv",
            "responseSrv": "callbackSrv",
            "responseFnName": "response",
            "errorHandlingSrv": "errorHandlingSrv",
            "errorFnName": "error"
        }
    }, generate_session_id_script);
}
/* eslint-enable */ 
