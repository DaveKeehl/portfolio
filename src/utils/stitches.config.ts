import { createStitches } from '@stitches/core';

export const { css, theme, globalCss } = createStitches({
	theme: {
		colors: {
			'grayscale-100': '#EEF2F6',
			'grayscale-300': '#021326',
			'grayscale-300-A60': 'rgba(2, 19, 38, 0.6)',
			'turquoise-100': '#9AF6F9',
			'turquoise-100-A10': 'rgba(241, 254, 254, 0.1)',
			'turquoise-100-A20': 'rgba(241, 254, 254, 0.2)',
			'turquoise-200': '#0FE2EA',
			'turquoise-200-A05': 'rgba(15, 226, 234, 0.05)',
			'turquoise-200-A10': 'rgba(15, 226, 234, 0.1)',
			'turquoise-200-A20': 'rgba(15, 226, 234, 0.2)',
			'turquoise-200-A40': 'rgba(15, 226, 234, 0.4)',
			'turquoise-300': '#0CB5BB',
			'blue-100': '#B7CDE5',
			'blue-200': '#476485',
			'blue-200-A25': 'rgba(71, 100, 133, 0.25)',
			'blue-200-A40': 'rgba(71, 100, 133, 0.4)',
			'blue-300': '#031F40',
			'blue-300-A75': '#031F40',
			'blue-400': '#031836',
			'blue-400-A80': 'rgba(3, 24, 54, 0.8)'
		},
		fontSizes: {
			h1: '48px',
			h2: '36px',
			h3: '28px',
			h4: '18px',
			h5: '16px',
			p1: '24px',
			p2: '22px',
			p3: '20px',
			p4: '18px',
			p5: '16px',
			p6: '14px'
		}
	},
	utils: {
		h1: (weight: string) => {
			const variants: { [key: string]: { [key: string]: string } } = {
				bold: {
					fontSize: '48px',
					fontWeight: '700',
					lineHeight: '120%'
				}
			};
			return variants[weight];
		},
		h2: (weight: string) => {
			const variants: { [key: string]: { [key: string]: string } } = {
				semiBold: {
					fontSize: '36px',
					fontWeight: '600',
					lineHeight: '140%'
				},
				bold: {
					fontSize: '36px',
					fontWeight: '700',
					lineHeight: '140%'
				}
			};
			return variants[weight];
		},
		h3: (weight: string) => {
			const variants: { [key: string]: { [key: string]: string } } = {
				semiBold: {
					fontSize: '28px',
					fontWeight: '600',
					lineHeight: '150%'
				},
				bold: {
					fontSize: '28px',
					fontWeight: '700',
					lineHeight: '150%'
				}
			};
			return variants[weight];
		},
		p1: (weight: string) => {
			const variants: { [key: string]: { [key: string]: string } } = {
				semiBold: {
					fontSize: '24px',
					fontWeight: '600',
					lineHeight: '150%'
				},
				bold: {
					fontSize: '24px',
					fontWeight: '700',
					lineHeight: '150%'
				}
			};
			return variants[weight];
		},
		p3: (weight: string) => {
			const variants: { [key: string]: { [key: string]: string } } = {
				regular: {
					fontSize: '20px',
					fontWeight: '400',
					lineHeight: '150%'
				},
				medium: {
					fontSize: '20px',
					fontWeight: '500',
					lineHeight: '150%'
				},
				bold: {
					fontSize: '20px',
					fontWeight: '700',
					lineHeight: '150%'
				}
			};
			return variants[weight];
		},
		p4: (weight: string) => {
			const variants: { [key: string]: { [key: string]: string } } = {
				regular: {
					fontSize: '18px',
					fontWeight: '400',
					lineHeight: '150%',
					letterSpacing: '0.02em'
				},
				medium: {
					fontSize: '18px',
					fontWeight: '500',
					lineHeight: '150%',
					letterSpacing: '0.01em'
				},
				semiBold: {
					fontSize: '18px',
					fontWeight: '600',
					lineHeight: '150%'
				},
				code: {
					fontFamily: 'Menlo',
					fontSize: '18px',
					lineHeight: '150%'
				}
			};
			return variants[weight];
		},
		p5: (weight: string) => {
			const variants: { [key: string]: { [key: string]: string } } = {
				regular: {
					fontSize: '16px',
					fontWeight: '400',
					lineHeight: '150%',
					letterSpacing: '0.02em'
				},
				medium: {
					fontSize: '16px',
					fontWeight: '500',
					lineHeight: '150%',
					letterSpacing: '0.02em'
				},
				semiBold: {
					fontSize: '16px',
					fontWeight: '600',
					lineHeight: '150%',
					letterSpacing: '0.02em'
				}
			};
			return variants[weight];
		},
		p6: (weight: string) => {
			const variants: { [key: string]: { [key: string]: string } } = {
				code: {
					fontFamily: 'Menlo',
					fontSize: '14px',
					fontWeight: '700',
					lineHeight: '150%',
					letterSpacing: '0.04em'
				}
			};
			return variants[weight];
		}
	}
});
