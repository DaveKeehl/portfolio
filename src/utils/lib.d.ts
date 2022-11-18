// =========================================
// PAGES
// =========================================
export interface IHomepage {
	hero: IHero;
	about: IAbout;
	projects: IProjects;
	blog: IBlog;
	contact: IContact;
}

// =========================================
// CONFIG
// =========================================

export interface ISiteSettings {
	tagline: string;
	brandName: string;
	openGraph: IOpenGraph;
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
	posts: IPostPreview[];
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

export interface IOpenGraph {
	image: string;
}

export interface IArticle {
	_createdAt: string;
	title: string;
	image: IImage;
	content: any;
}

export interface IPostPreview {
	_type: 'caseStudy' | 'article';
	excerpt: string;
	image: IImage;
	title: string;
	slug: string;
}

export interface IProject {
	_createdAt: string;
	title: string;
	slug: string;
	type: string;
	image: IImage;
	liveButton: {
		text: string;
		url: string;
	};
	repositoryButton: {
		text: string;
		url: string;
	};
	industry: string;
	year: number;
	roles: string[];
	technologies: ITechnology[];
	excerpt: string;
	nutshell: any;
	content: any;
}

export interface ISection {
	_id: string;
	name: string;
}

export interface ITechnology {
	title: string;
	url: string;
}
