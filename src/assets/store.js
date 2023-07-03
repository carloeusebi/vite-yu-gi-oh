import { reactive } from 'vue';

export const store = reactive({
    pokemons: {
        list: [],
        pages: {
            prev: null,
            next: null,
            current: 0
        }
    }
});
