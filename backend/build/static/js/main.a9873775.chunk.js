(this.webpackJsonpanomic=this.webpackJsonpanomic||[]).push([[0],{100:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a(19),c=a.n(r),n=(a(65),a(6)),i=a(24),l=a(56),o=a(55),j=a(15),d="ARTIST_LIST_REQUEST",u="ARTIST_LIST_SUCCESS",m="ARTIST_LIST_FAIL",b="ARTIST_DETAILS_REQUEST",h="ARTIST_DETAILS_SUCCESS",p="ARTIST_DETAILS_FAIL",x="ARTIST_DELETE_REQUEST",O="ARTIST_DELETE_SUCCESS",f="ARTIST_DELETE_FAIL",g="ARTIST_CREATE_REQUEST",v="ARTIST_CREATE_SUCCESS",N="ARTIST_CREATE_FAIL",y="ARTIST_CREATE_FAIL",S="ARTIST_UPDATE_REQUEST",w="ARTIST_UPDATE_SUCCESS",E="ARTIST_UPDATE_FAIL",I="ARTIST_UPDATE_RESET",T="USER_LOGIN_REQUEST",A="USER_LOGIN_SUCCESS",L="USER_LOGIN_FAIL",k="USER_LOGOUT",C="USER_DETAILS_REQUEST",_="USER_DETAILS_SUCCESS",R="USER_DETAILS_FAIL",U="USER_DETAILS_RESET",D=Object(i.combineReducers)({artistList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{artists:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{loading:!0,artists:[]};case u:return{loading:!1,artists:t.payload.artists};case m:return{loading:!1,error:t.payload};default:return e}},artistDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{artist:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(j.a)({loading:!0},e);case h:return{loading:!1,artist:t.payload};case p:return{loading:!1,error:t.payload};default:return e}},artistDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{artist:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0};case O:return{loading:!1,success:!0};case f:return{loading:!1,error:t.payload};default:return e}},artistCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{artist:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{loading:!0};case v:return{loading:!1,success:!0,artist:t.payload};case N:return{loading:!1,error:t.payload};case y:return{};default:return e}},artistUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{artist:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!0};case w:return{loading:!1,success:!0,artist:t.payload};case E:return{loading:!1,error:t.payload};case I:return{artist:{}};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loading:!0};case A:return{loading:!1,userInfo:t.payload};case L:return{loading:!1,error:t.payload};case k:return{};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case _:return{loading:!1,user:t.payload};case R:return{loading:!1,error:t.payload};case U:return{user:{}};default:return e}}}),F={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},G=[l.a],B=Object(i.createStore)(D,F,Object(o.composeWithDevTools)(i.applyMiddleware.apply(void 0,G))),z=a(13),P=a(7),Q=a(108),M=a(110),Y=a.p+"static/media/logo.e29c5dc3.svg",H=(a(70),a(1)),J=function(){return Object(H.jsxs)("header",{children:[Object(H.jsx)("a",{href:"/",children:Object(H.jsx)("img",{src:Y,alt:"",className:"logo"})}),Object(H.jsxs)(Q.a,{bg:"light",variant:"dark",expand:"lg",className:"navLinks",children:[Object(H.jsx)(Q.a.Brand,{href:"/"}),Object(H.jsx)(Q.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(H.jsx)(Q.a.Collapse,{id:"basic-navbar-nav",className:"ml-auto",children:Object(H.jsxs)(M.a,{className:"ml-auto",children:[Object(H.jsx)(M.a.Link,{href:"/all-artists",children:"Artists"}),Object(H.jsx)(M.a.Link,{href:"/releases",children:"Releases"}),Object(H.jsx)(M.a.Link,{href:"/events",children:"Upcoming"}),Object(H.jsx)(M.a.Link,{href:"/about",children:"About"})]})})]})]})};var W=function(){return Object(H.jsx)("div",{className:"footer bg-black px-5 py-4",children:Object(H.jsxs)("div",{className:"row",children:[Object(H.jsxs)("div",{className:"col-lg-1",children:[Object(H.jsx)("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anomic@gmail.com",target:"_blank",rel:"noreferrer",className:"title text-white",children:Object(H.jsx)("h6",{children:"Contact"})})," ",Object(H.jsx)("a",{href:"https://anomicrecords.bandcamp.com/",target:"_blank",rel:"noreferrer",className:"title text-white",children:Object(H.jsx)("h6",{children:"Store"})})," ",Object(H.jsx)("a",{href:"https://anomicrecords.bandcamp.com/merch/anomic-zine-1",target:"_blank",rel:"noreferrer",className:"title text-white",children:Object(H.jsx)("h6",{children:"Zine"})})," ",Object(H.jsx)(z.Link,{to:"/login",className:"text-grey-dark",children:Object(H.jsx)("h6",{children:"Admin"})})," "]})," ",Object(H.jsx)("div",{className:"d-flex justify-content-end text-grey-light",children:Object(H.jsx)("h6",{children:"\xa9 Anomic Records 2022"})})]})})},Z=function(e){return Object(H.jsx)("div",{className:"col-sm-12 p-2",children:Object(H.jsxs)("div",{className:"p-2 h-60 artistCard",children:[Object(H.jsx)("img",{src:e.artist.image,className:"fill",alt:e.artist.name})," ",Object(H.jsx)("h5",{className:"mt--2 title text-white px-2",children:e.artist.name})]})})},q=function(e){var t=e.artists;return console.log(window.location.href),Object(H.jsx)(H.Fragment,{children:Object(H.jsx)("div",{className:"container",children:Object(H.jsx)("div",{className:"row",children:!!t&&t.map((function(e){return Object(H.jsx)(z.Link,{to:"artists/".concat(e.name),children:Object(H.jsx)(Z,{artist:e},e._id)})}))})})})},K=(a(75),a(59));a(80);var V=function(e){var t=e.artists;return Object(H.jsx)("div",{className:"carouselContainer",children:Object(H.jsx)("div",{className:"carousel",children:t&&t.length&&Object(H.jsx)(K.Carousel,{autoPlay:!0,infiniteLoop:!0,interval:"3000",transitionTime:"1000",dynamicHeight:!0,children:t.map((function(e,t){return Object(H.jsx)("div",{children:Object(H.jsx)("img",{alt:e.name,src:e.image})},t)}))})})})},X=a(14),$=a(8),ee=a.n($),te=a(18),ae=a.n(te),se=function(){return function(e){localStorage.removeItem("userInfo"),localStorage.removeItem("cartItems"),localStorage.removeItem("shippingAddress"),localStorage.removeItem("paymentMethod"),e({type:k}),e({type:U}),document.location.href="/login"}},re=function(){return function(){var e=Object(X.a)(ee.a.mark((function e(t){var a,s;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:d}),e.next=4,fetch("/api/artists");case 4:return a=e.sent,e.next=7,a.json();case 7:s=e.sent,console.log("actions data",s),t({type:u,payload:s}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:m,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},ce=function(e){return function(){var t=Object(X.a)(ee.a.mark((function t(a){var s,r;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:b}),t.next=4,fetch("/api/artists/".concat(e));case 4:return s=t.sent,t.next=7,s.json();case 7:r=t.sent,a({type:h,payload:r}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:p,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},ne=(a(100),function(){return Object(H.jsx)("div",{children:Object(H.jsxs)("div",{className:"flex text-center",children:[Object(H.jsx)("a",{href:"https://www.facebook.com/anomicrecords/",children:Object(H.jsx)("i",{className:"fab fa-facebook-f p-3"})}),Object(H.jsx)("a",{href:"https://www.instagram.com/anomicrecords/?hl=en",children:Object(H.jsx)("i",{className:"fab fa-instagram p-3"})}),Object(H.jsx)("a",{href:"https://anomicrecords.bandcamp.com/",children:Object(H.jsx)("i",{className:"fab fa-bandcamp p-3"})}),Object(H.jsx)("a",{href:"https://www.youtube.com/channel/UCtD0HCtxYqZyvMoR3tavQYA",children:Object(H.jsx)("i",{className:"fab fa-youtube p-3"})})]})})}),ie=function(){var e,t=Object(n.b)(),a=Object(n.c)((function(e){return e.artistList})).artists;return a&&(e=a[Math.floor(Math.random()*a.length)]),console.log("homepage artists",a),Object(s.useEffect)((function(){t(re())}),[t]),a?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(V,{artists:a}),Object(H.jsxs)("section",{className:"blue",children:[Object(H.jsx)(ne,{}),Object(H.jsx)("div",{className:"container bg-white mt-5 j-center mb-2 ",children:Object(H.jsxs)("div",{className:"col-sm-12 j-center",children:[Object(H.jsx)("h1",{className:"title p-5",children:"In Focus:"}),e&&Object(H.jsx)("div",{className:"j-center",children:e.youtube?Object(H.jsx)("iframe",{src:e.youtube,title:"YouTube video player",frameBorder:"0",autoPlay:"1",allow:"accelerometer; autoplay;",allowFullScreen:!0,className:"mt-3 col-lg-6 p-4",style:{position:"relative",width:"100%"}}):Object(H.jsx)("div",{className:"h-46 pb-5",children:Object(H.jsx)("img",{src:e.image,alt:e.name,className:"cover w-100 fill"})})}),e&&Object(H.jsx)("div",{className:"row j-center",children:Object(H.jsxs)("div",{className:"pl-2 col-sm-12 col-md-10 j-center",children:[Object(H.jsx)("h4",{className:"title mb-3 ml--5 ml-1",children:e.name}),Object(H.jsx)("h6",{className:"text-20 pb-5",children:e.description})]})})," "]})})]}),Object(H.jsx)("div",{className:"text-end",children:Object(H.jsx)("h2",{className:"title px-10 mt-7",children:"Anomic Artists"})}),Object(H.jsx)(q,{artists:a})]}):null},le=function(e){return Object(H.jsx)("div",{className:"flex container-lg",children:Object(H.jsxs)("div",{className:"h-30 recordImage",children:[Object(H.jsx)("img",{alt:"",src:e.image,className:"fill"}),Object(H.jsxs)("div",{children:[Object(H.jsx)("h6",{className:"title text-black ml-3 mt-2",children:e.name}),Object(H.jsx)("p",{className:"text-4 pt-2",children:e.description})]})]})})},oe=function(e){var t=e.releases;return t&&t.length?Object(H.jsx)("div",{className:"container",children:Object(H.jsx)("div",{className:"row releasesList ",children:t&&t.map((function(e,t){return Object(H.jsx)("div",{className:"col-sm-12 col-md-6 pb-5",children:Object(H.jsx)(le,{release:e,image:e.image,name:e.name,description:e.description},e._id)})}))})}):Object(H.jsx)("h1",{className:"p-5",children:"No Releases Yet"})},je=function(e){return Object(H.jsxs)("div",{className:"mx-4 mt-5 color-black",children:[e.artist.facebook&&Object(H.jsx)("a",{href:e.artist.facebook,children:Object(H.jsx)("i",{className:"fab fa-facebook-f p-2"})})," ",e.instagram&&Object(H.jsx)("a",{href:e.artist.instagram,children:Object(H.jsx)("i",{className:"fab fa-instagram p-2"})}),e.artist.bandcamp&&Object(H.jsx)("a",{href:e.artist.bandcamp,children:Object(H.jsx)("i",{className:"fab fa-bandcamp p-2"})}),e.artist.youtube&&Object(H.jsx)("a",{href:e.artist.youtube,children:Object(H.jsx)("i",{className:"fab fa-youtube p-2"})}),e.artist.youtube&&Object(H.jsx)("a",{href:e.artist.youtube,children:Object(H.jsx)("i",{className:"fab fa-spotify p-2"})})]})};var de=function(e){var t=e.match,a=Object(n.b)(),r=Object(n.c)((function(e){return e.artistDetails}));return Object(s.useEffect)((function(){a(ce(t.params.name)),window.scrollTo(0,0)}),[t.params.name,a]),r?Object(H.jsx)(H.Fragment,{children:r&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("div",{className:"gradientContainer",children:Object(H.jsx)("img",{className:"fill w-100 gradient",src:r.artist.image,alt:"",style:{height:"550px"}})}),Object(H.jsx)("div",{className:"",children:Object(H.jsx)("h1",{className:"mt--6 p-3 bg-pink-light ml-2",children:r.artist.name})}),Object(H.jsx)(je,{artist:r.artist}),Object(H.jsxs)("div",{className:"row w-100 j-center",style:{margin:"0!important"},children:[Object(H.jsx)("div",{className:r.artist.youtube?"col-lg-5 col-md-5 px-5 pt-8 px":"col-sm-12 text-center px-12 pt-5",children:r.artist.description}),Object(H.jsx)("div",{className:"col-lg-6 col-md-5 p-5",children:Object(H.jsx)("iframe",{src:r.artist.youtube,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0})}),Object(H.jsx)("h1",{className:"title px-10 mt-4",children:"Releases:"}),Object(H.jsx)(oe,{releases:r.artist.releases})]})]})}):null},ue=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e.artistList})).artists;return Object(s.useEffect)((function(){e(re())}),[e]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("div",{className:"h-7 bg-black"}),Object(H.jsx)("div",{className:"container",children:Object(H.jsxs)("div",{className:"row mt-10",children:[t&&t.map((function(e){return Object(H.jsx)("div",{className:"col-sm-12 col-md-3 p-2",children:Object(H.jsxs)("div",{className:"h-20 p-2",children:[Object(H.jsx)("img",{src:e.image,className:"fill",alt:e.name})," ",Object(H.jsx)("p",{className:"mt--2 title text-white",children:e.name})]})})}))," "]})})]})},me=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e.artistList})).artists;return Object(s.useEffect)((function(){e(re())}),[e]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("div",{className:"h-7 bg-black"}),Object(H.jsx)("div",{className:"container fullScreen",children:Object(H.jsxs)("div",{className:"row mt-10",children:[t&&t.map((function(e){return e.releases&&e.releases.map((function(e){return Object(H.jsxs)("div",{className:"h-20 p-2 col-sm-12 col-md-6 col-lg-3",children:[Object(H.jsx)("img",{src:e.image,className:"fill bg-black",alt:e.name})," ",Object(H.jsx)("h4",{className:"mt--2 text-white",children:e.artist}),Object(H.jsx)("h6",{className:"mt--3 title text-white",children:e.name})]},e._id)}))}))," "]})})]})};var be=function(){return Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)("div",{className:"j-center",children:[Object(H.jsx)("div",{className:"j-center",style:{height:"100px",position:"relative",marginLeft:"-120px",backgroundColor:"#001427",border:"none"}}),Object(H.jsxs)("div",{className:"j-end",children:[" ",Object(H.jsx)("h1",{className:"mt-10 mx-5 title",children:"About"})]}),Object(H.jsx)("div",{className:"container",children:Object(H.jsxs)("div",{className:"row justify-content-center pb-5",children:[Object(H.jsxs)("div",{className:"col-lg-5 mt-5",children:[Object(H.jsx)("h6",{children:"Anomic is a Berlin based record label started in 2020. We love noise, rock 'n' roll and musicians with soul. Digital and physical releases from bands and artists around the world."}),Object(H.jsxs)("p",{className:"mt-5 text-grey-darker",children:["To get in touch send an email to"," ",Object(H.jsx)("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anomic@gmail.com",target:"_blank",rel:"noreferrer",className:"text-pink-dark mb-2",children:"anomic@gmail.com"})]})]}),Object(H.jsx)("div",{className:"col-lg-5",children:Object(H.jsx)("img",{src:"https://stringfixer.com/files/118228407.jpg",className:"fill mt-3",alt:""})})]})})]})})};var he=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("div",{className:"h-7 bg-black"}),Object(H.jsx)("div",{className:"contianer d-flex justify-content-center fullScreen",children:Object(H.jsxs)("div",{className:"centerPanel col-lg-10 ",children:[Object(H.jsxs)("div",{className:"d-flex justify-content-end",children:[" ",Object(H.jsx)("h1",{className:"mt-5 mx-3 title",children:"Events"})]}),Object(H.jsx)("h1",{className:"offset-1 mt-5",children:"No Events to Show Yet!"}),Object(H.jsx)("br",{})]})})]})},pe=a(17),xe=a(109),Oe=a(105),fe=function(e){var t=e.location,a=e.history,r=Object(s.useState)(""),c=Object(pe.a)(r,2),i=c[0],l=c[1],o=Object(s.useState)(""),j=Object(pe.a)(o,2),d=j[0],u=j[1],m=Object(n.b)(),b=Object(n.c)((function(e){return e.userLogin})),h=(b.loading,b.error,b.userInfo),p=t.search?t.search.split("=")[1]:"/artistList";Object(s.useEffect)((function(){h&&a.push(p)}),[a,h,p]);return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("h1",{children:"Sign In"}),Object(H.jsxs)(xe.a,{onSubmit:function(e){e.preventDefault(),m(function(e,t){return function(){var a=Object(X.a)(ee.a.mark((function a(s){var r,c,n;return ee.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s({type:T}),r={headers:{"Content-Type":"application/json"}},a.next=5,ae.a.post("/api/users/login",{email:e,password:t},r);case 5:c=a.sent,n=c.data,s({type:A,payload:n}),localStorage.setItem("userInfo",JSON.stringify(n)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),s({type:L,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(i,d))},children:[Object(H.jsxs)(xe.a.Group,{controlId:"email",children:[Object(H.jsx)(xe.a.Label,{className:"text-light",children:"Email Address"}),Object(H.jsx)(xe.a.Control,{onChange:function(e){return l(e.target.value)},value:i,type:"email",placeholder:"Enter Email"})]}),Object(H.jsxs)(xe.a.Group,{controlId:"password",children:[Object(H.jsx)(xe.a.Label,{className:"text-light",children:"Password"}),Object(H.jsx)(xe.a.Control,{onChange:function(e){return u(e.target.value)},value:d,type:"password",placeholder:"Enter password"})]}),Object(H.jsx)(Oe.a,{type:"submit",variant:"primary",className:"mt-3",children:"Sign In"})]})]})},ge=function(e){var t=e.setRelease,a=e.release,s=e.uploadReleaseFileHandler;return Object(H.jsxs)("div",{children:[Object(H.jsx)("h1",{className:"pt-5",children:"Add new Release"}),Object(H.jsxs)(xe.a.Group,{controlId:"releaseName",children:[Object(H.jsx)(xe.a.Label,{children:"Release Name"}),Object(H.jsx)(xe.a.Control,{type:"releaseName",placeholder:"Enter name",onChange:function(e){return t(Object(j.a)(Object(j.a)({},a),{},{name:e.target.value}))}})]}),Object(H.jsxs)(xe.a.Group,{controlId:"releaseDescription",children:[Object(H.jsx)(xe.a.Label,{children:"Release Description"}),Object(H.jsx)(xe.a.Control,{as:"textarea",rows:7,placeholder:"Enter description",onChange:function(e){return t(Object(j.a)(Object(j.a)({},a),{},{description:e.target.value}))}})]}),Object(H.jsxs)(xe.a.Group,{controlId:"releaseImage",children:[Object(H.jsx)(xe.a.Label,{children:"Release Image"}),Object(H.jsx)(xe.a.Control,{type:"text",placeholder:"Enter image url",onChange:function(e){return t(Object(j.a)(Object(j.a)({},a),{},{image:e.target.value}))}}),Object(H.jsx)(xe.a.File,{id:"release-image-file",label:"Choose File",custom:!0,onChange:s})]})]})},ve=function(e){var t=e.match,a=e.history,r=t.params.name,c=Object(s.useState)(r),i=Object(pe.a)(c,2),l=i[0],o=i[1],j=Object(s.useState)(""),d=Object(pe.a)(j,2),u=d[0],m=d[1],b=Object(s.useState)(""),p=Object(pe.a)(b,2),x=p[0],O=p[1],f=Object(s.useState)(!1),g=Object(pe.a)(f,2),v=(g[0],g[1]),N=Object(s.useState)({description:"",artist:r,image:"",name:""}),y=Object(pe.a)(N,2),T=y[0],A=y[1],L=Object(n.b)(),k=Object(n.c)((function(e){return e.artistDetails})),C=(k.loading,k.error,k.artist),_=Object(n.c)((function(e){return e.artistUpdate})),R=(_.loading,_.error,_.success);Object(s.useEffect)((function(){R?(L({type:I}),a.push("/")):C.name&&C.name===r?(o(C.name),m(C.image),O(C.description)):L(ce(r))}),[L,a,r,R,C]);var U=function(){var e=Object(X.a)(ee.a.mark((function e(t){var a,s,r,c,n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],(s=new FormData).append("image",a),v(!0),e.prev=4,r={headers:{"Content-Type":"multipart/form-data"}},e.next=8,ae.a.post("/api/upload",s,r);case 8:c=e.sent,n=c.data,m(n),v(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0),v(!1);case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(X.a)(ee.a.mark((function e(t){var a,s,r,c,n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.files[0],(s=new FormData).append("image",a),v(!0),e.prev=5,r={headers:{"Content-Type":"multipart/form-data"}},e.next=9,ae.a.post("/api/upload",s,r);case 9:c=e.sent,n=c.data,m(n),v(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),console.error(e.t0),v(!1);case 19:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(H.jsxs)("div",{className:"container bg-light",style:{position:"relative",zIndex:"400"},children:[Object(H.jsx)(z.Link,{to:"/admin/artistList",className:"btn btn-light my-3",children:"Go Back"}),Object(H.jsxs)("h1",{children:["Edit Artist - ",r]}),Object(H.jsxs)(xe.a,{onSubmit:function(e){e.preventDefault(),L(function(e){return function(){var t=Object(X.a)(ee.a.mark((function t(a,s){var r,c,n,i,l,o;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:S}),r=s(),c=r.userLogin.userInfo,n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,ae.a.put("/api/artists/".concat(e.name),{artist:e},n);case 6:i=t.sent,l=i.data,a({type:w,payload:l}),a({type:h,payload:l}),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),"Not authorized, token failed"===(o=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(se()),a({type:E,payload:o});case 17:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,a){return t.apply(this,arguments)}}()}({name:l,image:u,description:x,release:T}))},children:[Object(H.jsxs)(xe.a.Group,{controlId:"name",children:[Object(H.jsx)(xe.a.Label,{children:"Name"}),Object(H.jsx)(xe.a.Control,{type:"name",placeholder:r||"Enter name",onChange:function(e){return o(e.target.value)}})]}),Object(H.jsxs)(xe.a.Group,{controlId:"image",children:[Object(H.jsx)(xe.a.Label,{children:"Image"}),Object(H.jsx)(xe.a.Control,{type:"text",placeholder:C.image||"Enter image url",value:u,onChange:function(e){return m(e.target.value)}}),Object(H.jsx)(xe.a.File,{id:"image-file",label:"Choose File",custom:!0,onChange:U})]}),Object(H.jsxs)(xe.a.Group,{controlId:"description",children:[Object(H.jsx)(xe.a.Label,{children:"Description"}),Object(H.jsx)(xe.a.Control,{as:"textarea",rows:7,placeholder:C.description||"Enter new description",value:x,onChange:function(e){return O(e.target.value)}})]}),Object(H.jsx)(ge,{release:T,setRelease:A,uploadReleaseFileHandler:D}),Object(H.jsx)(Oe.a,{type:"submit",variant:"primary",className:"mb-5",children:"Update"})]})]})},Ne=(a(101),a(106)),ye=a(60),Se=a(107),we=function(e){var t=e.history,a=(e.match,Object(s.useState)("")),r=Object(pe.a)(a,2),c=r[0],i=r[1],l=Object(n.b)(),o=Object(n.c)((function(e){return e.artistList})),j=(o.loading,o.error,o.artists),d=(o.page,o.pages,Object(n.c)((function(e){return e.artistDelete}))),u=(d.loading,d.error,d.success),m=Object(n.c)((function(e){return e.artistCreate})),b=(m.loading,m.error,m.success),h=m.artist,p=Object(n.c)((function(e){return e.userLogin})).userInfo;Object(s.useEffect)((function(){l({type:y}),p&&p.isAdmin||t.push("/login"),b?t.push("/admin/artists/".concat(h.name,"/edit")):l(re())}),[l,t,p,u,b,h]);var S=function(e){window.confirm("Are you sure")&&l(function(e){return function(){var t=Object(X.a)(ee.a.mark((function t(a,s){var r,c,n,i;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:x}),r=s(),c=r.userLogin.userInfo,n={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,ae.a.delete("/api/artists/".concat(e),n);case 6:a({type:O}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),i=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,a({type:f,payload:i});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a){return t.apply(this,arguments)}}()}(e))};return Object(H.jsxs)("div",{className:"container bg-black",children:[Object(H.jsx)(Ne.a,{className:"text-end mt-10",children:Object(H.jsxs)(ye.a,{children:[Object(H.jsx)("span",{className:"text-white px-3",children:"Create New Artist"}),Object(H.jsx)("input",{placeholder:"Insert Artist Name",onChange:function(e){return i(e.target.value)}}),Object(H.jsx)(Oe.a,{className:"my-3 mx-5",onClick:function(){l(function(e){return function(){var t=Object(X.a)(ee.a.mark((function t(a,s){var r,c,n,i,l;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("artistName",e),t.prev=1,a({type:g}),r=s(),c=r.userLogin.userInfo,n={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=7,ae.a.post("/api/artists/",{name:e},n);case 7:i=t.sent,l=i.data,console.log("data",l),a({type:v,payload:l}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),a({type:N,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()}(c))},children:Object(H.jsx)("i",{className:"fas fa-plus text-white"})})]})}),Object(H.jsxs)(Se.a,{striped:!0,hover:!0,responsive:!0,style:{position:"relative",zIndex:"400",marginTop:"50px"},children:[Object(H.jsx)("thead",{style:{position:"relative",zIndex:"400"},children:Object(H.jsxs)("tr",{children:[Object(H.jsx)("th",{children:"NAME"}),Object(H.jsx)("th",{children:"ACTION"})]})}),Object(H.jsx)("tbody",{children:!!j&&j.map((function(e){return Object(H.jsxs)("tr",{children:[Object(H.jsx)("td",{children:e.name}),Object(H.jsxs)("td",{children:[Object(H.jsx)(z.Link,{to:"/admin/artists/".concat(e.name,"/edit"),children:Object(H.jsx)("button",{variant:"light",className:"btn-sm",children:Object(H.jsx)("i",{className:"fas fa-edit"})})}),Object(H.jsx)(Oe.a,{variant:"danger",className:"btn-sm",onClick:function(){return S(e._id)},children:Object(H.jsx)("i",{className:"fas fa-trash"})})]})]},e._id)}))})]})]})},Ee=function(){return Object(H.jsxs)(z.BrowserRouter,{children:[Object(H.jsx)(J,{})," ",Object(H.jsx)(P.d,{path:"/",component:ie,exact:!0}),Object(H.jsx)(P.d,{path:"/releases",component:me}),Object(H.jsx)(P.d,{path:"/all-artists",component:ue}),Object(H.jsx)(P.d,{path:"/about",component:be}),Object(H.jsx)(P.d,{path:"/events",component:he}),Object(H.jsx)(P.d,{path:"/artists/:name",component:de,exact:!0}),Object(H.jsx)(P.d,{path:"/login",component:fe}),Object(H.jsx)(P.d,{path:"/artistEdit",component:ve}),Object(H.jsx)(P.d,{path:"/artistList",component:we}),Object(H.jsx)(P.d,{path:"/admin/artists/:name/edit",component:ve}),Object(H.jsx)(W,{})]})};c.a.render(Object(H.jsx)(n.a,{store:B,children:Object(H.jsx)(Ee,{})}),document.getElementById("root"))},65:function(e,t,a){},70:function(e,t,a){},80:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.a9873775.chunk.js.map