const devtools = {
	isOpen: false,
	orientation: undefined,
};

const threshold = 160;

const emitEvent = (isOpen, orientation) => {
	globalThis.dispatchEvent(new globalThis.CustomEvent('devtoolschange', {
		detail: {
			isOpen,
			orientation,
		},
	}));
};

const main = ({emitEvents = true} = {}) => {
	const widthThreshold = globalThis.outerWidth - globalThis.innerWidth > threshold;
	const heightThreshold = globalThis.outerHeight - globalThis.innerHeight > threshold;
	const orientation = widthThreshold ? 'vertical' : 'horizontal';

	if (
		!(heightThreshold && widthThreshold)
		&& ((globalThis.Firebug && globalThis.Firebug.chrome && globalThis.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
	) {
      if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
			emitEvent(true, orientation);
			}

			devtools.isOpen = true;
			devtools.orientation = orientation;
      window.location.href = "https://pepper-site-v2.webflow.io/404";
		} else {
		if (devtools.isOpen && emitEvents) {
			emitEvent(false, undefined);
			}

			devtools.isOpen = false;
			devtools.orientation = undefined;
		}
};

main({emitEvents: false});
setInterval(main, 500);

export default devtools;

	document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
return false;
}
}
