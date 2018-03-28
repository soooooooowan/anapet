.bx-wrapper {
    position: relative;
    margin-bottom: 60px;
    padding: 0;
    *zoom: 1;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
  }
  .bx-wrapper img {
    max-width: 100%;
    display: block;
  }
  .bxslider {
    margin: 0;
    padding: 0;
  }
  ul.bxslider {
    list-style: none;
  }
  .bx-viewport {
    /*fix other elements on the page moving (on Chrome)*/
    -webkit-transform: translatez(0);
  }
  /** THEME
  ===================================*/
  /* 이미지 외곽 부분의 흰색 선 영역 */
  .bx-wrapper {
  /*   -moz-box-shadow: 0 0 5px #ccc;
    -webkit-box-shadow: 0 0 5px #ccc;
    box-shadow: 0 0 5px #ccc;
    border: 5px solid #fff;
    background: #fff; */
  }
  .bx-wrapper .bx-pager,
  /* 페이저 버튼 위치 */
  .bx-wrapper .bx-controls-auto {
    position: absolute;
    bottom: 20px; /* 상하의 위치 */
    width: 100%;
  }
  /* LOADER */
  .bx-wrapper .bx-loading {
    min-height: 50px;
    background: url('images/bx_loader.gif') center center no-repeat #ffffff;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2000;
  }
  /* PAGER */
  .bx-wrapper .bx-pager {
    text-align: center;
    font-size: .85em;
    font-family: Arial;
    font-weight: bold;
    color: #666;
    padding-top: 20px;
  }
  /* 페이저 버튼의  색깔 및 크기에 관한 설정 */
  .bx-wrapper .bx-pager.bx-default-pager a {
    background: #fff; /* 페이저 버튼의 기본 색상 */
    text-indent: -9999px; /* 페이저 문자 내어쓰기 */
    display: block;
    width: 10px; /* 페이저 버튼의 가로 넓이 */
    height: 10px; /* 세로 높이 */
    margin: 0 5px; /* 페이저 버튼끼리의 사이 간격 */
    outline: 0;
    -moz-border-radius: 5px; /* 페이저 버튼 라운드 값 */
    -webkit-border-radius: 5px; /* 페이저 버튼 라운드 값 */
    border-radius: 5px; /* 페이저 버튼 라운드 값 */
  }
  .bx-wrapper .bx-pager.bx-default-pager a:hover,
  .bx-wrapper .bx-pager.bx-default-pager a.active,
  .bx-wrapper .bx-pager.bx-default-pager a:focus {
    background: salmon;
  }
  .bx-wrapper .bx-pager-item,
  .bx-wrapper .bx-controls-auto .bx-controls-auto-item {
    display: inline-block;
    vertical-align: bottom;
    *zoom: 1;
    *display: inline;
  }
  .bx-wrapper .bx-pager-item {
    font-size: 0;
    line-height: 0;
  }
  /* DIRECTION CONTROLS (NEXT / PREV) */
  .bx-wrapper .bx-prev {
    left: 10px;
    background: url('images/controls.png') no-repeat 0 -32px;
  }
  .bx-wrapper .bx-prev:hover,
  .bx-wrapper .bx-prev:focus {
    background-position: 0 0;
  }
  .bx-wrapper .bx-next {
    right: 10px;
    background: url('images/controls.png') no-repeat -43px -32px;
  }
  .bx-wrapper .bx-next:hover,
  .bx-wrapper .bx-next:focus {
    background-position: -43px 0;
  }
  /* prew, next 버튼의 실제적인 사이즈 및 위치 */
  .bx-wrapper .bx-controls-direction a {
    position: absolute;
    top: 50%;
    margin-top: -16px;
    outline: 0;
    width: 20px;
    height: 50px;
    text-indent: -9999px;
    z-index: 9999;
  }
  .bx-wrapper .bx-controls-direction a.disabled {
    display: none;
  }
  /* AUTO CONTROLS (START / STOP) */
  .bx-wrapper .bx-controls-auto {
    text-align: center;
  }
  .bx-wrapper .bx-controls-auto .bx-start {
    display: block;
    text-indent: -9999px;
    width: 10px;
    height: 11px;
    outline: 0;
    background: url('images/controls.png') -86px -11px no-repeat;
    margin: 0 3px;
  }
  .bx-wrapper .bx-controls-auto .bx-start:hover,
  .bx-wrapper .bx-controls-auto .bx-start.active,
  .bx-wrapper .bx-controls-auto .bx-start:focus {
    background-position: -86px 0;
  }
  .bx-wrapper .bx-controls-auto .bx-stop {
    display: block;
    text-indent: -9999px;
    width: 9px;
    height: 11px;
    outline: 0;
    background: url('images/controls.png') -86px -44px no-repeat;
    margin: 0 3px;
  }
  .bx-wrapper .bx-controls-auto .bx-stop:hover,
  .bx-wrapper .bx-controls-auto .bx-stop.active,
  .bx-wrapper .bx-controls-auto .bx-stop:focus {
    background-position: -86px -33px;
  }
  /* PAGER WITH AUTO-CONTROLS HYBRID LAYOUT */
  .bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-pager {
    text-align: left;
    width: 80%;
  }
  .bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-controls-auto {
    right: 0;
    width: 35px;
  }
  /* IMAGE CAPTIONS */
  .bx-wrapper .bx-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    background: #666;
    background: rgba(80, 80, 80, 0.75);
    width: 100%;
  }
  .bx-wrapper .bx-caption span {
    color: #fff;
    font-family: Arial;
    display: block;
    font-size: .85em;
    padding: 10px;
  }
  