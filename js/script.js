//=================================================================================//
//                                banner-part-start
//=================================================================================//
$('.banner-part').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 500,
    arrows: true,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    fade: false,
    responsive: [{
            breakpoint: 991.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
//=================================================================================//
//                                banner-part-end
//=================================================================================//

//=================================================================================//
//                                lock-part-end
//=================================================================================//

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

//=================================================================================//
//                                lock-part-end
//=================================================================================//

//=================================================================================//
//                                it-officer-part-start
//=================================================================================//


//=================================================================================//
//                                it-officer-part-end
//=================================================================================//

//=================================================================================//
//                                notice-part-start
//=================================================================================//
fetch("js/json/notice.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (notices) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let notice of notices) {
            out += `
			<tr>
				<td class="subject">${notice.subject}</td>
				<td class="date">${notice.date}</td>
				<td><a href="${notice.link}" target="_blank"><button>Download</button></a></td>
			</tr>
		`;
        }

        placeholder.innerHTML = out;
    });
//=================================================================================//
//                                notice-part-end
//=================================================================================//