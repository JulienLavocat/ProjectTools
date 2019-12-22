import Generator from "./generator";
import NodeJSGenerator from "./nodejs";

const generators: {[key: string]: any} = {
	nodejs: NodeJSGenerator,
};

export default function getGenerator(name: string): Generator {
	return generators[name];
}