<template lang="pug">

	#app
		#password(:data-clipboard-text="password", :data-copied-text="lang.copied", :class="{copied}") {{password}}

		footer
			#controls
				#password-regen
					button(@click="settings.length++; settings.length--"): fa-icon(icon="redo")

				#password-length
					numberInput

				#password-pattern
					checkbox(dataTarget="letters")
					checkbox(dataTarget="numbers")
					checkbox(dataTarget="symbols")

				#language-switch
					button(@click="currentLang = (currentLang === 'en' ? 'ru' : 'en')") {{currentLang}}

			#info
				div <a href="https://github.com/imillerik/pwgen" target="_blank">{{lang.sourceCode}}</a>
				div {{lang.author}}: <a href="https://imillerik.org" target="_blank">iMillerik</a>


</template>

<script>
import ClipboardJS from 'clipboard';

import funcs from './assets/js/funcs.js';

import checkbox from './components/checkbox.vue';
import numberInput from './components/numberInput.vue';

export default {
	name: 'app',
	components: {checkbox, numberInput},

	/* === === === === === */
	/* Data
	/* === === === === === */

	data() {
		return {
			copied: false,

			/* === === === === === */
			/* Settings
			/* === === === === === */

			settings: {
				length: 16,
				letters: true,
				numbers: true,
				symbols: true
			},

			/* === === === === === */
			/* Current language
			/* === === === === === */

			currentLang: 'en'
		}
	},

	/* === === === === === */
	/* Computed
	/* === === === === === */

	computed: {

		/* === === === === === */
		/* Load language
		/* === === === === === */

		lang() {
			return require(`./assets/lang/${this.currentLang}.json`)
		},

		/* === === === === === */
		/* Generate a password
		/* === === === === === */

		password() {
			return funcs.pwgen(this.settings.length, this.settings.letters, this.settings.numbers, this.settings.symbols);
		}
	},

	/* === === === === === */
	/* Mounted
	/* === === === === === */

	mounted() {
		
		/* === === === === === */
		/* Initialize ClipboardJS
		/* === === === === === */

		(new ClipboardJS('#password')).on('success', () => {
			
			if(this.copied) return;

			this.copied = true;

			setTimeout(() => {
				this.copied = false;
			}, 2000);

		});

		/* === === === === === */
		/* Set browser language as the site language
		/* === === === === === */

		let bLang = localStorage.getItem('lang') || navigator.language.match(/\w+/)[0] || 'en';

		if(['en', 'ru'].indexOf(bLang) === -1) {
			bLang = 'en';
		}

		this.currentLang = bLang;

	},

	/* === === === === === */
	/* Watchers
	/* === === === === === */

	watch: {

		/* === === === === === */
		/* Set language to localStorage up
		/* === === === === === */

		currentLang() {
			localStorage.setItem('lang', this.currentLang)
		}

	}
}
</script>

<style lang="less">
	@import "./assets/styles/main";
</style>