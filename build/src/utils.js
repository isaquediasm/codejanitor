"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
function pipe(...fns) {
    return (x) => fns.reduce((v, f) => f(v), x);
}
exports.pipe = pipe;
//# sourceMappingURL=utils.js.map