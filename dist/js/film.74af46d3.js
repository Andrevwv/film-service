(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["film"],{"0083":function(t,e,i){"use strict";var s=i("23f5"),a=i.n(s);a.a},"070c":function(t,e,i){},"16f1":function(t,e,i){},"23f5":function(t,e,i){},4344:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"film"},[t.currentfilm&&t.cast&&t.trailers?i("div",[i("div",{staticClass:"film__poster-container"},[t.currentfilm.backdrop_path?i("img",{staticClass:"film__poster",attrs:{src:t.globalImgAddress+"1280"+t.currentfilm.backdrop_path}}):t._e()]),i("div",{staticClass:"film__container"},[i("div",[t._v("Genres: "+t._s(t.genres))]),t.currentfilm.overview?i("div",[i("div",[t._v("SUMMARY")]),i("div",[t._v(t._s(t.currentfilm.overview))])]):t._e(),t.cast.length?i("div",[i("FilmActorsSlickTemplate",{attrs:{cast:t.cast}})],1):t._e(),t.trailers.length?i("div",[i("FilmTrailersSlickTemplate",{attrs:{trailers:t.trailers}})],1):t._e(),t.reviews&&t.reviews.length?i("div",{staticClass:"film__title"},[t._v(" REVIEWS ")]):t._e(),t._l(t.reviews,(function(t,e){return i("div",{key:t.id},[i("FilmReviewTemplate",{attrs:{review:t,index:e}})],1)}))],2)]):t._e()])},a=[],r=(i("99af"),i("a15b"),i("d81d"),i("b0c0"),i("bc3a")),n=i.n(r),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"film-actors-slick-template__title"},[t._v("cast")]),i("slick",{ref:"slick",staticClass:"slick",attrs:{options:t.slickOptions_cast}},t._l(t.cast,(function(t){return i("div",{key:t.id},[i("FilmActorCoverTemplate",{attrs:{item:t}})],1)})),0)],1)},c=[],o=i("7ecd"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"film-actor-cover-template__container"},[s("router-link",{staticClass:"film-actor-cover-template",attrs:{tag:"div",to:{name:"actor",params:{actorID:t.item.id}}}},[t.item.profile_path&&""!==t.item.profile_path?s("img",{staticClass:"film-actor-cover-template__actor-photo",attrs:{title:t.item.bio,src:t.globalImgAddress+"92"+t.item.profile_path}}):s("img",{staticClass:"film-actor-cover-template__actor-photo",attrs:{src:i("bd21")}}),s("div",{staticClass:"film-actor-cover-template__actor-name"},[t._v(t._s(t.item.name))])])],1)},d=[],m={props:["item"]},p=m,u=(i("dcd6"),i("2877")),v=Object(u["a"])(p,f,d,!1,null,"0b712bc4",null),_=v.exports,h={data:function(){return{slickOptions_cast:{slidesToShow:7,infinite:!0,draggable:!1,lazyLoad:"ondemand",responsive:[{breakpoint:1280,settings:{slidesToShow:6}},{breakpoint:1024,settings:{slidesToShow:5}},{breakpoint:850,settings:{slidesToShow:4}},{breakpoint:684,settings:{slidesToShow:3}},{breakpoint:540,settings:{slidesToShow:2}},{breakpoint:400,settings:{slidesToShow:1}}]}}},components:{Slick:o["a"],FilmActorCoverTemplate:_},props:["cast"],methods:{next:function(){this.$refs.slick.next()},prev:function(){this.$refs.slick.prev()},reInit:function(){this.$refs.slick.reSlick()}}},b=h,k=(i("f6ae"),Object(u["a"])(b,l,c,!1,null,"4a8326cc",null)),w=k.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"film-trailers-slick-template__title"},[t._v("trailers")]),i("slick",{ref:"slick",staticClass:"slick",attrs:{options:t.slickOptions_trailers}},t._l(t.trailers,(function(t){return i("div",{key:t.id},[i("FilmTrailerCoverTemplate",{attrs:{item:t}})],1)})),0)],1)},T=[],C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"film-trailer-cover-template__trailer-container"},[i("div",{staticClass:"film-trailer-cover-template__trailer"},[i("iframe",{attrs:{width:"100%",src:"https://www.youtube.com/embed/"+t.item.key}}),i("div",{staticClass:"film-trailer-cover-template__trailer-title"},[t._v(t._s(t.item.name))])])])])},S=[],y={props:["item"]},x=y,$=(i("4562"),Object(u["a"])(x,C,S,!1,null,"60b1e0e5",null)),j=$.exports,I={data:function(){return{slickOptions_trailers:{slidesToShow:3,infinite:!0,draggable:!1,lazyLoad:"ondemand",responsive:[{breakpoint:1280,settings:{slidesToShow:2}},{breakpoint:880,settings:{slidesToShow:1}}]}}},components:{Slick:o["a"],FilmTrailerCoverTemplate:j},props:["trailers"],methods:{next:function(){this.$refs.slick.next()},prev:function(){this.$refs.slick.prev()},reInit:function(){this.$refs.slick.reSlick()}}},O=I,F=(i("6321"),Object(u["a"])(O,g,T,!1,null,"cae43944",null)),A=F.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.index%2===0?"film-review-template__right-border":"film-review-template__left-border"},[i("div",{staticClass:"film-review-template__bio"},[i("div",[t._v(t._s(t.review.author))]),i("div",[t._v(t._s(t.splittedReviewContent))]),i("a",{staticClass:"film-review-template__full-review",attrs:{href:"//www.themoviedb.org/review/"+t.review.id}},[t._v("See full review >>")])])])},D=[],R={props:["review","index"],computed:{splittedReviewContent:function(){return this.review.content.substring(0,255)+"..."}}},z=R,J=(i("0083"),Object(u["a"])(z,E,D,!1,null,null,null)),L=J.exports,M={data:function(){return{genres:null,currentfilm:null,cast:null,trailers:null,reviews:null,isvisible:!0}},components:{FilmActorsSlickTemplate:w,FilmTrailersSlickTemplate:A,FilmReviewTemplate:L},props:["filmID","filmType"],created:function(){var t=this;n.a.get("https://api.themoviedb.org/3/".concat(this.filmType,"/").concat(this.filmID,"?api_key=f943d3d10cc39fd734122d69efabbacb")).then((function(e){t.currentfilm=e.data,t.genres=t.currentfilm.genres.map((function(t){return t.name})).join("/")})),n.a.get("https://api.themoviedb.org/3/".concat(this.filmType,"/").concat(this.filmID,"/credits?api_key=f943d3d10cc39fd734122d69efabbacb")).then((function(e){t.cast=e.data.cast;for(var i=function(e){n.a.get("https://api.themoviedb.org/3/person/".concat(t.cast[e].id,"?api_key=f943d3d10cc39fd734122d69efabbacb")).then((function(i){t.cast[e].bio=i.data.biography}))},s=0;s<t.cast.length;s++)i(s)})),n.a.get("https://api.themoviedb.org/3/".concat(this.filmType,"/").concat(this.filmID,"/videos?api_key=f943d3d10cc39fd734122d69efabbacb")).then((function(e){t.trailers=e.data.results})),n.a.get("https://api.themoviedb.org/3/".concat(this.filmType,"/").concat(this.filmID,"/reviews?api_key=f943d3d10cc39fd734122d69efabbacb&language=en-US")).then((function(e){t.reviews=e.data.results}))}},U=M,G=(i("e095"),Object(u["a"])(U,s,a,!1,null,"50ee9952",null));e["default"]=G.exports},4562:function(t,e,i){"use strict";var s=i("16f1"),a=i.n(s);a.a},6321:function(t,e,i){"use strict";var s=i("070c"),a=i.n(s);a.a},a15b:function(t,e,i){"use strict";var s=i("23e7"),a=i("44ad"),r=i("fc6a"),n=i("b301"),l=[].join,c=a!=Object,o=n("join",",");s({target:"Array",proto:!0,forced:c||o},{join:function(t){return l.call(r(this),void 0===t?",":t)}})},a2c6:function(t,e,i){},b301:function(t,e,i){"use strict";var s=i("d039");t.exports=function(t,e){var i=[][t];return!i||!s((function(){i.call(null,e||function(){throw 1},1)}))}},baaf:function(t,e,i){},c263:function(t,e,i){},dcd6:function(t,e,i){"use strict";var s=i("a2c6"),a=i.n(s);a.a},e095:function(t,e,i){"use strict";var s=i("c263"),a=i.n(s);a.a},f6ae:function(t,e,i){"use strict";var s=i("baaf"),a=i.n(s);a.a}}]);
//# sourceMappingURL=film.74af46d3.js.map