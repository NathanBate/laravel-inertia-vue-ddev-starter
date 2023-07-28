<template>
    <a class="bg-[#e12d39] px-6 py-2 text-white font-semibold" :href="link">
        <slot/>
    </a>
</template>

<script>

export default {
    name: "ButtonLink",
    props: {
        link: String
    }
}
</script>
