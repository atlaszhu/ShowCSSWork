export default `*,*::after,*::before{
    margin:0;padding: 0;
    box-sizing: border-box;
}
/*画出皮卡丘背景*/
.pikachu{
    position: relative;
    background: #ffe600;
    min-height: 100vh;
}
/*正在画鼻子下三角部分*/
.pikachu>.nose{
    position: absolute;
    left: 50%;
    top: 130px;
    border: 10px solid;
    border-color: black transparent transparent;
    margin-left: -10px;
}
/*正在画鼻子上面的圆弧*/
.pikachu>.nose::before{
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 6px;
    top:-16px;
    left: -10px;
    border-radius: 50% / 100% 100% 0 0;
    background: black;
}
/*正在画眼睛*/
.pikachu>.eye{
    position: absolute;
    left:50%;
    /*top: 150px;*/
    top: 80px;
    margin-left: -32px;
    width: 72px;
    height: 72px;
    border: 2px solid  black;
    background: #2e2e2e;
    border-radius: 50%;
}
/*正在画瞳孔*/
.pikachu>.eye::before{
    content: '';
    display: block;
    width: 35px;
    height: 35px;
    border: 3px solid #000;
    border-radius:50% ;
    background: #fff;
    position:relative;
    left: 9px;
}
/*画左眼*/
.pikachu>.eye.left{
    transform: translateX(-130px);
}
/*画右眼*/
.pikachu>.eye.right{
    transform: translateX(130px);
}
/*正在定位嘴巴*/
.pikachu>.mouth{
    width:200px;
    height: 200px;
    position: relative;
    left: 50%;
    top: 160px;
    margin-left: -100px;
}
/*正在画嘴唇*/
.pikachu>.mouth>.up{
    position: absolute;
    width: 100px;
    height: 30px;
    border: 3px solid  #000000;
    border-radius: 0 0 0 75% / 0 0 0 100%;
    border-top-color: transparent;
    background: #ffe600;
    z-index: 5;
}
/*遮住多出来的线*/
.pikachu>.mouth>.up::before{
    position: absolute;
    content: '';
    display: block;
    width: 6px;
    height: 27px;
    left: 92px;
    top:-3px;
    background: #ffe600;
}
/*左嘴唇*/
.pikachu>.mouth>.up.left{
    transform:rotate(-20deg)translateX(-1px);
}
/*右嘴唇*/
.pikachu>.mouth>.up.right{
    transform:translateX(101px)rotateY(180deg)rotate(-20deg);
}
/*正在定位嘴巴下部分*/
.pikachu>.mouth>.down{
    position: relative;
    width: 160px;
    height: 190px;
    top: 10px;
    left: 20px;
    overflow: hidden;
}
/*正在画嘴巴*/
.pikachu>.mouth>.down>.round{
    position: absolute;
    width: 200px;
    height: 880px;
    top: -700px;
    left: -20px;
    border: 3px solid #000000;
    border-radius: 50%;
    background: #9b000a;
    overflow: hidden;
}
/*正在画舌头*/
.pikachu>.mouth>.down>.round::before{
    content: '';
    display: block;
    position: absolute;
    width: 180px;
    height: 150px;
    left: 50%;
    margin-left: -90px;
    bottom: -4px;
    border-radius: 50%;
    background: #ff485f;
}
/*正在画脸颊*/
.pikachu>.face{
    position:absolute;
    left: 50%;
    margin-left: -44px ;
    top: 180px;
    width: 88px;
    height: 88px;
    border:3px solid  #000000;
    border-radius: 50%;
    background: #ff0000;
}
/*左脸颊*/
.pikachu>.face.left{
    transform:translateX(-186px);
}
/*右脸颊*/
.pikachu>.face.right{
    transform:translateX(186px);
}
/*给鼻子加上鼠标悬浮时晃动的效果*/
@keyframes noseWave {
    0%{
    }
    50%{
        transform: rotate(10deg);
    }
    100%{
        transform: rotate(-10deg);
    }
}
.pikachu>.nose:hover{
    transform-origin: 50% 100%;
    animation:300ms noseWave infinite;
}`