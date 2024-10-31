<template>
	<div id="container">
		<ctitle :title="`Карточка обследования пунктов ГГС`"></ctitle>

		<!-- Дата проведения работ -->
		<date_input_h
			:value_prop="execute_date"
			:style_prop="execute_date_style"
			:over_label_prop="execute_date_over_label"
			:under_label_prop="execute_date_under_label"
			:modal_component_prop="`execute_date`"
			@update_data_event="
				(new_value) => {
					execute_date = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					execute_date_style = new_value;
				}
			"
			@update_under_label_event="
				(new_value) => {
					execute_date_under_label = new_value;
				}
			"
		>
		</date_input_h>

		<!-- Субъект рф -->
		<select_input_h
			:value_prop="federal_subject"
			:style_prop="federal_subject_style"
			:over_label_prop="federal_subject_over_label"
			:under_label_prop="federal_subject_under_label"
			:options_prop="subjects"
			:modal_component_prop="`federal_subject`"
			@update_data_event="
				(new_value) => {
					federal_subject = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					federal_subject_style = new_value;
				}
			"
			@update_under_label_event="
				(new_value) => {
					federal_subject_under_label = new_value;
				}
			"
		>
		</select_input_h>

		<!-- Широта / Долгота -->
		<div id="latitude_longitude_wrapper">
			<text_input_h
				:value_prop="latitude"
				:style_prop="latitude_style"
				:over_label_prop="latitude_over_label"
				:under_label_prop="latitude_under_label"
				:modal_component_prop="`latitude`"
				@update_data_event="
					(new_value) => {
						latitude = new_value;
					}
				"
				@update_style_event="
					(new_value) => {
						latitude_style = new_value;
					}
				"
				@update_under_label_event="
					(new_value) => {
						latitude_under_label = new_value;
					}
				"
			>
			</text_input_h>
			<text_input_h
				:value_prop="longitude"
				:style_prop="longitude_style"
				:over_label_prop="longitude_over_label"
				:under_label_prop="longitude_under_label"
				:modal_component_prop="`longitude`"
				@update_data_event="
					(new_value) => {
						longitude = new_value;
					}
				"
				@update_style_event="
					(new_value) => {
						longitude_style = new_value;
					}
				"
				@update_under_label_event="
					(new_value) => {
						longitude_under_label = new_value;
					}
				"
			>
			</text_input_h>
		</div>

		<!-- Высота над уровнем моря -->
		<text_input_h
			:value_prop="sign_height_above_ground_level"
			:style_prop="sign_height_above_ground_level_style"
			:over_label_prop="sign_height_above_ground_level_over_label"
			:under_label_prop="sign_height_above_ground_level_under_label"
			:modal_component_prop="`sign_height_above_ground_level`"
			@update_data_event="
				(new_value) => {
					sign_height_above_ground_level = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					sign_height_above_ground_level_style = new_value;
				}
			"
			@update_under_label_event="
				(new_value) => {
					sign_height_above_ground_level_under_label = new_value;
				}
			"
		>
		</text_input_h>

		<!-- Высота знака -->
		<text_input_h
			:value_prop="sign_height"
			:style_prop="sign_height_style"
			:over_label_prop="sign_height_over_label"
			:under_label_prop="sign_height_under_label"
			:modal_component_prop="`sign_height`"
			:input_prop="{
				type: 'number',
			}"
			@update_data_event="
				(new_value) => {
					sign_height = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					sign_height_style = new_value;
				}
			"
			@update_under_label_event="
				(new_value) => {
					sign_height_under_label = new_value;
				}
			"
		>
		</text_input_h>

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

		<!-- Опознавательный столб -->
		<radio_input_h
			:value_prop="identification_pillar"
			:style_prop="identification_pillar_style"
			:over_label_prop="identification_pillar_over_label"
			:under_label_prop="identification_pillar_under_label"
			:modal_component_prop="`identification_pillar`"
			:radio_buttons_prop="{
				groupName: 'identification_pillar',
				data: {
					detected: 'Обнаружен',
					undetected: 'Не обнаружен',
				},
			}"
			@update_data_event="
				(new_value) => {
					identification_pillar = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					identification_pillar_style = new_value;
				}
			"
			@update_under_label_event="
				(new_value) => {
					identification_pillar_under_label = new_value;
				}
			"
		>
		</radio_input_h>

		<!-- Тип знака -->
		<radio_input_h
			:value_prop="type_of_sign"
			:style_prop="type_of_sign_style"
			:over_label_prop="type_of_sign_over_label"
			:under_label_prop="type_of_sign_under_label"
			:modal_component_prop="`type_of_sign`"
			:radio_buttons_prop="{
				groupName: 'type_of_sign',
				data: {
					signal: 'Сигнал',
					pyramid: 'Пирамида',
					tripod: 'Штатив',
					tur: 'Тур',
					no_sign: 'Отсутствует',
				},
			}"
			@update_data_event="
				(new_value) => {
					type_of_sign = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					type_of_sign_style = new_value;
				}
			"
			@update_under_label_event="
				(new_value) => {
					type_of_sign_under_label = new_value;
				}
			"
		>
		</radio_input_h>

		<div id="pyramid_value" v-if="type_of_sign === 'pyramid'">
			<!-- Доделать: учти, что данные в properties меняются в функции type_of_sign_update -->
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
import axios from "../utils/axios";
import create_title from "@/components/create_page/create_title.vue";
import create_page_input from "@/components/create_page/create_page_input.vue";
import create_page_file_input from "@/components/create_page/create_page_file_input.vue";
import create_page_radio_buttons from "@/components/create_page/create_page_radio_buttons.vue";
import general_button from "@/components/_general/general_button.vue";
import text_input_h from "@/components/UI/input/text_input_h.vue";
import date_input_h from "@/components/UI/input/date_input_h.vue";
import select_input_h from "@/components/UI/input/select_input_h.vue";
import radio_input_h from "@/components/UI/input/radio_input_h.vue";
import modal_profile_components from "@/components/modal_components/profile/propfile_modal_components";
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
			execute_date_style: "normal",
			execute_date_over_label: "Дата проведения работ",
			execute_date_under_label: "",

			federal_subject: "",
			federal_subject_style: "normal",
			federal_subject_over_label: "Субъект Российской Федерации",
			federal_subject_under_label: "",

			latitude: "",
			latitude_style: "normal",
			latitude_over_label: "Широта",
			latitude_under_label: "",

			longitude: "",
			longitude_style: "normal",
			longitude_over_label: "Долгота",
			longitude_under_label: "",

			sign_height_above_ground_level: "",
			sign_height_above_ground_level_style: "normal",
			sign_height_above_ground_level_over_label:
				"Высота над уровнем моря",
			sign_height_above_ground_level_under_label: "",

			sign_height: "",
			sign_height_style: "normal",
			sign_height_over_label: "Высота знака (в метрах)",
			sign_height_under_label: "",

			buffer1: null,
			buffer2: null,

			identification_pillar: "",
			identification_pillar_style: "normal",
			identification_pillar_over_label: "Опознавательный столб",
			identification_pillar_under_label: "",

			type_of_sign: "",
			type_of_sign_style: "normal",
			type_of_sign_over_label: "Тип знака",
			type_of_sign_under_label: "",

			properties: {}, // свойства для type_of_sign

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
		cpfinput: create_page_file_input,
		cprbuttons: create_page_radio_buttons,
		gbutton: general_button,

		text_input_h,
		date_input_h,
		select_input_h,
		radio_input_h,
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
				url: "api/v1/card/create/",
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
			switch (value) {
				case "pyramid": {
					this.properties = {
						material: "",
						material_style: "normal",
						material_over_label: "Материал пирамиды",
						material_under_label: "",
						geometry: "",
						geometry_style: "normal",
						geometry_over_label: "Геометрия пирамиды",
						geometry_under_label: "",
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
			this.type_of_sign = value;
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
