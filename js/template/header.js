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
                        <li><a href="index.html">Home</a></li>
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
                        <li><a href="notice.html">Notice</a></li>
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
        header-part{
            // position: sticky;
            top: 0;
        }

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
            color: #ff0000;
            text-transform: uppercase;
            text-align: center;
            text-shadow: 2px 2px 0px #cccccc;
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
        .nav-part {
            background: #ffffff;
        }
        
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
            border-bottom: 2px solid #f77f00;
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