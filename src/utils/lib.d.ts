export interface IButton {
	text: string;
	link: string;
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
	logo: IImage;
	navigation: string[];
	socials: ISocial[];
}

export interface IHero {
	greetings: string;
	valueProposition: string;
	introduction: string;
	button: IButton;
	image: IImage;
}

export interface IAbout {
	title: string;
	text: string;
	button: IButton;
}

export interface IProjectSection {
	title: string;
	content: {
		html: string;
	};
}

export interface IMetric {
	name: string;
	value: number;
}

export interface IProject {
	createdAt: string;
	title: string;
	slug: string;
	featured: boolean;
	liveUrl: string;
	repositoryUrl: string;
	visitButtonText: string;
	excerpt: string;
	description: string;
	cover: IImage;
	technologies: string[];
	industry: string;
	year: number;
	productType: string;
	role: string[];
	metrics?: IMetric[];
	projectSections?: IProjectSection[];
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
	title: string;
	text: string;
	email: string;
}

export interface IFooter {
	text: {
		html: string;
	};
}

export interface IHomepage {
	pageTitle: string;
	pageDescription: string;
	hero: IHero;
	about: IAbout;
	projectSectionTitle: string;
	blogSectionTitle: string;
	contact: IContact;
}
