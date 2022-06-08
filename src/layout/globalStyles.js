import { createGlobalStyle } from 'styled-components';

import GelionLightFont from '../assets/fonts/GelionLight.eot';
import GelionLightFontTtf from '../assets/fonts/GelionLight.ttf';
import GelionLightFontWoff from '../assets/fonts/GelionLight.woff';
import GelionLightFontWoff2 from '../assets/fonts/GelionLight.woff2';

import GelionRegularFont from '../assets/fonts/GelionRegular.eot';
import GelionRegularFontTtf from '../assets/fonts/GelionRegular.ttf';
import GelionRegularFontWoff from '../assets/fonts/GelionRegular.woff';
import GelionRegularFontWoff2 from '../assets/fonts/GelionRegular.woff2';
 
import GelionMediumFont from '../assets/fonts/GelionMedium.eot';
import GelionMediumFontTtf from '../assets/fonts/GelionMedium.ttf';
import GelionMediumFontWoff from '../assets/fonts/GelionMedium.woff';
import GelionMediumFontWoff2 from '../assets/fonts/GelionMedium.woff2';

import GelionSemiBoldFont from '../assets/fonts/GelionSemiBold.eot';
import GelionSemiBoldFontTtf from '../assets/fonts/GelionSemiBold.ttf';
import GelionSemiBoldFontWoff from '../assets/fonts/GelionSemiBold.woff';
import GelionSemiBoldFontWoff2 from '../assets/fonts/GelionSemiBold.woff2';

import GelionBoldFont from '../assets/fonts/GelionBold.eot';
import GelionBoldFontTtf from '../assets/fonts/GelionBold.ttf';
import GelionBoldFontWoff from '../assets/fonts/GelionBold.woff';
import GelionBoldFontWoff2 from '../assets/fonts/GelionBold.woff2';

