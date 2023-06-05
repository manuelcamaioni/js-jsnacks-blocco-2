const { createApp } = Vue;

createApp({
    data() {
        return {
            names: ["Alberto", "Gino", "Roberta", "Fernanda"],
            message: "ciao",
        };
    },
}).mount("#app");
