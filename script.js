
$(document).ready(function() {

	$("#data").text("item=&yarn=&mc=&cc=&cc_areas=&accent_color=&email=&");

	loadPageContents();

//FUNCTIONS
	
	//takes what's in the data div and splits it up into indexes and values (index:"item" as value:"cat")
	function get(search) {
		var data = $("#data").text();
		var dataArray = data.split("&");

		var pairsArray = [];
		var i = 0;
		while (i < dataArray.length) {
			var index = dataArray[i].substring(0,dataArray[i].indexOf("="));
			var value = dataArray[i].substring(dataArray[i].indexOf("=")+1);
			pairsArray[index] = value;
			i++;
		}

		return pairsArray[search];
	}

	//searches for index, returns value - if value has a length of zero, that's the page you're on
	function loadPageContents() {

		if ( get("item").length === 0) {
			var pagePicked = "item";
		}
		else if ( get("yarn").length === 0) {
			var pagePicked = "yarn";
		}
		else if ( get("mc").length === 0) {
			var pagePicked = "mc";
		}
		else if ( get("cc").length === 0) {
			var pagePicked = "cc";
		}
		else if ( get("cc_areas").length === 0) {
			var pagePicked = "cc_areas";
		}
		else if ( get("accent_color").length === 0) {
			var pagePicked = "accent_color";
		}
		else if ( get("mail").length === 0) {
			var pagePicked = "mail";
		}

		console.log(pagePicked);

		buildPage(pagePicked);
	}

//"Create" Functions
	function createPreviews() {
		$("#preview").empty()
		.append("<div class='previewdiv_face'></div>")
		.append("<div class='previewdiv_zoom'></div>")
		.append("<div class='previewdiv_profile'></div>");
	}

	function createCat() {
		$(".previewdiv_face").empty().append("<div id='catface' class='catpart_face previewPart' style='background-color: black'></div>");
		$(".previewdiv_profile").empty().append("<div id='catprofile' class='catpart_profile previewPart' style='background-color: black'></div>");
	}

	function createDog() {
		$(".previewdiv_face").empty().append("<div id='dogface' class='dogpart_face previewPart' style='background-color: black'></div>");
		$(".previewdiv_profile").empty()
			.append("<div id='dogprofile' class='dogpart_profile previewPart' style='background-color: black'></div>")
			.append("<div id='dogprofile_backFRONTLEG' class='dogpart_profile previewPart' style='background-color: black'></div>")
			.append("<div id='dogprofile_backBACKLEG' class='dogpart_profile previewPart' style='background-color: black'></div>")
			.append("<div id='dogprofile_ears' class='dogpart_profile previewPart' style='background-color: black'></div>")
			.append("<div id='dogprofile_ear_line' class='dogpart_profile line' style='background-color: white'></div>");
	}

	function createBunny() {
		$(".previewdiv_face").empty()
			.append("<div id='bunnyface' class='bunnypart_face previewPart' style='background-color: black'></div>");
				
		$(".previewdiv_profile").empty()
			.append("<div id='bunnyprofile' class='bunnypart_profile previewPart' style='background-color: black'></div>")
			.append("<div id='bunnyprofile_ear_front' class='bunnypart_profile previewPart' style='background-color: black'></div>")
			.append("<div id='bunnyprofile_ear_back' class='bunnypart_profile previewPart' style='background-color: black'></div>")
			.append("<div id='bunnyprofile_ear_line' class='bunnypart_profile line' style='background-color:white'></div>")
			.append("<div id='bunnyprofile_backleg' class='bunnypart_profile previewPart' style='background-color: black'></div>")
			.append("<div id='bunnyprofile_backleg_line' class='bunnypart_profile line' style='background-color:white'></div>");
	}
//build page(s)

	//instructions will be based on which page is passed in as your input (item, yarn, mc, etc.)
	function buildPage(pagePicked) {

// ITEM
		if (pagePicked === "item") {

		//append the item options
			$("#options").empty()
			.append("<button id='CAT' class='btn btn-lg btn-success' value='cat'>Cat</button>")
			.append("<button id='DOG' class='btn btn-lg btn-success' value='dog'>Dog</button>")
			.append("<button id='BUNNY' class='btn btn-lg btn-success' value='bunny'>Bunny</button>");
			
		//append the item preview
			createPreviews();

		//Hover Cat	
			$(document).on("mouseenter", "#CAT", function() {
				createCat();
			});
			$(document).on("mouseleave", "#CAT", function() {
				createPreviews();
			});

		//Hover Dog
			$(document).on("mouseenter", "#DOG", function() {
				createDog();
			});

			$(document).on("mouseleave", "#DOG", function() {
				createPreviews();
			});
	

		//Hover Bunny
			$(document).on("mouseenter", "#BUNNY", function() {
				createBunny();
			});

			$(document).on("mouseleave", "#BUNNY", function() {
				createPreviews();
			});

		//Click
			$(document).on("click", "button", function() {
				var item = this.value;
				var currentData = $("#data").text();
				var newData = currentData.replace("item=&", "item="+item+"&");
				//$("#data").empty().append(newData);
				$("#data").text(newData);

				loadPageContents();
			});


		}

// YARN
		else if (pagePicked === "yarn") {
			console.log(get("item"));

		//append the yarn options	
			$("#options").empty()
				.append("<button id='Homespun' class='btn btn-lg btn-success' value='Homespun'>Lion Brand Homespun</button>")
				.append("<button id='Caron' class='btn btn-lg btn-success' value='Caron'>Caron Simply Soft</button>")
				.append("<button id='Pipsqueak' class='btn btn-lg btn-success' value='Pipsqueak'>Bernat Pipsqueak</button>")
				.append("<button id='Parfait' class='btn btn-lg btn-success' value='Parfait'>Parfait</button>")
				.append("<button id='KnitPicks' class='btn btn-lg btn-success' value='KnitPicks'>KnitPicks Comfy</button>");
		
		//append the yarn preview	
			createPreviews();

		//createCat		
			if( get("item") === "cat") {
				createCat();
			}

		//createDog		
			if( get("item") === "dog") {
				createDog();
			}

		//createBunny	
			else if ( get("item") === "bunny") {
				createBunny();
			}

		//Hover
			$(document).on("mouseenter", "button", function() {	
				var yarn = this.value;
				$(".previewdiv_zoom").css("background-image", "url("+yarn+".jpg)").css("background-size", "250%");
				$(".previewPart").css("background-image", "url("+yarn+".jpg)");
				$(".line").css("background-color", "black");
			});
			$(document).on("mouseleave", "button", function() {
				$(".previewdiv_zoom").css("background-image", "none").css("background-color", "white");	
				$(".previewPart").css("background-image", "none").css("background-color", "black");
				$(".line").css("background-color", "white");
			});

		//Click	
			$(document).on("click", "button", function() {
				var yarn = this.value;
				var currentData = $("#data").text();
				var newData = currentData.replace("yarn=&", "yarn="+yarn+"&");
				//$("#data").empty().append(newData);
				$("#data").text(newData);

				loadPageContents();
			});
		}

// MC (MAIN COLOR)

		else if (pagePicked === "mc") {
			console.log(get("mc"));

			$("#options").empty();

			createPreviews();

		//append the color options
			if (get ("yarn") === "Homespun")	{
				$("#options")
					//ALL THE HOMESPUN COLORS as buttons
					.append("<button id='homespunbarley' class='btn btn-lg btn-success' value='homespunbarley'>Barley</button>");
			}

			else if (get("yarn") === "Caron") {
				$("#options")
					//ALL THE CARON COLORS as buttons
					.append("<button id='caronblack' class='btn btn-lg btn-success' value='caronblack'>Black</button>");
			}

			else if (get("yarn") === "Pipsqueak") {
				$("#options")
					//ALL THE PIPSQUEAK COLORS as buttons
					.append("<button id='pipsqueakwhite' class='btn btn-lg btn-success' value='pipsqueakwhite'>White</button>");
			}	

			else if (get("yarn") === "Parfait") {
				$("#options")
					//ALL THE PARFAIT COLORS as buttons
					.append("<button id='parfaitcandycorn' class='btn btn-lg btn-success' value='parfaitcandycorn'>Candy Corn</button>");
			}	

			else if (get("yarn") === "KnitPicks") {
				$("#options")
					//ALL THE KnitPicks COLORS as buttons
					.append("<button id='KPwhite' class='btn btn-lg btn-success' value='KPwhite'>(KnitPicks) White</button>");
			}	
		
		//append the preview divs
			createPreviews();

		//createCat		
			if( get("item") === "cat") {
				createCat();
			}

		//createBunny	
			else if ( get("item") === "bunny") {
				createBunny();
			}
		}

	};
});


