


<?php include_once "templates/html-header.php"; ?>


<div class="fs-wrapper fs-wrapper--active">

    <div class="fs-wrapper-looking-box fs-wrapper-looking-box__bg-lt"><div class="fs-wrapper fs-wrapper-inner fs-wrapper__bg-lt"></div></div>
    <div class="fs-wrapper-looking-box fs-wrapper-looking-box__bg-rt"><div class="fs-wrapper fs-wrapper-inner fs-wrapper__bg-rt"></div></div>
    <div class="fs-wrapper-looking-box fs-wrapper-looking-box__bg-rb"><div class="fs-wrapper fs-wrapper-inner fs-wrapper__bg-rb"></div></div>
    <div class="fs-wrapper-looking-box fs-wrapper-looking-box__bg-lb"><div class="fs-wrapper fs-wrapper-inner fs-wrapper__bg-lb"></div></div>

    <div data-page="main" class="js-page_switch js-page_switch--active js-page_switch fs-wrapper__inner-wrapper">
        <div id="parallax" class="parallax js-parralex">
            <h1 data-depth="0.6" class="parallax__floater parallax__floater--main-title fs-70">Hi I am Danny Huigen</h1>
            <h2 data-depth="0.4" class="parallax__floater parallax__floater--sub-title fs-40">A Dutch developer in the making</h2>
            <a data-depth="0.2" class="btn-1 btn-1--mix-blend js-contact-btn parallax__floater parallax__floater--contact fs-40"  alt="">
                <div class="btn-1__text-wrapper">
                    Contact me
                </div>
            </a>
            <img data-depth="0.4" class="parallax__floater parallax__floater--danny" src="images/danny-cutout.png" alt="">
            <a href="https://github.com/link3321/danny-portfolio" data-depth="0.4" class="no-link-style btn-1 btn-1--mix-blend parallax__floater parallax__floater--github fs-40"  alt="">
                <div class="btn-1__text-wrapper">
                    This project
                </div>
            </a>
            <div class="parallax__floater parallax__floater--background"  alt=""></div>
            <div class="parallax__floater parallax__floater--background-hider"  alt=""></div>
        </div>

        <ul class="secondary-menu">
            <li>
                <a href="" class="btn-round btn-round--active js-btn-round">
                    <span class="btn-round__text-popup btn-round__text-popup--active">
                        Disable animations
                    </span>
                    <span class="btn-round__text-popup btn-round__text-popup--unactive">
                        Enable animations
                    </span>
                </a>
            </li>
        </ul>
    </div>





    <div data-page="contact" class="js-page_switch js-page_switch--hidden js-page_switch fs-wrapper__inner-wrapper">
        <div class="center-box">
            <h1 class="center-text break-all fs-70">Danny Michael Huigen</h1>
            <a class="center-text break-all btn-2 fs-60 mt-50" href="mailto:dannyhuigenzakelijk@gmail.com" >DannyHuigenZakelijk@gmail.com</a>
            <div class="even-wrapper">
                <a  class="btn-1 js-main-btn btn-1--mix-blend fs-40 mt-50"  alt="">
                    <div class="btn-1__text-wrapper">
                        Main page
                    </div>
                </a>
                <a class="center-text btn-2 no-link-style fs-40 mt-50" href="files/CV.docx">Download CV</a>
            </div>
        </div>

        <ul class="secondary-menu">
            <li>
                <a href="" class="btn-round btn-round--active js-btn-round">
                    <span class="btn-round__text-popup btn-round__text-popup--active">
                        Disable animations
                    </span>
                    <span class="btn-round__text-popup btn-round__text-popup--unactive">
                        Enable animations
                    </span>
                </a>
            </li>
        </ul>
    </div>
</div>

<div class="fullscreen-message">
    <p class="fs-40">
        You are trying to view this site on a browser that is not able to handle this site,<br>
        I haven't taken the time yet to fix the site for your browser.<br><br>
        For now please use an other browser (Chrome recommended).
    </p>
</div>


<?php include_once "templates/html-footer.php"; ?>