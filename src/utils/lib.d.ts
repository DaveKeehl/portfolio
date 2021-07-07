export interface IButton {
	text: string;
	link: string;
	external: boolean;
	type?: string;
}

export interface ISocial {
	name: string;
	url: string;
	image: {
		url: string;
	};
}

export interface IHeader {
	logo: {
		url: string;
	};
	navigation: string[];
	socials: ISocial[];
}

export interface IHero {
	greetings: string;
	valueProposition: string;
	introduction: string;
	button: IButton;
}

export interface IAbout {
	title: string;
	text: string;
	button: IButton;
}

export interface IProject {
	id: string;
	title: string;
	slug: string;
	description: string;
	image: {
		url: string;
	};
	technologies: string[];
	buttons: IButton[];
}

export interface IArticle {
	id: string;
	title: string;
	slug: string;
	category: string;
	cover: {
		url: string;
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
