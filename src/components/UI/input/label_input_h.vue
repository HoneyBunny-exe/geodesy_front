<!-- complete -->
<script>
// @ts-check
import label_input from "./label_input.vue";
import modal_create_components from "@/components/modal_components/create/modal_create_components";
/**
 * @mixin
 * @mixes label_input
 */
export default {
	mixins: [label_input],
	data() {
		return {
			is_shown: false,
			modal_component: modal_create_components[this.modal_component_prop],
		};
	},

	props: {
		modal_component_prop: {
			type: String,
			required: true,
		},
		// Если нужно передать параметры для input-ов (нужно сделать)
		// В формате перечисления необходимых полей
		input_prop: {
			type: Object,
			required: false,
			default: "text",
		},
	},
	methods: {
		open_modal() {
			this.is_shown = true;
		},
		send_data_event_handler(data) {
			console.log("send_data_event_handler was called");
			this.is_shown = false;
		},
	},
};
</script>