const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: 'GelionLight';
	src: local('GelionLight'), local('GelionLight'),
	url(${GelionLightFont}) format('eot'),
	url(${GelionLightFontWoff2}) format('woff2'),
	url(${GelionLightFontWoff}) format('woff');
	font-weight: 300;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'GelionRegular';
	src: local('GelionRegular'), local('GelionRegular'),
	url(${GelionRegularFont}) format('eot'),
	url(${GelionRegularFontWoff2}) format('woff2'),
	url(${GelionRegularFontWoff}) format('woff');
	font-weight: 400;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'GelionMedium';
	src: local('GelionMedium'), local('GelionMedium'),
	url(${GelionMediumFont}) format('eot'),
	url(${GelionMediumFontWoff2}) format('woff2'),
	url(${GelionMediumFontWoff}) format('woff');
	font-weight: 500;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'GelionSemiBold';
	src: local('GelionSemiBold'), local('GelionSemiBold'),
	url(${GelionSemiBoldFont}) format('eot'),
	url(${GelionSemiBoldFontWoff2}) format('woff2'),
	url(${GelionSemiBoldFontWoff}) format('woff');
	font-weight: 600;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'GelionBold';
	src: local('GelionBold'), local('GelionBold'),
	url(${GelionBoldFont}) format('eot'),
	url(${GelionBoldFontWoff2}) format('woff2'),
	url(${GelionBoldFontWoff}) format('woff');
	font-weight: 700;
	font-style: normal;
	font-display: swap;
}
// .container {
// 	content-visibility: auto;
// 	contain-intrinsic-size: 500px;
//   }
body{margin:auto; float:none; font-family: 'GelionRegular',sans-serif !important; sans-serif !important;font-weight: 400; color:#3C3C3B;}
a{ text-decoration:none; font-size:22px;}
img{ width:100%;height:auto;}
ul{margin:0;padding:0;}
ul li{list-style:none;}
h1,h2,h3,h4,h5,h6{margin:0;font-family: 'GelionBold';color:#303030;}
h1{ font-size:70px;line-height:74px;letter-spacing: -.3px;}
h2{ font-size:60px;line-height:65px;letter-spacing: -.3px;}
h3{ font-size:28px;line-height:45px; letter-spacing: -.3px;}
h4{ font-size:18px;line-height:26px;}

p{ font-size:20px;line-height:30px;font-weight: 400;color:#404040;margin:0;padding-bottom:25px;}

hr{ border:1px solid #4E50F7; width:100%;margin:64px 0;box-sizing: border-box;}

.svg-icon{ width:38px;height:25px;color:#4E50F7;float:right;}
.svg-icon path{fill:#4E50F7;}

#download{margin-top:64px;}
#download input{border:none;border-bottom:1px solid #D1D1D1;border-radius:0;font-size: 12px;padding: 8px 0px;margin: 16px 0px 0px;}
#download select{margin-top:16px;height: 30px;color: #888;}
#download span{font-size: 12px;}
#download button{text-transform:capitalize;background-color: transparent;margin: 32px 0px 0px;color:#4E50F7;border: 2px solid #4E50F7;}
#download button:hover{background-color:#4E50F7;color:#fff;}
#download p{ font-size:14px;}
.inputwrap{
	box-sizing: border-box;
	margin: 16px 0px 0px;
	min-width: 0px;
	display: block;
	width: 100%;
	padding: 8px 0px;
	appearance: none;
	line-height: inherit;
	color: inherit;
	background-color: transparent;
	font-size: 12px;
	border-top: medium none;
	border-right: medium none;
	border-left: medium none;
	border-image: none 100% / 1 / 0 stretch;
	outline: currentcolor none medium;
	border-radius: 0px;
	border-bottom: 1px solid #D1D1D1;
}
.inputwrapselect{
	width: 100%;
	border-top: medium none;
	border-right: medium none;
	border-left: medium none;
	border-image: none 100% / 1 / 0 stretch;
	background-color: transparent;
	font-size: 12px;
	color: var(--theme-ui-colors-text,#3C3C3B);
	padding-bottom: 8px;
	margin: 16px 0px 0px;
	outline: currentcolor none 0px;
	border-bottom: 1px solid #D1D1D1;
}
.weFKk{
	box-sizing: border-box;
	margin: 0px;
	min-width: 0px;
	font-size: 12px;
	color: var(--theme-ui-colors-accent,#4E50F7);
}

.btn-green {font-family: 'GelionMedium';
font-size: 20px;font-weight: 500;line-height: 23px;padding: 10px 24px;color:#fff;
background-color:#08b689;border-radius:6px;display:inline-block;border:none;cursor:pointer;
&:hover {
	background-color: #4478db;
  }
  @media (min-width: 576px) {
	border-radius:10px;
  }
}

.btn-blue {font-family: 'GelionBold';
padding: 10px 25px;
background-color: #4478db;
border: none;
border-radius: 6px;
color: #fff;
font-weight: 700;
font-size: 18px;
line-height: 30px;
letter-spacing: -0.32px;
cursor:pointer;
@media (min-width: 576px) {
	padding: 12px 30px;
	font-size: 22px;
	line-height: 32px;
	border-radius: 10px;
}
@media (min-width: 993px) {
	font-size: 25px;
	line-height: 36px;
}
@media (min-width: 1441px) {
  padding: 15px 40px;
  font-size: 28px;
  line-height: 40px;
}
    &:hover {
      background-color: #08b689;
    }	
  }

.txt-green {color:#08b689;}
.blue-line {position: relative;
 &::before {
	content:'';
	position: absolute;
    bottom: 5px;
    right: 0;
    width: 100%;
    height: 10px;
    border-radius: 3px;
    background-color: #4478db;
    opacity: 0.25;
@media (min-width: 576px) {
	height: 12px;
	border-radius: 6px;
	bottom: 10px;
  }
  @media (min-width: 769px) {
	border-radius: 2px;
	height: 14px;
  }
  @media (min-width: 993px) {
	border-radius: 3px;
	height: 14px;
  }
  @media (min-width: 1201px) {
	border-radius: 4px;
	height: 17px;
  }
  @media (min-width: 1441px) {
	bottom: 15px;
  }
}
}

.subtitle{
color: #303030;
font-size: 17px;
font-weight: 400;
line-height: 24px;
margin-bottom: 0;
@media (min-width: 576px) {
	font-size: 20px;
	line-height: 26px;
}
@media (min-width: 769px) {
	font-size: 21px;
	line-height: 34px;
}
@media (min-width: 993px) {
	font-size: 24px;
	line-height: 34px;
}
@media (min-width: 1201px) {
	font-size: 26px;
	line-height: 36px;
}
@media (min-width: 1441px) {
	font-size: 28px;
	line-height: 41px;
  }
}


@media (min-width: 1400px) {
	.container-fluid {max-width:1330px;margin:0 auto;}
}
@media only screen and (min-width:1100px) and (max-width:1199px){
		.container{ width:96%;padding:0 16px;}
}
@media (max-width: 1099px) {
	.container{ width:100%;padding:0 16px;}
}
@media (max-width: 991px) {
	h2{font-size:50px;line-height:60px;}
}
@media (max-width: 767px) {
  h1{font-size:50px;line-height:55px;}
  h2{font-size:40px;line-height:50px;}
}

@media (max-width: 575px) {
  h1{font-size:40px;line-height:45px;}
  h2{font-size:32px;line-height:40px;}
  h3{ font-size:22px;line-height:30px;}
  p{font-size:15px;line-height:25px;margin-bottom:15px;}
}

`;
export default GlobalStyle;