# Setup Linting (eslint, stylistic)

## VSCode extension
Install ESLint VSCode [extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Stylistic rules
It seems that stylistic is a split of typescript-eslint and an attempt to unify
linting and formatting in one single technology (and avoid prettier)

```
pnpm i -D @stylistic/eslint-plugin
```
I don't think there's a way to generate stylistic eslint config yet. So [must see the stylistic docs](https://eslint.style/packages/default#install)

Also added some rule configs that I'm used to.

# Setup scripts: { dev, build, clean, start }

Install deps: 

```sh
npm i -D typescript ts-node rimraf
```
Create a ```tsconfig.json``` and a ```src/server.ts``` file

```npx tsc --init```

Configure at least this tsconfig parameters:
```
    ...
    "outDir": "./build",  
    "rootDir": "./src",
    ...
```
This will make the scripts to work out of the box. 
And add the scripts to ```package.json```
```
...
"scripts": {
	"dev": "node --env-file=.env --watch -r ts-node/register src/server.ts",
	"clean": "rimraf build",
	"build": "tsc",
	"start": "node build/server.js",
},
...
```

## Optional: make compilation faster with SWC



[Docs](https://typestrong.org/ts-node/docs/swc/)