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
			@updateInputDataEvent="execute_date_update"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cpinput>
		<cpselect
			:overText="`Субъект Российской Федерации`"
			:underText="`test`"
			:options="subjects"
			:selectName="`federal_subjects`"
			@updateInputDataEvent="federal_subject_update"
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
				@updateInputDataEvent="latitude_update"
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
				@updateInputDataEvent="longitude_update"
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
			@updateInputDataEvent="sign_height_above_ground_level_update"
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
				step: `0.01`,
			}"
			@updateInputDataEvent="sign_height_update"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cpinput>
		<cpfinput
			:overText="`Фотография внешнего обрамления`"
			:underText="`test`"
			:parentValue="buffer1"
			@updateInputDataEvent="buffer1_update"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cpfinput>
		<cpfinput
			:overText="`Фотография марки центра`"
			:underText="`test`"
			:parentValue="buffer2"
			@updateInputDataEvent="buffer2_update"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cpfinput>

		<cprbuttons
			:overText="`Опознавательный столб`"
			:underText="`test`"
			:parentValue="identification_pillar"
			:radioButtons="{
				groupName: 'identification_pillar',
				data: {
					detected: 'Обнаружен',
					undetected: 'Не обнаружен',
				},
			}"
			@updateInputDataEvent="
				(newValue) => {
					identification_pillar = newValue;
				}
			"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cprbuttons>

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
			@updateInputDataEvent="type_of_sign_update"
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
				@updateInputDataEvent="
					(newValue) => {
						properties.material = newValue;
					}
				"
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
				@updateInputDataEvent="
					(newValue) => {
						properties.geometry = newValue;
					}
				"
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
				@updateInputDataEvent="
					(newValue) => {
						properties.type = newValue;
					}
				"
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
				@updateInputDataEvent="
					(newValue) => {
						properties.material = newValue;
					}
				"
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
				@updateInputDataEvent="
					(newValue) => {
						properties.geometry = newValue;
					}
				"
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
				@updateInputDataEvent="
					(newValue) => {
						properties.pillar = newValue;
					}
				"
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
			@updateInputDataEvent="
				(newValue) => {
					monolith_one = newValue;
				}
			"
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
			@updateInputDataEvent="
				(newValue) => {
					monolith_two = newValue;
				}
			"
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
			@updateInputDataEvent="
				(newValue) => {
					monolith_three_and_four = newValue;
				}
			"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cprbuttons>

		<cprbuttons
			:overText="`Наружный знак`"
			:underText="`test`"
			:parentValue="outdoor_sign"
			:radioButtons="{
				groupName: 'outdoor_sign',
				data: {
					saved: 'Сохранился',
					unsaved: 'Не сохранился',
				},
			}"
			@updateInputDataEvent="
				(newValue) => {
					outdoor_sign = newValue;
				}
			"
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
			@updateInputDataEvent="
				(newValue) => {
					ORP_one = newValue;
				}
			"
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
			@updateInputDataEvent="
				(newValue) => {
					ORP_two = newValue;
				}
			"
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
			@updateInputDataEvent="
				(newValue) => {
					trench = newValue;
				}
			"
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
			@updateInputDataEvent="
				(newValue) => {
					satellite_surveillance = newValue;
				}
			"
		>
			<template #visibleButton>
				<img src="@/assets/images/create_page/question.svg" />
			</template>
		</cprbuttons>
		<gbutton
			:text="`Отправить`"
			class="send_button"
			@click="send"
		></gbutton>
	</div>
</template>

<script>
import axios from "axios";
import create_title from "@/components/create_page/create_title.vue";
import create_page_input from "@/components/create_page/create_page_input.vue";
import create_page_select from "@/components/create_page/create_page_select.vue";
import create_page_file_input from "@/components/create_page/create_page_file_input.vue";
import create_page_radio_buttons from "@/components/create_page/create_page_radio_buttons.vue";
import general_button from "@/components/_general/general_button.vue";
export default {
	inject: ["pushToPopup"],
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
		cpfinput: create_page_file_input,
		cprbuttons: create_page_radio_buttons,
		gbutton: general_button,
	},
	methods: {
		async send() {
			let data = {
				execute_date: this.execute_date,
				federal_subject: this.federal_subject,
				latitude: this.latitude,
				longitude: this.longitude,
				sign_height_above_ground_level:
					this.sign_height_above_ground_level,
				sign_height: this.sign_height,
				photos: [this.buffer1, this.buffer2],
				identification_pillar: {
					value: this.identification_pillar,
				},
				type_of_sign: {
					value: this.type_of_sign,
					properties: this.properties, // !!! - проверить, как работает при no_sign
				},
				monolith_one: {
					value: this.monolith_one,
				},
				monolith_two: {
					value: this.monolith_two,
				},
				monolith_three_and_four: {
					value: this.monolith_three_and_four,
				},
				outdoor_sign: {
					value: this.outdoor_sign,
				},
				ORP_one: {
					value: this.ORP_one,
				},
				ORP_two: {
					value: this.ORP_two,
				},
				trench: {
					value: this.trench,
				},
				satellite_surveillance: {
					value: this.satellite_surveillance,
				},
			};
			let form = new FormData();
			Object.entries(data).forEach(([key, value]) => {
				if (Array.isArray(value)) {
					for (let i = 0; i < value.length; i++) {
						form.append(key, value[i], `${i}.png`);
					}
				} else if (typeof value === "object" && value !== null) {
					form.append(key, JSON.stringify(value));
				} else {
					form.append(key, value);
				}
			});

			await axios({
				method: "post",
				url: "http://127.0.0.1:8001/api/v1/card/create/",
				headers: {
					Authorization: this.$store.getters.getAccessToken,
					"Content-Type": "multipart/form-data",
				},
				data: form,
			})
				.then((response) => {
					console.log(response);
					this.pushToPopup("create_card");
				})
				.catch((error) => {
					console.log(error);
				});
		},
		execute_date_update(value) {
			this.execute_date = value;
		},
		federal_subject_update(value) {
			this.federal_subject = value;
			console.log("federal_subject_update was called");
			console.log(this.federal_subject);
		},
		latitude_update(value) {
			this.latitude = +value;
		},
		longitude_update(value) {
			this.longitude = +value;
		},
		sign_height_above_ground_level_update(value) {
			this.sign_height_above_ground_level = +value;
		},
		sign_height_update(value) {
			this.sign_height = +value;
		},
		type_of_sign_update(value) {
			this.type_of_sign = value;
			switch (value) {
				case "pyramid": {
					this.properties = {
						material: "",
						geometry: "",
					};
					break;
				}
				case "signal": {
					this.properties = {
						type: "",
					};
					break;
				}
				case "tripod": {
					this.properties = {
						material: "",
						geometry: "",
					};
					break;
				}
				case "tur": {
					this.properties = {
						pillar: "",
					};
					break;
				}
				case "no_sign":
					this.properties = {};
			}
		},

		buffer1_update(value) {
			// let reader = new FileReader();
			// reader.readAsArrayBuffer(value);

			// reader.onload = () => {
			// 	this.buffer1 = new Uint8Array(reader.result);
			// 	// console.log(reader.result);
			// };
			// reader.onerror = () => {
			// 	throw new Error("reader.onerror was called in buffer1Update");
			// };
			this.buffer1 = value;
		},
		buffer2_update(value) {
			// let reader = new FileReader();
			// reader.readAsText(value);

			// reader.onload = () => {
			// 	this.buffer2 = reader.result;
			// };
			// reader.onerror = () => {
			// 	throw new Error("reader.onerror was called in buffer2Update");
			// };
			this.buffer2 = value;
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
