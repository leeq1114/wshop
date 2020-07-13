<template>
<div>
<button type="button" @click="getData">fasong</button>
<ul>
    <li v-for="(item, index) in list" :key="index">
        {{index+1}} : {{item.tile}}
    </li>
</ul>
</div>
  
</template>


<script>

export default {
    data() {
        return {
            list: []
        }
        
    },
    methods: {
        ajax(){
            let movieUrl = "https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250";
            let xmlhttp;
            // 1
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            } else {
                // xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            
            // 2
            xmlhttp.open("GET", movieUrl, true);
            xmlhttp.send();
            
            // 3
            xmlhttp.addEventListener("readystatechange", ()=>{
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    let obj = JSON.parse(xmlhttp.responseText);
                    console.log(obj);
                    this.list = obj.subjects;

                }
            });
        },
        getData(){
            this.ajax();
        }
    }
}
</script>


<style lang="scss">

</style>
