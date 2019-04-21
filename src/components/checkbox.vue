<template lang="pug">

	.checkbox(@click="app.settings[dataTarget] = !status")

		.checkbox-icon
			fa-icon(v-if="status", :icon="['fas', 'check-square']")
			fa-icon(v-else, :icon="['far', 'square']")

		.checkbox-text
			div {{app.lang.settings[dataTarget]}}


</template>

<script>
export default {

	/* === === === === === */
	/* Props
	/* === === === === === */

	props: {
		dataTarget: {
			required: true,
			type: String
		}
	},

	/* === === === === === */
	/* Computed
	/* === === === === === */

	computed: {
		app() {return this.$parent},
		status() {return this.app.settings[this.dataTarget]}
	}

}
</script>