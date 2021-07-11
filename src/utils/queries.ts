export const url = 'https://api-eu-central-1.graphcms.com/v2/ckpi8048a1k5f01w3groi7vak/master';

export const getHomepage = `
	query getHomepage {
		homepage (where: {id: "ckpix9y6029nn0a49iuokathu"}) {
			pageTitle
			pageDescription
			header {
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
			projects (where: {featured : true}) {
				id
				title
				slug
        liveUrl
        repositoryUrl
        visitButtonText
				description
				image {
					url
          alt
				}
				technologies
			}
			blogSectionTitle
			articles {
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
			contact {
				title
				text
				email
			}
			footer {
				text {
					html
				}
			}
		}
	}
`;

export const getProjectById = `
	query getProjectBySlug ($slug: String!) {
		header (where: {id: "ckqqhwh7kz2rw0b12c63g59em"}) {
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
		project (where: {slug: $slug}) {
			id
			title
			description
			liveUrl
			repositoryUrl
			visitButtonText
			image {
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
		footer (where: {id: "ckpixr1wo2aff0b04e3kvml4s"}) {
			text {
				html
			}
		}
	}
`;
