var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

	title:{
		type:String,
		required:true,
		unique:true

	},

	summary:{

		type: String,
		required:true
	},

	date:String,
	saved:{
		type:Boolean,
		default:false
	}

});

var Article = mongoose.model("Article",ArticleSchema);

module.exxports = Article;