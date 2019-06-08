/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {Rule, Tree} from '@angular-devkit/schematics';
import * as ts from 'typescript';


/** Entry point for the V8 lazy-loading migration. */
export default function(): Rule {
  return (tree: Tree) => {
    // TODO: find webpack.server.config.js file
    // TODO: can we assume webpack.server.config.js? Should we prompt for file otherwise?
    runLazyLoadingMigration(tree);
  };
}

/**
 * Runs the lazy-loading migration. This contains a couple of webpack fixes
 * for lazy loading in Angular v8.
 */
function runLazyLoadingMigration(tree: Tree) {
  // 1. Add two options to webpack.server.config.js:
  // 1a. externals
  // 1b. noParse
}