/*

		//Hover
			$(document).on("mouseenter", "button", function() {	
				var yarn = this.value;
				$(".previewdiv_zoom").css("background-image", "url("+yarn+".jpg)").css("background-size", "250%");
				$(".previewPart").css("background-image", "url("+yarn+".jpg)");
				$(".line").css("background-color", "black");
			});
			$(document).on("mouseleave", "button", function() {
				$(".previewdiv_zoom").css("background-image", "none").css("background-color", "white");	
				$(".previewPart").css("background-image", "none").css("background-color", "black");
				$(".line").css("background-color", "white");
			});

		//Click	
			$(document).on("click", "button", function() {
				var yarn = this.value;
				var currentData = $("#data").text();
				var newData = currentData.replace("yarn=&", "yarn="+yarn+"&");
				//$("#data").empty().append(newData);
				$("#data").text(newData);

				loadPageContents();
			});
		}	
		
/*

			$("#options").empty()
				.append("<button id='Homespun' class='btn btn-lg btn-success' style='color:white' value='Homespun'>Lion Brand Homespun</button>")
				.append("<button id='Caron' style='color:white' class='btn btn-lg btn-success' value='Caron'>Caron Simply Soft</button>");
			
			$("#preview").empty()
				.append("<div class='previewdiv_face'></div>")
				.append("<div class='previewdiv_profile'></div>");


			if( get("item") === "cat") {
				$(".previewdiv_face").empty().append("<div id='catface' class='catpart_face' style='background-color: blue'></div>");
				$(".previewdiv_profile").empty().append("<div id='catprofile' class='catpart_profile' style='background-color: blue'></div>");
			}
			else if ( get("item") === "bunny") {
			}	
		}
*/






