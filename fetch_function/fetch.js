var request = require("superagent");
module.exports = {
	// 封装Promise形式的异步请求API
	fetch_data_get : function(url, query_params){
		return new Promise((resolve, reject) => {
			request .get(url)
					.set("Accept", "application/json")
					.query(query_params)
					.end((error, result) => {
						error ? reject(error) : resolve(result);
					});
		});
	},
	fetch_data_post : function(url, post_data){
		return new Promise((resolve, reject) => {
			request .post(url)
					.set("Content-Type", "application/x-www-form-urlencoded")
					.send(post_data)
					.end((error, result) => {
						error ? reject(error) : resolve(result);
					});
		});
	}
}