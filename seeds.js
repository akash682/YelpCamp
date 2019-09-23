var mongoose = require("mongoose")
var Campground = require("./models/campground");
var Comment = require("./models/comments");


var data = [
	{
		name:"Cloud's Rest",
	image:"https://images.unsplash.com/photo-1567641091594-71640a68f847?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
	description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
	},
	{
	name:"Desert Mesa",
	image:"https://images.unsplash.com/photo-1562887085-cb16e9116582?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
	description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
	},
	{
	name:"Canyon Floor",
	image:"https://images.unsplash.com/photo-1567615215729-8504cded1ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=993&q=80",
	description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
	},
	{
	name:"Piramid's Rest",
	image:"https://images.unsplash.com/photo-1567664870910-db0c6360ad75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
	description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
	}
]


function seedDB(){
// 	Remove all campgrounds
	Campground.remove({}, function(err){
// 		if(err){
// 			console.log("ERROR!!")
// 		}else{
// 			console.log("remove campgrounds!");
// 			// 	add a few campgrounds
// 			data.forEach(function(seed){
// 				Campground.create(seed, function(err, campground){
// 					if(err){
// 						console.log(err)
// 					}else{
// 						console.log("data added")
// // // 						create a comment
// // 						Comment.create(
// // 						{
// // 							text: "This place is great, but I wish there was internet.",
// // 							author: "Homer"
// // 						}, function(err, comment){
// // 							if(err){
// // 								console.log(err)
// // 							}else{
// // 								campground.comments.push(comment);
// // 								campground.save();
// // 								console.log("Created new comment")
// // 							}
							
// // 						})
// 					}
// 				})
// 			})
// 		}
	
	})

	
}

module.exports = seedDB;
