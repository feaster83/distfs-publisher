
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

// Javascript for stacks_in_77_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_77_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_77_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;}});(function($){$.fn.scrollToTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);return false;});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);$(document).ready(function(){$().scrollToTop({easingType:'easeOutQuart',scrollSpeed:1200,min:200});});

	return stack;
})(stacks.stacks_in_77_page191);


// Javascript for stacks_in_11981_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_11981_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_11981_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
jQuery(window).load(function () {
	$('#simplePosition_stacks_in_11981_page191').unwrap().unwrap();
});

	return stack;
})(stacks.stacks_in_11981_page191);


// Javascript for stacks_in_11983_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_11983_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_11983_page191 = (function(stack) {

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
var atm_HandleResponsiveSupportOldBrowser_stacks_in_11983_page191 = function() {
	var width = $(window).width(); 
	if(width >= 982 && width <= 3000) {
		$('#stacks_in_11983_page191').show();
	} else {
		$('#stacks_in_11983_page191').hide();
	}
}
 
// Perform all actions on Document Ready.
$(document).ready(function() {   
$('#atm_ResponsiveSupportOldBrowser_stacks_in_11983_page191').each(function() {
	atm_HandleResponsiveSupportOldBrowser_stacks_in_11983_page191();
	$(window).resize(function() {setTimeout(function(){ atm_HandleResponsiveSupportOldBrowser_stacks_in_11983_page191() }, 500);});
});  	 	
});
	return stack;
})(stacks.stacks_in_11983_page191);


// Javascript for stacks_in_11986_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_11986_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_11986_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
jQuery(window).load(function () {
	$('#simplePosition_stacks_in_11986_page191').unwrap().unwrap();
});

	return stack;
})(stacks.stacks_in_11986_page191);


// Javascript for stacks_in_11988_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_11988_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_11988_page191 = (function(stack) {

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
var atm_HandleResponsiveSupportOldBrowser_stacks_in_11988_page191 = function() {
	var width = $(window).width(); 
	if(width >= 696 && width <= 3000) {
		$('#stacks_in_11988_page191').show();
	} else {
		$('#stacks_in_11988_page191').hide();
	}
}
 
// Perform all actions on Document Ready.
$(document).ready(function() {   
$('#atm_ResponsiveSupportOldBrowser_stacks_in_11988_page191').each(function() {
	atm_HandleResponsiveSupportOldBrowser_stacks_in_11988_page191();
	$(window).resize(function() {setTimeout(function(){ atm_HandleResponsiveSupportOldBrowser_stacks_in_11988_page191() }, 500);});
});  	 	
});
	return stack;
})(stacks.stacks_in_11988_page191);


// Javascript for stacks_in_11991_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_11991_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_11991_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
jQuery(window).load(function () {
	$('#simplePosition_stacks_in_11991_page191').unwrap().unwrap();
});

	return stack;
})(stacks.stacks_in_11991_page191);


// Javascript for stacks_in_11993_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_11993_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_11993_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

	return stack;
})(stacks.stacks_in_11993_page191);


// Javascript for stacks_in_5420_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_5420_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_5420_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
jQuery(window).load(function () {
	$('#simplePosition_stacks_in_5420_page191').unwrap().unwrap();
});

	return stack;
})(stacks.stacks_in_5420_page191);


// Javascript for stacks_in_5377_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_5377_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_5377_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

	return stack;
})(stacks.stacks_in_5377_page191);


// Javascript for stacks_in_5505_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_5505_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_5505_page191 = (function(stack) {

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
var atm_HandleResponsiveSupportOldBrowser_stacks_in_5505_page191 = function() {
	var width = $(window).width(); 
	if(width >= 769 && width <= 3000) {
		$('#stacks_in_5505_page191').show();
	} else {
		$('#stacks_in_5505_page191').hide();
	}
}
 
// Perform all actions on Document Ready.
$(document).ready(function() {   
$('#atm_ResponsiveSupportOldBrowser_stacks_in_5505_page191').each(function() {
	atm_HandleResponsiveSupportOldBrowser_stacks_in_5505_page191();
	$(window).resize(function() {setTimeout(function(){ atm_HandleResponsiveSupportOldBrowser_stacks_in_5505_page191() }, 500);});
});  	 	
});
	return stack;
})(stacks.stacks_in_5505_page191);


