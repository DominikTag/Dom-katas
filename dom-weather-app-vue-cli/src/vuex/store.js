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
    mutations: {
        setWeatherInformationVisible(state, newValue) {
            state.weatherInformationVisible = newValue;
        },
        updateWeatherInformation(state, newValue) {
            state.weatherInformation = newValue;
        },
        setIsLoading(state, newValue) {
            state.isLoading = newValue;
        }
    }
})