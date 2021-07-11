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
	image: {
		url: string;
		alt: string;
	};
}

export interface IHeader {
	logo: {
		url: string;
		alt: string;
	};
	navigation: string[];
	socials: ISocial[];
}

export interface IHero {
	greetings: string;
	valueProposition: string;
	introduction: string;
	button: IButton;
	image: {
		url: string;
		alt: string;
	};
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

export interface IProject {
	title: string;
	slug: string;
	featured?: boolean;
	liveUrl: string;
	repositoryUrl: string;
	visitButtonText: string;
	description: string;
	image: {
		url: string;
		alt: string;
	};
	technologies: string[];
	industry?: string;
	year?: number;
	productType?: string;
	role?: string[];
	components?: number;
	projectSections?: IProjectSection[];
}

export interface IArticle {
	id: string;
	title: string;
	slug: string;
	category: string;
	cover: {
		url: string;
		alt: string;
	};
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
	header: IHeader;
	hero: IHero;
	about: IAbout;
	projectSectionTitle: string;
	projects: IProject[];
	blogSectionTitle: string;
	articles: IArticle[];
	contact: IContact;
	footer: IFooter;
}
