<template>
    <div class="footer-wrap">
       <div class="footer">
           <div class="footer-left">
               <div class="company-name">
                   <div class="company-cn">中信消费金融有限公司</div>
                   <div class="company-en">CITIC Consumer Finance Co., Ltd.</div>
               </div>
               <div class="footer-copy">
                   <ul>
                        <li class="list">
                           <img src="~/assets/images/common/f-icon.png" class="list-icon">
                           <i class="list-word">京公网安备 11010502038516号</i>
                        </li>
                       <li class="list">
                           京ICP备 1902994号-1
                        </li>
                   </ul>
               </div>
           </div>
           <div class="footer-right">
               <ul>
                   <!-- <li class="list">招贤纳士</li> -->
               </ul>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'VFooter',
        data() {
			return {
				fIcon: require("~/assets/images/common/f-icon.png")
			}
		},
    }
</script>

<style lang="scss" scoped>
    .footer-wrap {
        overflow: hidden;
        width: 100%;
        height: 164px;
        color:rgba(52,52,52,1);
        background: #fff;

        .footer {
            overflow: hidden;
            width: 1200px;
            height: 100%;
            margin: 0 auto;

            .footer-left {
                float: left;
                margin-left: 18px;
                text-align: left;

                .company-name {
                    padding-top: 51px;

                    .company-cn {
                        height:22px;
                        font-size:16px;
                        font-weight:600;
                        line-height:22px;
                    }
                    .company-en {
                        height:14px;
                        margin-top: 2px;
                        font-size:10px;
                        font-weight:400;
                        line-height:14px;
                    }
                }

                .footer-copy {
                    margin-top: 11px;

                    ul {
                        overflow: hidden;

                        .list {
                            float: left;
                            height:20px;
                            margin-right: 34px;
                            font-size:10px;
                            font-weight:400;
                            line-height:20px;

                            .list-icon {
                                display: inline-block;
                                overflow: hidden;
                                width: 20px;
                                height: 20px;
                            }
                            .list-word {
                                display: inline-block;
                                overflow: hidden;
                                height: 20px;
                                font-style: normal;
                            }
                        }
                    }
                }
            }

            .footer-right {
                float: right;
                height: 100%;
                margin-right: 18px;

                ul {
                    overflow: hidden;

                    .list {
                        float: left;
                        height:100%;
                        margin-left: 55px;
                        font-size:14px;
                        font-weight:400;
                        line-height:164px;
                    }
                }
            }
        }
    }

    @media screen and (max-width:1366px) {
        .footer-wrap {
            height: 88px;

            .footer {

                .footer-left {

                    .company-name {
                        padding-top: 15px;
                    }
                }
            }
        }
    }    
</style>
