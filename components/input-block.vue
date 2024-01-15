<!-- InputBlock.vue -->

<template>
    <div :class="inputBlockClass">
        <label :for="id">{{ label }}</label>
        <input type="text" :id="id" :placeholder="placeholder" :disabled="isDisabled" v-model="state.value" @input="updateValue" />
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
const emit = defineEmits(['input']);

const state = reactive({
    value: '',
});

const props = defineProps([
    'label',
    'id',
    'placeholder',
    'isDisabled',
    'size',
    'isRounded'
]);

const inputBlockClass = computed(() => [
    'input-block',
    `input-block-${props.size}`,
    {
        'rounded': props.isRounded,
    },
]);

const updateValue = (event) => {
    const value = event.target.value;
    emit('input', value);
};

</script>

<style scoped lang="scss">
.input-block {
    margin-bottom: 1rem;

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }

    input {
        padding: 0.5rem;
        font-size: 1rem;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 0.375rem;
        outline: none;
        transition: border-color 0.3s ease;

        &.input-block-x-small {
            font-size: 0.8rem;
        }

        &.input-block-small {
            font-size: 0.9rem;
        }

        &.input-block-large {
            font-size: 1.5rem;
        }

        &.input-block-x-large {
            font-size: 1.5rem;
        }

        &.rounded {
            border-radius: 0.375rem;
        }

        &:disabled {
            opacity: 0.5;
        }

        &:focus {
            border-color: $light-blue;
        }
    }
}
</style>
