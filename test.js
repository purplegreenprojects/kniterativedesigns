/*var mae = {
	species: "felinus domesticus",
	gender: "female",
	age: 10,
	catchphrase: "mrow",
	themesong: "What's new, pussycat?"
}


var quality = "gender";
var animal = "mae";

console.log( eval(animal)[quality] );*/



/*
var maincolor = $("#maincolor").text();
var yarn = "homespun";

$(".cat_part").css("background-image","url(" + eval(yarn)[maincolor] + ")");*/


var pipsqueak = {
	white: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59005-162059-B-PIP-WhiteyWhite.jpg",
	vanilla: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59008-162059-B-PIP-Vanilla_1.jpg",
	chocolate: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59012-162059-B-PIP-Chocolate.jpg",
	lemon: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59610-162059-B-PIP-LemonSwirl.jpg",
	lime: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59222-162059-B-PIP-LimeGreen.jpg",
	grape: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/s/w/sw-59332-162059-bernat-pipsqueak-grape.jpg",
	baby_blue: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59128-162059-B-PIP-BabyBlue.jpg",
	baby_pink: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59421-162059-B-PIP-TickleMePink_1.jpg",
	blue_swirl: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59115-162059-B-PIP-BlueJeansSwirl_1.jpg",
	pink_swirl: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/s/w/sw-58413-162058-b-pip-pinkswirl-copy.jpg",
	denim: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59114-162059-B-PIP-Denim.jpg",
	ice_blue: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59745-162059-B-PIP-BlueIce.jpg",
	funny_bunny: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59744-162059-B-PIP-FunnyBunny.jpg",
	candy_girl: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59415-162059-B-PIP-CandyGirl.jpg",
	neopolitan: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59245-162059-B-PIP-Neopolitan.jpg",
	sittin_pretty: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59315-162059-B-PIP-SittinPretty.jpg",
	baby_baby: "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59306-162059-B-PIP-BabyBaby.jpg"
}

var yarn = "pipsqueak";

		/* hover over buttons */
			$(document).on("mouseenter", "button", function() {	
				var color = this.value;
				color = color.replace(" ","_");
				$(".previewdiv_zoom").css("background-image", "url(" + eval(yarn)[color] + ")").css("background-size", "250%");
				$(".previewPart").css("background-image", "url(" + eval(yarn)[color] + ")");
				$(".line").css("background-color", "black");
			});
			$(document).on("mouseleave", "button", function() {
				$(".previewdiv_zoom").css("background-image", "none").css("background-color", "white");	
				$(".previewPart").css("background-image", "none").css("background-color", "black");
				$(".line").css("background-color", "white");
			});