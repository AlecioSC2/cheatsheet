# Cheatsheet
Cheatsheet of commands/code snippets/code examples/configurations because I keep forgetting them.

## Nodejs

- Node modules binaries directory: `./node_modules/.bin`
- setTimeout: `setTimeout(() => console.log('timeout!'), 1000);`
- Set Timeout Promise:
```javaScript
const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(1000).then(() => doSomething());
```

## NPM

- Save dev flag: `--save-dev`

## NVM

- Install version: `nvm i <version>`
- List versions: `nvm ls`
- Set default version: `nvm alias default <version>`

## Gulp

- Specify Gulpfile: `gulp --gulpfile <filename>`
- Example gulpfile that reloads server and browser after any change: [gulpfile](./examples/reload-gulpfile.js)

## JavaScript

- Reduce: `arr.reduce((accumulator, currentValue) => doSomething(), initialValue)`
- Remove element `i` in `array`: `var removed = array.splice(i,1);`
## Reactjs

## Vuejs

- onclick: `@click="doSomething()"`
- for: `v-for="(item, index) in items"`
- two way binding: `v-model="property"`
- two way binding inside for: `v-model="items[index].property"`

## Java

## Apache Server

## AEM

- Get ContextHub `userType`: `JSON.parse(localStorage.getItem('ContextHubPersistence')).store['usertypes-jsonp'].userType`

## Git

## Command Line

- Find: `find <path> -name "<blob>"` e.g. `find /home/username/ -name "*.log”`
- Find text: `grep -lro <text-to-find> <path>`
- Find current working directory of a running process: `lsof -p <PID> | grep cwd`
- Get directory size: `du -sh <path>`
- Get public IP: `curl -s checkip.dyndns.org | sed -e 's/.*Current IP Address: //' -e 's/<.*$//'`
- scp:
    - `scp your_username@remotehost.edu:foobar.txt /some/local/directory`
    - `scp foobar.txt your_username@remotehost.edu:/some/remote/directory`

## VIM

- Delete all lines: `:1,$d`
- Delete line `:dd`
- Go to end of line: `:$`
- Display line numbers: `:set number`