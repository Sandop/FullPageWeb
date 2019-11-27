<template>
    <div class="list-wrap">
        <div class="img-wrap">
            <div class="img">
                <img :src="content.img" alt="">
            </div>
        </div>
        <div class="word-wrap">
            <div class="title">{{content.title}}</div>
            <div class="content">{{content.cont}}</div>
            <div class="time">{{content.time}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'news-list',
    props: {
        content: Object
    }
}
</script>

<style lang="scss" scoped>
    .list-wrap {
        display: flex;
        width: 100%;
        height: auto;
        padding: 24px 0;
		border-bottom: 1px solid #E3E3E3;
        justify-content: space-between;
        align-items: center;

        .img-wrap {
            width: 300px;
            height: 200px;

            .img {
                overflow: hidden;
                width: 100%;
                height: 100%;
                cursor:  pointer;

                img {
                    width: 100%;
                    height: 100%;
                    -webkit-transition: all 0.5s ease;
                    -o-transition: all 0.5s ease;
                    transition: all 0.5s ease;

                    &:hover {
                        -webkit-transform: scale(1.2);
                        -ms-transform: scale(1.2);
                        -o-transform: scale(1.2);
                        transform: scale(1.2);
                    }
                }
            }
        }

        .word-wrap {
            display: flex;
            width: 600px;
            height: 200px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

            .title {
                width: 100%;
                font-size:24px;
                font-weight:600;
                font-family:PingFangSC-Semibold,PingFang SC;
                color:rgba(52,52,52,1);
                line-height:33px;
            }

            .content {
                overflow: hidden;
                width:100%;
                height:101px;
                font-size:18px;
                font-family:PingFangSC-Regular,PingFang SC;
                color:rgba(52,52,52,0.5);
                line-height:25px;
            }

            .time {
                height:20px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                color:rgba(52,52,52,0.5);
                line-height:20px;
            }
        }
        
    }
</style>
