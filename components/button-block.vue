<!-- ButtonBlock.vue -->

<template>
    <button :class="buttonClass" @click="handleClick" :disabled="isDisabled">
        {{ name }}
    </button>
</template>
  
<script setup>
const { size, name, isDisabled, isRounded } = defineProps(['size', 'name', 'isDisabled', 'isRounded']);

const buttonClass = computed(() => {
    return [
        'button',
        `button-${size}`,
        {
            'rounded': isRounded,
        },
    ];
});

const handleClick = () => {
    if (!isDisabled) {
        console.log('Button clicked!');
    }
};
</script>
  
<style scoped lang="scss">
.button,
.button-medium {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    outline: none;
    transition: background-color 0.3s ease;

    &.button-x-small {
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
    }

    &.button-small {
        font-size: 0.9rem;
        padding: 0.3rem 0.7rem;

    }

    &.button-large {
        font-size: 1.2rem;
        padding: 0.7rem 1.5rem;
    }

    &.button-x-large {
        font-size: 1.5rem;
        padding: 1rem 2rem;
    }

    &.rounded {
        border-radius: 0.375rem;
    }

    &:hover {
        background-color: $light-green;
    }

    &:disabled {
        opacity: 0.5;

        &:hover {
            background-color: $dark-red;
        }
    }

}
</style>
  