import fs from "fs";
import path from "path";
import boxen from "boxen";
import chalk from "chalk";

const assetPath = "node_modules/bodo-the-craftsman/assets/";
const imageData = new Map();
let imageDistribution = new Array();

for (const fileName of fs.readdirSync(assetPath)) {
  const [imageName, imageFrequency] = fileName.split("-");
  const imageContent = fs.readFileSync(path.join(assetPath, fileName), "utf-8");

  imageData.set(imageName, imageContent);
  imageDistribution = imageDistribution.concat(
    new Array(parseInt(imageFrequency)).fill(imageName)
  );
}

console.bob = (text, variant) => {
  if (!variant || !imageData.has(variant)) {
    variant = imageDistribution[
      Math.floor(Math.random() * imageDistribution.length)
    ];
  }

  if (text) {
    console.log(boxen(
      `${text}`,
      {
        padding: 1,
        textAlignment: "left",
        borderColor: "yellow",
        borderStyle: "round",
        width: 65
      }
    ));
    console.log(chalk.bold.yellow("╲  ╱".padStart(50)));
    console.log(chalk.bold.yellow(" ╲╱ ".padStart(50)));
  }

  console.log(imageData.get(variant));
};