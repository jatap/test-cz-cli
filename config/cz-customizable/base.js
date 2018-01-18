'use strict';

module.exports = {
  types: [
    {value: 'feat',     name: 'feat:     A new feature'},
    {value: 'fix',      name: 'fix:      A bug fix'},
    {value: 'perf',     name: 'perf:     A code change that improves performance'},
  ],

  scopes: [
    {name: 'merge'},
    {name: 'style'},
    {name: 'core'},
    {name: 'components'},
    {name: 'unitTest'},
    {name: 'e2eTest'}
  ],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix']
}
