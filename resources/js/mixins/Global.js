export default {
    methods: {
        async $delay(x = 1000) {
            const delayPromise = ms =>
                new Promise(resolve => setTimeout(resolve, ms));
            await delayPromise(x);
        }
    }
};
