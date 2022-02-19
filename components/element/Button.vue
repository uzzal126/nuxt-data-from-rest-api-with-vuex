<template>
    <button class="bg-flesh px-5 py-4 font-medium rounded-lg hover:text-white transition-all">
        {{ label }}
    </button>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: 'View more'
            },
            icon: {
               type: Boolean 
            }
        },
    };
</script>