interface IOptions {
	debug?: boolean;
	ref?: string;
	duration?: number;
	threshold?: number;
	offset?: number;
	delay?: number;
}

interface IReturnAction {
	destroy(): void;
}

const DISABLE_DEBUG = false;
const DEBUG = false;
const REF = '';
const DURATION = 800;
const THRESHOLD = 700;
const OFFSET = 0;
const DELAY = 0;

const printOptions = (options: IOptions) => {
	const { debug = DEBUG } = options;

	if (!DISABLE_DEBUG && debug) {
		console.log(options);
	}
};

const printValues = (options: IOptions, y: number, offsetTop: number) => {
	const { debug = DEBUG, ref = REF } = options;

	if (!DISABLE_DEBUG) {
		if (debug && ref !== '') {
			console.log(`--- ${ref} ---`);
			console.log(`y: ${y}`);
			console.log(`offsetTop: ${offsetTop}`);
			console.log(`window.innerHeight: ${window.innerHeight}`);
			console.log(`window.scrollY: ${window.scrollY}`);
		}
	}
};

const revealAboveInitialFold = (node: HTMLElement, options: IOptions) => {
	const { debug = DEBUG, ref = REF, delay = DELAY } = options;

	if (!DISABLE_DEBUG) {
		if (debug && ref !== '') {
			console.log(`{${ref}} is above the initial fold`);
		}
	}

	node.classList.add('reveal');
	node.style.animationDelay = `${delay / 1000}s`;
};

const revealOnScroll = (
	node: HTMLElement,
	options: IOptions,
	y: number,
	threshold: number,
	offset: number
) => {
	const { duration = DURATION, delay = DELAY } = options;

	node.classList.add('not-visible');
	window.addEventListener('scroll', handleScroll);

	return {
		destroy() {
			window.removeEventListener('scroll', handleScroll);
		}
	};

	function handleScroll() {
		if (window.scrollY > y - threshold + offset) {
			node.style.transition = `all ${duration / 1000}s ${delay / 1000}s`;
			node.classList.remove('not-visible');
			window.removeEventListener('scroll', handleScroll);
		}
	}
};

export const reveal = (node: HTMLElement, options: IOptions = {}): IReturnAction | void => {
	const { threshold = THRESHOLD, offset = OFFSET } = options;

	printOptions(options);

	const y: number = node.getBoundingClientRect().y;
	const offsetTop: number = node.offsetTop;

	printValues(options, y, offsetTop);

	if (offsetTop < window.innerHeight) {
		return revealAboveInitialFold(node, options);
	}

	return revealOnScroll(node, options, y, threshold, offset);
};
