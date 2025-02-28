$(document).ready(function() {
    // инициализация слайдеров
    if ($(window).width() > 1200) {
        $('#firstSlider').slick({
            slidesToShow: 1,
            prevArrow: `<button class="slick-prev"><img src="./image/left.svg" alt="Left Arrow"></button>`,
            nextArrow: `<button class="slick-next"><img src="./image/right.svg" alt="Right Arrow"></button>`,
            height: 100
        });
    } else {
        $('#firstMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: `<button class="slick-prev"><img src="./image/left.svg" alt="Left Arrow"></button>`,
            nextArrow: `<button class="slick-next"><img src="./image/right.svg" alt="Right Arrow"></button>`,
            height: 20
        });
    }
    if ($(window).width() > 1200) {
        $('#thredSlider').slick({
            slidesToShow: 1,
            prevArrow: `<button class="slick-prev"><img src="./image/left.svg" alt="Left Arrow"></button>`,
            nextArrow: `<button class="slick-next"><img src="./image/right.svg" alt="Right Arrow"></button>`,
            height: 100
        });
    } else {
        $('#thredMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: `<button class="slick-prev"><img src="./image/left.svg" alt="Left Arrow"></button>`,
            nextArrow: `<button class="slick-next"><img src="./image/right.svg" alt="Right Arrow"></button>`,
            height: 20
        });
    }
    if ($(window).width() > 1200) {
        $('#secondSlider').slick({
            slidesToShow: 1,
            height: 100,
            prevArrow: `<button class="slick-prev"><img src="./image/left.svg" alt="Left Arrow"></button>`,
            nextArrow: `<button class="slick-next"><img src="./image/right.svg" alt="Right Arrow"></button>`,
            asNavFor: "#mentorSlider",
        });
    } else {
        $('#secondMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: `<button class="slick-prev"><img src="./image/left.svg" alt="Left Arrow"></button>`,
            nextArrow: `<button class="slick-next"><img src="./image/right.svg" alt="Right Arrow"></button>`,
            asNavFor: "#mentorMobileSlider",
            height: 20
        });
    }
    if ($(window).width() > 1200) {
        $('#mentorSlider').slick({
            slidesToShow: 1,
            height: 100,
            asNavFor: "#secondSlider",
        });
    } else {
        $('#mentorMobileSlider').slick({
            slidesToShow: 1,
            asNavFor: "#secondMobileSlider",
        });
    }
    $('#firstEventSlider').slick({
        slidesToShow: 1,
        prevArrow: `<button class="slick-prev"><img src="./image/left.svg" alt="Left Arrow"></button>`,
        nextArrow: `<button class="slick-next"><img src="./image/right.svg" alt="Right Arrow"></button>`,
        height: 100
    });
    $('#secondEventSlider').slick({
        slidesToShow: 1,
        prevArrow: `<button class="slick-prev"><img src="./image/left.svg" alt="Left Arrow"></button>`,
        nextArrow: `<button class="slick-next"><img src="./image/right.svg" alt="Right Arrow"></button>`,
        height: 100
    });
    $('#thredEventSlider').slick({
        slidesToShow: 1,
        prevArrow: `<button class="slick-prev"><img src="./image/left.svg" alt="Left Arrow"></button>`,
        nextArrow: `<button class="slick-next"><img src="./image/right.svg" alt="Right Arrow"></button>`,
        height: 100
    });

    // Инициализация слайдеров для connect-card
    $('.image-slider').slick({
        slidesToShow: 1,
        prevArrow: `<button class="slick-prev"><img src="./image/left.svg" alt="Left Arrow"></button>`,
        nextArrow: `<button class="slick-next"><img src="./image/right.svg" alt="Right Arrow"></button>`,
    });
    // $('.popup-image-slider').slick({
    //     slidesToShow: 1,
    //     prevArrow: $('.popup-left-btn'),
    //     nextArrow: $('.popup-right-btn'),
    // });

    $(window).resize(function() {
        check('#firstSlider', '#firstMobileSlider')
        check('#thredSlider', '#thredMobileSlider')
        if (($(window).width() > 1200)) {
            if (!$('#mentorSlider').hasClass('slick-initialized')) {
                $('#mentorSlider').slick({
                    slidesToShow: 1,
                    prevArrow: `<button class="slick-prev"><img src="./image/left.svg" alt="Left Arrow"></button>`,
                    nextArrow: `<button class="slick-next"><img src="./image/right.svg" alt="Right Arrow"></button>`,
                    height: 100,
                    asNavFor: "#secondSlider",
                });
            }

        } else {
            if (!$('#mentorMobileSlider').hasClass('slick-initialized')) {
                $('#mentorMobileSlider').slick({
                    slidesToShow: 1,
                    height: 100,
                    asNavFor: "#secondMobileSlider",
                });
            }

        }
        if (($(window).width() > 1200)) {
            if (!$('#secondSlider').hasClass('slick-initialized')) {
                $('#secondSlider').slick({
                    slidesToShow: 1,
                    height: 100,
                    asNavFor: "#mentorSlider",
                });
            }

        } else {
            if (!($('#secondMobileSlider').hasClass('slick-initialized'))) {
                $('#secondMobileSlider').slick({
                    slidesToShow: 1,
                    height: 100,
                    prevArrow: `<button class="slick-prev"><img src="./image/left.svg" alt="Left Arrow"></button>`,
                    nextArrow: `<button class="slick-next"><img src="./image/right.svg" alt="Right Arrow"></button>`,
                    asNavFor: "#mentorMobileSlider",
                });
            }

        }

    });
    let block_show = null;
    let block_show2 = null;
    let block_show3 = null;
    let block_show4 = null;
    let block_show5 = null;
    let block_show6 = null;
    let block_show7 = null;
    let block_show8 = null;
    let block_show9 = null
    let block_show10 = null
    let block_show12 = null
    let block_show13 = null
    $(window).scroll(function(event) {
        event.preventDefault()
        scrollTracking('#tast');
        scrollTracking2('#connect');
        if ($('#connect').hasClass('done')) {
            scrollTracking3('#format');
        }
        scrollTracking4('.work-line');
        scrollTracking5('.network-con')
        scrollTracking6('#mentor')
        scrollTracking7('#net')
        scrollTracking8('#events')
        scrollTracking9('#anons')
        if ($('#sovet').hasClass('done')) {
            scrollTracking10('#footer')
        }
        scrollTracking12('#partner')
        scrollTracking13('#sovet')
    });
    // анимация главного экрана 
    $('header').animate({ opacity: 1 }, 1000);
    setTimeout(function() {
        $('.top-bar').animate({ opacity: 1 }, 1000);
    }, 1000)
    setTimeout(function() {
        $('.top-bar .container-fluid').animate({ opacity: 1 }, 1000);
    }, 2000)
    setTimeout(function() {
        $('.title').slideDown();
    }, 3000)
    setTimeout(function() {
        $('.header-content__left-part .sub-title').slideDown();
    }, 3500)
    setTimeout(function() {
        $('.header-content .col-xl-5').slideDown();
    }, 3500)
    setTimeout(function() {
        let time = 2000
        $('.header-content__right-part .img-block').each(function(el, i) {
            setTimeout(function() {
                $(i).animate({ opacity: 1 }, 2000);
            }, time)
            time += 500
        });
    }, 1500)

    function check(name, nameMob) { // проверка для слайдеров
        if (($(window).width() > 1200)) {
            if (!$(name).hasClass('slick-initialized')) {
                $(name).slick({
                    slidesToShow: 1,
                    prevArrow: `<button class="slick-prev"><img src="./image/left.svg" alt="Left Arrow"></button>`,
                    nextArrow: `<button class="slick-next"><img src="./image/right.svg" alt="Right Arrow"></button>`,
                    height: 100
                });
            }

        } else {
            if (!$(nameMob).hasClass('slick-initialized')) {
                $(nameMob).slick({
                    slidesToShow: 1,
                    prevArrow: `<button class="slick-prev"><img src="./image/left.svg" alt="Left Arrow"></button>`,
                    nextArrow: `<button class="slick-next"><img src="./image/right.svg" alt="Right Arrow"></button>`,
                    height: 100
                });
            }

        }
    }
    // анимация блоков 
    function scrollTracking() {

        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $('#tast').offset().top;
        let eh = $('#tast').outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show == null || block_show == false) {
                $('#tast').animate({ opacity: 1, }, 1000);
                $('#tast').css({ "-webkit-transform": "translate(0, 0px)" });
                let time = 500
                $('#tast .task-card').each(function(el, i) {
                    setTimeout(function() {
                        $(i).css({ "opacity": "1" });
                    }, time)
                    console.log(i)
                    time += 500

                })
                block_show = true;
            }

        }

    }

    function scrollTracking2(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show2 == null || block_show2 == false) {
                $(lk).animate({ opacity: 1, }, 1000);
                $(lk).css({ "-webkit-transform": "translate(0, 0px)" });
                block_show2 = true;
                setTimeout(function() {
                    $('.line-conent').css({ "-webkit-transform": "translate(0px, 0)" });
                }, 500)
                setTimeout(function() {
                    $('.line').css({ "height": "101px" });
                }, 3000)
                setTimeout(function() {
                    $('.line-2').css({ "height": "101px" });
                }, 3000)
                setTimeout(function() {
                    $('.connect-card-text').css({ "opacity": "1" });
                }, 3500)
                setTimeout(function() {
                    $('.connect-card img').css({ "-webkit-transform": "translateY(0)" });
                }, 4000)
                setTimeout(function() {
                    $(lk).addClass('done');
                }, 4000)

            }

        }

    }

    function scrollTracking3(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show3 == null || block_show3 == false) {
                $(lk).animate({ opacity: 1, }, 1000);
                $(lk).css({ "-webkit-transform": "translate(0, 0px)" });
                block_show3 = true;
                // setTimeout(function() {
                //     $('#format .format-card').css({ "opacity": "1" });
                // }, 500)
            }

        }

    }

    function scrollTracking4(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show4 == null || block_show4 == false) {
                setTimeout(function() {
                    $('.invite-container').css({ "opacity": "1" });
                }, 500)
                block_show4 = true;
            }

        }

    }

    function scrollTracking5(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show5 == null || block_show5 == false) {
                setTimeout(function() {
                    $('.network-con .format-card').css({ "opacity": "1" });
                }, 1500)
                setTimeout(function() {
                    $('.network-con .col-xl-7').css({ "opacity": "1" });;

                }, 2000)
                block_show5 = true;
            }

        }

    }

    function scrollTracking6(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show6 == null || block_show6 == false) {
                $(lk).animate({ opacity: 1, }, 1000);
                $(lk).css({ "-webkit-transform": "translate(0, 0px)" });
                setTimeout(function() {
                    $('#sl').css({ "opacity": "1" });
                }, 1000)
                setTimeout(function() {
                    $('.format-card-ment').css({ "opacity": "1" });;

                }, 1500)
                setTimeout(function() {
                    $('#mentorSlider').css({ "opacity": "1" });;

                }, 2000)
                block_show6 = true;
            }

        }

    }

    function scrollTracking7(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show7 == null || block_show7 == false) {
                $(lk).animate({ opacity: 1, }, 1000);
                setTimeout(function() {
                    $('#net').css({ "opacity": "1" });;
                }, 1000)
                setTimeout(function() {
                    $('#net .format-card-event').css({ "opacity": "1" });;
                }, 1500)

                setTimeout(function() {
                    $('#thredSlider').css({ "opacity": "1" });;

                }, 2000)
                block_show7 = true;
            }

        }

    }

    function scrollTracking8(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show8 == null || block_show8 == false) {
                $(lk).animate({ opacity: 1, }, 1000);
                $(lk).css({ "-webkit-transform": "translate(0, 0px)" });
                block_show8 = true;
            }

        }

    }

    function scrollTracking9(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show9 == null || block_show9 == false) {
                $(lk).animate({ opacity: 1, }, 1000);
                setTimeout(function() {
                    $('#anons .anons-card').slideDown();
                }, 1000)
                block_show9 = true;
            }

        }

    }

    function scrollTracking10(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show10 == null || block_show10 == false) {
                $('#footer').animate({ opacity: 1, }, 1000);
                setTimeout(function() {
                    $('#footer .anons-card').slideDown();
                }, 1000)
                block_show10 = true;
            }

        }

    }

    function scrollTracking12(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show12 == null || block_show12 == false) {
                $(lk).animate({ opacity: 1, }, 1000);
                $(lk).css({ "-webkit-transform": "translate(0, 0px)" });
                let time = 2000
                $('.our-partners .row .col-xl-4').each(function(el, i) {
                    setTimeout(function() {
                        $(i).css({ "opacity": "1" });
                    }, time)

                    time += 500

                })
                block_show12 = true;
            }

        }


    }

    function scrollTracking13(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show13 == null || block_show13 == false) {
                $(lk).animate({ opacity: 1, }, 1000);
                $(lk).css({ "-webkit-transform": "translate(0, 0px)" });
                let time = 2000
                $('#sovet .row .col-xl-4').each(function(el, i) {
                    setTimeout(function() {
                        $(i).css({ "opacity": "1" });
                    }, time)

                    time += 500

                })
                setTimeout(function() {
                    $(lk).addClass('done');
                }, 4000)
                block_show13 = true;
            }

        }


    }
    let x = 0
    $(document).scroll(function() {
        let distance = document.getElementById("slide2").getBoundingClientRect();
        if (distance.top < 0) {
            $('#slide2').addClass('banner-wrapper')
        }
        if (distance.top > 0) {
            $('#slide2').removeClass('banner-wrapper')
        }
    })
    $('.item').each(function(e) {
        $(this).css({ "display": "block" });
    })


    //     if (distance.top <= -1 && x == 0) {
    //         $('body').css({ "overflow": "hidden" });
    //         $('html').css({ "overflow": "hidden" });
    //         let i = 0
    //         document.addEventListener("wheel", function onWheel(e) {
    //             e = e || window.event;

    //             // wheelDelta не даёт возможность узнать количество пикселей
    //             var delta = e.deltaY || e.detail || e.wheelDelta;
    //             console.log(delta)
    //             e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    //             if (delta > 0 && i == 1) {
    //                 i += 1
    //                 console.log('da')
    //                 $("#slideE3").css({ "-webkit-transform": "translate(0, -200%)" }); // поднимаем слайде
    //                 console.log('скролим 3 слайд вверх')
    //             }
    //             if (delta > 0 && i == 0) {
    //                 $("#slideE2").css({ "-webkit-transform": "translate(0, -100%)" }); // поднимаем слайде
    //                 console.log('скролим 2 слайд вверх')
    //                 i += 1
    //             }
    //             if (delta < 0 && i == 2) {
    //                 console.log('da')
    //                 $("#slideE2").css({ "-webkit-transform": "translate(0, 0%)" }); // возвращаем слайд
    //                 console.log('скролим 3 слайд вниз')
    //                 i -= 1
    //             }
    //             if ((delta < 0 && i == 2) || (delta > 0 && i == 0)) {
    //                 console.log('вышли')
    //                 $('body').css({ "overflow": "auto" });
    //                 $('html').css({ "overflow": "auto" });
    //                 x = 1
    //             }

    //         });
    //     }
    // })

    // console.log(distance.bottom)


})


