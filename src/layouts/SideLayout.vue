<template>
    <div>
        <Layout>
            <Breadcrumb :style="{margin: '16px'}">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Components</BreadcrumbItem>
                <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                <Layout>
                    <Sider hide-trigger :style="{background: '#fff'}">
                        <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
                        </Menu>
                    </Sider>
                    <Content :style="{padding:'24px', minHeight: '280px', background: '#fff'}">
                        <!-- 三级路由的内容 -->
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Content>
        </Layout>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>