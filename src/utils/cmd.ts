import {exec} from "child_process";

export default function cmd(path: string, cmd: string) {
	return new Promise((resolve, reject) => {
		exec(`cd ${path} && ${cmd} && cd ..`, (err, stdout, stderr) => {
			if(err)
				reject(err);
			if(stdout)
				resolve(stdout);
			if(stderr)
				reject(stderr);
		});
	});
}