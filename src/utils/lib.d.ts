// =========================================
// PAGES
// =========================================
export interface IHomepage {
	header: IHeader;
	hero: IHero;
	about: IAbout;
	projects: IProjects;
	blog: IBlog;
	contact: IContact;
	footer: IFooter;
}

// =========================================
// CONFIG
// =========================================

export interface ISiteSettings {
	tagline: string;
	brandName: string;
}

// =========================================
// COMPONENTS
// =========================================

export interface IButton {
	text: string;
	href: string;
	external: boolean;
	type?: string;
}

export interface IImage {
	url: string;
	alt?: string;
	assetId: string;
}

export interface ISocial {
	title: string;
	url: string;
	icon: IImage;
}

// =========================================
// SECTIONS
// =========================================

export interface IHeader {
	logo: IImage;
	sections: ISection[];
	socials: ISocial[];
}

export interface IHero {
	heading: string;
	greetings: string;
	description: string;
	buttons: {
		primary: string;
		secondary: string;
	};
}

export interface IAbout {
	heading: string;
	image: IImage;
	button: string;
	content: any;
}

export interface IProjects {
	heading: string;
	projects: IProject[];
}

export interface IBlog {
	heading: string;
	labels: string[];
	posts: IPost[];
}

export interface IContact {
	heading: string;
	content: any;
}

export interface IFooter {
	content: any;
}

// =========================================
// UTILS
// =========================================

export interface IArticle {
	createdAt: string;
	id: string;
	title: string;
	slug: string;
	category: string;
	cover: IImage;
	excerpt: string;
	content: {
		html: string;
	};
}

export interface IPost {
	_type: 'caseStudy' | 'article';
	excerpt: string;
	image: IImage;
	title: string;
	slug: string;
}

export interface IProject {
	_id: string;
	title: string;
	slug: string;
	type: string;
	image: IImage;
	primaryCTA: {
		text: string;
		url: string;
	};
	industry: string;
	year: number;
	roles: string[];
	technologies: ITechnology[];
	excerpt: string;
}

export interface ISection {
	_id: string;
	name: string;
}

export interface ITechnology {
	_id: string;
	title: string;
	url: string;
}
