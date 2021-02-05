<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Create</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        onSubmit() {
            if ( this.title.trim() ) {
                const newItem = {
                    id: Date.now(),
                    title: this.title
                }

                this.$emit('add-item', newItem);
                this.title = '';
            }
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        justify-content: center;
        margin: 1rem;
    }
    input {
        width: 400px;
    }
</style>