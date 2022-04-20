"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings = {
    severityLevel: 1,
    max: 3,
};
exports.default = {
    name: 'NoLongComments',
    type: 'warning',
    severityLevel: 1,
    create(program) {
        if (!program.comments)
            return null;
        function findCommentsDepth(comments) {
            const { start, end } = comments.loc;
            return end.line - start.line;
        }
        function analyseComment(node) {
            const depth = findCommentsDepth(node);
            if (depth > MAX_DEPTH) {
                return {
                    issue: {
                        message: `Comment has ${depth} lines. Max allowed is ${MAX_DEPTH}`,
                        severityLevel: settings.severityLevel,
                    },
                    node,
                };
            }
            return node;
        }
        const MAX_DEPTH = settings.max;
        const comments = program === null || program === void 0 ? void 0 : program.comments;
        const analysedComments = comments.map(analyseComment);
        return analysedComments;
    },
};
//# sourceMappingURL=noLongComments.js.map