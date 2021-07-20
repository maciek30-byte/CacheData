import { promises as fs } from "fs";

class Helper {
  static checkThatExistInArray(phrase: string, array: string[]): boolean {
    return array.includes(phrase);
  }

  static readFromJson(jsonName: string) {
    return fs.readFile(`src/Db/${jsonName}.json`, { encoding: "utf-8" });
  }

  static async writeToJson(phrase: string, data: any) {
    try {
      await fs.writeFile(`src/Db/${phrase}.json`, data, { encoding: "utf-8" });
    } catch (e) {
      console.log(e);
    }
  }
}

export default Helper;
