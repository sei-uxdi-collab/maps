(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),l=a.n(o),s=(a(63),a(5)),c=a(6),i=a(8),p=a(7),u=a(9),m=(a(64),a(39)),h=a.n(m),d=a(54),g=a(27),f=a.n(g),b=a(18),E=(a(84),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).setQuery=function(e){a.setState({query:e})},a.handleAutocompleteSelect=function(){var e=Object(d.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.geocodeByAddress)(t);case 2:return n=e.sent,e.next=5,Object(g.getLatLng)(n[0]);case 5:r=e.sent,a.props.setApp({searchLocation:r,mapCenter:r}),a.props.setApp({placeData:n[0]}),a.setState({query:""});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={query:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{value:this.state.query,onChange:this.setQuery,onSelect:this.handleAutocompleteSelect},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,o=e.loading;return r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",Object.assign({style:{height:"40px",width:"100%",fontSize:"16px"}},t({placeholder:"Search Places ...",className:"location-search-input"}))),r.a.createElement("div",{className:"autocomplete-dropdown-container"},o&&r.a.createElement("div",null,"Loading..."),a.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",n(e,{className:t,style:a}),r.a.createElement("span",null,e.description))}))))}))}}]),t}(r.a.Component)),w=Object(b.GoogleApiWrapper)({apiKey:"AIzaSyBr0KBe6OYC3MKAmWh4nfTPQrCQT6ei-O8"})(E),v=a(22),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).state={test:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"test component"),r.a.createElement("p",null,this.props.placeData&&this.props.placeData.formatted_address),r.a.createElement("a",{rel:"noopener noreferrer",href:"https://developers.google.com/maps/documentation/javascript/tutorial",target:"_blank"},r.a.createElement("button",null,"display link to create a review")),r.a.createElement("p",null,this.props.placeData&&this.props.placeData.place_id))}}]),t}(r.a.Component),C=a(11),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).url="http://localhost:3000",a.executeTest=function(){console.log("test button")},a.state={test:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){Object(g.geocodeByPlaceId)(this.props.placeId).then(console.log)}},{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement(C.b,{to:"/new"},r.a.createElement("button",null,"Add a Review")))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).state={test:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="";return this.props.placeData&&!this.props.placeData.photos&&(e="https://1m19tt3pztls474q6z46fnk9-wpengine.netdna-ssl.com/wp-content/themes/unbound/images/No-Image-Found-400x264.png"),this.props.placeData&&this.props.placeData.photos&&(e=this.props.placeData.photos[0].getUrl()),this.props.placeData?r.a.createElement("div",null,r.a.createElement("img",{height:"200px",alt:"pic",src:e}),r.a.createElement("h1",null,this.props.placeData.name),r.a.createElement("p",null,r.a.createElement("strong",null,"google place_id: "),this.props.placeData.reference||"unknown"),r.a.createElement(j,{placeId:this.props.placeData.reference})):r.a.createElement("div",null,r.a.createElement("h3",null,"Loading..."))}}]),t}(r.a.Component),y=a(17),D=a.n(y),S="https://murmuring-anchorage-97253.herokuapp.com/",P="http://localhost:3000";window.location.hostname;var I=S,L=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(p.a)(t).call(this))).componentDidMount=function(){navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){console.log("found user location");var a=t.coords,n=a.latitude,r=a.longitude;e.props.setApp({userLocation:{lat:n,lng:r},mapCenter:{lat:n,lng:r}})})),D()(I+"/work_spaces").then((function(t){e.setState({allData:t.data.work_spaces})}))},e.placeDetails=["name","website","formatted_phone_number","formatted_address","photo","reference","reviews"],e.setPlaceData=function(t){console.log(t),e.props.setApp({placeData:t})},e.getPlaceDetails=function(t,a){var n=e.placeDetails;new e.props.google.maps.places.PlacesService(t).getDetails({placeId:a,fields:n},e.setPlaceData)},e.setNewLocation=function(t,a){e.props.setApp({poiLocation:t,mapCenter:t,placeData:null,placeId:a})},e.onMarkerClick=function(t,a,n){var r=t.data.lat,o=t.data.lng,l=a.data.place_id;e.setState({selectedMarker:a,showWindow:!0}),console.log(a.data),e.props.setApp({currentWorkspace:a.data,placeData:null}),e.setNewLocation({lat:r,lng:o},l),e.getPlaceDetails(t.map,l),e.props.history.push("/workspace")},e.onInfoWindowClose=function(){e.setState({showWindow:!1})},e.showPOI=function(t,a){e.props.setApp({poiLocation:{lat:a.latLng.lat(),lng:a.latLng.lng()},mapCenter:{lat:a.latLng.lat(),lng:a.latLng.lng()},placeData:null,placeId:a.placeId});var n=new e.props.google.maps.places.PlacesService(t);console.log("service is:",n),n.getDetails({placeId:a.placeId,fields:["name","website","formatted_phone_number","formatted_address","photo","reference","reviews"]},(function(t,a){console.log(t),e.props.setApp({placeData:t})}))},e.navigateHome=function(){"/"!==e.props.location.pathname&&e.props.history.push("/"),e.state.showWindow&&e.setState({showWindow:!1}),e.state.showPOI&&e.setState({showPOI:!1})},e.handleClick=function(t,a,n){n.placeId?(e.setState({showPOI:!0}),e.showPOI(a,n)):e.navigateHome()},e.state={selectedMarker:null,showWindow:!1,allData:[],showPOI:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(b.Map,{google:this.props.google,center:this.props.center,initialCenter:this.props.center,zoom:14,clickableIcons:!0,onClick:this.handleClick},r.a.createElement(b.Marker,{name:"user location",position:this.userLocation,icon:{url:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}}),r.a.createElement(b.Marker,{name:"search result",position:this.props.searchLocation,icon:{url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}),r.a.createElement(b.InfoWindow,{position:this.props.poiLocation,visible:this.state.showPOI},r.a.createElement(k,{placeData:this.props.placeData})),this.state.allData.map((function(t){return r.a.createElement(b.Marker,{onClick:e.onMarkerClick,position:{lat:t.lat,lng:t.lng},placeId:t.placeId,data:t,name:"Current location"})})),r.a.createElement(b.InfoWindow,{marker:this.state.selectedMarker,visible:this.state.showWindow,onClose:this.onInfoWindowClose},r.a.createElement(O,{placeData:this.props.placeData})))}}]),t}(r.a.Component),A=Object(b.GoogleApiWrapper)({apiKey:"AIzaSyBr0KBe6OYC3MKAmWh4nfTPQrCQT6ei-O8"})(Object(v.f)(L)),W=a(20),N=(a(29),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){console.log(e.target.value),console.log(e.target.name),a.setState(Object(W.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),D()({method:"post",url:I+"/work_spaces",data:{work_space:{place_id:a.props.placeId,lat:a.props.location.lat,lng:a.props.location.lng}},headers:{Authorization:"Token token=".concat(a.props.user.token)}}).then((function(e){console.log(e),D()({method:"post",url:I+"/reviews",data:{review:{rating:a.state.rating,note:a.state.review,work_space_id:e.data.work_space.id}},headers:{Authorization:"Token token=".concat(a.props.user.token)}}).then((function(e){console.log(e),a.setState({display:"none"})}))})).catch((function(){return alert("create review failed")}))},a.closeWindow=function(){a.setState({display:"none"})},a.state={rating:3,review:"",display:"block",redirect:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("reviewform data",this.props.placeData),console.log("hello")}},{key:"render",value:function(){var e="";this.props.placeData&&this.props.placeData.name&&(e=this.props.placeData.name);var t="";return this.props.placeData&&this.props.placeData.photos&&(t=this.props.placeData.photos[0].getUrl()),console.log(t),this.props.user?r.a.createElement("div",{className:"popup",style:{display:this.state.display}},r.a.createElement(C.b,{to:"/"},r.a.createElement("button",{style:{float:"right"},onClick:this.closeWindow},"Close")),r.a.createElement("h1",null," Review ",e),r.a.createElement("a",{href:this.props.placeData.website,target:"_blank"},r.a.createElement("img",{height:"100px",alt:"pic",src:t})),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null," Rating: "),r.a.createElement("input",{name:"rating",type:"range",min:"0",max:"5",value:this.state.rating,onChange:this.handleChange}),r.a.createElement("p",null,this.state.rating),r.a.createElement("label",null," Review: "),r.a.createElement("textarea",{name:"review",value:this.state.review,onChange:this.handleChange,required:!0}),r.a.createElement("button",null," Submit "))):r.a.createElement(v.a,{to:"/sign-in"})}}]),t}(r.a.Component)),_=function(e){return D()({url:I+"/sign-in",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},U=a(10),x=a(26),M=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(p.a)(t).call(this))).handleChange=function(t){return e.setState(Object(W.a)({},t.target.name,t.target.value))},e.onSignUp=function(t){t.preventDefault();var a,n=e.props,r=n.history,o=n.setUser;(a=e.state,D()({method:"POST",url:I+"/sign-up",data:{credentials:{email:a.email,password:a.password,password_confirmation:a.passwordConfirmation}}})).then((function(){return _(e.state)})).then((function(e){return o(e.data.user)})).then((function(){return r.push("/")})).catch((function(t){console.error(t),e.setState({email:"",password:"",passwordConfirmation:""})})),console.log("signUp: "+e.state.email)},e.state={email:"",password:"",passwordConfirmation:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.passwordConfirmation;return r.a.createElement("div",{className:"row body popup"},r.a.createElement("div",{className:"col-sm-10 col-md-8 mx-auto mt-5"},r.a.createElement(C.b,{to:"/"},r.a.createElement("button",{style:{float:"right"},onClick:this.closeWindow},"Close")),r.a.createElement("h3",null,"Sign Up"),r.a.createElement(U.a,{onSubmit:this.onSignUp},r.a.createElement(U.a.Group,{controlId:"email"},r.a.createElement(U.a.Label,null,"Email address"),r.a.createElement(U.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"password"},r.a.createElement(U.a.Label,null,"Password"),r.a.createElement(U.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"passwordConfirmation"},r.a.createElement(U.a.Label,null,"Password Confirmation"),r.a.createElement(U.a.Control,{required:!0,name:"passwordConfirmation",value:n,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})),r.a.createElement(x.a,{variant:"primary",type:"submit"},"Submit"))))}}]),t}(n.Component),q=Object(v.f)(M),T=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(p.a)(t).call(this))).handleChange=function(t){return e.setState(Object(W.a)({},t.target.name,t.target.value))},e.onSignIn=function(t){t.preventDefault();var a=e.props,n=a.history,r=a.setUser;_(e.state).then((function(e){return r(e.data.user)})).then((function(){return n.push("/")})).catch((function(t){console.error(t),e.setState({email:"",password:""})})),console.log("SignIn: "+e.state.email)},e.state={email:"",password:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"row popup"},r.a.createElement("div",{className:"col-sm-10 col-md-8 mx-auto mt-5"},r.a.createElement(C.b,{to:"/"},r.a.createElement("button",{style:{float:"right"},onClick:this.closeWindow},"Close")),r.a.createElement("h3",null,"Sign In"),r.a.createElement(U.a,{onSubmit:this.onSignIn},r.a.createElement(U.a.Group,{controlId:"email"},r.a.createElement(U.a.Label,null,"Email address"),r.a.createElement(U.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"password"},r.a.createElement(U.a.Label,null,"Password"),r.a.createElement(U.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})),r.a.createElement(x.a,{variant:"primary",type:"submit"},"Submit"))))}}]),t}(n.Component),z=Object(v.f)(T),B=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(p.a)(t).call(this))).handleChange=function(t){return e.setState(Object(W.a)({},t.target.name,t.target.value))},e.onChangePassword=function(t){t.preventDefault();var a=e.props,n=a.history,r=a.user;(function(e,t){return D()({url:I+"/change-password",method:"PATCH",headers:{Authorization:"Token token=".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(e.state,r).then((function(){return n.push("/")})).catch((function(t){console.error(t),e.setState({oldPassword:"",newPassword:""})}))},e.state={oldPassword:"",newPassword:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,a=e.newPassword;return r.a.createElement("div",{className:"row popup"},r.a.createElement("div",{className:"col-sm-10 col-md-8 mx-auto mt-5"},r.a.createElement("h3",null,"Change Password"),r.a.createElement(U.a,{onSubmit:this.onChangePassword},r.a.createElement(U.a.Group,{controlId:"oldPassword"},r.a.createElement(U.a.Label,null,"Old password"),r.a.createElement(U.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"newPassword"},r.a.createElement(U.a.Label,null,"New Password"),r.a.createElement(U.a.Control,{required:!0,name:"newPassword",value:a,type:"password",placeholder:"New Password",onChange:this.handleChange})),r.a.createElement(x.a,{variant:"primary",type:"submit"},"Submit"))))}}]),t}(n.Component),G=Object(v.f)(B),R=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.history,a=e.clearUser;(function(e){return D()({url:I+"/sign-out",method:"DELETE",headers:{Authorization:"Token token=".concat(e.token)}})})(e.user).finally((function(){return t.push("/")})).finally((function(){return a()})),console.log("Signout worked!!")}},{key:"render",value:function(){return""}}]),t}(n.Component),F=Object(v.f)(R),K=a(24),Q=a(34),H=(a(105),r.a.createElement(n.Fragment,null,r.a.createElement(K.a.Link,{href:"#change-password"},"Change Password"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(K.a.Link,{href:"#sign-out"},"Sign Out"))),J=r.a.createElement(n.Fragment,null,r.a.createElement(K.a.Link,{href:"#sign-up"},"Sign Up"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(K.a.Link,{href:"#sign-in"},"Sign In")),Y=r.a.createElement(n.Fragment,null,r.a.createElement(K.a.Link,{href:"#/"},"Home"),r.a.createElement("br",null),r.a.createElement("br",null)),$=function(e){var t=e.user;return r.a.createElement(Q.a,{className:"header",collapseOnSelect:!0,fixed:"top",bg:"secondary",variant:"dark",expand:"md"},r.a.createElement(Q.a.Brand,{href:"#"},"WorkFromRoam"),r.a.createElement(K.a,null,t&&r.a.createElement("span",{style:{color:"black"},className:"navbar-text mr-2"},"Welcome, ",t.email)),r.a.createElement("br",null),r.a.createElement(Q.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(K.a,{className:"ml-auto"},Y,t?H:J)))},V=(a(106),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){a.setState({show:!a.state.show})},a.state={show:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="";return e="/"===this.props.location.pathname?"/nav":"/",r.a.createElement(C.a,null,r.a.createElement(C.b,{to:e},r.a.createElement("img",{onClick:this.handleClick,className:"nav-bar",src:"ROME.png",alt:"nav-bar"})))}}]),t}(r.a.Component)),X=Object(v.f)(V),Z=(a(107),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).state={test:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Rating: ",this.props.rating),r.a.createElement("p",null,"Note: ",this.props.note))}}]),t}(r.a.Component)),ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).state={test:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="../../loading-cat.gif";return this.props.placeData&&this.props.placeData.photos&&(e=this.props.placeData.photos[0].getUrl()),r.a.createElement("div",{className:"workspace",style:this.state.display},r.a.createElement(C.b,{to:"/"},r.a.createElement("button",{style:{float:"right"}},"Close")),r.a.createElement("h1",null,this.props.placeData&&this.props.placeData.name),r.a.createElement("img",{accept:"*/*",height:"200px",src:e}),r.a.createElement("br",null),r.a.createElement("a",{href:this.props.placeData&&this.props.placeData.website,target:"_blank"},"visit website"),this.props.data.reviews.map((function(e){return r.a.createElement(Z,{rating:e.rating,note:e.note})})))}}]),t}(r.a.Component),te=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(p.a)(t).call(this))).setUser=function(t){return e.setState({user:t})},e.clearUser=function(){return e.setState({user:null})},e.state={poiLocation:null,mapCenter:{lat:42.3601,lng:-71.0589},bounds:null,placeId:null,placeData:null,searchLocation:null,user:null,userLocation:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.user;return r.a.createElement("div",null,r.a.createElement(n.Fragment,null,r.a.createElement(v.b,{path:"/new"},r.a.createElement(N,{user:t,placeId:this.state.placeId,placeData:this.state.placeData,location:this.state.poiLocation})),r.a.createElement(v.b,{path:"/workspace",render:function(){return r.a.createElement(ee,{data:e.state.currentWorkspace,placeData:e.state.placeData})}}),r.a.createElement(v.b,{path:"/sign-up",render:function(){return r.a.createElement(q,{setUser:e.setUser})}}),r.a.createElement(v.b,{path:"/sign-in",render:function(){return r.a.createElement(z,{user:t,setUser:e.setUser})}}),r.a.createElement(v.b,{user:t,path:"/change-password",render:function(){return r.a.createElement(G,{user:t})}}),r.a.createElement(v.b,{user:t,path:"/sign-out",render:function(){return r.a.createElement(F,{clearUser:e.clearUser,user:t})}}),r.a.createElement(v.b,{user:t,path:"/nav",render:function(){return r.a.createElement($,{clearUser:e.clearUser,user:t})}}),r.a.createElement(v.b,{path:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(X,null),r.a.createElement(w,{setApp:this.setState.bind(this),mapCenter:this.state.mapCenter}),r.a.createElement(A,{center:this.state.mapCenter,coordinates:this.state.coordinates,placeData:this.state.placeData,setApp:this.setState.bind(this),mapCenter:this.state.mapCenter,poiLocation:this.state.poiLocation,searchLocation:this.state.searchLocation,userLocation:this.state.userLocation})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=r.a.createElement(C.a,null,r.a.createElement(te,null));l.a.render(ae,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},29:function(e,t,a){},58:function(e,t,a){e.exports=a(108)},63:function(e,t,a){},64:function(e,t,a){},84:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.bdc13760.chunk.js.map