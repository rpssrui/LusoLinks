<template>
    <div>
        <div class="input-label" :for="props.name">
            {{ props.name }}
            <small v-if="!props.required">(Opcional)</small>
        </div>
        <select v-model="state.value" :required="props.required" :class="selectClass" @change="updateValue">
            <option v-for="item in props.items" :key="item.value" :value="item.value">
                {{ item.label }}
            </option>
        </select>
    </div>
</template>
  
<script setup>
import { reactive, computed } from 'vue';
const emit = defineEmits(['input']);

const state = reactive({
    value: null,
});

const props = defineProps([
    'required',
    'size',
    'name',
    'items',
    'isRounded'
]);

const updateValue = (event) => {
    const selectedValue = event.target.value;
    emit('input', selectedValue);
};
const selectClass = computed(() => [
    'select',
    `select-${props.size}`,
    {
        'rounded': props.isRounded,
    },
]);

</script>
  
<style scoped lang="scss">
.input-label {
    font-size: 1.5rem;
}

.select,
.select-medium {
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    width: 50%;
    border: 1px solid $dark-green;
    background-color: rgba($light-green, 0.4);
    color: #333;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &.select-x-small {
        font-size: 0.8rem;
    }

    &.select-small {
        font-size: 0.9rem;
    }

    &.select-large {
        font-size: 1.5rem;
    }

    &.select-x-large {
        font-size: 1.5rem;
    }

    &.rounded {
        border-radius: 0.375rem;
    }

    &:disabled {
        opacity: 0.5;
    }
}
</style>