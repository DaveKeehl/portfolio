import { writable } from 'svelte/store';

interface IOptions {
	debug?: boolean;
	ref?: string;
	threshold?: number;
	offset?: {
		top?: number;
		bottom?: number;
	};
	transition?: Transitions;
	delay?: number;
	duration?: number;
	easing?: Easing;
	x?: number;
	y?: number;
	once?: boolean;
}

type ObserverRoot = HTMLElement | null | undefined;

interface ObserverOptions {
	root: ObserverRoot;
	rootMargin: string;
	threshold: number;
}

interface IConfig {
	disableDebug: boolean;
	observer: ObserverOptions;
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

const init: IOptions = {
	debug: false,
	ref: '',
	threshold: 0.6,
	offset: {
		top: 0,
		bottom: 0
	},
	transition: 'fly',
	delay: 0,
	duration: 800,
	easing: 'ease',
	x: -20,
	y: -20
};

let config: IConfig = {
	disableDebug: false,
	observer: {
		root: null,
		rootMargin: `${init.offset.top}px 0px ${init.offset.bottom}px 0px`,
		threshold: init.threshold
	}
};

export const setDisableDebug = (debug: boolean): void => {
	config.disableDebug = debug;
};

export const setObserverConfig = (intersectionObserverConfig: ObserverOptions): void => {
	config.observer = intersectionObserverConfig;
};

export const setObserverRoot = (root: ObserverRoot): void => {
	config.observer.root = root;
};

export const setObserverRootMargin = (rootMargin: string): void => {
	config.observer.rootMargin = rootMargin;
};

export const setObserverThreshold = (threshold: number): void => {
	if (threshold >= 0 && threshold <= 1) {
		config.observer.threshold = threshold;
	} else {
		console.error('Threshold must be between 0 and 1');
	}
};

export const setConfig = (userConfig: IConfig): void => {
	config = userConfig;
};

const printRef = (ref: string): void => {
	console.log(`--- ${ref} ---`);
};

const getCssProperties = (transition: Transitions, options: IOptions): string => {
	const { x = init.x, y = init.y } = options;

	if (transition === 'fly') {
		return `
			opacity: 0;
			transform: translateY(${y}px);
		`;
	}
	if (transition === 'fade') {
		return `
			opacity: 0;
		`;
	}
	if (transition === 'blur') {
		return `
			opacity: 0;
			filter: blur(16px);
		`;
	}
	if (transition === 'scale') {
		return `
			opacity: 0;
			transform: scale(0);
		`;
	}
	if (transition === 'slide') {
		return `
			opacity: 0;
			transform: translateX(${x}px);
		`;
	}
};

export const reveal = (node: HTMLElement, options: IOptions = {}): IReturnAction | void => {
	const {
		debug = init.debug,
		ref = init.ref,
		threshold = init.threshold,
		transition = init.transition,
		delay = init.delay,
		duration = init.duration,
		easing = init.easing
	} = options;

	let createdStyle: boolean;
	const unsubscribe = created.subscribe((value) => (createdStyle = value));

	if (!config.disableDebug) {
		if (debug && ref !== '') {
			console.log(`DISABLE_DEBUG: ${config.disableDebug}`);
			printRef(ref);
			console.log(options);
			printRef(ref);
			console.log(config);
		}
	}

	if (!createdStyle) {
		const style = document.createElement('style');
		style.setAttribute('type', 'text/css');
		style.setAttribute('data-action', 'reveal');
		style.innerHTML = `
			.fly--hidden {
				${getCssProperties('fly', options)}
			}
			.fade--hidden {
				${getCssProperties('fade', options)}
			}
			.blur--hidden {
				${getCssProperties('blur', options)}
			}
			.scale--hidden {
				${getCssProperties('scale', options)}
			}
			.slide--hidden {
				${getCssProperties('slide', options)}
			}
		`;
		const head = document.querySelector('head');
		head.appendChild(style);
		created.set(true);
	}

	node.classList.add(`${transition}--hidden`);
	node.style.transition = `all ${duration / 1000}s ${delay / 1000}s ${easing}`;

	const observer = new IntersectionObserver(
		(entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			if (!config.disableDebug) {
				if (debug && ref !== '') {
					const entry = entries[0];
					const entryTarget = entry.target;

					if (entryTarget === node) {
						printRef(ref);
						console.log(entry);
					}
				}
			}

			entries.forEach((entry) => {
				if (entry.intersectionRatio >= threshold) {
					node.classList.remove(`${transition}--hidden`);
					observer.unobserve(node);
				}
			});
		},
		config.observer
	);

	observer.observe(node);

	return {
		destroy() {
			unsubscribe();
		}
	};
};
