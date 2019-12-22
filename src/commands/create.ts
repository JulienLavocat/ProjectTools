import { Command, flags } from "@oclif/command";
import fs from "../utils/fs";
import cli from "cli-ux";

import generators from "../generators";

export default class CreateCmd extends Command {
	static description = "Create a new project";

	static examples = ["$ projecttools create . nodejs"];

	static flags = {
		help: flags.help({ char: "h" })
	};

	static args = [
		{ name: "path", required: true, description: "Path leading to where the new project will be created" },
		{ name: "type", required: true, description: "Type of project (NodeJS, Unity, ...)" },
	];

	async run() {
		const { args, flags } = this.parse(CreateCmd);

		const generatorClass: any = generators(args.type);
		if(!generatorClass)
			this.error("Invalid project type, allowed type are: " + Object.keys(generators));

		const generator = new generatorClass(this, args.path, flags);

		try {
			await this.makeProjectDir(args.path);
			await generator.generate();
		} catch (error) {
			this.error(error, {exit: false});
			this.error("An error occured, cleaning created files...", {exit: false});
			this.resetState(args.path).catch(err => this.error("An error occured while cleanning project !\n" + err));
		}
	}

	async makeProjectDir(path: string) {
		try {
			await fs.mkdir(path);
		} catch (err) {
			if(err.code !== "EEXIST")
				throw err;
			await this.deleteExistingDirectory(path);
			await this.makeProjectDir(path);
		}

	}

	async resetState(path: string) {
		fs.unlinkFolderSync(path);
	}

	async deleteExistingDirectory(path: string) {
		this.log("This folder already exist, continue project creation will permanently delete the folder.");
		const answer = await cli.confirm("Continue ?");
		if(!answer) {
			this.log("Project creation cancelled.");
			this.exit(0);
		}
		fs.unlinkFolderSync(path);
	}

}