//----------------------------------------------------------------------------------------------------------------
/*
function buildArrays(){
// ARRAYS

//items
		var arrayitemlisting = ['Bunny', 'Cat'];

	//textures
			$arraypipsqueak = array("Extra Fuzzy", "pipsqueak.jpg", "pipsqueak", "Bernat Pipsqueak");
			var arrayhomespun = ["Moderately Fuzzy", "homespun.jpg", "homespun", "Lion Brand Homespun"];
			var arraycaron = ["Smooth", "caron.jpg", "caron", "Caron Simply Soft"];
			$arrayparfait = array("Corduroy", "parfait.jpg", "parfait", "Premier Parfait");	
			$arraycomfy = array("Cotton", "KPwhite.jpg", "comfy", "KnitPicks Comfy");

		$arrayyarntextures = array($arraypipsqueak, $arrayhomespun, $arrayparfait, $arraycaron, $arraycomfy);

	//colors
		//Bernat Pipsqueak Colors
				$arraywhite = array("pipsqueakwhite", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59005-162059-B-PIP-WhiteyWhite.jpg","White");
				$arrayvanilla = array("pipsqueakvanilla", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59008-162059-B-PIP-Vanilla_1.jpg", "Vanilla");
				$arraychocolate = array("pipsqueakchocolate", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59012-162059-B-PIP-Chocolate.jpg", "Chocolate");
				$arraylemon = array("pipsqueaklemon", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59610-162059-B-PIP-LemonSwirl.jpg", "Lemon");
				$arraylime = array("pipsqueaklime", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59222-162059-B-PIP-LimeGreen.jpg", "Lime");
				$arraygrape = array("pipsqueakgrape", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/s/w/sw-59332-162059-bernat-pipsqueak-grape.jpg", "Grape");
				$arraybabyblue = array("pipsqueakbabyblue", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59128-162059-B-PIP-BabyBlue.jpg", "Baby Blue");
				$arraybabypink = array("pipsqueakbabypink", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59421-162059-B-PIP-TickleMePink_1.jpg", "Pink");		
				$arrayblueswirl = array("pipsqueakblueswirl", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59115-162059-B-PIP-BlueJeansSwirl_1.jpg", "Blue Swirl");
				$arraypinkswirl = array("pipsqueakpinkswirl", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/s/w/sw-58413-162058-b-pip-pinkswirl-copy.jpg", "Pink Swirl");
				$arraydenim = array("pipsqueakdenim", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59114-162059-B-PIP-Denim.jpg", "Denim");
				$arrayiceblue =	array("pipsqueakiceblue", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59745-162059-B-PIP-BlueIce.jpg", "Ice Blue");
				$arrayfunnybunny = array("pipsqueakfunnybunny", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59744-162059-B-PIP-FunnyBunny.jpg", "'Funny Bunny'");
				$arraycandygirl = array("pipsqueakcandygirl", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59415-162059-B-PIP-CandyGirl.jpg", "'Candy Girl '");
				$arrayneopolitan = array("pipsqueakneopolitan", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59245-162059-B-PIP-Neopolitan.jpg", "'Neopolitan'");
				$arraysittinpretty = array("pipsqueaksittinpretty", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59315-162059-B-PIP-SittinPretty.jpg", "'Sittin'Pretty'");
				$arraybabybaby = array("pipsqueakbabybaby", "http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59306-162059-B-PIP-BabyBaby.jpg", "'Baby Baby'");

			$arraypipsqueakcolors = array($arraywhite, $arrayvanilla, $arraychocolate, $arraylemon, $arraylime, $arraygrape, $arraybabyblue, $arraybabypink, $arrayblueswirl, $arraypinkswirl, $arraydenim, $arrayiceblue, $arrayfunnybunny, $arraycandygirl, $arrayneopolitan, $arraysittinpretty, $arraybabybaby);

		//Lion Brand Homespun Colors
				$arrayhepplewhite = array("homespunwhite", "https://d2d00szk9na1qq.cloudfront.net/Product/7deac14c-a209-45a0-9db0-7c259e5ba7e8/Images/Medium_LBY-205.jpg", "White");
				$arraycream = array("homespuncream", "https://d2d00szk9na1qq.cloudfront.net/Product/24ef842a-b3f6-4765-b610-55bffb1e63e5/Images/Medium_LBY-243.jpg", "Cream");
				$arrayrococo = array("homespunrococo", "https://d2d00szk9na1qq.cloudfront.net/Product/d92c17db-d056-4b2e-ab4a-e4cdd51650e8/Images/Medium_LBY-248.jpg", "Rococo");
				$arraybarley = array("homespunbarley", "https://d2d00szk9na1qq.cloudfront.net/Product/4e37b5dc-971b-4ccc-957a-23de0ad48c60/Images/Large_LBY-246.jpg", "Barley");
				$arrayclouds = array("homespunclouds", "https://d2d00szk9na1qq.cloudfront.net/Product/4c7672af-4a79-4677-ba94-b32238b6072e/Images/Medium_0326187.jpg", "Clouds");
				$arrayedwardian = array("homespunedwardian", "https://d2d00szk9na1qq.cloudfront.net/Product/25bc937e-a6a8-419c-91d0-d02f88e98ccd/Images/Medium_LBY-251.jpg", "Edwardian");
				$arraygolden = array("homespungolden", "https://d2d00szk9na1qq.cloudfront.net/Product/d3648357-a709-459e-b98f-f0413234d05e/Images/Medium_LBY-208.jpg", "Golden");
				$arraysanddune = array("homespunsanddune", "http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-sand-dune-2.gif", "Sand Dune");
				$arrayshaker = array("homespunshaker", "https://d2d00szk9na1qq.cloudfront.net/Product/87bc06a5-2793-4233-95a6-a538bc5b412c/Images/Medium_LBY-249.jpg", "Shaker");
				$arrayhblack = array("homespunblack", "https://d2d00szk9na1qq.cloudfront.net/Product/2af5de9f-faca-4854-90f3-bb3e79ab04bc/Images/Medium_LBY-253.jpg", "Black");
				$arrayspice = array("homespunspice", "http://www.lionbrand.com/stores/eyarn/pictures/790-425a.jpg", "Spice");
				$arraysierra = array("homespunsierra", "http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-sierra-5.gif", "Sierra");
				$arraydesertmountain = array("homespundesertmountain", "http://ep.yimg.com/ay/yhst-35918166028110/lion-brand-homespun-yarn-desert-mountain-3.gif", "Desert Mountain");
				$arraycolonial = array("homespuncolonial", "http://ep.yimg.com/ay/yhst-132146841436290/homespun-yarn-colonial-8.jpg", "Colonial");
				$arraymontanasky = array("homespunmontanasky", "http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-montana-sky-6.gif", "Montana Sky");
				$arrayplum = array("homespunplum", "https://d2d00szk9na1qq.cloudfront.net/Product/78161e82-74d1-44c4-b43e-9abe09db649b/Images/Large_0326186.jpg", "Plum");
				$arraycherryblossom = array("homespuncherryblossom", "http://ep.yimg.com/ay/yhst-132146841436290/homespun-yarn-cherry-blossom-8.jpg", "Cherry Blossom");
				$arraycoralreef = array("homespuncoralreef", "http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-coral-reef-7.jpg", "Coral Reef");
				$arraydelft = array("homespundelft", "http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-delft-6.gif", "Delft");
				$arraymimosa = array("homespunmimosa", "http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AAPM_PRD/on/demandware.static/-/Sites-sales-catalog/default/dw60532bff/images/products/3416625.jpg?sw=1500&sh=1500", "Mimosa");
				$arraymixedberries = array("homespunmixedberries", "https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010790P_mixed-berries.tif&wid=480&cvt=jpeg", "Mixed Berries");
				$arrayocean = array("homespunocean", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw8c97741c/images/hi-res/17/1777408.jpg?sw=350&sh=350&sm=fit", "Ocean");
				$arrayolive = array("homespunolive", "http://www.deramores.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0008_8_2.jpg", "Olive");
				$arrayparfait = array("homespunparfait", "https://d2d00szk9na1qq.cloudfront.net/Product/f6dc1478-dace-4314-b28a-bd1bb16b0289/Images/Large_LBY-262.jpg", "Parfait");
				$arraypesto = array("homespunpesto", "http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-pesto-7.jpg", "Pesto");
				$arraypurplehaze = array("homespunpurplehaze", "http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AAPM_PRD/on/demandware.static/-/Sites-sales-catalog/default/dwd701d6bd/images/products/3416658.jpg?sw=1500&sh=1500", "Purple Haze");
				$arrayregency = array("homespunregency", "http://ep.yimg.com/ay/yhst-132146841436290/homespun-yarn-regency-7.jpg", "Regency");
				$arraywaterfall = array("homespunwaterfall", "https://d2d00szk9na1qq.cloudfront.net/Product/f2afd136-89a0-49d7-b757-e51f26071b4e/Images/Large_LBY-957.jpg", "Waterfall");
				$arraywildfire = array("homespunwildfire", "https://d2d00szk9na1qq.cloudfront.net/Product/ecde95f4-6148-4911-ba43-6ecb87971810/Images/Large_LBY-265.jpg", "Wildfire");
				$arraypearls = array("homespunpearls", "https://d2d00szk9na1qq.cloudfront.net/Product/ab5b3190-3022-44db-8a1a-189a8d4e8ec7/Images/Large_LBY-269.jpg", "Pearls");
				$arraybluemoon = array("homespunbluemoon", "https://d2d00szk9na1qq.cloudfront.net/Product/890ed4a7-aeb1-4ffc-ad61-2710f49169bb/Images/Large_0326189.jpg", "Blue Moon");
				$arrayclaret = array("homespunclaret", "https://d2d00szk9na1qq.cloudfront.net/Product/9184ac23-0b5e-4a04-9df2-987139126e3e/Images/Large_0345364.jpg", "Claret");
				$arrayforest = array("homespunforest", "http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-forest-2.gif", "Forest");
				$arraypetuniastripes = array("homespunpetuniastripes", "http://isv.cdn.loveknitting.com/index.php/v1/images/90770789-314f-455e-800b-94ae7bee6321.jpg", "Petunia Stripes");

			$arrayhomespuncolors = array($arrayhepplewhite, $arrayclouds, $arrayedwardian, $arrayhblack, $arraygolden, $arrayspice, $arraywildfire, $arraybarley, $arrayshaker, $arraydesertmountain, $arraycream, $arrayrococo, $arraypearls, $arraysanddune, $arrayclaret, $arrayparfait, $arraycherryblossom, $arraymimosa, $arraycoralreef, $arraymixedberries, $arrayplum, $arraypurplehaze, $arraypetuniastripes, $arraycolonial, $arraybluemoon, $arraydelft, $arrayocean, $arraywaterfall, $arraymontanasky, $arrayregency, $arraypesto, $arrayforest, $arrayolive);

		//Caron Simply Soft Colors
				$arraycwhite = array("caronwhite", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw3b695d73/images/hi-res/54/5408000.jpg?sw=350&sh=350&sm=fit", "White");
				$arrayoffwhite = array("caronoffwhite", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw053043ec/images/hi-res/54/5408034.jpg?sw=350&sh=350&sm=fit", "Off White");
				$arraymaize = array("caronmaize", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwbd8c2a2e/images/hi-res/10/10105153.jpg?sw=350&sh=350&sm=fit", "Maize");
				$arraysunshine = array("caronsunshine", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwc21f48dc/images/hi-res/10/10617686.jpg?sw=350&sh=350&sm=fit", "Sunshine");
				$arraygold = array("carongold", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw9f7d8a45/images/hi-res/13/13922091.jpg?sw=350&sh=350&sm=fit", "Gold");
				$arraybone = array("caronbone", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw7810334b/images/hi-res/54/5408059.jpg?sw=350&sh=350&sm=fit", "Bone");
				$arraygrey = array("carongrey", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwb66ad859/images/hi-res/62/6206171.jpg?sw=350&sh=350&sm=fit", "Grey");
				$arraycharcoal = array("caroncharcoal", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw189b7ad7/images/hi-res/12/12436713.jpg?sw=350&sh=350&sm=fit", "Charcoal");
				$arrayblack = array("caronblack", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw79e9545a/images/hi-res/54/5408216.jpg?sw=350&sh=350&sm=fit", "Black");
				$arraypumpkin = array("caronpumpkin", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwedd0ef6e/images/hi-res/12/12664496.jpg?sw=350&sh=350&sm=fit", "Pumpkin");
				$arraytaupe = array("carontaupe", "http://media.woolwarehouse.co.uk/media/catalog/product/cache/1/image/750x500/9df78eab33525d08d6e5fb8d27136e95/c/r/cr_simplysoft_9783_0.jpg", "Taupe");
				$arraypersimmon = array("caronpersimmon", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw439173a3/images/hi-res/10/10617678.jpg?sw=350&sh=350&sm=fit", "Persimmon");
				$arraysoftpink = array("caronsoftpink", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw1e353ca0/images/hi-res/54/5408125.jpg?sw=350&sh=350&sm=fit", "Soft Pink");
				$arrayvictorianrose = array("caronvictorianrose", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw47d6e3fb/images/hi-res/54/5413760.jpg?sw=350&sh=350&sm=fit", "Victorian Rose");
				$arraystrawberry = array("caronstrawberry", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw453b1d5e/images/hi-res/10/10821767.jpg?sw=350&sh=350&sm=fit", "Strawberry");
				$arraylightcountrypeach = array("caronlightcountrypeach", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw8ce663df/images/hi-res/54/5408265.jpg?sw=350&sh=350&sm=fit", "Country Peach");
				$arrayfushia = array("caronfushia", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw7edef1b4/images/hi-res/12/12864633.jpg?sw=350&sh=350&sm=fit", "Fushia");
				$arrayiris = array("caroniris", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw42806259/images/hi-res/98/9857673.jpg?sw=350&sh=350&sm=fit", "Iris");
				$arraylavenderblue = array("caronlavenderblue", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw0a99de8b/images/hi-res/10/10617694.jpg?sw=350&sh=350&sm=fit", "Lavender Blue");
				$arraycountryblue = array("caroncountryblue", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw6fd2b053/images/hi-res/54/5408091.jpg?sw=350&sh=350&sm=fit", "Country Blue");
				$arraylightcountryblue = array("caronlightcountryblue", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwb66208de/images/hi-res/54/5413984.jpg?sw=350&sh=350&sm=fit", "Light Blue");
				$arraysoftblue = array("caronsoftblue", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw9ea82edc/images/hi-res/54/5408083.jpg?sw=350&sh=350&sm=fit", "Soft Blue");
				$arraydarkcountryblue = array("carondarkcountryblue", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwd5230a0d/images/hi-res/54/5408158.jpg?sw=350&sh=350&sm=fit", "Dark Blue");
				$arrayroyalblue = array("caronroyalblue","http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw60ebd93b/images/hi-res/12/12664488.jpg?sw=350&sh=350&sm=fit", "Royal Blue");
				$arraycolbalt = array("caroncobalt", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw4824dabd/images/hi-res/13/13922109.jpg?sw=350&sh=350&sm=fit", "Cobalt");
				$arraycocean = array("caronocean", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw3f502766/images/hi-res/10/10617892.jpg?sw=350&sh=350&sm=fit", "Ocean");
				$arraypagoda = array("caronpagoda", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw9036e9a7/images/hi-res/10/10105203.jpg?sw=350&sh=350&sm=fit", "Pagoda");
				$arraygreen = array("carongreen", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw56ceae88/images/hi-res/15/15015944.jpg?sw=350&sh=350&sm=fit", "Green");
				$arraydarksage = array("carondarksage", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwb8659b72/images/hi-res/54/5408190.jpg?sw=350&sh=350&sm=fit", "Dark Sage");
				$arraypistachio = array("caronpistachio", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw0408c115/images/hi-res/10/10105161.jpg?sw=350&sh=350&sm=fit", "Pistachio");
				$arraywoodland = array("caronwoodland", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwdc7bfa89/images/hi-res/15/15015928.jpg?sw=350&sh=350&sm=fit", "Woodland");

			$arraycaroncolors = array($arraycwhite, $arraygrey, $arraycharcoal, $arrayblack, $arrayoffwhite, $arraybone, $arraysunshine, $arraygold, $arraypersimmon, $arraypumpkin, $arraytaupe, $arraylightcountrypeach, $arraysoftpink, $arrayvictorianrose, $arraystrawberry, $arrayfushia, $arrayiris, $arraylavenderblue, $arraysoftblue, $arraycountryblue, $arraycolbalt, $arrayroyalblue, $arraycocean, $arraypagoda, $arraygreen, $arraydarksage, $arraypistachio, $arraywoodland);

		//Premier Parfait Colors
				$arraypwhite = array("parfaitwhite", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw842d4a99/images/hi-res/12/12866711.jpg?sw=350&sh=350&sm=fit", "White");
				$arraypcream = array("parfaitcream", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw463aa837/images/hi-res/12/12866216.jpg?sw=350&sh=350&sm=fit", "Cream");
				$arraypblack = array("parfaitblack", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dweb2e6019/images/hi-res/12/12866299.jpg?sw=350&sh=350&sm=fit", "Black");
				$arraylicorice = array("parfaitlicorice", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw382ebecc/images/hi-res/12/12866869.jpg?sw=350&sh=350&sm=fit", "'Licoricetwist'");
				$arraycandycorn = array("parfaitcandycorn", "http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwc69c4f8b/images/hi-res/12/12866836.jpg?sw=350&sh=350&sm=fit", "Candy Corn");
				$arraytoffee = array("parfaittoffee", "https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_toffee.tif&wid=1000=&cvt=jpeg", "Toffee");
				$arraybutter = array("parfaitbutter", "https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_butter.tif&wid=480&cvt=jpeg", "Butter");
				$arraylemonice = array("parfaitlemonice", "https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_lemon-ice.tif&wid=480&cvt=jpeg", "Lemon Ice");
				$arraycottoncandy = array("parfaitcottoncandy", "https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_cotton-candy.tif&wid=480&cvt=jpeg", "Cotton Candy");
				$arraycherry = array("parfaitcherry", "https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_cherry.tif&wid=480&cvt=jpeg", "Cherry");
				$arraycherrypie = array("parfaitcherrypie", "https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_cherry-pie.tif&wid=480&cvt=jpeg", "Cherry Pie");
				$arraymeringue = array("parfaitmeringue", "https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_meringue.tif&wid=480&cvt=jpeg", "Meringue");
				$arrayrockcandy = array("parfaitrockcandy", "https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_rock-candy.tif&wid=480&cvt=jpeg", "Rock Candy");
				$arraymenthe = array("parfaitmenthe", "https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_creme-de-menthe.tif&wid=480&cvt=jpeg", "Creme de Menthe");
				$arraylemonblueberry = array("parfaitlemonblueberry", "https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_lemon-blueberry.tif&wid=480&cvt=jpeg", "Lemon Blueberry");
				$arrayblueberry = array("parfaitblueberry", "https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_blueberry.tif&wid=480&cvt=jpeg", "Blueberry");
				$arraywintergreen = array("parfaitwintergreen", "https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_wintergreen.tif&wid=480&cvt=jpeg", "Wintergreen");
				$arraymelon = array("parfaitmelon", "https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_melon.tif&wid=480&cvt=jpeg", "Melon");

			$arrayparfaitcolors = array($arraypwhite, $arraypcream, $arraypblack, $arraylicorice, $arraytoffee, $arraybutter, $arraylemonice, $arraycandycorn, $arraycherrypie, $arraycherry, $arraycottoncandy, $arraymeringue, $arrayrockcandy, $arraymenthe, $arraylemonblueberry, $arrayblueberry, $arraywintergreen, $arraymelon);

		//Knit Picks Comfy Colors
				$arrayblackberry = array("comfyblackberry", "http://d2q9kw5vp0we94.cloudfront.net/regular/24157.jpg", "Blackberry");
				$arraykpwhite = array("comfywhite", "http://d2q9kw5vp0we94.cloudfront.net/regular/25315.jpg", "White");
				$arraykpblack = array("comfyblack", "http://d2q9kw5vp0we94.cloudfront.net/regular/25316.jpg", "Black");
				$arraywhisker = array("comfywhisker", "http://d2q9kw5vp0we94.cloudfront.net/regular/24800.jpg", "Whisker");
				$arrayhawk = array("comfyhawk", "http://d2q9kw5vp0we94.cloudfront.net/regular/25312.jpg", "Hawk");
				$arraycoffee = array("comfycoffee", "http://d2q9kw5vp0we94.cloudfront.net/regular/26673.jpg", "Coffee");
				$arraycarrot = array("comfycarrot", "http://d2q9kw5vp0we94.cloudfront.net/regular/25771.jpg", "Carrot");
				$arraydoe = array("comfydoe", "http://d2q9kw5vp0we94.cloudfront.net/regular/24797.jpg", "Doe");
				$arrayivory = array("comfyivory", "http://d2q9kw5vp0we94.cloudfront.net/regular/24162.jpg", "Ivory");
				$arrayflamingo = array("comfyflamingo", "http://d2q9kw5vp0we94.cloudfront.net/regular/24154.jpg", "Flamingo");
				$arraypeony = array("comfypeony", "http://d2q9kw5vp0we94.cloudfront.net/regular/24423.jpg", "Peony");
				$arraypomegranate = array("comfypomegranate", "http://d2q9kw5vp0we94.cloudfront.net/regular/24160.jpg", "Pomegranate");
				$arrayrosehip = array("comfyrosehip", "http://d2q9kw5vp0we94.cloudfront.net/regular/25769.jpg", "Rosehip");
				$arrayladyslipper = array("comfyladyslipper", "http://d2q9kw5vp0we94.cloudfront.net/regular/25767.jpg", "Lady Slipper");
				$arrayfairytale = array("comfyfairytale", "http://d2q9kw5vp0we94.cloudfront.net/regular/25313.jpg", "Fairytale");
				$arraylilac = array("comfylilac", "http://d2q9kw5vp0we94.cloudfront.net/regular/24798.jpg", "Lilac");
				$arrayseafoam = array("comfyseafoam", "http://d2q9kw5vp0we94.cloudfront.net/regular/24153.jpg", "Sea Foam");
				$arraymarlin = array("comfymarlin", "http://d2q9kw5vp0we94.cloudfront.net/regular/24422.jpg", "Marlin");
				$arrayplanetarium = array("comfyplanetarium", "http://d2q9kw5vp0we94.cloudfront.net/regular/24159.jpg", "Planetarium");
				$arraylightblue = array("comfylightblue", "http://d2q9kw5vp0we94.cloudfront.net/regular/25311.jpg", "Light Blue");
				$arraymarina = array("comfymarina", "http://d2q9kw5vp0we94.cloudfront.net/regular/25768.jpg", "Marina");
				$arrayhoneydew = array("comfyhoneydew", "http://d2q9kw5vp0we94.cloudfront.net/regular/24152.jpg", "Honey Dew");
				$arraypeapod = array("comfypeapod", "http://d2q9kw5vp0we94.cloudfront.net/regular/24801.jpg", "Peapod");
				$arrayjalapeno = array("comfyjalapeno", "http://d2q9kw5vp0we94.cloudfront.net/regular/24420.jpg", "Jalapeno");
				$arraycelestial = array("comfycelestial", "http://d2q9kw5vp0we94.cloudfront.net/regular/25314.jpg", "Celestial");


			$arraycomfycolors = array($arraykpwhite, $arraywhisker, $arrayhawk, $arraykpblack, $arrayivory, $arraydoe, $arraycoffee, $arraycarrot, $arrayflamingo, $arraypeony, $arraypomegranate, $arrayrosehip, $arrayladyslipper, $arrayfairytale, $arrayblackberry, $arraylilac, $arraylightblue, $arraycelestial, $arraymarlin, $arrayplanetarium, $arrayseafoam, $arraymarina, $arrayhoneydew, $arraypeapod, $arrayjalapeno);


		//No CC
				$arraynocc = array("nocc", "", "NONE");
}
*/
