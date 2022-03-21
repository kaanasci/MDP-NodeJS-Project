export default class Helpers {

	static getFileRoute(filename) {

		const string = filename.split('.')[0].split('Route')[0].toLowerCase();
		return string;

	}

}