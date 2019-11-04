<template>
    <div class="login_bg">
        <div v-if="wxLogin" class="weChat_login" @click="weChatLogin">
            <img src="../assets/Login_wechat_icon.png" alt="微信登录">
        </div>
        <div v-else>
            <div id="codeContainer" class="login_with_weChat"></div>
            <div class="theBtn">
                <i id="closeBtn" class="iconfont icon-Rectangle"></i>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            wxLogin: true
        };
    },
    methods: {
        // 微信登录
        weChatLogin() {
            this.wxLogin = false;
            this.$nextTick(()=> {
                const obj = new WxLogin({
                    id: 'codeContainer',
                    appid: 'wx8388fbd5617fed8e',
                    scope: 'snsapi_login',
                    redirect_uri: encodeURIComponent('https://interactive.gaotu100.com/course/index.html#/login'),
                    state: 'STATE',
                    style: '',
                    href: 'https://test-interactive.gaotu100.com/z_student/static/wxlogin-style-test.css'
                });

                console.log(obj);
            });
        }
    }
};
</script>

<style>
.login_bg{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 428px;
    height: 100%;
}
.weChat_login{
    width: 43px;
    height: 43px;
    margin: 0 auto;
    margin-top: 18px;
    cursor: pointer;
}
.weChat_login img{
    width: 100%;
    height: 100%;
}
.login_with_weChat{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 412px;
    height: 412px;
    /* background-color: #ffffff; */
    box-shadow: 0px 0px 6px 0px
    #e8e8e8;
    border-radius: 8px;
    text-align: center;
}
.theBtn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 412px;
    height: 412px;
}
</style>

