<template>
    <div>
        <div class="absolute w-full top-0 flex justify-center z-50">
            <FlashMessages/>
        </div>
        <Dashboard>
            <template v-slot:brandicon><ApplicationLogo class="fill-white"/></template>
            <template v-slot:brandname>Starter</template>
            <template v-slot:menuitems>
                <MenuItem item-link="/dashboard" :link-active="'/dashboard'=== $inertia.page.url">
                    <template v-slot:icon><DashboardIcon class="fill-white"/></template>
                    <template v-slot:label>Dashboard</template>
                </MenuItem>
            </template>
            <template v-slot:content>
                <div class="flex flex-col p-8">
                    <div class="mb-8 font-bold text-3xl">
                        <slot name="pagetitle">Page Title</slot>
                    </div>
                    <div>
                        <slot />
                    </div>
                </div>
            </template>
        </Dashboard>
    </div>
</template>

<script>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import FlashMessages from "@nathanbate/admin-dashboard-vue/src/components/Inertia/FlashMessages.vue"
import Dashboard from "@nathanbate/admin-dashboard-vue/src/components/Dashboard.vue"
import MenuItem from "@nathanbate/admin-dashboard-vue/src/components/MenuItem.vue"

import DashboardIcon from "@nathanbate/admin-dashboard-vue/src/components/icons/IconDashboard.vue"
import VendorIcon from "@/Icons/Vendor.vue"

import "@nathanbate/admin-dashboard-vue/dist/assets/index.css"

export default {
    name: "LiDashboard",
    components: { ApplicationLogo, Dashboard, Link, MenuItem, FlashMessages,
        DashboardIcon, VendorIcon },
}
</script>
