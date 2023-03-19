# adonis-theme-uploader (WIP)
> Manage and upload new themes on a Adonis web application

This extension enables you to upload a zip file containing .edge files. 
The extension will then unzip the file to /pages, replacing any existing .edge files.

## Installation

```
npm i adonis-theme-uploader
node ace configure adonis-theme-uploader
```

## Auth

Routes for this extension are located in ``start/uploader.ts`` and are normal Adonis routes, allowing you to add middleware where necessary

## Todo

[] CSS support config  
[] Zip existing files config  

[npm-image]: https://img.shields.io/npm/v/extension.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/extension "npm"

[license-image]: https://img.shields.io/npm/l/extension?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"
