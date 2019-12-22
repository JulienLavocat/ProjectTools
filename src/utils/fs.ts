import * as fs from "fs";

export default class FS {

	static mkdir(path: string): Promise<void> {
		return new Promise((resolve, reject) => {
			fs.mkdir(path, err => (err ? reject(err) : resolve()));
		});
	}

	static unlink(path: string): Promise<void> {
		return new Promise((resolve, reject) => {
			fs.unlink(path, err => (err ? reject(err) : resolve()));
		});
	}

	static unlinkFolderSync(path: string) {
		if (fs.existsSync(path)) {
			fs.readdirSync(path).forEach(function(file) {
				var curPath = path + "/" + file;
				if (fs.lstatSync(curPath).isDirectory()) {
					// recurse
					FS.unlinkFolderSync(curPath);
				} else {
					// delete file
					fs.unlinkSync(curPath);
				}
			});
			fs.rmdirSync(path);
		}
	}

	static writeFile(path: string, data: any): Promise<void> {
		return new Promise((resolve, reject) => {
			fs.writeFile(path, data, err => (err ? reject(err) : resolve()));
		});
	}

	static cp(source: string, dest: string): Promise<void> {
		return new Promise((resolve, reject) => {
			fs.copyFile(source, dest, err => (err ? reject(err) : resolve()));
		});
	}
}
