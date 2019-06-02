import { KoreFileAdaptor } from "./KoreFileAdaptor";

export interface KoreFile {
    readFile(filePath: string): Promise<string>;

    writeFile(filePath: string, content: string): Promise<void>;

    deleteFile(filePath: string): Promise<void>;
}

export const createKoreFile = ({ adaptor }: { adaptor: KoreFileAdaptor }): KoreFile => {
    return {
        deleteFile(filePath: string): Promise<void> {
            return adaptor.deleteFile(filePath);
        },
        readFile(filePath: string): Promise<string> {
            return adaptor.readFile(filePath);
        },
        writeFile(filePath: string, content: string | ArrayBuffer): Promise<void> {
            return adaptor.writeFile(filePath, content);
        }
    };
};
