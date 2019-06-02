import { KoreFileAdaptor } from "./KoreFileAdaptor";
import * as fs from "fs";
import * as util from "util";

export const createFsAdaptor = (): KoreFileAdaptor => {
    const readFile = util.promisify(fs.readFile);
    const writeFile = util.promisify(fs.writeFile);
    const unlinkFile = util.promisify(fs.unlink);
    return {
        readFile(filePath: string): Promise<string> {
            return readFile(filePath, "utf-8");
        },
        writeFile(filePath: string, content: string | ArrayBuffer | Buffer): Promise<void> {
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
