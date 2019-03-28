<template>
    <div class="header-wrap">
        <div class="header">
            <div class="header-box">
                <div class="header-logo">
                    <img src="~/assets/images/common/hlogo.png" alt="中信消费金融">
                </div>
                <div class="header-nav">
                    <ul>
                        <li class="nav-list">
                            <nuxt-link to="/">首页</nuxt-link>
                        </li>
                        <li class="nav-list">
                            <nuxt-link to="/contact">联系方式</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VHeader' 
    }
</script>

<style lang="scss" scoped>
    .header-wrap {
        overflow: hidden;
        width: 100%;
        height: 110px;
        text-align: center;

        .header {
           position: fixed;
            top: 0;
            width: 100%;
            height: 110px;
            background: #fff;
            z-index: 666;

            .header-box {
                overflow: hidden;
                width: 1200px;
                height: 100%;
                margin: 0 auto;

                .header-logo {
                    float: left;
                    width: 229px;
                    height:50px;
                    margin-top: 30px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .header-nav {
                    float: right;
                }
            }
        }
    }
</style>

