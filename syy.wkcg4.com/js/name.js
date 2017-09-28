var name = '广州市万兔斯瑞科技有限公司';
var address = '广州市荔湾区花地大道岭南节点园之一102房';
var banquan = '版权所有：';
var tel = '020--29018208';
var lxr='';
        
        if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {  
                
                console.log(1);
                    // window.location.href="top.html";
                    $("#shouye").click(function(){
                    window.location.href="top.html";
                })

              

            }else{  
              
                // window.location.href="你的电脑版地址"; 
                $("#shouye").click(function(){
                    window.location.href="shouye.html";
                })
                 img = "<div class='flash'><ul class='bxslider'><li><a href=''><img src='style\/img\/top1.jpg'></a></li></ul></div>";
                
            } 

       
