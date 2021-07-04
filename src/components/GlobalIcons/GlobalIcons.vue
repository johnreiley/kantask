<template>
    <i :class="icon" :style="{color: color, fontSize: size}"></i>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: 'inherit'
        },
        size: {
            type: String,
            default: 'initial'
        }
    }
}
</script>