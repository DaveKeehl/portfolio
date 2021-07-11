export const url = 'https://api-eu-central-1.graphcms.com/v2/ckpi8048a1k5f01w3groi7vak/master';

export const getHomepage = `
	query getHomepage {
		header(where: {id: "ckqqhwh7kz2rw0b12c63g59em"}) {
			logo {
				alt
				url
			}
			navigation
			socials {
				name
				url
				image {
					alt
					url
				}
			}
		}
		homepage(where: {id: "ckpix9y6029nn0a49iuokathu"}) {
			pageTitle
			pageDescription
			hero {
				greetings
				valueProposition
				introduction
				button {
					text
					link
					external
					type
					size
					iconPosition
				}
				image {
					url
					alt
				}
			}
			about {
				title
				text
				button {
					text
					link
					external
					type
					size
					iconPosition
				}
			}
			projectSectionTitle
			blogSectionTitle
			contact {
				title
				text
				email
			}
		}
		articles {
			createdAt
			id
			title
			slug
			category
			cover {
				alt
				url
			}
			excerpt
			content {
				html
			}
		}
		projects {
			createdAt
			id
			title
			slug
			featured
			liveUrl
			repositoryUrl
			visitButtonText
			excerpt
			description
			cover {
				url
				alt
			}
			technologies
		}
		footer(where: {id: "ckpixr1wo2aff0b04e3kvml4s"}) {
			text {
				html
			}
		}
	}
`;

export const getProjectBySlug = `
	query getProjectBySlug($slug: String!) {
		header(where: {id: "ckqqhwh7kz2rw0b12c63g59em"}) {
			logo {
				alt
				url
			}
			navigation
			socials {
				name
				url
				image {
					alt
					url
				}
			}
		}
		project(where: {slug: $slug}) {
			id
			title
			description
			cover {
				alt
				url
			}
			technologies
			industry
			year
			productType
			role
			components
			projectSections {
				title
				content {
					html
				}
			}
		}
		footer(where: {id: "ckpixr1wo2aff0b04e3kvml4s"}) {
			text {
				html
			}
		}
	}
`;

export const getArticleBySlug = `
	query getArticleBySlug($slug: String!) {
		header(where: {id: "ckqqhwh7kz2rw0b12c63g59em"}) {
			logo {
				alt
				url
			}
			navigation
			socials {
				name
				url
				image {
					alt
					url
				}
			}
		}
		article(where: {slug: $slug}) {
			title
			category
			cover {
				url
				alt
			}
			excerpt
			content {
				html
			}
		}
		footer(where: {id: "ckpixr1wo2aff0b04e3kvml4s"}) {
			text {
				html
			}
		}
	}
`;
