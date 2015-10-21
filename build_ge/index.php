<!DOCTYPE html>
<html>



<head>
  <title>TaxiTube</title>
  <meta property="og:image" content="http://taxitube.io/images/fbshare.jpg" />

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <meta name="description" content="Mobile and dynamic media platform for location based real-time advertising" />
  <link rel="shortcut icon" type="image/png" href="favicon.png" />

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <!-- CSS Files comes here -->
  <link rel="stylesheet" href="css/bootstrap.min.css?rev=9bfccb7a2a6f8669d330b4b13ec505e4" media="screen" title="no title" charset="utf-8">
  <link rel="stylesheet" href="css/bundle.css?rev=8ab2099724c19dea48db869c4cd7b944" media="screen" title="no title" charset="utf-8">
  <link rel="stylesheet" href="css/main.css?rev=9ea0172ce7b1c9f4dc3a8adf2a0e038e" media="screen" title="no title" charset="utf-8">
  <link rel="stylesheet" href="css/stylesheet.css?rev=2abbe795e18df80121be989c1b3ba2f5" media="screen" title="no title" charset="utf-8">
  <script src="js/modernizr.custom.js?rev=1763e85b2ad240dc2ccc16998693c354"></script>


  <!-- Facebook Pixel Code -->
  <div id="fb-root"></div>
  <script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_EN/sdk.js#xfbml=1&version=v2.5&appId=1458941301081186";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script>
  <!-- End Facebook Pixel Code -->
