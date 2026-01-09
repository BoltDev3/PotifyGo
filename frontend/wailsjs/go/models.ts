export namespace main {
	
	export class Config {
	    client_id: string;
	    client_secret: string;
	    download_path: string;
	
	    static createFrom(source: any = {}) {
	        return new Config(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.client_id = source["client_id"];
	        this.client_secret = source["client_secret"];
	        this.download_path = source["download_path"];
	    }
	}

}

