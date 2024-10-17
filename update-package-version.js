const fs = require("fs");
const { execSync } = require("child_process");

// Run GitVersion to get the version
const version = execSync("gitversion /showvariable FullSemVer", {
  encoding: "utf-8",
}).trim();

// Read the package.json file
const packageJsonPath = "./package.json";
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// Update the version field
packageJson.version = version;

// Write the updated package.json back to the file
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf8");

console.log(`Updated package.json version to ${version}`);
