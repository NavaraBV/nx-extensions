---
title: '@nxext/vite:build executor'
description: 'build executor'
---

# @nxext/vite:build

build executor

Options can be configured in `workspace.json` when defining the executor, or when invoking it. Read more about how to configure targets and executors here: https://nx.dev/configuration/projectjson#targets.

## Options

### baseHref

Type: `string`

Base url for the application being built.

### configFile

Type: `string`

The path to vite.config.js file.

### fileReplacements

Type: `object[]`

Replace files with other files in the build.

#### replace

Type: `string`

The file to be replaced.

#### with

Type: `string`

The file to replace with.

### frameworkConfigFile (**hidden**)

Type: `string`

The path to vite.config.js for the framework.

### outDir

Type: `string`

Path to the build output directory

### ssr

Type: `string`

Path to the the SSR entry file
