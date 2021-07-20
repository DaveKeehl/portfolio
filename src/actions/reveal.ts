import { writable } from 'svelte/store';

interface IOptions {
	debug?: boolean;
	ref?: string;
	duration?: number;
	threshold?: number;
	offset?: number;
	delay?: number;
	x?: number;
	y?: number;
}

interface IReturnAction {
	destroy(): void;
}

const created = writable(false);

const DISABLE_DEBUG = false;
const DEBUG = false;
const REF = '';
const DURATION = 800;
const THRESHOLD = 0.6;
const OFFSET = 0;
const DELAY = 0;
const Y = -20;
const X = 0;

export const reveal = (node: HTMLElement, options: IOptions = {}): IReturnAction | void => {
	const {
		debug = DEBUG,
		ref = REF,
		threshold = THRESHOLD,
		offset = OFFSET,
		duration = DURATION,
		delay = DELAY,
		x = X,
		y = Y
	} = options;

	const config = {
		root: null,
		rootMargin: `0px 0px ${offset}px 0px`,
		threshold: threshold
	};

	let createdStyle: boolean;
	const unsubscribe = created.subscribe((value) => (createdStyle = value));

	if (!createdStyle) {
		const style = document.createElement('style');
		style.setAttribute('type', 'text/css');
		style.innerHTML = `
			.not-visible {
				opacity: 0;
				transform: translateX(${x}px) translateY(${y}px);
			}
		`;
		const head = document.querySelector('head');
		head.appendChild(style);
		created.set(true);
	}

	node.classList.add('not-visible');
	node.style.transition = `all ${duration / 1000}s ${delay / 1000}s`;

	const observer = new IntersectionObserver(
		(entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			if (!DISABLE_DEBUG) {
				if (debug && ref !== '') {
					const entry = entries[0];
					const entryTarget = entry.target;

					if (entryTarget === node) {
						console.log(`--- ${ref} ---`);
						console.log(entry);
					}
				}
			}

			entries.forEach((entry) => {
				if (entry.intersectionRatio >= threshold) {
					node.classList.remove('not-visible');
					observer.unobserve(node);

					return {
						destroy() {
							unsubscribe();
						}
					};
				}
			});
		},
		config
	);

	observer.observe(node);
};
