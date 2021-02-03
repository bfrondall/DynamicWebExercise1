console.log("Hello!")

$("#J11").hide();
$("#J20").hide();
$("#J21").hide();
$("#J30").hide();
$("#J31").hide();

$("#J10").on("click", function() {
	$("#J10").hide();
	$("#J11").show();
	$("#J20").hide();
	$("#J21").hide();
	$("#J30").hide();
	$("#J31").hide();
	$("body").css("background-color", "#FFCCF9")
})

$("#J11").on("click", function() {
	$("#J10").hide();
	$("#J11").hide();
	$("#J20").show();
	$("#J21").hide();
	$("#J30").hide();
	$("#J31").hide();
	$("body").css("background-color", "#D5AAFF")

})

$("#J20").on("click", function() {
	$("#J10").hide();
	$("#J11").hide();
	$("#J20").hide();
	$("#J21").show();
	$("#J30").hide();
	$("#J31").hide();
	$("body").css("background-color", "#B5B9FF")

})

$("#J21").on("click", function() {
	$("#J10").hide();
	$("#J11").hide();
	$("#J20").hide();
	$("#J21").hide();
	$("#J30").show();
	$("#J31").hide();
	$("body").css("background-color", "#85E3FF")
})


$("#J30").on("click", function() {
	$("#J10").hide();
	$("#J11").hide();
	$("#J20").hide();
	$("#J21").hide();
	$("#J30").hide();
	$("#J31").show();
	$("body").css("background-color", "#F3FFE3")
})

$("#J31").on("click", function() {
	$("#J10").show();
	$("#J11").hide();
	$("#J20").hide();
	$("#J21").hide();
	$("#J30").hide();
	$("#J31").hide();
	$("body").css("background-color", "#FFBEBC")
})