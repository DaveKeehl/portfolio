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
const THRESHOLD = 0.6;
const OFFSET = 0;
const DELAY = 0;

export const reveal = (node: HTMLElement, options: IOptions = {}): IReturnAction | void => {
	const {
		debug = DEBUG,
		ref = REF,
		threshold = THRESHOLD,
		offset = OFFSET,
		duration = DURATION,
		delay = DELAY
	} = options;

	const config = {
		root: null,
		rootMargin: '0px',
		threshold: threshold
	};

	node.classList.add('not-visible');
	node.style.transition = `all ${duration / 1000}s ${delay / 1000}s`;

	const observer = new IntersectionObserver(callback, config);
	observer.observe(node);

	function callback(entries, observer) {
		if (!DISABLE_DEBUG) {
			if (debug && ref !== '') {
				const entry = entries[0];
				const entryTarget = entry.target;
				if (entryTarget === node) {
					// console.log(entryTarget);
					console.log(entry);
					// console.log(entry.isIntersecting);
				}
			}
		}

		entries.forEach((entry) => {
			// Each entry describes an intersection change for one observed
			// target element:
			//   entry.boundingClientRect
			//   entry.intersectionRatio
			//   entry.intersectionRect
			//   entry.isIntersecting
			//   entry.rootBounds
			//   entry.target
			//   entry.time
			if (entry.intersectionRatio >= threshold + offset) {
				node.classList.remove('not-visible');

				return {
					destroy() {
						observer.unobserve(node);
					}
				};
			}
		});
	}
};
