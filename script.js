
$(document).ready(function() {
	$("#data").text("item=&yarn=&mc=&cc=&cc_areas=&accent_color=&email=&");

	//YARN COLOR INFORMATION
		// Object = {
		// 	"key":"value",
		// 	"key":"value",
		// 	"key":"value"
		// }

		// Array = ["value","value","value"];
		// (index =    0,      1,      2)

		var Pipsqueak = {
			"White":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59005-162059-B-PIP-WhiteyWhite.jpg",
			"Vanilla":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59008-162059-B-PIP-Vanilla_1.jpg",
			"Chocolate":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59012-162059-B-PIP-Chocolate.jpg",
			"Lemon":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59610-162059-B-PIP-LemonSwirl.jpg",
			"Baby Blue":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59128-162059-B-PIP-BabyBlue.jpg",
			"Blue Swirl":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59115-162059-B-PIP-BlueJeansSwirl_1.jpg",
			"Denim":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59114-162059-B-PIP-Denim.jpg",
			"Ice Blue":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59745-162059-B-PIP-BlueIce.jpg",
			"Baby Pink":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59421-162059-B-PIP-TickleMePink_1.jpg",
			"Pink Swirl":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/s/w/sw-58413-162058-b-pip-pinkswirl-copy.jpg",
			"Neopolitan":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59245-162059-B-PIP-Neopolitan.jpg",
			"Grape":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/s/w/sw-59332-162059-bernat-pipsqueak-grape.jpg",
			"Lime":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59222-162059-B-PIP-LimeGreen.jpg",
			"Funny Bunny":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59744-162059-B-PIP-FunnyBunny.jpg",
			"Candy Girl":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59415-162059-B-PIP-CandyGirl.jpg",
			"Sittin' Pretty":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59315-162059-B-PIP-SittinPretty.jpg",
			"Baby Baby":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59306-162059-B-PIP-BabyBaby.jpg"
		}

		var Homespun = {
			"White":"https://d2d00szk9na1qq.cloudfront.net/Product/7deac14c-a209-45a0-9db0-7c259e5ba7e8/Images/Medium_LBY-205.jpg",
			"Cream":"https://d2d00szk9na1qq.cloudfront.net/Product/24ef842a-b3f6-4765-b610-55bffb1e63e5/Images/Medium_LBY-243.jpg",
			"Rococo":"https://d2d00szk9na1qq.cloudfront.net/Product/d92c17db-d056-4b2e-ab4a-e4cdd51650e8/Images/Medium_LBY-248.jpg",
			"Barley":"https://d2d00szk9na1qq.cloudfront.net/Product/4e37b5dc-971b-4ccc-957a-23de0ad48c60/Images/Large_LBY-246.jpg",
			"Clouds":"https://d2d00szk9na1qq.cloudfront.net/Product/4c7672af-4a79-4677-ba94-b32238b6072e/Images/Medium_0326187.jpg",
			"Edwardian":"https://d2d00szk9na1qq.cloudfront.net/Product/25bc937e-a6a8-419c-91d0-d02f88e98ccd/Images/Medium_LBY-251.jpg",
			"Golden":"https://d2d00szk9na1qq.cloudfront.net/Product/d3648357-a709-459e-b98f-f0413234d05e/Images/Medium_LBY-208.jpg",
			"Sand Dune":"http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-sand-dune-2.gif",
			"Shaker":"https://d2d00szk9na1qq.cloudfront.net/Product/87bc06a5-2793-4233-95a6-a538bc5b412c/Images/Medium_LBY-249.jpg",
			"Black":"https://d2d00szk9na1qq.cloudfront.net/Product/2af5de9f-faca-4854-90f3-bb3e79ab04bc/Images/Medium_LBY-253.jpg",
			"Spice":"http://www.lionbrand.com/stores/eyarn/pictures/790-425a.jpg",
			"Sierra":"http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-sierra-5.gif",
			"Desert Mountain":"http://ep.yimg.com/ay/yhst-35918166028110/lion-brand-homespun-yarn-desert-mountain-3.gif",
			"Colonial":"http://ep.yimg.com/ay/yhst-132146841436290/homespun-yarn-colonial-8.jpg",
			"Montana Sky":"http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-montana-sky-6.gif",
			"Plum":"https://d2d00szk9na1qq.cloudfront.net/Product/78161e82-74d1-44c4-b43e-9abe09db649b/Images/Large_0326186.jpg",
			"Cherry Blossom":"http://ep.yimg.com/ay/yhst-132146841436290/homespun-yarn-cherry-blossom-8.jpg",
			"Coral Reef":"http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-coral-reef-7.jpg",
			"Delft":"http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-delft-6.gif",
			"Mimosa":"http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AAPM_PRD/on/demandware.static/-/Sites-sales-catalog/default/dw60532bff/images/products/3416625.jpg?sw=1500&sh=1500",
			"Mixed Berries":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010790P_mixed-berries.tif&wid=480&cvt=jpeg",
			"Ocean":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw8c97741c/images/hi-res/17/1777408.jpg?sw=350&sh=350&sm=fit",
			"Olive":"http://www.deramores.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0008_8_2.jpg",
			"Parfait":"https://d2d00szk9na1qq.cloudfront.net/Product/f6dc1478-dace-4314-b28a-bd1bb16b0289/Images/Large_LBY-262.jpg", 
			"Pesto":"http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-pesto-7.jpg",
			"Purple Haze":"http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AAPM_PRD/on/demandware.static/-/Sites-sales-catalog/default/dwd701d6bd/images/products/3416658.jpg?sw=1500&sh=1500", 
			"Regency":"http://ep.yimg.com/ay/yhst-132146841436290/homespun-yarn-regency-7.jpg",
			"Waterfall":"https://d2d00szk9na1qq.cloudfront.net/Product/f2afd136-89a0-49d7-b757-e51f26071b4e/Images/Large_LBY-957.jpg", 
			"Wildfire":"https://d2d00szk9na1qq.cloudfront.net/Product/ecde95f4-6148-4911-ba43-6ecb87971810/Images/Large_LBY-265.jpg",
			"Pearls":"https://d2d00szk9na1qq.cloudfront.net/Product/ab5b3190-3022-44db-8a1a-189a8d4e8ec7/Images/Large_LBY-269.jpg",
			"Blue Moon":"https://d2d00szk9na1qq.cloudfront.net/Product/890ed4a7-aeb1-4ffc-ad61-2710f49169bb/Images/Large_0326189.jpg",
			"Claret":"https://d2d00szk9na1qq.cloudfront.net/Product/9184ac23-0b5e-4a04-9df2-987139126e3e/Images/Large_0345364.jpg",
			"Forest":"http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-forest-2.gif",
			"Petunia Stripes":"http://isv.cdn.loveknitting.com/index.php/v1/images/90770789-314f-455e-800b-94ae7bee6321.jpg"
		}

		var Caron = {
			"White":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw3b695d73/images/hi-res/54/5408000.jpg?sw=350&sh=350&sm=fit",
			"Off White":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw053043ec/images/hi-res/54/5408034.jpg?sw=350&sh=350&sm=fit",
			"Maize":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwbd8c2a2e/images/hi-res/10/10105153.jpg?sw=350&sh=350&sm=fit",
			"Sunshine":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwc21f48dc/images/hi-res/10/10617686.jpg?sw=350&sh=350&sm=fit",
			"Gold":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw9f7d8a45/images/hi-res/13/13922091.jpg?sw=350&sh=350&sm=fit",
			"Bone":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw7810334b/images/hi-res/54/5408059.jpg?sw=350&sh=350&sm=fit",
			"Grey":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwb66ad859/images/hi-res/62/6206171.jpg?sw=350&sh=350&sm=fit",
			"Charcoal":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw189b7ad7/images/hi-res/12/12436713.jpg?sw=350&sh=350&sm=fit",
			"Black":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw79e9545a/images/hi-res/54/5408216.jpg?sw=350&sh=350&sm=fit",
			"Pumpkin":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwedd0ef6e/images/hi-res/12/12664496.jpg?sw=350&sh=350&sm=fit",
			"Taupe":"http://media.woolwarehouse.co.uk/media/catalog/product/cache/1/image/750x500/9df78eab33525d08d6e5fb8d27136e95/c/r/cr_simplysoft_9783_0.jpg",
			"Persimmon":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw439173a3/images/hi-res/10/10617678.jpg?sw=350&sh=350&sm=fit",
			"Soft Pink":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw1e353ca0/images/hi-res/54/5408125.jpg?sw=350&sh=350&sm=fit",
			"Victorian Rose":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw47d6e3fb/images/hi-res/54/5413760.jpg?sw=350&sh=350&sm=fit",
			"Strawberry":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw453b1d5e/images/hi-res/10/10821767.jpg?sw=350&sh=350&sm=fit",
			"Light Country Peach":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw8ce663df/images/hi-res/54/5408265.jpg?sw=350&sh=350&sm=fit",
			"Fushia":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw7edef1b4/images/hi-res/12/12864633.jpg?sw=350&sh=350&sm=fit",
			"Iris":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw42806259/images/hi-res/98/9857673.jpg?sw=350&sh=350&sm=fit",
			"Lavender Blue":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw0a99de8b/images/hi-res/10/10617694.jpg?sw=350&sh=350&sm=fit",
			"Country Blue":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw6fd2b053/images/hi-res/54/5408091.jpg?sw=350&sh=350&sm=fit",
			"Light Country Blue":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwb66208de/images/hi-res/54/5413984.jpg?sw=350&sh=350&sm=fit",
			"Soft Blue":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw9ea82edc/images/hi-res/54/5408083.jpg?sw=350&sh=350&sm=fit",
			"Dark Country Blue":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwd5230a0d/images/hi-res/54/5408158.jpg?sw=350&sh=350&sm=fit",
			"Royal Blue":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw60ebd93b/images/hi-res/12/12664488.jpg?sw=350&sh=350&sm=fit",
			"Cobalt":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw4824dabd/images/hi-res/13/13922109.jpg?sw=350&sh=350&sm=fit",
			"Ocean":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw3f502766/images/hi-res/10/10617892.jpg?sw=350&sh=350&sm=fit",
			"Pagoda":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw9036e9a7/images/hi-res/10/10105203.jpg?sw=350&sh=350&sm=fit",
			"Green":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw56ceae88/images/hi-res/15/15015944.jpg?sw=350&sh=350&sm=fit",
			"Dark Sage":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwb8659b72/images/hi-res/54/5408190.jpg?sw=350&sh=350&sm=fit",
			"Pistachio":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw0408c115/images/hi-res/10/10105161.jpg?sw=350&sh=350&sm=fit",
			"Woodland":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwdc7bfa89/images/hi-res/15/15015928.jpg?sw=350&sh=350&sm=fit"
		}	

		var Parfait = {
			"White":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw842d4a99/images/hi-res/12/12866711.jpg?sw=350&sh=350&sm=fit",
			"Cream":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw463aa837/images/hi-res/12/12866216.jpg?sw=350&sh=350&sm=fit",
			"Black":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dweb2e6019/images/hi-res/12/12866299.jpg?sw=350&sh=350&sm=fit",
			"Licorice":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw382ebecc/images/hi-res/12/12866869.jpg?sw=350&sh=350&sm=fit",
			"Candy Corn":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwc69c4f8b/images/hi-res/12/12866836.jpg?sw=350&sh=350&sm=fit",
			"Toffee":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_toffee.tif&wid=1000=&cvt=jpeg",
			"Butter":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_butter.tif&wid=480&cvt=jpeg",
			"Lemon Ice":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_lemon-ice.tif&wid=480&cvt=jpeg",
			"Cotton Candy":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_cotton-candy.tif&wid=480&cvt=jpeg",
			"Cherry":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_cherry.tif&wid=480&cvt=jpeg",
			"Cherry Pie":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_cherry-pie.tif&wid=480&cvt=jpeg",
			"Meringue":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_meringue.tif&wid=480&cvt=jpeg",
			"Rock Candy":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_rock-candy.tif&wid=480&cvt=jpeg",
			"Menthe":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_creme-de-menthe.tif&wid=480&cvt=jpeg",
			"Lemon Blueberry":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_lemon-blueberry.tif&wid=480&cvt=jpeg",
			"Blueberry":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_blueberry.tif&wid=480&cvt=jpeg",
			"Wintergreen":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_wintergreen.tif&wid=480&cvt=jpeg",
			"Melon":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_melon.tif&wid=480&cvt=jpeg"
		}

		var KnitPicks = {
			"Blackberry":"http://d2q9kw5vp0we94.cloudfront.net/regular/24157.jpg",
			"White":"http://d2q9kw5vp0we94.cloudfront.net/regular/25315.jpg",
			"Black":"http://d2q9kw5vp0we94.cloudfront.net/regular/25316.jpg",
			"Whisker":"http://d2q9kw5vp0we94.cloudfront.net/regular/24800.jpg",
			"Hawk":"http://d2q9kw5vp0we94.cloudfront.net/regular/25312.jpg",
			"Coffee":"http://d2q9kw5vp0we94.cloudfront.net/regular/26673.jpg",
			"Carrot":"http://d2q9kw5vp0we94.cloudfront.net/regular/25771.jpg",
			"Doe":"http://d2q9kw5vp0we94.cloudfront.net/regular/24797.jpg",
			"Ivory":"http://d2q9kw5vp0we94.cloudfront.net/regular/24162.jpg",
			"Flamingo":"http://d2q9kw5vp0we94.cloudfront.net/regular/24154.jpg",
			"Peony":"http://d2q9kw5vp0we94.cloudfront.net/regular/24423.jpg",
			"Pomegranate":"http://d2q9kw5vp0we94.cloudfront.net/regular/24160.jpg",
			"Rosehip":"http://d2q9kw5vp0we94.cloudfront.net/regular/25769.jpg",
			"Lady Slipper":"http://d2q9kw5vp0we94.cloudfront.net/regular/25767.jpg",
			"Fairytale":"http://d2q9kw5vp0we94.cloudfront.net/regular/25313.jpg",
			"Lilac":"http://d2q9kw5vp0we94.cloudfront.net/regular/24798.jpg",
			"Sea Foam":"http://d2q9kw5vp0we94.cloudfront.net/regular/24153.jpg",
			"Marlin":"http://d2q9kw5vp0we94.cloudfront.net/regular/24422.jpg",
			"Planetarium":"http://d2q9kw5vp0we94.cloudfront.net/regular/24159.jpg",
			"Light blue":"http://d2q9kw5vp0we94.cloudfront.net/regular/25311.jpg",
			"Comfy Marina":"http://d2q9kw5vp0we94.cloudfront.net/regular/25768.jpg",
			"Honey Dew":"http://d2q9kw5vp0we94.cloudfront.net/regular/24152.jpg",
			"Peapod":"http://d2q9kw5vp0we94.cloudfront.net/regular/24801.jpg",
			"Jalapeno":"http://d2q9kw5vp0we94.cloudfront.net/regular/24420.jpg",
			"Celestial":"http://d2q9kw5vp0we94.cloudfront.net/regular/25314.jpg"
		}

		var yarn = {
			"Pipsqueak":Pipsqueak,
			"Homespun":Homespun,
			"Caron":Caron,
			"Parfait":Parfait,
			"KnitPicks":KnitPicks
		}

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
		else if ( get("email").length === 0) {
			var pagePicked = "email";
		}

		console.log(pagePicked);

		buildPage(pagePicked);
	}

	//"Create" Functions
		function createPreviews() {
			$("#preview").empty()
			.append("<div class='previewdiv_profile'></div>")
			.append("<div class='previewdiv_face'></div>")
			.append("<div class='previewdiv_zoom'></div>");
		}

		function createCat() {
			$(".previewdiv_face").empty()
				.append("<div id='catface' class='catpart_face previewPart yarnable' style='background-color: black'></div>")
				.append("<div id='catface_nose' class='catpart_face previewPart' style='background-color: pink'></div>")
				.append("<div id='catface_nose_line' class='catpart_face previewPart' style='background-color: black'></div>")
				.append("<div id='catface_pupil_left' class='catpart_face previewPart pupils' style='background-color: black'></div>")
				.append("<div id='catface_pupil_right' class='catpart_face previewPart pupils' style='background-color: black'></div>")
				.append("<div id='catface_iris_left' class='catpart_face previewPart accentable' style='background-color: white'></div>")
				.append("<div id='catface_iris_right' class='catpart_face previewPart accentable' style='background-color: white'></div>")
				.append("<div id='catface_ear_left' class='catpart_face previewPart yarnable contrastable' style='background-color: black'></div>")
				.append("<div id='catface_ear_right' class='catpart_face previewPart yarnable contrastable' style='background-color: black'></div>")
				.append("<div id='catface_chin' class='catpart_face previewPart yarnable contrastable' style='background-color: black'></div>")
				.append("<div id='catface_nose-area' class='catpart_face previewPart yarnable contrastable' style='background-color: black'></div>")
				.append("<div id='catface_muzzle' class='catpart_face previewPart yarnable contrastable' style='background-color: black'></div>");

			$(".previewdiv_profile").empty()
				.append("<div id='catprofile' class='catpart_profile previewPart yarnable' style='background-color: black'></div>")
				.append("<div id='catprofile_legline_front' class='catpart_profile previewPart line'></div>")
				.append("<div id='catprofile_legline_back' class='catpart_profile previewPart line'></div>")
				.append("<div id='catprofile_ears' class='catpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
				.append("<div id='catprofile_nose-area' class='catpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
				.append("<div id='catprofile_muzzle' class='catpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
				.append("<div id='catprofile_stomach' class='catpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
				.append("<div id='catprofile_chest' class='catpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
				.append("<div id='catprofile_chin' class='catpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
				.append("<div id='catprofile_paw_front_left' class='catpart_profile yarnable previewPart contrastable' style='background-color: black'></div>")
				.append("<div id='catprofile_paw_front_right' class='catpart_profile yarnable previewPart contrastable' style='background-color: black'></div>")
				.append("<div id='catprofile_paw_back_left' class='catpart_profile yarnable previewPart contrastable' style='background-color: black'></div>")
				.append("<div id='catprofile_paw_back_right' class='catpart_profile yarnable previewPart contrastable' style='background-color: black'></div>")
				.append("<div id='catprofile_tail' class='catpart_profile previewPart yarnable contrastable' style='background-color: black'></div>");

			$(".contrastable").hide();
		}

		function createCatButtons() {
			//Liz, make sure you update this - James
			$("#options").empty()
				.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_ears'>Ears</button>")
				.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_nose-area, catface_nose-area'>Nose Area</button>")
				.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_muzzle,catface_muzzle'>Muzzle</button>")
				.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_chin, catface_chin'>Chin and Stomach</button>")

				.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_paw_front_right'>Right Front Paw</button>")
				.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_paw_front_left'>Left Front Paw</button>")
				.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_paw_back_right'>Right Back Paw</button>")
				.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_paw_back_left'>Left Back Paw</button>")
				.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_tail'>Tail</button>");
		}

		function createDog() {
			$(".previewdiv_face").empty().append("<div id='dogface' class='dogpart_face previewPart' style='background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/8e427328807052.56053ef96e121.jpg); background-repeat: no-repeat; background-size: contain'></div>");
			$(".previewdiv_profile").empty()
				.append("<div id='dogprofile' class='dogpart_profile previewPart yarnable' style='background-color: black'></div>")
				.append("<div id='dogprofile_backFRONTLEG' class='dogpart_profile previewPart yarnable' style='background-color: black'></div>")
				.append("<div id='dogprofile_backBACKLEG' class='dogpart_profile previewPart yarnable' style='background-color: black'></div>")
				.append("<div id='dogprofile_ears' class='dogpart_profile previewPart yarnable' style='background-color: black'></div>")
				.append("<div id='dogprofile_ear_line' class='dogpart_profile line' style='background-color: white'></div>");

			$(".contrastable").hide();
			//Liz, add pupils class to dog pupils
		}

		function createDogButtons() {
			//Liz, make sure you update this - James
			$("#options").empty()
				.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_tail'>tail</button>")
				.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_muzzle,catface_muzzle'>muzzle</button>");
		}

		function createBunny() {
			$(".previewdiv_face").empty()
				.append("<div id='bunnyface' class='bunnypart_face previewPart yarnable' style='background-color: black'></div>")
				.append("<div id='bunnyface_chin' class='bunnypart_face previewPart yarnable contrastable' style='background-color:black'></div>");
					
			$(".previewdiv_profile").empty()
				//permanent
				.append("<div id='bunnyprofile' class='bunnypart_profile previewPart yarnable' style='background-color: black'></div>")
				.append("<div id='bunnyprofile_ear_front' class='bunnypart_profile previewPart yarnable' style='background-color: black'></div>")
				.append("<div id='bunnyprofile_ear_back' class='bunnypart_profile previewPart yarnable' style='background-color: black'></div>")
				.append("<div id='bunnyprofile_ear_line' class='bunnypart_profile line' style='background-color:white'></div>")
				.append("<div id='bunnyprofile_backleg' class='bunnypart_profile previewPart yarnable' style='background-color: black'></div>")
				.append("<div id='bunnyprofile_backleg_line' class='bunnypart_profile line' style='background-color:white'></div>")
				.append("<div id='bunnyprofile_eye' class='bunnypart_profile pupils' style='background-color:white'></div>")
				.append("<div id='bunnyprofile_nose' class='bunnypart_profile' style='background-color:pink'></div>")

				//variable
				.append("<div id='bunnyprofile_ear_inner' class='bunnypart_profile accentable' style='background-color:white'></div>")
				.append("<div id='bunnyprofile_chin' class='bunnypart_profile yarnable contrastable' style='background-color:white'></div>")
				.append("<div id='bunnyprofile_stomach' class='bunnypart_profile yarnable contrastable' style='background-color:white'></div>")
				.append("<div id='bunnyprofile_tail_whole' class='bunnypart_profile yarnable contrastable' style='background-color:white'></div>")
				.append("<div id='bunnyprofile_tail_half' class='bunnypart_profile yarnable contrastable' style='background-color:white'></div>");

			$(".contrastable").hide();
		}

		function createBunnyButtons() {
			//Liz, make sure you update this - James
			$("#options").empty()
				.append("<button class='btn btn-lg btn-default cc_areas_button' value='bunnyprofile_tail_whole'>tail</button>")
				.append("<button class='btn btn-lg btn-default cc_areas_button' value='bunnyprofile_chin,bunnyface_chin,bunnyprofile_stomach'>chin and stomach</button>");
		}

	//build page(s)
		//instructions will be based on which page is passed in as your input (item, yarn, mc, etc.)
		function buildPage(pagePicked) {

// ITEM
		if (pagePicked === "item") {

			//append the item options
				$("#options").empty()
				.append("<button id='CAT' class='btn btn-lg btn-default itembutton' value='cat'>Cat</button>")
				.append("<button id='DOG' class='btn btn-lg btn-default itembutton' value='dog'>Dog</button>")
				.append("<button id='BUNNY' class='btn btn-lg btn-default itembutton' value='bunny'>Bunny</button>");
				
			//append the item preview
				createPreviews();

			//Hover Cat	
				$(document).on("mouseenter", "#CAT", function() {
					$(this).removeClass("btn-default").addClass("btn-success");
					createCat();
				});
				$(document).on("mouseleave", "#CAT", function() {
					$(this).addClass("btn-default").removeClass("btn-success");
					createPreviews();
				});

			//Hover Dog
				$(document).on("mouseenter", "#DOG", function() {
					$(this).removeClass("btn-default").addClass("btn-success");
					createDog();
				});

				$(document).on("mouseleave", "#DOG", function() {
					$(this).addClass("btn-default").removeClass("btn-success");
					createPreviews();
				});
		

			//Hover Bunny
				$(document).on("mouseenter", "#BUNNY", function() {
					$(this).removeClass("btn-default").addClass("btn-success");
					createBunny();
				});

				$(document).on("mouseleave", "#BUNNY", function() {
					$(this).addClass("btn-default").removeClass("btn-success");
					createPreviews();
				});

			//Click
				$(document).on("click", ".itembutton", function() {
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
					.append("<button id='Homespun' class='btn btn-lg btn-default yarnbutton' value='Homespun'>Lion Brand Homespun</button>")
					.append("<button id='Caron' class='btn btn-lg btn-default yarnbutton' value='Caron'>Caron Simply Soft</button>")
					.append("<button id='Pipsqueak' class='btn btn-lg btn-default yarnbutton' value='Pipsqueak'>Bernat Pipsqueak</button>")
					.append("<button id='Parfait' class='btn btn-lg btn-default yarnbutton' value='Parfait'>Parfait</button>")
					.append("<button id='KnitPicks' class='btn btn-lg btn-default yarnbutton' value='KnitPicks'>KnitPicks Comfy</button>");
			
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
				$(document).on("mouseenter", ".yarnbutton", function() {
					$(this).removeClass("btn-default").addClass("btn-success");
					var yarn = this.value;
					$(".previewdiv_zoom").css("background-image", "url("+yarn+".jpg)").css("background-size", "250%");
					$(".yarnable").css("background-image", "url("+yarn+".jpg)");
					$(".line").css("background-color", "black");
				});
				$(document).on("mouseleave", ".yarnbutton", function() {
					$(this).addClass("btn-default").removeClass("btn-success");
					$(".previewdiv_zoom").css("background-image", "none").css("background-color", "white");	
					$(".yarnable").css("background-image", "none").css("background-color", "black");
					$(".line").css("background-color", "white");
				});

			//Click	
				$(document).on("click", ".yarnbutton", function() {
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
			$("#options").empty();

			createPreviews();

			//get yarn type from data div
				var yarntype = get("yarn");
				console.log(yarntype);

			//get array of keys (colors for that yarn type)
				keys = Object.keys(yarn[yarntype]);
				console.log(keys);

			//loop through the keys to create the option buttons for all colors
				for (i = 0; i < keys.length; i++) {
					$("#options").append("<button id='" + keys[i] + "' class='btn btn-lg btn-default mcbutton' value='" + yarn[yarntype][ keys[i] ] + "'>" + keys[i] + "</button>");
				}
			
			//append the preview divs
				createPreviews();

			//createCat		
				if ( get("item") === "cat") {
					createCat();
				}

			//createBunny	
				else if ( get("item") === "bunny") {
					createBunny();
				}

			//createDog
				else if ( get("item") === "dog") {
					createDog();
				}

			//Hover
				$(document).on("mouseenter", ".mcbutton", function() {
					$(this).removeClass("btn-default").addClass("btn-success");
					var mc = this.value;
					$(".previewdiv_zoom").css("background-image", "url("+mc+")").css("background-size", "250%");
					$(".yarnable").css("background-image", "url("+mc+")");
					$(".line").css("background-color", "black");
				});
				$(document).on("mouseleave", ".mcbutton", function() {
					$(this).addClass("btn-default").removeClass("btn-success");
					$(".previewdiv_zoom").css("background-image", "none").css("background-color", "white");	
					$(".yarnable").css("background-image", "none").css("background-color", "black");
					$(".line").css("background-color", "white");
				});

			//Click	
				$(document).on("click", ".mcbutton", function() {
					var MC = this.id;
					var currentData = $("#data").text();
					var newData = currentData.replace("mc=&", "mc="+MC+"&");
					//$("#data").empty().append(newData);
					$("#data").text(newData);

					loadPageContents();
				});
		}

// CC (CONTRASTING COLOR)
		else if (pagePicked === "cc") {
			$("#options").empty();

			createPreviews();

			//get yarn type from data div
				var yarntype = get("yarn");
				console.log(yarntype);

			//get MC from data div
				var mainColor = get("mc");
				console.log(mainColor);

			//get array of keys (colors for that yarn type)
				keys = Object.keys(yarn[yarntype]);
				console.log(keys);

			//loop through the keys to create the option buttons for all colors
				$("#options").append("<button id= 'noCC' class='btn btn-lg btn-default ccbutton' value='" + yarn[yarntype][mainColor] + "'>No Contrasting Color</button>");
				for (i = 0; i < keys.length; i++) {
					if (keys[i] !== mainColor) {
						$("#options").append("<button id='" + keys[i] + "' class='btn btn-lg btn-default ccbutton' value='" + yarn[yarntype][ keys[i] ] + "'>" + keys[i] + "</button>");
					}
				}
			
			//append the preview divs
				createPreviews();

			//createCat		
				if ( get("item") === "cat") {
					createCat();
				}

			//createBunny	
				else if ( get("item") === "bunny") {
					createBunny();
				}

			//createDog
				else if ( get("item") === "dog") {
					createDog();
				}

			//add mainColor
				var mcURL = yarn[yarntype][mainColor];
				$(".previewdiv_zoom").css("background-image", "url("+mcURL+")").css("background-size","250%");	
				$(".yarnable").css("background-image", "url("+mcURL+")");

			//Hover
				$(document).on("mouseenter", ".ccbutton", function() {
					$(this).removeClass("btn-default").addClass("btn-success");
					var cc = this.value;
					$(".previewdiv_zoom").css("background-image", "url("+cc+")").css("background-size", "250%");
					$(".contrastable").show().css("background-image", "url("+cc+")");
					$(".line").css("background-color", "black");
				});
				$(document).on("mouseleave", ".ccbutton", function() {
					$(this).addClass("btn-default").removeClass("btn-success");
					$(".previewdiv_zoom").css("background-image", "url("+mcURL+")").css("background-size","250%");	
					$(".contrastable").hide().css("background-image", "url("+mcURL+")");
					$(".line").css("background-color", "black");
				});

			//Click	
				$(document).on("click", ".ccbutton", function() {
					var CC = this.id;
					var currentData = $("#data").text();
					var newData = currentData.replace("cc=&", "cc="+CC+"&");
					//$("#data").empty().append(newData);
					$("#data").text(newData);

					if (CC === "noCC") {
						var currentData = $("#data").text();
						var newData = currentData.replace("cc_areas=&", "cc_areas=noCC&");
						//$("#data").empty().append(newData);
						$("#data").text(newData);
					}

					loadPageContents();
				});
		}

// CC AREAS (CONTRASTING COLOR AREAS)
		else if (pagePicked === "cc_areas") {
			$("#options").empty();

			createPreviews();

			//get item from data div
				var item = get("item");
				console.log(item);

			//get yarn type from data div
				var yarntype = get("yarn");
				console.log(yarntype);

			//get MC from data div
				var mainColor = get("mc");
				console.log(mainColor);

			//get CC from data div
				var contrastingColor = get("cc");
				console.log(contrastingColor);

			//append the preview divs
				createPreviews();

			//createCat		
				if( get("item") === "cat") {
					createCat();
					createCatButtons();
				}

			//createBunny	
				else if ( get("item") === "bunny") {
					createBunny();
					createBunnyButtons();
				}

			//createDog
				else if ( get("item") === "dog") {
					createDog();
					createDogButtons();
				}

			//create extra noCC button and Submit button
				$("#options").append("<button class='btn btn-primary btn-lg' id='cc_areas_submit' style='height: 100px; font-size: 36px'>Submit</button>");
				$("#options").append("<button id='noCC_areas' class='btn btn-lg btn-danger' value='noCC'>No Contrasting Areas</button>");

			//add mainColor
				var mcURL = yarn[yarntype][mainColor];
				$(".previewdiv_zoom").css("background-image", "url("+mcURL+")").css("background-size","250%");	
				$(".yarnable").css("background-image", "url("+mcURL+")");

			//add contrastingColor
				var ccURL = yarn[yarntype][contrastingColor];

			//Hover
				$(document).on("mouseenter", ".cc_areas_button", function() {
					if(!$(this).hasClass("active")) {
						$(this).removeClass("btn-default").addClass("btn-success");
						var cc_areas = this.value;
						cc_areasArray = cc_areas.split(",");

						for (i = 0; i < cc_areasArray.length; i++) {
							$("#" + cc_areasArray[i]).show().css("background-image", "url(" + ccURL + ")");
						}
					}
				});
				$(document).on("mouseleave", ".cc_areas_button", function() {
					if (!$(this).hasClass("active")) {
						$(this).addClass("btn-default").removeClass("btn-success");
						var cc_areas = this.value;
						cc_areasArray = cc_areas.split(",");

						for (i = 0; i < cc_areasArray.length; i++) {
							$("#" + cc_areasArray[i]).hide().css("background-image", "url(" + mcURL + ")");
						}
					}
				});

			//Click	
				$(document).on("click", ".cc_areas_button", function() {
					$(this).toggleClass("active");
				});

			//Submit
				$(document).on("click", "#cc_areas_submit", function() {
					var areasArray = [];
					$(".active").each( function(index) {
						areasArray.push(this.value);
					});

					var cc_areas_final = areasArray.join(",");

					var currentData = $("#data").text();
					var newData = currentData.replace("cc_areas=&", "cc_areas="+cc_areas_final+"&");
					//$("#data").empty().append(newData);
					$("#data").text(newData);

					loadPageContents();
				});

			//No Contrasting Areas
				$(document).on("click", "#noCC_areas", function() {
					var currentData = $("#data").text();
					var newData = currentData.slice(0,currentData.indexOf("&cc=")) + "&cc=noCC&cc_areas=noCC&accent_color=&email=&";
					//$("#data").empty().append(newData);
					$("#data").text(newData);

					loadPageContents();
				});
		}

// ACCENT COLOR
		else if (pagePicked === "accent_color") {
			$("#options").empty();

			createPreviews();

			//get item from data div
				var item = get("item");
				console.log(item);

			//get yarn type from data div
				var yarntype = get("yarn");
				console.log(yarntype);

			//get MC from data div
				var mainColor = get("mc");
				console.log(mainColor);

			//get CC from data div
				var contrastingColor = get("cc");
				console.log(contrastingColor);

			//get active CC_areas from data div
				var active_cc_areas = get("cc_areas");
				active_cc_areasArray = active_cc_areas.split(",");
				console.log(active_cc_areasArray);

			//append the preview divs
				createPreviews();

			//createCat		
				if ( get("item") === "cat") {
					createCat();
				}

			//createBunny	
				else if ( get("item") === "bunny") {
					createBunny();
				}

			//createDog
				else if ( get("item") === "dog") {
					createDog();
				}

			//add mainColor
				var mcURL = yarn[yarntype][mainColor];
				$(".previewdiv_zoom").css("background-image", "url("+mcURL+")").css("background-size","250%");	
				$(".yarnable").css("background-image", "url("+mcURL+")");

			//add contrastingColor
				var ccURL = yarn[yarntype][contrastingColor];
				for (i = 0; i < active_cc_areasArray.length; i++) {
					$("#" + active_cc_areasArray[i]).show().css("background-image", "url("+ccURL+")");
				}

			//eye color buttons
				if ( (get("item") === "cat") || (get("item") === "dog") ) {
					var eyeColors = {
						"brown":"#aa5522",
						"yellow":"#55aa00",
						"blue":"#0000ff",
						"green":"#00ff00",
						"red":"#ff0000",
						"purple":"#5500aa",
						"orange":"#cc1100",
						"black":"#000000"
					}

					var keys = Object.keys(eyeColors);

					for (i = 0; i < keys.length; i++) {
						$("#options").append("<button class='btn btn-lg btn-default accent_color_button' value='" + keys[i] + "' style='border: 5px solid " + eyeColors[keys[i]] + "'>" + keys[i] + "</button>");
					}
				}

			//ear color buttons
				else if ( get("item") === "bunny") {
					//you do you, Liz
				}


			//Hover
				$(document).on("mouseenter", ".accent_color_button", function() {
					var accent_color = $(this).css("border-color");
					$(this).removeClass("btn-default").css("background-color",accent_color);
					$(".accentable").css("background-image","none").css("background-color", accent_color);
				});
				$(document).on("mouseleave", ".accent_color_button", function() {
					$(this).css("background-color","white").addClass("btn-default");
					$(".accentable").css("background-image","url(" + mcURL + ")");
				});

			//Click	
				$(document).on("click", ".accent_color_button", function() {
					var accent_color = this.value;
					var currentData = $("#data").text();
					var newData = currentData.replace("accent_color=&", "accent_color="+accent_color+"&");
					//$("#data").empty().append(newData);
					$("#data").text(newData);

					loadPageContents();
				});
		}

// EMAIL
		else if (pagePicked === "email") {
			$("#options").empty();

			createPreviews();

			//get item from data div
				var item = get("item");
				console.log(item);

			//get yarn type from data div
				var yarntype = get("yarn");
				console.log(yarntype);

			//get MC from data div
				var mainColor = get("mc");
				console.log(mainColor);

			//get CC from data div
				var contrastingColor = get("cc");
				console.log(contrastingColor);

			//get active CC_areas from data div
				var active_cc_areas = get("cc_areas");
				active_cc_areasArray = active_cc_areas.split(",");
				console.log(active_cc_areasArray);

			//get accent color
				var accent_color = get("accent_color");
				console.log(contrastingColor);

			//append the preview divs
				createPreviews();

			//createCat		
				if ( get("item") === "cat") {
					createCat();
				}

			//createBunny	
				else if ( get("item") === "bunny") {
					createBunny();
				}

			//createDog
				else if ( get("item") === "dog") {
					createDog();
				}

			//add mainColor
				var mcURL = yarn[yarntype][mainColor];
				$(".previewdiv_zoom").css("background-image", "url("+mcURL+")").css("background-size","250%");	
				$(".yarnable").css("background-image", "url("+mcURL+")");

			//add contrastingColor
				var ccURL = yarn[yarntype][contrastingColor];
				for (i = 0; i < active_cc_areasArray.length; i++) {
					$("#" + active_cc_areasArray[i]).show().css("background-image", "url("+ccURL+")");
				}

			//add eye color
				if ( (get("item") === "cat") || (get("item") === "dog") ) {
					var eyeColors = {
						"brown":"#aa5522",
						"yellow":"#55aa00",
						"blue":"#0000ff",
						"green":"#00ff00",
						"red":"#ff0000",
						"purple":"#5500aa",
						"orange":"#cc1100",
						"black":"#000000"
					}
					$(".accentable").css("background-color", eyeColors[accent_color]);
					$(".accentable").css("background-color", eyeColors[accent_color]);
				}

			//add ear color
				else if ( get("item") === "bunny") {
					//you do you, Liz
				}

			//Order Details
				if ( get("cc") === "noCC") {
					contrastingColor = "no contrasting color";
					active_cc_areas = "no contrasting areas";
				}
				else {
					console.log("triggered");
					active_cc_areas = "";
					for (i = 0; i < active_cc_areasArray.length; i++) {
						active_cc_areasArray[i] = active_cc_areasArray[i].replace(item,"").replace("profile","").replace("face","").replace("_"," ").trim();
						if (!(active_cc_areas.indexOf(active_cc_areasArray[i]) > -1)) {
							active_cc_areas = active_cc_areas + active_cc_areasArray[i] + ", ";
						}
					}
					active_cc_areas = active_cc_areas.slice(0,(active_cc_areas.length) - 2);
				}

				$("#options").append("Congratulations! Your Order:<br>")
					.append("Item: " + item + "<br>")
					.append("Yarn: " + yarntype + "<br>")
					.append("Main Color: " + mainColor +"<br>")
					.append("Contrasting Color: " + contrastingColor + "<br>")
					.append("Contrasting Areas: " + active_cc_areas + "<br>")
					.append("Eye Color: " + accent_color);

			//email body
				var body = "Hello! I would like to place an order for a new " + item + " made of " + yarntype + " yarn. The color(s) should be " + mainColor + " (and " + contrastingColor + "). These areas should have a contrasting color: " + active_cc_areas + ". The accent color should be " + accent_color + ". Thank you! I look forward to my new " + item + "!";
				var link = "mailto:kniterativedesigns@gmail.com?subject=Kniterative Designs order&body=" + body;

			//buttons
				$("#options").append("<textarea rows='5' class='form-control' id='details' placeholder='Add additional details here...'></textarea>")
				.append("<a href='" + link + "' class='btn btn-primary btn-lg' id='email' style='height: 100px; font-size: 36px'>Looks Good! Email Order</a>")
				.append("<button class='btn btn-danger btn-lg' id='cancel'>Start Over</button>");

			//Cancel	
				$(document).on("click", "#cancel", function() {
					var newData = "item=&yarn=&mc=&cc=&cc_areas=&accent_color=&email=&";
					//$("#data").empty().append(newData);
					$("#data").text(newData);

					loadPageContents();
				});

			//Key listener
				$("#details").keyup(function() {
					if ( String( $("#details").val() ).length > 0) {
						$("#email").attr("href",link + " " + String( $("#details").val() ) );
					}
				});
		}
	}

});

