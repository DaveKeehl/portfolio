export const getHomepage = `
	query getHomepage {
		homepage (where: {id: "ckpix9y6029nn0a49iuokathu"}) {
			header {
				logo {
					url
				}
				navigation
				socials {
					name
					url
					image {
						url
					}
				}
			}
			hero {
				greetings
				valueProposition
				introduction
				button
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
			projects {
				id
				title
				slug
				description
				image {
					url
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
				category
				cover {
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
