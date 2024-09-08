<template>
	<div id="container">
		<ctitle :title="`Карточка обследования пунктов ГГС`"></ctitle>
		<cpinput
			:inputAttributes="{
				type: `date`,
			}"
			:parentValue="execute_date"
			:overText="`Дата проведения работ`"
			:underText="`test`"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cpinput>
		<cpselect
			:placeholder="`test`"
			:overText="`Субъект Российской Федерации`"
			:underText="`test`"
			:parentValue="federal_subject"
		>
			<template #visibleButton>
				<img
					src="@/assets/images/create_page/question.svg"
				/> </template
		></cpselect>
		<cpinput
			:overText="`Широта`"
			:underText="`test`"
			:parentValue="latitude"
			:inputAttributes="{
				type: `number`,
				min: `-90`,
				max: `90`,
				step: '0.000001',
			}"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cpinput>
		<cpinput
			:overText="`Долгота`"
			:underText="`test`"
			:parentValue="longitude"
			:inputAttributes="{
				type: `number`,
				min: `-180`,
				max: `180`,
				step: '0.000001',
			}"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cpinput>
		<cpinput
			:overText="`Высота над уровнем моря (в метрах)`"
			:underText="`test`"
			:parentValue="sign_height_above_ground_level"
			:inputAttributes="{
				type: `number`,
				step: `0.001`,
			}"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cpinput>
		<cpinput
			:overText="`Высота знака (в метрах)`"
			:underText="test"
			:parentValue="sign_height"
			:inputAttributes="{
				type: `number`,
				min: `0`,
			}"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cpinput>
		<cpinput
			:overText="`Фотография внешнего обрамления`"
			:underText="`test`"
			:parentValue="buffer1"
			:inputAttributes="{
				type: `file`,
			}"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cpinput>
		<cpinput
			:overText="`Фотография марки центра`"
			:underText="`test`"
			:parentValue="buffer2"
			:inputAttributes="{
				type: `file`,
			}"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cpinput>
		<cprbuttons
			:overText="`Тип знака`"
			:underText="`test`"
			:parentValue="type_of_sign"
			:radioButtons="{
				groupName: `type_of_sign`,
				data: {
					signal: 'Сигнал',
					pyramid: 'Пирамида',
					tripod: 'Штатив',
					tur: 'Тур',
					no_sign: 'Отсутствует',
				},
			}"
			@updateInputDataEvent="(newValue) => (type_of_sign = newValue)"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cprbuttons>
	</div>
</template>

<script>
import create_title from "@/components/create_page/create_title.vue";
import create_page_input from "@/components/create_page/create_page_input.vue";
import create_page_select from "@/components/create_page/create_page_select.vue";
import create_page_radio_buttons from "@/components/create_page/create_page_radio_buttons.vue";
export default {
	data() {
		return {
			execute_date: "",
			federal_subject: "",
			latitude: "",
			longitude: "",
			sign_height_above_ground_level: "",
			sign_height: "",
			buffer1: null,
			buffer2: null,
			identification_pillar: "",
			type_of_sign: "",
		};
	},
	components: {
		ctitle: create_title,
		cpinput: create_page_input,
		cpselect: create_page_select,
		cprbuttons: create_page_radio_buttons,
	},
};
</script>

<style scoped>
@media (hover: none) {
	@media (max-width: 480px) {
		#container {
			margin-left: 10px;
			margin-right: 10px;
		}
	}
}
</style>
