(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/menu.b3f49afd.svg"},38:function(e,t,a){e.exports=a.p+"static/media/close.2c5552a1.svg"},39:function(e,t,a){e.exports=a.p+"static/media/cesta.54352980.svg"},41:function(e,t,a){e.exports=a.p+"static/media/book.9166e759.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/coffee.de5c0d3a.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/colored-pencils.6b13999d.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/desk.98ad297b.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/desk1.c98ac9c2.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/notebook.71a578fa.jpg"},49:function(e,t,a){e.exports=a(95)},54:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),o=(a(54),a(5)),i=a(2),u=a.n(i),s=a(4),m=a(1),d=a(3),p=a.n(d);var E=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(m.a)(c,2),o=l[0],i=l[1],d=Object(n.useState)(""),E=Object(m.a)(d,2),b=E[0],f=E[1],v=Object(n.useState)(""),h=Object(m.a)(v,2),g=h[0],j=h[1],O=Object(n.useState)(""),x=Object(m.a)(O,2),y=x[0],k=x[1],w=Object(n.useState)(1),C=Object(m.a)(w,2),A=C[0],_=C[1],P=Object(n.useState)(0),N=Object(m.a)(P,2),S=N[0],I=N[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/products?limit=".concat(9*A,"&").concat(b,"&").concat(g,"&title[regex]=").concat(y));case 2:t=e.sent,r(t.data.products),I(t.data.result);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o,b,g,y,A]),{products:[a,r],callback:[o,i],category:[b,f],sort:[g,j],search:[y,k],page:[A,_],result:[S,I]}},b=a(7),f=a(13);var v=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(m.a)(l,2),i=o[0],d=o[1],E=Object(n.useState)([]),v=Object(m.a)(E,2),h=v[0],g=v[1],j=Object(n.useState)([]),O=Object(m.a)(j,2),x=O[0],y=O[1];Object(n.useEffect)((function(){e&&function(){var t=Object(s.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("/user/infor",{headers:{Authorization:e}});case 3:a=t.sent,c(!0),1===a.data.role?d(!0):d(!1),g(a.data.cart),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert(t.t0.response.data.msg);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var k=function(){var t=Object(s.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",alert("Por favor inicia sesion para continuar con la compra"));case 2:if(!h.every((function(e){return e._id!==a._id}))){t.next=9;break}return g([].concat(Object(f.a)(h),[Object(b.a)(Object(b.a)({},a),{},{quantity:1})])),t.next=7,p.a.patch("/user/addcart",{cart:[].concat(Object(f.a)(h),[Object(b.a)(Object(b.a)({},a),{},{quantity:1})])},{headers:{Authorization:e}});case 7:t.next=10;break;case 9:alert("Este producto ya ha sido agregado al carrito");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{isLogged:[r,c],isAdmin:[i,d],cart:[h,g],addCart:k,history:[x,y]}};var h=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(m.a)(c,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/category");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),{categories:[a,r],callback:[o,i]}},g=Object(n.createContext)(),j=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(m.a)(a,2),l=c[0],o=c[1];Object(n.useEffect)((function(){if(localStorage.getItem("firstLogin")){var e=function(){var t=Object(s.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/user/refresh_token");case 2:a=t.sent,o(a.data.accesstoken),setTimeout((function(){e()}),6e5);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}}),[]);var i={token:[l,o],productsAPI:E(),userAPI:v(l),categoriesAPI:h()};return r.a.createElement(g.Provider,{value:i},t)},O=a(37),x=a.n(O),y=a(38),k=a.n(y),w=a(39),C=a.n(w),A=a(40),_=a.n(A),P=(a(88),a(89),a(41)),N=a.n(P),S=a(42),I=a.n(S),q=a(43),z=a.n(q),D=a(44),F=a.n(D),L=a(45),T=a.n(L),W=a(46),R=a.n(W),V=function(){var e={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-container"},r.a.createElement(_.a,e,r.a.createElement("div",null,r.a.createElement("img",{src:N.a,alt:"carrousel"})),r.a.createElement("div",null,r.a.createElement("img",{src:I.a,alt:"carrousel"})),r.a.createElement("div",null,r.a.createElement("img",{src:z.a,alt:"carrousel"})),r.a.createElement("div",null,r.a.createElement("img",{src:F.a,alt:"carrousel"})),r.a.createElement("div",null,r.a.createElement("img",{src:T.a,alt:"carrousel"})),r.a.createElement("div",null,r.a.createElement("img",{src:R.a,alt:"carrousel"}))))))};var $=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.isLogged,1)[0],a=Object(m.a)(e.userAPI.isAdmin,1)[0],c=Object(m.a)(e.userAPI.cart,1)[0],l=Object(n.useState)(!1),i=Object(m.a)(l,2),d=i[0],E=i[1],b=function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/user/logout");case 2:localStorage.removeItem("firstLogin"),window.location.href="/";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f={left:d?0:"-100%"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{className:"menu",onClick:function(){return E(!d)}},r.a.createElement("img",{src:x.a,alt:"",width:"30"})),r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,r.a.createElement(o.b,{to:"/"},a?"Admin":"LG Gaitana"))),r.a.createElement("ul",{style:f},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},a?"Productos":"Tienda")),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/create_product"},"Crear Producto")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/category"},"Categorias"))),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/history"},"Historial")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",onClick:b},"Logout"))):r.a.createElement("li",null,r.a.createElement(o.b,{to:"/login"},"Login   Registrarse")),r.a.createElement("li",{onClick:function(){return E(!d)}},r.a.createElement("img",{src:k.a,alt:"",width:"30",className:"menu"}))),a?"":r.a.createElement("div",{className:"cart-icon"},r.a.createElement("span",null,c.length),r.a.createElement(o.b,{to:"/cart"},r.a.createElement("img",{src:C.a,alt:"",width:"30"})))),r.a.createElement(V,null))},B=a(6);var G=function(e){var t=e.product,a=e.deleteProduct,c=Object(n.useContext)(g),l=Object(m.a)(c.userAPI.isAdmin,1)[0],i=c.userAPI.addCart;return r.a.createElement("div",{className:"row_btn"},l?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{id:"btn_buy",to:"#!",onClick:function(){return a(t._id,t.images.public_id)}},"Eliminar"),r.a.createElement(o.b,{id:"btn_view",to:"/edit_product/".concat(t._id)},"Editar")):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{id:"btn_buy",to:"#!",onClick:function(){return i(t)}},"Comprar"),r.a.createElement(o.b,{id:"btn_view",to:"/detail/".concat(t._id)},"Ver")))};var H=function(e){var t=e.product,a=e.isAdmin,n=e.deleteProduct,c=e.handleCheck;return r.a.createElement("div",{className:"product_card"},a&&r.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:function(){return c(t._id)}}),r.a.createElement("img",{src:t.images.url,alt:""}),r.a.createElement("div",{className:"product_box"},r.a.createElement("h2",{title:t.title},t.title),r.a.createElement("span",null,"$",t.price),r.a.createElement("p",null,t.description)),r.a.createElement(G,{product:t,deleteProduct:n}))};a(94);var U=function(){return r.a.createElement("div",{className:"load-page"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null))))))))))};var X=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.categoriesAPI.categories,1)[0],a=Object(m.a)(e.productsAPI.category,2),c=a[0],l=a[1],o=Object(m.a)(e.productsAPI.sort,2),i=o[0],u=o[1],s=Object(m.a)(e.productsAPI.search,2),d=s[0],p=s[1];return r.a.createElement("div",{className:"filter_menu contenedor"},r.a.createElement("div",{className:"campo"},r.a.createElement("span",null,"Filtrar: "),r.a.createElement("select",{name:"category",value:c,onChange:function(e){l(e.target.value),p("")}},r.a.createElement("option",{value:""},"Todos Productos"),t.map((function(e){return r.a.createElement("option",{value:"category="+e._id,key:e._id},e.name)})))),r.a.createElement("div",{className:"campo"},r.a.createElement("input",{className:"input",type:"text",value:d,placeholder:"Ingresa tu busqueda",onChange:function(e){return p(e.target.value.toLowerCase())}})),r.a.createElement("div",{className:"campo sort"},r.a.createElement("span",null,"Ordenar Por: "),r.a.createElement("select",{value:i,onChange:function(e){return u(e.target.value)}},r.a.createElement("option",{value:""},"Nuevos"),r.a.createElement("option",{value:"sort=oldest"},"Antiguos"),r.a.createElement("option",{value:"sort=-sold"},"M\xe1s Vendidos"),r.a.createElement("option",{value:"sort=-price"},"Price: Precios Bajos"),r.a.createElement("option",{value:"sort=price"},"Price: Alto y Bajos"))))};var Y=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.productsAPI.page,2),a=t[0],c=t[1],l=Object(m.a)(e.productsAPI.result,1)[0];return r.a.createElement("div",{className:"load_more"},l<9*a?"":r.a.createElement("button",{onClick:function(){return c(a+1)}},"Load more"))};var J=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.productsAPI.products,2),a=t[0],c=t[1],l=Object(m.a)(e.userAPI.isAdmin,1)[0],o=Object(m.a)(e.token,1)[0],i=Object(m.a)(e.productsAPI.callback,2),d=i[0],E=i[1],b=Object(n.useState)(!1),v=Object(m.a)(b,2),h=v[0],j=v[1],O=Object(n.useState)(!1),x=Object(m.a)(O,2),y=x[0],k=x[1],w=function(e){a.forEach((function(t){t._id===e&&(t.checked=!t.checked)})),c(Object(f.a)(a))},C=function(){var e=Object(s.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),n=p.a.post("/api/destroy",{public_id:a},{headers:{Authorization:o}}),r=p.a.delete("/api/products/".concat(t),{headers:{Authorization:o}}),e.next=6,n;case 6:return e.next=8,r;case 8:E(!d),j(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}();return h?r.a.createElement("div",null,r.a.createElement(U,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),l&&r.a.createElement("div",{className:"delete-all"},r.a.createElement("span",null,"Seleccionar todos"),r.a.createElement("input",{type:"checkbox",checked:y,onChange:function(){a.forEach((function(e){e.checked=!y})),c(Object(f.a)(a)),k(!y)}}),r.a.createElement("button",{onClick:function(){a.forEach((function(e){e.checked&&C(e._id,e.images.public_id)}))}},"Eliminar Todos")),r.a.createElement("div",{className:"products"},a.map((function(e){return r.a.createElement(H,{key:e._id,product:e,isAdmin:l,deleteProduct:C,handleCheck:w})}))),r.a.createElement(Y,null),0===a.length&&r.a.createElement(U,null))};var K=function(){var e=Object(B.g)(),t=Object(n.useContext)(g),a=Object(m.a)(t.productsAPI.products,1)[0],c=t.userAPI.addCart,l=Object(n.useState)([]),i=Object(m.a)(l,2),u=i[0],s=i[1];return Object(n.useEffect)((function(){e.id&&a.forEach((function(t){t._id===e.id&&s(t)}))}),[e.id,a]),0===u.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"detail"},r.a.createElement("img",{src:u.images.url,alt:""}),r.a.createElement("div",{className:"box-detail"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,u.title),r.a.createElement("h6",null,"#id: ",u.product_id)),r.a.createElement("span",{className:"precio"},"$ ",u.price),r.a.createElement("p",null,u.description),r.a.createElement("p",null,u.content),r.a.createElement("p",null,"Vendidos: ",u.sold),r.a.createElement(o.b,{to:"/cart",className:"cart",onClick:function(){return c(u)}},"Comprar"))),r.a.createElement("div",null,r.a.createElement("h2",null,"Productos Relacionados"),r.a.createElement("div",{className:"products"},a.map((function(e){return e.category===u.category?r.a.createElement(H,{key:e._id,product:e}):null})))))},M=a(14);var Q=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target,n=t.name,r=t.value;c(Object(b.a)(Object(b.a)({},a),{},Object(M.a)({},n,r)))},i=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("/user/login",Object(b.a)({},a));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{onSubmit:i},r.a.createElement("h2",null,"Login"),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:l}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:l}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Login"),r.a.createElement(o.b,{to:"/register"},"Register"))))};var Z=function(){var e=Object(n.useState)({name:"",email:"",password:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target,n=t.name,r=t.value;c(Object(b.a)(Object(b.a)({},a),{},Object(M.a)({},n,r)))},i=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("/user/register",Object(b.a)({},a));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{onSubmit:i},r.a.createElement("h2",null,"Register"),r.a.createElement("input",{type:"text",name:"name",required:!0,placeholder:"Name",value:a.name,onChange:l}),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:l}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:l}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Register"),r.a.createElement(o.b,{to:"/login"},"Login"))))};var ee=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.history,2),a=t[0],c=t[1],l=Object(m.a)(e.userAPI.isAdmin,1)[0],i=Object(m.a)(e.token,1)[0];return Object(n.useEffect)((function(){i&&function(){var e=Object(s.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=7;break}return e.next=3,p.a.get("/api/payment",{headers:{Authorization:i}});case 3:t=e.sent,c(t.data),e.next=11;break;case 7:return e.next=9,p.a.get("/user/history",{headers:{Authorization:i}});case 9:a=e.sent,c(a.data);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i,l,c]),r.a.createElement("div",{className:"history-page"},r.a.createElement("h2",null,"History"),r.a.createElement("h4",null,"You have ",a.length," ordered"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Payment ID"),r.a.createElement("th",null,"Date of Purchased"),r.a.createElement("th",null))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.paymentID),r.a.createElement("td",null,new Date(e.createdAt).toLocaleDateString()),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/history/".concat(e._id)},"View")))})))))};var te=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.history,1)[0],a=Object(n.useState)([]),c=Object(m.a)(a,2),l=c[0],o=c[1],i=Object(B.g)();return Object(n.useEffect)((function(){i.id&&t.forEach((function(e){e._id===i.id&&o(e)}))}),[i.id,t]),0===l.length?null:r.a.createElement("div",{className:"history-page"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null,"Postal Code"),r.a.createElement("th",null,"Country Code"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,l.address.recipient_name),r.a.createElement("td",null,l.address.line1+" - "+l.address.city),r.a.createElement("td",null,l.address.postal_code),r.a.createElement("td",null,l.address.country_code)))),r.a.createElement("table",{style:{margin:"30px 0px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Products"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price"))),r.a.createElement("tbody",null,l.cart.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement("img",{src:e.images.url,alt:""})),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,"$ ",e.price*e.quantity))})))))},ae=a(48);var ne=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.cart,2),a=t[0],c=t[1],l=Object(m.a)(e.token,1)[0],o=Object(n.useState)(0),i=Object(m.a)(o,2),d=i[0],E=i[1];Object(n.useEffect)((function(){!function(){var e=a.reduce((function(e,t){return e+t.price*t.quantity}),0);E(e)}()}),[a]);var b=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.patch("/user/addcart",{cart:t},{headers:{Authorization:l}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.paymentID,r=t.address,e.next=3,p.a.post("/api/payment",{cart:a,paymentID:n,address:r},{headers:{Authorization:l}});case 3:c([]),b([]),alert("You have successfully placed an order.");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 0===a.length?r.a.createElement("h2",{style:{textAlign:"center",fontSize:"3rem"}},"Carrito Vacio"):r.a.createElement("div",null,a.map((function(e){return r.a.createElement("div",{className:"detail cart",key:e._id},r.a.createElement("img",{src:e.images.url,alt:""}),r.a.createElement("div",{className:"box-detail"},r.a.createElement("h2",null,e.title),r.a.createElement("h3",null,"$ ",e.price*e.quantity),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.content),r.a.createElement("div",{className:"amount"},r.a.createElement("button",{onClick:function(){return t=e._id,a.forEach((function(e){e._id===t&&(1===e.quantity?e.quantity=1:e.quantity-=1)})),c(Object(f.a)(a)),void b(a);var t}}," - "),r.a.createElement("span",null,e.quantity),r.a.createElement("button",{onClick:function(){return t=e._id,a.forEach((function(e){e._id===t&&(e.quantity+=1)})),c(Object(f.a)(a)),void b(a);var t}}," + ")),r.a.createElement("div",{className:"delete",onClick:function(){return t=e._id,void(window.confirm("Deseas eliminar este producto?")&&(a.forEach((function(e,n){e._id===t&&a.splice(n,1)})),c(Object(f.a)(a)),b(a)));var t}},"X")))})),r.a.createElement("div",{className:"total"},r.a.createElement("h3",null,"Total: $ ",d),r.a.createElement("div",null,r.a.createElement(ae.PayPalButton,{amount:d,currency:"USD",onSuccess:v,onError:function(e){return console.log(e)},options:{clientId:"AYvqgnAzw0WHPxGaXt7CAtI4GXKou8Jcnv3eEwUDzCF7wcmWEYvHCVgv02c_hguRqpdahNf4gdsp6t9L",currency:"USD"}}))))};var re=function(){return r.a.createElement("div",null,"404 | Not Found")};var ce=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.categoriesAPI.categories,1)[0],a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],o=c[1],i=Object(m.a)(e.token,1)[0],d=Object(m.a)(e.categoriesAPI.callback,2),E=d[0],b=d[1],f=Object(n.useState)(!1),v=Object(m.a)(f,2),h=v[0],j=v[1],O=Object(n.useState)(""),x=Object(m.a)(O,2),y=x[0],k=x[1],w=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=9;break}return e.next=5,p.a.put("/api/category/".concat(y),{name:l},{headers:{Authorization:i}});case 5:a=e.sent,alert(a.data.msg),e.next=13;break;case 9:return e.next=11,p.a.post("/api/category",{name:l},{headers:{Authorization:i}});case 11:n=e.sent,alert(n.data.msg);case 13:j(!1),o(""),b(!E),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(t),o(a),j(!0);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("/api/category/".concat(t),{headers:{Authorization:i}});case 3:a=e.sent,alert(a.data.msg),b(!E),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"categories"},r.a.createElement("form",{onSubmit:w},r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("input",{type:"text",name:"category",value:l,required:!0,onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{type:"submit"},h?"Update":"Create")),r.a.createElement("div",{className:"col"},t.map((function(e){return r.a.createElement("div",{className:"row",key:e._id},r.a.createElement("p",null,e.name),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return C(e._id,e.name)}},"Edit"),r.a.createElement("button",{onClick:function(){return A(e._id)}},"Delete")))}))))},le={product_id:"",title:"",price:0,description:"",content:"",category:"",_id:""};var oe=function(){var e=Object(n.useContext)(g),t=Object(n.useState)(le),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(m.a)(e.categoriesAPI.categories,1)[0],i=Object(n.useState)(!1),d=Object(m.a)(i,2),E=d[0],f=d[1],v=Object(n.useState)(!1),h=Object(m.a)(v,2),j=h[0],O=h[1],x=Object(m.a)(e.userAPI.isAdmin,1)[0],y=Object(m.a)(e.token,1)[0],k=Object(B.f)(),w=Object(B.g)(),C=Object(m.a)(e.productsAPI.products,1)[0],A=Object(n.useState)(!1),_=Object(m.a)(A,2),P=_[0],N=_[1],S=Object(m.a)(e.productsAPI.callback,2),I=S[0],q=S[1];Object(n.useEffect)((function(){w.id?(N(!0),C.forEach((function(e){e._id===w.id&&(l(e),f(e.images))}))):(N(!1),l(le),f(!1))}),[w.id,C]);var z=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,x){e.next=4;break}return e.abrupt("return",alert("No tienes los permisos requeridos"));case 4:if(a=t.target.files[0]){e.next=7;break}return e.abrupt("return",alert("Archivo no existe."));case 7:if(!(a.size>1048576)){e.next=9;break}return e.abrupt("return",alert("Size too large!"));case 9:if("image/jpeg"===a.type||"image/png"===a.type){e.next=11;break}return e.abrupt("return",alert("Formato de archivo incorrecto."));case 11:return(n=new FormData).append("file",a),O(!0),e.next=16,p.a.post("/api/upload",n,{headers:{"content-type":"multipart/form-data",Authorization:y}});case 16:r=e.sent,O(!1),f(r.data),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 24:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,x){e.next=3;break}return e.abrupt("return",alert("No tienes los permisos requeridos"));case 3:return O(!0),e.next=6,p.a.post("/api/destroy",{public_id:E.public_id},{headers:{Authorization:y}});case 6:O(!1),f(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),F=function(e){var t=e.target,a=t.name,n=t.value;l(Object(b.a)(Object(b.a)({},c),{},Object(M.a)({},a,n)))},L=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,x){e.next=4;break}return e.abrupt("return",alert("No tienes los permisos requeridos"));case 4:if(E){e.next=6;break}return e.abrupt("return",alert("No agregaste la imagen"));case 6:if(!P){e.next=11;break}return e.next=9,p.a.put("/api/products/".concat(c._id),Object(b.a)(Object(b.a)({},c),{},{images:E}),{headers:{Authorization:y}});case 9:e.next=13;break;case 11:return e.next=13,p.a.post("/api/products",Object(b.a)(Object(b.a)({},c),{},{images:E}),{headers:{Authorization:y}});case 13:q(!I),k.push("/"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),T={display:E?"block":"none"};return r.a.createElement("div",{className:"create_product"},r.a.createElement("div",{className:"upload"},r.a.createElement("input",{type:"file",name:"file",id:"file_up",onChange:z}),j?r.a.createElement("div",{id:"file_img"},r.a.createElement(U,null)):r.a.createElement("div",{id:"file_img",style:T},r.a.createElement("img",{src:E?E.url:"",alt:""}),r.a.createElement("span",{onClick:D},"X"))),r.a.createElement("form",{onSubmit:L},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"product_id"},"Producto ID"),r.a.createElement("input",{type:"text",name:"product_id",id:"product_id",required:!0,value:c.product_id,onChange:F,disabled:P})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"title"},"Titulo"),r.a.createElement("input",{type:"text",name:"title",id:"title",required:!0,value:c.title,onChange:F})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"price"},"Precio"),r.a.createElement("input",{type:"number",name:"price",id:"price",required:!0,value:c.price,onChange:F})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"description"},"Descripcion"),r.a.createElement("textarea",{type:"text",name:"description",id:"description",required:!0,value:c.description,rows:"5",onChange:F})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"content"},"Contenido"),r.a.createElement("textarea",{type:"text",name:"content",id:"content",required:!0,value:c.content,rows:"7",onChange:F})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"categories"},"Categorias: "),r.a.createElement("select",{name:"category",value:c.category,onChange:F},r.a.createElement("option",{value:""},"Por favor selecciona una categoria"),o.map((function(e){return r.a.createElement("option",{value:e._id,key:e._id},e.name)})))),r.a.createElement("button",{type:"submit"},P?"Actualizar":"Crear")))},ie=function(){return r.a.createElement("div",null,"CheckoutSuccess")};var ue=function(){var e=Object(n.useContext)(g),t=Object(m.a)(e.userAPI.isLogged,1)[0],a=Object(m.a)(e.userAPI.isAdmin,1)[0];return r.a.createElement(B.c,null,r.a.createElement(B.a,{path:"/",exact:!0,component:J}),r.a.createElement(B.a,{path:"/detail/:id",exact:!0,component:K}),r.a.createElement(B.a,{path:"/login",exact:!0,component:t?re:Q}),r.a.createElement(B.a,{path:"/register",exact:!0,component:t?re:Z}),r.a.createElement(B.a,{path:"/category",exact:!0,component:a?ce:re}),r.a.createElement(B.a,{path:"/create_product",exact:!0,component:a?oe:re}),r.a.createElement(B.a,{path:"/edit_product/:id",exact:!0,component:a?oe:re}),r.a.createElement(B.a,{path:"/history",exact:!0,component:t?ee:re}),r.a.createElement(B.a,{path:"/history/:id",exact:!0,component:t?te:re}),r.a.createElement(B.a,{path:"/cart",exact:!0,component:ne}),r.a.createElement(B.a,{path:"/checkout-succes",exact:!0,component:ie}),r.a.createElement(B.a,{path:"*",exact:!0,component:re}))};var se=function(){return r.a.createElement(j,null,r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement($,null),r.a.createElement(ue,null))))};l.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/serviceWorker.js").then((function(e){console.log("ServiceWorker registered: ",e)})).catch((function(e){console.log("ServiceWorker registration failed: ",e)}))}))}},[[49,1,2]]]);
//# sourceMappingURL=main.b5ba6f0f.chunk.js.map