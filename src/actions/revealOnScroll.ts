interface IOptions {
	debug?: boolean;
	ref?: string;
	fadeDuration?: number;
	threshold?: number;
	offset?: number;
	delay?: number;
}

interface IReturnAction {
	destroy(): void;
}

export const revealOnScroll = (node: HTMLElement, options: IOptions = {}): IReturnAction => {
	const {
		debug = false,
		ref = '',
		fadeDuration = 800,
		threshold = 700,
		offset = 0,
		delay = 0
	} = options;

	const y: number = node.getBoundingClientRect().y;
	const offsetTop: number = node.offsetTop;

	if (debug && ref !== '') {
		console.log(`--- ${ref} ---`);
		console.log(`y: ${y}`);
		console.log(`offsetTop: ${offsetTop}`);
		console.log(`window.innerHeight: ${window.innerHeight}`);
		console.log(`window.scrollY: ${window.scrollY}`);
	}

	// Element is above the initial fold => Use css animation to reveal
	// (No need to scroll to reveal)
	if (offsetTop < window.innerHeight) {
		if (debug && ref !== '') {
			console.log(`{${ref}} is above the initial fold`);
		}
		node.classList.add('reveal');
		node.style.animationDelay = `${delay / 1000}s`;
		return;
	}

	// Element has not been seen yet => Hide at page load
	if (window.scrollY > offset) {
		if (debug && ref !== '') {
			console.log(`$${ref} has not been seen yet`);
		}
		node.classList.add('not-visible');
		window.addEventListener('scroll', handleScroll);

		return {
			destroy() {
				window.removeEventListener('scroll', handleScroll);
			}
		};
	}
	// Element has already been seen => Don't hide at page load
	else {
		if (debug && ref !== '') {
			console.log(`$${ref} has already been seen`);
		}
	}

	function handleScroll() {
		if (window.scrollY > y - threshold + offset) {
			node.style.transition = `all ${fadeDuration / 1000}s ${delay / 1000}s`;
			node.classList.remove('not-visible');
			window.removeEventListener('scroll', handleScroll);
		}
	}
};
