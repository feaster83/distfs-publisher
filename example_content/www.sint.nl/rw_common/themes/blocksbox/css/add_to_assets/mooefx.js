/*From Blocks kit by rapidweaver, rapidweaver.org*/
var Site = {
	
	start: function(){
		Site.appearMenu();
		Site.subMenu();
		Site.collapsBlock();
	},
		
	/*hides the lists that currently dont need to be seen...*/	
	subMenu: function(){
		currentA = $$('.rb_submenu a.currentAncestor');
		for (i=0; i < currentA.length; i++)
		{
			var currentLi = currentA[i].getParent();
			currentLi.addClass("grandParent");
		}
		var currentA = $$('.rb_submenu');//$$('.rb_submenu');
		for (i=0; i < currentA.length; i++)
		{
			var linkV = Site.extractElement(currentA[i], '.linkColour', "black");
			var linkHoverV = Site.extractElement(currentA[i], '.linkColourHover', "red");
			var paddingV = Site.extractElement(currentA[i], '.padding', 0);
			paddingV = parseFloat(paddingV);
			var p = currentA[i].getParent();
			p = p.getParent();
			p = p.getParent();
			var superId = p.getProperty('id');
			cssToAdd = "#" + superId + " .rb_submenu a{color: " + linkV + "}";
			addCss(cssToAdd);
			
			var current = currentA[i].getElement('#current');
			var currentLi = current.getParent();
			var currentUl = currentLi.getParent();
			currentUl.addClass("currentParent");
			
			var arrow = currentA[i].getFirst('.arrowOnTheMove');
			var boxPos = currentA[i].getCoordinates();
			var currentPos = currentLi.getCoordinates();
			var arrowfxs = new Fx.Styles(arrow, {'duration': 800, 'wait': false,  'transition': Fx.Transitions.cubicOut});
			
			var startPos = currentPos.top - boxPos.top- 10 + currentPos.height/2+paddingV;
			arrow.setStyle('top', startPos);
			var subLi = currentUl.getElements('li');
			for (j=0; j < subLi.length; j++)
			{
				var subPos = subLi[j].getCoordinates();
				var top = subPos.top - boxPos.top - 10 + subPos.height/2+paddingV;
				//alert(top);
				Site.subLiEffect(subLi[j], linkV, linkHoverV, arrow, top, arrowfxs, startPos);
			}
		}
	},
	
	/*Effect when a list item is rolled over*/
	subLiEffect: function(object, colour, hoverColour, arrow, top, arrowfxs, startPos) {
		var a = object.getFirst('a');
		object.addEvent('mouseenter', function(){
			a.setStyle('color', hoverColour);
			arrowfxs.start({
				'top': top
			});
		});
		object.addEvent('mouseleave', function(){
			a.setStyle('color', colour);
			arrowfxs.start({
				'top': startPos
			});
		});
	},
		
	/*Loops through each menu on the page
	Extracts the hidden values
	Assigns the function that handles on roll over - pop out
	Assigns the funtion that handles on roll over - hover
	*/
	appearMenu: function(){
		
		var menuWrapper = $$('.navcontainer');
		
		for (i=0; i < menuWrapper.length; i++)
		{
			//alert("here");
			var menu = menuWrapper[i];
			
			//defaults for extracted values
			//extracted values
			//var linkV = Site.extractElement(menu, '.linkColour', "#666666");//turn off
			var linkV = Site.extractElement(menu, '.linkColour', "black");
			var linkHoverV = Site.extractElement(menu, '.linkColourHover', "red");
			var effectV = Site.extractElement(menu, '.effect', "8");
			var effectSpeedV = Site.extractElement(menu, '.effectSpeed', "1500");
			var showSubV = Site.extractElement(menu, '.showSubMenu', "1");
			var showSplitV = Site.extractElement(menu, '.spliton', "1");
			
			var span = menu.getElements('span');
			var style = span.getProperty('style');
			var font = span.getStyle('font-family');
			
			var p = menu.getParent();
			var superClass = p.getProperty('class');
			var pp = p.getParent();
			var superId = pp.getProperty('id');//the id wrapper placed around block by blocks
			cssToAdd = "#" + superId + " .navcontainer a{color: " + linkV + "; font-family:" + font + ";}";
			addCss(cssToAdd);
			addCss(".navcontainer a {visibility: visible;}");
			
			if(superClass != "nav_css") {//then its rounded blocks so do this...
				isRound = true;
				if(showSplitV == 1) {
					var splitBorderV = Site.extractElement(menu, '.splitBorder', "black");
					cssToAdd = "#" + superId + " .navcontainer a{border-right: 1px solid " + splitBorderV + "}";
					addCss(cssToAdd);
				}
			} else {//its html/css blocks
				isRound = false;
				var linkBackgroundV = Site.extractElement(menu, '.linkColourBackground', "white");
				var linkBackgroundHoverV = Site.extractElement(menu, '.linkColourBackgroundHover', "white");
				var linkColourBorderV = Site.extractElement(menu, '.linkColourBorder', "black");
				var linkColourBorderHoverV = Site.extractElement(menu, '.linkColourBorderHover', "red");
				var popOutColourV = Site.extractElement(menu, '.popOutColour', "white");
				//border colour, pop out colour
				cssToAdd = "#" + superId + " .nav_css .navcontainer a{background-color: " + linkBackgroundV + "}";
				addCss(cssToAdd);
				cssToAdd = "#" + superId + " .nav_css .navcontainer ul ul a{background-color: " + popOutColourV + "}";
				addCss(cssToAdd);
				cssToAdd = "#" + superId + " .nav_css .navcontainer a:hover{background-color: " + linkBackgroundHoverV + "}";
				addCss(cssToAdd);
				cssToAdd = "#" + superId + " .nav_css .navcontainer a{border-bottom-color: " + linkColourBorderV + "}";
				addCss(cssToAdd);
				cssToAdd = "#" + superId + " .nav_css .navcontainer a:hover{border-bottom-color: " + linkColourBorderHoverV + "}";
				addCss(cssToAdd);
				cssToAdd = "#" + superId + " .nav_css .navcontainer ul ul{background-color: " + popOutColourV + "}";
				addCss(cssToAdd);
			}
			
			//adds the roll over effects to the menu
			Site.menuPopOut(menu, effectV, linkV, linkHoverV, linkBackgroundV, linkBackgroundHoverV, effectSpeedV, showSubV, isRound, superId);
		}
	},
	
	extractElement: function(lookIn, lookFor, theDefault){
		var value = theDefault;
		var found=lookIn.getElement(lookFor);
		if(found){
			v = found.getProperty('value');
			if(v!=""){
				value = found.getProperty('value');
			}
		}
		return value;
	},
	/* roll over menu effect and drop down*/
	menuPopOut: function(menu, effect, link, linkHover, linkBackground, linkBackgroundHover, effectSpeed, showSub, isRound, superId){
			var li = menu.getElements('li');
			for (j=0; j < li.length; j++)
			{
				var header = li[j];
				
				//header.setStyle('visibility', 'hidden');
				
				var subHeader = header.getElements('ul');
				
				//drop down
				if(showSub != "0") {
					if(subHeader.length > 0) {//there is a menu under it....
						Site.popOutEvent(subHeader[0], header, effect, effectSpeed, isRound, j, superId);
					}
				}
				
				//add roll over effect to all li's
				Site.liEffect(header, link, linkHover);
			}
	},
	
	/* Adds the pop out effect to the passed id when the passed header is rolled over
	*/
	popOutEvent: function(menu, header, effect, effectSpeed, isRound, j, superId){
		effectSpeed = parseFloat(effectSpeed);
		var extra = 0;
		var factor = 1;
		if(isRound){extra = 40; factor=1.2;}
		
		menu.setStyle('display', 'block');
		var menuSize = menu.scrollHeight*factor + extra;
		menu.setStyle('height', 0);
		
		//This wraps the submenu li items in a div so that it can slide down with the menu.
		var subItems = menu.getChildren('li');
		var idOfWrap = 'mySecondElement' + j;
		var mySecondElement = new Element('div', {id: idOfWrap, 'class': 'menuWrap'});
		mySecondElement.inject(menu, 'top');
		mySecondElement.adopt(subItems);
		cssToAdd = "#" + superId + " .navcontainer #" + idOfWrap + " {height: " + (menuSize) +"px;}";
		addCss(cssToAdd);
		//end test
		
		var menufxs = Site.switchEffect(menu, effect, effectSpeed);
		
		header.addEvent('mouseenter', function(){
			menufxs.start({
				'height': menuSize
			});
		});
		header.addEvent('mouseleave', function(){
			menufxs.start({
				'height': 0
			});
		});
	},
	
	switchEffect: function(object, effect, effectSpeed) {
		switch(effect){
			case '1': var menufxs = new Fx.Styles(object, {'duration': effectSpeed, 'wait': false,  'transition': Fx.Transitions.linear}); break;
			case '2': var menufxs = new Fx.Styles(object, {'duration': effectSpeed, 'wait': false,  'transition': Fx.Transitions.quadOut}); break;
			case '3': var menufxs = new Fx.Styles(object, {'duration': effectSpeed, 'wait': false,  'transition': Fx.Transitions.cubicOut}); break;
			case '4': var menufxs = new Fx.Styles(object, {'duration': effectSpeed, 'wait': false,  'transition': Fx.Transitions.quartOut}); break;
			case '5': var menufxs = new Fx.Styles(object, {'duration': effectSpeed, 'wait': false,  'transition': Fx.Transitions.quintOut}); break;
			case '6': var menufxs = new Fx.Styles(object, {'duration': effectSpeed, 'wait': false,  'transition': Fx.Transitions.sineOut}); break;
			case '7': var menufxs = new Fx.Styles(object, {'duration': effectSpeed, 'wait': false,  'transition': Fx.Transitions.expoOut}); break;
			case '8': var menufxs = new Fx.Styles(object, {'duration': effectSpeed, 'wait': false,  'transition': Fx.Transitions.elasticOut}); break;
			case '9': var menufxs = new Fx.Styles(object, {'duration': effectSpeed, 'wait': false,  'transition': Fx.Transitions.backOut}); break;
			case '10': var menufxs = new Fx.Styles(object, {'duration': effectSpeed, 'wait': false,  'transition': Fx.Transitions.bounceOut}); break;
			default: var menufxs = new Fx.Styles(object, {'duration': effectSpeed, 'wait': false,  'transition': Fx.Transitions.cubicOut});
		}
		return menufxs;
	},
	
	/*Effect when a list item is rolled over*/
	liEffect: function(object, colour, hoverColour) {
		/*looking for the a, sometimes it is wrapped in a span, that is what the var b is looking for*/
		var a = object.getFirst();
		var b = a.getFirst();
		if(b!=false) {a = b};
		object.addEvent('mouseenter', function(){
			a.setStyle('color', hoverColour);
		});
		object.addEvent('mouseleave', function(){
			a.setStyle('color', colour);
		});
	},
	
	
	/**================
	Colapsable block
	=================*/

	/*loops through all the collapsable blocks and adds the event to them*/
	collapsBlock: function(){
		var sideblocksWrapper = $$('.db_infoboxWrapper');
		
		for (i=0; i < sideblocksWrapper.length; i++)
		{
			var theBlock = sideblocksWrapper[i];
			var heading = theBlock.getFirst('.rbheading');//was h3
			var content = theBlock.getElement('.db_infoboxContent');//this is wrong... was div
			
			var linkV = 'color:black;';
			var span = heading.getFirst('span');
			if(span) {linkV = span.getProperty('style');}//find what the color is.
			var linkHoverV = Site.extractElement(theBlock, '.linkColourHover', "#FFFFFF");
			var needClickV = Site.extractElement(theBlock, '.needClick', "0");
			
			Site.collapsBlockAddEvent(theBlock, heading, content, linkV, linkHoverV, needClickV);
		}
	},
	
	/*adds the collaps even to the block passed*/
	collapsBlockAddEvent: function(theBlock, heading, content, linkV, linkHoverV, needClick) {
		var p = theBlock.getParent();
		var marginTop = 20;
		var padding = 0;
		//if it is the css block then different padding and margin
		if(p.getProperty('class') == 'db_css'){
			marginTop = 0;
			padding = 10;
		}
		
		var isOpen = false;
		//first finds  scrole height
		content.setStyle('display', 'block');
		var contentSize = content.scrollHeight;
		content.setStyle('height', 0);
		content.setStyle('display', 'none');
		
		var effect = new Fx.Styles(content, {'duration': 400, 'wait': false,  'transition': Fx.Transitions.cubicOut});
		
		//now adds events
		theBlock.addEvent('mouseenter', function(){
			var a = heading.getElements('span');//use this as dont know where colour is set.
			a.setStyle('color', linkHoverV);
			heading.setStyle('color', linkHoverV);
			if(needClick == "0") {
				Site.collapsOpen(heading, content, effect, contentSize, marginTop, padding);
			}
		});
		theBlock.addEvent('mouseleave', function(){
			var a = heading.getElements('span');
			a.setProperty('style', linkV);
			heading.setStyle('color', 'black');
			if(needClick == "0") {
				Site.collapsClose(heading, content, effect, contentSize);
			}
		});
		
		if(needClick == "1") {
			theBlock.addEvent('click', function(){
				if(isOpen) {
					Site.collapsClose(heading, content, effect, contentSize);
					isOpen = false;
				} else {
					Site.collapsOpen(heading, content, effect, contentSize, marginTop, padding);
					isOpen = true;
				}
			});
		}
	},
	
	collapsOpen: function(heading, content, effect, contentSize, marginTop, padding) {
		heading.addClass('hover');
		content.setStyle('display', 'block');
		effect.start({
			'height': contentSize,
			'margin-top': marginTop,
			'padding-top':padding,
			'padding-bottom':padding
		});
	},
	
	collapsClose: function(heading, content, effect, contentSize) {
		heading.removeClass('hover');
		content.setStyle('display', 'block');
		effect.start({
			'height': 0,
			'margin-top': 0,
			'padding-top':0,
			'padding-bottom':0
		});
	}
};

window.addEvent('domready', Site.start);
