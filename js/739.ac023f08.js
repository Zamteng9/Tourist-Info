"use strict";(self["webpackChunktourist_info"]=self["webpackChunktourist_info"]||[]).push([[739],{4739:function(t,e,a){a.r(e),a.d(e,{default:function(){return M}});var s=a(3396),o=a(7139);const i={key:0},l={class:"max-w-7xl mx-auto border box-border p-4 rounded-md mt-7"},n={class:"font-bold mb-2 text-xl text-center"},r=["src","alt"],d={class:"mb-5"},m=(0,s._)("span",{class:"font-extrabold"},"포토그래퍼",-1),p={class:"mb-5"},c=(0,s._)("span",{class:"font-extrabold"},"장소",-1),k={class:"mb-5"},h=(0,s._)("span",{class:"font-extrabold"},"작성 날짜",-1),_={class:"mb-5"},u=(0,s._)("span",{class:"font-extrabold"},"수정 날짜",-1),g={class:"mb-5 leading-8"},b=(0,s._)("span",{class:"font-extrabold"},"검색 키워드",-1),w={class:"mb-5"},I=(0,s._)("div",{class:"flex mt-5"},[(0,s._)("div",{id:"map",class:"w-2/4 h-96"}),(0,s._)("div",{id:"map2",class:"w-2/4 h-96"})],-1),f=["click"];function x(t,e,a,x,v,L){return v.listItem&&v.listItem.galContentTypeId==Number(v.listId)?((0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",l,[(0,s._)("h2",n,(0,o.zw)(v.listItem.galTitle),1),(0,s._)("img",{src:v.listItem.galWebImageUrl,alt:v.listItem.galWebImageUrl},null,8,r),(0,s._)("ul",null,[(0,s._)("li",d,[m,(0,s.Uk)(" : "+(0,o.zw)(v.listItem.galPhotographer),1)]),(0,s._)("li",p,[c,(0,s.Uk)(" : "+(0,o.zw)(v.listItem.galPhotographyLocation),1)]),(0,s._)("li",k,[h,(0,s.Uk)(" : "+(0,o.zw)(v.listItem.galModifiedtime),1)]),(0,s._)("li",_,[u,(0,s.Uk)(" : "+(0,o.zw)(v.listItem.galCreatedtime),1)]),(0,s._)("li",g,[b,(0,s.Uk)(" : "+(0,o.zw)(v.listItem.galSearchKeyword),1)]),(0,s._)("li",w,[(0,s._)("button",{onClick:e[0]||(e[0]=t=>L.open_page(v.HOMEPAGE_URL)),class:"hover:font-extrabold mb-1 py-1 px-5 border rounded transition-all hover:text-white hover:shadow-[inset_-130px_0_0_0_lightblue,inset_130px_0_0_0_lightblue] duration-700"},"한국관광공사 홈페이지")]),(0,s._)("li",null,[(0,s._)("button",{onClick:e[1]||(e[1]=e=>t.$router.go(-1)),class:"text-[18px] hover:font-extrabold mb-1 py-1 px-5 border rounded transition-all hover:text-white hover:shadow-[inset_-60px_0_0_0_orange,inset_60px_0_0_0_orange] duration-700"},"뒤로가기")])]),I])])):((0,s.wg)(),(0,s.iD)("div",{key:1,click:t.$router.replace("/404")},"자료가 없습니다. ",8,f))}var v={data(){return{HOMEPAGE_URL:"http://tong.visitkorea.or.kr",listItem:[],listId:this.$route.params.id,map:null,markers:[],latitude:0,longitude:0}},methods:{open_page(t){window.open(t)},initMap(){const t=document.getElementById("map");var e=document.getElementById("map2"),a=new kakao.maps.Roadview(e),s=new kakao.maps.RoadviewClient,o=new kakao.maps.LatLng(this.listItem.LAT,this.listItem.LNG);s.getNearestPanoId(o,50,(function(t){a.setPanoId(t,o)}));const i={center:new kakao.maps.LatLng(this.listItem.LAT,this.listItem.LNG),level:5};this.map=new kakao.maps.Map(t,i),this.displayMarker([[this.listItem.LAT,this.listItem.LNG]])},displayMarker(t){this.markers.length>0&&this.markers.forEach((t=>t.setMap(null)));const e=t.map((t=>new kakao.maps.LatLng(...t)));if(e.length>0){this.markers=e.map((t=>new kakao.maps.Marker({map:this.map,position:t})));const t=e.reduce(((t,e)=>t.extend(e)),new kakao.maps.LatLngBounds);this.map.setBounds(t)}}},name:"DetailPage",created(){if(this.listItem=JSON.parse(sessionStorage.getItem("data")),console.log("테스트 문구 출력"),"geolocation"in navigator)if(window.kakao&&window.kakao.maps)this.initMap();else{const t=document.createElement("script");t.onload=()=>kakao.maps.load(this.initMap),t.src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=eacb6b17f74c881c607784fe11e8e44b",document.head.appendChild(t)}}},L=a(89);const y=(0,L.Z)(v,[["render",x]]);var M=y}}]);
//# sourceMappingURL=739.ac023f08.js.map