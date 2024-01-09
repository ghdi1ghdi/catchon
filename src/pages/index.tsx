import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="format-detection" content="telephone=no" />
      <link
        rel="shortcut icon"
        href="https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Pavicon5355.png"
      />
      <link
        rel="icon"
        sizes="152x152"
        href="https://poc-cf-image.cjenm.com/crop/152x152/public/share/systemmng/site/sitemng/캐치온Pavicon5355.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        href="https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Pavicon5355.png"
      />
      <title>특급 영화 구독 서비스 CATCHON | CATCHON</title>
      <meta name="title" content="특급 영화 구독 서비스 CATCHON | CATCHON" />
      <meta
        name="description"
        content="특급 영화 구독 서비스 CATCHON | CATCHON"
      />
      <meta name="keywords" content="특급 영화 구독 서비스 CATCHON | CATCHON" />
      <link rel="canonical" href="https://catchon.cjenm.com/ko/" />
      <meta property="og:url" content="https://catchon.cjenm.com/ko/" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta
        property="og:image"
        content="https://poc-cf-image.cjenm.com/crop/undefinedxundefined/publicundefined"
      />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
      <meta
        name="twitter:image"
        content="https://poc-cf-image.cjenm.com/crop/undefinedxundefined/publicundefined"
      />
      <meta
        name="viewport"
        id="viewport"
        content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0"
      />
      <meta name="apple-mobile-web-app-title" content="" />
      <meta name="next-head-count" content={22} />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link
        rel="stylesheet"
        href="https://poc-cf-image.cjenm.com/public/resources/MC010012/css/library/csslibrary.css?v=240108224446"
      />
      <link
        rel="stylesheet"
        href="https://poc-cf-image.cjenm.com/public/resources/MC010012/css/common_pub.css?v=240108224446"
      />
      <link
        rel="stylesheet"
        href="https://poc-cf-image.cjenm.com/public/resources/MC010012/css/section_etc_1.css?v=240108224446"
      />
      <link
        rel="preload"
        href="/_next/static/css/24c74972e3d3009f.css"
        as="style"
      />
      <link
        rel="stylesheet"
        href="/_next/static/css/24c74972e3d3009f.css"
        data-n-p=""
      />
      <noscript data-n-css="" />
      <style
        id="__jsx-1614150551"
        dangerouslySetInnerHTML={{
          __html:
            ".header.gnb_mode-color,.header.gnb_mode-color .logo_mb-panel .area-inner{background-color:rgba(30, 26, 35, 1);}.header.gnb_mode-color .util-area span,.is_pc .header.gnb_mode-color .gnb-list span,.is_pc .header.gnb_mode-color .gnb-list i::before,.is_pc .header.gnb_mode-color .logo-area i::before,.header.gnb_mode-color .area-inner .mb_ui i::before{color:#FFFFFF !important;}.header.gnb_mode-color .util-area .util_info-list+.util_member-list::before{background-color:#FFFFFF !important;}.header .gnb-area ul.dep2-list>li:hover .dep2-txt i,.header .gnb-area ul.dep2-list>li.hover .dep2-txt i,.header .gnb-area ul.dep2-list>li.active .dep2-txt i,.header .gnb-area ul.dep2-list>li:hover .dep2-txt span,.header .gnb-area ul.dep2-list>li.hover .dep2-txt span,.header .gnb-area ul.dep2-list>li.active .dep2-txt span,.header .mypage-wrap .mypage-sub .list li:hover span,.header .mypage-wrap .mypage-sub .list li:active span{color:#5500a0!important;}.header .mypage-wrap .mypage-sub .list li span{color:#000000 !important;}",
        }}
      />
      <style
        id="__jsx-1958759980"
        dangerouslySetInnerHTML={{
          __html:
            ".header .gnb-area .nav-panel ul.gnb-list>li:hover .dep1-txt span,.header .gnb-area .nav-panel ul.gnb-list>li.hover .dep1-txt span,.header .gnb-area .nav-panel ul.gnb-list>li.active .dep1-txt span,.header .gnb-area .nav-panel ul.gnb-list>li:hover .dep1-txt i::before,.header .gnb-area .nav-panel ul.gnb-list>li.hover .dep1-txt i::before,.header .gnb-area .nav-panel ul.gnb-list>li.active .dep1-txt i::before{color:#5500a0;}.header .gnb-area ul.dep2-list>li:hover .dep2-txt span,.header .gnb-area ul.dep2-list>li.hover .dep2-txt span,.header .gnb-area ul.dep2-list>li.active .dep2-txt span,.header .gnb-area ul.dep2-list>li:hover .dep2-txt i,.header .gnb-area ul.dep2-list>li.hover .dep2-txt i,.header .gnb-area ul.dep2-list>li.active .dep2-txt i{color:#5500a0;}",
        }}
      />
      <style
        id="__jsx-2828724501"
        dangerouslySetInnerHTML={{
          __html:
            ".MC010715_MC021206-16490 .content_tab-area .content_tab-list li span{color:#FFFFFF;}.MC010715_MC021206-16490 .content_tab-area .content_tab-list li.active span{color:#5500a0;}.MC010715_MC021206-16490 .content_tab-area .left_arrow-box{background:linear-gradient( 90deg, #1e1a23 33.9%, rgba(30, 26, 35,0.752762) 60.27%, rgba(30, 26, 35,0) 80.28% );}.MC010715_MC021206-16490 .content_tab-area .right_arrow-box{background:linear-gradient( 270deg, #1e1a23 33.9%, rgba(30, 26, 35,0.752762) 60.27%, rgba(30, 26, 35,0) 80.28% );}.MC010715_MC021206-16490 .select2-dropdown.select2_round.theme-dark{background-color:#1e1a23;}.MC010715_MC021206-16490 .select2-dropdown.select2_round.theme-dark .select2-results .select2-results__option[aria-selected]{background-color:#1e1a23;}.MC010715_MC021206-16490 .select2-dropdown.select2_round.theme-dark .select2-results .select2-results__option[aria-selected='true']{background-color:rgba(30, 26, 35,0.05);}.MC010715_MC021206-16490 .content_tab-area .content_tab-list.type2 li.active a{background:#5500a0;border-color:#5500a0;}.MC010715_MC021206-16490 .content_tab-area .content_tab-list.type2 li.active span{color:#fff;}.MC010715_MC021206-16490 .theme-dark.sort_type_sub-tab .content_tab-area .left_arrow-box{background:linear-gradient( 90deg, #1d1d22 33.9%, rgba(29,29,34,0.752762) 60.27%, rgba(29,29,34,0) 80.28% );}.MC010715_MC021206-16490 .theme-dark.sort_type_sub-tab .content_tab-area .right_arrow-box{background:linear-gradient( 270deg, #1d1d22 33.9%, rgba(29,29,34,0.752762) 60.27%, rgba(29,29,34,0) 80.28% );}",
        }}
      />
      <style
        id="__jsx-541370242"
        dangerouslySetInnerHTML={{
          __html:
            ".info_adult_sm.jsx-541370242 .icon_adult.jsx-541370242{width:48px;height:48px;margin-bottom:0px;}.info_adult_sm.jsx-541370242 .info_txt.jsx-541370242{font-weight:500;font-size:3px;line-height:25px;}",
        }}
      />
      <style
        id="__jsx-3757877796"
        dangerouslySetInnerHTML={{
          __html:
            "#footer .inner.theme-dark .breadcrumb-wrap{background-color:#1e1a23 !important;}#footer .inner.theme-light .breadcrumb-wrap{background-color:#1e1a23 !important;}#footer .breadcrumb-wrap ul .bc_link:hover,#footer .breadcrumb-wrap ul .bc_link:hover span,#footer .breadcrumb-wrap ul .bc_link a{color:#5500a0 !important;}.content-panel>.panel-header .title-main .spf::before{color:#5500a0;}",
        }}
      />
      <div id="__next">
        <div id="ST000012" className="wrapper">
          <header className="jsx-1614150551">
            <div
              id="header"
              className="jsx-1614150551 header gnb_type-left gnb_mode-color"
            >
              <div className="jsx-1614150551 inner">
                <div className="util-area">
                  <ul className="util_member-list ">
                    <li>
                      <a href="/ko/signin/" className="" target="_self" rel="">
                        <span>로그인</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/ko/account/register/"
                        className=""
                        target="_self"
                        rel=""
                      >
                        <span>회원가입</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="jsx-1614150551 logo-area">
                  <div className="jsx-1614150551 area-inner">
                    <div className="jsx-1614150551 logo">
                      <a href="/ko/" className="jsx-1614150551">
                        <i className="jsx-1614150551">
                          <img
                            src="https://poc-cf-image.cjenm.com/resize/340x76/public/share/systemmng/site/gnbmng/catchonLogolmg.png"
                            alt="CATCHON logo"
                            id=""
                            className=""
                          />
                        </i>
                      </a>
                    </div>
                    <div className="jsx-1614150551 mb_ui">
                      <a
                        href="#"
                        className="jsx-1614150551 js-gnb_menu_open-mb"
                      >
                        <i className="jsx-1614150551 spf spf-gnb_menu_open" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="jsx-1958759980 gnb-area js-gnb_area">
                  <div className="jsx-1958759980 logo_mb-panel">
                    <div className="jsx-1958759980 area-inner">
                      <div className="jsx-1958759980 logo">
                        <a href="/ko/" className="jsx-1958759980">
                          <i className="jsx-1958759980">
                            <img
                              src="https://poc-cf-image.cjenm.com/resize/340x76/public/share/systemmng/site/gnbmng/catchonLogolmg.png"
                              alt="CATCHON logo"
                              id=""
                              className=""
                            />
                          </i>
                        </a>
                      </div>
                      <div className="jsx-1958759980 mb_ui">
                        <a
                          href="#"
                          className="jsx-1958759980 js-gnb_menu_close-mb"
                        >
                          <i className="jsx-1958759980 spf spf-gnb_menu_close" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="util_mb-panel">
                    <div className="panel-inner">
                      <div className="scroll_system-type">
                        <ul className="util_member-list ">
                          <li>
                            <a
                              href="/ko/signin/"
                              className=""
                              target="_self"
                              rel=""
                            >
                              <span>로그인</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/ko/account/register/"
                              className=""
                              target="_self"
                              rel=""
                            >
                              <span>회원가입</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <nav className="jsx-1958759980 nav-panel js-main_nav_gnb">
                    <div className="jsx-1958759980 gnb-wrap">
                      <ul className="jsx-1958759980 gnb-list">
                        <li
                          data-click="true"
                          className="jsx-1958759980 sub_none"
                        >
                          <div className="jsx-1958759980 dep1-txt">
                            <a
                              href="/ko/about-catchon/"
                              className=""
                              target="_self"
                              rel=""
                            >
                              <span className="jsx-1958759980">
                                About CatchOn
                              </span>
                            </a>
                          </div>
                        </li>
                        <li
                          data-click="true"
                          className="jsx-1958759980 sub_none"
                        >
                          <div className="jsx-1958759980 dep1-txt">
                            <a
                              href="/ko/monthly-catchon/"
                              className=""
                              target="_self"
                              rel=""
                            >
                              <span className="jsx-1958759980">
                                월의 캐치온
                              </span>
                            </a>
                          </div>
                        </li>
                        <li
                          data-click="true"
                          className="jsx-1958759980 sub_none"
                        >
                          <div className="jsx-1958759980 dep1-txt">
                            <a
                              href="/ko/catchon1-schedule/"
                              className=""
                              target="_self"
                              rel=""
                            >
                              <span className="jsx-1958759980">편성표</span>
                            </a>
                          </div>
                        </li>
                        <li
                          data-click="true"
                          className="jsx-1958759980 sub_none"
                        >
                          <div className="jsx-1958759980 dep1-txt">
                            <a
                              href="/ko/videos/"
                              className=""
                              target="_self"
                              rel=""
                            >
                              <span className="jsx-1958759980">동영상</span>
                            </a>
                          </div>
                        </li>
                        <li
                          data-click="true"
                          className="jsx-1958759980 sub_none"
                        >
                          <div className="jsx-1958759980 dep1-txt">
                            <a
                              href="/ko/announcement/"
                              className=""
                              target="_self"
                              rel=""
                            >
                              <span className="jsx-1958759980">공지사항</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="jsx-1958759980 sub_dep-wrap">
                      <div className="jsx-1958759980 dep1-sub">
                        <div className="jsx-1958759980 under_bar" />
                        <div className="jsx-1958759980 sub-area">
                          <div className="jsx-1958759980 sub_dep_close">
                            <button className="jsx-1958759980 js-sub_dep_close">
                              <i className="jsx-1958759980 spf spf-gnb_menu_close_pc" />
                            </button>
                          </div>
                          <div className="jsx-1958759980 sub_items">
                            <div className="jsx-1958759980 sub_item" />
                            <div className="jsx-1958759980 sub_item" />
                            <div className="jsx-1958759980 sub_item" />
                            <div className="jsx-1958759980 sub_item" />
                            <div className="jsx-1958759980 sub_item" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="jsx-1958759980 sub_dep_mb-wrap ">
                      <div className="jsx-1958759980 logo_mb-panel">
                        <div className="jsx-1958759980 area-inner">
                          <div className="jsx-1958759980 mb_ui">
                            <a
                              href="#"
                              className="jsx-1958759980 js-gnb_back-mb"
                            >
                              <i className="jsx-1958759980 spf spf-gnb_back" />
                            </a>
                          </div>
                          <div className="jsx-1958759980 mb_title">
                            <span className="jsx-1958759980"> </span>
                          </div>
                        </div>
                      </div>
                      <div className="jsx-1958759980 dep1-sub">
                        <div className="jsx-1958759980 sub_items">
                          <div className="jsx-1958759980 sub_item" />
                          <div className="jsx-1958759980 sub_item" />
                          <div className="jsx-1958759980 sub_item" />
                          <div className="jsx-1958759980 sub_item" />
                          <div className="jsx-1958759980 sub_item" />
                        </div>
                      </div>
                    </div>
                    <div className="mb_mypage mypage-wrap">
                      <div className="logo_mb-panel">
                        <div className="area-inner">
                          <div className="mb_ui">
                            <a href="#" className="js-gnb_back-mb">
                              <i className="spf spf-gnb_back" />
                            </a>
                          </div>
                          <div className="mb_title">
                            <span>마이페이지</span>
                          </div>
                          <div className="mb_ui" />
                        </div>
                      </div>
                      <div className="mypage-sub">
                        <div className="sub-body">
                          <ul className="list">
                            <li>
                              <a href="/ko/mypage/">
                                <span>회원정보 변경</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <div id="container">
            <div id="contents" className="home">
              <section className="mode-inner page_title_menu-section">
                <div className="section-wrap" />
              </section>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n.big_banner-section .content-panel .big_banner-warp .swiper-slide.youtube_item.media_playing .video-area, .big_banner-section .content-panel .big_banner-warp .swiper-slide.video_item.media_playing .video-area {\ndisplay: block;\n}\n\n.big_banner-section .content-panel .big_banner-warp .swiper-slide.youtube_item.media_playing .banner_bg-area, .big_banner-section .content-panel .big_banner-warp .swiper-slide.video_item.media_playing .banner_bg-area {\nopacity: 0;\n}\n.big_banner-section .content-panel .big_banner-warp .swiper-slide.youtube_item.media_playing .banner_ui-area, .big_banner-section .content-panel .big_banner-warp .swiper-slide.video_item.media_playing .banner_ui-area {\ndisplay: none;\n}\n\n.video-area .player-container,\n.video-area .videos-wrap,\n.video-area .youtube-area {\nwidth:100%;\nheight:100%;\n}\n",
                }}
              />
              <section className="mode-full big_banner-section">
                <div
                  className="section-wrap"
                  style={{ marginTop: 0, marginBottom: 0 }}
                >
                  <div className="section-inner">
                    <div className="content-panel panel_type-Atype">
                      <div className="panel-body">
                        <div
                          className="big_banner-warp js-big_gallery_banner1"
                          style={{ display: "none" }}
                        >
                          <div
                            className="swiper-container gallery_center"
                            style={{
                              paddingTop: 10,
                              paddingBottom: 0,
                              backgroundColor: "#1e1a23",
                            }}
                          >
                            <div className="swiper-wrapper">
                              <div
                                className="swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={1}
                              >
                                <a
                                  href="https://catchon.cjenm.com/ko/about-catchon/"
                                  className=""
                                  target="_self"
                                  rel=""
                                >
                                  <div className="banner_bg-area">
                                    <div
                                      className="area-inner only-pc"
                                      style={{
                                        backgroundImage:
                                          'url("https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너1920x530_1693470740746.jpg?v=1694758528")',
                                        backgroundColor: "#000000",
                                      }}
                                    >
                                      <div className="area_height">
                                        <div className="lazyload-wrapper">
                                          <img
                                            src="https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너1920x530_1693470740746.jpg?v=1694758528"
                                            alt=""
                                            id=""
                                            className=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="area-inner only-mb"
                                      style={{
                                        backgroundImage:
                                          'url("https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너960x721_1693470740843.jpg?v=1694758528")',
                                        backgroundColor: "#000000",
                                      }}
                                    >
                                      <div className="area_height">
                                        <div className="lazyload-wrapper">
                                          <img
                                            src="https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너960x721_1693470740843.jpg?v=1694758528"
                                            alt=""
                                            id=""
                                            className=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div
                                className="swiper-slide"
                                data-swiper-slide-index={0}
                              >
                                <a
                                  href="https://catchon.cjenm.com/ko/monthly-catchon/"
                                  className=""
                                  target="_self"
                                  rel=""
                                >
                                  <div className="banner_bg-area">
                                    <div
                                      className="area-inner only-pc"
                                      style={{
                                        backgroundImage:
                                          'url("https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너1920x530_1703639591882.jpg?v=1703639592")',
                                        backgroundColor: "#000000",
                                      }}
                                    >
                                      <div className="area_height">
                                        <div className="lazyload-wrapper">
                                          <img
                                            src="https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너1920x530_1703639591882.jpg?v=1703639592"
                                            alt=""
                                            id=""
                                            className=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="area-inner only-mb"
                                      style={{
                                        backgroundImage:
                                          'url("https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너960x721_1703639592021.jpg?v=1703639592")',
                                        backgroundColor: "#000000",
                                      }}
                                    >
                                      <div className="area_height">
                                        <div className="lazyload-wrapper">
                                          <img
                                            src="https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너960x721_1703639592021.jpg?v=1703639592"
                                            alt=""
                                            id=""
                                            className=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div
                                className="swiper-slide"
                                data-swiper-slide-index={1}
                              >
                                <a
                                  href="https://catchon.cjenm.com/ko/about-catchon/"
                                  className=""
                                  target="_self"
                                  rel=""
                                >
                                  <div className="banner_bg-area">
                                    <div
                                      className="area-inner only-pc"
                                      style={{
                                        backgroundImage:
                                          'url("https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너1920x530_1693470740746.jpg?v=1694758528")',
                                        backgroundColor: "#000000",
                                      }}
                                    >
                                      <div className="area_height">
                                        <div className="lazyload-wrapper">
                                          <img
                                            src="https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너1920x530_1693470740746.jpg?v=1694758528"
                                            alt=""
                                            id=""
                                            className=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="area-inner only-mb"
                                      style={{
                                        backgroundImage:
                                          'url("https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너960x721_1693470740843.jpg?v=1694758528")',
                                        backgroundColor: "#000000",
                                      }}
                                    >
                                      <div className="area_height">
                                        <div className="lazyload-wrapper">
                                          <img
                                            src="https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너960x721_1693470740843.jpg?v=1694758528"
                                            alt=""
                                            id=""
                                            className=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div
                                className="swiper-slide swiper-slide-duplicate"
                                data-swiper-slide-index={0}
                              >
                                <a
                                  href="https://catchon.cjenm.com/ko/monthly-catchon/"
                                  className=""
                                  target="_self"
                                  rel=""
                                >
                                  <div className="banner_bg-area">
                                    <div
                                      className="area-inner only-pc"
                                      style={{
                                        backgroundImage:
                                          'url("https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너1920x530_1703639591882.jpg?v=1703639592")',
                                        backgroundColor: "#000000",
                                      }}
                                    >
                                      <div className="area_height">
                                        <div className="lazyload-wrapper">
                                          <img
                                            src="https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너1920x530_1703639591882.jpg?v=1703639592"
                                            alt=""
                                            id=""
                                            className=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="area-inner only-mb"
                                      style={{
                                        backgroundImage:
                                          'url("https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너960x721_1703639592021.jpg?v=1703639592")',
                                        backgroundColor: "#000000",
                                      }}
                                    >
                                      <div className="area_height">
                                        <div className="lazyload-wrapper">
                                          <img
                                            src="https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너960x721_1703639592021.jpg?v=1703639592"
                                            alt=""
                                            id=""
                                            className=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="gallery_ui-area">
                              <a href="#" className="button-prev">
                                <i className="spf spf-big_banner-arrow_l" />
                              </a>
                              <a href="#" className="button-next">
                                <i className="spf spf-big_banner-arrow_r" />
                              </a>
                              <div className="pagination" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="scheduler_brief-section"
                style={{ marginTop: 0, marginBottom: 0 }}
              >
                <div
                  className="section-wrap"
                  style={{
                    paddingTop: 90,
                    paddingBottom: 60,
                    backgroundColor: "#1e1a23",
                  }}
                >
                  <div className="section-inner">
                    <div className="content-panel js-program_brief_panel_1">
                      <div className="theme-dark panel-header">
                        <div className="header-inner">
                          <a
                            href="https://catchon.cjenm.com/ko/catchon1-schedule/"
                            className=""
                            target="_self"
                            rel=""
                          >
                            <div className="title-sub">
                              <span style={{ color: "#FFFFFF" }} />
                            </div>
                            <div className="title-main">
                              <span style={{ color: "#FFFFFF" }}>편성표</span>
                              <i className="spf spf-title_link-arrow" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="panel-body">
                        <div className="theme-dark scheduler_brief-wrap">
                          <div className="rowcol_scroll-rowslide js-rowcol_scroll">
                            <div className="rowslide-inner">
                              <div className="channel_scheduler-layout">
                                <div className="channel-area">
                                  <div className="channel-item">
                                    <a
                                      href="/ko/catchon1-schedule/"
                                      className="btn-channel_link"
                                      target="_self"
                                      rel=""
                                    >
                                      <div className="channel-inner">
                                        <div className="logo">
                                          <img
                                            src="https://poc-cf-image.cjenm.com/public/share/metamng/channel/catchoncolor118x50catchon1_1693807609769.png"
                                            alt="CATCHON 1"
                                            id=""
                                            className=""
                                          />
                                        </div>
                                        <span className="btn-channel_link">
                                          <i className="spf spf-channel_link-arrow" />
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="channel-item">
                                    <a
                                      href="/ko/catchon2-schedule/"
                                      className="btn-channel_link"
                                      target="_self"
                                      rel=""
                                    >
                                      <div className="channel-inner">
                                        <div className="logo">
                                          <img
                                            src="https://poc-cf-image.cjenm.com/public/share/metamng/channel/catchoncolor118x50catchon2.png"
                                            alt="CATCHON2"
                                            id=""
                                            className=""
                                          />
                                        </div>
                                        <span className="btn-channel_link">
                                          <i className="spf spf-channel_link-arrow" />
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="scheduler-area">
                                  <div className="galleryoverflow">
                                    <div className="gallery_scheduler js-scheduler_swiper">
                                      <div className="swiper-container gallery_container">
                                        <div className="swiper-wrapper">
                                          <div className="swiper-slide slide-past">
                                            <div className="scheduler-item state-past">
                                              <div className="scheduler-inner">
                                                <div className="layout-flex">
                                                  <div className="airtime-unit">
                                                    <div
                                                      className="time"
                                                      data-time="2024-01-08 15:14:00-2024-01-08 16:58:00"
                                                    >
                                                      <span className="">
                                                        15:20
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="program-unit">
                                                    <div className="pro_name">
                                                      <span>보호자</span>
                                                    </div>
                                                    <div className="pro_round">
                                                      <span>보호자</span>
                                                    </div>
                                                  </div>
                                                  <div className="broadcast-unit">
                                                    <div className="broadcast re">
                                                      <span>재</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="scheduler-item state-past">
                                              <div className="scheduler-inner">
                                                <div className="layout-flex">
                                                  <div className="airtime-unit">
                                                    <div
                                                      className="time"
                                                      data-time="2024-01-08 16:10:00-2024-01-08 18:12:00"
                                                    >
                                                      <span className="">
                                                        16:15
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="program-unit">
                                                    <div className="pro_name">
                                                      <span>더웨일</span>
                                                    </div>
                                                    <div className="pro_round">
                                                      <span>더웨일</span>
                                                    </div>
                                                  </div>
                                                  <div className="broadcast-unit">
                                                    <div className="broadcast re">
                                                      <span>재</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="swiper-slide slide-past">
                                            <div className="scheduler-item state-past">
                                              <div className="scheduler-inner">
                                                <div className="layout-flex">
                                                  <div className="airtime-unit">
                                                    <div
                                                      className="time"
                                                      data-time="2024-01-08 16:58:00-2024-01-08 18:43:00"
                                                    >
                                                      <span className="">
                                                        17:05
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="program-unit">
                                                    <div className="pro_name">
                                                      <span>
                                                        블랙워터:어비스
                                                      </span>
                                                    </div>
                                                    <div className="pro_round">
                                                      <span>
                                                        블랙워터:어비스
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="broadcast-unit">
                                                    <div className="broadcast re">
                                                      <span>재</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="scheduler-item state-past">
                                              <div className="scheduler-inner">
                                                <div className="layout-flex">
                                                  <div className="airtime-unit">
                                                    <div
                                                      className="time"
                                                      data-time="2024-01-08 18:12:00-2024-01-08 20:18:00"
                                                    >
                                                      <span className="">
                                                        18:15
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="program-unit">
                                                    <div className="pro_name">
                                                      <span>
                                                        유나바머:테드K
                                                      </span>
                                                    </div>
                                                    <div className="pro_round">
                                                      <span>
                                                        유나바머:테드K
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="broadcast-unit">
                                                    <div className="broadcast re">
                                                      <span>재</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="swiper-slide slide-past">
                                            <div className="scheduler-item state-past">
                                              <div className="scheduler-inner">
                                                <div className="layout-flex">
                                                  <div className="airtime-unit">
                                                    <div
                                                      className="time"
                                                      data-time="2024-01-08 18:43:00-2024-01-08 20:34:00"
                                                    >
                                                      <span className="">
                                                        18:50
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="program-unit">
                                                    <div className="pro_name">
                                                      <span>
                                                        엑소시스트:더바티칸
                                                      </span>
                                                    </div>
                                                    <div className="pro_round">
                                                      <span>
                                                        엑소시스트:더바티칸
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="broadcast-unit">
                                                    <div className="broadcast re">
                                                      <span>재</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="scheduler-item state-past">
                                              <div className="scheduler-inner">
                                                <div className="layout-flex">
                                                  <div className="airtime-unit">
                                                    <div
                                                      className="time"
                                                      data-time="2024-01-08 20:18:00-2024-01-08 22:17:00"
                                                    >
                                                      <span className="">
                                                        20:25
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="program-unit">
                                                    <div className="pro_name">
                                                      <span>드림팰리스</span>
                                                    </div>
                                                    <div className="pro_round">
                                                      <span>드림팰리스</span>
                                                    </div>
                                                  </div>
                                                  <div className="broadcast-unit">
                                                    <div className="broadcast re">
                                                      <span>재</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="swiper-slide slide-live">
                                            <div className="scheduler-item state-live">
                                              <div className="scheduler-inner">
                                                <div className="layout-flex">
                                                  <div className="airtime-unit">
                                                    <div
                                                      className="time"
                                                      data-time="2024-01-08 20:34:00-2024-01-08 22:52:00"
                                                    >
                                                      <span>20:40 - 22:52</span>
                                                    </div>
                                                  </div>
                                                  <div className="program-unit">
                                                    <div className="pro_name">
                                                      <span>비공식작전</span>
                                                    </div>
                                                    <div className="pro_round">
                                                      <span>비공식작전</span>
                                                    </div>
                                                  </div>
                                                  <div className="broadcast-unit">
                                                    <div className="broadcast re">
                                                      <span>재</span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="progress-box ">
                                                  <span
                                                    style={{ width: "94%" }}
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="scheduler-item state-live">
                                              <div className="scheduler-inner">
                                                <div className="layout-flex">
                                                  <div className="airtime-unit">
                                                    <div
                                                      className="time"
                                                      data-time="2024-01-08 22:17:00-2024-01-09 00:24:00"
                                                    >
                                                      <span>22:20 - 00:24</span>
                                                    </div>
                                                  </div>
                                                  <div className="program-unit">
                                                    <div className="pro_name">
                                                      <span>오르소</span>
                                                    </div>
                                                    <div className="pro_round">
                                                      <span>오르소</span>
                                                    </div>
                                                  </div>
                                                  <div className="broadcast-unit">
                                                    <div
                                                      className="broadcast og"
                                                      style={{
                                                        backgroundColor:
                                                          "#5500a0",
                                                      }}
                                                    >
                                                      <span>본</span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="progress-box ">
                                                  <span
                                                    style={{ width: "21%" }}
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="swiper-slide slide-come">
                                            <div className="scheduler-item state-come">
                                              <div className="scheduler-inner">
                                                <div className="layout-flex">
                                                  <div className="airtime-unit">
                                                    <div
                                                      className="time"
                                                      data-time="2024-01-08 22:52:00-2024-01-09 00:53:00"
                                                    >
                                                      <span className="">
                                                        23:00
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="program-unit">
                                                    <div className="pro_name">
                                                      <span>스위치(2023)</span>
                                                    </div>
                                                    <div className="pro_round">
                                                      <span>스위치(2023)</span>
                                                    </div>
                                                  </div>
                                                  <div className="broadcast-unit">
                                                    <div className="broadcast re">
                                                      <span>재</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="scheduler-item state-come">
                                              <div className="scheduler-inner">
                                                <div className="layout-flex">
                                                  <div className="airtime-unit">
                                                    <div
                                                      className="time"
                                                      data-time="2024-01-09 00:24:00-2024-01-09 01:54:00"
                                                    >
                                                      <span className="">
                                                        00:25
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="program-unit">
                                                    <div className="pro_name">
                                                      <span>캠걸</span>
                                                    </div>
                                                    <div className="pro_round">
                                                      <span>캠걸</span>
                                                    </div>
                                                  </div>
                                                  <div className="broadcast-unit">
                                                    <div className="broadcast re">
                                                      <span>재</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="swiper-slide slide-come">
                                            <div className="scheduler-item state-come">
                                              <div className="scheduler-inner">
                                                <div className="layout-flex">
                                                  <div className="airtime-unit">
                                                    <div
                                                      className="time"
                                                      data-time="2024-01-09 00:53:00-2024-01-09 02:38:00"
                                                    >
                                                      <span className="">
                                                        01:00
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="program-unit">
                                                    <div className="pro_name">
                                                      <span>
                                                        섹션8-비밀작전
                                                      </span>
                                                    </div>
                                                    <div className="pro_round">
                                                      <span>
                                                        섹션8-비밀작전
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="broadcast-unit">
                                                    <div className="broadcast re">
                                                      <span>재</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="scheduler-item state-come">
                                              <div className="scheduler-inner">
                                                <div className="layout-flex">
                                                  <div className="airtime-unit">
                                                    <div
                                                      className="time"
                                                      data-time="2024-01-09 01:54:00-2024-01-09 03:01:00"
                                                    >
                                                      <span className="">
                                                        02:00
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="program-unit">
                                                    <div className="pro_name">
                                                      <span>착한형수6</span>
                                                    </div>
                                                    <div className="pro_round">
                                                      <span>착한형수6</span>
                                                    </div>
                                                  </div>
                                                  <div className="broadcast-unit">
                                                    <div
                                                      className="broadcast og"
                                                      style={{
                                                        backgroundColor:
                                                          "#5500a0",
                                                      }}
                                                    >
                                                      <span>본</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="swiper-slide slide-come">
                                            <div className="scheduler-item state-come">
                                              <div className="scheduler-inner">
                                                <div className="layout-flex">
                                                  <div className="airtime-unit">
                                                    <div
                                                      className="time"
                                                      data-time="2024-01-09 02:38:00-2024-01-09 04:35:00"
                                                    >
                                                      <span className="">
                                                        02:45
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="program-unit">
                                                    <div className="pro_name">
                                                      <span>
                                                        히트맨: 코드네임버튜소
                                                      </span>
                                                    </div>
                                                    <div className="pro_round">
                                                      <span>
                                                        히트맨: 코드네임버튜소
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="broadcast-unit">
                                                    <div className="broadcast re">
                                                      <span>재</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="scheduler-item state-come">
                                              <div className="scheduler-inner">
                                                <div className="layout-flex">
                                                  <div className="airtime-unit">
                                                    <div
                                                      className="time"
                                                      data-time="2024-01-09 03:01:00-2024-01-09 04:36:00"
                                                    >
                                                      <span className="">
                                                        03:05
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="program-unit">
                                                    <div className="pro_name">
                                                      <span>
                                                        커밍아웃내여자의여자
                                                      </span>
                                                    </div>
                                                    <div className="pro_round">
                                                      <span>
                                                        커밍아웃내여자의여자
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="broadcast-unit">
                                                    <div className="broadcast re">
                                                      <span>재</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper_button">
                              <button className="btn-arrow_prev">
                                <i className="spf spf-icon_slider_arrow_l" />
                              </button>
                              <button className="btn-arrow_next">
                                <i className="spf spf-icon_slider_arrow_r" />
                              </button>
                            </div>
                            <div className="pro_row_button ">
                              <button className="pro_row-prev">
                                <i className="spf spf-icon_slider_arrow_l" />
                                Prev
                              </button>
                              <button className="pro_row-next">
                                <i className="spf spf-icon_slider_arrow_r" />
                                Next
                              </button>
                            </div>
                            <div className="live_now-area">
                              <div className="live_now js-live_now">
                                <span>Live Now</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="theme-dark panel-footer ">
                        <div className="paging-area">
                          <div className="moreload only-mb">
                            <button className="more-btn js-channel_more">
                              <span>채널 더보기</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="MC020869_MC021256-16394 program_contnets-section"
                style={{ marginTop: 0, marginBottom: 0 }}
              >
                <div
                  className="section-wrap"
                  style={{
                    paddingTop: 20,
                    paddingBottom: 60,
                    backgroundColor: "#1e1a23",
                  }}
                >
                  <div className="section-inner">
                    <div className="content-panel">
                      <div className="panel-header theme-dark">
                        <div className="header-inner">
                          <a
                            href="https://catchon.cjenm.com/ko/monthly-catchon/"
                            className=""
                            target="_self"
                            rel=""
                          >
                            <div className="title-sub">
                              <span style={{ color: "#FFFFFF" }} />
                            </div>
                            <div className="title-main">
                              <span style={{ color: "#FFFFFF" }}>
                                월의 캐치온
                              </span>
                              <i className="spf spf-title_link-arrow" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="panel-body">
                        <div className="photo_list-wrap theme-dark">
                          <div className="photo_card_list col-4-2">
                            <div className="card_item js-card_item-16394">
                              <div className="card_inner">
                                <a
                                  href="#localePhotoPopup/26796-16394/3819/더 문"
                                  className="acc_btn"
                                >
                                  <div className="lazyload-wrapper">
                                    <img
                                      src="https://poc-cf-image.cjenm.com/resize/459/public/pcms/photogroup/B120138906/kr/B120138906photogroup1703651694959.jpg?v=1703651695"
                                      alt=""
                                      id=""
                                      className=""
                                    />
                                  </div>
                                  <p className="typo-area">더 문</p>
                                </a>
                              </div>
                            </div>
                            <div className="card_item js-card_item-16394">
                              <div className="card_inner">
                                <a
                                  href="#localePhotoPopup/26795-16394/3819/달짝지근해: 7510"
                                  className="acc_btn"
                                >
                                  <div className="lazyload-wrapper">
                                    <img
                                      src="https://poc-cf-image.cjenm.com/resize/459/public/pcms/photogroup/B120138906/kr/B120138906photogroup1703638359547.jpg?v=1703638359"
                                      alt=""
                                      id=""
                                      className=""
                                    />
                                  </div>
                                  <p className="typo-area">달짝지근해: 7510</p>
                                </a>
                              </div>
                            </div>
                            <div className="card_item js-card_item-16394">
                              <div className="card_inner">
                                <a
                                  href="#localePhotoPopup/26794-16394/3819/거미집"
                                  className="acc_btn"
                                >
                                  <div className="lazyload-wrapper">
                                    <img
                                      src="https://poc-cf-image.cjenm.com/resize/459/public/pcms/photogroup/B120138906/kr/B120138906photogroup1703651713152.jpg?v=1703651713"
                                      alt=""
                                      id=""
                                      className=""
                                    />
                                  </div>
                                  <p className="typo-area">거미집</p>
                                </a>
                              </div>
                            </div>
                            <div className="card_item js-card_item-16394">
                              <div className="card_inner">
                                <a
                                  href="#localePhotoPopup/26793-16394/3819/용감한 시민"
                                  className="acc_btn"
                                >
                                  <div className="lazyload-wrapper">
                                    <img
                                      src="https://poc-cf-image.cjenm.com/resize/459/public/pcms/photogroup/B120138906/kr/B120138906photogroup1703638304480.jpg?v=1703638304"
                                      alt=""
                                      id=""
                                      className=""
                                    />
                                  </div>
                                  <p className="typo-area">용감한 시민</p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                style={{ marginTop: 0, marginBottom: 0 }}
                className="jsx-2828724501 MC010715_MC021206-16490 display-section"
              >
                <div
                  style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    backgroundColor: "#1e1a23",
                  }}
                  className="jsx-2828724501 section-wrap"
                >
                  <div className="jsx-2828724501 section-inner">
                    <div className="jsx-2828724501 content-panel">
                      <div className="jsx-2828724501 panel-header theme-dark">
                        <div className="jsx-2828724501 header-inner">
                          <a
                            href="https://catchon.cjenm.com/ko/videos/"
                            className=""
                            target="_self"
                            rel=""
                          >
                            <div className="jsx-2828724501 title-sub">
                              <span
                                style={{ color: "#FFFFFF" }}
                                className="jsx-2828724501"
                              />
                            </div>
                            <div className="jsx-2828724501 title-main">
                              <span
                                style={{ color: "#FFFFFF" }}
                                className="jsx-2828724501"
                              >
                                전체 동영상
                              </span>
                              <i className="jsx-2828724501 spf spf-title_link-arrow" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="jsx-2828724501 panel-body">
                        <div className="swiper_box type-col_type">
                          <div className="swiper-container module_type col theme-dark">
                            <ul className="swiper-wrapper">
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:30</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            1월의 캐치온 대표 신작 | 더 문,
                                            달짝지근해: 7510, 거미집, 용감한
                                            시민
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:30</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            캐치온 시네마 커밍순 | 30일, 독친,
                                            톡 투 미
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:30</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            12월의 캐치온 대표 신작 | 밀수,
                                            콘크리트 유토피아, 보호자, 스위치
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                      <div className="jsx-541370242 info_adult ">
                                        <i className="jsx-541370242 icon_adult" />
                                        <span className="jsx-541370242 info_txt">
                                          19세 이상
                                        </span>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:30</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            캐치온 시네마 커밍순 | 더 문, 기억해
                                            우리가 사랑한 시간, 킹 오브 킬러스
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:30</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            11월의 캐치온 대표 신작 |
                                            비공식작전, 스파이더맨: 어크로스 더
                                            유니버스, 파벨만스, 인시디어스: 빨간
                                            문
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:29</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            캐치온 시네마 커밍순 | 밀수, 블랙
                                            워터: 어비스, 더 문
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:30</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            캐치온 시네마 커밍순 | 비공식작전,
                                            밀수, 엑소시스트: 더 바티칸
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:30</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            10월의 캐치온 대표 신작 | 카운트,
                                            오토라는 남자, 옥수역 귀신, 65
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:30</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            9월의 캐치온 대표 신작 | 귀공자,
                                            영웅, 서치 2, 유령
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:30</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            8월의 캐치온 대표 신작 | 존 윅 4,
                                            드림, 다음 소희, 플레인
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:48</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            [CATCHON] 진실은 언제나 하나! NEW
                                            시즌 '명탐정 코난 2023' 매주 (월)
                                            공개
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:30</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            7월 캐치온에는 다 있다! 특급 영화
                                            구독 서비스 캐치온
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:01:04</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            [CATCHON] 황실 블랙 코미디 '더
                                            그레이트3' 7/5(수) 밤 10시 독점 첫
                                            방송!
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:30</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            7월의 캐치온 대표 신작 | 블랙 아담,
                                            리바운드, 라일 라일 크로커다일, 더
                                            그레이트 3
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:30</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            6월의 캐치온 대표 신작 | 대외비,
                                            소울메이트, 크리스마스 캐럴, 명탐정
                                            코난 2023
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="swiper-slide">
                                <div className="module">
                                  <div className="img-area">
                                    <div className="img-box">
                                      <div className="lazyload-wrapper ">
                                        <div
                                          className="noimg"
                                          style={{
                                            backgroundImage:
                                              'url("https://poc-cf-image.cjenm.com/public/share/systemmng/site/sitemng/캐치온Logo.png")',
                                          }}
                                        />
                                      </div>
                                      <div className="play-btn">
                                        <a href="#" title="재생">
                                          <i className="icon_play_btn" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="time_wrap">
                                      <span className="time">00:00:30</span>
                                    </div>
                                  </div>
                                  <div className="typo-area">
                                    <div className="typo-inner">
                                      <dl>
                                        <dt>
                                          <a href="#">
                                            5월의 캐치온 대표 신작 | 공조2:
                                            인터내셔날, 교섭, DC 리그 오브
                                            슈퍼-펫, 멍뭉이
                                          </a>
                                        </dt>
                                        <dd>
                                          <a
                                            href="https://catchon.cjenm.com/ko/catchon공통/"
                                            className=""
                                            target="_self"
                                            rel=""
                                          >
                                            CatchOn(공통)
                                          </a>
                                        </dd>
                                      </dl>
                                    </div>
                                    <div className="tag_label">
                                      <div className="inner">
                                        <span className="flag_txt">예고</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="jsx-2828724501 theme-dark swiper_button">
                            <button
                              tabIndex={0}
                              role="button"
                              aria-label="Previous slide"
                              aria-disabled="true"
                              className="jsx-2828724501 btn-arrow js-pagearrow_prev"
                            >
                              <i className="jsx-2828724501 spf spf-icon_slider_arrow_l" />
                            </button>
                            <button
                              tabIndex={0}
                              role="button"
                              aria-label="Next slide"
                              aria-disabled="false"
                              className="jsx-2828724501 btn-arrow js-pagearrow_next"
                            >
                              <i className="jsx-2828724501 spf spf-icon_slider_arrow_r" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                id="MC020885-16399"
                className="bar_banner-section"
                style={{ marginTop: 0, marginBottom: 0 }}
              >
                <div
                  className="section-wrap"
                  style={{
                    paddingTop: 60,
                    paddingBottom: 20,
                    backgroundColor: "#1e1a23",
                  }}
                >
                  <div className="section-inner">
                    <div className="panel-body">
                      <div className="bar_banner theme-dark">
                        <div id="div-gpt-ad-1693979337052-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div id="footer" className="jsx-3757877796">
            <div className="jsx-3757877796 theme-dark inner">
              <div className="breadcrumb-wrap">
                <div className="wrap-inner">
                  <ul>
                    <li>
                      <span className="bc_tar">HOME</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="jsx-3757877796 theme-dark inner">
              <div className="f_tvncatchon">
                <div className="footer_bg">
                  <div className="footer_type-left footer-group">
                    <div className="bg_img">
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n/*pc 배경화면 */\n.f_tvncatchon .bg_img {\nbackground-color: #1e1a23 ;\nbackground-position:center top;\nbackground-repeat:no-repeat;\n\n}\n\n@media all and (max-width: 959px) {\n.f_tvncatchon .bg_img {\nbackground-color: #1e1a23 ;\nbackground-position:left top ,right bottom;\nbackground-repeat:no-repeat;\n}\n/*모바일 배경화면 */\n}\n",
                        }}
                      />
                      <div className="footer_link-wrap">
                        <div className="wrap-inner">
                          <div className="flex-area">
                            <div className="flex-item">
                              <ul className="footer_link-list">
                                <li>
                                  <a
                                    href="https://www.cjenm.com/ko/"
                                    target="_blank"
                                  >
                                    회사소개
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://imffectc.cjenm.com/?qna=true"
                                    target="_blank"
                                  >
                                    광고/제휴문의
                                  </a>
                                </li>
                                <li>
                                  <a href="/ko/terms-of-use/">이용약관</a>
                                </li>
                                <li>
                                  <a href="/ko/privacy-policy/">
                                    <strong>개인정보 처리방침</strong>
                                  </a>
                                </li>
                                <li>
                                  <a href="/ko/youth-protection-policy/">
                                    청소년보호정책
                                  </a>
                                </li>
                                <li>
                                  <a href="/ko/legal-notice-and-disclaimer/">
                                    법적고지
                                  </a>
                                </li>
                                <li>
                                  <a href="/ko/prohibition-of-unauthorized-collection-of-email-addresses/">
                                    이메일무단수집거부
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="mailto:cjenm.support@cj.net"
                                    target="_blank"
                                  >
                                    고객센터
                                  </a>
                                </li>
                                <li>
                                  <a href="/ko/announcement/" target="_blank">
                                    공지사항
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="flex-item">
                              <ul className="footer_select-list">
                                <li>
                                  <div className="select-box">
                                    <select
                                      className="js-select2Basic_edge_theme-dark select2Basic_edge"
                                      id="pocBrand"
                                    >
                                      <option disabled="" selected="">
                                        브랜드 바로가기
                                      </option>
                                      <option data-url="https://www.mnetplus.world/">
                                        MNET
                                      </option>
                                      <option data-url="https://www.mwave.me/kr">
                                        MWAVE
                                      </option>
                                      <option data-url="https://tvn.cjenm.com/ko/">
                                        tvN
                                      </option>
                                      <option data-url="https://tvnsports.cjenm.com/ko/">
                                        tvN SPORTS
                                      </option>
                                      <option data-url="https://tvn.cjenm.com/ko/tvNstory-main/">
                                        tvN STORY
                                      </option>
                                      <option data-url="https://tvn.cjenm.com/ko/tvNDRAMA_main/">
                                        tvN DRAMA
                                      </option>
                                      <option data-url="https://tvn.cjenm.com/ko/tvNshow-main/">
                                        tvN SHOW
                                      </option>
                                      <option data-url="https://ocn.cjenm.com/ko/">
                                        OCN
                                      </option>
                                      <option data-url="https://zhtv.cjenm.com/ko/">
                                        중화TV
                                      </option>
                                      <option data-url="https://uxn.cjenm.com/ko/">
                                        UXN
                                      </option>
                                      <option data-url="https://catchon.cjenm.com/ko/">
                                        CATCHON
                                      </option>
                                      <option data-url="https://tooniverse.cjenm.com/ko/">
                                        Tooniverse
                                      </option>
                                    </select>
                                  </div>
                                </li>
                                <li>
                                  <div className="select-box">
                                    <select
                                      className="js-select2Basic_edge_theme-dark select2Basic_edge"
                                      id="pocFamily"
                                    >
                                      <option disabled="" selected="">
                                        계열사 바로가기
                                      </option>
                                      <optgroup label="CJ 그룹">
                                        <option data-url="http://www.cj.net/">
                                          CJ주식회사
                                        </option>
                                      </optgroup>
                                      <optgroup label="엔터테인먼트 & 미디어">
                                        <option data-url="https://www.cjenm.com/ko">
                                          CJ ENM 엔터테인먼트부문
                                        </option>
                                        <option data-url="https://www.tving.com/onboarding">
                                          TVING
                                        </option>
                                        <option data-url="http://corp.cgv.co.kr/">
                                          CJ CGV
                                        </option>
                                      </optgroup>
                                      <optgroup label="식품 & 식품 서비스">
                                        <option data-url="https://www.cj.co.kr/kr/index">
                                          CJ제일제당
                                        </option>
                                        <option data-url="http://www.cjfoodville.co.kr/main.asp">
                                          CJ푸드빌
                                        </option>
                                        <option data-url="http://www.cjfreshway.com/index.jsp">
                                          CJ프레시웨이
                                        </option>
                                      </optgroup>
                                      <optgroup label="생명공학">
                                        <option data-url="https://www.cj.co.kr/kr/about/business/bio">
                                          CJ제일제당 BIO사업부문
                                        </option>
                                        <option data-url="https://www.cj.co.kr/kr/about/business/cjfeedncare">
                                          CJ Feed &amp; Care
                                        </option>
                                      </optgroup>
                                      <optgroup label="물류 & 신유통">
                                        <option data-url="https://www.cjlogistics.com/ko/main">
                                          CJ대한통운
                                        </option>
                                        <option data-url="http://www.cjenc.co.kr/kr/Default.asp">
                                          CJ대한통운 건설부문
                                        </option>
                                        <option data-url="https://www.oliveyoung.co.kr/store/company/brandStory.do">
                                          CJ올리브영
                                        </option>
                                        <option data-url="https://www.cjolivenetworks.co.kr/">
                                          CJ올리브네트웍스
                                        </option>
                                        <option data-url="https://company.cjonstyle.com/index.asp">
                                          CJ ENM 커머스부문
                                        </option>
                                        <option data-url="https://www.cjtelenix.com:450/index.asp">
                                          CJ텔레닉스
                                        </option>
                                      </optgroup>
                                    </select>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="footer_addr-wrap">
                        <div className="wrap-inner">
                          <div className="footer_main-area">
                            <div className="footer_logo">
                              <i>
                                <img
                                  src="https://poc-cf-image.cjenm.com/public/share/systemmng/site/ctgmng/catchonLogolmg.png"
                                  alt=""
                                />
                              </i>
                            </div>
                            <div className="footer_addr">
                              <ul>
                                <li>
                                  <span>
                                    시청자 상담실 (편성 문의 및 시청자 의견) :{" "}
                                    <strong>
                                      <a href="tel:080-080-0987">
                                        080-080-0987
                                      </a>
                                    </strong>
                                  </span>
                                </li>
                              </ul>
                              <ul>
                                <li>
                                  <span>
                                    (주)씨제이이엔엠?대표이사 : 구창근, 윤상현
                                  </span>
                                </li>
                                <li>
                                  <strong>
                                    <a
                                      href="javascript:window.open('http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=1068151510', 'ftcwin', 'width=700,height=700');void(0);"
                                      className="link_line"
                                    >
                                      사업자정보확인
                                    </a>
                                  </strong>
                                </li>
                              </ul>
                              <ul>
                                <li>
                                  <span>
                                    본점 : (06761) 서울시 서초구 과천대로 870-13
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    사업장 : (03926) 서울시 마포구 상암산로 66
                                  </span>
                                </li>
                                <li>
                                  <span>사업자 등록번호 : 106-81-51510</span>
                                </li>
                                <li>
                                  <span>개인정보 보호책임자 : 강봉관</span>
                                </li>
                              </ul>
                            </div>
                            <div className="sns_link">
                              <ul className="sns-list">
                                <li>
                                  <a
                                    href="https://www.instagram.com/catchon_movie/"
                                    target="_blank"
                                  >
                                    <i className="">
                                      <svg
                                        width={64}
                                        height={64}
                                        viewBox="0 0 64 64"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M18 25.6594C18 21.4292 21.4292 18 25.6594 18H38.7897C43.0198 18 46.449 21.4292 46.449 25.6594V38.7897C46.449 43.0198 43.0198 46.449 38.7897 46.449H25.6594C21.4292 46.449 18 43.0198 18 38.7897V25.6594ZM27.7355 32.6594C27.7355 35.3787 29.94 37.5832 32.6594 37.5832C35.3787 37.5832 37.5832 35.3787 37.5832 32.6594C37.5832 29.94 35.3787 27.7355 32.6594 27.7355C29.94 27.7355 27.7355 29.94 27.7355 32.6594ZM32.6594 25C28.4292 25 25 28.4292 25 32.6594C25 36.8895 28.4292 40.3187 32.6594 40.3187C36.8895 40.3187 40.3187 36.8895 40.3187 32.6594C40.3187 28.4292 36.8895 25 32.6594 25ZM40.6413 22C39.7348 22 39 22.7348 39 23.6413C39 24.5477 39.7348 25.2826 40.6413 25.2826C41.5477 25.2826 42.2826 24.5477 42.2826 23.6413C42.2826 22.7348 41.5477 22 40.6413 22Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://www.youtube.com/channel/UC-JgOE5JA5PDg3R0USzVfFA"
                                    target="_blank"
                                  >
                                    <i className="">
                                      <svg
                                        width={64}
                                        height={64}
                                        viewBox="0 0 64 64"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M20.9009 21.0413C17.5496 21.3821 15 24.2041 15 27.5727V36.7294C15 39.9676 17.4508 42.6803 20.6724 43.0079C27.633 43.7157 34.6469 43.7273 41.6098 43.0424L41.9485 43.0091C45.2836 42.6811 47.8258 39.8765 47.8258 36.5254V27.5924C47.8258 24.2155 45.264 21.3894 41.9033 21.0588L39.8533 20.8572C34.0584 20.2872 28.2212 20.2968 22.4283 20.8859L20.9009 21.0413ZM35.7177 32.2113C36.2876 31.8823 36.2876 31.0597 35.7177 30.7307L30.0758 27.4733C29.5059 27.1443 28.7935 27.5556 28.7935 28.2137V34.7284C28.7935 35.3865 29.5059 35.7977 30.0758 35.4687L35.7177 32.2113Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer_sticky-area">
                    <div className="area-inner">
                      <ul className="float_ui-list">
                        <li className="scoll_top">
                          <a href="#">
                            <i className="spf spf-float_top" />
                          </a>
                        </li>
                        <li className="share_sns">
                          <button>
                            <i className="spf spf-float_sns" />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
