const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Catamaran', 'Helvetica', 'Arial', 'sans-serif']
			},
			height: {
				'10v': '10vh',
				'20v': '20vh',
				'30v': '30vh',
				'40v': '40vh',
				'50v': '50vh',
				'60v': '60vh',
				'70v': '70vh',
				'80v': '80vh',
				'90v': '90vh',
				'100v': '100vh'
			},
			backgroundPosition: {
				no_bg_hero: '50% 10%'
			},
			colors: {
				no_darkblue: {
					DEFAULT: '#1f3947',
					lighter: ''
				},
				no_lightblue: {
					DEFAULT: '#e6f5ff'
				},
				no_brown: {
					DEFAULT: '#51402d',
					lighter: '#9e7548'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
