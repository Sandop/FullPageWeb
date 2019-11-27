<template>
    <div class="box">
        <div class="logo">
            <img src="~/assets/images/news/news-logo.png" alt="" srcset="">
        </div>
        <div class="title">党建活动</div>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        name: 'news-logo'
    }
</script>

<style lang="scss" scoped>
    .box {
        display: flex;
        width: 100%;
        height: 87px;
        padding: 40px 90px 0 40px;
        color:rgba(255,255,255,1);
        text-align: center;
        align-items: flex-end;
        justify-content: flex-start;

        .logo {
            overflow: hidden;
            width:40px;
            height:40px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .title {
            height:46px;
            margin-left: 10px;
            border-bottom: 2px solid #FF5858;
            font-size:30px;
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            color:rgba(52,52,52,1);
            line-height:42px;
        }

        .line {
            flex: 1;
            height:46px;
            border-bottom: 1px solid #E3E3E3;

        }
    }
    
</style>

