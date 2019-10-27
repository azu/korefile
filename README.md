# korefile [![Build Status](https://travis-ci.org/azu/korefile.svg?branch=master)](https://travis-ci.org/azu/korefile)
 
> korefile: コレ・ファイル
 
File System API for Local/GitHub.

## Features

- Write/Read/Delete API for Local/GitHub
- Plugabble adaptor

## Install

Install with [npm](https://www.npmjs.com/):

    npm install korefile

## Usage

Korefile apply [KoreFileAdaptor](./src/KoreFileAdaptor.ts) implementation. 

### FsAdaptor

Read/Write/Delete for local file system.
It wrap `fs` module.

```js
import {createKoreFile, createFsAdaptor} from "korefile";
const koreFile = createKoreFile({ 
    adaptor: createFsAdaptor()
});
(async () => { 
    // write
    await koreFile.writeFile("/path/to/file", "content");
    // read
    const content = await koreFile.readFile("/path/to/file");
    // delete
    await koreFile.deleteFile("/path/to/file");
})()
```

### GitHubAdaptor

Read/Write/Delete for GitHub repository.
It wrap [octokit/rest.js](https://github.com/octokit/rest.js/).

Require [GitHub Auth Token](https://github.com/settings/tokens/new).

```js
import {createKoreFile, createGitHubAdaptor} from "korefile";
const koreFile = createKoreFile({
    adaptor: createGitHubAdaptor({
        owner: "azu",
        repo: "korefile",
        ref: "heads/test",
        token: process.env.GH_TOKEN
    })
});
(async () => { 
    // file path should be relative
    const testFilePath = "file.test";
    // write
    await koreFile.writeFile(testFilePath, input);
    // read
    const content = await koreFile.readFile(testFilePath);
    // delete
    await koreFile.deleteFile(testFilePath);
})();
```

## UseCase

- [asocial-bookmark](https://github.com/azu/asocial-bookmark)
- [github-funding-yml-updater](https://github.com/azu/github-funding-yml-updater)

## Changelog

See [Releases page](https://github.com/azu/korefile/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/korefile/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
