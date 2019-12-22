import Command from "@oclif/command";

export default abstract class Generator {
	name: string = "default";
	path: string;
	args: any;
	cmd: Command;

	constructor(cmd: Command, path: string, args: any) {
		this.cmd = cmd;
		this.path = path;
		this.args = args;
	}

	abstract async generate(path: string, args?: any): Promise<void>;

	log(message: string, args?: any[]): void {
		args ? this.cmd.log(message, args) : this.cmd.log(message);
	}

	error(
		error: string | Error,
		options: {
			code?: string | undefined;
			exit: false;
		}
	): void {
		this.cmd.error(error, options);
	}

	// eslint-disable-next-line semi
}
