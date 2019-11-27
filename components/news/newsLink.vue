<template>
    <div class="news-link">
        <ul>
            <li class="list">
                <div class="title">
                    上一篇:
                </div>
                <div class="link">
                    <nuxt-link class="name" :to="linkCont.preUrl">
                        {{linkCont.preTitle}}
                    </nuxt-link>
                </div>
            </li>
            <li class="list">
                <div class="title">
                    下一篇:
                </div>
                <div class="link">
                    <nuxt-link class="name" :to="linkCont.nextUrl">
                        {{linkCont.nextTitle}}
                    </nuxt-link>
                </div>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'news-link',
    props: {
        linkCont: Object
    }
}
</script>

<style lang="scss" scoped>
    .news-link {
        display: flex;
        height: 100%;
        justify-content: flex-end;
        align-items: center;

        ul {
            display: flex;
            height: 100%;
            justify-content: flex-end;
            align-items: center;

            .list {
                display: flex;
                height: 100%;
                justify-content: flex-start;
                align-items: center;

                .title {
                    min-width: 72px;
                    height:25px;
                    font-size:18px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(52,52,52,1);
                    line-height:25px;
                    text-align: left;
                }

                .link {
                    width:216px;
                    height:25px;
                    
                    .name {
                        display: block;
                        overflow: hidden;
                        width: 100%;
                        height: 100%;
                        font-size:18px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(52,52,52,0.5);
                        line-height:25px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
        
    }
</style>
