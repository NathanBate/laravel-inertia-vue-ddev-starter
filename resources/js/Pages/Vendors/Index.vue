<template>
    <Layout>
        <Head title="Vendors"/>
        <template v-slot:pagetitle>Vendors</template>
        <div class="flex flex-col gap-4 max-w-2xl">
            <List :list-config="vendorListConfig" :list-data="vendorList"/>
        </div>


    </Layout>
</template>
<script>
import Layout from "@/Layouts/LiDashboard.vue"
import { Head } from '@inertiajs/vue3';
import LinkButton from '@/Components/LinkButton.vue';
import List from "@nathanbate/vue-list/"

export default {
    name: "Vendors",
    components: {
        Layout, Head, LinkButton, List
    },
    props: {
        vendorList: Array,
    },
    data() {
        return {
            vendorListConfig: {
                showList: true,
                showHeading: true,
                itemsPerPage: 5,
                rowLinkable: true,
                inertiaLinks: true,
                rowLinkTarget: "_blank",
                actionButton: {
                    label: 'New Vendor',
                    link: '/vendor/create'
                },
                columns: [
                    {
                        label: "Vendor Name",
                        key: "name",
                        search: true,
                    },
                ]
            }
        }
    },
}
</script>
