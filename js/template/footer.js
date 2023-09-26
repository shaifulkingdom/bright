// =================================== Footer Part Start =================================== //
class FooterPart extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer-part">
                <div class="container">
                    <div class="footer">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 left">
                            <a href="index.html"><img src="images/logo/bright-logo.png" alt="bright-logo"></a>
                            <h2>BRIGHT SCHOOL AND COLLEGE</h2>
                            <div class="social">
                                <a href="https://www.facebook.com/shaifulkingdom" target="_blank">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 middle">
                            <h2><u>Useful Links</u></h2>
                            <div class="link">
                                <a href="https://moedu.gov.bd/" target="_blank">Ministry of Education</a>
                                <a href="https://www.shed.gov.bd/" target="_blank">Secondary and Higher Education Division</a>
                                <a href="https://banbeis.gov.bd/" target="_blank">BANBEIS</a>
                                <a href="https://www.mopme.gov.bd/" target="_blank">Ministry of Primary & Mass Education</a>
                                <a href="http://www.nape.gov.bd/" target="_blank">National Academy for Primary Education</a>
                                <a href="http://nctb.gov.bd/site/page/079828a6-18e6-44c1-9a2d-59f8d223199c" target="_blank">ebook</a>
                                <a href="http://nctb.gov.bd/" target="_blank">National Curriculum & Text Board (NCTB)</a> </div>
                            </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 right">
                            <h2><u>Contact Adress</u></h2>
                            <h3>Main Campus : <br> 132, Sorai Road, Donia, Kadamtoli, Dhaka-1236.</h3>
                            <h3>Phone : +880 1799 968777</h3>
                            <div class="mapouter">
                                <div class="gmap_canvas"><iframe id="gmap_canvas"
                                        src="https://maps.google.com/maps?q=bright school and college&t=&z=10&ie=UTF8&iwloc=&output=embed"
                                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>© Copyright 2022. Bright School and College. Design & Developed by : <a class="color"
                            href="https://shaifulkingdom.github.io" target="_blank">"Shaiful Islam"</a></p>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('footer-part', FooterPart);

var style = document.createElement('style');
style.innerHTML = `
    .footer-part {
        background: #000000;
        padding: 20px 0;
        margin-top: 50px;
    }

    .footer-part .footer .left {
        text-align: center;
    }

    .footer-part .footer .left img {
        width: 100px;
    }

    .footer-part .footer .left h2 {
        margin-top: 10px;
        font-family: 'oswald', sans-serif;
        font-size: 20px;
        color: #ff0000;
    }

    .footer-part .footer .left .social {
        text-align: center;
        margin-top: 30px;
    }

    .footer-part .footer .left .social a i {
        width: 35px;
        height: 35px;
        line-height: 38px;
        font-size: 16px;
        color: #e9e9ea;
        margin: 0 2px 5px 2px;
        background: linear-gradient(#ff0000, #090e36);
        transition: .6s;
    }

    .footer-part .footer .left .social a i:hover {
        border-radius: 50%;
        transition: .6s;
    }

    .footer-part .footer .right h2,
    .footer-part .footer .middle h2 {
        font-family: 'Oswald', sans-serif;
        margin-top: 10px;
        font-size: 30px;
        color: #ffffff;
        padding-bottom: 10px;
    }

    .footer-part .footer .right h3,
    .footer-part .footer .middle a {
        display: block;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 16px;
        color: #f77f00;
    }

    .footer-part .footer .right .mapouter {
        margin-top: 10px;
    }

    .footer-part .footer .right .mapouter iframe{
        width: 100%;
    }

    .footer-part .footer p {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 18px;
        text-align: center;
        color: #e9e9ea;
        margin-top: 30px;
    }

    .footer-part .footer p a {
        color: #ff0000;
    }

    .footer-part .footer a:hover {
        color: #f77f00;
    }
        
`;
document.head.appendChild(style);



// responsive
var style = document.createElement('style');
style.innerHTML = `
@media (min-width: 300px) and (max-width: 469.98px) {
    .footer-part .footer .left img {
        width: 60px !important;
    }

    .footer-part .footer .left .social {
        margin-top: 10px !important;
    }

    .footer-part .footer .right h2,
    .footer-part .footer .middle h2 {
        font-size: 20px !important;
        text-align: center !important;
    }

    .footer-part .footer .right h3,
    .footer-part .footer .middle a {
        font-size: 12px !important;
    }

    .footer-part .footer .middle,
    .footer-part .footer .right h3,
    .footer-part .footer .right .mapouter {
        text-align: center !important;
    }

    .footer-part .footer p {
        font-size: 12px !important;
    }
}

@media (min-width: 470px) and (max-width: 575.98px) {
    .footer-part .footer .left img {
        width: 60px !important;
    }

    .footer-part .footer .left .social {
        margin-top: 10px !important;
    }

    .footer-part .footer .right h2,
    .footer-part .footer .middle h2 {
        font-size: 22px !important;
        text-align: center !important;
    }

    .footer-part .footer .right h3,
    .footer-part .footer .middle a {
        font-size: 14px !important;
    }

    .footer-part .footer .middle,
    .footer-part .footer .right h3,
    .footer-part .footer .right .mapouter {
        text-align: center !important;
    }

    .footer-part .footer p {
        font-size: 16px !important;
    }
}

@media (min-width: 576px) and (max-width: 767.98px) {
    .footer-part .footer .left img {
        width: 60px !important;
    }

    .footer-part .footer .left .social {
        margin-top: 10px !important;
    }

    .footer-part .footer .right h2,
    .footer-part .footer .middle h2 {
        font-size: 22px !important;
        text-align: center !important;
    }

    .footer-part .footer .right h3,
    .footer-part .footer .middle a {
        font-size: 14px !important;
    }

    .footer-part .footer .middle,
    .footer-part .footer .right h3,
    .footer-part .footer .right .mapouter {
        text-align: center !important;
    }

    .footer-part .footer p {
        font-size: 16px !important;
    }
}

@media (min-width: 768px) and (max-width: 991.98px) {
    .footer-part .footer .left img {
        width: 60px !important;
    }

    .footer-part .footer .left .social {
        margin-top: 10px !important;
    }

    .footer-part .footer .right h2,
    .footer-part .footer .middle h2 {
        font-size: 22px !important;
        text-align: center !important;
    }

    .footer-part .footer .right h3,
    .footer-part .footer .middle a {
        font-size: 14px !important;
    }

    .footer-part .footer .middle,
    .footer-part .footer .right h3,
    .footer-part .footer .right .mapouter {
        text-align: center !important;
    }

    .footer-part .footer p {
        font-size: 16px !important;
    }
}
`;
document.head.appendChild(style);