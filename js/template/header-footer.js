class HeaderPart extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- ==================== header part start ==================== -->
            
        <!-- ==================== header part end ==================== -->
        <!-- ==================== nav part start ==================== -->
        

        <!-- ==================== nav part end ==================== -->

        <!-- ==================== news-ticker part start ==================== -->
        <div class="news-ticker-part">
            <div class="container">
                <div class="news-ticker">
                    <div class="news-ticker-label">Latest Notices</div>
                    <div class="news-ticker-box">
                        <div class="news-ticker-list">
                        <table>
                            <tr>
                                <th class="th1">Subject</th>
                                <th class="th2">Date</th>
                                <th class="th2">Download</th>
                            </tr>
                            <tr>
                                <td class="td1"><a href="notice.html">This is First Notice</a></td>
                                <td class="td2">00-00-23</td>
                            </tr>
                            <tr>
                                <td class="td1"><a href="notice.html">Lorem Ipsum something</a></td>
                                <td class="td2">00-00-23</td>
                            </tr>
                            <tr>
                                <td class="td1"><a href="notice.html">Lorem Ipsum something</a></td>
                                <td class="td2">00-00-23</td>
                            </tr>
                            <tr>
                                <td class="td1"><a href="notice.html">Lorem Ipsum something</a></td>
                                <td class="td2">00-00-23</td>
                            </tr>
                        </table>
                        </div>
                    </div>
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


/* ==================== header part start ==================== */
/* ==================== nav part start ==================== */



/* ==================== nav part end ==================== */

/* ==================== news-ticker part start ==================== */

.news-ticker-part {
    position: sticky;
    top: 70px;
    background: #000000;
    border-bottom: 2px solid #f77f00;
    z-index: 98;
}

.news-ticker-part .news-ticker{
    display: flex;
    padding: 12px;
    font-size: 18px;
}

.news-ticker-part .news-ticker-label {
    background: #000000;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
    color: #f77f00;
    border-right: 2px solid #f77f00;
    padding-right : 10px;
    width: 150px;
}

.news-ticker-part .news-ticker-box {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
}

.news-ticker-part .news-ticker-box .news-ticker-list {
    animation: news-ticker-list 30s linear infinite;
}

.news-ticker-part .news-ticker-box .news-ticker-list table tbody{
    display : flex;
    color : #ffffff;
}

.news-ticker-part .news-ticker-box .news-ticker-list a {
    font-family: 'Josefin Sans', sans-serif;
    color: #ffffff;
    margin: 0 10px;
}

.news-ticker-part .news-ticker-box .news-ticker-list table tbody th,
.news-ticker-part .news-ticker-box .news-ticker-list table tbody .td2{
    display : none;
}

.news-ticker-part .news-ticker-box:hover .news-ticker-list {
    animation-play-state: paused;
}

