(this["webpackJsonptest-shopping-cart"]=this["webpackJsonptest-shopping-cart"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/headphone-1868612_640.4da11fed.jpg"},30:function(e,t,a){e.exports=a(66)},35:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/home-office-336373_640.a007b2d1.jpg"},60:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(26),r=a.n(l),o=(a(35),a(9)),i=a(10),m=a(4),s=a(5),u=a(3),d=c.a.createContext(),E=function(e){var t=Object(n.useState)({items:[],totalPrice:0,totalDisplayPrice:0,totalDiscount:0}),a=Object(u.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(""),i=Object(u.a)(o,2),m=i[0],s=i[1],E=Object(n.useState)({min:100,max:1e4}),f=Object(u.a)(E,2),v={cart:l,setCart:r,searchKeyword:m,setSearchKeyword:s,filterValue:f[0],setFilterValue:f[1]};return c.a.createElement(d.Provider,{value:v},e.children)},f=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],r=a[1],o=Object(n.useContext)(d).setSearchKeyword;return c.a.createElement("div",{className:"row"},c.a.createElement("form",{className:"form-inline"},c.a.createElement("input",{className:"form-control text-light col-9",onChange:function(e){var t=e.target.value;r(t),""===t&&o(t)},value:l,type:"search",placeholder:"Search",id:"search"}),c.a.createElement("div",{className:"col-1",onClick:function(){o(l)}},c.a.createElement(m.a,{icon:s.d,className:"text-light",size:"lg"}))))},v=function(e){return c.a.createElement("div",{className:"row"},c.a.createElement(o.b,{to:"/Cart"},c.a.createElement(m.a,{icon:s.e,className:"text-light my-2",size:"lg"}),0!==e.cartCount?c.a.createElement("span",{className:"text-light border px-1",style:{borderRadius:"50%",backgroundColor:"red",position:"absolute"}},e.cartCount):""))},b=function(e){return c.a.createElement("nav",{className:"navbar navbar-expand"},c.a.createElement(o.b,{className:"navbar-brand",to:"/"},c.a.createElement(m.a,{icon:s.f,size:"lg",color:"yellow"})),c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item col-10"},c.a.createElement(f,null)),c.a.createElement("li",{className:"nav-item col-2"},c.a.createElement(v,{cartCount:e.cartCount}))))},p=a(12);function N(){return(e="https://api.jsonbin.io/b/5e8c3a45af7c476bc47e477d",t="get",fetch(e,{method:t,headers:{"Content-Type":"application/json"}}).then((function(e){return e}))).then((function(e){return e.ok?e.json():(console.log("Something went wrong while fetching the data"),[])})).catch((function(e){return console.log("Something went wrong. Please try after some time."),[]}));var e,t}var g=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){N().then((function(e){c(e.items)}))}),[]);var l=function(e,t){return"price"===e&&"desc"===t?function(e,t){return e.price.actual>t.price.actual?-1:e.price.actual<t.price.actual?1:0}:"price"===e&&"asc"===t?function(e,t){return e.price.actual>t.price.actual?1:e.price.actual<t.price.actual?-1:0}:function(t,a){return t[e]>a[e]?-1:t[e]<a[e]?1:0}};return{items:a,setSorting:function(e){if(a&&a!==[])if(1==e){var t=a.sort(l("price","desc"));c(Object(p.a)(t))}else if(2==e){var n=a.sort(l("price","asc"));c(Object(p.a)(n))}else if(3==e){var r=a.sort(l("discount"));c(Object(p.a)(r))}else N().then((function(e){c(e.items)}))}}},h=function(){var e=Object(n.useContext)(d),t=e.cart,a=e.setCart;return{AddToCart:function(e){var n=t.totalPrice+e.price.actual,c=t.totalDisplayPrice+e.price.display,l=t.totalDiscount+e.discount;if(t.items.find((function(t){return t.name===e.name}))){var r=t.items.find((function(t){return t.name===e.name}));r.count++,a((function(t){return{items:t.items.map((function(t){return t.name===e.name?r:t})),totalPrice:n,totalDisplayPrice:c,totalDiscount:l}}))}else e.count=1,a((function(t){return{items:[].concat(Object(p.a)(t.items),[e]),totalPrice:n,totalDisplayPrice:c,totalDiscount:l}}))}}},y=(a(43),a(17)),S=a.n(y),C=function(e){var t=e.item,a=h().AddToCart;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement("div",{className:"col-lg-3 col-md-4 col-6"},c.a.createElement("div",{className:"card",style:{border:"none"}},c.a.createElement("img",{src:S.a,className:"image"}),c.a.createElement("div",{className:"mt-2"},c.a.createElement("div",null,c.a.createElement("span",null,t.name)),c.a.createElement("div",{className:"row mt-1 mx-auto"},c.a.createElement("b",{className:"ml-2"},c.a.createElement(m.a,{icon:s.c,size:"sm"}),t.price?t.price.actual:""),c.a.createElement("del",{className:"ml-2"},t.price?t.price.display:""),c.a.createElement("b",{className:"ml-auto",style:{color:"green",fontWeight:"bold"}},t.discount,"% OFF")),c.a.createElement("div",{className:"mt-2 mb-5",style:{textAlign:"center"}},c.a.createElement("button",{href:"#",onClick:function(){return a(t)},style:{borderRadius:"15px",border:"none",backgroundColor:"#fabd0c"}},"Add To Cart"))))):"")},x=function(e){var t=Object(n.useState)(0),a=Object(u.a)(t,2),l=a[0],r=a[1],o=function(t){1===t?1===l?(r(0),e.onSelectSorting(0)):(r(1),e.onSelectSorting(1)):2===t?2===l?(r(0),e.onSelectSorting(0)):(r(2),e.onSelectSorting(2)):3===l?(r(0),e.onSelectSorting(0)):(r(3),e.onSelectSorting(3))};return c.a.createElement("div",{className:"row ml-2"},c.a.createElement("div",{className:"d-md-flex justify-content-start topnav card-header-tabs d-none"},c.a.createElement("b",{className:"nav-link"},"Sort By"),c.a.createElement("span",{className:1===l?"active nav-link":"nav-link",onClick:function(){o(1)}},"Price -- High Low"),c.a.createElement("span",{className:2===l?"active nav-link":"nav-link",onClick:function(){o(2)}},"Price -- Low High"),c.a.createElement("span",{className:3===l?"active nav-link":"nav-link",onClick:function(){o(3)}},"Discount")))},j=a(29),O=a.n(j),k=(a(59),function(){var e=Object(n.useContext)(d),t=e.filterValue,a=e.setFilterValue;return c.a.createElement("div",{className:"col-10 my-4 mx-auto",style:{textAlign:"center"}},c.a.createElement(O.a,{draggableTrack:!0,maxValue:1e4,minValue:100,onChange:function(e){return a(e)},onChangeComplete:function(e){return console.log(e)},value:t,formatLabel:function(e){return function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{icon:s.c,size:"sm"})," ",e)}(e)}}),c.a.createElement("div",{className:"mt-3"},c.a.createElement("b",null,"Price")))}),P=function(){return c.a.createElement("div",{className:"col-md-2 col-xs-5"},c.a.createElement("div",{className:"row d-none d-md-block"},c.a.createElement("div",{className:"col"},c.a.createElement("b",null,"Filters")),c.a.createElement("div",{className:"d-none d-md-block"},c.a.createElement(k,null))))},w=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=(a[0],a[1],Object(n.useState)(0)),r=Object(u.a)(l,2);r[0],r[1];return c.a.createElement("div",null,c.a.createElement("button",{type:"button",className:"btn btn-outline-dark col-12","data-toggle":"modal","data-target":"#filterModal"},"Filter"),c.a.createElement("div",{className:"modal fade",id:"filterModal",tabIndex:"-1",role:"dialog","aria-labelledby":"filterModalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title",id:"filterModalLabel"},"Filter"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal-body"},c.a.createElement(k,null)),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))))},D=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=(a[0],a[1],Object(n.useState)(0)),r=Object(u.a)(l,2),o=r[0],i=r[1],m=function(t){1===t?1===o?(i(0),e.onSelectSorting(0)):(i(1),e.onSelectSorting(1)):2===t?2===o?(i(0),e.onSelectSorting(0)):(i(2),e.onSelectSorting(2)):3===o?(i(0),e.onSelectSorting(0)):(i(3),e.onSelectSorting(3))};return c.a.createElement("div",null,c.a.createElement("button",{type:"button",className:"btn btn-outline-dark col-12","data-toggle":"modal","data-target":"#sortModal"},"Sort"),c.a.createElement("div",{className:"modal fade",id:"sortModal",tabIndex:"-1",role:"dialog","aria-labelledby":"sortModalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title",id:"sortModalLabel"},"Sort By"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal-body"},c.a.createElement("div",{className:"row ml-2"},c.a.createElement("div",{className:"d-flex justify-content-start topnav card-header-tabs"},c.a.createElement("ul",null,c.a.createElement("span",{className:1===o?"active nav-link":"nav-link",onClick:function(){m(1)}},"Price -- High Low"),c.a.createElement("span",{className:2===o?"active nav-link":"nav-link",onClick:function(){m(2)}},"Price -- Low High"),c.a.createElement("span",{className:3===o?"active nav-link":"nav-link",onClick:function(){m(3)}},"Discount"))))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))))},F=function(){var e=g(),t=e.items,a=e.setSorting,l=Object(n.useContext)(d),r=l.searchKeyword,o=l.filterValue;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row mt-4 mx-auto d-md-none"},c.a.createElement("div",{className:"col-6 p-0"},c.a.createElement(w,{onSelectSorting:a})),c.a.createElement("div",{className:"col-6 p-0"},c.a.createElement(D,{onSelectSorting:a}))),c.a.createElement("div",{className:"row mt-4 ml-0 mx-auto"},c.a.createElement(P,null),c.a.createElement("div",{className:"col-md-10 border-left"},c.a.createElement(x,{onSelectSorting:a}),c.a.createElement("div",{className:"row mt-4"},t?t.filter((function(e){return e.name.includes(r)&&e.price.actual>o.min&&e.price.actual<o.max})).map((function(e){return c.a.createElement(C,{item:e,key:e.name})})):""))))},I=function(){var e=Object(n.useContext)(d),t=e.cart,a=e.setCart;return{AddOneItem:function(e){var n=t.totalPrice+e.price.actual,c=t.totalDisplayPrice+e.price.display,l=t.totalDiscount+e.discount;if(t.items.find((function(t){return t.name===e.name}))){var r=t.items.find((function(t){return t.name===e.name}));r.count++,a((function(t){return{items:t.items.map((function(t){return t.name===e.name?r:t})),totalPrice:n,totalDisplayPrice:c,totalDiscount:l}}))}},RemoveOneItem:function(e){var n=t.totalPrice-e.price.actual,c=t.totalDisplayPrice-e.price.display,l=t.totalDiscount-e.discount;if(t.items.find((function(t){return t.name===e.name}))){var r=t.items.find((function(t){return t.name===e.name}));r.count--,0===r.count?a((function(t){return{items:t.items.filter((function(t){return t.name!==e.name})),totalPrice:n,totalDisplayPrice:c,totalDiscount:l}})):a((function(t){return{items:t.items.map((function(t){return t.name===e.name?r:t})),totalPrice:n,totalDisplayPrice:c,totalDiscount:l}}))}},RemoveFromCart:function(e){var n=t.totalPrice-e.price.actual*e.count,c=t.totalDisplayPrice-e.price.display*e.count,l=t.totalDiscount-e.discount*e.count;if(t.items.find((function(t){return t.name===e.name}))){t.items.find((function(t){return t.name===e.name}));a((function(t){return{items:t.items.filter((function(t){return t.name!==e.name})),totalPrice:n,totalDisplayPrice:c,totalDiscount:l}}))}}}},L=function(e){var t=e.item,a=I(),n=a.AddOneItem,l=a.RemoveOneItem,r=a.RemoveFromCart;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"card mb-3",style:{maxWidth:"540px"}},c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("img",{src:S.a,className:"card-img",alt:""})),c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},t.name),c.a.createElement("div",{className:"card-text"},c.a.createElement("b",{className:"ml-2"},c.a.createElement(m.a,{icon:s.c,size:"sm"}),t.price?t.price.actual:""),c.a.createElement("del",{className:"ml-2"},t.price?t.price.display:""),c.a.createElement("b",{className:"ml-3",style:{color:"green",fontWeight:"bold"}},t.discount,"% OFF")),c.a.createElement("div",{className:"card-text"},c.a.createElement("span",{onClick:function(){return l(t)}},c.a.createElement(m.a,{icon:s.a,size:"md"})),c.a.createElement("span",{className:"border mx-2"},t.count),c.a.createElement("span",{onClick:function(){return n(t)}},c.a.createElement(m.a,{icon:s.b,size:"md"}))),c.a.createElement("p",{className:"card-text",onClick:function(){return r(t)}},"REMOVE"))))))):"")},M=function(e){var t=e.cart;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-header"},"PRICE DETAILS"),c.a.createElement("div",{class:"card-body"},c.a.createElement("p",{class:"card-text"},"Price: ",t.totalDisplayPrice),c.a.createElement("p",{class:"card-text"},"Discount: ",t.totalDisplayPrice-t.totalPrice)),c.a.createElement("div",{class:"card-footer text-muted"},"Total Payable: ",t.totalPrice))))},z=function(){var e=Object(n.useContext)(d).cart,t=Object(n.useState)([]),a=Object(u.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){e.items&&r(e.items)}),[e]),c.a.createElement("div",{className:"row mt-4 mx-auto"},c.a.createElement("div",{className:"col-md-2 col-xs-0"}),c.a.createElement("div",{className:"col-md-6 col-xs-12 border-right"},l&&0!==l.length?l.map((function(e){return c.a.createElement(L,{item:e,key:e.name})})):c.a.createElement("h1",null,"Your Cart Is Empty")),c.a.createElement("div",{className:"col-md-3 col-xs-0"},c.a.createElement(M,{cart:e})))};a(60);var A=function(){var e=Object(n.useContext)(d).cart,t=c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:"/",component:F}),c.a.createElement(i.b,{path:"/Cart",component:z}),c.a.createElement(i.a,{to:"/"}));return c.a.createElement(o.a,null,c.a.createElement("div",{className:"container-fluid p-0"},c.a.createElement(b,{cartCount:e.items.length}),t))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(61),a(62),a(65);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null,c.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.6f223525.chunk.js.map