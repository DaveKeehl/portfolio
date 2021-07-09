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
				description
				image {
					url
          alt
				}
				technologies
				buttons {
					id
					text
					link
					external
					type
					size
					iconPosition
				}
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
