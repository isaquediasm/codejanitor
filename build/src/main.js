"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const noLongComments_1 = require("./rules/noLongComments");
const fs = require("fs");
function createRules(rules) {
    return rules.map((rule) => ({ context, issues }) => {
        const foundIssues = rule.create(context);
        return {
            context,
            issues: [...issues, foundIssues],
        };
    });
}
function readRepository() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const files = fs.readdirSync('./src/mock/');
        console.log(files);
    });
}
function init(rules) {
    readRepository();
}
init([noLongComments_1.default]);
//# sourceMappingURL=main.js.map