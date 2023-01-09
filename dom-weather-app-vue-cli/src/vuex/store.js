import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            cityId: null,
            inputValue: '',
            isLoading: false,
            weatherInformationVisible: false,
            weatherIconPath: '',
            forecastDate: null,
            forecastTime: null,
            temperatureInCelsius: null,
            weatherInformation: {},
        }
    },
    getters: {
        getWeatherInformation(state) {
            return state.weatherInformation;
        },
        isWeatherInformationVisible(state) {
            return state.weatherInformationVisible;
        },
        isLoading(state) {
            return state.isLoading;
        }
    },
    mutations: {
        setWeatherInformationVisible(state, newValue) {
            state.weatherInformationVisible = newValue;
        },
        async updateWeatherInformation(state, newValue) {
            state.weatherInformation = await newValue;
        },
        setIsLoading(state, newValue) {
            state.isLoading = newValue;
        }
    }
})