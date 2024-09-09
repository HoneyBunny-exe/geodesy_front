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
			:overText="`Субъект Российской Федерации`"
			:underText="`test`"
			:parentValue="federal_subject"
			:options="subjects"
			:selectName="`federal_subjects`"
		>
			<template #visibleButton>
				<img
					src="@/assets/images/create_page/question.svg"
				/> </template
		></cpselect>

		<div id="latitude_longitude_wrapper">
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
				@updateInputDataEvent="
					(newValue) => {
						console.log(`newValue: ${newValue}`);
						latitude = newValue;
					}
				"
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
				@updateInputDataEvent="
					(newValue) => {
						console.log(`newValue: ${newValue}`);
						longitude = newValue;
					}
				"
			>
				<template #visibleButton>
					<img src="@/assets/images/create_page/question.svg" />
				</template>
			</cpinput>
		</div>

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
			:class="`type-of-sign-unique`"
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
		<div id="pyramid_value" v-if="type_of_sign === 'pyramid'">
			<cprbuttons
				:overText="`Материал пирамиды`"
				:underText="`test`"
				:parentValue="properties"
				:radio-buttons="{
					groupName: 'pyramid_value_material',
					data: {
						metalic: 'Металлический',
						wood: 'Деревянный',
					},
				}"
			>
				<template #visibleButton>
					<img src="@/assets/images/create_page/question.svg" />
				</template>
			</cprbuttons>
			<cprbuttons
				:overText="`Геометрия пирамиды`"
				:underText="`test`"
				:parentValue="properties"
				:radio-buttons="{
					groupName: 'pyramid_value_geometry',
					data: {
						tetrahedron: 'Тетраэдр',
						trihedron: 'Трехгранник',
					},
				}"
			>
				<template #visibleButton>
					<img src="@/assets/images/create_page/question.svg" />
				</template>
			</cprbuttons>
		</div>

		<div id="signal_value" v-if="type_of_sign === 'signal'">
			<cprbuttons
				:overText="`Тип сигнала`"
				:underText="`test`"
				:parentValue="properties"
				:radio-buttons="{
					groupName: 'signal_value_type',
					data: {
						simple: 'Простой',
						complex: 'Сложный',
					},
				}"
			>
				<template #visibleButton>
					<img src="@/assets/images/create_page/question.svg" />
				</template>
			</cprbuttons>
		</div>

		<div id="tripod_value" v-if="type_of_sign === 'tripod'">
			<cprbuttons
				:overText="`Материал штатива`"
				:underText="`test`"
				:parentValue="properties"
				:radioButtons="{
					groupName: 'tripod_value_material',
					data: {
						metalic: 'Металлический',
						wood: 'Деревянный',
					},
				}"
			>
				<template #visibleButton>
					<img src="@/assets/images/create_page/question.svg" />
				</template>
			</cprbuttons>
			<cprbuttons
				:overText="`Геометрия штатива`"
				:underText="`test`"
				:parentValue="properties"
				:radioButtons="{
					groupName: 'tripod_value_geometry',
					data: {
						tetrahedron: 'Тетраэдр',
						trihedron: 'Трехгранник',
					},
				}"
			>
				<template #visibleButton>
					<img src="@/assets/images/create_page/question.svg" />
				</template>
			</cprbuttons>
		</div>

		<div id="tur_value" v-if="type_of_sign === 'tur'">
			<cprbuttons
				:overText="`Материал тура`"
				:underText="`test`"
				:parentValue="properties"
				:radioButtons="{
					groupName: 'tur_value_material',
					data: {
						concrete: 'Бетонный',
						stone: 'Каменный',
						brick: 'Кирпичный',
					},
				}"
			>
				<template #visibleButton>
					<img src="@/assets/images/create_page/question.svg" />
				</template>
			</cprbuttons>
		</div>

		<cprbuttons
			:overText="`Монолит Ⅰ`"
			:underText="`test`"
			:parent-value="monolith_one"
			:radioButtons="{
				groupName: 'monolith_one',
				data: {
					saved: 'Сохранился',
					unsaved: 'Не сохранился',
				},
			}"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cprbuttons>

		<cprbuttons
			:overText="`Монолит Ⅱ`"
			:underText="`test`"
			:parentValue="monolith_two"
			:radioButtons="{
				gadioButtons: 'monolith_two',
				data: {
					covered: 'Не вскрывался',
					uncovered: 'Вскрывался',
				},
			}"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cprbuttons>

		<cprbuttons
			:overText="`Монолит Ⅲ и Ⅳ`"
			:underText="`test`"
			:parentValue="monolith_three_and_four"
			:radioButtons="{
				groupName: 'monolith_three_and_four',
				data: {
					covered: 'Не вскрывался',
					uncovered: 'Вскрывался',
				},
			}"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cprbuttons>

		<cprbuttons
			:overText="`Внешний сигнал`"
			:underText="`test`"
			:parentValue="outdoor_sign"
			:radioButtons="{
				groupName: 'outdoor_sign',
				data: {
					saved: 'Сохранился',
					unsaved: 'Не сохранился',
				},
			}"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cprbuttons>

		<cprbuttons
			:overText="`ОРП 1`"
			:underText="`test`"
			:parentValue="ORP_one"
			:radioButtons="{
				groupName: `ORP_one`,
				data: {
					saved: 'Сохранился',
					unsaved: 'Не сохранился',
				},
			}"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cprbuttons>

		<cprbuttons
			:overText="`ОРП 2`"
			:underText="`test`"
			:parentValue="ORP_two"
			:radioButtons="{
				groupName: `ORP_two`,
				data: {
					saved: 'Сохранился',
					unsaved: 'Не сохранился',
				},
			}"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cprbuttons>

		<cprbuttons
			:overText="`Окопка`"
			:underText="`test`"
			:parentValue="trench"
			:radioButtons="{
				groupName: 'trench',
				data: {
					readable: 'Читается',
					unreadable: 'Не читается',
				},
			}"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cprbuttons>

		<cprbuttons
			:overText="`Спутниковое наблюдение`"
			:underText="`test`"
			:parentValue="satellite_surveillance"
			:radioButtons="{
				groupName: 'satellite_surveillance',
				data: {
					possible: 'Возможно',
					conditionally_possible: 'Условно возможно',
					impossible: 'Невозможно',
				},
			}"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cprbuttons>
		<gbutton :text="`Отправить`" class="send_button"></gbutton>
	</div>
