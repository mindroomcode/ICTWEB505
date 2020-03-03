window.UI = {

	addClasses: function(me, rules){
		UI.changeClasses(me, rules, action = 'add')
	},

	removeClasses: function(me, rules){
		UI.changeClasses(me, rules, action = 'remove')
	},

	toggleClasses: function(me, rules){
		UI.changeClasses(me, rules, action = 'toggle')
	},

	changeClasses: function(me, rules, action = 'add'){

		var elements = rules.split(' ');

			// build a list of selector and classes to be applied
		var selectors = {}

		elements.forEach(rule=>{

			// split on '.' not preceded by '>' or begining of line
			var rules = rule.split('\.');

			// '.a.b.c' will split first array item empty. Remove it.
			if(rules[0] == '') rules.shift(); 

			// separate selector from classNames
			var [selector, ...rules] = rules

			selectors[selector] = rules;

		})

		// update classes

		for(key in selectors){


			if(key === 'me') {

				var el = me; 

			} else if(key.indexOf('>') != -1){

				var selector = key.replace('me>', '')

				var el = me.querySelector(selector);

			} else if(key.indexOf('parent') != -1){

				var selector = key.replace('parent', '')

				var el = me.closest(selector);

			} else if(key.indexOf('next') != -1){

				var el = me.nextElementSibling;

			} else {
				
				var el = document.querySelector(key);
			}

			if(!el) continue 
			

			selectors[key].map(className => {

				el.classList[action](className)
			
			})  

			el = null;

		}
	}
}
