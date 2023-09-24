class HeaderPart extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- ==================== header part start ==================== -->
        <div class="header-part">
            <div class="container">
                <div class="header">
                    <div class="row">
                        <div class="col-lg-2 col-md-2 col-sm-2 left">
                            <a href="index.html"><img src="images/logo/bright-logo.png" alt="bright-logo"></a>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 middle">
                            <h1>Bright School and College</h1>
                            <div class="button">
                                <a href="https://bright.odhyyon.com" target="_blank">Teacher</a>
                                <a class="reverse" href="https://bright.odhyyon.com" target="_blank">Admin</a>
                                <a href="https://bright.odhyyon.com/portal/Account/Login" target="_blank">Student</a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-2 right">
                            <a href="https://mujib100.gov.bd/" target="_blank"><img src="images/logo/mujib-logo.png"
                                alt="mujib-logo"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ==================== header part end ==================== -->
        <!-- ==================== nav part start ==================== -->
        <div class="nav-part">
            <div class="container">
                <div class="nav">
                    <ul class="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Administration<span></span></a>
                            <ul class="submenu">
                                <li class="link"><a href="#">Chairman</a></li>
                                <li class="link"><a href="#">Vice Chairman</a></li>
                                <li class="link"><a href="#">Principal</a></li>
                                <li class="link"><a href="#">Vice Principal</a></li>
                                <li class="link"><a href="#">Administrative</a></li>
                                <li class="link"><a href="#">IT Officer</a></li>
                                <li class="link"><a href="#">Account Officer</a></li>
                                <li class="link"><a href="#">Staff</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Teacher<span></span></a>
                            <ul class="submenu">
                                <li class="link"><a href="#">Primary</a></li>
                                <li class="link"><a href="#">Cadet</a></li>
                                <li class="link"><a href="#">School</a></li>
                                <li class="link"><a href="#">College</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Student<span></span></a>
                            <ul class="submenu">
                                <li class="link"><a href="#">Pre Primary</a></li>
                                <li class="link"><a href="#">Nursery</a></li>
                                <li class="link"><a href="#">One</a></li>
                                <li class="link"><a href="#">Two</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- ==================== nav part end ==================== -->
        <!-- ==================== news-ticker part start ==================== -->
        <div class="news-ticker-part">
            <div class="container">
                <div class="news-ticker">
                    <label>Latest News</label>
                    <marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
                        <a href="#">Lorem ipsum dolor sit amet consectetur.</a>
                        <a href="#">Lorem ipsum dolor sit amet consectetur.</a>
                        <a href="#">Lorem ipsum dolor sit amet consectetur.</a>
                    </marquee>
                </div>
            </div>
        </div>
        <!-- ==================== news-ticker part end ==================== -->
    `
    }
}
customElements.define('header-part', HeaderPart);



var style = document.createElement('style');
style.innerHTML = `
        /* ==================== header part start ==================== */
        .header-part {
            background: #eeeeee;
            padding: 20px 0;
            border-bottom: thin solid #bbbbbb;
            overflow: hidden;
        }
        
        .header-part .header .right {
            text-align: right;
        }
        
        .header-part .header .left img,
        .header-part .header .right img {
            width: 100px;
        }
        
        .header-part .header .middle h1 {
            font-family: 'Oswald', sans-serif;
            font-size: 50px;
            font-weight: bold;
            color: #cc2a2a;
            text-transform: uppercase;
            text-align: center;
        }
        
        .header-part .header .middle .button {
            text-align: center;
            margin-top: 12px;
        }
        
        .header-part .header .middle a {
            font-family: 'Oswald', sans-serif;
            font-size: 20px;
            color: #000;
            padding: 5px 15px;
            margin: 0 5px;
            border-radius: 5px;
            border: 2px solid #000;
            text-transform: uppercase;
            transition: .6s;
        }
        
        .header-part .header .button a.reverse,
        .header-part .header .button a:hover {
            background: #000;
            color: #fff;
            transition: .6s;
        }
        
        .header-part .header .button a.reverse:hover {
            background: transparent;
            color: #000;
            transition: .6s;
        }
        /* ==================== header part end ==================== */
        /* ==================== nav part start ==================== */
        .nav-part .nav .menu {
            display: flex;
            margin: auto;
            margin-bottom: 0;
        }
        
        .nav-part .nav .menu li {
            position: relative;
            padding: 10px;
        }

        .nav-part .nav .menu li a {
            font-family: 'Oswald', sans-serif;
            font-size: 20px;
            color: #000;
        }
        
        .nav-part .nav .menu li a:hover {
            color: #cc2a2a;
            font-weight: bold;
        }
        
        .nav-part .nav .menu .submenu {
            position: absolute;
            top: 50px;
            left: 0;
            width: 140px;
            background: #ffffff;
            border: thin solid #bbbbbb;
            display: none;
            padding-bottom: 5px;
            z-index: 1;
        }
        
        .nav-part .nav .menu .submenu .link {
            padding: 0 10px;
            padding-top: 5px;
        }
        
        .nav-part .nav .menu li:hover .submenu {
            display: block;
            animation: slideup .3s ease;
        }
        
        @keyframes slideup {
            0% {
                opacity: 0;
                transform: translateY(18px);
            }
        
            100% {
                opacity: 1;
                transform: none;
            }
        }    
        /* ==================== nav part end ==================== */
        /* ==================== news-ticker-part start ==================== */
        .news-ticker-part {
            background: #000000;
        }
        
        .news-ticker-part .news-ticker {
            position: relative;
            height: 40px;
        }
        
        .news-ticker-part .news-ticker label {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-family: 'Josefin Sans', sans-serif;
            font-size: 18px;
            color: #f77f00;
            font-weight: bold;
            background: #000000;
            border-right: 2px solid #f77f00;
            padding-right: 20px;
            z-index: 1;
        }
        
        .news-ticker-part .news-ticker marquee {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
        
        .news-ticker-part .news-ticker a {
            font-family: 'Josefin Sans', sans-serif;
            font-size: 18px;
            color: #ffffff;
            padding-left: 50px;
        }   
        /* ==================== news-ticker-part end ==================== */

     `;
document.head.appendChild(style);

// responsive
var style = document.createElement('style');
style.innerHTML = `
@media (min-width: 300px) and (max-width: 469.98px) {
    .header-part {
        padding: 10px 0 !important;
    }

    .header-part .header .left,
    .header-part .header .right {
        flex: 0 0 auto !important;
        width: 15% !important;
    }

    .header-part .header .left img,
    .header-part .header .right img {
        width: 100% !important;
    }

    .header-part .header .middle {
        flex: 0 0 auto !important;
        width: 70% !important;
        padding: 0 !important;
    }

    .header-part .header .middle h1 {
        font-size: 6vw !important;
    }

    .header-part .header .middle .button {
        margin-top: 0 !important;
    }

    .header-part .header .middle a {
        padding: 0 !important;
        margin: 0 !important;
        font-size: 12px !important;
    }

    .nav-part .nav .menu li {
        padding: 5px 3px !important;
    }

    .nav-part .nav .menu a {
        font-size: 12px !important;
    }

    .nav-part .nav .menu .submenu {
        top: 34px !important;
        width: 80px !important;
    }

    .nav-part .nav .menu .submenu .link {
        padding: 0 5px !important;
        padding-top: 5px !important;
    }

    .news-ticker-part .news-ticker label {
        font-size: 12px !important;
        padding-right: 10px !important;
    }

    .news-ticker-part .news-ticker a {
        font-size: 12px !important;
    }

    .news-ticker-part .news-ticker {
        height: 30px !important;
    }
}

@media (min-width: 470px) and (max-width: 575.98px) {
    .header-part .header .middle h1 {
        font-size: 5.5vw !important;
    }

    .header-part {
        padding: 10px 0 !important;
    }

    .header-part .header .left,
    .header-part .header .right {
        flex: 0 0 auto !important;
        width: 15% !important;
    }

    .header-part .header .left img,
    .header-part .header .right img {
        width: 100% !important;
    }

    .header-part .header .middle {
        flex: 0 0 auto !important;
        width: 70% !important;
    }

    .header-part .header .middle .button {
        margin-top: 8px !important;
    }

    .header-part .header .middle a {
        padding: 2px 5px !important;
        margin: 0 2px !important;
        font-size: 14px !important;
    }

    .nav-part .nav .menu li {
        padding: 5px !important;
    }

    .nav-part .nav .menu a {
        font-size: 14px !important;
    }

    .nav-part .nav .menu .submenu {
        top: 34px !important;
        width: 90px !important;
    }

    .nav-part .nav .menu .submenu .link {
        padding: 0 5px !important;
        padding-top: 5px !important;
    }

    .news-ticker-part .news-ticker label {
        font-size: 14px !important;
        padding-right: 10px !important;
    }

    .news-ticker-part .news-ticker a {
        font-size: 14px !important;
    }

    .news-ticker-part .news-ticker {
        height: 30px !important;
    }
}

@media (min-width: 576px) and (max-width: 767.98px) {
    .header-part .header .middle h1 {
        font-size: 28px !important;
    }

    .header-part {
        padding: 10px 0 !important;
    }

    .header-part .header .left img,
    .header-part .header .right img {
        width: 100% !important;
    }

    .header-part .header .middle a {
        padding: 2px 5px !important;
        margin: 0 2px !important;
        font-size: 16px !important;
    }

    .nav-part .nav .menu li {
        padding: 5px !important;
    }

    .nav-part .nav .menu a {
        font-size: 16px !important;
    }

    .nav-part .nav .menu .submenu {
        top: 35px !important;
        width: 110px !important;
    }

    .nav-part .nav .menu .submenu .link {
        padding: 0 5px !important;
        padding-top: 5px !important;
    }

    .news-ticker-part .news-ticker label {
        font-size: 16px !important;
        padding-right: 15px !important;
    }

    .news-ticker-part .news-ticker a {
        font-size: 16px !important;
    }

    .news-ticker-part .news-ticker {
        height: 35px !important;
    }
}

@media (min-width: 768px) and (max-width: 991.98px) {
    .header-part .header .middle h1 {
        font-size: 40px !important;
    }

    .header-part .header .middle a {
        padding: 5px 10px !important;
        margin: 0 2px !important;
        font-size: 18px !important;
    }

    .nav-part .nav .menu a {
        font-size: 18px !important;
    }

    .nav-part .nav .menu .submenu {
        top: 47px !important;
        width: 120px !important;
    }

    .nav-part .nav .menu .submenu .link {
        padding: 0 5px !important;
        padding-top: 5px !important;
    }

    .news-ticker-part .news-ticker label,
    .news-ticker-part .news-ticker a {
        font-size: 16px !important;
    }
}
`;
document.head.appendChild(style);








































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
                            <h1>BRIGHT SCHOOL AND COLLEGE</h1>
                            <div class="social">
                                <a href="https://www.facebook.com/shaifulkingdom" target="_blank">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 middle">
                            <h2><u>Useful Links</u></h2>
                            <h3><a href="https://moedu.gov.bd/" target="_blank">Ministry of Education</a></h3>
                            <h3><a href="https://www.shed.gov.bd/" target="_blank">Secondary and Higher Education Division</a></h3>
                            <h3><a href="https://banbeis.gov.bd/" target="_blank">BANBEIS</a></h3>
                            <h3><a href="https://www.mopme.gov.bd/" target="_blank">Ministry of Primary & Mass Education</a></h3>
                            <h3><a href="http://www.nape.gov.bd/" target="_blank">National Academy for Primary Education</a></h3>
                            <h3><a href="http://nctb.gov.bd/site/page/079828a6-18e6-44c1-9a2d-59f8d223199c" target="_blank">ebook</a></h3>
                            <h3><a href="http://nctb.gov.bd/" target="_blank">National Curriculum & Text Board (NCTB)</a></h3> 
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
    margin-top: 40px;
    box-shadow: 0 -7px 5px -3px #ccc;
}

.footer-part .footer .left {
    text-align: center;
}

.footer-part .footer .left img {
    width: 100px;
}

.footer-part .footer .left h1 {
    margin-top: 10px;
    font-family: 'oswald', sans-serif;
    font-size: 20px;
    color: #fe3b3b;
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
    background: linear-gradient(#fe3b3b, #090e36);
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
    color: #e9e9ea;
    text-align: justify;
}

.footer-part .footer .right h3,
.footer-part .footer .middle a {
    margin-top: 5px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    text-align: justify;
    color: #f77f00;
}

.footer-part .footer .right .mapouter {
    margin-top: 20px;
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

.footer-part .footer a:hover {
    color: #e9e9ea;
}
`;
document.head.appendChild(style);