</template>

<script>
import axios from "axios";
import create_title from "@/components/create_page/create_title.vue";
import create_page_input from "@/components/create_page/create_page_input.vue";
import create_page_select from "@/components/create_page/create_page_select.vue";
import create_page_radio_buttons from "@/components/create_page/create_page_radio_buttons.vue";
import general_button from "@/components/_general/general_button.vue";
export default {
	data() {
		return {
			subjects: [
				"Белгородская область",
				"Брянская область",
				"Владимирская область",
				"Воронежская область",
				"Ивановская область",
				"Калужская область",
				"Костромская область",
				"Курская область",
				"Липецкая область",
				"Московская область",
				"Орловская область",
				"Рязанская область",
				"Смоленская область",
				"Тамбовская область",
				"Тверская область",
				"Тульская область",
				"Ярославская область",
				"г. Москва",
				"Республика Карелия",
				"Республика Коми",
				"Архангельская область",
				"Ненецкий автономный округ",
				"Вологодская область",
				"Калининградская область",
				"Ленинградская область",
				"Мурманская область",
				"Новгородская область",
				"Псковская область",
				"г. Санкт-Петербург",
				"Республика Адыгея",
				"Республика Калмыкия",
				"Краснодарский край",
				"Астраханская область",
				"Волгоградская область",
				"Ростовская область",
				"Республика Дагестан",
				"Республика Ингушетия",
				"Кабардино-Балкарская Республика",
				"Карачаево-Черкесская Республика",
				"Республика Северная Осетия-Алания",
				"Чеченская Республика",
				"Ставропольский край",
				"Республика Башкортостан",
				"Республика Марий Эл",
				"Республика Мордовия",
				"Республика Татарстан",
				"Удмуртская Республика",
				"Чувашская Республика",
				"Пермский край",
				"Кировская область",
				"Нижегородская область",
				"Оренбургская область",
				"Пензенская область",
				"Самарская область",
				"Саратовская область",
				"Ульяновская область",
				"Курганская область",
				"Свердловская область",
				"Тюменская область",
				"Ханты-Мансийский автономный округ",
				"Ямало-Ненецкий автономный округ",
				"Челябинская область",
				"Республика Алтай",
				"Республика Бурятия",
				"Республика Тыва",
				"Республика Хакасия",
				"Алтайский край",
				"Забайкальский край",
				"Красноярский край",
				"Иркутская область",
				"Кемеровская область",
				"Новосибирская область",
				"Омская область",
				"Томская область",
				"Республика Саха (Якутия)",
				"Камчатский край",
				"Приморский край",
				"Хабаровский край",
				"Амурская область",
				"Магаданская область",
				"Сахалинская область",
				"Еврейская автономная область",
				"Чукотский автономный округ",
				"г. Севастополь",
				"Республика Крым",
				"Иные территории, включая город и космодром Байконур",
			],
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
			properties: "", // свойства для type_of_sign
			monolith_one: "",
			monolith_two: "",
			monolith_three_and_four: "",
			outdoor_sign: "",
			ORP_one: "",
			ORP_two: "",
			trench: "",
			satellite_surveillance: "",
		};
	},
	components: {
		ctitle: create_title,
		cpinput: create_page_input,
		cpselect: create_page_select,
		cprbuttons: create_page_radio_buttons,
		gbutton: general_button,
	},
	methods: {
		async send() {
			await axios({
				method: "post",
				url: "http://127.0.0.1:8001/api/v1/card/create/",
				headers: {
					Authorization: this.$store.getters.getAccessToken,
				},
				data: {}, // указать данные
			});
		},
	},
};
</script>

<style scoped>
@media (hover: none) {
	@media (max-width: 480px) {
		#container {
			margin-left: 10px;
			margin-right: 10px;

			> #latitude_longitude_wrapper {
				display: flex;
			}

			> .send_button {
				height: 36px;
				border: none;
				border-radius: 10px;
				margin-top: 5px;
				margin-bottom: 5px;
			}
			> .send_button:focus {
				outline: var(--light_green) solid 2px;
			}
		}
	}
}
</style>
