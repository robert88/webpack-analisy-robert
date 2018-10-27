
const pt = require("path");
const http = require("http");
const webpack = pt.resolve(process.env.APPDATA,"./npm/node_modules/webpack-cli/bin/cli.js")
function handleAction(req,res) {
    if(req.url=="/favicon.ico"){
        res.end("200");
        return;
    }
    delete require.cache[webpack];
	try{
        require(webpack);
        res.end("200")
	}catch (e) {
        res.end(e.stack);
    }
}
if(webpack){
	http.createServer(handleAction).listen(1026);
}
        