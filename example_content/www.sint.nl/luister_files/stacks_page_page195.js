
// 'stacks' is the Stacks global object.
// All of the other Stacks related Javascript will 
// be attatched to it.
var stacks = {};


// this call to jQuery gives us access to the globaal
// jQuery object. 
// 'noConflict' removes the '$' variable.
// 'true' removes the 'jQuery' variable.
// removing these globals reduces conflicts with other 
// jQuery versions that might be running on this page.
stacks.jQuery = jQuery.noConflict(true);

// Javascript for stacks_in_77_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_77_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_77_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;}});(function($){$.fn.scrollToTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);return false;});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);$(document).ready(function(){$().scrollToTop({easingType:'easeOutQuart',scrollSpeed:1200,min:200});});

	return stack;
})(stacks.stacks_in_77_page195);


// Javascript for stacks_in_12777_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_12777_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_12777_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
jQuery(window).load(function () {
	$('#simplePosition_stacks_in_12777_page195').unwrap().unwrap();
});

	return stack;
})(stacks.stacks_in_12777_page195);


// Javascript for stacks_in_12779_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_12779_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_12779_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
/*
 *
 * Responsive Content stack by Tsooj Media
 * Version 1.1.0
 *
 * Visit http://www.tsooj.net for more information on how to use this stacks product for RapidWeaver.
 *
 */
  
// CSS3 Media Query for Old Browsers like IE7/IE8.
var atm_HandleResponsiveSupportOldBrowser_stacks_in_12779_page195 = function() {
	var width = $(window).width(); 
	if(width >= 982 && width <= 3000) {
		$('#stacks_in_12779_page195').show();
	} else {
		$('#stacks_in_12779_page195').hide();
	}
}
 
// Perform all actions on Document Ready.
$(document).ready(function() {   
$('#atm_ResponsiveSupportOldBrowser_stacks_in_12779_page195').each(function() {
	atm_HandleResponsiveSupportOldBrowser_stacks_in_12779_page195();
	$(window).resize(function() {setTimeout(function(){ atm_HandleResponsiveSupportOldBrowser_stacks_in_12779_page195() }, 500);});
});  	 	
});
	return stack;
})(stacks.stacks_in_12779_page195);


// Javascript for stacks_in_12782_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_12782_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_12782_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
jQuery(window).load(function () {
	$('#simplePosition_stacks_in_12782_page195').unwrap().unwrap();
});

	return stack;
})(stacks.stacks_in_12782_page195);


// Javascript for stacks_in_12784_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_12784_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_12784_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
/*
 *
 * Responsive Content stack by Tsooj Media
 * Version 1.1.0
 *
 * Visit http://www.tsooj.net for more information on how to use this stacks product for RapidWeaver.
 *
 */
  
// CSS3 Media Query for Old Browsers like IE7/IE8.
var atm_HandleResponsiveSupportOldBrowser_stacks_in_12784_page195 = function() {
	var width = $(window).width(); 
	if(width >= 696 && width <= 3000) {
		$('#stacks_in_12784_page195').show();
	} else {
		$('#stacks_in_12784_page195').hide();
	}
}
 
// Perform all actions on Document Ready.
$(document).ready(function() {   
$('#atm_ResponsiveSupportOldBrowser_stacks_in_12784_page195').each(function() {
	atm_HandleResponsiveSupportOldBrowser_stacks_in_12784_page195();
	$(window).resize(function() {setTimeout(function(){ atm_HandleResponsiveSupportOldBrowser_stacks_in_12784_page195() }, 500);});
});  	 	
});
	return stack;
})(stacks.stacks_in_12784_page195);


// Javascript for stacks_in_12787_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_12787_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_12787_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
jQuery(window).load(function () {
	$('#simplePosition_stacks_in_12787_page195').unwrap().unwrap();
});

	return stack;
})(stacks.stacks_in_12787_page195);


// Javascript for stacks_in_12789_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_12789_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_12789_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

	return stack;
})(stacks.stacks_in_12789_page195);


// Javascript for stacks_in_9795_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_9795_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_9795_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
jQuery(window).load(function () {
	$('#simplePosition_stacks_in_9795_page195').unwrap().unwrap();
});

	return stack;
})(stacks.stacks_in_9795_page195);


// Javascript for stacks_in_13633_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13633_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13633_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

	return stack;
})(stacks.stacks_in_13633_page195);


// Javascript for stacks_in_10097_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_10097_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_10097_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
$(document).ready(function(){

if((navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPad/i))||(navigator.userAgent.match(/Android/i))||(navigator.userAgent.match(/Blackberry/i))||(navigator.userAgent.match(/Samsung/i))||(navigator.userAgent.match(/Opera Mini/i))||(navigator.userAgent.match(/IEMobile/i)) ) {
	$("#rottenAppleNormalstacks_in_10097_page195, #elementName").hide().addClass('rottenAppleHiddenContent');
	$("#rottenAppleDeviceContentstacks_in_10097_page195").show();
}

});
	return stack;
})(stacks.stacks_in_10097_page195);


// Javascript for stacks_in_13562_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13562_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13562_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $randomiser = jQuery.noConflict();
$randomiser(document).ready(function(){
	var divs = $randomiser("#randomiserstacks_in_13562_page195 div.randomItemstacks_in_13562_page195").get().sort(function(){ 
	  return Math.round(Math.random())-0.5;
	}).slice(0,1)
	$randomiser(divs).addClass('activeRandomItem');
});
	return stack;
})(stacks.stacks_in_13562_page195);


// Javascript for stacks_in_13626_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13626_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13626_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_13626_page195, .toggleTrigger_stacks_in_13626_page195, #toggleContainer_stacks_in_13626_page195 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_13626_page195").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_13626_page195").click();

});
	return stack;
})(stacks.stacks_in_13626_page195);


// Javascript for stacks_in_13729_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13729_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13729_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

	return stack;
})(stacks.stacks_in_13729_page195);


// Javascript for stacks_in_11407_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_11407_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_11407_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_11407_page195, .toggleTrigger_stacks_in_11407_page195, #toggleContainer_stacks_in_11407_page195 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_11407_page195").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_11407_page195").click();

});
	return stack;
})(stacks.stacks_in_11407_page195);


// Javascript for stacks_in_13773_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13773_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13773_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_13773_page195, .toggleTrigger_stacks_in_13773_page195, #toggleContainer_stacks_in_13773_page195 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_13773_page195").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_13773_page195").click();

});
	return stack;
})(stacks.stacks_in_13773_page195);


// Javascript for stacks_in_13811_page195
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13811_page195 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13811_page195 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_13811_page195, .toggleTrigger_stacks_in_13811_page195, #toggleContainer_stacks_in_13811_page195 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_13811_page195").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_13811_page195").click();

});
	return stack;
})(stacks.stacks_in_13811_page195);


