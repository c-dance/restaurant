
;(function(){
    var brando = {
        init:       function(){
            this.smoothScrollFn();
            this.headerFn();
            this.section01234Fn();
            this.section06Fn();
            this.section07Fn();

            this.section09Fn();
            this.section10Fn();
            this.section11Fn();
            this.section13Fn();
            this.section14Fn();
        },
        smoothScrollFn: function(){ 
            var $smoothBtn  = $('.smoothBtn');
            var $htmlBody   = $('html,body');
            var $mobile     = $('.mobile');

            $smoothBtn.on({
                click:  function(event){
                    event.preventDefault();
                    $this = $(this);
                    var url = $this.attr('href'); 
                    $htmlBody.stop().animate({scrollTop:$( url ).offset().top-60},800,'easeInOutCirc');
                    $mobile.stop().slideUp(300);
                }
            });
        },            
        headerFn:   function(){
  
            var $window     = $(window);
            var $header     = $('#header');
            var $mobilebtn  = $('.mobilebtn');
            var $mobile     = $('.mobile');

            $window.scroll(function(){ 
                if( $window.scrollTop() >= 30 ) $header.addClass('addHeader');
                else $header.removeClass('addHeader');
            });
            $mobilebtn.on({
                click:  function(){
                    $mobile.stop().slideToggle(300);
                }
            });
            function resizeFn(){
                if( $window.innerWidth() > 980  ){
                    $mobile.stop().slideUp(0);
                }
            }

            setTimeout(resizeFn,100); //loading

            $window.resize(function(){ //resize event
                resizeFn();
            });
        },
        section01234Fn:   function(){

            var $window       = $(window);
            var $section1     = $('#main #section01');
            var $section1234  = $('#main #section01, #main #section02, #main #section03, #main #section04');
            var $winH         = $window.innerHeight(); 
            var $box          = $('#main .section0234 .box');
            var $boxH         = $box.innerHeight();
            var $section1H    = $window.innerHeight(); 

            function resizeFn(){
                $winH = $window.innerHeight();
                $section1H    = $window.innerHeight(); 
                $boxH = $box.innerHeight();
                if( $winH < $boxH+80) $winH = $boxH+80;
                $section1.css({ height:$section1H });
                $section1234.css({ height:$winH }); 
                $box.css({ marginTop:-($boxH/2) });
            }

            setTimeout(resizeFn,100);

            $window.resize(function(){
                resizeFn();
            });
        },
        section06Fn:   function(){

            var $bgImg = $('#main #section06 .bg-img'); 

            $bgImg.on({
                mouseenter: function(){
                    $bgImg.removeClass('addHover');
                    $(this).addClass('addHover');
                },

                focusin: function(){                    
                    $bgImg.removeClass('addHover');
                    $(this).addClass('addHover');
                }
            });

        },
        section07Fn:   function(){

            var $profileGap = $('#main #section07 .profile-gap');

            $profileGap.on({
                mouseenter: function(){
                    $profileGap.removeClass('addProfile');
                    $(this).addClass('addProfile');
                },
                focusin: function(){ 
                    $profileGap.removeClass('addProfile');
                    $(this).addClass('addProfile');
                }
            });
        },

        section09Fn:   function(){
           var tot                 = $('#section09 .gallery-item').length;  
           var hideCount           = 0;
           var n                   = tot-hideCount;                         
           var cols                = 4;                                     //기본 칸수
           var imgW                = 0;                                     //이미저 너비 
           var imgH                = imgW*0.75;                             //이미지 높이
           var rows                = Math.ceil(n/cols);                     //줄수
           var $gllBtn             = $('#section09 .gll-btn');              //갤러리 상단 내비게이션 버튼
           var idx                 = 0;                                     //내비게이션 첫번째 버튼 인덱스 값
           var $winW               = $(window).innerWidth();                //창 너비
           var $s9GalleryItem      = $('#section09 .gallery-item');         //갤러리 항목(li)
           var $s9galleryContainer = $('#section09 .gallery-container');    //갤러리 전체 컨테이너 박스
           var a = []; //show() 배열 요소 인덱스 번호  li.show() 
           var h = []; //hide() 배열 요소 인덱스 번호  li.hide() 
           var $window             = $(window);

                //갤러리 반응형 함수
                function resizeFn(){
                    //창의 너비를 즉각 반영하도록 너비를 가져오기
                    $winW = $(window).innerWidth();

                    if( $winW > 1200 ) cols=4;
                    else if( $winW >=990 ) cols=3;
                    else if( $winW > 760 ) cols=2;
                    else cols=1;
                    
                    imgW = $winW/cols;
                    imgH = imgW*.75;

                    $s9GalleryItem.removeClass('addScale');                    
                    $s9GalleryItem.css({ width:imgW, height:imgH });

                    switch(idx){
                        case 0: //ALL
                            h = [];//배열 초기화
                            a=[0,1,2,3,4,5,6,7];
                            break;
                        case 1: //BREAKFAST
                            h = [0,2];
                            a=[1,3,4,5,6,7];                           
                            break;
                        case 2: //DINNER
                            h = [1,3,4,5];  
                            a = [0,2,6,7];
                            break;
                        case 3: //DRINKS
                            h = [0,2,5]; 
                            a = [1,3,4,6,7];
                            break;
                        default:  //LUNCH
                            h = [0,1,3,6];
                            a = [2,4,5,7];
                    } 

                   //1 hide 요소
                    $s9GalleryItem.removeAttr('data-hide');                    
                    for(var i=0; i<h.length; i++){
                        $s9GalleryItem.eq(h[i]).attr('data-hide',idx).stop().hide();
                    }

                    $s9GalleryItem.each(function(){ 
                        if( $(this).attr('data-hide') ){
                            hideCount++;
                        }
                    });
                    n = tot - hideCount;  //show() 보이는 갯수
                    rows = Math.ceil(n/cols);                       //줄수 = 전체 갤러리 갯수/칸수
                    $s9galleryContainer.css({height:imgH*rows});  //갤러리 전체박스 높이를 구함                   

                    //3 show 요소
                    var k=-1;
                    for(var i=0; i<rows; i++){
                        for(var j=0; j<cols; j++){
                            k++;
                            if( k>a.length-1 ) break; //반복문 종료
                            $s9GalleryItem.eq(a[k]).stop().show().animate({left:imgW*j,top:imgH*i});
                        } 
                    } 
                    
                    $s9GalleryItem.addClass('addScale');

                }

                $window.resize(function(){
                    resizeFn();
                });

                setTimeout(resizeFn,10);

                $gllBtn.each(function(index){
                    $(this).on({
                        click: function(event){
                            event.preventDefault();
                            $gllBtn.removeClass('addNav');
                            $(this).addClass('addNav');
                            
                            idx = index; 
                            resizeFn();

                        } 
                    });
                });

        },
        section10Fn:   function(){
            var cnt=0;
            var $slide     = $('#section10 .slide');
            var $slideWrap = $('#section10 .slide-wrap');
            var $slideCon  = $('#section10 .slide-container');
            var $slideConW = $('#section10 .slide-container').innerWidth();
            var $nextBtn   = $('#section10 .nextBtn')
            var $prevBtn   = $('#section10 .prevBtn')
            var $window    = $(window);

            function resizeFn(){
                $slideConW = $slideCon.innerWidth();
                $slide.css({width:$slideConW});   
                $slideWrap.css({width:$slideConW*3});
                mainSlieFn(); 
            }
            $window.resize(function(){
                resizeFn();
            });        
            setTimeout(resizeFn,10);
            
            function mainSlieFn(){
                $slideWrap.stop().animate({left:-($slideConW*cnt)},500,'easeInOutExpo');
            }

            function nextCountFn(){
                cnt++;
                if(cnt>2) cnt=2;
                mainSlieFn();
            }
            
            function prevCountFn(){
                cnt--;
                if(cnt<0) cnt=0;
                mainSlieFn();
            }
            
            $nextBtn.on({
                click:  function(event){
                    event.preventDefault();
                    nextCountFn();
                }
            });
            
            $prevBtn.on({
                click:  function(event){
                    event.preventDefault();
                    prevCountFn();
                }
            });
            
            $slideCon.swipe({
                swipeLeft:function(){
                    nextCountFn(); 
                },
                swipeRight:function(){
                    prevCountFn();
                }
            });
        },
        section11Fn:   function(){

            var $window = $(window);
            var $leftBox   = $('#section11 .left-box');
            var $rightBox  = $('#section11 .right-box');
            var $leftBoxW  = $('#section11 .left-box').innerWidth(); 
            $leftBox.css({height:$leftBoxW});    
            $rightBox.css({height:$leftBoxW});
            $rightBox.css({height:$leftBoxW}); 


            function resizeFn(){
                $leftBoxW  = $('#section11 .left-box').innerWidth(); 
                $leftBox.css({height:$leftBoxW});       
                $rightBox.css({height:$leftBoxW});      
                $rightBox.css({height:$leftBoxW});      
            }
                $window.resize(function(){
                    resizeFn();
                });
                setTimeout(resizeFn,10);
        },
        section13Fn:   function(){
            
            var $num1 = $('.num').eq(0);
            var $num2 = $('.num').eq(1);
            var $num3 = $('.num').eq(2);
            var $num4 = $('.num').eq(3);
            var cnt1 = 0;
            var cnt2 = 0;
            var cnt3 = 0;
            var cnt4 = 0;
            var setId1 = null;
            var setId2 = null;
            var setId3 = null;
            var setId4 = null;

            var regExp = /\B(?=(\d{3})+(?!\d))/g;

            function counterFn1(){
                cnt1 ++;
                if(cnt1>=7800){
                    clearInterval(setId1);
                    clearInterval(setId2);
                    clearInterval(setId3);
                    clearInterval(setId4);
                    $num1.html(7,80);
                    $num2.html(9,87);
                    $num3.html(3,50);
                    $num4.html(1,66);
                }
                $num1.html(cnt1.toString().replace(regExp, ','));
                $num2.html(cnt2.toString().replace(regExp, ','));
                $num3.html(cnt3.toString().replace(regExp, ','));
                $num4.html(cnt4.toString().replace(regExp, ','));
            }
            setId1 = setInterval(counterFn1,22.82051282);

            function counterFn2(){
                cnt2 ++;
                if(cnt2>=9870) clearInterval(setId2);
                $num2.html(cnt2);
            }
            setId2 = setInterval(counterFn2,20.13171226);

            function counterFn3(){
                cnt3 ++;
                if(cnt3>=3500) clearInterval(setId3);
                $num3.html(cnt3);
            }
            setId3 = setInterval(counterFn3,38.57142857);

            function counterFn4(){
                cnt4 ++;
                if(cnt4>=1660) clearInterval(setId4);
                $num4.html(cnt4);
            }
            setId4 = setInterval(counterFn4,70.24096386);
            
            /*
            var $num = $('#section13 .num');
            $num.each(function(){
                var endPoint = $(this).text();
                var secRate = Number(endPoint)/1000;
                var start = 0;

                var intCount = setInterval(count, secRate);

                function count(){
                    start++;
                    if(start>=endPoint) clearInterval(intCount);
                    console.log($(this).text().toString(), start);
                }

            });*/

        },
        section14Fn:   function(){

            var $submit = $('#submit');

            $submit.on({
                click: function(event){
                    event.preventDefault();
                    var $name = $('#name').val();
                    var $email = $('#email').val();
                    var $interest = $('#interest').val();
                    var $message = $('#message').val();
                    var regExpMail =/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

                    if($name=="" ||$email=="" || $interest=="" || $message==""||regExpMail.text($email).val()==false){
                        alert("fill the form");
                        return false;
                    }else{
                        alert("send message");

                        $.ajax({
                            url: './response.php',
                            type: 'post',
                            data: {
                                name: $name,
                                email: $email,
                                interest: $interest,
                                message: $message
                            },
                            success: function(data){
                                $('.response').html(data);

                                $('#name').val('');
                                $('#email').val('');
                                $('#interest').val('');
                                $('#message').val('');
                                $('#name').focus();
                            },
                            error: function() {
                                alert('ajax error');
                            }
                        });

                    }
   
                }
            })

        }
    }; 

    brando.init();

})();
