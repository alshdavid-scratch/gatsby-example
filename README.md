Minimal reproduction of Parcel Gatsby issue

```
npm install
npm run develop
```

Will result in

```
$ npm run develop

> my-gatsby-site@1.0.0 develop
> gatsby develop


 ERROR  UNKNOWN

[ThrowableDiagnostic [Error]: The plugin "@parcel/reporter-dev-server" is not compatible with the current version of Parcel. Requires "^2.10.3"
but the current version is "2.8.3".] {
  diagnostics: [
    {
      message: 'The plugin "@parcel/reporter-dev-server" is not compatible with the current version of Parcel. Requires "^2.10.3" but the current
version is "2.8.3".',
      origin: '@parcel/core',
      codeFrames: [Array]
    }
  ]
}


 ERROR  UNKNOWN

[ThrowableDiagnostic [Error]: The plugin "@parcel/reporter-dev-server" is not compatible with the current version of Parcel. Requires "^2.10.3"
but the current version is "2.8.3".] {
  diagnostics: [
    {
      message: 'The plugin "@parcel/reporter-dev-server" is not compatible with the current version of Parcel. Requires "^2.10.3" but the current
version is "2.8.3".',
      origin: '@parcel/core',
      codeFrames: [Array]
    }
  ]
}


 ERROR  UNKNOWN

[ThrowableDiagnostic [Error]: The plugin "@parcel/reporter-dev-server" is not compatible with the current version of Parcel. Requires "^2.10.3"
but the current version is "2.8.3".] {
  diagnostics: [
    {
      message: 'The plugin "@parcel/reporter-dev-server" is not compatible with the current version of Parcel. Requires "^2.10.3" but the current
version is "2.8.3".',
      origin: '@parcel/core',
      codeFrames: [Array]
    }
  ]
}


 ERROR #11901  API.TYPESCRIPT.COMPILATION

Failed to compile Gatsby files (@parcel/core):

The plugin "@parcel/bundler-default" is not compatible with the current version of Parcel. Requires "^2.10.3" but the current version is "2.8.3"..


File path:
/home/dalsh/Development/alshdavid/foo/my-gatsby-site/node_modules/@parcel/config-default/node_modules/@parcel/bundler-default/package.json

not finished compile gatsby files - 0.284s
```