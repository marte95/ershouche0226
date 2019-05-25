<template>
    <div>
        <Row>
            <Col span="5">
                <h1>我是左侧边栏</h1>
            </Col>
            <Col span="19">
                <!-- 三级路由的内容 -->
                <router-view></router-view>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>