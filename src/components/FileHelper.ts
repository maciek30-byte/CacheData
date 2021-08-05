const fs = require("fs");
const fsPromises = require("fs").promises;
class FileHelper {
  static findFile(fileName: string): boolean {
    return fs.access(`src/Db/${fileName}.json`, (e: Error) => {
      if (e) {
        console.log("file do not exist");
        return false;
      } else {
        console.log("file is exist");
        return true;
      }
    });
  }

  static readFromJson(jsonName: string) {
    return fs.readFile(`src/Db/${jsonName}.json`, { encoding: "utf-8" });
  }

  static async writeToCache(jsonName: string, data: any) {
    try {
      await fs.writeFile(
        `src/Db/${jsonName}.json`,
        data,
        { encoding: "utf-8" },
        (e: Error) => {}
      );
    } catch (e) {
      console.log(e);
    }
  }
}
export default FileHelper;
