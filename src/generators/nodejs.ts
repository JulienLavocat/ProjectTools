import { join } from "path";
import cli from "cli-ux";
import fs from "../utils/fs";
import cmd from "../utils/cmd";
import fetchGitignore from "../utils/gitignore";
import Generator from "./generator";

export default class NodeJSGenerator extends Generator {

	name: string = "NodeJS";

	async generate(): Promise<void> {
		const start = Date.now();

		await this.performNpmInit();
		await this.performGitInit();
		await this.performGitIgnore();
		await this.performEslint();
		await this.performAddDeps();

		this.log("Project creation completed in " + (Date.now() - start) / 1000 + "s");
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
		const gitignore = await fetchGitignore("node","visualstudiocode","windows","macOS","linux");
		await fs.writeFile(join(this.path, ".gitignore"), gitignore);
	}

	async performEslint() {
		this.log("Initializing Eslint...");
		await fs.writeFile(join(this.path, ".eslintrc.json"), JSON.stringify(require("../data/nodejs-eslint.json"), null, 2));
	}

	async performAddDeps() {
		const dependencies = await cli.prompt("Add depedencies", {type: "normal", required: false});
		try {
			if(dependencies)
				await cmd(this.path, `npm i ${dependencies}`);
			else
				this.log("Skipped dependecies");
		} catch (error) {
			this.error(error, {exit: false});
			this.error("An error occured while adding dependencies", {exit: false});
		}
	}

}
