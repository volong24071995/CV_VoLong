/**
 * Template Name: iPortfolio - v1.5.0
 * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function($) {
    "use strict";

    // Hero typed
    if ($('.typed').length) {
        var typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {

                var scrollto = target.offset().top;

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function() {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
    });

    $(document).click(function(e) {
        var container = $(".mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            }
        }
    });

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, .mobile-nav');

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function() {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 300) {
                $(".nav-menu ul:first li:first").addClass('active');
            }
        });
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    // Skills section
    $('.skills-content').waypoint(function() {
        $('.progress .progress-bar').each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '80%'
    });

    // Porfolio isotope and filter
    $(window).on('load', function() {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function() {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
            aos_init();
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function() {
            $('.venobox').venobox();
        });
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out-back",
            once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });

})(jQuery);


// Data
/**************************************************/

document.querySelectorAll(".avatar").forEach(e => {
    e.setAttribute("src", person.avatar);
})

document.querySelectorAll(".name").forEach(e => {
    e.append(person.name)
});

document.querySelectorAll(".github").forEach(e => {
    e.setAttribute("href", person.gitHub);
})

document.querySelectorAll(".email").forEach(e => {
    e.setAttribute("href", "mailto:" + person.contacts.email);
})

// Information Person
var age = function(dob) {
    var year = Number(dob.substr(6, 4));
    var month = Number(dob.substr(4, 2)) - 1;
    var day = Number(dob.substr(0, 2));
    var today = new Date();
    var agePerson = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        agePerson--;
    }
    return agePerson;
}

document.querySelector(".information").innerHTML = `
<div class="col-lg-6">
<ul>
    <li><i class="icofont-rounded-right"></i> <strong>Ngày sinh:</strong> ${person.dob}</li>
    <li><i class="icofont-rounded-right"></i> <strong>Giới tính:</strong> ${person.gender}</li>
    <li><i class="icofont-rounded-right"></i> <strong>Số điện thoại:</strong> ${person.contacts.phone}</li>
    <li><i class="icofont-rounded-right"></i> <strong>Địa chỉ:</strong> ${person.contacts.address}</li>
</ul>
</div>
<div class="col-lg-6">
<ul>
    <li><i class="icofont-rounded-right"></i> <strong>Tuổi:</strong> ${age(person.dob)}</li>
    <li><i class="icofont-rounded-right"></i> <strong>Trình độ:</strong> ${person.level}</li>
    <li><i class="icofont-rounded-right"></i> <strong>Email:</strong>
        <a href="mailto:${person.contacts.email}">${person.contacts.email}</a>
    </li>
</ul>
</div>`
    // 

document.querySelector("#introduce").innerHTML = person.introduce;

document.querySelector("#character").innerHTML = "Tính tình: " + person.character;

document.querySelector("#interests").innerHTML = "Sở thích: " + person.interests;

// Taget
document.querySelector("#shortTaget").innerHTML = `<strong>Mục tiêu ngắn hạn: </strong>` + person.shortTaget;

document.querySelector("#longTaget").innerHTML = `<strong> Mục tiêu dài hạn: </strong>` + person.longTaget;

// skill
let skill = "";
let str_skill = "";
let count = 0;
person.skills.forEach(element => {
    count++;
    str_skill = str_skill +
        `<div class="progress">
    <span class="skill">${element.name}<i class="val"></i></span>
    <div class="progress-bar-wrap">
        <div class="progress-bar" role="progressbar" aria-valuenow="${element.levelScore}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>`
    if (count == 4 || count == 8) {
        skill = skill + `<div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">${str_skill}</div>`
        str_skill = "";
    }
});
document.querySelector("#skill").innerHTML = skill;
//

// Education
let education = "";
person.educations.forEach(element => {
    if (element.nameSchool == "Cao đẳng y tế Huế") {
        education = education + `<div class="resume-item">
            <h4>${element.nameSchool}</h4>
            <h5>${element.time}</h5>
            <p><em>${element.course} </em></p>
            <p>Tôi đã hoàn thành khóa học với kết quả <em>"${element.result}"</em></p>
        </div>`
    } else {
        education = education + `<div class="resume-item">
            <h4>${element.nameSchool}</h4>
            <h5>${element.time}</h5>
            <p><em>${element.course} </em></p>
        </div>`
    }
});
document.querySelector(".education").innerHTML = `<h3 class = 'resume-title'> Học vấn </h3>` + education;