// анимация слайдов карточки 
// let lastScrollTop = 0
// $(document).scroll(function() {
//     let st = $(this).scrollTop();
//     let el = $('#eventCon')[0]
//     let elDistanceToTop = window.pageYOffset + el.getBoundingClientRect().top
//     let wb = window.pageYOffset
//     if (elDistanceToTop - wb == 0) {
//         console.log('ds')
//     }
//     if (st > lastScrollTop) { // если скрол был вниз
//         let s_top = $(document).scrollTop();
//         let yes = $("#slideE1").offset().top;
//         if (s_top > yes) {
//             $("#slideE2").css({ "-webkit-transform": "translate(0, -100%)" }); // поднимаем слайде
//         }
//     } else {
//         let s_top = $(document).scrollTop();
//         let yes = $("#slideE1").offset().top;
//         if (s_top > yes) {
//             $("#slideE2").css({ "-webkit-transform": "translate(0, 0%)" }); // возвращаем слайд
//         }
//     }
//     lastScrollTop = st;

// });
// let lastScrollTop2 = 0
// $(document).scroll(function() {
//     var st = $(this).scrollTop();
//     if (st > lastScrollTop2) { // если скрол был вниз
//         s_top = $(document).scrollTop();
//         yes = $("#slideE2").offset().top;

