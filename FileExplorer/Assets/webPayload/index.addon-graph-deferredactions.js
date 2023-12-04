﻿(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1041:function(e,t,r){"use strict";r.r(t),r.d(t,"createRetryProgressItemsOperationHandler",(function(){return O}));var n=r(0),o=r(60),a=r(117),i=r(35),c=r(127),s=r(3),m=r(178),d=r(20),u=r(56),l=r(332),v=r(71);function O(e,t){return Object(a.createBatchedItemsOperationHandler)()((function(e){var r=this;return function(a){return Object(n.__awaiter)(r,void 0,void 0,(function(){var r,O,f,p,g,y,I,b,j,F,h;return Object(n.__generator)(this,(function(T){switch(T.label){case 0:for(r=a(Object(i.readItems)((function(r){var o={operationTypeFacet:t,items:{}},a=new c.ItemResolver;function i(e){var c,O=r.demandItemFacet(u.sourceItemFacet,e),f=O&&O.itemKey,p=r.demandItemFacet(t,e),g=Object(l.getOverallSimpleProgressBreakdown)(r,{itemKey:e}).phase;f&&p&&"failed"===g&&(o.items[f]=Object(n.__assign)(Object(n.__assign)({},p),{progressItemKey:e}),a.resolveItems({items:(c={},c[e]=Object(n.__assign)({},Object(s.pack)({error:m.errorFacet},{error:new d.Delete})),c)}));var y=r.demandItemFacet(v.childItemsFacet,e);if(y)for(var I=0,b=y.itemKeys;I<b.length;I++){i(b[I])}}for(var O=0,f=Object.keys(e.items);O<f.length;O++){i(f[O])}return{itemResolver:a,operationPayload:o}}))),a(r.itemResolver.execute()),O=a(Object(o.startOperation)(r.operationPayload)),f=O.completed,p=O.items,g=0,y=Object.keys(p);g<y.length;g++)I=y[g],b=p[I],j=b.started,F=b.completed,(h=r.operationPayload.items[I].progressItemKey)&&a(Object(l.trackItemProgress)({progressItemKey:h,started:j,completed:F}));return[4,f];case 1:return T.sent(),[2]}}))}))}}))}},1124:function(e,t,r){e.exports=r(921)},1412:function(e,t,r){e.exports=r(1041)},1413:function(e,t,r){e.exports=r(240)},1414:function(e,t,r){e.exports=r(966)},1488:function(e,t,r){"use strict";r.r(t),r.d(t,"addToOneDriveWithProgress",(function(){return z})),r.d(t,"removeFromOneDriveWithProgress",(function(){return N}));var n=r(0),o=r(19),a=r(1),i=r(907),c=r(1036),s=r(352),m=r(898),d=new Proxy({},{get:(e,t)=>localizationLoader.getLocalizedString("mltKFgCyoRK2cohrIVzQtA",t)}),u=r(6),l=r(9),v=r(957),O=r(339),f=r(208),p=r(205),g=r(1412),y=r(1124),I=r(1035),b=r(36),j=r(336),F=r(51),h=r(347),T=r(55),K=r(1413),P=Object(T.createItemCacheComponent)((function(e,t){var r=t.itemKeys,o=t.existedDescendants,i=r.filter((function(t){var r=e.demandItemFacet(O.errorFacet,t);if(r&&r instanceof K.ItemOperationError&&I.t.unpack(r.facets))return!0;return!1})),c=e.dispatch;return a.createElement(p.Action,{onExecute:function(){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){return Object(n.__generator)(this,(function(e){return c(Object(h.resolveItems)({items:Object(j.makeObject)(i,(function(){return v.t.pack({replaceShortcut:o})}))})),c(Object(y.retryProgressItems)({items:Object(j.makeObject)(i,(function(){return{}}))})),[2]}))}))},isAvailable:i.length>0})})),D=Object(F.withSelectedItems)()(P),C=r(1414),k=r(7),_=r(11),w=r(5);var A=Object(u.createAddon)((function(){return function(e){e(Object(l.registerControlHandler)(v.n,c.progressControl)(Object(l.createControlHandler)()(x))),e(Object(u.registerOperationHandler)(v.n,y.retryProgressItemsOperation)(Object(g.createRetryProgressItemsOperationHandler)(v.n,v.t)))}}));function x(){return function(e){return E}}function E(e,t){var r,c,u,l,v,g=Object(m.getOverallSimpleProgressBreakdown)(e,t),y=g.phase,j=g.count,F=e.demandItemFacet(O.errorFacet,t.itemKey),h=(Object(s.getConfiguration)(e,{addToOneDriveConfgiuration:b.addToOneDriveConfgiurationFacet}).addToOneDriveConfgiuration||{}).hostAppIsOneDrive;F&&F instanceof f.ItemOperationError&&(r=I.n.unpack(F.facets),c=I.e.unpack(F.facets),u=I.t.unpack(F.facets));var T=[],K=function(e){var t;return(t={})[i.ProgressPhase.started]=function(t){var r=t.count;return Object(o.formatToArray)(Object(o.getLocalizedCountValue)(e?d.addToOneDriveStartedItemsTitle:d.addToOneDriveHostOutOfODStartedItemsTitle,d.addToOneDriveCompletedItemsTitleIntervals,r)||"",r)},t[i.ProgressPhase.completed]=function(t){var r=t.count,n=t.itemLink;return Object(o.formatToArray)(Object(o.getLocalizedCountValue)(e?d.addToOneDriveCompletedItemsTitle:d.addToOneDriveHostOutOfODCompletedItemsTitle,d.addToOneDriveCompletedItemsTitleIntervals,r)||"",r,n)},t[i.ProgressPhase.failed]=function(e){var t=e.count;return Object(o.formatToArray)(Object(o.getLocalizedCountValue)(d.addToOneDriveFailedItemsTitle,d.addToOneDriveFailedItemsTitleIntervals,t)||"",t)},t[i.ProgressPhase.canceled]=function(e){var t=e.count;return Object(o.formatToArray)(Object(o.getLocalizedCountValue)(d.addToOneDriveFailedItemsTitle,d.addToOneDriveFailedItemsTitleIntervals,t)||"",t)},t}(h);if("completed"===y){var P=function(e,t){var r=function(e,t){var r=void 0,n=void 0,o=void 0,a=void 0;if(o=e.demandItemFacet(i.sourceItemFacet,t.itemKey),r=o&&o.itemKey,a=e.demandItemFacet(w.parentFolderItemFacet,r),n=a&&a.itemKey,!r){var c=e.demandItemFacet(k.childItemsFacet,t.itemKey);if(c)for(var s=0,m=c.itemKeys;s<m.length;s++){var d=m[s];o=e.demandItemFacet(i.sourceItemFacet,d),r=o&&o.itemKey;var u=(a=e.demandItemFacet(w.parentFolderItemFacet,r))&&a.itemKey;if(u)if(n){if(u!==n)break}else n=u}}return{sourceItemKey:r,parentItemKey:n}}(e,{itemKey:t.itemKey}).sourceItemKey,n=function(e,t){var r,n=e.demandItemFacet(_.driveItemKeyFacet,t.itemKey),o=n&&n.endpoint;o&&(r=_.driveItemKeyFacet.serialize({endpoint:o,driveId:"me",itemId:"root"}));return r}(e,{itemKey:r});return a.createElement(C.ItemLink,{key:"link",itemKey:n},d.addToOneDriveMyFiles)}(e,{itemKey:t.itemKey});l=K[y]({count:j,itemLink:P})}else l=K[y]({count:j});if(y===i.ProgressPhase.failed){var A,x=void 0,E=void 0;if(r?(v=d.a2odErrorMessageAlreadyExisted,x=r.existShortcutUrl,A=r.existShortcutName):c?(x=c.existShortcutUrl,A=c.existShortcutName,v=Object(o.formatToArray)(d.a2odErrorMessageAscendantExists,A)):u&&(v=Object(o.formatToArray)(d.a2odErrorMessageDescendantExists,t.title),E=u.nestDescendantItemKeys),x){var S=function(e){var t=this,r=e.url;return a.createElement(p.Action,{onExecute:function(){return Object(n.__awaiter)(t,void 0,void 0,(function(){return Object(n.__generator)(this,(function(e){return window.open(r),[2]}))}))}})}({url:x});T.push({key:"navigateToShortcut",name:d.a2odOpenExistedShortcutFolderCommand,action:S})}else E&&E.length>0&&T.push({key:"replaceShortcut",name:d.a2odReplaceExistedShortcutCommand,action:a.createElement(D,{existedDescendants:E})})}return Object(n.__assign)(Object(n.__assign)(Object(n.__assign)({},l&&"item"!==t.format?{title:l}:{}),v?{description:v}:{}),{commands:T})}var S,z=Object(m.implementOperationWithProgress)({operationTypeFacet:v.t,progressKeyFacet:v.n,initializeBatch:function(){return A}}),L=new Proxy({},{get:(e,t)=>localizationLoader.getLocalizedString("8cWetXMySDvnvly3jgw9XQ",t)}),H=new(r(2).Facet)("removeFromOneDrive"),V=new m.ProgressKeyFacet("removeFromOneDrive"),R=(Object(f.implementOperation)({operationTypeFacet:H}),(S={})[i.ProgressPhase.started]=function(e){return Object(o.formatToArray)(Object(o.getLocalizedCountValue)(L.removeFromOneDriveStartedTitle,L.removeFromOneDriveStartedTitleIntervals,e)||"",e)},S[i.ProgressPhase.completed]=function(e){return Object(o.formatToArray)(Object(o.getLocalizedCountValue)(L.removeFromOneDriveCompletedTitle,L.removeFromOneDriveCompletedTitleIntervals,e)||"",e)},S[i.ProgressPhase.failed]=function(e){return Object(o.formatToArray)(Object(o.getLocalizedCountValue)(L.removeFromOneDriveFailedTitle,L.removeFromOneDriveFailedTitleIntervals,e)||"",e)},S[i.ProgressPhase.canceled]=function(e){return Object(o.formatToArray)(Object(o.getLocalizedCountValue)(L.removeFromOneDriveFailedTitle,L.removeFromOneDriveFailedTitleIntervals,e)||"",e)},S);function W(e,t){var r=Object(m.getOverallSimpleProgressBreakdown)(e,t),o=r.count,a=r.phase,i=R[a](o);return Object(n.__assign)({},i&&"item"!==t.format?{title:i}:{})}function B(){return function(e){return W}}var M=Object(u.createAddon)((function(){return function(e){e(Object(l.registerControlHandler)(V,c.progressControl)(Object(l.createControlHandler)()(B)))}})),N=Object(m.implementOperationWithProgress)({operationTypeFacet:H,progressKeyFacet:V,initializeBatch:function(){return M}})},921:function(e,t,r){"use strict";r.r(t),r.d(t,"retryProgressItemsOperation",(function(){return a})),r.d(t,"retryProgressItems",(function(){return i}));var n=r(3),o=r(60),a=new n.Facet("retryProgressItemsOperation"),i=Object(o.implementOperation)({operationTypeFacet:a})},966:function(e,t,r){"use strict";r.r(t),r.d(t,"ItemLink",(function(){return l}));var n=r(1),o=r(892),a=r(21),i=r(880),c=r(334),s=r(10),m=r(298),d=r(301),u=r(302);var l=function(e){var t=e.itemKey,r=e.action;return n.createElement(o.WithItemCache,null,(function(o){var l,v=o.itemCache;if(e.children)l=e.children;else{var O=v.demandItemFacet(s.displayNameFacet,t);l=O}var f=Object(m.getCurrentItemKey)(v),p=(r||!function(e,t){var r=Object(d.e)(e,{itemKey:t.itemKey1}),n=Object(d.e)(e,{itemKey:t.itemKey2});return Object(u.getPreferredItemKey)(e,{itemKey:r})===Object(u.getPreferredItemKey)(e,{itemKey:n})}(v,{itemKey1:t,itemKey2:f}))&&t?n.createElement(c.ItemDefaultClickAction,{itemKey:t}):null;return n.createElement(a.WithAction,{action:p},(function(e){var t=e.isAvailable,r=e.execute,o=t?function(){r().catch((function(){}))}:void 0;return o?n.createElement(i.e,{onClick:o},l):n.createElement("span",null,l)}))}))}}}]);
//# sourceMappingURL=index.addon-graph-deferredactions.js.map