# Browserify POC with 2 entry points

### Setup
Install dependencies
```sh
$ npm install
```
Run default grunt task
```sh
$ grunt
```

Browse to <a href="http://localhost:8000/dist/" target="_blank">http://localhost:8000/dist/</a>.
Look in sources tab of dev tools to see what goes in to the .js files.

### Structure
Two sample HTML files reference two javascript files. Both reference core.js for commonly shared code. Each also references a second file specific to that type of page.

Javascript source code is set up in 4 directories:
* **components**: common.js style modules that require their own dependencies. Components themselves may be required in one or more entry files.
* **entry**: files included by HTML pages, require components
* **utility**: shared utility code
* **vendor**: third party code

### Process
* Browserify will create the entry files based on the require graph found starting in the entry files. 
* Components or modules used only once will live in the entry file that requires them. 
* If one or more entry files makes use of the same component/module, that code will be stored in core.js
* bootstrap.js and jquery.js used for demo, both included by explicit reference in entry file (e.g. var bootstrap = require("bootstrap");). Some modern JS libs are commonJS ready and do not require browserify "shimming", while many others would require shim references in package.json (see project package.json for entries).
* It could make sense to move vendor code outside of webpack dependency management into simpler build process step, where source files assume vendor code is present and do not explicitly require.

### Todo
* Include more sample third party code to find possible challenges
