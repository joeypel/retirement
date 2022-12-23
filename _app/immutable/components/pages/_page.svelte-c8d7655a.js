import{S as Lt,i as St,s as Nt,k as h,q as C,a as w,l as m,m as d,r as I,h as c,c as j,n as i,b as kt,G as t,I as Kt,J as Jt,u as ct,K as Ut,B as ut,L as Qt,M as Zt,o as tn,N as nn,O as vt,P as bt,Q as jt,R as Et,w as rt,x as at,y as ot,T as Tt,f as st,t as it,z as lt}from"../../chunks/index-3d3f0abf.js";function en(e){let o,n,r,a,s,u,p,f;return{c(){o=h("div"),n=h("label"),r=C(e[1]),a=w(),s=h("input"),this.h()},l(_){o=m(_,"DIV",{class:!0});var g=d(o);n=m(g,"LABEL",{class:!0,for:!0});var v=d(n);r=I(v,e[1]),v.forEach(c),a=j(g),s=m(g,"INPUT",{class:!0,type:!0,step:!0}),g.forEach(c),this.h()},h(){i(n,"class","block text-gray-700 text-sm font-bold mb-2"),i(n,"for",e[1]),i(s,"class","shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"),i(s,"type","number"),i(s,"step",u=e[2]??1),i(o,"class","mb-4")},m(_,g){kt(_,o,g),t(o,n),t(n,r),t(o,a),t(o,s),Kt(s,e[0]),p||(f=Jt(s,"input",e[3]),p=!0)},p(_,[g]){g&2&&ct(r,_[1]),g&2&&i(n,"for",_[1]),g&4&&u!==(u=_[2]??1)&&i(s,"step",u),g&1&&Ut(s.value)!==_[0]&&Kt(s,_[0])},i:ut,o:ut,d(_){_&&c(o),p=!1,f()}}}function rn(e,o,n){let{value:r}=o,{text:a}=o,{step:s}=o;function u(){r=Ut(this.value),n(0,r)}return e.$$set=p=>{"value"in p&&n(0,r=p.value),"text"in p&&n(1,a=p.text),"step"in p&&n(2,s=p.step)},[r,a,s,u]}class $t extends Lt{constructor(o){super(),St(this,o,rn,en,Nt,{value:0,text:1,step:2})}}function an(e){let o,n,r,a,s,u,p,f,_;return{c(){o=h("div"),n=w(),r=h("link"),a=h("script"),u=h("style"),p=C(`.ct-series-a .ct-bar {\r
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
	`),f=h("script"),_=C(`!(function (a, b) {\r
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
		});`),this.h()},l(g){o=m(g,"DIV",{class:!0}),d(o).forEach(c),n=j(g);const v=Qt("svelte-1b3bfpy",document.head);r=m(v,"LINK",{rel:!0,href:!0}),a=m(v,"SCRIPT",{src:!0});var z=d(a);z.forEach(c),u=m(v,"STYLE",{});var B=d(u);p=I(B,`.ct-series-a .ct-bar {\r
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
	`),B.forEach(c),f=m(v,"SCRIPT",{});var x=d(f);_=I(x,`!(function (a, b) {\r
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
		});`),x.forEach(c),v.forEach(c),this.h()},h(){i(o,"class","ct-chart ct-major-seventh"),i(r,"rel","stylesheet"),i(r,"href","//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"),Zt(a.src,s="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js")||i(a,"src",s)},m(g,v){kt(g,o,v),kt(g,n,v),t(document.head,r),t(document.head,a),t(document.head,u),t(u,p),t(document.head,f),t(f,_)},p:ut,i:ut,o:ut,d(g){g&&c(o),g&&c(n),c(r),c(a),c(u),c(f)}}}function on(e){let n=new Date().getFullYear();return e.map((r,a)=>r.map((s,u)=>({meta:a==0?`${n+u} With Savings`:`${n+u} Without Savings`,value:s.toFixed(2)})))}function sn(e){let n=new Date().getFullYear();return e[0].map((r,a)=>n+a)}function ln(e,o,n){let{data:r}=o;function a(){var s={labels:sn(r),series:on(r)};new Chartist.Bar(".ct-chart",s,{stackBars:!0,axisX:{labelInterpolationFnc(u){return u%5?null:u}},plugins:[Chartist.plugins.tooltip({currency:"$"})]})}return tn(async()=>{a()}),nn(function(){a()}),e.$$set=s=>{"data"in s&&n(0,r=s.data)},[r]}class cn extends Lt{constructor(o){super(),St(this,o,ln,an,Nt,{data:0})}}function un(e){let o,n,r,a,s,u,p,f=`$${Number(e[2]).toLocaleString()}`,_,g,v,z,B,x,y,$=e[0][1].length-1+"",E,M,Q,O,Z,T,L,S,tt,V,N=`$${Number(e[1]).toLocaleString()}`,G,_t,K,yt,pt,U,J=(e[1]/e[2]*100).toFixed(2)+"",ft,dt,xt,nt,l,b,F,H,k,D,q=`$${Number(e[3]).toLocaleString()}`,R,ht,mt,Ht,Pt,et,wt=(e[3]/e[2]*100).toFixed(2)+"",Ct,Vt,Bt,It;return{c(){o=h("section"),n=h("div"),r=h("div"),a=vt("svg"),s=vt("path"),u=w(),p=h("h5"),_=C(f),g=w(),v=h("h6"),z=C("Total Saved"),B=w(),x=h("p"),y=C("Over "),E=C($),M=C(" years"),Q=w(),O=h("hr"),Z=w(),T=h("div"),L=vt("svg"),S=vt("path"),tt=w(),V=h("h5"),G=C(N),_t=w(),K=h("h6"),yt=C("Total Contributions"),pt=w(),U=h("p"),ft=C(J),dt=C("% of total"),xt=w(),nt=h("hr"),l=w(),b=h("div"),F=vt("svg"),H=vt("path"),k=w(),D=h("h5"),R=C(q),ht=w(),mt=h("h6"),Ht=C("Total Interest"),Pt=w(),et=h("p"),Ct=C(wt),Vt=C("% of total"),Bt=w(),It=h("hr"),this.h()},l(P){o=m(P,"SECTION",{class:!0});var A=d(o);n=m(A,"DIV",{class:!0});var gt=d(n);r=m(gt,"DIV",{class:!0});var Y=d(r);a=bt(Y,"svg",{class:!0,xmlns:!0,viewBox:!0});var Mt=d(a);s=bt(Mt,"path",{fill:!0,d:!0}),d(s).forEach(c),Mt.forEach(c),u=j(Y),p=m(Y,"H5",{class:!0});var Ot=d(p);_=I(Ot,f),Ot.forEach(c),g=j(Y),v=m(Y,"H6",{class:!0});var qt=d(v);z=I(qt,"Total Saved"),qt.forEach(c),B=j(Y),x=m(Y,"P",{class:!0});var Ft=d(x);y=I(Ft,"Over "),E=I(Ft,$),M=I(Ft," years"),Ft.forEach(c),Q=j(Y),O=m(Y,"HR",{class:!0}),Y.forEach(c),Z=j(gt),T=m(gt,"DIV",{class:!0});var W=d(T);L=bt(W,"svg",{class:!0,xmlns:!0,viewBox:!0});var At=d(L);S=bt(At,"path",{fill:!0,d:!0}),d(S).forEach(c),At.forEach(c),tt=j(W),V=m(W,"H5",{class:!0});var Rt=d(V);G=I(Rt,N),Rt.forEach(c),_t=j(W),K=m(W,"H6",{class:!0});var Yt=d(K);yt=I(Yt,"Total Contributions"),Yt.forEach(c),pt=j(W),U=m(W,"P",{class:!0});var Dt=d(U);ft=I(Dt,J),dt=I(Dt,"% of total"),Dt.forEach(c),xt=j(W),nt=m(W,"HR",{class:!0}),W.forEach(c),l=j(gt),b=m(gt,"DIV",{class:!0});var X=d(b);F=bt(X,"svg",{class:!0,xmlns:!0,viewBox:!0});var Wt=d(F);H=bt(Wt,"path",{fill:!0,d:!0}),d(H).forEach(c),Wt.forEach(c),k=j(X),D=m(X,"H5",{class:!0});var Xt=d(D);R=I(Xt,q),Xt.forEach(c),ht=j(X),mt=m(X,"H6",{class:!0});var Gt=d(mt);Ht=I(Gt,"Total Interest"),Gt.forEach(c),Pt=j(X),et=m(X,"P",{class:!0});var zt=d(et);Ct=I(zt,wt),Vt=I(zt,"% of total"),zt.forEach(c),Bt=j(X),It=m(X,"HR",{class:!0}),X.forEach(c),gt.forEach(c),A.forEach(c),this.h()},h(){i(s,"fill","currentColor"),i(s,"d","M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"),i(a,"class","w-12 h-12 text-blue-600 mx-auto mb-6"),i(a,"xmlns","http://www.w3.org/2000/svg"),i(a,"viewBox","0 0 512 512"),i(p,"class","text-lg font-medium text-blue-600 font-bold mb-4"),i(v,"class","font-medium text-gray-500"),i(x,"class","font-medium text-sm text-gray-500"),i(O,"class","absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block"),i(r,"class","mb-12 lg:mb-0 relative"),i(S,"fill","currentColor"),i(S,"d","M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"),i(L,"class","w-12 h-12 text-blue-600 mx-auto mb-6"),i(L,"xmlns","http://www.w3.org/2000/svg"),i(L,"viewBox","0 0 512 512"),i(V,"class","text-lg font-medium text-blue-600 font-bold mb-4"),i(K,"class","font-medium text-gray-500"),i(U,"class","font-medium text-sm text-gray-500"),i(nt,"class","absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block"),i(T,"class","mb-12 lg:mb-0 relative"),i(H,"fill","currentColor"),i(H,"d","M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"),i(F,"class","w-12 h-12 text-blue-600 mx-auto mb-6"),i(F,"xmlns","http://www.w3.org/2000/svg"),i(F,"viewBox","0 0 512 512"),i(D,"class","text-lg font-medium text-blue-600 font-bold mb-4"),i(mt,"class","font-medium text-gray-500"),i(et,"class","font-medium text-sm text-gray-500"),i(It,"class","absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block"),i(b,"class","mb-12 md:mb-0 relative"),i(n,"class","grid md:grid-cols-3 lg:grid-cols-3 gap-x-6 lg:gap-x-0 items-center"),i(o,"class","mb-32 text-gray-800 text-center")},m(P,A){kt(P,o,A),t(o,n),t(n,r),t(r,a),t(a,s),t(r,u),t(r,p),t(p,_),t(r,g),t(r,v),t(v,z),t(r,B),t(r,x),t(x,y),t(x,E),t(x,M),t(r,Q),t(r,O),t(n,Z),t(n,T),t(T,L),t(L,S),t(T,tt),t(T,V),t(V,G),t(T,_t),t(T,K),t(K,yt),t(T,pt),t(T,U),t(U,ft),t(U,dt),t(T,xt),t(T,nt),t(n,l),t(n,b),t(b,F),t(F,H),t(b,k),t(b,D),t(D,R),t(b,ht),t(b,mt),t(mt,Ht),t(b,Pt),t(b,et),t(et,Ct),t(et,Vt),t(b,Bt),t(b,It)},p(P,[A]){A&4&&f!==(f=`$${Number(P[2]).toLocaleString()}`)&&ct(_,f),A&1&&$!==($=P[0][1].length-1+"")&&ct(E,$),A&2&&N!==(N=`$${Number(P[1]).toLocaleString()}`)&&ct(G,N),A&6&&J!==(J=(P[1]/P[2]*100).toFixed(2)+"")&&ct(ft,J),A&8&&q!==(q=`$${Number(P[3]).toLocaleString()}`)&&ct(R,q),A&12&&wt!==(wt=(P[3]/P[2]*100).toFixed(2)+"")&&ct(Ct,wt)},i:ut,o:ut,d(P){P&&c(o)}}}function pn(e,o,n){let r,a,s,{chartData:u}=o;return e.$$set=p=>{"chartData"in p&&n(0,u=p.chartData)},e.$$.update=()=>{var p,f;e.$$.dirty&1&&n(2,r=((p=u[1][u[1].length-1])==null?void 0:p.toFixed(2))||0),e.$$.dirty&1&&n(1,a=((f=u[0][u[0].length-1])==null?void 0:f.toFixed(2))||0),e.$$.dirty&6&&n(3,s=r-a)},[u,a,r,s]}class fn extends Lt{constructor(o){super(),St(this,o,pn,un,Nt,{chartData:0})}}function dn(e){let o,n,r,a,s,u,p,f,_,g,v,z,B,x,y,$,E,M,Q,O,Z,T,L,S,tt,V,N,G;function _t(l){e[7](l)}let K={text:"Starting Savings",step:500};e[2]!==void 0&&(K.value=e[2]),s=new $t({props:K}),jt.push(()=>Et(s,"value",_t,e[2]));function yt(l){e[8](l)}let pt={text:"Your Age",step:1};e[3]!==void 0&&(pt.value=e[3]),f=new $t({props:pt}),jt.push(()=>Et(f,"value",yt,e[3]));function U(l){e[9](l)}let J={text:"Retirement Age",step:1};e[4]!==void 0&&(J.value=e[4]),v=new $t({props:J}),jt.push(()=>Et(v,"value",U,e[4]));function ft(l){e[10](l)}let dt={text:"Interest Rate %",step:.1};e[1]!==void 0&&(dt.value=e[1]),x=new $t({props:dt}),jt.push(()=>Et(x,"value",ft,e[1]));function xt(l){e[11](l)}let nt={text:"Monthly Contributions",step:100};return e[0]!==void 0&&(nt.value=e[0]),E=new $t({props:nt}),jt.push(()=>Et(E,"value",xt,e[0])),S=new cn({props:{data:e[5]}}),N=new fn({props:{chartData:e[5]}}),{c(){o=h("div"),n=h("div"),r=h("div"),a=h("form"),rt(s.$$.fragment),p=w(),rt(f.$$.fragment),g=w(),rt(v.$$.fragment),B=w(),rt(x.$$.fragment),$=w(),rt(E.$$.fragment),Q=w(),O=h("p"),Z=C("©2020 Test Information here"),T=w(),L=h("div"),rt(S.$$.fragment),tt=w(),V=h("div"),rt(N.$$.fragment),this.h()},l(l){o=m(l,"DIV",{class:!0});var b=d(o);n=m(b,"DIV",{class:!0});var F=d(n);r=m(F,"DIV",{class:!0});var H=d(r);a=m(H,"FORM",{});var k=d(a);at(s.$$.fragment,k),p=j(k),at(f.$$.fragment,k),g=j(k),at(v.$$.fragment,k),B=j(k),at(x.$$.fragment,k),$=j(k),at(E.$$.fragment,k),k.forEach(c),Q=j(H),O=m(H,"P",{class:!0});var D=d(O);Z=I(D,"©2020 Test Information here"),D.forEach(c),H.forEach(c),T=j(F),L=m(F,"DIV",{class:!0});var q=d(L);at(S.$$.fragment,q),q.forEach(c),F.forEach(c),tt=j(b),V=m(b,"DIV",{class:!0});var R=d(V);at(N.$$.fragment,R),R.forEach(c),b.forEach(c),this.h()},h(){i(O,"class","text-center text-gray-500 text-xs"),i(r,"class","w-full md:max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"),i(L,"class","flex-grow min-w-[500px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"),i(n,"class","flex flex-wrap gap-2"),i(V,"class","bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"),i(o,"class","container mx-auto px-4")},m(l,b){kt(l,o,b),t(o,n),t(n,r),t(r,a),ot(s,a,null),t(a,p),ot(f,a,null),t(a,g),ot(v,a,null),t(a,B),ot(x,a,null),t(a,$),ot(E,a,null),t(r,Q),t(r,O),t(O,Z),t(n,T),t(n,L),ot(S,L,null),t(o,tt),t(o,V),ot(N,V,null),G=!0},p(l,[b]){const F={};!u&&b&4&&(u=!0,F.value=l[2],Tt(()=>u=!1)),s.$set(F);const H={};!_&&b&8&&(_=!0,H.value=l[3],Tt(()=>_=!1)),f.$set(H);const k={};!z&&b&16&&(z=!0,k.value=l[4],Tt(()=>z=!1)),v.$set(k);const D={};!y&&b&2&&(y=!0,D.value=l[1],Tt(()=>y=!1)),x.$set(D);const q={};!M&&b&1&&(M=!0,q.value=l[0],Tt(()=>M=!1)),E.$set(q);const R={};b&32&&(R.data=l[5]),S.$set(R);const ht={};b&32&&(ht.chartData=l[5]),N.$set(ht)},i(l){G||(st(s.$$.fragment,l),st(f.$$.fragment,l),st(v.$$.fragment,l),st(x.$$.fragment,l),st(E.$$.fragment,l),st(S.$$.fragment,l),st(N.$$.fragment,l),G=!0)},o(l){it(s.$$.fragment,l),it(f.$$.fragment,l),it(v.$$.fragment,l),it(x.$$.fragment,l),it(E.$$.fragment,l),it(S.$$.fragment,l),it(N.$$.fragment,l),G=!1},d(l){l&&c(o),lt(s),lt(f),lt(v),lt(x),lt(E),lt(S),lt(N)}}}function hn(e,o,n){let r,a,s,u,p,f,_;function g(y){r=y,n(2,r)}function v(y){s=y,n(3,s)}function z(y){u=y,n(4,u)}function B(y){a=y,n(1,a)}function x(y){f=y,n(0,f)}return e.$$.update=()=>{if(e.$$.dirty&29,e.$$.dirty&95,e.$$.dirty&95){let y=[[],[]];for(let $=0;$<u-s+1;$++)if($===0){let E=r+$,M=r*Math.pow(1+a/100/p,p*$);y[0].push(E),y[1].push(M)}else{let E=r+$*f*12,M=y[1][$-1]*Math.pow(1+a/100/p,p*1)+f*12;y[0].push(E),y[1].push(M)}n(5,_=y)}},n(2,r=1e4),n(1,a=5.2),n(3,s=25),n(4,u=65),n(6,p=1),n(0,f=100),n(5,_=[]),[f,a,r,s,u,_,p,g,v,z,B,x]}class gn extends Lt{constructor(o){super(),St(this,o,hn,dn,Nt,{})}}export{gn as default};
