require('dotenv').config();

import { createApp } from 'vue';
import { createI18n } from "vue-i18n";
import zh from "./locale/zh-CN.json";
import en from "./locale/en-US.json";
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';
import cors from 'cors';
import axios from "axios";
import VueAxios from "vue-axios";

const feather = require('feather-icons');
feather.replace();

const i18n = createI18n({
	legacy: false,
	locale: localStorage.getItem("locale") ?? "zh-CN",
	fallbackLocale: "zh-CN",
	messages: {
		"zh-CN": zh,
		"en-US": en,
	}
});

const app = createApp(App)
	.use(router)
	.use(i18n)
	.use(cors)
	.use(store)
	.use(VueAxios, axios)
	.use(BackToTop)

app.provide('axios', app.config.globalProperties.axios);
app.mount('#app');




const appTheme = localStorage.getItem('theme');

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
	appTheme === 'dark' &&
	document.querySelector('body').classList.contains('app-theme')
) {
	document.querySelector('body').classList.add('bg-primary-dark');
} else {
	document.querySelector('body').classList.add('bg-secondary-light');
}