// Javascript for stacks_in_10698_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_10698_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_10698_page191 = (function(stack) {

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
var atm_HandleResponsiveSupportOldBrowser_stacks_in_10698_page191 = function() {
	var width = $(window).width(); 
	if(width >= 100 && width <= 768) {
		$('#stacks_in_10698_page191').show();
	} else {
		$('#stacks_in_10698_page191').hide();
	}
}
 
// Perform all actions on Document Ready.
$(document).ready(function() {   
$('#atm_ResponsiveSupportOldBrowser_stacks_in_10698_page191').each(function() {
	atm_HandleResponsiveSupportOldBrowser_stacks_in_10698_page191();
	$(window).resize(function() {setTimeout(function(){ atm_HandleResponsiveSupportOldBrowser_stacks_in_10698_page191() }, 500);});
});  	 	
});
	return stack;
})(stacks.stacks_in_10698_page191);


// Javascript for stacks_in_5730_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_5730_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_5730_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

	return stack;
})(stacks.stacks_in_5730_page191);


// Javascript for stacks_in_5955_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_5955_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_5955_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_5955_page191, .toggleTrigger_stacks_in_5955_page191, #toggleContainer_stacks_in_5955_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_5955_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_5955_page191").click();

});
	return stack;
})(stacks.stacks_in_5955_page191);


// Javascript for stacks_in_5851_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_5851_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_5851_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_5851_page191, .toggleTrigger_stacks_in_5851_page191, #toggleContainer_stacks_in_5851_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_5851_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_5851_page191").click();

});
	return stack;
})(stacks.stacks_in_5851_page191);


// Javascript for stacks_in_5995_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_5995_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_5995_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_5995_page191, .toggleTrigger_stacks_in_5995_page191, #toggleContainer_stacks_in_5995_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_5995_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_5995_page191").click();

});
	return stack;
})(stacks.stacks_in_5995_page191);


// Javascript for stacks_in_5507_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_5507_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_5507_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

	return stack;
})(stacks.stacks_in_5507_page191);


// Javascript for stacks_in_6066_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_6066_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_6066_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_6066_page191, .toggleTrigger_stacks_in_6066_page191, #toggleContainer_stacks_in_6066_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_6066_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_6066_page191").click();

});
	return stack;
})(stacks.stacks_in_6066_page191);


// Javascript for stacks_in_6171_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_6171_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_6171_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_6171_page191, .toggleTrigger_stacks_in_6171_page191, #toggleContainer_stacks_in_6171_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_6171_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_6171_page191").click();

});
	return stack;
})(stacks.stacks_in_6171_page191);


// Javascript for stacks_in_6236_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_6236_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_6236_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_6236_page191, .toggleTrigger_stacks_in_6236_page191, #toggleContainer_stacks_in_6236_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_6236_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_6236_page191").click();

});
	return stack;
})(stacks.stacks_in_6236_page191);


// Javascript for stacks_in_7056_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_7056_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_7056_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
jQuery(window).load(function () {
	$('#simplePosition_stacks_in_7056_page191').unwrap().unwrap();
});

	return stack;
})(stacks.stacks_in_7056_page191);


// Javascript for stacks_in_6341_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_6341_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_6341_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

	return stack;
})(stacks.stacks_in_6341_page191);


// Javascript for stacks_in_6351_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_6351_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_6351_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_6351_page191, .toggleTrigger_stacks_in_6351_page191, #toggleContainer_stacks_in_6351_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_6351_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_6351_page191").click();

});
	return stack;
})(stacks.stacks_in_6351_page191);


// Javascript for stacks_in_6367_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_6367_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_6367_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_6367_page191, .toggleTrigger_stacks_in_6367_page191, #toggleContainer_stacks_in_6367_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_6367_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_6367_page191").click();

});
	return stack;
})(stacks.stacks_in_6367_page191);


// Javascript for stacks_in_6383_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_6383_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_6383_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_6383_page191, .toggleTrigger_stacks_in_6383_page191, #toggleContainer_stacks_in_6383_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_6383_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_6383_page191").click();

});
	return stack;
})(stacks.stacks_in_6383_page191);


// Javascript for stacks_in_6499_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_6499_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_6499_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

	return stack;
})(stacks.stacks_in_6499_page191);


// Javascript for stacks_in_6509_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_6509_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_6509_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_6509_page191, .toggleTrigger_stacks_in_6509_page191, #toggleContainer_stacks_in_6509_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_6509_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_6509_page191").click();

});
	return stack;
})(stacks.stacks_in_6509_page191);


