export default {
    methods: {
        async $delay(x = 1000) {
            const delayPromise = ms =>
                new Promise(resolve => setTimeout(resolve, ms));
            await delayPromise(x);
        },

        $debounce(fn, delay) {
            var timeoutID = null;
            return function() {
                clearTimeout(timeoutID);
                var args = arguments;
                var that = this;
                timeoutID = setTimeout(function() {
                    fn.apply(that, args);
                }, delay);
            };
        }
    }
};