//         console.log($("#slideE1").offset().top)
//         if (s_top > yes) {
//             $("#slideE3").css({ "-webkit-transform": "translate(0, -200%)" }); // поднимаем слайде
//         }
//     } else {
//         s_top = $(document).scrollTop();
//         yes = $("#slideE1").offset().top;
//         if (s_top > yes) {
//             $("#slideE3").css({ "-webkit-transform": "translate(0, 0%)" }); // возвращаем слайд
//         }
//     }
//     lastScrollTop2 = st;

// });

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.connect-card');

    cards.forEach(card => {
        const images = card.querySelectorAll('.connect-img');
        let currentIndex = 0;

        const leftBtn = card.querySelector('.left-btn');
        const rightBtn = card.querySelector('.right-btn');

        leftBtn.addEventListener('click', (e) => {
            e.preventDefault();
            images[currentIndex].style.display = 'none';
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].style.display = 'block';
        });

        rightBtn.addEventListener('click', (e) => {
            e.preventDefault();
            images[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.display = 'block';
        });

        images.forEach((img, index) => {
            if (index !== 0) img.style.display = 'none';
        });
    });
});

let currentImageIndex = 0;
const images = {
    knigclub: [
        './image/knigclub.png',
        './image/knigclub2.png',
        './image/knigclub3.png'
    ],
    junior: [
        './image/junior.png',
        './image/junior2.png',
        './image/junior3.png'
    ],
    promturism: [
        './image/promturism.png',
        './image/promturism2.png',
        './image/promturism3.png'
    ],
    kinoclub: [
        './image/kinoclub.png',
        './image/kinoclub2.png',
        './image/kinoclub3.png'
    ],
    delovyeigry: [
        './image/delovyeigry.png',
        './image/delovyeigry2.png',
        './image/delovyeigry3.png'
    ],
    peregovorpoed: [
        './image/peregovorpoed.png',
        './image/peregovorpoed2.png',
        './image/peregovorpoed3.png'
    ]
};

