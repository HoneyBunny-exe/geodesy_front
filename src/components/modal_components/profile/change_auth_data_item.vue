<template>
	<Transition>
		<div id="container" v-if="isFirstStep">
			<p id="personal_data_item_header">{{ `Изменение данных` }}</p>
			<ginput
				:placeholder="createPlaceholder()"
				class="auth_input"
				:parentValue="text"
				@updateInputDataEvent="textUpdate"
			></ginput>
			<gbutton
				:text="`Отправить`"
				@click="next"
				class="auth_button"
			></gbutton>
		</div>
		<div id="container" v-else>
			<p id="personal_data_item_header">{{ `Изменение данных` }}</p>
			<gainput
				@updateInputDataEvent="
					(newvalue) => {
						emailCode = newvalue;
					}
				"
				:parentValue="emailCode"
			>
			</gainput>
			<gbutton
				:text="`Отправить`"
				@click="send"
				class="auth_button"
			></gbutton>
		</div>
	</Transition>
</template>

<script>
import general_input from "@/components/_general/general_input.vue";
import general_button from "@/components/_general/general_button.vue";
import general_apply_input from "@/components/_general/general_apply_input.vue";
export default {
	components: {
		ginput: general_input,
		gbutton: general_button,
		gainput: general_apply_input,
	},
	data() {
		return {
			isFirstStep: true,
			emailCode: "",
			text: "",
		};
	},
	props: {
		dataItem: {
			type: String,
			required: true,
		},
	},
	methods: {
		createPlaceholder() {
			if (this.dataItem === "email") {
				return "Введите новую почту";
			}
			return "Введите новый пароль";
		},
		send() {
			console.log(`change_auth_data_item: send was called`);
			console.log(this.validate());
			this.$emit("sendDataEvent", {
				data_item: this.dataItem,
				data: this.emailCode,
			});
		},
		next() {
			this.isFirstStep = false;
			console.log(`change_auth_data_item: ${this.dataItem} step 1`);
			console.log();
			this.$emit("sendDataEvent", this.validate());
		},
		validate() {
			let obj =
				this.dataItem === "email"
					? { data_item: "email_step1" }
					: { data_item: "password_step1" };
			obj.data = this.text;
			console.log(obj);
			return obj;
		},
		textUpdate(value) {
			console.log("textUpdate: update...");
			this.text = value;
		},
	},
};
</script>

<style></style>
