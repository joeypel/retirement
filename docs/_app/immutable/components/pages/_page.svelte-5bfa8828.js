import{S as Nt,i as $t,s as Ft,k as m,q as I,a as w,l as g,m as h,r as S,h as c,c as j,n as i,b as kt,G as t,I as Kt,J as Jt,u as ct,K as Ut,B as ut,L as Qt,M as Zt,o as tn,N as nn,O as vt,P as bt,Q as jt,R as Et,w as rt,x as at,y as ot,T as Tt,f as st,t as it,z as lt}from"../../chunks/index-3d3f0abf.js";function en(r){let a,n,e,o,s,f,p,d;return{c(){a=m("div"),n=m("label"),e=I(r[1]),o=w(),s=m("input"),this.h()},l(u){a=g(u,"DIV",{class:!0});var v=h(a);n=g(v,"LABEL",{class:!0,for:!0});var b=h(n);e=S(b,r[1]),b.forEach(c),o=j(v),s=g(v,"INPUT",{class:!0,type:!0,step:!0}),v.forEach(c),this.h()},h(){i(n,"class","block text-gray-700 text-sm font-bold mb-2"),i(n,"for",r[1]),i(s,"class","shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"),i(s,"type","number"),i(s,"step",f=r[2]??1),i(a,"class","mb-4")},m(u,v){kt(u,a,v),t(a,n),t(n,e),t(a,o),t(a,s),Kt(s,r[0]),p||(d=Jt(s,"input",r[3]),p=!0)},p(u,[v]){v&2&&ct(e,u[1]),v&2&&i(n,"for",u[1]),v&4&&f!==(f=u[2]??1)&&i(s,"step",f),v&1&&Ut(s.value)!==u[0]&&Kt(s,u[0])},i:ut,o:ut,d(u){u&&c(a),p=!1,d()}}}function rn(r,a,n){let{value:e}=a,{text:o}=a,{step:s}=a;function f(){e=Ut(this.value),n(0,e)}return r.$$set=p=>{"value"in p&&n(0,e=p.value),"text"in p&&n(1,o=p.text),"step"in p&&n(2,s=p.step)},[e,o,s,f]}class Ct extends Nt{constructor(a){super(),$t(this,a,rn,en,Ft,{value:0,text:1,step:2})}}function an(r){let a,n,e,o,s,f,p,d,u;return{c(){a=m("div"),n=w(),e=m("link"),o=m("script"),f=m("style"),p=I(`.ct-series-a .ct-bar {\r
			stroke: #84cc16;\r
		}\r
\r
		.ct-series-b .ct-bar {\r
			stroke: #4d7c0f;\r
		}\r
		.ct-series-a .ct-bar:hover {\r
			stroke: green;\r
		}\r
\r
		.chartist-tooltip {\r
			position: absolute;\r
			display: inline-block;\r
			opacity: 0;\r
			min-width: 5em;\r
			padding: 0.5em;\r
			background: #f4c63d;\r
			color: #453d3f;\r
			font-family: Oxygen, Helvetica, Arial, sans-serif;\r
			font-weight: 700;\r
			text-align: center;\r
			pointer-events: none;\r
			z-index: 1;\r
			-webkit-transition: opacity 0.2s linear;\r
			-moz-transition: opacity 0.2s linear;\r
			-o-transition: opacity 0.2s linear;\r
			transition: opacity 0.2s linear;\r
		}\r
		.chartist-tooltip:before {\r
			content: '';\r
			position: absolute;\r
			top: 100%;\r
			left: 50%;\r
			width: 0;\r
			height: 0;\r
			margin-left: -15px;\r
			border: 15px solid transparent;\r
			border-top-color: #f4c63d;\r
		}\r
		.chartist-tooltip.tooltip-show {\r
			opacity: 1;\r
		}\r
\r
		.ct-area,\r
		.ct-line {\r
			pointer-events: none;\r
		}\r
	`),d=m("script"),u=I(`!(function (a, b) {\r
			'function' == typeof define && define.amd\r
				? define(['chartist'], function (c) {\r
						return (a.returnExportsGlobal = b(c));\r
				  })\r
				: 'object' == typeof exports\r
				? (module.exports = b(require('chartist')))\r
				: (a['Chartist.plugins.tooltip'] = b(Chartist));\r
		})(this, function (a) {\r
			return (\r
				(function (a, b, c) {\r
					'use strict';\r
					function d(a) {\r
						f(a, 'tooltip-show') || (a.className = a.className + ' tooltip-show');\r
					}\r
					function e(a) {\r
						var b = new RegExp('tooltip-show\\\\s*', 'gi');\r
						a.className = a.className.replace(b, '').trim();\r
					}\r
					function f(a, b) {\r
						return (' ' + a.getAttribute('class') + ' ').indexOf(' ' + b + ' ') > -1;\r
					}\r
					function g(a, b) {\r
						do {\r
							a = a.nextSibling;\r
						} while (a && !f(a, b));\r
						return a;\r
					}\r
					function h(a) {\r
						return a.innerText || a.textContent;\r
					}\r
					var i = {\r
						currency: void 0,\r
						currencyFormatCallback: void 0,\r
						tooltipOffset: { x: 0, y: -20 },\r
						anchorToPoint: !1,\r
						appendToBody: !1,\r
						class: void 0,\r
						pointClass: 'ct-point'\r
					};\r
					(c.plugins = c.plugins || {}),\r
						(c.plugins.tooltip = function (j) {\r
							return (\r
								(j = c.extend({}, i, j)),\r
								function (i) {\r
									function k(a, b, c) {\r
										n.addEventListener(a, function (a) {\r
											(b && !f(a.target, b)) || c(a);\r
										});\r
									}\r
									function l(b) {\r
										(p = p || o.offsetHeight), (q = q || o.offsetWidth);\r
										var c,\r
											d,\r
											e = -q / 2 + j.tooltipOffset.x,\r
											f = -p + j.tooltipOffset.y;\r
										if (j.appendToBody)\r
											(o.style.top = b.pageY + f + 'px'), (o.style.left = b.pageX + e + 'px');\r
										else {\r
											var g = n.getBoundingClientRect(),\r
												h = b.pageX - g.left - a.pageXOffset,\r
												i = b.pageY - g.top - a.pageYOffset;\r
											!0 === j.anchorToPoint &&\r
												b.target.x2 &&\r
												b.target.y2 &&\r
												((c = parseInt(b.target.x2.baseVal.value)),\r
												(d = parseInt(b.target.y2.baseVal.value))),\r
												(o.style.top = (d || i) + f + 'px'),\r
												(o.style.left = (c || h) + e + 'px');\r
										}\r
									}\r
									var m = j.pointClass;\r
									i.constructor.name == c.Bar.prototype.constructor.name\r
										? (m = 'ct-bar')\r
										: i.constructor.name == c.Pie.prototype.constructor.name &&\r
										  (m = i.options.donut ? 'ct-slice-donut' : 'ct-slice-pie');\r
									var n = i.container,\r
										o = n.querySelector('.chartist-tooltip');\r
									o ||\r
										((o = b.createElement('div')),\r
										(o.className = j.class ? 'chartist-tooltip ' + j.class : 'chartist-tooltip'),\r
										j.appendToBody ? b.body.appendChild(o) : n.appendChild(o));\r
									var p = o.offsetHeight,\r
										q = o.offsetWidth;\r
									e(o),\r
										k('mouseover', m, function (a) {\r
											var e = a.target,\r
												f = '',\r
												k = i instanceof c.Pie ? e : e.parentNode,\r
												m = k\r
													? e.parentNode.getAttribute('ct:meta') ||\r
													  e.parentNode.getAttribute('ct:series-name')\r
													: '',\r
												n = e.getAttribute('ct:meta') || m || '',\r
												r = !!n,\r
												s = e.getAttribute('ct:value');\r
											if (\r
												(j.transformTooltipTextFnc &&\r
													'function' == typeof j.transformTooltipTextFnc &&\r
													(s = j.transformTooltipTextFnc(s)),\r
												j.tooltipFnc && 'function' == typeof j.tooltipFnc)\r
											)\r
												f = j.tooltipFnc(n, s);\r
											else {\r
												if (j.metaIsHTML) {\r
													var t = b.createElement('textarea');\r
													(t.innerHTML = n), (n = t.value);\r
												}\r
												if (((n = '<span class="chartist-tooltip-meta">' + n + '</span>'), r))\r
													f += n + '<br>';\r
												else if (i instanceof c.Pie) {\r
													var u = g(e, 'ct-label');\r
													u && (f += h(u) + '<br>');\r
												}\r
												s &&\r
													(j.currency &&\r
														(s =\r
															void 0 != j.currencyFormatCallback\r
																? j.currencyFormatCallback(s, j)\r
																: j.currency + s.replace(/(\\d)(?=(\\d{3})+(?:\\.\\d+)?$)/g, '$1,')),\r
													(s = '<span class="chartist-tooltip-value">' + s + '</span>'),\r
													(f += s));\r
											}\r
											f &&\r
												((o.innerHTML = f), l(a), d(o), (p = o.offsetHeight), (q = o.offsetWidth));\r
										}),\r
										k('mouseout', m, function () {\r
											e(o);\r
										}),\r
										k('mousemove', null, function (a) {\r
											!1 === j.anchorToPoint && l(a);\r
										});\r
								}\r
							);\r
						});\r
				})(window, document, a),\r
				a.plugins.tooltip\r
			);\r
		});`),this.h()},l(v){a=g(v,"DIV",{class:!0}),h(a).forEach(c),n=j(v);const b=Qt("svelte-1b3bfpy",document.head);e=g(b,"LINK",{rel:!0,href:!0}),o=g(b,"SCRIPT",{src:!0});var D=h(o);D.forEach(c),f=g(b,"STYLE",{});var V=h(f);p=S(V,`.ct-series-a .ct-bar {\r
			stroke: #84cc16;\r
		}\r
\r
		.ct-series-b .ct-bar {\r
			stroke: #4d7c0f;\r
		}\r
		.ct-series-a .ct-bar:hover {\r
			stroke: green;\r
		}\r
\r
		.chartist-tooltip {\r
			position: absolute;\r
			display: inline-block;\r
			opacity: 0;\r
			min-width: 5em;\r
			padding: 0.5em;\r
			background: #f4c63d;\r
			color: #453d3f;\r
			font-family: Oxygen, Helvetica, Arial, sans-serif;\r
			font-weight: 700;\r
			text-align: center;\r
			pointer-events: none;\r
			z-index: 1;\r
			-webkit-transition: opacity 0.2s linear;\r
			-moz-transition: opacity 0.2s linear;\r
			-o-transition: opacity 0.2s linear;\r
			transition: opacity 0.2s linear;\r
		}\r
		.chartist-tooltip:before {\r
			content: '';\r
			position: absolute;\r
			top: 100%;\r
			left: 50%;\r
			width: 0;\r
			height: 0;\r
			margin-left: -15px;\r
			border: 15px solid transparent;\r
			border-top-color: #f4c63d;\r
		}\r
		.chartist-tooltip.tooltip-show {\r
			opacity: 1;\r
		}\r
\r
		.ct-area,\r
		.ct-line {\r
			pointer-events: none;\r
		}\r
	`),V.forEach(c),d=g(b,"SCRIPT",{});var x=h(d);u=S(x,`!(function (a, b) {\r
			'function' == typeof define && define.amd\r
				? define(['chartist'], function (c) {\r
						return (a.returnExportsGlobal = b(c));\r
				  })\r
				: 'object' == typeof exports\r
				? (module.exports = b(require('chartist')))\r
				: (a['Chartist.plugins.tooltip'] = b(Chartist));\r
		})(this, function (a) {\r
			return (\r
				(function (a, b, c) {\r
					'use strict';\r
					function d(a) {\r
						f(a, 'tooltip-show') || (a.className = a.className + ' tooltip-show');\r
					}\r
					function e(a) {\r
						var b = new RegExp('tooltip-show\\\\s*', 'gi');\r
						a.className = a.className.replace(b, '').trim();\r
					}\r
					function f(a, b) {\r
						return (' ' + a.getAttribute('class') + ' ').indexOf(' ' + b + ' ') > -1;\r
					}\r
					function g(a, b) {\r
						do {\r
							a = a.nextSibling;\r
						} while (a && !f(a, b));\r
						return a;\r
					}\r
					function h(a) {\r
						return a.innerText || a.textContent;\r
					}\r
					var i = {\r
						currency: void 0,\r
						currencyFormatCallback: void 0,\r
						tooltipOffset: { x: 0, y: -20 },\r
						anchorToPoint: !1,\r
						appendToBody: !1,\r
						class: void 0,\r
						pointClass: 'ct-point'\r
					};\r
					(c.plugins = c.plugins || {}),\r
						(c.plugins.tooltip = function (j) {\r
							return (\r
								(j = c.extend({}, i, j)),\r
								function (i) {\r
									function k(a, b, c) {\r
										n.addEventListener(a, function (a) {\r
											(b && !f(a.target, b)) || c(a);\r
										});\r
									}\r
									function l(b) {\r
										(p = p || o.offsetHeight), (q = q || o.offsetWidth);\r
										var c,\r
											d,\r
											e = -q / 2 + j.tooltipOffset.x,\r
											f = -p + j.tooltipOffset.y;\r
										if (j.appendToBody)\r
											(o.style.top = b.pageY + f + 'px'), (o.style.left = b.pageX + e + 'px');\r
										else {\r
											var g = n.getBoundingClientRect(),\r
												h = b.pageX - g.left - a.pageXOffset,\r
												i = b.pageY - g.top - a.pageYOffset;\r
											!0 === j.anchorToPoint &&\r
												b.target.x2 &&\r
												b.target.y2 &&\r
												((c = parseInt(b.target.x2.baseVal.value)),\r
												(d = parseInt(b.target.y2.baseVal.value))),\r
												(o.style.top = (d || i) + f + 'px'),\r
												(o.style.left = (c || h) + e + 'px');\r
										}\r
									}\r
									var m = j.pointClass;\r
									i.constructor.name == c.Bar.prototype.constructor.name\r
										? (m = 'ct-bar')\r
										: i.constructor.name == c.Pie.prototype.constructor.name &&\r
										  (m = i.options.donut ? 'ct-slice-donut' : 'ct-slice-pie');\r
									var n = i.container,\r
										o = n.querySelector('.chartist-tooltip');\r
									o ||\r
										((o = b.createElement('div')),\r
										(o.className = j.class ? 'chartist-tooltip ' + j.class : 'chartist-tooltip'),\r
										j.appendToBody ? b.body.appendChild(o) : n.appendChild(o));\r
									var p = o.offsetHeight,\r
										q = o.offsetWidth;\r
									e(o),\r
										k('mouseover', m, function (a) {\r
											var e = a.target,\r
												f = '',\r
												k = i instanceof c.Pie ? e : e.parentNode,\r
												m = k\r
													? e.parentNode.getAttribute('ct:meta') ||\r
													  e.parentNode.getAttribute('ct:series-name')\r
													: '',\r
												n = e.getAttribute('ct:meta') || m || '',\r
												r = !!n,\r
												s = e.getAttribute('ct:value');\r
											if (\r
												(j.transformTooltipTextFnc &&\r
													'function' == typeof j.transformTooltipTextFnc &&\r
													(s = j.transformTooltipTextFnc(s)),\r
												j.tooltipFnc && 'function' == typeof j.tooltipFnc)\r
											)\r
												f = j.tooltipFnc(n, s);\r
											else {\r
												if (j.metaIsHTML) {\r
													var t = b.createElement('textarea');\r
													(t.innerHTML = n), (n = t.value);\r
												}\r
												if (((n = '<span class="chartist-tooltip-meta">' + n + '</span>'), r))\r
													f += n + '<br>';\r
												else if (i instanceof c.Pie) {\r
													var u = g(e, 'ct-label');\r
													u && (f += h(u) + '<br>');\r
												}\r
												s &&\r
													(j.currency &&\r
														(s =\r
															void 0 != j.currencyFormatCallback\r
																? j.currencyFormatCallback(s, j)\r
																: j.currency + s.replace(/(\\d)(?=(\\d{3})+(?:\\.\\d+)?$)/g, '$1,')),\r
													(s = '<span class="chartist-tooltip-value">' + s + '</span>'),\r
													(f += s));\r
											}\r
											f &&\r
												((o.innerHTML = f), l(a), d(o), (p = o.offsetHeight), (q = o.offsetWidth));\r
										}),\r
										k('mouseout', m, function () {\r
											e(o);\r
										}),\r
										k('mousemove', null, function (a) {\r
											!1 === j.anchorToPoint && l(a);\r
										});\r
								}\r
							);\r
						});\r
				})(window, document, a),\r
				a.plugins.tooltip\r
			);\r
		});`),x.forEach(c),b.forEach(c),this.h()},h(){i(a,"class","ct-chart ct-major-seventh"),i(e,"rel","stylesheet"),i(e,"href","//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"),Zt(o.src,s="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js")||i(o,"src",s)},m(v,b){kt(v,a,b),kt(v,n,b),t(document.head,e),t(document.head,o),t(document.head,f),t(f,p),t(document.head,d),t(d,u)},p:ut,i:ut,o:ut,d(v){v&&c(a),v&&c(n),c(e),c(o),c(f),c(d)}}}function on(r){let n=new Date().getFullYear();return r.map((e,o)=>e.map((s,f)=>({meta:o==0?`${n+f} With Savings`:`${n+f} Without Savings`,value:s.toFixed(2)})))}function sn(r){let n=new Date().getFullYear();return r[0].map((e,o)=>n+o)}function ln(r,a,n){let{data:e}=a;function o(){var s={labels:sn(e),series:on(e)};new Chartist.Bar(".ct-chart",s,{stackBars:!0,axisX:{labelInterpolationFnc(f){return f%5?null:f}},plugins:[Chartist.plugins.tooltip({currency:"$"})]})}return tn(async()=>{o()}),nn(function(){o()}),r.$$set=s=>{"data"in s&&n(0,e=s.data)},[e]}class cn extends Nt{constructor(a){super(),$t(this,a,ln,an,Ft,{data:0})}}function un(r){let a,n,e,o,s,f,p,d=`$${Number(r[1]).toLocaleString()}`,u,v,b,D,V,x,y,C=r[0][1].length-1+"",E,z,Q,O,Z,T,N,$,tt,P,F=`$${Number(r[2]).toLocaleString()}`,G,_t,K,yt,ft,U,J=Math.round(r[2]/r[1]*100)/100*100+"",pt,dt,xt,nt,l,_,L,H,k,B,q=`$${Number(r[3]).toLocaleString()}`,R,ht,mt,Ht,Mt,et,wt=Math.round(r[3]/r[1]*100)/100*100+"",It,Pt,Vt,St;return{c(){a=m("section"),n=m("div"),e=m("div"),o=vt("svg"),s=vt("path"),f=w(),p=m("h5"),u=I(d),v=w(),b=m("h6"),D=I("Total Saved"),V=w(),x=m("p"),y=I("Over "),E=I(C),z=I(" years"),Q=w(),O=m("hr"),Z=w(),T=m("div"),N=vt("svg"),$=vt("path"),tt=w(),P=m("h5"),G=I(F),_t=w(),K=m("h6"),yt=I("Total Contributions"),ft=w(),U=m("p"),pt=I(J),dt=I("% of total"),xt=w(),nt=m("hr"),l=w(),_=m("div"),L=vt("svg"),H=vt("path"),k=w(),B=m("h5"),R=I(q),ht=w(),mt=m("h6"),Ht=I("Total Interest"),Mt=w(),et=m("p"),It=I(wt),Pt=I("% of total"),Vt=w(),St=m("hr"),this.h()},l(M){a=g(M,"SECTION",{class:!0});var A=h(a);n=g(A,"DIV",{class:!0});var gt=h(n);e=g(gt,"DIV",{class:!0});var Y=h(e);o=bt(Y,"svg",{class:!0,xmlns:!0,viewBox:!0});var zt=h(o);s=bt(zt,"path",{fill:!0,d:!0}),h(s).forEach(c),zt.forEach(c),f=j(Y),p=g(Y,"H5",{class:!0});var Ot=h(p);u=S(Ot,d),Ot.forEach(c),v=j(Y),b=g(Y,"H6",{class:!0});var qt=h(b);D=S(qt,"Total Saved"),qt.forEach(c),V=j(Y),x=g(Y,"P",{class:!0});var Lt=h(x);y=S(Lt,"Over "),E=S(Lt,C),z=S(Lt," years"),Lt.forEach(c),Q=j(Y),O=g(Y,"HR",{class:!0}),Y.forEach(c),Z=j(gt),T=g(gt,"DIV",{class:!0});var W=h(T);N=bt(W,"svg",{class:!0,xmlns:!0,viewBox:!0});var At=h(N);$=bt(At,"path",{fill:!0,d:!0}),h($).forEach(c),At.forEach(c),tt=j(W),P=g(W,"H5",{class:!0});var Rt=h(P);G=S(Rt,F),Rt.forEach(c),_t=j(W),K=g(W,"H6",{class:!0});var Yt=h(K);yt=S(Yt,"Total Contributions"),Yt.forEach(c),ft=j(W),U=g(W,"P",{class:!0});var Bt=h(U);pt=S(Bt,J),dt=S(Bt,"% of total"),Bt.forEach(c),xt=j(W),nt=g(W,"HR",{class:!0}),W.forEach(c),l=j(gt),_=g(gt,"DIV",{class:!0});var X=h(_);L=bt(X,"svg",{class:!0,xmlns:!0,viewBox:!0});var Wt=h(L);H=bt(Wt,"path",{fill:!0,d:!0}),h(H).forEach(c),Wt.forEach(c),k=j(X),B=g(X,"H5",{class:!0});var Xt=h(B);R=S(Xt,q),Xt.forEach(c),ht=j(X),mt=g(X,"H6",{class:!0});var Gt=h(mt);Ht=S(Gt,"Total Interest"),Gt.forEach(c),Mt=j(X),et=g(X,"P",{class:!0});var Dt=h(et);It=S(Dt,wt),Pt=S(Dt,"% of total"),Dt.forEach(c),Vt=j(X),St=g(X,"HR",{class:!0}),X.forEach(c),gt.forEach(c),A.forEach(c),this.h()},h(){i(s,"fill","currentColor"),i(s,"d","M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"),i(o,"class","w-12 h-12 text-blue-600 mx-auto mb-6"),i(o,"xmlns","http://www.w3.org/2000/svg"),i(o,"viewBox","0 0 512 512"),i(p,"class","text-lg font-medium text-blue-600 font-bold mb-4"),i(b,"class","font-medium text-gray-500"),i(x,"class","font-medium text-sm text-gray-500"),i(O,"class","absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block"),i(e,"class","mb-12 lg:mb-0 relative"),i($,"fill","currentColor"),i($,"d","M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"),i(N,"class","w-12 h-12 text-blue-600 mx-auto mb-6"),i(N,"xmlns","http://www.w3.org/2000/svg"),i(N,"viewBox","0 0 512 512"),i(P,"class","text-lg font-medium text-blue-600 font-bold mb-4"),i(K,"class","font-medium text-gray-500"),i(U,"class","font-medium text-sm text-gray-500"),i(nt,"class","absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block"),i(T,"class","mb-12 lg:mb-0 relative"),i(H,"fill","currentColor"),i(H,"d","M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"),i(L,"class","w-12 h-12 text-blue-600 mx-auto mb-6"),i(L,"xmlns","http://www.w3.org/2000/svg"),i(L,"viewBox","0 0 512 512"),i(B,"class","text-lg font-medium text-blue-600 font-bold mb-4"),i(mt,"class","font-medium text-gray-500"),i(et,"class","font-medium text-sm text-gray-500"),i(St,"class","absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block"),i(_,"class","mb-12 md:mb-0 relative"),i(n,"class","grid md:grid-cols-3 lg:grid-cols-3 gap-x-6 lg:gap-x-0 items-center"),i(a,"class","mb-32 text-gray-800 text-center")},m(M,A){kt(M,a,A),t(a,n),t(n,e),t(e,o),t(o,s),t(e,f),t(e,p),t(p,u),t(e,v),t(e,b),t(b,D),t(e,V),t(e,x),t(x,y),t(x,E),t(x,z),t(e,Q),t(e,O),t(n,Z),t(n,T),t(T,N),t(N,$),t(T,tt),t(T,P),t(P,G),t(T,_t),t(T,K),t(K,yt),t(T,ft),t(T,U),t(U,pt),t(U,dt),t(T,xt),t(T,nt),t(n,l),t(n,_),t(_,L),t(L,H),t(_,k),t(_,B),t(B,R),t(_,ht),t(_,mt),t(mt,Ht),t(_,Mt),t(_,et),t(et,It),t(et,Pt),t(_,Vt),t(_,St)},p(M,[A]){A&2&&d!==(d=`$${Number(M[1]).toLocaleString()}`)&&ct(u,d),A&1&&C!==(C=M[0][1].length-1+"")&&ct(E,C),A&4&&F!==(F=`$${Number(M[2]).toLocaleString()}`)&&ct(G,F),A&6&&J!==(J=Math.round(M[2]/M[1]*100)/100*100+"")&&ct(pt,J),A&8&&q!==(q=`$${Number(M[3]).toLocaleString()}`)&&ct(R,q),A&10&&wt!==(wt=Math.round(M[3]/M[1]*100)/100*100+"")&&ct(It,wt)},i:ut,o:ut,d(M){M&&c(a)}}}function fn(r,a,n){var p,d;let{chartData:e}=a,{totalSaved:o=((p=e[1][e[1].length-1])==null?void 0:p.toFixed(2))||0}=a,{totalContributed:s=((d=e[0][e[0].length-1])==null?void 0:d.toFixed(2))||0}=a,{totalInterest:f=o-s}=a;return r.$$set=u=>{"chartData"in u&&n(0,e=u.chartData),"totalSaved"in u&&n(1,o=u.totalSaved),"totalContributed"in u&&n(2,s=u.totalContributed),"totalInterest"in u&&n(3,f=u.totalInterest)},[e,o,s,f]}class pn extends Nt{constructor(a){super(),$t(this,a,fn,un,Ft,{chartData:0,totalSaved:1,totalContributed:2,totalInterest:3})}}function dn(r){let a,n,e,o,s,f,p,d,u,v,b,D,V,x,y,C,E,z,Q,O,Z,T,N,$,tt,P,F,G;function _t(l){r[7](l)}let K={text:"Starting Savings",step:500};r[2]!==void 0&&(K.value=r[2]),s=new Ct({props:K}),jt.push(()=>Et(s,"value",_t,r[2]));function yt(l){r[8](l)}let ft={text:"Your Age",step:1};r[3]!==void 0&&(ft.value=r[3]),d=new Ct({props:ft}),jt.push(()=>Et(d,"value",yt,r[3]));function U(l){r[9](l)}let J={text:"Retirement Age",step:1};r[4]!==void 0&&(J.value=r[4]),b=new Ct({props:J}),jt.push(()=>Et(b,"value",U,r[4]));function pt(l){r[10](l)}let dt={text:"Interest Rate %",step:.1};r[1]!==void 0&&(dt.value=r[1]),x=new Ct({props:dt}),jt.push(()=>Et(x,"value",pt,r[1]));function xt(l){r[11](l)}let nt={text:"Monthly Contributions",step:100};return r[0]!==void 0&&(nt.value=r[0]),E=new Ct({props:nt}),jt.push(()=>Et(E,"value",xt,r[0])),$=new cn({props:{data:r[5]}}),F=new pn({props:{chartData:r[5]}}),{c(){a=m("div"),n=m("div"),e=m("div"),o=m("form"),rt(s.$$.fragment),p=w(),rt(d.$$.fragment),v=w(),rt(b.$$.fragment),V=w(),rt(x.$$.fragment),C=w(),rt(E.$$.fragment),Q=w(),O=m("p"),Z=I("©2020 Test Information here"),T=w(),N=m("div"),rt($.$$.fragment),tt=w(),P=m("div"),rt(F.$$.fragment),this.h()},l(l){a=g(l,"DIV",{class:!0});var _=h(a);n=g(_,"DIV",{class:!0});var L=h(n);e=g(L,"DIV",{class:!0});var H=h(e);o=g(H,"FORM",{});var k=h(o);at(s.$$.fragment,k),p=j(k),at(d.$$.fragment,k),v=j(k),at(b.$$.fragment,k),V=j(k),at(x.$$.fragment,k),C=j(k),at(E.$$.fragment,k),k.forEach(c),Q=j(H),O=g(H,"P",{class:!0});var B=h(O);Z=S(B,"©2020 Test Information here"),B.forEach(c),H.forEach(c),T=j(L),N=g(L,"DIV",{class:!0});var q=h(N);at($.$$.fragment,q),q.forEach(c),L.forEach(c),tt=j(_),P=g(_,"DIV",{class:!0});var R=h(P);at(F.$$.fragment,R),R.forEach(c),_.forEach(c),this.h()},h(){i(O,"class","text-center text-gray-500 text-xs"),i(e,"class","w-full md:max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"),i(N,"class","flex-grow min-w-[500px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"),i(n,"class","flex flex-wrap gap-2"),i(P,"class","bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"),i(a,"class","container mx-auto px-4")},m(l,_){kt(l,a,_),t(a,n),t(n,e),t(e,o),ot(s,o,null),t(o,p),ot(d,o,null),t(o,v),ot(b,o,null),t(o,V),ot(x,o,null),t(o,C),ot(E,o,null),t(e,Q),t(e,O),t(O,Z),t(n,T),t(n,N),ot($,N,null),t(a,tt),t(a,P),ot(F,P,null),G=!0},p(l,[_]){const L={};!f&&_&4&&(f=!0,L.value=l[2],Tt(()=>f=!1)),s.$set(L);const H={};!u&&_&8&&(u=!0,H.value=l[3],Tt(()=>u=!1)),d.$set(H);const k={};!D&&_&16&&(D=!0,k.value=l[4],Tt(()=>D=!1)),b.$set(k);const B={};!y&&_&2&&(y=!0,B.value=l[1],Tt(()=>y=!1)),x.$set(B);const q={};!z&&_&1&&(z=!0,q.value=l[0],Tt(()=>z=!1)),E.$set(q);const R={};_&32&&(R.data=l[5]),$.$set(R);const ht={};_&32&&(ht.chartData=l[5]),F.$set(ht)},i(l){G||(st(s.$$.fragment,l),st(d.$$.fragment,l),st(b.$$.fragment,l),st(x.$$.fragment,l),st(E.$$.fragment,l),st($.$$.fragment,l),st(F.$$.fragment,l),G=!0)},o(l){it(s.$$.fragment,l),it(d.$$.fragment,l),it(b.$$.fragment,l),it(x.$$.fragment,l),it(E.$$.fragment,l),it($.$$.fragment,l),it(F.$$.fragment,l),G=!1},d(l){l&&c(a),lt(s),lt(d),lt(b),lt(x),lt(E),lt($),lt(F)}}}function hn(r,a,n){let e,o,s,f,p,d,u;function v(y){e=y,n(2,e)}function b(y){s=y,n(3,s)}function D(y){f=y,n(4,f)}function V(y){o=y,n(1,o)}function x(y){d=y,n(0,d)}return r.$$.update=()=>{if(r.$$.dirty&29,r.$$.dirty&95,r.$$.dirty&95){let y=[[],[]];for(let C=0;C<f-s+1;C++)if(C===0){let E=e+C,z=e*Math.pow(1+o/100/p,p*C);y[0].push(E),y[1].push(z)}else{let E=e+C*d*12,z=y[1][C-1]*Math.pow(1+o/100/p,p*1)+d*12;y[0].push(E),y[1].push(z)}n(5,u=y)}},n(2,e=1e4),n(1,o=5.2),n(3,s=25),n(4,f=65),n(6,p=1),n(0,d=100),n(5,u=[]),[d,o,e,s,f,u,p,v,b,D,V,x]}class gn extends Nt{constructor(a){super(),$t(this,a,hn,dn,Ft,{})}}export{gn as default};
