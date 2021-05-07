(this["webpackJsonpreact-search-app"]=this["webpackJsonpreact-search-app"]||[]).push([[0],{15:function(e,t,c){},21:function(e,t,c){},30:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(23),s=c.n(a),o=c(2),r=(c(8),c(10)),j=c(3),l=(c(21),c(0)),u=Object(n.createContext)(),d=function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),i=c[0],a=c[1];return Object(l.jsx)(u.Provider,{value:[i,a],children:e.children})},h=(c(30),function(e){var t=Object(n.useContext)(u),c=Object(o.a)(t,2),i=c[0],a=c[1];return Object(l.jsx)("div",{className:"search-box",children:Object(l.jsx)("input",{className:"search",value:i,onChange:function(e){e.preventDefault(),a(e.target.value)},placeholder:"Type in a movie to start"})})}),b=function(){return Object(l.jsxs)("div",{className:"nav-container",children:[Object(l.jsx)("div",{className:"search-box-container",children:Object(l.jsx)(h,{})}),Object(l.jsx)("div",{className:"nav-link-container",children:Object(l.jsx)("nav",{id:"nav",children:Object(l.jsxs)("ul",{className:"nav-links",children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{exact:!0,className:"home link-item",to:"/react-search-app",activeClassName:"selected",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{exact:!0,className:"favourites link-item",to:"/favourites",activeClassName:"selected",children:"Favourites"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{exact:!0,className:"watchlist link-item",to:"/watchlist",activeClassName:"selected",children:"Watch List"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{exact:!0,className:"watched link-item",to:"/watched",activeClassName:"selected",children:"Watched"})})]})})})]})},O=(c(36),function(e){return Object(l.jsx)("header",{style:e.color,children:Object(l.jsx)("h1",{children:e.heading})})}),f=(c(37),c(12)),x=(c(9),c(15),Object(n.createContext)()),v=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),i=c[0],a=c[1];return Object(l.jsx)(x.Provider,{value:[i,a],children:e.children})},m=function(e){var t=e.movie,c=Object(n.useContext)(x),i=Object(o.a)(c,2),a=i[0],s=i[1],r=function(e){var t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)};fetch("http://localhost:8000/favourites",t).then((function(e){return e.json()})).then((function(e){return console.log(e)}))};return Object(l.jsxs)("button",{className:"btn favourite tooltip",onClick:function(e){if(e.preventDefault(),a.find((function(e){return e.imdbID===t.imdbID})))return null;var c=[].concat(Object(f.a)(a),[t]);t.id=t.imdbID,console.log("movie in this context is:",t),s(c),r(t)},value:t.id,children:[Object(l.jsx)("span",{class:"tooltiptext",children:"Add to Favourites"}),Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-heart"})})]})},p=function(e){var t=e.movie,c=Object(n.useContext)(x),i=Object(o.a)(c,2),a=i[0],s=i[1],r=function(){fetch("http://localhost:8000/favourites/".concat(t.id),{method:"DELETE"}).then((function(e){return e})).catch((function(e){return console.log(e)}))};return Object(l.jsxs)("button",{className:"btn remove-favourite tooltip",onClick:function(e){e.preventDefault();var c=a.filter((function(e){return e.imdbID!==t.imdbID}));r(),s(c)},value:t.id,children:[Object(l.jsx)("span",{className:"tooltiptext",children:"Remove from Favourites"}),Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-heart"})})]})},N=Object(n.createContext)(),w=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),i=c[0],a=c[1];return Object(l.jsx)(N.Provider,{value:[i,a],children:e.children})},C=function(e){var t=e.movie,c=Object(n.useContext)(N),i=Object(o.a)(c,2),a=i[0],s=i[1],r=function(e){var t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)};fetch("http://localhost:8000/watchlist",t).then((function(e){return e.json()})).then((function(e){console.log(e)}))};return Object(l.jsxs)("button",{className:"btn add-watchlist tooltip",onClick:function(e){if(e.preventDefault(),a.find((function(e){return e.imdbID===t.imdbID})))return null;var c=[].concat(Object(f.a)(a),[t]);t.id=t.imdbID,s(c),r(t)},value:t.id,children:[Object(l.jsx)("span",{className:"tooltiptext",children:"Add to Watch List"}),Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-list"})})]})},D=function(e){var t=e.movie,c=Object(n.useContext)(N),i=Object(o.a)(c,2),a=i[0],s=i[1],r=function(){fetch("http://localhost:8000/watchlist/".concat(t.imdbID),{method:"DELETE"}).then((function(e){return e})).catch((function(e){return console.log(e)}))};return Object(l.jsxs)("button",{className:"btn tooltip green-list",onClick:function(e){e.preventDefault();var c=a.filter((function(e){return e.imdbID!==t.imdbID}));s(c),r()},value:t.id,children:[Object(l.jsx)("span",{class:"tooltiptext",children:"Remove from Watch List"}),Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-list"})})]})},g=Object(n.createContext)(),I=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),i=c[0],a=c[1];return Object(l.jsx)(g.Provider,{value:[i,a],children:e.children})},S=function(e){var t=e.movie,c=Object(n.useContext)(g),i=Object(o.a)(c,2),a=i[0],s=i[1],r=function(){var e={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)};fetch("https://localhost:3001/watched",e).then((function(e){return e}))},j=function(){fetch("https://localhost:8000/watchlist/".concat(t.id),{method:"DELETE"}).then((function(e){return e.json()}))};return Object(l.jsxs)("button",{className:"btn add-watched tooltip",onClick:function(e){if(e.preventDefault(),a.find((function(e){return e.imdbID===t.imdbID})))return null;var c=[].concat(Object(f.a)(a),[t]);t.id=t.imdbID,s(c),r(),j()},value:t.id,children:[Object(l.jsx)("span",{class:"tooltiptext",children:"Add to Watched"}),Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-eye"})})]})},y=function(e){var t=e.movie,c=Object(n.useContext)(g),i=Object(o.a)(c,2),a=i[0],s=i[1],r=function(){fetch("http://localhost:8000/watched/".concat(a.id),{method:"DELETE"}).then((function(e){return e})).catch((function(e){return console.log(e)}))};return Object(l.jsxs)("button",{className:"btn tooltip green-watched",onClick:function(e){e.preventDefault();var c=a.filter((function(e){return e.imdbID!==t.imdbID}));s(c),r()},value:t.id,children:[Object(l.jsx)("span",{class:"tooltiptext",children:"Remove from Watched"}),Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fa fa-eye"})})]})},E=function(e){var t=e.movie,c=Object(n.useContext)(x),i=Object(o.a)(c,1)[0],a=Object(n.useContext)(g),s=Object(o.a)(a,1)[0],r=Object(n.useContext)(N),j=Object(o.a)(r,1)[0],u=i.find((function(e){return e.imdbID===t.imdbID})),d=j.find((function(e){return e.imdbID===t.imdbID})),h=s.find((function(e){return e.imdbID===t.imdbID}));return Object(l.jsxs)("div",{className:"movie-card",children:[Object(l.jsx)("div",{className:"image-container",children:Object(l.jsx)("img",{src:t.Poster,alt:t.Title})}),Object(l.jsxs)("div",{className:"card-info-container",children:[Object(l.jsx)("h2",{children:t.Title}),Object(l.jsxs)("h3",{children:["Released: ",Object(l.jsx)("strong",{children:t.Year})]})]}),Object(l.jsxs)("div",{className:"controls",children:[u?Object(l.jsx)(p,{movie:t}):Object(l.jsx)(m,{movie:t}),d?Object(l.jsx)(D,{movie:t}):Object(l.jsx)(C,{movie:t}),h?Object(l.jsx)(y,{movie:t}):Object(l.jsx)(S,{movie:t})]})]},t.imdbID)};c(38);var T=function(e){var t=e.moviesToShow;return t.length>0?Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"movie-list",children:t.map((function(e,t){return"N/A"!==e.Poster?Object(l.jsx)(E,{id:t+1,movie:e},e.imdbID):null}))})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{children:"No results to show"})})},k=Object(n.createContext)(),A=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),i=c[0],a=c[1];return Object(l.jsx)(k.Provider,{value:[i,a],children:e.children})},P=function(e){var t=Object(n.useContext)(k),c=Object(o.a)(t,1)[0],i=Object(n.useContext)(u),a=Object(o.a)(i,2),s=(a[0],a[1]);return console.log(e),Object(n.useEffect)((function(){s("Avengers")}),[]),Object(l.jsxs)("div",{className:"main-wrapper",children:[Object(l.jsx)(O,{heading:"Search for movies"}),Object(l.jsx)("div",{className:"movie-list-wrapper",children:Object(l.jsx)(T,{moviesToShow:c})})]})},L=function(){var e=Object(n.useContext)(x),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){fetch("http://localhost:8000/favourites/").then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)("div",{className:"main-wrapper favourites",children:[Object(l.jsx)(O,{heading:"Favourites"}),Object(l.jsx)("div",{className:"movie-list-wrapper",children:c?Object(l.jsx)(T,{moviesToShow:c}):Object(l.jsx)("p",{children:"Add movies to your favourites."})})]})},W=function(){var e=Object(n.useContext)(g),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){fetch("http://localhost:8000/watched/").then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)("div",{className:"main-wrapper",children:[Object(l.jsx)(O,{heading:"Watched"}),Object(l.jsx)("div",{className:"movie-list-wrapper",children:c?Object(l.jsx)(T,{moviesToShow:c}):Object(l.jsx)("p",{children:"Add movies you've watched."})})]})},F=function(){var e=Object(n.useContext)(N),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){fetch("http://localhost:8000/watchlist/").then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)("div",{className:"main-wrapper",children:[Object(l.jsx)(O,{heading:"Watch List"}),Object(l.jsx)("div",{className:"movie-list-wrapper",children:c?Object(l.jsx)(T,{moviesToShow:c}):Object(l.jsx)("p",{children:"Add movies to your watch list."})})]})},J=function(){var e=Object(n.useContext)(u),t=Object(o.a)(e,2),c=t[0],i=(t[1],Object(n.useContext)(k)),a=Object(o.a)(i,2),s=(a[0],a[1]),d=function(){var e="https://www.omdbapi.com/?apikey=".concat("c3b78ed6","&s=").concat(c,"&plot=short");fetch(e).then((function(e){return e.json()})).then((function(e){if(console.log("less data",e),!e.Search)return null;s(e.Search)})).catch((function(e){return console.error(e)}))};return Object(n.useEffect)((function(){d()}),[c]),Object(l.jsx)("div",{className:"app-container",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)("div",{className:"nav",children:Object(l.jsx)(b,{})}),Object(l.jsxs)("div",{className:"main-content",children:[Object(l.jsx)(j.a,{exact:!0,path:"/react-search-app",children:Object(l.jsx)(P,{GetMovies:d})}),Object(l.jsx)(j.a,{exact:!0,path:"/favourites",component:L}),Object(l.jsx)(j.a,{exact:!0,path:"/watchlist",component:F}),Object(l.jsx)(j.a,{exact:!0,path:"/watched",component:W})]})]})})};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(d,{children:Object(l.jsx)(A,{children:Object(l.jsx)(v,{children:Object(l.jsx)(w,{children:Object(l.jsx)(I,{children:Object(l.jsx)(J,{})})})})})})}),document.getElementById("root"))},8:function(e,t,c){},9:function(e,t,c){}},[[39,1,2]]]);
//# sourceMappingURL=main.3cf430a3.chunk.js.map