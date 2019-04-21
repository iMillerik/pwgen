<template lang="pug">

	div
		input(type='text', v-model="app.settings.length", maxlength="2", @input="validate")

</template>

<script>
export default {

	/* === === === === === */
	/* Computed
	/* === === === === === */

	computed: {
		app() {return this.$parent}
	},

	/* === === === === === */
	/* Methods
	/* === === === === === */

	methods: {
		validate(e) {
			this.app.settings.length = this.app.settings.length
				.replace(/[^\d]*$/, '');
		}
	}

}
</script>