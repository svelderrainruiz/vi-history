import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
const outputDirectory = "dist";
const outputPath = path.join(outputDirectory, `${packageJson.name}-${packageJson.version}.vsix`);
const vsceBinary = process.platform === "win32"
  ? path.join("node_modules", ".bin", "vsce.cmd")
  : path.join("node_modules", ".bin", "vsce");

fs.mkdirSync(outputDirectory, { recursive: true });

execFileSync(vsceBinary, [
  "package",
  "--out",
  outputPath,
  "--no-dependencies"
], {
  stdio: "inherit"
});
