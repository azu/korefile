import { createKoreFile, createGitHubAdaptor } from "../src/index";
import * as assert from "assert";

const testFilePath = "dir/file.test";
const it = process.env.GH_TOKEN ? global.it : global.it.skip;
describe("GitHubAdapter", function() {
    it("write -> read -> delete", async () => {
        const koreFile = createKoreFile(createGitHubAdaptor({
            owner: "azu",
            repo: "korefile",
            ref: "heads/test",
            token: process.env.GH_TOKEN
        }));
        const input = "content";
        await koreFile.writeFile(testFilePath, input);
        const content = await koreFile.readFile(testFilePath);
        assert.strictEqual(content, input);
        await koreFile.deleteFile(testFilePath);
    });
});
