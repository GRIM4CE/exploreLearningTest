import * as sharp from "sharp";
import { readdirSync, writeFileSync } from "node:fs";

const converRawImages = (rawPath, dstPath) => {
  const rawImageFiles = readdirSync(rawPath);
  rawImageFiles.forEach(async (file) => {
    const fileName = file.split(".")[0];
    sharp(`${rawPath}/${file}`)
      .resize(160, 160)
      .png()
      .toBuffer()
      .then((data) => {
        writeFileSync(`${dstPath}/${fileName}.png`, data);
      })
      .catch((e) => {
        console.log("Error: ", e);
      });
  });
};

const rawImageDirPath = "./src/assets/images/raw";
const transformImageDirPath = "./public/images";

converRawImages(rawImageDirPath, transformImageDirPath);
