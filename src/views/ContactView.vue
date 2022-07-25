<script setup>
import { ref } from 'vue';

const name = ref(null);
const company = ref(null);
const email = ref(null);
const phoneNum = ref(null);
const message = ref(null);
</script>

<template>
	<main class="layout row" style="height: 100vh">
		<keep-alive>
			<q-form
				@submit.prevent="onSubmit"
				class="col row content-center q-col-gutter-lg form"
			>
				<q-input
					outlined
					v-model="name"
					label="Name *"
					label-color="dark"
					lazy-rules
					no-error-icon
					:rules="[val => !!val || 'What is your name?']"
					error-message="What is your name?"
					class="col-6 form__input"
				/>

				<q-input
					outlined
					v-model="company"
					label="Company *"
					label-color="dark"
					lazy-rules
					no-error-icon
					:rules="[val => !!val || 'What company do you represent?']"
					class="col-6 form__input"
				/>

				<q-input
					outlined
					v-model="email"
					type="email"
					label="Email *"
					label-color="dark"
					lazy-rules
					no-error-icon
					:rules="[
						val => !!val || 'What is your email address?',
						val => val.includes('@') || 'Please enter a valid email address'
					]"
					class="col-6 form__input"
				/>

				<q-input
					outlined
					v-model="phoneNum"
					type="tel"
					label="Telephone number"
					label-color="dark"
					lazy-rules
					no-error-icon
					class="col-6 form__input"
				/>

				<q-input
					outlined	
					v-model="message"
					type="textarea"
					label="Your message *"
					label-color="dark"
					lazy-rules
					no-error-icon
					:rules="[val => !!val || 'Message cannot be empty']"
					class="col-12 form__textarea"
					rows="8"
					maxlength="5000"
				/>
				<div class="row col-12 justify-center">
					<q-btn 
						glossy
						unelevated
						color="black"
						label="Send" 
						type="submit"
						class="col-2"
					/>
				</div>
			</q-form>
		</keep-alive>
	</main>
</template>

<style scoped lang="scss">
main {
	background-color: white;
}

.form {
	max-width: 800px;
	margin: 0 auto;

	textarea {
		resize: none;
	}
}
</style>
