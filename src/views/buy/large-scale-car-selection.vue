<template>
    <div>
        <h1>大表选车</h1>
        <Button v-for="i in 100" :key="i" @click="showLayer(1000001 + i)">看这辆车的图片</Button>
    </div>
</template>

<script>
    export default {
        methods: {
            showLayer(id){
                // 触发ShowCarpicLayer事件，显示弹出层
                this.$bus.emit('ShowCarpicLayer', {id: id})
            }
        }
    }
</script>

<style scoped>

</style>