// Experience
let experience = "";
let description_exp = "";
person.experiences.forEach(element => {
    element.experience.forEach(exp => {
        description_exp = description_exp + `<p>${exp}</p>`
    });
    experience = experience + `<div class="resume-item">
    <h4>${element.nameCompany}</h4>
    <h5>${element.time}</h5>
    <p><em>${element.position} </em></p>
    ${description_exp}
</div>`
});
document.querySelector(".experience").innerHTML = `<h3 class="resume-title">Kinh nghiệm làm việc</h3>` + experience;

// Projects
let project = "";
person.projects.forEach(element => {
    project = project + `
    <div class="col-lg-4 col-md-6 portfolio-item ">
    <div class="portfolio-wrap">
        <img src="${element.image1}" class="img-fluid" alt="" style="border: 1px solid lightskyblue;">
        <div class="portfolio-links">
            <a href="${element.image2}" data-gall="portfolioGallery" class="venobox" title="${element.name}"><i class="bx bx-plus"></i></a>
            <a href="${element.linkDetail}" title="More Details" target="blank"><i class="bx bx-link"></i></a>
        </div>
    </div>
    </div>`
});
document.querySelector(".projects").innerHTML = project;

// Certificate
let certificate = "";
person.certificates.forEach(e => {
    if (e.linkImg == "") {
        certificate = certificate + `<div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
        <div class="icon"><i class="${e.icon}"></i></div>
        <h4 class="title"><a href="">${e.name}</a></h4>
        <p class="description">${e.uses}</p>
    </div>`
    } else {
        certificate = certificate + `<div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
        <div class="icon"><i class="${e.icon}"></i></div>
        <h4 class="title"><a href="">${e.name}</a></h4>
        <p class="description">${e.uses}</p>
        <p class="description">Chứng chỉ : <a href="${e.linkImg}" target="blank">${e.linkImg}.</a></p>
    </div>`
    }
})
document.querySelector(".certificate").innerHTML = certificate;

// Referenceperson
let referenceperson = "";
let str_referenceperson = "";
person.referencePersons.forEach(element => {
    if (element.email == "phuc.le@codegym.vn") {
        str_referenceperson = `Email: <a href="mailto:phuc.le@codegym.vn">phuc.le@codegym.vn</a>&nbsp;</br>`
    } else {
        str_referenceperson = `&emsp;&emsp;Email: <a href="mailto:khoa.nguyen@codegym.vn">khoa.nguyen@codegym.vn</a></br>`
    }
    referenceperson = referenceperson +
        `<div class="testimonial-item" data-aos="fade-up" data-aos-delay="100">
    <p>
        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
        <span>
            Công ty: ${element.company}</br>
            ${str_referenceperson}
            &emsp;Số điện thoại:  ${element.phone}
        </span>
        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
    </p>
    <img src="${element.avt}" class="testimonial-img" alt="">
    <h3>${element.name}</h3>
    <h4>${element.position}</h4>
    </div>`;
});
document.querySelector(".referenceperson").innerHTML = referenceperson;

// Testimonials carousel (uses the Owl Carousel library)
$(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        900: {
            items: 2
        }
    }
});

// Contacts
document.querySelector("#person_contact").innerHTML = `
<div class="row ">
<div class="col-lg-4 address">
    <i class="icofont-google-map"></i>
    <h4>Địa chỉ:</h4>
    <p>${person.contacts.address}</p>
</div>

<div class="col-lg-4">
    <i class="icofont-envelope"></i>
    <h4>Email:</h4>
    <p>
        <a href="emailto:${person.contacts.email}">${person.contacts.email}</a>
    </p>
</div>

<div class="col-lg-4 phone">
    <i class="icofont-phone"></i>
    <h4>Số điện thoại:</h4>
    <p>${person.contacts.phone}</p>
</div>
</div>
<div class="row">
<iframe src="${person.contacts.iframe}" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
</div>`