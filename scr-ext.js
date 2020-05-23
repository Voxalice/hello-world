class testExt {
    getInfo() {
        return {
            "id": "testExt",
            "name": "testExt",
            "blocks": [{
                    "opcode": "doAThing",
                    "blockType": "reporter",
                    "text": "report [string]",
                    "arguments": {
                        "string": {
                            "type": "string",
                            "defaultValue": "test!"
                        }
                    }
                },
            }],
        "menus": {}
    };
    doAThing({string}) {
        return string;
    };
}

Scratch.extensions.register(new testExt());
