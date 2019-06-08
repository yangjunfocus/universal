/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {Rule, Tree} from '@angular-devkit/schematics';
import * as ts from 'typescript';
import {updateWorkspace} from '@schematics/angular/utility/config';
import {WorkspaceSchema} from '@schematics/angular/utility/workspace-models';


/** Entry point for the V8 bundle-dependencies migration. */
export default function(): Rule {
  // Open question: do we need to prompt for the clientProject name?
  // return updateWorkspace((workspace: WorkspaceSchema) => {
  // const clientProject = workspace.projects.get(options.clientProject);
  // });
  return (tree: Tree) => {
    // TODO: find main.server.ts file
    // TODO: can we assume server.ts? Should we prompt for server file otherwise?
    // Also remember: we need to parse the angular.json carefully bc it is JSON5
    runBundleDependenciesMigration(tree);
  };
}

/**
 * Runs the bundleDependencies migration. This determines all Angular and NgUniversal
 * imports in a user's server file, and moves it to their main.server.ts file
 */
function runBundleDependenciesMigration(tree: Tree) {
  // 1. Find all Angular + NgUniversal imports in server.ts
  // 2. Move the dynamic import to the location of the first import from Angular/NgUniversal
  // 3. Add all removed imports to the dynamic import
  // 3a. Maybe add the giant warning text to the server file
  // 4. Add exports to the main.server.ts file
  // 5. Update package.json to add bundleDependencies flag
}
