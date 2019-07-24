<template>
    <div class="box">
        <div class="title">
            <p class="title-cn">中信消费金融有限公司</p>
            <p class="title-en">CITIC Consumer Finance Co.,Ltd.</p>
        </div>
        <div class="content">
            <p class="company">中信消费金融有限公司是由中国中信有限公司、中信信托有限责任公司、金蝶软件（中国）有限公司三家股东共同出资组建。</p>
            <p class="company">公司将依托依托中信信托丰富的金融领域风险管理经验，结合中信有限旗下子公司的消费场景，借助金蝶在产业互联网的布局及丰富的科技服务经验优势，通过科技创新赋能普惠金融服务，在监管部门的指导下，以消费者为核心，开发和研究适应市场的发展需求、贴近百姓生活的消费信贷产品。</p>
            <p class="company">中信消费金融有限公司的价值观为：信以致用，行稳致远，共创未来。秉承这一价值观，中信消费金融有限公司将以“简单、高效、务实”的企业文化，不断拼搏，实现“成为可信赖的消费金融有限公司”的公司使命。</p>
        </div>
        <div class="bottom-bg">
            <img src="~/assets/images/index/bottom-bg.png" alt="" srcset="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page-one'
    }
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;
    padding-top: 20px;
    color:rgba(255,255,255,1);
    text-align: center;

    .title {

        .title-cn {
            height:45px;
            font-size:32px;
            font-weight:600;
            line-height:45px;
        }

        .title-en {
            height:22px;
            margin-top: 4px;
            font-size:16px;
            font-weight:300;
            line-height:22px;
        }
    }

    .content {
        width: 100%;
        height: auto;
        margin-top: 60px;

        .company {
            max-width: 1058px;
            margin: 12px auto;
            font-size:16px;
            font-weight:400;
            line-height:22px;
            text-align: left;
            letter-spacing:3px;
        }
    }

    .bottom-bg {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 104px;
    }
}
    
</style>