</head>
  <body>
    <div id="fb-root"></div>
    <script>
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=1458941301081186";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
    <!-- Modal -->
    <?php include('careers.php'); ?>
      <!-- Mobile nav -->
      <div class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s2">
        <div class="mobile_nav_close_button">
          <a href="" id="hideRight">
            <div class="button_icon close_icon"></div><i class="fa fa-bars"></i></a>
        </div>
        <div id="mobile_lang">
          <img src="images/flags/en.png" height="48" id="en" width="48" class="lang" alt="">
          <img src="images/flags/ge.png" height="24" id="ge" width="24" class="lang" alt="">
        </div>
        <nav id="mobile_menu_content">
          <a href="#home" class="translate" key="home">მთავარი</a>
          <a href="#more_info" class="translate" key="services">სერვისები</a>
          <a href="#feature3" class="translate" key="privilegies">უპირატესობები</a>
          <a href="#about_video" class="translate" key="coming_soon">პროგრამული უზრუნველყოფა</a>
          <!-- <a href="#screenshots" >Screenshots</a> -->
          <!--  <a href="#pricing" >Pricing</a>
                <a href="#team" >Team</a> -->
          <!--  <a href="#cta_download" >Download</a> -->
          <a href="#contact" class="translate" key="contact">კონტაქტი</a>
          <a href="#scala" key="career" class="translate" data-toggle="modal" data-target="#myModal">შემოგვიერთდით</a>
        </nav>
      </div>

      <!-- //Mobile nav -->
      <div id="preloader_container">
        <!-- Preloader Screen -->
        <header class="preloader_header">
          <div class="preloader_loader">
            <svg class="preloader_inner" width="60px" height="60px" viewBox="0 0 80 80">
              <path class="preloader_loader_circlebg" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" stroke="yellow" />
              <path id="preloader_loader_circle" class="preloader_loader_circle" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" stroke="yellow" />
            </svg>
          </div>
        </header>

        <section class="hero_fullscreen background_video menu_bar-waypoint" data-animate-down="menu_bar-hide" data-animate-up="menu_bar-hide" id="home">
          <!-- Logo and navigation -->
          <div id="polyglotLanguageSwitcher">
            <img src="images/flags/en.png" id="en" class="lang" alt="">
            <img src="images/flags/ge.png" id="ge" class="lang" alt="">
          </div>
          <div class="container top_bar">
            <div class="row col-md-12 col-lg-12">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center home_anim1">
                <img src="images/logo.png" alt="logo" class="logo_home" />
              </div>
            </div>
          </div>
          <!-- Main content -->
          <div class="container align-center" id="main_content">
            <div class="content_container row">
              <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 home_content">
                <div class="available_area home_anim2">
                  <h2 class="slogan home_anim3" id="slogan">Medium IS the Message</h2>
                  <h6 class="translate " key="home_text">Deliver right message:
                    <span class="typing-text translate" key="typing_text"></span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="moving-arrow">
            <img src="images/arrow-down.png" height="38" width="38" alt="">
          </div>
          <!-- Video Background -->
          <div id="maximage_video">
            <video autoplay="autoplay" loop="loop" muted="muted" width="896" height="504">
              <!--  <source src="video/video.mp4" type="video/mp4" /> -->
              <source src="video/video.webm" type="video/webm" />
              <!--  <source src="video/video.ogv" type="video/ogg" /> -->
            </video>
          </div>
        </section>
        <!-- Menu bar -->
        <header id="menu_bar" class="menu_bar">
          <div class="container">
            <a href="" class="go_to_home logo_dark logo">
              <img src="images/logo_dark.png" alt="logo" id="logo-home" />
            </a>
            <nav class="menu_bar_navigation">
              <ul>
                <li class="visible-lg visible-md"><a href="#more_info" class="go_to_overview translate" key="services">სერვისები</a></li>
                <li class="visible-lg visible-md"><a href="#feature3" class="translate" key="privilegies">უპირატესობები</a></li>
                <li class="visible-lg visible-md"><a href="#about_video" class="translate" key="coming_soon">პროგრამული უზრუნველყოფა</a></li>
                <li class="visible-lg visible-md"><a href="#contact" class="translate" key="contact">კონტაქტი</a></li>
                <!-- <li class="visible-lg visible-md"><a href="#screenshots" >Software</a></li> -->
                <!-- <li class="visible-lg visible-md"><a href="#pricing" >Pricing</a></li>
                            <li class="visible-lg visible-md"><a href="#team" >Team</a></li> -->
                <li class="visible-lg visible-md "><a  onclick="javascript:location.href='http://taxitube.io/blog'"><button type="button" class="btn btn-warning blog-menu translate"  key="blog">ბლოგი</button></a></li>
                <li class="visible-lg visible-md " style="margin-right:25px;">
                  <a href="#scala" data-toggle="modal" id="career-menu" data-target="#myModal">
                    <button type="button" key="career" class="btn btn-warning career-menu translate">შემოგვიერთდით</button>
                  </a>
                </li>


                <li class="hidden-lg hidden-md">
                  <div class="mobile_nav_open_button ">
                    <a href="" id="showRight">
                      <div class="button_icon close_icon"></div><i class="fa fa-bars"></i></a>
                  </div>
                </li>
                <li class="visible-lg visible-md">
                  <img src="images/flags/en.png" height="24" id="en" width="24" class="lang  menu-lang" alt="">
                </li>
                <li class="visible-lg visible-md">
                  <img src="images/flags/ge.png" height="24" id="ge" width="24" class="lang menu-lang" alt="">
                </li>
              </ul>

            </nav>
          </div>

        </header>
        <!-- More Info #################### -->
        <section id="more_info" class="subsection background_color1">
          <div class="menu_bar-waypoint" data-animate-down="menu_bar-show" data-animate-up="menu_bar-hide">
          </div>
          <div class="container">
            <!-- INTRO -->
            <div class="row services" style="margin-top:50px">
              <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 align-center ">
                <div class="feature_content">
                  <div class="iconbox_icon icon_rounded"><i class="fa fa-play-circle fa-sm"></i></div>
                  <p class="translate" key="creative">კრეატიული, თანამედროვე და მოძრავი მაუწყებლობა თბილისის ქუჩებში</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 align-center">
                <div class="feature_content">
                  <div class="iconbox_icon icon_rounded"><i class="fa fa-users fa-sm"></i></div>
                  <p class="translate" key="audiens">დაუმიზნე შენი გზავნილი ზუსტ აუდიტორიას სასურველ დროსა და ადგილას</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 align-center">
                <div class="feature_content">
                  <div class="iconbox_icon icon_rounded"><i class="fa fa-bar-chart fa-sm"></i></div>
                  <p class="translate" key="statistic">შეაფასე რეკლამის ეფექტურობა სანდო სტატისტიკაზე დაყრდნობით</p>
                </div>
              </div>
            </div>
            <div class="row " style="border-bottom: solid 0px rgba(0,0,0,0.1); margin-bottom:4px; padding-bottom: 60px;">
              <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 align-center ">
                <div class="feature_content">
                  <div class="iconbox_icon icon_rounded"><i class="fa fa-usd fa-sm"></i></div>
                  <p class="translate" key="budget">განათავსე რეკლამა მარტივად და მართე სარეკლამო ბიუჯეტი</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 align-center">
                <div class="feature_content">
                  <div class="iconbox_icon icon_rounded"><i class="fa fa-calendar fa-sm"></i></div>
                  <p class="translate" key="real_time">მართე კამპანია რეალურ დროში</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 align-center">
                <div class="feature_content">
                  <div class="iconbox_icon icon_rounded"><i class="fa fa-life-ring fa-sm"></i></div>
                  <p class="translate" key="online">მიიღე ონლაინ მხარდაჭერა</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Feature 1 - right image -->
        <section>

          <div class="row" id="feature1">
            <div class="col-md-12">
              <p id="hiddenText">A medium defines the form and scale of a message and shapes its very meaning.Truly, the Medium is the Message.</p>
            </div>
          </div>
        </section>
        <!-- Feature 2 - left image -->

        <section id="more_info" class="subsection background_color1">
          <div class="container">
            <div class="row feature_box_center" id="feature3" style="border-bottom: solid 0px rgba(0,0,0,0.1);">
              <div class="container" style="padding-top: 3rem;">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center more_info_anim1" >
                  <h3 class="translate three-in-one" key="privilegies-text">3/1-ში ინტეგრირებული მარკეტინგული არხი:</h3>
                  <b class="translate three-in-one" key="privilegies-bold" style="font-family:'studio'; color:#CE5759;letter-spacing: 1px;">გარე, ციფრული, მოძრავი</b>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-center visible-xs visible-sm more_info_anim6 animated fadeInUp">
                <div class="feature_image">
                  <img src="images/mockups/mobile-car.png" alt="" class="img_responsive">
                </div>
              </div>
              <!-- Content - left column -->
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3  feature_box_center_content_row">
                <div class="row">
                  <div class="col-xs-12 col-sm-4 col-md-12 col-lg-12 more_info_anim7">
                    <div class="feature_content privilegies">
                      <ul>
                        <li class="mobile-font">
                          <h6 class="translate" key="screen">ეკრანი:</h6>
                          <p class="translate" key="privilegies1">თვისობრივად გაუმჯობესებული ბრენდი მკვეთრი ფერებით</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4 col-md-12 col-lg-12 more_info_anim8">
                    <div class="feature_content privilegies">
                      <ul>
                        <li>
                          <h6 class="translate" key="view">ხილვადობა:</h6>
                          <p class="translate" key="privilegies3">თანაბრად მნათი დღისითა და ღამით</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4 col-md-12 col-lg-12 more_info_anim8">
                    <div class="feature_content privilegies">
                      <ul>
                        <li>
                          <h6 class="translate" key="targeting">გეო ტარგეთინგი:</h6>
                          <p class="translate" key="privilegies4">აუდიტორიის ტარგეტირება ზონის, უბნისა და ქუჩის მიხედვითაც კი</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>





              <!-- Image - destop display -->
              <div class="col-xs-6 col-sm-12 col-md-6 col-lg-6 align-center visible-md visible-lg more_info_anim6">
                <!-- Jssor Slider End -->
                <div class="feature_image" style="margin-bottom:0px; padding-bottom:0; margin-top: -70px;">
                  <div id="slider1_container">
                      <!-- Slides Container -->
                      <div u="slides" class="slider_imgs" style="">
                          <div><a href="https://www.facebook.com/TaxiTube-726925770786146/timeline/?ref=ts" target="_blank"><img u="image" alt="sufta saxli" src="images/slider/slider1.png" /></a></div>
                          <div><a href="https://www.facebook.com/suptasaxli?fref=ts" target="_blank"><img u="image" alt="sufta saxli" src="images/slider/slider2.png" /></a></div>
                      </div>
                  </div>
                  <img src="images/mockups/car.png" alt="" class="img_responsive car" style="position:relative">
                </div>
              </div>
              <!-- //Image - destop display -->







              <!-- Content - right column -->
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 feature_box_center_content_row">
                <div class="row">
                  <div class="col-xs-12 col-sm-4 col-md-12 col-lg-12 more_info_anim9">
                    <div class="feature_content privilegies">
                      <ul>
                        <li>
                          <h6 class="translate" key="moving">დინამიკა:</h6>
                          <p class="translate" key="privilegies2">მაუწყებლობა დროსა და სივრცეში</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4 col-md-12 col-lg-12 more_info_anim10">
                    <div class="feature_content privilegies">
                      <ul>
                        <li>
                          <h6 class="translate" key="real_timing">ანგარიშსწორება რეალურ დროში:</h6>
                          <p class="translate" key="privilegies5">მოქნილი, სრაფი და მაღალი სიზუსტის გადახდის სისტემა</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4 col-md-12 col-lg-12 more_info_anim10">
                    <div class="feature_content privilegies">
                      <ul>
                        <li>
                          <h6 class="translate" key="campagnes">კამპანიები:</h6>
                          <p class="translate" key="privilegies6">მიზნობრივი მესიჯის დროსა და სივრცეში მიწოდების საუკეთესო საშუალება</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- //More info -->
        <!-- About - Video #################### -->
        <section id="about_video" class="subsection background_color1">
          <div class="container">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center about_video_anim1 ">
              <div class="intro">
                <h3 class="translate" key="coming_soon">პროგრამული უზრუნველყოფა</h3>
                <!-- <h5>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, tota aperiam.</h5> -->
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center about_video_anim2">
              <div class="screen-information">
                <img src="images/mockups/screen.jpg" alt="" class="">
                <div class="row information">
                  <div id="information1">
                    <span class="screen-number">1</span>
                    <span class="av-image-hotspot-pulse"></span>
                    <p class="information-text translate" key="info-text1">მომხმარებლის რეგისტრაცია და ანგარიშის შექმნა</p>
                  </div>
                  <div id="information2">
                    <span class="screen-number">2</span>
                    <span class="av-image-hotspot-pulse"></span>
                    <p class="information-text2 translate" key="info-text2">სარეკლამო მასალის ატვირთვა და რედაქტირება</p>
                  </div>
                  <div id="information3">
                    <span class="screen-number">3</span>
                    <span class="av-image-hotspot-pulse"></span>
                    <p class="information-text3 translate" key="info-text3">სარეკლამო კამპანიის შექმნა და მართვა</p>
                  </div>
                  <div id="information4">
                    <span class="screen-number">4</span>
                    <span class="av-image-hotspot-pulse"></span>
                    <p class="information-text4 translate" key="info-text4">ბიუჯეტის დაგეგმვა და კონტროლი</p>
                  </div>
                  <div id="information5">
                    <span class="screen-number">5</span>
                    <span class="av-image-hotspot-pulse"></span>
                    <p class="information-text5 translate" key="info-text5">მუდმივად განახლებადი სტატისტიკური მონაცემების მიღება</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container information-mob-text" style="margin-top:15px;">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center about_video_anim3">
                <div class="feature_content">
                  <div class="iconbox_icon icon_rounded"><i class="fa fa-user"></i></div>
                  <p class="translate" key="info-text1">მომხმარებლის რეგისტრაცია და ანგარიშის შექმნა</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center about_video_anim4">
                <div class="feature_content">
                  <div class="iconbox_icon icon_rounded"><i class="fa fa-pencil"></i></div>
                  <p class="translate" key="info-text2">სარეკლამო მასალის ატვირთვა და რედაქტირება</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center about_video_anim5">
                <div class="feature_content">
                  <div class="iconbox_icon icon_rounded"><i class="fa fa-plus"></i></i>
                  </div>
                  <p class="translate" key="info-text3">სარეკლამო კამპანიის შექმნა და მართვა</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center about_video_anim5">
                <div class="feature_content">
                  <div class="iconbox_icon icon_rounded"><i class="fa fa-credit-card"></i></i>
                  </div>
                  <p class="translate" key="info-text4">ბიუჯეტის დაგეგმვა და კონტროლი</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center about_video_anim5">
                <div class="feature_content">
                  <div class="iconbox_icon icon_rounded"><i class="fa fa-bar-chart"></i></div>
                  <p class="translate" key="info-text5">მუდმივად განახლებადი სტატისტიკური მონაცემების მიღება</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Screenshots #################### -->
        <section id="screenshots" class="subsection background_color2">
          <div class="container">
            <!-- INTRO -->
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center screenshots_anim1">
                <div class="intro">
                  <h3>SCREENSHOTS</h3>
                  <!-- <h5 class="translate" key="screenshots-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</h5> -->
                </div>
              </div>
            </div>
            <!-- screenshots gallery -->
            <div class="screenshots_gallery">
              <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 align-center screenshots_anim2">
                <div class="screenshot">
                  <a href="images/screenshots/1.png" data-lightbox-gallery="gallery1">
                    <img src="images/screenshots/1.png" class="img_responsive img-rounded_corner" alt="" width="528">
                  </a>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 align-center screenshots_anim3">
                <div class="screenshot">
                  <a href="images/screenshots/2.png" data-lightbox-gallery="gallery1">
                    <img src="images/screenshots/2.png" class="img_responsive img-rounded_corner" alt="" width="528">
                  </a>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 align-center screenshots_anim4">
                <div class="screenshot">
                  <a href="images/screenshots/3.png" data-lightbox-gallery="gallery1">
                    <img src="images/screenshots/3.png" class="img_responsive img-rounded_corner" alt="" width="528">
                  </a>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 align-center screenshots_anim4">
                <div class="screenshot">
                  <a href="images/screenshots/4.png" height="962" data-lightbox-gallery="gallery1">
                    <img src="images/screenshots/4.png" class="img_responsive img-rounded_corner" alt="" width="1366">
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- partners -->
        <!--  <section id="reviews_logos" class="subsection background_color1">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
                        <div class="intro">
                            <h3>პარტნიორები</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-3 col-xs-offset-3 col-sm-2 col-sm-offset-4 col-md-2 col-md-offset-4 reviews_logo ">
                        <a href="http://bankofgeorgia.ge/" target="blank"><img src="images/reviews_logos/logo1.png" alt=""></a>
                    </div>
                    <div class="col-xs-3  col-sm-2 col-sm-2 col-md-2  reviews_logo ">
                        <a href="https://www.facebook.com/suftasakhli" target="blank"><img src="images/reviews_logos/logo2.png" alt=""></a>
                    </div>
                </div>
            </div>
        </section> -->

        <!-- Contact #################### -->
        <section id="contact" class="subsection background_color2" style="padding-top: 4rem;">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7 contact_form_container contact_anim1">
                <h3 class="translate" key="contact_us">კონტაქტი</h3>
                <p></p>
                <!-- Contact Form -->


                <form action="send_mail.php" id="contact-form" method="post" autocomplete="off">
                  <div class="contact_form">
                    <div class="input-field">
                      <input id="first_name" type="text" name="first_name" required>
                      <label for="first_name" class="translate" key="contact_name">სახელი</label>
                    </div>
                    <div class="input-field">
                      <input id="contact_email" type="email" name="email" required>
                      <label for="contact_email" class="translate" key="contact_email">ელ. ფოსტა</label>
                    </div>
                    <div class="input-field">
                      <textarea class="materialize-textarea" name="message" required></textarea>
                      <label class="translate" key="contact_text">ტექსტი</label>
                    </div>
                  </div>

                  <button class="btn waves-effect btn-sm waves-light  ladda-button" data-style="expand-left" type="submit" data-spinner-color="#fff" name="submit">
                    <span class="ladda-label translate" key="contact_send">გაგზავნა</span>
                  </button>
                </form>
                <!-- Message container -->
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 contact_anim2">
                <h3 class="translate" key="contact_info">საკონტაქტო ინფორმაცია</h3>
                <p></p>
                <ul class="icon_list">
                  <li>
                    <div class="icon_small float-left"></div>
                    <h6 class="translate" key="contact_city"><i class="fa fa-map-marker fa-lg"> &nbsp;</i>თბილისი, ქსნის ქ. #36</h6>
                  </li>
                  <li>
                    <div class="icon_small float-left"></div>
                    <h6><i class="fa fa-phone fa-lg"> &nbsp;</i>(032) 2 24 24 60</h6>
                  </li>
                  <li>
                    <div class="icon_small float-left"></div>
                    <h6><i class="fa fa-envelope fa-md"> &nbsp;&nbsp; </i><a href="mailto:hello@taxitube.ge">hello@taxitube.io</a></h6>
                  </li>
                </ul>
                <div class="cta_button_area home_anim4">

                  <div>
                    <button class="btn facebook" onclick="window.open('https://www.facebook.com/pages/TaxiTubeio/726925770786146?fref=ts', '_blank');"><i class="fa fa-facebook"></i></button>
                    <button class="btn google" onclick="window.open('https://plus.google.com/101697010297557855127/posts', '_blank');"><i class="fa fa-google-plus"></i></button>
                    <button class="btn twitter" onclick="window.open('https://twitter.com/taxitube_io', '_blank');"><i class="fa fa-twitter"></i></button>
                    <button class="btn youtube" onclick="#', '_blank');"><i class="fa fa-youtube-play header-youtube"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- CTA #################### -->
        <!-- Footer #################### -->
        <section id="footer" class="subsection background_color2 ">
          <div id="map-container" class="col-md-12 .background_color1"></div>
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-12 col-lg-12 align-center">
                <!-- Social Icons -->
                <div class="social_icons_container align-center">
                  <div class="social_icons">
                    <ul>
                      <li>
                        <div class="social_icon facebook_icon" onclick="location.href='https://www.facebook.com/pages/TaxiTubeio/726925770786146?fref=ts'"><i class="fa fa-facebook"></i></div>
                      </li>
                      <li>
                        <div class="social_icon google_icon" onclick="location.href='https://plus.google.com/101697010297557855127/posts'"><i class="fa fa-google-plus"></i></div>
                      </li>
                      <li>
                        <div class="social_icon twitter_icon" onclick="location.href='https://twitter.com/taxitube_io'"><i class="fa fa-twitter"></i></div>
                      </li>
                      <li>
                        <div class="social_icon youtube_icon" onclick="location.href='#'"><i class="fa fa-youtube-play"></i></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="copyright-text">Copyright © 2015 Taxitube, <a href="http://taxitube.io">www.taxitube.io</a> </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- jQuery -->
      <script src="js/jquery-2.1.3.min.js?rev=e453929a196fa8eb2959c5dacddb10ae"></script>
      <!-- jQuery -->
      <script src="js/jquery-2.1.3.min.js?rev=e453929a196fa8eb2959c5dacddb10ae"></script>
      <!-- JavaScript plugins comes here -->
      <script src="js/functions.js?rev=796ce29c930c5671737d8116d7d7ec7f"></script>
      <!-- Waypoints -->
      <script src="js/waypoints.min.js?rev=4c2c4086c1530f5545b5e751de58d615"></script>
      <!-- Materialize -->
      <script src="js/materialize.js?rev=328dadc4b0e46aaa50bb44ee647a7e67"></script>
      <!-- Lightbox/Modalbox -->
      <script src="js/nivo-lightbox.min.js?rev=598bfffbc81cf1345c73eb79a5d62aaf"></script>
      <!-- Owl Carousel -->
      <script src="js/owl.carousel.js?rev=90e632e851882794588304e0d82501f5"></script>
      <!-- Main Js file -->
      <script src="js/main.js?rev=6337bbd78efb0ea78628412e16332ffa"></script>
      <!-- sendin email loader -->
      <script src="js/spin.min.js?rev=d1eb877dbb16bb225b442b0e62e52177"></script>
      <script src="js/ladda.min.js?rev=016a475dc1bbe0f0307a1d24a44ed6b3"></script>
      <!-- car logo silder -->
      <script src="js/jssor.slider.mini.js"></script>
      <script>
          jQuery(document).ready(function ($) {
              var options = {
                  $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                  $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                  $AutoPlayInterval: 0,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
                  $PauseOnHover: 4,                             //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1
                  $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
                  $SlideEasing: $JssorEasing$.$EaseLinear,          //[Optional] Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
                  $SlideDuration: 3500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                  $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                  $SlideWidth: 138,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                  //$SlideHeight: 100,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                  $SlideSpacing: -3, 					                //[Optional] Space between each slide in pixels, default value is 0
                  $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                  $ParkingPosition: 0,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                  $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                  $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
                  $DragOrientation: 1                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
              };

              var jssor_slider1 = new $JssorSlider$("slider1_container", options);

              //responsive code begin
              //you can remove responsive code if you don't want the slider scales while window resizes
              function ScaleSlider() {
                  var bodyWidth = document.body.clientWidth;
                  if (bodyWidth)
                      jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 138));
                  else
                      window.setTimeout(ScaleSlider, 30);
              }
              ScaleSlider();

              $(window).bind("load", ScaleSlider);
              $(window).bind("resize", ScaleSlider);
              $(window).bind("orientationchange", ScaleSlider);
              //responsive code end
          });
      </script>
      <!-- Jssor Slider Begin -->



      <!-- google map -->
      <script src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min.js"></script>
      <script src="http://maps.google.com/maps/api/js?sensor=false"></script>
      <script>
        function init_map() {
          var var_location = new google.maps.LatLng(41.7680468, 44.7849091, 20.25);
          var var_mapoptions = {
            center: var_location,
            zoom: 16,
            scrollwheel: false,
            disableDefaultUI: true,
            styles: [{
              "stylers": [{
                "visibility": "on"
              }, {
                "saturation": -100
              }, {
                "gamma": 0.54
              }]
            }, {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "water",
              "stylers": [{
                "color": "#4d4946"
              }]
            }, {
              "featureType": "poi",
              "elementType": "labels.icon",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [{
                "visibility": "simplified"
              }]
            }, {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [{
                "color": "#ffffff"
              }]
            }, {
              "featureType": "road.local",
              "elementType": "labels.text",
              "stylers": [{
                "visibility": "simplified"
              }]
            }, {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [{
                "color": "#ffffff"
              }]
            }, {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [{
                "gamma": 0.48
              }]
            }, {
              "featureType": "transit.station",
              "elementType": "labels.icon",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [{
                "gamma": 7.18
              }]
            }]
          };

          var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            icon: 'images/marker2.png',
            title: "taxitube",
          });

          var var_map = new google.maps.Map(document.getElementById("map-container"), var_mapoptions);
          var_marker.setMap(var_map);
        }
        google.maps.event.addDomListener(window, 'load', init_map);
      </script>


      <!-- // nice scroling, html{overflow: hidden}
        <script>
          // $(document).ready(function() {
          //   // $("html").niceScroll({
          //   //     cursorborder: "0px solid #fff",
          //   //     cursoropacitymax: 1,
          //   //     zindex: "10000000000000",
          //   //     scrollspeed: 60,
          //   //     mousescrollstep: 40
          //   // });
          //   });
        </script>
    -->

      <script>
        // Bind progress buttons and simulate loading progress
        Ladda.bind('.ladda-button', {
          callback: function(instance) {
            var inputTextarea = $('input, textarea');
            var progress = 0;
            var interval = setInterval(function() {
              progress = Math.min(progress + Math.random() * 0.1, 1);
              instance.setProgress(progress);

              if (progress === 1) {
                instance.stop();
                clearInterval(interval);
                inputTextarea.val('');
              }
            }, 200);
          }
        });
      </script>

      <!-- twiiter share button -->
      <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

      <!-- google share button -->

    <script src="https://apis.google.com/js/platform.js" async defer>
      {lang: 'en-GB'}
      </script>
  </body>

</html>
