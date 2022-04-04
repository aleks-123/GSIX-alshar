$(".overlay").hide();


$(function() {
	$("#button2").click(function(){
    $(".overlay").show('slow');
   
});

$("#button1").click(function(){
    $(".overlay").hide("slow");
});


});

$(function(){
	$(".duckhover").hover(function()
	{
		$(".duckhover").attr("src","img/ducklarge.png" );
	},
	function(){
		$(".duckhover").attr("src","img/group.png" );
	});

		$(".instahover").hover(function()
	{
		$(".instahover").attr("src","img/instalarge.png" );
	},
	function(){
		$(".instahover").attr("src","img/group1.png" );
	});

		$(".inhover").hover(function()
	{
		$(".inhover").attr("src","img/inlarge.png" );
	},
	function(){
		$(".inhover").attr("src","img/group3.png" );
	});

		$(".fbhover").hover(function()
	{
		$(".fbhover").attr("src","img/fblarge.png" );
	},
	function(){
		$(".fbhover").attr("src","img/group2.png" );
	});

		$(".xhover").hover(function()
	{
		$(".xhover").attr("src","img/xlarge.png" );
	},
	function(){
		$(".xhover").attr("src","img/x.png" );
	});

		$(".buttonhover").hover(function()
	{
		$(".buttonhover").attr("src","img/bl.png" );
	},
	function(){
		$(".buttonhover").attr("src","img/group8.png" );
	});

		$(".bigfb").hover(function()
	{
		$(".bigfb").attr("src","img/bigfb.png" );
	},
	function(){
		$(".bigfb").attr("src","img/facebook-white.svg" );
	});

		$(".bigduck").hover(function()
	{
		$(".bigduck").attr("src","img/bigduck.png" );
	},
	function(){
		$(".bigduck").attr("src","img/twitter-white.svg" );
	});

		$(".biginsta").hover(function()
	{
		$(".biginsta").attr("src","img/biginsta.png" );
	},
	function(){
		$(".biginsta").attr("src","img/insta.svg" );
	});

		$(".biglink").hover(function()
	{
		$(".biglink").attr("src","img/bigin.png" );
	},
	function(){
		$(".biglink").attr("src","img/link.svg" );
	});
});