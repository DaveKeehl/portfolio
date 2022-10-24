export interface IButton {
	text: string;
	href: string;
	external: boolean;
	type?: string;
}

export interface IImage {
	url: string;
	alt: string;
}

export interface ISocial {
	name: string;
	url: string;
	image: IImage;
}

export interface IHeader {
	logo: string;
	sections: {
		_id: string;
		name: string;
	}[];
	socials: {
		_id: string;
		icon: string;
		title: string;
		url: string;
	}[];
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
	image: string;
	button: string;
	content: any;
}

export interface IProjects {
	heading: string;
	projects: IProject[];
}

export interface IProject {
	_id: string;
	title: string;
	slug: string;
	type: string;
	image: string;
	primaryCTA: {
		text: string;
		url: string;
	};
	industry: string;
	year: number;
	roles: string[];
	technologies: {
		_id: string;
		title: string;
		url: string;
	}[];
	excerpt: string;
}

export interface IBlog {
	heading: string;
	labels: string[];
	posts: {
		_type: 'caseStudy' | 'article';
		excerpt: string;
		image: string;
		title: string;
		slug: string;
	}[];
}

interface IArticleCard {
	createdAt: string;
	title: string;
	slug: string;
	excerpt: string;
	cover: IImage;
	resourceType: 'project' | 'blog';
	category: string;
}

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

export interface IContact {
	heading: string;
	content: any;
}

export interface IFooter {
	content: any;
}

export interface ISiteSettings {
	tagline: string;
	brandName: string;
}

export interface IHomepage {
	header: IHeader;
	hero: IHero;
	about: IAbout;
	projects: IProjects;
	blog: IBlog;
	contact: IContact;
	footer: IFooter;
}

export interface IPost {
	_type: 'caseStudy' | 'article';
	excerpt: string;
	image: string;
	title: string;
}
