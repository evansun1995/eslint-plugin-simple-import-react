/**
 * @fileoverview Prevent missing React when using JSX
 * @author Glen Mailer
 */

const variableUtil = require('../util/variable.js');
const pragmaUtil = require('../util/pragma.js');
const docsUrl = require('../util/docsUrl.js');
const report = require('../util/report.js');

// -----------------------------------------------------------------------------
// Rule Definition
// -----------------------------------------------------------------------------

const messages = {
  notInScope: "'{{name}}' must be in scope when using JSX",
};

module.exports = {
  meta: {
    docs: {
      description: 'Disallow missing React when using JSX',
      category: 'Possible Errors',
      recommended: true,
      url: docsUrl('react-in-jsx-scope'),
    },
    fixable: 'code',

    messages,

    schema: [],
  },

  create(context) {
    const pragma = pragmaUtil.getFromContext(context);

    function checkIfReactIsInScope(node) {
      const variables = variableUtil.variablesInScope(context);
      if (variableUtil.findVariable(variables, pragma)) {
        return;
      }
      report(context, messages.notInScope, 'notInScope', {
        node,
        data: {
          name: pragma,
        },
        fix:function(fixer) {
          /* const sourceCode = context.getSourceCode();
          const topLevelNode = sourceCode.ast.body[0];
          // return sourceCode.insertBefore(topLevelNode, 'const myVar = "custom code";\n');
          context.getScope().variables
          return fixer.insertTextBefore(topLevelNode, "import React from 'react';\n"); */
          return fixer.insertTextAfterRange([0, 0],`import React from 'react';\n`);
        }
      });
    }

    return {
      JSXOpeningElement: checkIfReactIsInScope,
      JSXOpeningFragment: checkIfReactIsInScope,
    };
  },
};