const texts = {
    knigclub: `Как мы обычно читаем бизнес книги? Прочитали. Может быть, подумали о том, почему он вам понравился или нет. Возможно, рассказали партнеру или лучшему другу о прочитанном. А что дальше? Чаще всего, вы просто беретесь за другую книгу… Хотя порой важно не бежать за следующей книгой, а остановиться и понять, что и как можно применить из прочитанного на практике. Книжный клуб СМП создан как раз для того, чтобы помочь вам поработать с материалом, который вы впитали, проанализировать то, что пока еще живет в вас. А главное - сделать чтение осознанным и практически применимым. Клуб — это площадка для обсуждения проблем бизнеса через книги. Книжный клуб - помогает развить навык чтения, если вы до этого не читали и закрепить привычку читать осознанно. А плюсом - обмен мнениями, нетворкинг, участие в обсуждениях. С нами вы не просто прочитали и забыли, а обсудили и внедрили в свою жизнь.`,
    junior: `СМП Junior — это созвездие, где каждый находит свою траекторию. Школьники, студенты и их родители не просто учатся — они исследуют, пробуют, создают. Бизнес-завтраки становятся точкой встречи с опытом, экскурсии на предприятия — окном в реальный мир, а экономические игры — полигоном для первых решений. Здесь важно не просто достигать целей, а понимать, как устроен путь к ним. СМП Junior — место, где каждый шаг осмыслен, а каждое открытие приближает к новой вершине!`,
    promturism: `СМП.Промтуризм — экскурсии на предприятия и встречи с первыми лицами компаний. Мы открываем двери крупнейших компаний в Иваново, чтобы создать условия для обучения, обмена опытом и партнерства между предпринимателями. Помимо экскурсий, погружающих в специфику производства СМП.Промтуризм — это прямой диалог с собственниками и руководителями предприятий, возможность обмена контактами и площадка для установления качественных деловых связей. Самое ценное здесь — люди. Участники встреч — это ваши завтрашние партнёры, заказчики, поставщики или сотрудники. Стань частью Сообщества предпринимателей, объединённого стремлением к развитию и новым возможностям.`,
    kinoclub: `Киноклуб СМП это сообщество для тех, кто не только любит смотреть кино, но и использует его для собственного развития. Для этого используется специальный метод - синемалогия. Это наука анализа кино, которая основывается на идее, что каждый фильм является метафорой жизни. Автором метода является итальянский философ, психолог,  Антонио Менегетти. Суть метода заключается в том, что при просмотре фильма участник обращает внимание не столько на событийный ряд, а в большей степени на то, какие эмоции у него вызывает та или иная сюжетная линия, стиль поведения персонажей. Это позволяет глубже понять и оценить фильм. Кроме того, разбирая свое отношение к увиденному в фильме, зритель получает возможность проанализировать собственные реакции, понять, какую модель поведения он выбираете в реальной жизни, какие факты ускользают от его внимания в обычной жизни. То, как мы воспринимаем сюжет, героев или конфликты, раскрывает наше внутреннее состояние. Таким образом, синемалогия помогает развивать творческий потенциал, лидерское начало, активную жизненную позицию. Формируется расширенное сознание. Участники получают зеркало, в котором отражается неочевидное. При этом, как только человеку удается понять собственную реальность, он обретает свободу действия и возможность привносить новизну в сценарий собственной жизни. Практически такой способ познания внутреннего мира человека практически состоит из трех основных частей: просмотр фильма, высказывания участников, последующий анализ собственных переживаний и акцент ведущего на важные моменты. Таким образом, присутствующие получают возможность понять проблему, увидеть варианты ее решения, используя символы и их возможные интерпретации. Наши встречи Клуба СМП проходят вот так: Для начала я выбираю фильм. Он должен помогать раскрыть определённую тему. Потом мы встречаемся, обсуждаем, что смотрим и каких правил придерживаемся. Далее смотрим фильм. Просмотр фильма в компании заинтересованных в себе людей всегда происходит совершенно по-другому, чем в одиночестве. Делаем перерыв, пьём чай и затем участники делятся своими впечатлениями. В конце на основании совместного обсуждения критически переосмысляем увиденное.`,
    delovyeigry: `Деловые Игры в Сообществе молодых предпринимателей. Деловые игры это не просто развлекательная активность, а эффективный инструмент для обучения и развития, который поможет вам стать успешным предпринимателем. Почему стоит участвовать в деловых играх? 1. Прокачивание бизнес-навыков. Деловые игры, такие как «Коллаборация» и «Большая тайна переговоров» позволяют вам развивать ключевые навыки через увлекательные игровые форматы. Вы научитесь принимать решения, разрабатывать стратегии и управлять проектами в условиях, приближенных к реальности. 2. Обмен опытом. Участие в играх предоставляет возможность обмениваться опытом с другими предпринимателями. Вы сможете обсуждать актуальные бизнес-задачи, находить новые подходы и решения, получать ценные советы от коллег, а также договариваться о сотрудничестве. 3. Получение инструментов для внедрения в бизнес. Участие в деловых играх - это возможность получить практические инструменты и методики, которые вы сможете сразу же применить в своем бизнесе. Вы научитесь не только теоретическим аспектам, но и получите готовые решения, которые помогут оптимизировать процессы, улучшить коммуникацию внутри команды и повысить эффективность работы. В ходе игр вы будете разрабатывать конкретные стратегии и подходы, которые можно адаптировать под уникальные условия вашего бизнеса. Наши Игры: • Коллаборация: это мозговой штурм на тему сотрудничества в вашем бизнесе. Вы будете разрабатывать акции и варианты сотрудничества для вашего бизнеса с другими игроками, что поможет вам развить навыки эффективного взаимодействия. Модератор: Виктория Викторова. • Большая тайна переговоров: В этой игре вы погрузитесь в мир переговоров и научитесь вести диалог так, чтобы достигать выгодных условий для всех сторон. Это отличный способ прокачать свои навыки общения и уверенности при взаимодействии с партнёрами. Модератор: Татьяна Лепехина. Взгляд в Будущее: На 2025 год у нас большие планы по расширению линейки игр и внедрению новых игропрактик и форматов. Мы стремимся сделать обучение ещё более увлекательным и эффективным, чтобы каждый участник мог найти что-то полезное для себя. Присоединяйтесь к нашим деловым играм и откройте для себя новые горизонты в бизнесе! Это ваш шанс не только развить навыки, но и завести полезные знакомства в кругу единомышленников. Для получения дополнительной информации и записи на игры, пожалуйста, свяжитесь с нами через форму обратной связи или по указанным контактам. Ждем вас на наших мероприятиях!`,
    peregovorpoed: `За основу «Переговорных поединков» взята технология Владимира Тарасова «Управленческий поединок». «Переговорные поединки» — это как игра, где два человека пытаются решить сложную ситуацию, например, конфликт. Судьи наблюдают за их действиями и решают, кто лучше справился. Они оценивают, чьи решения были успешнее, кто смог убедить собеседника и лучше вел переговоры. Чем опытнее человек в таких «играх», тем проще ему договариваться с другими в жизни. Он быстрее решает споры, легче общается и умеет выстраивать хорошие отношения. На поединке человек учится: понимать, что происходит в сложной ситуации, принимать правильные решения, уметь слушать и убеждать, справляться со стрессом и не поддаваться эмоциям. Когда зрители смотрят на поединок, участникам бывает нелегко, ведь это как выступать на сцене. Но поединок помогает прокачать навыки переговоров, преодолеть страх публичных выступлений и научиться сохранять спокойствие. После поединка судьи рассказывают, что у каждого из участников получилось хорошо, а что можно было сделать лучше. Это дает возможность учиться и становиться сильнее. Эта технология помогает усилить важные навыки, которые нужны, чтобы быть успешным и легко находить общий язык с людьми. Обычно применяется для обучения, развития и оценки руководителей и персонала.`
};

