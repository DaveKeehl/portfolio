export const url =
	'https://api-eu-central-1.graphcms.com/v2/ckpi8048a1k5f01w3groi7vak/master';

export const getHomepage = /* groq */ `{
	"siteSettings": *[_type == "siteSettings"] {
		brandName,
		tagline,
		favicon {
			"favicon192": favicon192.asset->{url}.url,
			"favicon32": favicon32.asset->{url}.url,
			"favicon16": favicon16.asset->{url}.url,
			"faviconSVG": faviconSVG.asset->{url}.url
		},
		openGraph {
			baseUrl,
			"image": image.asset->{url}.url
		}
	}[0],
	"homepage": {
		"header": {
			"logo": *[_type == "siteSettings"][0].logo.asset->{url}.url,
			"socials": *[_type == "social"] {
				_id,
				title,
				url,
				"icon": icon.asset->{url}.url
			},
			"sections": *[section != null && !(_id in path("drafts.**"))] | order(section.order) { 
				_id,
				"name": section{name}.name
			}[0...-1]
		},
		"hero": *[_type == "hero"] {
			greetings,
			heading,
			description,
			buttons
		}[0],
		"about": *[_type == "about"] {
      heading,
      "image": image.asset->{url}.url,
      content,
      button
    }[0],
    "projects": *[_type == "projects"] {
      heading,
      "projects": *[_type == "project" && featured == true] {
        _id,
        title,
        type,
        "image": image.asset->{url}.url,
        primaryCTA {
          text,
          url
        },
        "excerpt": *[_type == "caseStudy" && project->title == ^.title]{excerpt}[0].excerpt,
				industry,
				year,
				roles,
				technologies[]-> {
					_id,
					title,
					url
				}
      },
    }[0],
		"blog": *[_type == "blog"] {
			heading,
			"labels": array::unique(*[_type in ["caseStudy", "article"]]{_type}._type),
			"posts": *[_type in ["caseStudy", "article"] && visibility == "public"] | order(_createdAt) {
				_type,
				"title": coalesce(title, project->title),
				"image": coalesce(image, project->image).asset->{url}.url,
				excerpt,
			}
		}[0],
		"contact": *[_type == "contact"] {
			heading,
			content
		}[0],
		"footer": *[_type == "footer"] {
			content
		}[0]
	}
}`;

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
			title
			description
			visitButtonText
			liveUrl
			repositoryUrl
			cover {
				alt
				url
			}
			technologies
			industry
			year
			productType
			role
			metrics
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
