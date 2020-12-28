import { KoreFileAdaptor } from "./KoreFileAdaptor";
import * as fs from "fs";
import * as path from "path";
import * as util from "util";

export interface FsAdaptorOptions {
    cwd?: string
}

export const createFsAdaptor = (options?: FsAdaptorOptions): KoreFileAdaptor => {
    const readFile = util.promisify(fs.readFile);
    const writeFile = util.promisify(fs.writeFile);
    const unlinkFile = util.promisify(fs.unlink);
    const mkdir = util.promisify(fs.mkdir);
    const cwd = options && options.cwd ? options.cwd : process.cwd();
    return {
        readFile(filePath: string): Promise<string> {
            return readFile(path.resolve(cwd, filePath), "utf-8");
        },
        async writeFile(filePath: string, content: string | Buffer): Promise<void> {
            const resolvedFilePath = path.resolve(cwd, filePath);
            const dir = path.dirname(resolvedFilePath);
            await mkdir(dir, {
                recursive: true
            });
            if (Buffer.isBuffer(content)) {
                return writeFile(resolvedFilePath, content);
            } else {
                return writeFile(resolvedFilePath, content, "utf-8");
            }
        },
        deleteFile(filePath: string): Promise<void> {
            return unlinkFile(path.resolve(cwd, filePath));
        }
    };
};
