<template>
    <Layout>
        <Head title="New Vendor"/>
        <template v-slot:pagetitle>Create Vendor</template>
        <FormLayout
            class="mb-8 max-w-2xl"
            :form-data="form"
            button-label="Save Vendor"
            :store-path=" vendor === false ? '/vendors/store' : '/vendor/' + vendor.id + '/update' "
        >
            <Row :columns="1">
                <template v-slot:cell>
                    <TextInput
                        class="flex flex-col w-full lg:w-2/3"
                        label="Vendor Name"
                        field-name="name"
                        v-model:model-value="form.name"
                        :error="form.errors.name"
                    />
                </template>
            </Row>
            <Row :columns="2">
                <template v-slot:leftcell>
                    <TextInput
                        class="flex flex-col w-full"
                        label="Phone Number"
                        field-name="phone"
                        v-model:model-value="form.phone"
                        :error="form.errors.phone"
                    />
                </template>
                <template v-slot:rightcell>
                    <TextInput
                        class="flex flex-col w-full"
                        label="Email"
                        field-name="email"
                        v-model:model-value="form.email"
                        :error="form.errors.email"
                    />
                </template>
            </Row>
        </FormLayout>
    </Layout>
</template>
<script>
import Layout from "@/Layouts/LiDashboard.vue"
import { Head } from '@inertiajs/vue3';
import { FormLayout, Row, Text as TextInput } from "@nathanbate/admin-dashboard-vue/src/components/FormHelper/Components/FormHelper.js"

export default {
    name: "CreateEditVendor",
    components: {
        Layout, Head,
        FormLayout, Row, TextInput
    },
    props: {
        vendor: {
            default: false
        }
    },
    data() {
        return {
                form : this.$inertia.form({
                    name: null,
                    email: null,
                    phone: null
                })
        }
    },
    created() {
        if (this.vendor != false) {
            this.form.name = this.vendor.name
            this.form.email = this.vendor.email
            this.form.phone = this.vendor.phone
        }
    }

}
</script>
