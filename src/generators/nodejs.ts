import { join } from "path";
import { exec } from "child_process";
import cli from "cli-ux";
import fetch from "node-fetch";
import fs from "../utils/fs";
import cmd from "../utils/cmd";
import Generator from "./generator";

const GITIGNORE_FETCh_URL = "https://gitignore.io/api/node,visualstudiocode,windows,macOS,linux";

export default class NodeJSGenerator extends Generator {

	name: string = "NodeJS";

	async generate(): Promise<void> {
		await this.performNpmInit();
		await this.performGitInit();
		await this.performGitIgnore();
		await this.performEslint();
		await this.performAddDeps();
	}

	async performNpmInit() {
		this.log("Creating package.json...");
		const packageName 	= await cli.prompt("Package name", {type: "normal", default: "mypackage"});
		const license 		= await cli.prompt("License", {type: "normal", default: "ISC"});
		let git 			= await cli.prompt("Git repository", {type: "normal", required: false});
		const author 		= await cli.prompt("Author", {type: "normal", default: "unknown"});

		if(git)
			git = {
				"type": "git",
				"url": git
			};

		await fs.writeFile(join(this.path, "package.json"), JSON.stringify({
			name: packageName,
			version: "0.0.0",
			description: "",
			main: "index.js",
			scripts: {},
			repository: git || {},
			keywords: [],
			author: author,
			license: license
		}, null, 4));
	}

	async performGitInit() {
		this.log("Initializing git...");
		await cmd(this.path, "git init");
	}

	async performGitIgnore() {
		this.log("Adding gitignore...");
		const gitignore = await fetch(GITIGNORE_FETCh_URL).then(res => res.text());
		await fs.writeFile(join(this.path, ".gitignore"), gitignore);
	}

	async performEslint() {
		this.log("Initializing Eslint...");
		await fs.cp("./src/data/.eslintrc.json", join(this.path, ".eslintrc.json"));
	}

	async performAddDeps() {
		const dependencies = await cli.prompt("Add depedencies", {type: "normal"});
		await cmd(this.path, `npm i ${dependencies}`);
	}

}
