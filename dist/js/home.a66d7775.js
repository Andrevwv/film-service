(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"199f":function(t,e,s){},"1ae7":function(t,e,s){"use strict";var i=s("3f23"),n=s.n(i);n.a},"33e1":function(t,e,s){},"3f23":function(t,e,s){},"5ced":function(t,e,s){},"86c9":function(t,e,s){"use strict";var i=s("e706"),n=s.n(i);n.a},9392:function(t,e,s){"use strict";var i=s("199f"),n=s.n(i);n.a},"9d6d":function(t,e,s){"use strict";var i=s("dce9"),n=s.n(i);n.a},bb51:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s(t.currentView,{tag:"component"}),s("div",{staticClass:"center"},[s("button",{staticClass:"pretty v2",on:{click:function(e){return t.switchView("MoviesUpperSlick","MoviesSlicks")}}},[t._v(" Movies ")]),s("button",{staticClass:"pretty v2",on:{click:function(e){return t.switchView("TVShowsUpperSlick","TVShowsSlicks")}}},[t._v(" TV Shows ")])]),s(t.currentView2,{tag:"component"})],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("MovieSlick",{attrs:{type:t.upcoming}}),s("MovieSlick",{attrs:{type:t.popular}}),s("MovieSlick",{attrs:{type:t.now_playing}}),s("MovieSlick",{attrs:{type:t.top_rated}})],1)},o=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return null!=t.type1?s("div",{staticClass:"container"},[s("h3",{staticClass:"uppercase left-text"},[t._v(" "+t._s(t.type)+" ")]),s("slick",{ref:"slick",staticClass:"slick",attrs:{options:t.slickOptions}},t._l(t.type1,(function(e){return s("div",{key:e.id,staticClass:"cs"},[s("MovieCover",{attrs:{item:e,genres:t.movieGenres}})],1)})),0)],1):t._e()},c=[],l=(s("d3b7"),s("96cf"),s("bc3a")),p=s.n(l),u=s("7ecd"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cc"},[s("router-link",{staticClass:"button",attrs:{tag:"button",to:{name:"movie",params:{movieID:t.item.id,movieType:"movie"}}}},[s("img",{staticClass:"main-imgs",attrs:{title:t.item.overview,src:t.globalImgAddress+"92"+t.item.poster_path}})]),s("div",{staticClass:"text-justify"},[t._v(" "+t._s(t.item.original_title)+" ")]),s("div",{staticClass:"text-justify"},[t._v(" "+t._s(t.getCurrentMediaTypeGenresNames(t.genres,t.item.genre_ids))+" ")])],1)},v=[],h={props:["genres","item"]},f=h,m=(s("1ae7"),s("2877")),k=Object(m["a"])(f,d,v,!1,null,"7ca6ee24",null),_=k.exports,g={data:function(){return{movieGenres:null,slickOptions:{slidesToShow:7,infinite:!0,responsive:[{breakpoint:1280,settings:{slidesToShow:6}},{breakpoint:1024,settings:{slidesToShow:5}},{breakpoint:850,settings:{slidesToShow:4}},{breakpoint:684,settings:{slidesToShow:3}},{breakpoint:540,settings:{slidesToShow:2}},{breakpoint:400,settings:{slidesToShow:1}}]},type1:null}},components:{MovieCover:_,Slick:u["a"]},props:["type"],created:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:p.a.get("https://api.themoviedb.org/3/movie/".concat(this.type,"?api_key=f943d3d10cc39fd734122d69efabbacb")).then((function(e){t.type1=e.data.results})),this.movieGenres=this.$store.state.MovieGenres;case 2:case"end":return e.stop()}}),null,this)},methods:{next:function(){this.$refs.slick.next()},prev:function(){this.$refs.slick.prev()},reInit:function(){this.$refs.slick.reSlick()}}},w=g,b=(s("c6b1"),Object(m["a"])(w,a,c,!1,null,"26360b06",null)),S=b.exports,y={data:function(){return{upcoming:"upcoming",popular:"popular",now_playing:"now_playing",top_rated:"top_rated"}},components:{MovieSlick:S}},T=y,C=Object(m["a"])(T,r,o,!1,null,null,null),x=C.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("TVShowSlick",{attrs:{type:t.airing_today}}),s("TVShowSlick",{attrs:{type:t.popular}}),s("TVShowSlick",{attrs:{type:t.on_the_air}}),s("TVShowSlick",{attrs:{type:t.top_rated}})],1)},V=[],G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return null!=t.type1?s("div",{staticClass:"container"},[s("h3",{staticClass:"uppercase left-text"},[t._v(" "+t._s(t.type)+" ")]),s("slick",{ref:"slick",staticClass:"slick",attrs:{options:t.slickOptions}},t._l(t.type1,(function(e){return s("div",{key:e.id},[s("TVShowCover",{attrs:{item:e,genres:t.tvshowGenres}})],1)})),0)],1):t._e()},M=[],O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("router-link",{staticClass:"button",attrs:{tag:"button",to:{name:"movie",params:{movieID:t.item.id,movieType:"tv"}}}},[s("img",{staticClass:"main-imgs",attrs:{title:t.item.overview,src:t.globalImgAddress+"92"+t.item.poster_path}})]),s("div",[t._v(" "+t._s(t.item.original_name)+" ")]),s("div",[t._v(" "+t._s(t.getCurrentMediaTypeGenresNames(t.genres,t.item.genre_ids))+" ")])],1)},I=[],j={props:["genres","item"]},E=j,U=(s("9d6d"),Object(m["a"])(E,O,I,!1,null,"5745bdc4",null)),A=U.exports,D={data:function(){return{tvshowGenres:null,slickOptions:{slidesToShow:7,infinite:!0,responsive:[{breakpoint:1280,settings:{slidesToShow:6}},{breakpoint:1024,settings:{slidesToShow:5}},{breakpoint:850,settings:{slidesToShow:4}},{breakpoint:684,settings:{slidesToShow:3}},{breakpoint:540,settings:{slidesToShow:2}},{breakpoint:400,settings:{slidesToShow:1}}]},type1:null}},components:{TVShowCover:A,Slick:u["a"]},props:["type"],created:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:p.a.get("https://api.themoviedb.org/3/tv/".concat(this.type,"?api_key=f943d3d10cc39fd734122d69efabbacb")).then((function(e){t.type1=e.data.results})),this.tvshowGenres=this.$store.state.TVShowGenres;case 1:case"end":return e.stop()}}),null,this)},methods:{next:function(){this.$refs.slick.next()},prev:function(){this.$refs.slick.prev()},reInit:function(){this.$refs.slick.reSlick()}}},N=D,R=Object(m["a"])(N,G,M,!1,null,"3b7e06cf",null),J=R.exports,q={data:function(){return{airing_today:"airing_today",popular:"popular",on_the_air:"on_the_air",top_rated:"top_rated"}},components:{TVShowSlick:J}},z=q,B=Object(m["a"])(z,$,V,!1,null,null,null),F=B.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return null!=t.popular&&null!=t.movieGenres?s("div",{staticClass:"upper-slick"},[s("slick",{ref:"slick",staticClass:"slick",attrs:{options:t.slickOptionsUpper}},t._l(t.popular,(function(e){return s("div",{key:e.id},[s("router-link",{attrs:{to:{name:"movie",params:{movieID:e.id,movieType:"movie"}}}},[s("img",{staticClass:"upper-imgs",attrs:{src:t.globalImgAddress+"1280"+e.backdrop_path}})]),s("div",{staticClass:"upper-text white-text"},[s("h3",{staticClass:"uppercase"},[t._v("popular")]),s("h4",[t._v(t._s(e.original_title))]),s("h5",[t._v(t._s(t.getCurrentMediaTypeGenresNames(t.movieGenres,e.genre_ids)))])])],1)})),0)],1):t._e()},K=[],L={data:function(){return{popular:null,movieGenres:null,slickOptionsUpper:{slidesToShow:1,infinite:!0,autoplay:!0,autoplaySpeed:3e3,arrows:!0,draggable:!1}}},created:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:p.a.get("https://api.themoviedb.org/3/movie/popular?api_key=f943d3d10cc39fd734122d69efabbacb").then((function(e){t.popular=e.data.results})),this.movieGenres=this.$store.state.MovieGenres;case 2:case"end":return e.stop()}}),null,this)},components:{Slick:u["a"]},methods:{next:function(){this.$refs.slick.next()},prev:function(){this.$refs.slick.prev()},reInit:function(){this.$refs.slick.reSlick()}}},P=L,Q=(s("9392"),Object(m["a"])(P,H,K,!1,null,"072393ee",null)),W=Q.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return null!=t.popular&&null!=t.tvshowGenres?s("div",{staticClass:"upper-slick"},[s("slick",{ref:"slick",staticClass:"slick",attrs:{options:t.slickOptionsUpper}},t._l(t.popular,(function(e){return s("div",{key:e.id},[s("router-link",{attrs:{to:{name:"movie",params:{movieID:e.id,movieType:"tv"}}}},[s("img",{staticClass:"upper-imgs",attrs:{src:t.globalImgAddress+"1280"+e.backdrop_path}})]),s("div",{staticClass:"upper-text white-text"},[s("h3",{staticClass:"uppercase"},[t._v("popular")]),s("h4",[t._v(t._s(e.original_name))]),s("h5",[t._v(t._s(t.getCurrentMediaTypeGenresNames(t.tvshowGenres,e.genre_ids)))])])],1)})),0)],1):t._e()},Y=[],Z={data:function(){return{popular:null,tvshowGenres:null,slickOptionsUpper:{slidesToShow:1,infinite:!0,autoplay:!0,autoplaySpeed:3e3,arrows:!0,draggable:!1}}},created:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:p.a.get("https://api.themoviedb.org/3/tv/popular?api_key=f943d3d10cc39fd734122d69efabbacb").then((function(e){t.popular=e.data.results})),this.tvshowGenres=this.$store.state.TVShowGenres;case 1:case"end":return e.stop()}}),null,this)},components:{Slick:u["a"]},methods:{next:function(){this.$refs.slick.next()},prev:function(){this.$refs.slick.prev()},reInit:function(){this.$refs.slick.reSlick()}}},tt=Z,et=(s("86c9"),Object(m["a"])(tt,X,Y,!1,null,"31917de2",null)),st=et.exports,it={name:"app",data:function(){return{currentView:"MoviesUpperSlick",currentView2:"MoviesSlicks"}},components:{MoviesSlicks:x,TVShowsSlicks:F,MoviesUpperSlick:W,TVShowsUpperSlick:st},methods:{switchView:function(t,e){t&&(this.currentView=t),e&&(this.currentView2=e)}}},nt=it,rt=(s("cccb"),Object(m["a"])(nt,i,n,!1,null,null,null));e["default"]=rt.exports},c6b1:function(t,e,s){"use strict";var i=s("33e1"),n=s.n(i);n.a},cccb:function(t,e,s){"use strict";var i=s("5ced"),n=s.n(i);n.a},dce9:function(t,e,s){},e706:function(t,e,s){}}]);
//# sourceMappingURL=home.a66d7775.js.map