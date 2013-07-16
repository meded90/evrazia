/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-arrow-up-left' : '&#xe071;',
			'icon-arrow-up' : '&#xe072;',
			'icon-arrow-up-right' : '&#xe073;',
			'icon-arrow-right' : '&#xe074;',
			'icon-arrow-down-right' : '&#xe075;',
			'icon-arrow-down' : '&#xe076;',
			'icon-back' : '&#xe008;',
			'icon-user' : '&#xe009;',
			'icon-location' : '&#xe00a;',
			'icon-vk' : '&#xe00c;',
			'icon-od' : '&#xe00d;',
			'icon-mobile' : '&#xe00e;',
			'icon-vk-2' : '&#xe010;',
			'icon-mail' : '&#xe011;',
			'icon-twitter' : '&#xf099;',
			'icon-facebook' : '&#xe000;',
			'icon-untitled' : '&#x420;',
			'icon-equalizer' : '&#xe00b;',
			'icon-arrow-left' : '&#xe012;',
			'icon-arrow-down-left' : '&#xe013;',
			'icon-left' : '&#xe001;',
			'icon-right' : '&#xe002;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};