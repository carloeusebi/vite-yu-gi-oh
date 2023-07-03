import { reactive } from 'vue';

export const store = reactive({
    isLoading: false,
    pokemons: {
        list: [],
        pages: {
            prev: null,
            next: null,
            current: 0
        }
    },
});
