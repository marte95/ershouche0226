<template>
    <div>
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo">
                    <a href="/index"><img src="http://aiqianduan.com/assets/images/logo.png"></a>
                </div>
                <div class="layout-nav">
                    <MenuItem name="index">
                        <Icon type="ios-navigate"></Icon>
                        首页
                    </MenuItem>
                    <MenuItem name="buy">
                        <Icon type="ios-keypad"></Icon>
                        买车
                    </MenuItem>
                    <MenuItem name="sale">
                        <Icon type="ios-analytics"></Icon>
                        卖车
                    </MenuItem>
                    <MenuItem name="transfer">
                        <Icon type="ios-paper"></Icon>
                        过户
                    </MenuItem>
                    <MenuItem name="insurance">
                        <Icon type="ios-paper"></Icon>
                        保险
                    </MenuItem>
                    <MenuItem name="parking">
                        <Icon type="ios-paper"></Icon>
                        停车场
                    </MenuItem>
                </div>
            </Menu>
        </Header>

        <!-- 二级页面的路由出口 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>
<style scoped>
.layout-logo{
    width: 170px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 7px;
    left: 20px;
}
.layout-logo img{
    width: 100%;
}
.layout-nav{
    width: 720px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>