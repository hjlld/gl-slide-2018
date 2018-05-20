<template>
    <v-container fluid fill-height class="pa-0">
        <v-layout row wrap justify-center align-center align-content-center>
            <v-alert color="info" :icon="undefined" transition="scale-transition" :value="true" class="alert-title" v-if="title[step] !== ''">
                <p class="display-3">{{ title[step] }}</p>
            </v-alert>
            <v-flex xs12 class="text-xs-center">
                <iframe src="https://acko.net/files/fullfrontal/fullfrontal/webglmath/iframes/mathbox.html#1" seamless id="mathbox" scrolling="no"></iframe>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        step: 1,
        title: ['', '', '', '布雷森汉姆直线算法', '扫描线渲染法', '', '关联到像素', '“抗锯齿”', '亚像素', '取样', '从矢量世界到像素世界', '最邻近插值', '双线过滤', '锯齿', '各向异性过滤 16x']
    }),
    mounted: function(){
        var _this = this
        var iframe = document.getElementById('mathbox')
        window.addEventListener('keyup', function(e){
            if(e.keyCode == 33) {
                if(_this.step === 1) {
                    return
                }
                _this.mathboxGo(iframe, _this.step--)
            } 
            if(e.keyCode == 34) {
                if(_this.step === 14){
                    return
                }
                _this.mathboxGo(iframe, _this.step++)
            } 
        }, false)
    },
    methods: {
        mathboxGo: function(iframe, step) {
            iframe.contentWindow && iframe.contentWindow.postMessage({ mathBoxDirector: { method: 'go', args: [step] }}, '*');
        }
    }
}
</script>
<style>
iframe {
    width: 100vw;
    height: 100vh;
    border: 0;
}
.alert-title {
    display: inline-flex !important;
    position: absolute !important;
    top: 16px;
}
</style>

