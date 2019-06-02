import { createKoreFile, createFsAdaptor } from "../src/index";
import * as path from "path";
import * as fs from "fs";
import * as assert from "assert";

const testFilePath = path.join(__dirname, "/file.test");
describe("fsAdaptor", function() {
    afterEach(() => {
        try {
            fs.unlinkSync(testFilePath);
        } catch {

        }
    });
    it("write -> read -> delete", async () => {
        const koreFile = createKoreFile({
            adaptor: createFsAdaptor()
        });
        const input = "content";
        await koreFile.writeFile(testFilePath, input);
        const content = await koreFile.readFile(testFilePath);
        assert.strictEqual(content, input);
        await koreFile.deleteFile(testFilePath);
        assert.ok(!fs.existsSync(testFilePath));
    });
});
