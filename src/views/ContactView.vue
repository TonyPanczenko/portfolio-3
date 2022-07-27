<script setup>
import { ref } from 'vue';
import { throttle, useQuasar } from 'quasar';

import { dbClient } from '@/firebase';

const $q = useQuasar();

const name = ref(null);
const company = ref(null);
const email = ref(null);
const phoneNum = ref(null);
const message = ref(null);

const onSubmit = throttle(async () => {
  try {
    await dbClient.addMessage({
      name: name.value,
      company: company.value,
      email: email.value,
      phoneNum: phoneNum.value,
      message: message.value
    });

    $q.notify({
      message: 'Message sent',
      color: 'secondary',
      textColor: 'white',
      timeout: 2000
    });
  } catch (e) {
    $q.notify({
      message: 'Message could not be sent',
      color: 'warning',
      textColor: 'black',
      timeout: 2000
    });
  }
}, 5000);

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
					class="col-6"
					maxlength="1000"
				/>

				<q-input
					outlined
					v-model="company"
					label="Company *"
					label-color="dark"
					lazy-rules
					no-error-icon
					:rules="[val => !!val || 'What company do you represent?']"
					class="col-6"
					maxlength="100"
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
					class="col-6"
					maxlength="50"
				/>

				<q-input
					outlined
					v-model="phoneNum"
					type="tel"
					label="Telephone number"
					label-color="dark"
					lazy-rules
					no-error-icon
					class="col-6"
					maxlength="20"
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
					class="col-12"
					input-class="form__textarea"
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

	&__textarea {
		resize: none;
	}
}
</style>
