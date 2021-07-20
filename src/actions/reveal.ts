import { writable } from 'svelte/store';

interface IOptions {
	debug?: boolean;
	ref?: string;
	threshold?: number;
	offset?: number;
	transition?: Transitions;
	delay?: number;
	duration?: number;
	easing?: Easing;
	x?: number;
	y?: number;
	opacity?: number;
}

interface IReturnAction {
	update?: (options?: IOptions) => void;
	destroy?: () => void;
}

type Transitions = 'fly' | 'fade' | 'blur' | 'scale' | 'slide';
type Easing =
	| 'ease'
	| 'linear'
	| 'ease-in'
	| 'ease-out'
	| 'ease-in-out'
	| ['cubic-bezier', number, number, number, number];

const created = writable(false);

const DISABLE_DEBUG = false;
const DEBUG = false;
const REF = '';
const THRESHOLD = 0.6;
const OFFSET = 0;
const TRANSITION: Transitions = 'fly';
const DELAY = 0;
const DURATION = 800;
const EASING: Easing = 'ease';
const X = 0;
const Y = -20;
const OPACITY = 1;

const getCssProperties = (transition: Transitions, options: IOptions): string => {
	const { x = X, y = Y } = options;

	console.log(transition);

	if (transition === 'fly') {
		return `
			opacity: 0;
			transform: translateX(${x}px) translateY(${y}px);
		`;
	}
	if (transition === 'fade') {
		return `
			opacity: 0;
		`;
	}
	if (transition === 'blur') {
		return `
			filter: blur(8px);
		`;
	}
	if (transition === 'scale') {
		return `
			transform: scale(0);
		`;
	}
	if (transition === 'slide') {
		return `
			transform: transformX(-100%) scale(0);
		`;
	}
};

export const reveal = (node: HTMLElement, options: IOptions = {}): IReturnAction | void => {
	const {
		debug = DEBUG,
		ref = REF,
		threshold = THRESHOLD,
		offset = OFFSET,
		transition = TRANSITION,
		delay = DELAY,
		duration = DURATION,
		easing = EASING,
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

	let style: HTMLElement;

	if (!createdStyle) {
		style = document.createElement('style');
		style.setAttribute('type', 'text/css');
		style.setAttribute('data-action', 'reveal');
		const head = document.querySelector('head');
		head.appendChild(style);
		created.set(true);
	}

	if (style && createdStyle) {
		const prev = style.innerHTML;
		style.innerHTML = prev.concat(`		
			.${transition}--hidden {
				${getCssProperties(transition, options)}
			}
		`);
	}

	node.classList.add(`${transition}--hidden`);
	node.style.transition = `all ${duration / 1000}s ${delay / 1000}s ${easing}`;

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
					node.classList.remove(`${transition}--hidden`);
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
