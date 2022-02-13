<template>
    <div class="footer">
        <div class="container">
            <div class="top">
                <div>微信</div>
                <div>QQ</div>
                <div>PAY</div>
            </div>
            <div class="middle">
                <div><img src="../assets/qq.png" alt=""></div>
                <div><img src="../assets/weixin.png" alt=""></div>
                <div><img src="../assets/pay.jpg" alt=""></div>

            </div>
            <div class="buttom">
                <p>本作品由刘天笑制作,2021年4月17日11点53分</p>
                <p>违法和不良信息举报电话：0512-81669439  举报邮箱：2698164146@qq.com  全国旅游投诉热线12301</p>

                <p>CSDN账号https://blog.csdn.net/liutianxiao123</p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="less" >
.footer{
    background-color: #f5f6f7;
    .container{
        width: 1200px;
        margin: auto;
        text-align: center;
        padding: 20px 0;
        .top{
            display: flex;
            justify-content: space-around;
            margin-bottom: 5px;
           div{
               width: 100px;
               /*border-left: 2px solid red;*/
           }
        }
        .middle{
            display: flex;
            justify-content: space-around;
            div{
                img{
                    width: 100px;
                    height: 100px;
                }
            }
        }
        .buttom{
            font-size: 14px;
            p{
    padding: 5px 0;
}
        }
    }
}
</style>
