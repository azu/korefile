export interface KoreFileAdaptor {
    readFile(filePath: string): Promise<string>;

    writeFile(filePath: string, content: string | ArrayBuffer): Promise<void>;

    deleteFile(filePath: string): Promise<void>;
}
