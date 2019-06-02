# korefile

File System API for Local/GitHub.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install korefile

## Usage

```js
import {createKoreFile, createFsAdaptor} from "korefile";
const koreFile = createKoreFile(createFsAdaptor());
(async () => { 
    await koreFile.writeFile("/path/to/file", "content");
    const content = await koreFile.readFile("/path/to/file");
    await koreFile.deleteFile("/path/to/file");
})()
```

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