// Javascript for stacks_in_6525_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_6525_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_6525_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_6525_page191, .toggleTrigger_stacks_in_6525_page191, #toggleContainer_stacks_in_6525_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_6525_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_6525_page191").click();

});
	return stack;
})(stacks.stacks_in_6525_page191);


// Javascript for stacks_in_6541_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_6541_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_6541_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_6541_page191, .toggleTrigger_stacks_in_6541_page191, #toggleContainer_stacks_in_6541_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_6541_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_6541_page191").click();

});
	return stack;
})(stacks.stacks_in_6541_page191);


// Javascript for stacks_in_13082_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13082_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13082_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
jQuery(window).load(function () {
	$('#simplePosition_stacks_in_13082_page191').unwrap().unwrap();
});

	return stack;
})(stacks.stacks_in_13082_page191);


// Javascript for stacks_in_12281_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_12281_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_12281_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

	return stack;
})(stacks.stacks_in_12281_page191);


// Javascript for stacks_in_12454_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_12454_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_12454_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_12454_page191, .toggleTrigger_stacks_in_12454_page191, #toggleContainer_stacks_in_12454_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_12454_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_12454_page191").click();

});
	return stack;
})(stacks.stacks_in_12454_page191);


// Javascript for stacks_in_12519_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_12519_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_12519_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_12519_page191, .toggleTrigger_stacks_in_12519_page191, #toggleContainer_stacks_in_12519_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_12519_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_12519_page191").click();

});
	return stack;
})(stacks.stacks_in_12519_page191);


// Javascript for stacks_in_12313_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_12313_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_12313_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_12313_page191, .toggleTrigger_stacks_in_12313_page191, #toggleContainer_stacks_in_12313_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_12313_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_12313_page191").click();

});
	return stack;
})(stacks.stacks_in_12313_page191);


// Javascript for stacks_in_12328_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_12328_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_12328_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_12328_page191, .toggleTrigger_stacks_in_12328_page191, #toggleContainer_stacks_in_12328_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_12328_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_12328_page191").click();

});
	return stack;
})(stacks.stacks_in_12328_page191);


// Javascript for stacks_in_13084_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13084_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13084_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

	return stack;
})(stacks.stacks_in_13084_page191);


// Javascript for stacks_in_13274_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13274_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13274_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_13274_page191, .toggleTrigger_stacks_in_13274_page191, #toggleContainer_stacks_in_13274_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_13274_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_13274_page191").click();

});
	return stack;
})(stacks.stacks_in_13274_page191);


// Javascript for stacks_in_13236_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13236_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13236_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_13236_page191, .toggleTrigger_stacks_in_13236_page191, #toggleContainer_stacks_in_13236_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_13236_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_13236_page191").click();

});
	return stack;
})(stacks.stacks_in_13236_page191);


// Javascript for stacks_in_13094_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13094_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13094_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_13094_page191, .toggleTrigger_stacks_in_13094_page191, #toggleContainer_stacks_in_13094_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_13094_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_13094_page191").click();

});
	return stack;
})(stacks.stacks_in_13094_page191);


// Javascript for stacks_in_13081_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13081_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13081_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
jQuery(window).load(function () {
	$('#simplePosition_stacks_in_13081_page191').unwrap().unwrap();
});

	return stack;
})(stacks.stacks_in_13081_page191);


// Javascript for stacks_in_13102_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13102_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13102_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

	return stack;
})(stacks.stacks_in_13102_page191);


// Javascript for stacks_in_13112_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13112_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13112_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_13112_page191, .toggleTrigger_stacks_in_13112_page191, #toggleContainer_stacks_in_13112_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_13112_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_13112_page191").click();

});
	return stack;
})(stacks.stacks_in_13112_page191);


// Javascript for stacks_in_13129_page191
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_13129_page191 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_13129_page191 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $toggle = jQuery.noConflict();
$(document).ready(function(){

	$toggle("#toggleTrigger_stacks_in_13129_page191, .toggleTrigger_stacks_in_13129_page191, #toggleContainer_stacks_in_13129_page191 .toggleButton").click(function(){
		$toggle("#toggleContainer_stacks_in_13129_page191").slideToggle(800);
	});
	
	// Activate a toggle via a page anchor
	$toggle("a[href='" + window.location.hash + "']").parent("#toggleTrigger_stacks_in_13129_page191").click();

});
	return stack;
})(stacks.stacks_in_13129_page191);


