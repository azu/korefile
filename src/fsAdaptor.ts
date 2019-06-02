import { KoreFileAdaptor } from "./KoreFileAdaptor";
import * as fs from "fs";
import * as path from "path";
import * as util from "util";

export const createFsAdaptor = (): KoreFileAdaptor => {
    const readFile = util.promisify(fs.readFile);
    const writeFile = util.promisify(fs.writeFile);
    const unlinkFile = util.promisify(fs.unlink);
    const mkdir = util.promisify(fs.mkdir);
    return {
        readFile(filePath: string): Promise<string> {
            return readFile(filePath, "utf-8");
        },
        async writeFile(filePath: string, content: string | ArrayBuffer | Buffer): Promise<void> {
            const dir = path.dirname(filePath);
            await mkdir(dir, {
                recursive: true
            });
            if (Buffer.isBuffer(content) || ArrayBuffer.isView(content)) {
                return writeFile(filePath, content);
            } else {
                return writeFile(filePath, content, "utf-8");
            }
        },
        deleteFile(filePath: string): Promise<void> {
            return unlinkFile(filePath);
        }
    };
};
