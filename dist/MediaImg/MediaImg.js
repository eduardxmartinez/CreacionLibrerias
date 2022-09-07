"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _templateObject,_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_taggedTemplateLiteral2=_interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral")),_react=require("react"),_css=require("@emotion/css"),_propTypes=require("prop-types"),_jsxRuntime=require("react/jsx-runtime"),_excluded=["className","src","alt","borderRadius","width","height"];function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var MediaImgStyles=function(a,b,c){return(0,_css.css)(_templateObject||(_templateObject=(0,_taggedTemplateLiteral2["default"])(["\n    border-radius: ",";\n    width: ",";\n    height: ",";\n"])),a||"16px",b||"100px",c||"100px")},MediaImg=/*#__PURE__*/(0,_react.forwardRef)(function(a,b){var c=a.className,d=a.src,e=a.alt,f=a.borderRadius,g=a.width,h=a.height,i=(0,_objectWithoutProperties2["default"])(a,_excluded);return/*#__PURE__*/(0,_jsxRuntime.jsx)("img",_objectSpread(_objectSpread({src:d,alt:e,ref:b},i),{},{className:(0,_css.cx)(MediaImgStyles(f,g,h),c)}))});MediaImg.propTypes={className:_propTypes.PropTypes.string,width:_propTypes.PropTypes.string,height:_propTypes.PropTypes.string,borderRadius:_propTypes.PropTypes.string,src:_propTypes.PropTypes.string,alt:_propTypes.PropTypes.string};var _default=MediaImg;exports["default"]=_default;