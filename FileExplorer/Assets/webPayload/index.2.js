﻿(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1116:function(e,t,i){"use strict";var n;i.d(t,"e",(function(){return n})),function(e){e[e.smallFluid=0]="smallFluid",e[e.smallFixedFar=1]="smallFixedFar",e[e.smallFixedNear=2]="smallFixedNear",e[e.medium=3]="medium",e[e.large=4]="large",e[e.largeFixed=5]="largeFixed",e[e.extraLarge=6]="extraLarge",e[e.custom=7]="custom",e[e.customNear=8]="customNear"}(n||(n={}))},1500:function(e,t,i){"use strict";i.d(t,"e",(function(){return Q}));var n,o=i(889),s=i(0),a=i(1),r=i(548),l=i(876),d=i(882),c=i(860),m=i(856),p=i(831),u=i(61),h=i(423),v=i(142),g=i(885),_=i(621),f=i(486),b=i(664),O=i(416),y=i(487),C=i(888),x=i(1116),N=Object(m.e)();!function(e){e[e.closed=0]="closed",e[e.animatingOpen=1]="animatingOpen",e[e.open=2]="open",e[e.animatingClosed=3]="animatingClosed"}(n||(n={}));var F,w,P,k,T,B=function(e){function t(t){var i=e.call(this,t)||this;i._panel=a.createRef(),i._animationCallback=null,i._hasCustomNavigation=!(!i.props.onRenderNavigation&&!i.props.onRenderNavigationContent),i.dismiss=function(e){i.props.onDismiss&&i.props.onDismiss(e),(!e||e&&!e.defaultPrevented)&&i.close()},i._allowScrollOnPanel=function(e){e?i._allowTouchBodyScroll?Object(p.e)(e,i._events):Object(p.t)(e,i._events):i._events.off(i._scrollableContent),i._scrollableContent=e},i._onRenderNavigation=function(e){if(!i.props.onRenderNavigationContent&&!i.props.onRenderNavigation&&!i.props.hasCloseButton)return null;var t=i.props.onRenderNavigationContent,n=void 0===t?i._onRenderNavigationContent:t;return a.createElement("div",{className:i._classNames.navigation},n(e,i._onRenderNavigationContent))},i._onRenderNavigationContent=function(e){var t,n=e.closeButtonAriaLabel,o=e.hasCloseButton,s=e.onRenderHeader,l=void 0===s?i._onRenderHeader:s;if(o){var d=null===(t=i._classNames.subComponentStyles)||void 0===t?void 0:t.closeButton();return a.createElement(a.Fragment,null,!i._hasCustomNavigation&&l(i.props,i._onRenderHeader,i._headerTextId),a.createElement(r.e,{styles:d,className:i._classNames.closeButton,onClick:i._onPanelClick,ariaLabel:n,title:n,"data-is-visible":!0,iconProps:{iconName:"Cancel"}}))}return null},i._onRenderHeader=function(e,t,n){var o=e.headerText,r=e.headerTextProps,l=void 0===r?{}:r;return o?a.createElement("div",{className:i._classNames.header},a.createElement("div",Object(s.__assign)({id:n,role:"heading","aria-level":1},l,{className:Object(u.e)(i._classNames.headerText,l.className)}),o)):null},i._onRenderBody=function(e){return a.createElement("div",{className:i._classNames.content},e.children)},i._onRenderFooter=function(e){var t=i.props.onRenderFooterContent,n=void 0===t?null:t;return n?a.createElement("div",{className:i._classNames.footer},a.createElement("div",{className:i._classNames.footerInner},n())):null},i._animateTo=function(e){e===n.open&&i.props.onOpen&&i.props.onOpen(),i._animationCallback=i._async.setTimeout((function(){i.setState({visibility:e}),i._onTransitionComplete()}),200)},i._clearExistingAnimationTimer=function(){null!==i._animationCallback&&i._async.clearTimeout(i._animationCallback)},i._onPanelClick=function(e){i.dismiss(e)},i._onTransitionComplete=function(){i._updateFooterPosition(),i.state.visibility===n.open&&i.props.onOpened&&i.props.onOpened(),i.state.visibility===n.closed&&i.props.onDismissed&&i.props.onDismissed()};var o=i.props.allowTouchBodyScroll,l=void 0!==o&&o;return i._allowTouchBodyScroll=l,i._async=new h.e(i),i._events=new v.e(i),Object(g.e)(i),Object(_.e)("Panel",t,{ignoreExternalFocusing:"focusTrapZoneProps",forceFocusInsideTrap:"focusTrapZoneProps",firstFocusableSelector:"focusTrapZoneProps"}),i.state={isFooterSticky:!1,visibility:n.closed,id:Object(f.e)("Panel")},i}return Object(s.__extends)(t,e),t.getDerivedStateFromProps=function(e,t){return void 0===e.isOpen?null:!e.isOpen||t.visibility!==n.closed&&t.visibility!==n.animatingClosed?e.isOpen||t.visibility!==n.open&&t.visibility!==n.animatingOpen?null:{visibility:n.animatingClosed}:{visibility:n.animatingOpen}},t.prototype.componentDidMount=function(){this._events.on(window,"resize",this._updateFooterPosition),this._shouldListenForOuterClick(this.props)&&this._events.on(document.body,"mousedown",this._dismissOnOuterClick,!0),this.props.isOpen&&this.setState({visibility:n.animatingOpen})},t.prototype.componentDidUpdate=function(e,t){var i=this._shouldListenForOuterClick(this.props),o=this._shouldListenForOuterClick(e);this.state.visibility!==t.visibility&&(this._clearExistingAnimationTimer(),this.state.visibility===n.animatingOpen?this._animateTo(n.open):this.state.visibility===n.animatingClosed&&this._animateTo(n.closed)),i&&!o?this._events.on(document.body,"mousedown",this._dismissOnOuterClick,!0):!i&&o&&this._events.off(document.body,"mousedown",this._dismissOnOuterClick,!0)},t.prototype.componentWillUnmount=function(){this._async.dispose(),this._events.dispose()},t.prototype.render=function(){var e=this.props,t=e.className,i=void 0===t?"":t,o=e.elementToFocusOnDismiss,r=e.firstFocusableSelector,m=e.focusTrapZoneProps,p=e.forceFocusInsideTrap,u=e.hasCloseButton,h=e.headerText,v=e.headerClassName,g=void 0===v?"":v,_=e.ignoreExternalFocusing,f=e.isBlocking,y=e.isFooterAtBottom,F=e.isLightDismiss,w=e.isHiddenOnDismiss,P=e.layerProps,k=e.overlayProps,T=e.type,B=e.styles,R=e.theme,j=e.customWidth,S=e.onLightDismissClick,E=void 0===S?this._onPanelClick:S,D=e.onRenderNavigation,I=void 0===D?this._onRenderNavigation:D,L=e.onRenderHeader,H=void 0===L?this._onRenderHeader:L,A=e.onRenderBody,W=void 0===A?this._onRenderBody:A,Z=e.onRenderFooter,G=void 0===Z?this._onRenderFooter:Z,Y=this.state,z=Y.isFooterSticky,J=Y.visibility,U=Y.id,M=T===x.e.smallFixedNear||T===x.e.customNear,V=Object(b.e)(R)?M:!M,X=T===x.e.custom||T===x.e.customNear?{width:j}:{},q=Object(O.a)(this.props,O.n),K=this.isActive,Q=J===n.animatingClosed||J===n.animatingOpen;if(this._headerTextId=h&&U+"-headerText",!K&&!Q&&!w)return null;this._classNames=N(B,{theme:R,className:i,focusTrapZoneClassName:m?m.className:void 0,hasCloseButton:u,headerClassName:g,isAnimating:Q,isFooterSticky:z,isFooterAtBottom:y,isOnRightSide:V,isOpen:K,isHiddenOnDismiss:w,type:T,hasCustomNavigation:this._hasCustomNavigation});var $,ee=this._classNames,te=this._allowTouchBodyScroll;return f&&K&&($=a.createElement(d.e,Object(s.__assign)({className:ee.overlay,isDarkThemed:!1,onClick:F?E:void 0,allowTouchBodyScroll:te},k))),a.createElement(l.e,Object(s.__assign)({},P),a.createElement(c.e,{role:"dialog","aria-modal":"true",ariaLabelledBy:this._headerTextId?this._headerTextId:void 0,onDismiss:this.dismiss,className:ee.hiddenPanel},a.createElement("div",Object(s.__assign)({"aria-hidden":!K&&Q},q,{ref:this._panel,className:ee.root}),$,a.createElement(C.e,Object(s.__assign)({ignoreExternalFocusing:_,forceFocusInsideTrap:!(!f||w&&!K)&&p,firstFocusableSelector:r,isClickableOutsideFocusTrap:!0},m,{className:ee.main,style:X,elementToFocusOnDismiss:o}),a.createElement("div",{className:ee.commands,"data-is-visible":!0},I(this.props,this._onRenderNavigation)),a.createElement("div",{className:ee.contentInner},(this._hasCustomNavigation||!u)&&H(this.props,this._onRenderHeader,this._headerTextId),a.createElement("div",{ref:this._allowScrollOnPanel,className:ee.scrollableContent,"data-is-scrollable":!0},W(this.props,this._onRenderBody)),G(this.props,this._onRenderFooter))))))},t.prototype.open=function(){void 0===this.props.isOpen&&(this.isActive||this.setState({visibility:n.animatingOpen}))},t.prototype.close=function(){void 0===this.props.isOpen&&this.isActive&&this.setState({visibility:n.animatingClosed})},Object.defineProperty(t.prototype,"isActive",{get:function(){return this.state.visibility===n.open||this.state.visibility===n.animatingOpen},enumerable:!0,configurable:!0}),t.prototype._shouldListenForOuterClick=function(e){return!!e.isBlocking&&!!e.isOpen},t.prototype._updateFooterPosition=function(){var e=this._scrollableContent;if(e){var t=e.clientHeight,i=e.scrollHeight;this.setState({isFooterSticky:t<i})}},t.prototype._dismissOnOuterClick=function(e){var t=this._panel.current;this.isActive&&t&&!e.defaultPrevented&&(Object(y.e)(t,e.target)||(this.props.onOuterClick?(this.props.onOuterClick(),e.preventDefault()):this.dismiss(e)))},t.defaultProps={isHiddenOnDismiss:!1,isOpen:void 0,isBlocking:!0,hasCloseButton:!0,type:x.e.smallFixedFar},t}(a.Component),R=i(27),j={root:"ms-Panel",main:"ms-Panel-main",commands:"ms-Panel-commands",contentInner:"ms-Panel-contentInner",scrollableContent:"ms-Panel-scrollableContent",navigation:"ms-Panel-navigation",closeButton:"ms-Panel-closeButton ms-PanelAction-close",header:"ms-Panel-header",headerText:"ms-Panel-headerText",content:"ms-Panel-content",footer:"ms-Panel-footer",footerInner:"ms-Panel-footerInner",isOpen:"is-open",hasCloseButton:"ms-Panel--hasCloseButton",smallFluid:"ms-Panel--smFluid",smallFixedNear:"ms-Panel--smLeft",smallFixedFar:"ms-Panel--sm",medium:"ms-Panel--md",large:"ms-Panel--lg",largeFixed:"ms-Panel--fixed",extraLarge:"ms-Panel--xl",custom:"ms-Panel--custom",customNear:"ms-Panel--customLeft"},S="100%",E="auto",D=272,I=340,L=592,H=644,A=940,W="auto",Z=0,G=48,Y=428,z=176,J=((F={})["@media (min-width: "+R.l+"px)"]={width:I},F),U=((w={})["@media (min-width: "+R.d+"px)"]={width:L},w["@media (min-width: "+R.p+"px)"]={width:H},w),M=((P={})["@media (min-width: "+R.f+"px)"]={left:G,width:E},P["@media (min-width: "+R.m+"px)"]={left:Y},P),V=((k={})["@media (min-width: "+R.m+"px)"]={left:W,width:A},k),X=((T={})["@media (min-width: "+R.m+"px)"]={left:z},T),q=function(e){var t;switch(e){case x.e.smallFixedFar:t=Object(s.__assign)({},J);break;case x.e.medium:t=Object(s.__assign)(Object(s.__assign)({},J),U);break;case x.e.large:t=Object(s.__assign)(Object(s.__assign)(Object(s.__assign)({},J),U),M);break;case x.e.largeFixed:t=Object(s.__assign)(Object(s.__assign)(Object(s.__assign)(Object(s.__assign)({},J),U),M),V);break;case x.e.extraLarge:t=Object(s.__assign)(Object(s.__assign)(Object(s.__assign)(Object(s.__assign)({},J),U),M),X)}return t},K={paddingLeft:"24px",paddingRight:"24px"},Q=Object(o.e)(B,(function(e){var t,i=e.className,n=e.focusTrapZoneClassName,o=e.hasCloseButton,a=e.headerClassName,r=e.isAnimating,l=e.isFooterSticky,d=e.isFooterAtBottom,c=e.isOnRightSide,m=e.isOpen,p=e.isHiddenOnDismiss,u=e.hasCustomNavigation,h=e.theme,v=e.type,g=void 0===v?x.e.smallFixedFar:v,_=h.effects,f=h.fonts,b=h.semanticColors,O=Object(R.D)(j,h),y=g===x.e.custom||g===x.e.customNear;return{root:[O.root,h.fonts.medium,m&&O.isOpen,o&&O.hasCloseButton,{pointerEvents:"none",position:"absolute",top:0,left:0,right:0,bottom:0},y&&c&&O.custom,y&&!c&&O.customNear,i],overlay:[{pointerEvents:"auto",cursor:"pointer"},m&&r&&R.e.fadeIn100,!m&&r&&R.e.fadeOut100],hiddenPanel:[!m&&!r&&p&&{visibility:"hidden"}],main:[O.main,{backgroundColor:b.bodyBackground,boxShadow:_.elevation64,pointerEvents:"auto",position:"absolute",display:"flex",flexDirection:"column",overflowX:"hidden",overflowY:"auto",WebkitOverflowScrolling:"touch",bottom:0,top:0,left:W,right:Z,width:S,selectors:Object(s.__assign)((t={},t[R.i]={borderLeft:"3px solid "+b.variantBorder,borderRight:"3px solid "+b.variantBorder},t),q(g))},g===x.e.smallFluid&&{left:Z},g===x.e.smallFixedNear&&{left:Z,right:W,width:D},g===x.e.customNear&&{right:"auto",left:0},y&&{maxWidth:"100vw"},m&&r&&!c&&R.e.slideRightIn40,m&&r&&c&&R.e.slideLeftIn40,!m&&r&&!c&&R.e.slideLeftOut40,!m&&r&&c&&R.e.slideRightOut40,n],commands:[O.commands,{marginTop:18},u&&{marginTop:"inherit"}],navigation:[O.navigation,{display:"flex",justifyContent:"flex-end"},u&&{height:"44px"}],contentInner:[O.contentInner,{display:"flex",flexDirection:"column",flexGrow:1,overflowY:"hidden"}],header:[O.header,K,{alignSelf:"flex-start"},o&&!u&&{flexGrow:1},u&&{flexShrink:0}],headerText:[O.headerText,f.xLarge,{color:b.bodyText,lineHeight:"27px",overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word",hyphens:"auto"},a],scrollableContent:[O.scrollableContent,{overflowY:"auto"},d&&{flexGrow:1}],content:[O.content,K,{paddingBottom:20}],footer:[O.footer,{flexShrink:0,borderTop:"1px solid transparent",transition:"opacity "+R.n.durationValue3+" "+R.n.easeFunction2},l&&{background:b.bodyBackground,borderTopColor:b.variantBorder}],footerInner:[O.footerInner,K,{paddingBottom:16,paddingTop:16}],subComponentStyles:{closeButton:{root:[O.closeButton,{marginRight:14,color:h.palette.neutralSecondary,fontSize:R.r.large},u&&{marginRight:0,height:"auto",width:"44px"}],rootHovered:{color:h.palette.neutralPrimary}}}}}),void 0,{scope:"Panel"})}}]);
//# sourceMappingURL=index.2.js.map