@keyframes news-ticker-list {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

/* ==================== news-ticker part end ==================== */
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



// responsive
var style = document.createElement('style');
style.innerHTML = `
@media (min-width: 300px) and (max-width: 435.98px) {
    .title h1 {
        padding: 10px 0 !important;
        font-size: 40px !important;
    }

    .header-part {
        padding: 10px !important;
    }

    .header-part .header .left,
    .header-part .header .right{
        flex: 0 0 auto;
        width: 17%;
    }

    .header-part .header .middle{
        flex: 0 0 auto;
        width: 66%;
        padding: 0;
    }

    .header-part .header img {
        width: 100% !important;
    }

    .header-part .header .middle h2 {
        font-size: 5vw;
    }

    .header-part .header .middle .button {
        margin-top: 5px;
    }

    .header-part .header .middle a {
        font-size: 12px !important;
        padding: 0 2px !important;
        margin: 0 !important;
    }

    .navbar-toggler-icon,
    .navbar button {
        display: none;
    }

    .collapse:not(.show) {
        display: flex;
    }

    .navbar-nav{
        flex-direction: row;
    }

    nav ul li {
        text-align: center;
        margin: 0 !important;
    }

    nav ul li .nav-link {
        font-size: 2.5vw !important;
        padding: 3px;
    }

    nav ul li .dropdown-menu {
        position: absolute !important;
        margin-top: 0px !important;
        --bs-dropdown-min-width: 5rem;
    }

    nav ul li .drop .drop-item,
    nav ul li .dropdown-menu a {
        font-size: 2.5vw !important;
    }

    .news-ticker-part {
        top: 20px;
    }

    .news-ticker-part .news-ticker {
        padding: 0;
        font-size: 3vw;
    }

    .news-ticker-part .news-ticker-label,
    .news-ticker-part .news-ticker-box .news-ticker-list {
        padding: 5px;
        padding-left: 0;
    }

    .news-ticker-part .news-ticker-label{
        width: 30vw;
    }

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

@media (min-width: 435px) and (max-width: 575.98px) {
    .title h1 {
        padding: 10px 0 !important;
        font-size: 40px !important;
    }

    .header-part {
        padding: 10px !important;
    }

    .header-part .header .left,
    .header-part .header .right{
        flex: 0 0 auto;
        width: 17%;
    }

    .header-part .header .middle{
        flex: 0 0 auto;
        width: 66%;
        padding: 0;
    }

    .header-part .header img {
        width: 100% !important;
    }

    .header-part .header .middle h2 {
        font-size: 5vw;
    }

    .header-part .header .middle .button {
        margin-top: 5px;
    }

    .header-part .header .middle a {
        font-size: 12px !important;
        padding: 0 2px !important;
        margin: 0 !important;
    }

    .navbar-toggler-icon,
    .navbar button {
        display: none;
    }

    .collapse:not(.show) {
        display: flex;
    }

    .navbar-nav{
        flex-direction: row;
    }

    nav ul li {
        text-align: center;
        margin: 0 !important;
    }

    nav ul li .nav-link {
        font-size: 2.5vw !important;
        padding: 3px;
    }

    nav ul li .dropdown-menu {
        position: absolute !important;
        margin-top: 0px !important;
        --bs-dropdown-min-width: 5rem;
    }

    nav ul li .drop .drop-item,
    nav ul li .dropdown-menu a {
        font-size: 2.5vw !important;
    }

    .news-ticker-part {
        top: 24px;
    }

    .news-ticker-part .news-ticker {
        padding: 0;
        font-size: 3vw;
    }

    .news-ticker-part .news-ticker-label,
    .news-ticker-part .news-ticker-box .news-ticker-list {
        padding: 5px;
        padding-left: 0;
    }

    .news-ticker-part .news-ticker-label{
        width: 30vw;
    }

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
    .title h1 {
        padding: 10px 0 !important;
        font-size: 50px !important;
    }

    .header-part .header .left,
    .header-part .header .right{
        flex: 0 0 auto;
        width: 17%;
    }

    .header-part .header .middle{
        flex: 0 0 auto;
        width: 66%;
        padding: 0;
    }

    .header-part .header img {
        width: 100% !important;
    }

    .header-part .header .middle h2 {
        font-size: 30px;
    }

    .header-part .header .middle .button {
        margin-top: 5px;
    }

    .header-part .header .middle a {
        font-size: 14px !important;
        padding: 2px 10px !important;
        margin: 0 !important;
    }

    .navbar-toggler-icon,
    .navbar button {
        display: none;
    }

    .collapse:not(.show) {
        display: flex;
    }

    .navbar-nav{
        flex-direction: row;
    }

    nav ul li {
        text-align: center;
        margin: 0 !important;
    }

    nav ul li .nav-link {
        font-size: 16px !important;
        padding: 3px;
    }

    nav ul li .dropdown-menu {
        position: absolute !important;
        margin-top: 0px !important;
        --bs-dropdown-min-width: 5rem;
    }

    nav ul li .drop .drop-item,
    nav ul li .dropdown-menu a {
        font-size: 16px !important;
    }

    .news-ticker-part {
        top: 24px;
    }

    .news-ticker-part .news-ticker {
        padding: 0;
        font-size: 16px;
    }

    .news-ticker-part .news-ticker-label,
    .news-ticker-part .news-ticker-box .news-ticker-list {
        padding: 5px;
        padding-left: 0;
    }

    .news-ticker-part .news-ticker-label{
        width: 30vw;
    }

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
    .title h1 {
        padding: 10px 0 !important;
        font-size: 60px !important;
    }

    .header-part .header .middle h2 {
        font-size: 40px;
    }

    .header-part .header .middle .button {
        margin-top: 15px;
    }

    .navbar-toggler-icon,
    .navbar button {
        display: none;
    }

    .collapse:not(.show) {
        display: flex;
    }

    .navbar-nav{
        flex-direction: row;
    }

    nav ul li {
        text-align: center;
        margin: 0 !important;
    }

    nav ul li .nav-link {
        font-size: 20px !important;
        padding: 10px;
    }

    nav ul li .dropdown-menu {
        position: absolute !important;
        margin-top: 0px !important;
        --bs-dropdown-min-width: 5rem;
    }

    nav ul li .drop .drop-item,
    nav ul li .dropdown-menu a {
        font-size: 16px !important;
    }

    .news-ticker-part {
        top: 24px;
    }

    .news-ticker-part .news-ticker {
        font-size: 16px;
    }

    .news-ticker-part .news-ticker-label,
    .news-ticker-part .news-ticker-box .news-ticker-list {
        padding: 5px;
        padding-left: 0;
    }

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