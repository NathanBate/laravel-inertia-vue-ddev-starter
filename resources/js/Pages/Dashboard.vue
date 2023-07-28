<template>
    <Layout>
        <Head title="Dashboard"/>
        test
    </Layout>
</template>
<script>
import Layout from "@/Layouts/LiDashboard.vue"
import { Head } from '@inertiajs/vue3';
export default {
    name: "Dashboard",
    components: {
        Layout, Head
    },
    created() {
        console.log(this.$inertia.page.url)
    }
}
</script>