function showPopup(category) {
    document.getElementById('popup-overlay').style.display = 'flex';
    currentImageIndex = 0;
    updatePopupContent(category);
    
    $('.popup-image-slider').slick({
        slidesToShow: 1,
        prevArrow: $('.popup-left-btn'),
        nextArrow: $('.popup-right-btn'),
    });
}

// function showPopup1(category) {
//     document.getElementById('').style.display = 'flex';
//     currentImageIndex = 0;
//     updatePopupContent(category);
    
//     $('.popup-image-slider').slick({
//         slidesToShow: 1,
//         prevArrow: $('.popup-left-btn'),
//         nextArrow: $('.popup-right-btn'),
//     });
// }

function hidePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
}

function updatePopupContent(category) {
    const popupImg = document.querySelector('.popup-img');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');
    popupImg.src = images[category][currentImageIndex];
    popupTitle.textContent = `СМП. ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    popupText.textContent = texts[category];
}

function prevPopupImage(category) {
    currentImageIndex = (currentImageIndex - 1 + images[category].length) % images[category].length;
    updatePopupContent(category);
}

function nextPopupImage(category) {
    currentImageIndex = (currentImageIndex + 1) % images[category].length;
    updatePopupContent(category);
}

function prevImage(category) {
    currentImageIndex = (currentImageIndex - 1 + images[category].length) % images[category].length;
    updateImage(category);
}

function nextImage(category) {
    currentImageIndex = (currentImageIndex + 1) % images[category].length;
    updateImage(category);
}

function updateImage(category) {
    const imageSlider = document.querySelector(`.image-slider img[alt="${category}"]`);
    imageSlider.src = images[category][currentImageIndex];
}