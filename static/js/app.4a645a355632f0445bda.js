webpackJsonp([1],{CXad:function(t,e){},FuPp:function(t,e){},Fxw5:function(t,e,s){t.exports=s.p+"static/img/jedi.dcef3ab.jpg"},IQsU:function(t,e){},KNI8:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"link-body"},[s("router-link",{staticClass:"link",attrs:{to:"/post/"+t.year+"/"+t.index}},[t.dev?s("p",{staticClass:"dev label"},[t._v(t._s(t.dev))]):t._e(),t._v(" "),t.chat?s("p",{staticClass:"chat label"},[t._v(t._s(t.chat))]):t._e(),t._v(" "),t.tra?s("p",{staticClass:"tra label"},[t._v(t._s(t.tra))]):t._e(),t._v(" "),t.test?s("p",{staticClass:"test label"},[t._v(t._s(t.test))]):t._e(),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.post.title))])]),t._v(" "),s("br"),t._v(" "),s("p",{staticClass:"date"},[t._v(t._s(new Date(t.post.date).toString().split(" ").splice(0,4).splice(1,3).toString().replace(/,/g," ")))])],1)},staticRenderFns:[]};var i={components:{LinkList:s("VU/8")({props:["post","index","year"],data:function(){return{dev:"",chat:"",tra:"",test:""}},created:function(){var t=this.post.topic;"Dev"===t?this.dev=t:"Travel"===t?this.tra=t:"Chat"===t?this.chat=t:this.test=t}},r,!1,function(t){s("IQsU")},"data-v-4a77025b",null).exports},props:["year","posts"],data:function(){return{isView:!1}},methods:{yearListPopUp:function(){this.isView=!this.isView}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"year-links"},[s("p",{on:{click:this.yearListPopUp}},[t._v(t._s(this.year))]),t._v(" "),t._l(t.posts,function(e,a){return t.isView?s("link-list",{key:a,attrs:{year:t.year,post:e,index:a}}):t._e()})],2)},staticRenderFns:[]};var n=s("VU/8")(i,o,!1,function(t){s("unEd")},"data-v-73e883d9",null).exports,c=s("NYxO"),p={components:{YearLinks:n},computed:Object(c.b)(["postlist"]),data:function(){return{years:[],yearLinks:[]}},created:function(){var t=this,e=this.postlist.sort(function(t,e){return t.date>e.date?-1:1}),s=[];e.map(function(t){var e=new Date(t.date).toString().split(" ").splice(0,4).splice(3,1).toString().replace(/,/g," "),a=!1;if(0==s.length)s.push(e);else{for(var r=0;r<s.length;r++)s[r]===e&&(a=!0);a||s.push(e)}});for(var a=function(a){var r=[];e.map(function(t){new Date(t.date).toString().split(" ").splice(0,4).splice(3,1).toString().replace(/,/g," ")===s[a]&&r.push(t)}),t.yearLinks.push(r)},r=0;r<s.length;r++)a(r);this.years=s}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"link-list-body"},[a("ul",{staticClass:"link-list"},[a("li",[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:s("qIEg")}})])],1),t._v(" "),t._l(t.yearLinks,function(e,s){return a("li",{key:s},[a("year-links",{attrs:{posts:e,year:t.years[s]}})],1)})],2)])},staticRenderFns:[]};var l=s("VU/8")(p,u,!1,function(t){s("p6JS")},"data-v-52113d6a",null).exports,h={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var d={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var g={components:{ProfileText:s("VU/8")({},h,!1,function(t){s("niL8")},"data-v-6622b230",null).exports,ProfileImage:s("VU/8")({},d,!1,function(t){s("vsEE")},"data-v-487fdfee",null).exports}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var v={components:{Links:l,Profile:s("VU/8")(g,m,!1,function(t){s("RVGQ")},"data-v-f9b91770",null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar"},[e("div",{staticClass:"links"},[e("links")],1),this._v(" "),e("div",{staticClass:"profile"},[e("profile")],1)])},staticRenderFns:[]};var _={name:"App",components:{Navigation:s("VU/8")(v,f,!1,function(t){s("bpgc")},"data-v-8eab5ec4",null).exports}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"nav"},[e("navigation")],1),this._v(" "),e("div",{staticClass:"body"},[e("router-view")],1)])},staticRenderFns:[]};var b=s("VU/8")(_,x,!1,function(t){s("x+s5")},null,null).exports,k=s("/ocq"),y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v(t._s(t.title))]),t._v(" "),t.date?s("h3",[t._v(t._s(t.date))]):t._e()])},staticRenderFns:[]};var V=s("VU/8")({props:["title","date"]},y,!1,function(t){s("Vezq")},"data-v-658e8dd8",null).exports,w=(s("CXad"),{render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"text-body"},domProps:{innerHTML:this._s(this.text)}})},staticRenderFns:[]});var j=s("VU/8")({props:["text"]},w,!1,function(t){s("ZzzK")},"data-v-56fbb170",null).exports,A={components:{PostHeader:V,PostBody:j}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("div",{staticClass:"home-header"},[e("post-header",{staticClass:"home-header",attrs:{index:"Welcome to Blog",title:"May the code be with you."}})],1),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-body"},[e("a",{attrs:{href:"https://github.com/ninanung"}},[e("img",{attrs:{src:s("Fxw5")}})])])}]};var S=s("VU/8")(A,P,!1,function(t){s("FuPp")},"data-v-1f0b8225",null).exports,C={components:{PostHeader:V,PostBody:j},computed:Object(c.b)(["postlist"]),data:function(){return{title:"",date:"",text:"",sortedPostlist:[]}},created:function(){this.sortedPostlist=this.postlist.sort(function(t,e){return t.date>e.date?-1:1});var t=Number(this.$route.params.index),e=this.$route.params.year,s=this.pushPostToYear(e);this.changeDataValue(s[t])},watch:{"$route.params":function(){var t=this.$route.params.year,e=this.$route.params.index,s=this.pushPostToYear(t);this.changeDataValue(s[e])}},methods:{pushPostToYear:function(t){var e=[];return this.sortedPostlist.map(function(s){new Date(s.date).toString().split(" ").splice(0,4).splice(3,1).toString().replace(/,/g," ")===t&&e.push(s)}),e},changeDataValue:function(t){t||this.$router.push("/notfound"),this.title=t.title,this.text=t.text.replace(/--/g,"&nbsp;&nbsp;").replace(/  /g,"<br/>"),this.date=new Date(t.date).toString().split(" ").splice(0,5).toString().replace(/,/g," ")},checkIfYearExis:function(t){var e=0,s=[];this.sortedPostlist.map(function(t){var a=new Date(t.date).toString().split(" ").splice(0,4).splice(3,1).toString().replace(/,/g," ");0===s.length?s.push(a):s[e]!==a&&(s.push(a),e++)});var a=!1;return s.map(function(e){e===t&&(a=!0)}),a}}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"post"},[e("div",{staticClass:"post-header"},[e("post-header",{attrs:{title:this.title,date:this.date}})],1),this._v(" "),e("div",{staticClass:"post-body"},[e("post-body",{attrs:{text:this.text}})],1)])},staticRenderFns:[]};var E=s("VU/8")(C,D,!1,function(t){s("KNI8")},"data-v-8a25bd1a",null).exports,R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notfound-body"},[e("h1",[this._v("404")]),this._v(" "),e("img",{attrs:{src:s("kvT1")}})])}]};var O=s("VU/8")({},R,!1,function(t){s("s3ga")},"data-v-fab31f8e",null).exports;a.a.use(k.a);var M=new k.a({routes:[{path:"/",name:"Home",component:S},{path:"/post/:year/:index",name:"Post",component:E},{path:"/*",name:"NotFound",component:O}]}),F=s("BO1k"),$=s.n(F),L="Dev",G={postList:[{title:"pm2 모듈과 멍청이와 git",date:1547716087708,topic:L,text:'--토픽을 Dev로 골랐는데 사실 그렇게 개발스러운 얘기를 하지는 않을 것 같다. 근황과 관련된 몇가지 코딩관련 얘기들을 해볼까 한다.    <h3>1. 멍청이</h3>  --얼마전, 갑자기 무슨 바람이 불었는지 ES6에서 변경된 Javascript문법들을 한번 본적이 있다. 리스트를 하고 있는데, 이런? 생각한 것보다 내가 놓치고 있던 것들이 너무 많았다. 작성했던 코드들이 영화처럼 눈앞을 지나가면서 그때 그 코드를 썼으면 10줄은 줄였을 텐데, 하는 생각이 들었던 것이다. 특히 for문에 초가되었던 for-of구문이 있는데, 그게 그렇게 눈에 들어왔다.  --지금까지 아무것도 모르고 일반 for문으로 배열에 length를 구해서 돌렸던 루프를 생각하면 지구 세바퀴 반은 돌았을 것이다. 그것 말고도 나머지 연산자나 템플릿 문자열과 같이 유용해 보이는 것들이 너무 많았다. 사실 지금까지는 급하게 코드만 짜내는 일을 해왔다. 실력도 초보고 아는것도 없으니 일단 많이 해야한다는 강박이 있었는데, 지금부터는 알아야 할 것들을 파악하고 다시 확인하는 시간이 필요할 것 같다.  --아마 시간이 된다면, 개인적으로 문법을 정리하거나, 지나간 프로젝트들에서 ES6문법을 사용하면 코드를 줄일 수 있는 부분을 찾아서 수정하면서 공부를 진행할 수 있지 않을까 싶다.    <h3>2. pm2</h3>  --내가 현재 일하는 회사는 특정 소프트웨어를 판매하고 관리하고 커스텀하는 일들을 많이 한다. 그 과정에서 여러가지 테스트를 위한 서버들이나 관리를 위한 서버들이 많은데, 그러한 서버들이 평소에 살아있는지 아닌지 사실 접속하기 전까지는 알 방법이 없다. 그래서 TCP ping을 이용한 서버 생존보고 봇을 만들어 Mattermost에서 알림을 받을 수 있게 했는데, 그 과정에서 서버를 올리기 위해 사용한게 바로 pm2였다.  --pm2를 간단하게 말하면, Node.js서버를 관리해 주는 툴이다. 몇가지 커맨드를 실행해서 서버를 실행하거나 멈추거나 재시작하거나 리스트를 받아볼 수 있다. 그 중에서도 가장 마음에 드는 기능은, 자동 재시작 기능이다. 기본적으로 Node.js서버는 코드에 문제가 있을경우 서버가 꺼져버린다. 죽어버힌다는 얘기다. 테스트 환경에서는 상관이 없지만 불안정한 임시 릴리즈 상황에라면? 이렇게 죽어버려서는 안된다.  --바로 그럴때 pm2는 해다 서버를 다시 살리고 카운트를 표시한다. 그걸 통해서 나는 해당 서버에 문제가 있음을 짐작할 수 있다. 완벽한 서버 호스팅 서비스! 라고 말하는 건 아니다. 단지 그 단계를 도와줄 수 있을 것 같다. 아직 사용하는 도중이라 잘 모르지만, 서버 클러스터링 기능도 있기는 한 것 같았다. Docker + pm2를 이용한 간단한 서버 호스팅도 고려해 볼 만 할 것같다.    <h3>3. Github private repository</h3>  --깃허브의 클라우드 서버 서비스(그냥 깃허브 페이지)는 일반등급 유저에 대해서는 원래 개인저장소 기능을 지원하지 않았었다. 모두 퍼블릭으로만 가능했는데, 이번달-아니면 저번달 일지도-에 일반 사용자도 몇개의 개인저장소를 만들 수 있도록 변경되었다. 이걸 원래 알고는 있었는데, 사실 나는 그렇게 보안에 유의해야할 작업을 하는 편은 아니라서 쓸 일이 없었다.  --그런데 이번에 위에서 말한 ping 봇을 만들면서 테스트를 하다가, 회사의 서버정보가 담긴 파일을 커밋하고 푸시해버렸던 것이다. 멍청이라고 밝힌 바 이미 벌어진 일이니 수습을 해야겠는데, 만들기 바빠서 고치기가 너무 귀찮았다. 깃으로 rebase해서 해당 커밋 변경하고 하기가 귀찮았던 것이다. 그래서 그냥 개인저장소로 돌려버리자 라는 생각을 했던 것이다.  --실제로 해보니 잘 동작하는 것 같았다. 그런데 이게 버그인지 아니면 의도한건지 모르겠으나, 커밋 이력을 보여주는 초록색 표시에서 master branch에 대한 커밋만 표시가 되는 모양이다. 정작 커밋은 거진 여섯일곱은 했는데 보여지는건 달랑 하나면 뭔가 기분이 좀 그렇다. 초록색을 채우는 맛이 또 있는 것인데 말이다.  --아, 그리고 무슨 상태를 표시하는 status기능이 생겼는데, 사실 그리 쓸모있고 기능이 좋은 부분은 아닌 것 같다. 그냥 그렇구나 싶은 정도?    <h3>3. git remote set url</h3>  --이건 그냥 내가 까먹을까봐 써놓는 부분이다. 몰랐던 사람은 알아둬도 좋다. git에서 원격저장소 즉 remote repository로 push를 하는 경우는 왕왕있다. Github로의 push는 뭐 말 할 필요도 없는 수준일 것이다. 그런데 public이 아닌 회사나 기타 내부적인 저장소에 push를 해야 할 경우라면? userid나 password를 입력해야 할 것이다.  --위에서 얘기한 Github의 개인저장소에 push를 할때는 터미널을 통해 정보를 받는 것 같기는 했다. 하지만 한가지 명시적으로 사용자 정보를 넘기는 방법도 있다. git을 통해 원격저장소를 remote add를 통해 추가하고 "git remote set-url remote_name https://username:password@gitlab.com/username/repo.git"의 방식으로 username과 password를 추가할 수 있다.  --이미 git remote add를 통해 추가한 원격 저장소의 주소에 set-url을 통해 사용자 정보를 추가하는 방식이다. 처음부터 사용자 정보가 들어간 url로 git remote add를 시도해도 연결이 안되는 것 같았다. 불안한 사람들은 일단 원격 저장소를 추가한 후 사용자 정보를 설정하는 방향으로 해보자. 이것 말고도 사용자 정보를 명시하는 다른 여러 방법들이 있는 것 같기는 한데, 나는 여기서 일단 만족했다.  '},{title:"OAuth 2.0",date:1550481474501,topic:L,text:'<img src=\'./static/photos/oauth2.png\' style=\'width: 100%; height: auto;\' />    <h3>OAuth 2.0에 대한 잡담</h3>  --얼마전에 Github나 Google을 통해 로그인 하는 방법을 연습한 적이 있었다. 설명하는 글을 쓰면서 그러한 인증 방식을 스스로 구현해 보면 재미있겠다는 생각을 했는데, 그래서 <a href="https://github.com/ninanung/3-legged-oauth">했다</a>. OAuth2.0과 3 legged authentication을 이리저리 찾아보고 간단한 구현 수준으로만 만들었다. 당연하지만 그 와중에 OAuth2.0 이라는 것에 대해서 알게 되었다. 간단히 말하자면 사용자들이 특정 웹 서비스에 등록된 자신들의 정보를 다른 웹 서비스나 어플리케이션에서 접근하도록 허가할 때 비밀번호 없이 가능하도록 한, 접근권한 위임을 위한 개방형 표준이다.  --위의 설명은 사실 위키를 참고했으며, 내가 이해한 지식으로 말해보면, 특정 서비스를 사용할 때 다른 서비스에 이미 있는 사용자 정보를 통해 접속 가능하도록 하는 인증 방식이라는 것이다. 사실 이러한 시도를 한 것은 OAuth가 처음은 아니다. 옛날에 OpenID라는 개념이 있었는데, 이는 일종의 공용 로그인 서비스로 특정 OpenID에서 가입한 유저 정보를 통해 다른 곳에서도 로그인이 가능하도록 했던 것이다. 결론부터 말하자면, 그 당시에 꽤나 획기적인 방식이라는 평을 들으며 유행을 하긴 했으나 의미있는 수준으로 사용되었는지는 미지수이다. 조금 찾아보니 아직도 존재하기는 하는 것 같으나, OAuth2.0과 같이 사용되는 모양이라 사실상 그냥 OAuth2.0 라고 봐야할 것 같다.  --OAuth에 대한 설명을 간단히 하자면, 웹 개발자라면 익숙할 수 있는, Token(토큰)을 발급받는 일련의 과정이라고 할 수 있다. 토큰이란 일종의 열쇠와 같은 개념으로, 사용자의 정보에 접근할 수 있는 키가 된다. 물론 클라이언트(정보에 접근하고자 하는 어플리케이션)는 사전에 등록을 완료한 상태여야 하며 키를 받는다고 해도 보통은 그 키(토큰)에는 만료되는 기간이 있어서 무한정 사용하지 못하는 경우가 대부분이다. 만료가 될 경우에는 해로 토큰을 받아야 하며, 이러한 일련의 과정이 보안성을 더 높일 수 있다.  --이러한 점은 초기의 OpenID와의 차이점 이기도 한데, 초기의 OpenID인증은 사용자가 인증을 완료하면 사용자 정보를 바로 넘겨주었다. 하지만 OAuth2.0 방식은 토큰을 발급하고 발급받은 토큰을 요청의 헤더에 추가하지 않는 이상 사용자 정보를 받아 올 수 업다. 따라서 OAuth2.0은 "인증"이 아닌 "인가"라고 부른다. 허가를 내 준다는 뜻이다. 따라서 이러한 방식은 여러 다른 부분에서 사용될 수 있는데, 특정 서비스에 대한 REST API요청에 대해서 토큰을 발급받은 사람에게만 허용하면서 무분별한 API사용을 막음과 동시에 보안성을 높일 수 있다. 메시징툴인 Mattermost가 같은 방식을 사용한다.  --나는 사실 보안에 크게 관심이 많은 건 아니지만, 이러한 인증방식을 보면 당시 개발자들의 고민이 느껴져서 꽤나 흥미롭다. 관련 공부를 할 때 참고한 링크들을 몇개 공유하면서 글을 끝내고자 한다. 영상도 있고 위키도 있지만, 역시 직접 보고 듣는 영상쪽이 가장 도움이 됐다. 사실 가장 좋은 방법은, 다른 서비스들의 OAuth인증방식을 실제로 사용해 보는 것이다.    - <a href="https://www.youtube.com/watch?v=BNEoKexlmA4">영어지만 기본적인 인증방식을 대략적으로 설명해준다.</a>  - <a href="https://ko.wikipedia.org/wiki/OAuth">위키는 언제나 읽어서 나쁠 건 없는 지식이다.</a>  - <a href="https://opentutorials.org/course/3405">한글 영상이며, 내가 본 영상들 중 가장 구체적으로 설명되어 있다.</a>  - <a href="https://docs.microsoft.com/ko-kr/azure/active-directory/develop/v1-protocols-oauth-code">MS Azure의 인증에 대한 설명이다. 읽어둬서 나쁠 건 없다.</a>'},{title:"Ansible과 Vagrant",date:1551320535891,topic:L,text:"<img src='./static/photos/ansible-vagrant.jpg' style='width: 100%; height: auto;' />    <h3>Ansible과 Vagrant</h3>  --요즘 서버쪽에 관심이 생겨서 인프라나 DevOps관련 공부를 이것저것 하고있는데, 가장 먼저 보였던 것이 Ansible과 Vagrant였다. Ansible은 회사의 서버 관리하는 직원이 언급한적이 있어서 이름은 알고 있었지만 뭐에 쓰는 건지는 몰랐고, Vagrant는 존재 자체를 모르고 있었다. 쉽게 말하자면 Vagrant는 Vagrantfile이라는 파일에 미리 특정 서버를 어떻게 빌드할지를 작성하고 커맨드를 통해 가상환경에서 서버를 올릴 수 있게 해준다. 예컨데 VirtualBox나 VMware와 같은 소프트웨어들 중 무엇을 사용할지, 인터넷 연결은 어떻게 할건지, 가상서버와 서버가 올라간 호스트와의 연결은 어떻게 할건지, 서버 OS는 무엇으로 할건지 등등 여러가지를 설정할 수 있다.  --이렇게 했을때의 장점은, 서버가 필요할 때 마다 일일이 설정을 해줄 필요없이 이전에 이미 작성된 Vagrantfile을 up시켜서 서버를 올리기만 하면 된다는 것이다. \"오 편리하겠는데!\" 라는 반응은 맞는 얘기지만 반만 맞는 반응이다. 나도 공부하면서 배운 것이지만, 특정 서비스에 여러대의 서버를 사용할때 중요한 것은 같은 환경이어야 한다는 것이다. 게다가 테스트를 진행할 때도 테스트할 서버가 배포할 서버와 같은 환경이어야 제대로 테스트가 가능하다. Vagrant는 미리 설정된 파일을 통해 서버 환경을 동일하게 유지시키므로 안정성을 보장한다. 이러한 특성을 멱등성이라고 한다는데, 같은 실행을 여러번 해도 전부 같은 결과가 나오는 것이다. 결국 Vagrant는 서버 환경의 멱등성을 보장하는데 도움을 준다고 할 수 있다.  --그럼 Ansible은 뭐냐? Vagrant만 있으면 되는 거 아니야? 라는 생각이 들겠지만, 사실 그렇지 않다. Vagrant가 설정 가능한 것은 서버를 올릴때 결정하는 전체적인 환경에 불과하다. 웹 서버를 올린다고 하면, Node.js를 사용할 것인가? 아파치 서버를 사용할 것인가? Node.js를 사용한다고 하면 버전은 무엇인가? 모듈은 무엇을 사용하는가? 프레임워크는 무엇을 사용하는가? 등등 세세한 부분에 대한 설정이 필요하다. 그것을 해주는 것이 바로 Ansible이다. Ansible을 실행하게 되면 파일이나 커맨드로 지시한 명령을 SSH를 통해 서버에 접속한 뒤 자동으로 실행한다. 물론 실패하거나 사용자의 지시에 따라 설정을 멈추거나 할 수도 있다.  --Ansible역시 Vagrant의 방식과 크게 다르지 않은데, YAML파일을 사용하여 하나하나 커맨드를 설정해주면 된다. 서버를 깔고, 필요한 언어가 있으면 설치하고, 필요한 모듈이 있으면 설치한다. 그것 말고도, 필요한 경우 서버를 재실행하도록 명령하거나 모든 작업이 완료되면 특정 작업을 실행하게 하는 등, 꽤나 세세하게 설정을 해놓고 사용할 수 있다. 이 역시 서버 환경의 동일성을 보장하기 위한 것이며, 서버를 설정하는 YAML파일 대로 서버를 설정하면 설정된 서버는 모두 같은 모습을 하게 된다.  --보통 Vagrant와 Ansible을 같이 활용하며, 나는 VirtualBox를 통해 가상서버를 올리도록 했다. 시나리오는 보통 이렇다.    <h4>1. Vagrantfile을 작성하고 Vagrant를 통해 VirtualBox에 가상서버를 올린다.</h4><h4>2. SSH접속을 통해 서버가 제대로 동작하는지 확인하고 Ansible을 통해 설정할 YAML파일을 작성한다.</h4><h4>3. 작성된 파일을 토대로 Ansible을 통해 서버를 설정하고 실행한다.</h4>  --Vagrantfile이나 YAML파일등을 작성하려면 조금 공부를 하고 익숙해지는 시간이 필요하지만 기본적으로는 간단하게 가상서버를 올리고 사용할 수 있다. 테스트 용으로 간단히 사용해도 되고 필요하다면 배포용으로도 얼마든지 동작할 수 있다고 본다.  --그런데 Ansible과 Vagrnat를 사용하다 보면 한가지 기시감을 계속 느낀다. \"앵? 이거 완전히 Docker image로 서버 설정하고 Dockerfile로 세팅하는 시나리오 아님?\" 이라는 생각이 계속 든다. 이건 내 짐작이지만, 아마 Docker가 영향을 받지 않았다고는 말 못할 것 같다. 애초에 Docker가 더 늦게 나오기도 했고 방식이 너무나도 비슷하다. 다만 표절이라기 보다는 Docker가 기존에 있던 것들을 잘 통합해서 내놓았다는 느낌.  --개인적인 취향을 말하자면, Docke쪽이 더 편리하고 커뮤니티도 활성화되어 있다는 느낌이다. 게다가 다른 도움 없이도 Docker하나로 가상서버를 올리고 관리하는 것이 가능하니 더 간단하다고도 생각한다. 아직 뭐, 나도 초보인 단계라 뭐가 더 좋다고 얘기하기는 어렵고, 필요에 따라서 사용하면 되는게 아닐까?  "}]},T="Test",U="Dev",I="Travel",B={postlist:[{title:"첫글",date:1530148416937,topic:T,text:"--대망의 첫 글이자 테스트를 위한 글이다.  --블로그를 만들면서 느낀점을 한가지 말하자면, 데이터 베이스나 서버가 없는 페이지를 만드는 게 이렇게 고민이 필요한 일이라고는 생각하지 못했다는 것이다. 오히려 백엔드를 구축할 필요가 없으니 간단하겠다고만 생각했지 작성한 포스트를 어떻게 관리해야 할 지에 대한 생각이 부족했다. 지금까지 소홀했던 Vue공부나 하면서 천천히 만들어야지 개꿀. 이렇게 생각했는데 생각보다 귀찮은 일이었다.  --서버는 괜찮다. 어차피 Vue를 통해 라우팅도 하고 간단한 데이터를 조절할 수 있으니까, 하지만 데이터베이스는 조금 고민을 하지 않을 수 없었다. 물론 그냥 글을 HTML로 전부 작성할 수는 있다. 하지만 그렇게 하면 라우팅이 복잡해지고 나중에 글을 수정하거나 할 때 많은 부분을 수정해야 한다. 따라서 데이터베이스처럼 하나의 공간에 데이터를 밀어넣고 수정하고 싶을 때 수정할 수 있는 방법이 필요했다.  --사실을 말하자면 그다지 어려운 방법을 사용하지는 않았다. vuex를 이용해서 state에 글과 제목을 저장하고 데이터 베이스처럼 사용했다. 이 역시 그다지 스마트한 방법은 아니라고 생각하지만 더 이상 복잡하게 생각하기 보다는 일단 시작해 보자는 생각으로 선택했다. 아마 이 방법이 불편해지면 나서서 바꾸게 될지도 모를 일이겠다.  --코드하이라이트도 적용을 해 보았다. 어쨌든 개발자의 블로그인데 코드를 써야 할 일이 당연히 있겠지 싶다. 해당 코드는 코드하이라이트를 Vue에 적용할 때 사용한 코드의 일부이다.  <pre class='language-js'><code class='language-js'>import Vue from 'vue'\nimport VuePrism from 'vue-prism'\nVue.use(VuePrism)\nimport 'prismjs/themes/prism.css'\n</code></pre>--썩 유쾌하지 않게도, 위의 코드박스의 하이라이트기능이 처음 랜더링 시 적용되지 않고있다. 아마도 처음 vuex의 state로부터 값을 받고 적용시킬 때 Prismjs의 스타일이 적용되지 않은 상태로 보여지는 것 같다. mounted를 이용하여 적용시키는 것이 문제일지도 모르겠다고는 생각중이나 딱히 해결방법이 떠오르지 않아서 이것저것 시도해 보는 중이다.  "},{title:"두번째 테스트",date:1530238051467,topic:T,text:"--두번째 테스트 글이자 결과보고 같은 것이다.  --확실히 Vue를 너무 오래 사용하지 않은 것 같다. 회사를 다니면서 계속 React만 사용하다 보니 Vue에 대한 지식이 많이 빠져나갔다. 만드는 도중에 route를 할 때 URL은 param값에 따라 분명히 변하는데 내용이 변하지를 않는 버그가 있어서 고치는데 시간을 허비했다. 사실 생각해보니 간단한 문제였다.  --Vue는 퍼포먼스를 위해서 컴포넌트를 렌더링하고 같은 컴포넌트를 또 렌더링 하면 처음부터 다시 렌더링 하지 않는다. 결국 created함수에서 data필드를 변화시키도록 코드를 짰다고 해도, param값만 다르게 같은 컴포넌트로 라우트 할 경우 data필드는 변화하지 않는다. 왜냐하면 새로 created되지 않기 때문이다.  <pre class='language-js'><code class='language-js'>created: function() {\n--this.title = this.$route.params.title\n}\n</code></pre>--만약 이런 코드가 있다면 실제로 'title'은 변하지 않을 것이다.  --이 바보같은 행동을 변명하자면 이 사실을 원래는 알고 있었는데 세월이 흘러서 까먹어 버린 것이다. 그래서 멍청하게 그걸 알아차리지 못하고, 엄한 router에 대해서만 검색하고 있었다. 이런 점을 보면 컴퓨터기술은 언어와 비슷하다. 사용하지 않으면 당연한 것 처럼 까먹는다. 심지어 비슷한 기술을 사용하고 있다고 해도 말이다. 앞으로도 계속해서 리마인드 시킬 필요가 있을 것 같다.  --글들에 대한 네비게이션을 그냥 리스트로 쭉 늘어놓으려고 했는데 그러면 당연히 너무 길어질 것 같다. 어떻게 할까 생각하다가 형이 만든 개인 블로그를 보니 연도별로 포스트를 나눠놓은 방식이 좋아보여서 그냥 가져다 써보려고 한다. 덕분에 처음에는 index값만 라우터 param으로 넘겼는데 연도에 대한 정보도 같이 넘기도록 수정했다.  --연도에 따라서 접고 펴는 기능도 만들 생각이고 지금은 그냥 연도에 따라서 글이 나눠진 것 뿐이다. 접고 펴는 기능은 사실 어렵지 않다. 그냥 선택된 연도만 보여주도록 값을 넘기면 되니까. 오늘 안에 만드는 건 어려울 것 같고 아마 내일?  --아니 내일은 주말이구나. 주말에는 코딩을 안한다. 이 얘기도 나중에 한번 해볼 생각이다. 어쨌든 금방 만들어질 것이다.  "},{title:"Back to the past",date:15e11,topic:T,text:"--연도별 네비게이션 기능을 테스트 하기 위해 과거로 와서 글을 쓰고있는 중이다. 2017년도의 7월, 2018년 7월인 원래의 시간보다 딱 1년 전으로 돌아온 것이다. 시간이동에 의한 미래의 간섭을 피하기 위해 나 몰래 우리집 방에서 이 글을 쓰고있다. 이 시간대의 나는 아침 11시인 지금까지도 내 뒤에서 잠을 자고 있고, 우리집 멍멍이인 이 시대의 멍제는 나한테 별 관심이 없는지 이 시대의 나와 나란히 누워서 자고있다. 웃기는 관경이다.  --이 여름에 내가 무었을 했던가가 잘 기억이 나지를 않는다. 꽤 즐겁게 보낸 것 같은데 돌아보니 크게 기억에 남는 일이 있지는 않았던 모양이다. 공연을 하고 합주하고 한 기억은 나지만 사실 거의 까먹고 있었다. 그렇다면 2018년의 여름은 과연 기억에 남을만 한 여름이 될 것인가 하는 생각도 든다. 이젠 더이상 학생도 아니고 여름방학도 없다. 그렇다면 나는 무엇을 할 것인가?  --계획은 없다. 휴가며 일이며 공부며 게임이며 자잘한 일들을 하기는 하겠지만 내년 여름이 되면 또 모르지, 기억이 안날지도 모르겠다.  --사실 기억에 남느냐는 그다지 상관 없을지도 모른다. 나는 애초에 뭔가를 자세하게 기억하면서 사는 편도 아니다. 오히려 좋았던 일 보다는 안좋았던 일을 더 자세히, 오래 기억하는 편이다. 그 기억으로 인해 스트레스를 받거나 하지는 않지만 이따금씩 스쳐지나가면서 기분을 상하게 만든다. 웃기는 것은, 그렇게 떠오른 안좋은 기억도 금새 까먹는다는 것이다.--편한 성격이고 나는 이 성격이 좋다.  --2017년의 내가 슬슬 깨어날 것 같으니 이만 돌아가야겠다. 타임페트롤도 시간이동의 징후를 알아차리고 슬슬 나를 잡으러 올 시간이다!  --같은 상상을 하는 건 즐거운 일이다. 재미있는 과거지만 재미있는 미래가 되기를 더 희망해 본다. 테스트 결과는 만족스럽다. 제대로 연도에 따라 리스트 시키고 있다.  "},{title:"일본, 후쿠오카, 2018 7 14 ~ 17",date:1531993600997,topic:I,text:"<img src='./static/photos/japan-20180714/1.jpg' style='width: 100%; height: auto;' />  --첫날 저녁, 여섯시에 숙소에 도착하고 바로 나가서 하카타 라면 스타디움에서 먹은 돈코츠 라면. 2년전에 후쿠오카를 왔을 때 먹고 기억하고 있던 맛이었다. 항정살로 만든 두껍지만 부드러운 차슈와 냉동시켜둔 잔에 따라주는 생맥주가 정말 좋았다.    <img src='./static/photos/japan-20180714/2.jpg' style='width: 100%; height: auto;' />  --둘째 날 점심으로 먹은 100엔스시, 여기도 2년전에 왔던 곳인데 가성비가 좋고 맛있다. 개인적으로 여행에서 갔던 곳을 또 가는걸 좋아하지 않지만 음식이라면 얘기가 다르다. 새로운 맛도 좋지만 모험은 사절이다.    <img src='./static/photos/japan-20180714/3.jpg' style='width: 100%; height: auto;' />  --둘째 날 저녁에 먹은 야끼니쿠, 주문한 양에 따라 계산하는 방식이 아니라 기본이 '타베호다이'이고 '노미호다이'를 추가 가능하다. 한마디로 고기 무한리필과 술무한리필집. 여긴 이번 여행으로 처음 가본 곳이지만 좋았다. 다시 후쿠오카를 간다면 가는걸 고려해 볼 만 하다.    <img src='./static/photos/japan-20180714/4.jpg' style='width: 100%; height: auto;' />  --셋째 날 저녁에 먹은 모츠나베, 곱창전골이다. 이 가게도 처음 가본 곳이었다. 문이 옛날 방식이라 굉장히 낮아서 처음에는 우리가 뒷문으로 들어가는게 아닌가 하는 의문이 들었지만 거기가 문이 맞았다. 2년전에는 된장맛 국물을 먹었는데 이번에는 간장맛 국물로 먹었다. 개인적으로는 된장이 더 맛있는 것 같다. 간장은 스키야끼와 맛이 비슷하다.    <img src='./static/photos/japan-20180714/5.jpg' style='width: 100%; height: auto;' />  --마지막 날 먹은 돈까스, 가게 이름이 기억 안나는데 유명한 체인점이다. 체인점의 장점은 보증된 맛과 가격. 나는 가츠동을 먹었는데 한국에서 먹는 것에 비해 더 짜지만 전체적으로 부드러운 맛이었다. 만족스러운 마지막 식사였다.    <img src='./static/photos/japan-20180714/6.jpg' style='width: 100%; height: auto;' />  --첫날 간 캐널시티에서 하던 고질라 영화 관련 행사와 '하카타 기온 야마카사'라는 후쿠오카의 마츠리에서 쓰는 장식용 가마를 찍은 것이다. 고질라 행사라서 그런지 가마에도 고질라가 장식되어 있었다. 행사중에 고질라와 싸우는 시나리오로 영상을 건물 벽으로 쏴서 틀어주는데 중간에 스마트폰으로 캐널시티 홈페이지에 접속하면 고질라를 공격할 수 있는 이벤트가 있다. 주변 사람들이 핸드폰으로 영상만 찍고 공격을 안해서 결국 졌다.    <img src='./static/photos/japan-20180714/7.jpg' style='width: 100%; height: auto;' />  --위의 사진에서 얘기한 마츠리가 시작되는 쿠시다 신사의 노점. 가게가 몇 없기는 하지만 오코노미야끼나 타코야끼, 가면, 꼬치 등 일본스러운 것들을 팔고있었다. 맛있어 보이긴 했지만 저녁을 먹은 직후라 배가 불러서 못먹었다.    <img src='./static/photos/japan-20180714/8.jpg' style='width: 100%; height: auto;' />  --첫날 저녁 우연히 알게된 '하카타 기온 야마카사' 마츠리에서 실행하는 가마옮기기 장면. 위의 사진에서 얘기한 장식용 가마는 사람이 옮기기에 너무 무겁고 더 작은 가마를 사용한다. 몇개의 팀이 있는데 남자들이 가마를 매고 5km를 얼마나 빨리 가느냐를 경쟁한다. 참고로 행사 시작은 새벽5시, 신기하고 새로운 경험이었지만 피곤했다."},{title:"docker",date:1532943067331,topic:U,text:"<img src='./static/photos/docker.jpg' style='width: 100%; height: auto;' />  --docker는 흥미롭다. 왜인지 잘 모르겠으나 docker는 내 흥미를 불러 일으킨다. 재미있는 장난감을 발견한 기분이기도 하다. 시작하면서 말하자면 참고로 이 글은 docker에 대한 사용설명서가 아니라 나의 개인적인 감상이다.  --docker는 컨테이너라고 하는 일종의 VM을 만들어서(하지만 엄밀히 말하면 VM하고는 다르다.) 개발환경을 구성하는 데 도움을 준다. 각각의 컨테이너는 독립적이며 서로 분리되어 있다. 물론 설정을 통해 컨테이너끼리 연결시키거나 인터넷 환경, 파일을 공유할 수 있지만 기본적으로는 하나의 개별적인 존재로 보는게 맞다. 나는 이 개념을 처음 생각할 때 '하나의 컨테이너 = 하나의 컴퓨터'로 이해했는데 완전히 틀린 이해는 아니었다. docker의 기본적인 사용목적인 서버로 생각해 본다면, docker는 하나의 컴퓨터에 여러개의 컨테이너를 구축해서 여러개의 서버를 '안정적'으로 구성할 수 있다. 이 을마나 믓찐 일인가?  --docker에 대한 설명을 이 글에서 하려면 image, Dockerfile, docker-compose, docker swarm, docker machine 등등 해야 할 얘기가 너무 많고 처음에 얘기했듯이 이건 설명글이 아니다. 그럼 무슨 글이냐? 내가 왜 docker에 흥미를 가지는가에 대한 얘기이다.  --나는 표면적으로 프론트엔드 개발자다. 실제로도 그 분야의 기술을 익히고 익숙하게 사용할 수 있게 되는 것에 많은 시간을(혹은 대부분의 시간을) 썼다. 하지만 엄밀히 말하자면 프론트엔드에 크나큰 흥미를 보이는 것은 아니다. 물론 프론트엔드도 좋아하지만, 그것뿐인 것만은 아니라는 얘기다. 내가 가장 좋아하는 건 뭔가를 내 손으로 '전부'만드는 것이다. 정확히는 뭔가 만들고 싶은 것이 있을 때 그걸 전부 혼자서 만들 수 있는가?에 흥미가 있다. 웹 서비스를 만든다고 하면(실제로 그게 내 일이니까) 나는 '~만 할 수 있는 사람'이기가 싫다. 어린애같은 투정일지도 모르지만 나는 다 알고싶다.  --이 생각은 회사에 와서 더 커졌는데, 서버에 문제가 생겼을 때 나는 아무것도 하지 못했다. 그야 신입사원이니까 라고도 생각은 하지만, 심지어 로컬환경에 서버를 구축하는 것 조차 못하는 사람이었다. 그야말로 '프론트엔드 만'하는 사람이었다. 사실 프론트엔드만 보더라도 공부할 것이 잔뜩있고 어려운 분야라는 것을 알고는 있다. 하지만 나는 기술보다는 뭔가를 만드는 것에 더 흥미가 있고 혼자 '전부'만드는 것에 흥미가 있다. 사실상 이게 내가 docker에 흥미를 가지는 이유다. docker가 있으면 나는 서버를 혼자 구축할 수 있다. docker는 그런 물건이고 아주 흥미롭다.  --지금은 docker를 이용한 서버 클러스터링을 보고있는데 일단 현재 목표는 docker를 이용해서 jenkins서버를 그럴듯 하게 구축하여 개인적으로 사용하는 것이다. 배포에는 GCP이나 AWS, 혹은 MS Azure중에 하나를 골라서 쓸 것 같다. 그 작업이 끝나면 아마 Grafana같은 모니터링을 구축하는 시도를 하지 않을까 싶다. 그것도 썩 재미있어 보인다.  "},{title:"펜타포트 2018 8 11",date:1534235468169,topic:I,text:"<img src='./static/photos/penta-20180811/1.jpg' style='width: 100%; height: auto;' />  --펜타포트 잔디밭의 모습. 당일에 날이 정말 더웠는데 덕분에 아무도 잔디에 앉으려고 하지 않았다. 보이는 공연장은 메인은 아니고 서브스테이지, 이번에는 서브스테이지에서 공연하는 밴드들에 흥미가 없어서 거의 안들어갔다.    <img src='./static/photos/penta-20180811/2.jpg' style='width: 100%; height: auto;' />  --위와 같은 장소지만 해가 들어가니 사람들이 나와서 앉았다. 낮에 더웠던 것 만큼 저녁에는 꽤 시원했다. 물론 이미 땀은 있는데로 흘리고 지칠대로 지친 후였지만 말이다.    <img src='./static/photos/penta-20180811/3.jpg' style='width: 100%; height: auto;' />  --기이이이이이잇발. 일종의 락페스티벌 문화다. 각각 다르게 만들어진 깃발을 보는 것도 일종의 재미라고 생각한다.    <img src='./static/photos/penta-20180811/4.jpg' style='width: 100%; height: auto;' />  --중간에 너무 힘들어서 다음 공연 전까지 그냥 누워버렸다. 같이 누워있던 놈은 친한 동생, 찍어준 사람은 그 동생의 친구다.    <img src='./static/photos/penta-20180811/5.jpg' style='width: 100%; height: auto;' />  --하이네켄 맥주, 땀을 흘리고 날도 더우니 맥주를 정말 많이 마셨다. 락페스티벌의 재미있는 점은 맥주를 아무리 마셔도 화장실을 안간다는 것이다. 땀으로 물이 다 나온다.    <img src='./static/photos/penta-20180811/6.jpg' style='width: 100%; height: auto;' />  --마이크 시노다, 작년에 죽은 체스터 베닝턴이 보컬로 있던 린킨파크라는 밴드의 기타리스트였다. 린킨파크는 사실상 활동 정지상태지만 시노다는 솔로로 활동을 하고 있다. 락, 일렉트릭, 랩이 섞인 노래가 많다. 나는 시노다 티셔츠도 샀다.  "},{title:"Persistent state, redux-persist",date:1535701505737,topic:U,text:"--먼저 상태에 대한 얘기를 하자면, React나 Vue나 상태를 관리하는 store개념이 전부 존재하는데 이는 휘발성 데이터다. 클라이언트를 새로 로딩할 경우(새로고침을 누를 경우) store에 저장된 상태 데이터는 사라진다. 사실 나도 처음에 공부할 때에는 영원히 존재하는 데이터일 거라고 생각했는데, 처음으로 vuex를 이용한 연습용 페이지를 만들어서 새로고침을 누르는 순간 한여름 밤의 꿈처럼 사라져 버리는 걸 보고 조금 당황했던 적이 있더랬다. 지금에 와서는 store와 state(상태)의 목적이 데이터를 저장하는 기능이 아니라는 걸 알고있다. 상태와 store는 일종의 데이터 버스의 기능을 한다. 물론 간단한 데이터 저장기능(회원가입을 할때 사용자가 입력하는 input값을 잠시 가지고 있는다거나)을 하기는 하지만 기본적으로는 컴포넌트간의 상호작용에서의 의미가 크다.  --사실 vuex나 redux없이도 컴포넌트 간의 교류가 가능하기는 하다. 자식 컴포넌트에 프로퍼티 값을 내려주거나 부모가 전달한 함수를 통해 부모 컴포넌트의 상태값을 변화시킬 수도 있다. 한 다리 건너 자식 컴포넌트라도 프로퍼티를 계속 넘기면 당연히 특정 데이터를 넘길 수 있을 것이다. 하지만 만약 수십개의 컴포넌트가 복잡한 상하구조를 가지고 동작한다면? 십여다리를 건넌 컴포넌트까지 함수나 프로퍼티를 전달해야 한다면? 만약 그 상태에서 필요없어진 프로퍼티 값이 생겨서 모든 컴포넌트의 해당 프로퍼티를 전달하는 코드를 수정해야 한다면? 끔찍한 상상이다. 하지만 필연적인 상상이며, 그런 일은 반드시 일어난다. 왜냐하면 react나 vue나 효율적인 컴포너트 재사용을 위해서 아주 사소한 부분까지 컴포넌트를 만들어서 페이지를 제작하도록 권장하기 때문이다. 어느 개발자라도 수정하기 어렵고, 시간이 많이 들고, 관리가 복잡한 방식을 사용하고 싶어하지 않는다.  --이럴 때 필요한 것이 바로 redux의 store개념이다. 그 안에서 store는 가장 기본이 되는(가장 위에 있는) root 컴포넌트에서 한번 전달해 주기만 하면 된다. 그러면 root 컴포넌트의 다른 모든 자식 컴포넌트에서 간단한 준비를 통해 상태를 불러오거나 변경할 수 있게 해준다. 간단한 기능이지만 기발한 생각이다. 이 기능 만으로도 react를 이용한 개발에서 복잡하게 상태관리를 할 필요가 없어졌다. 여기까지만 했어도 꽤 해피엔딩이었겠지만, 개발자의 욕심은 끝이없고 이 인간들은 꼭 뭔가를 더 만든다. '아 상태데이터가 휘발성이 아니라 계속 남아있는 데이터라면 얼마나 좋을까' 라는 생각을 누군가가 아마 한 모양이다. 그도 그럴 게 나도 처음에 그렇게 생각 했으니까 말이다. 그렇다고 DB처럼 몽땅 저장해서 사용하고 싶다는 얘기가 아니다. 다만 특정 상태를 세션처럼 사용할 수 있으면 좋지 않을까? 하는 욕심인 것이다.    --<a href='https://github.com/rt2zz/redux-persist'>redux-persist</a>를 확인해 보라. 당신의 상태에 대한 욕망을 해소시켜줄지도 모를 괜찮은 모듈이다.    --사용법도 간단하다.  <pre class='language-js'><code class='language-js'>import { createStore } from 'redux';\nimport { persistStore, persistReducer } from 'redux-persist';\nimport storage from 'redux-persist/lib/storage';\nimport reducer from './reducer';\nimport state from './state';\nconst persistConfig = {\n--key: 'root',\n--storage,\n};\nconst persistedReducer = persistReducer(persistConfig, reducer);\nlet store = createStore(persistedReducer, state);\nlet persistor = persistStore(store);\nexport { store, persistor };\n</code></pre>\n--위의 코드는 내가 이번에 만드는 중인 서비스의 store부분 코드인데 해당 모듈을 이용하여 코드 몇줄 추가한게 끝이다. 그 다음에는 기본 컴포넌트에도 약간의 코드를 추가하면 된다.  <pre class='language-js'><code class='language-js'>import { store, persistor } from './store/store';\nimport { Provider } from 'react-redux';\nimport { PersistGate } from 'redux-persist/integration/react'\nReactDOM.render(\n--＜Provider store={store}＞\n----＜PersistGate loading={null} persistor={persistor}＞\n------＜App /＞\n----＜/PersistGate＞\n--＜/Provider＞\n, document.getElementById('root'));\nregisterServiceWorker();\n</code></pre>\n--react-redux에서 store를 전달하는 Provider 컴포넌트 아래에 PersistGate라는 새로운 컴포넌트를 추가하면 된다.  --이 모듈을 사용할 때 설정을 변경하여 어떨 때 상태가 사라지게 만들지를 정할 수 있는데, 만약 기본설정일 경우에는 브라우져를 다시 켜도 상태가 유지된다. 나도 처음에는 괸장히 신기했다. DB를 쓰지도 않았는데 상태가 계속 유지되다니! 그런데 다시 생각해보니 나도 그러한 방법을 이미 하나 알고 있었다. 처음 세션에 대해 고민할 때 나는 여러가지 방법을 찾아봤었는데 그중에는 sessionStorage와 localStorage라는 방법이 있었다. 나는 당시에 sessionStorage를 사용했는데, 그럴 경우 브라우져가 꺼지지 않는 이상 데이터가 계속 유지된다. 물론 브라우져가 꺼지는 순간 데이터를 날아간다. 여기까지 읽었으면 바보가 아닌 이상에야 눈치를 챘을테니 그냥 얘기해도 될 것 같다. 어떤 방식으로 사용하고 있는지는 확실하게 파악하지 못했지만, 그렇다, 이 모듈은 localStorage를 사용하고 있다.  --방식을 알았다고 해서, 뭐야 별거 아니네? 라고는 생각하지 않는다. 실제로 아직 정확히 어떤 방식으로 상태를 localStorage에 저장하는지는 모르니까 말이다. 첫번째 코드처럼 사용자가 만든 redux store객체를 받아서, 모듈 안에서 다시 redux를 사용하여 store를 관리하는 것 같기는 한데 정확히는 모르겠다. 코드를 조금 더 읽어보기는 해야할 것 같다.  --그렇다면 이런 모듈을, 변하지 않는 상태 데이터를, 어디에 사용하는 것일까? 누구나 자신이 원하는 방식으로 사용할 수 있지만, 내가 만드는 서비스에서는 세가지 방식으로 사용하는데, 첫번째는 사용자 정보를 저장하여 매번 로그인 할 필요가 없게 만들 생각이다. 두번째는 회원가입 하는 페이지를 두개의 컴포넌트로 나눠서 만들었는데 사용자가 새로고침을 하더라도 이전 페이지에서 작성한 정보가 사라지지 않게 하는 용도로 사용한다. 세번째는 서비스 안에서 사용자와 관련된 데이터를 저장하는 용도로 사용한다. 세번째 용도를 쓰는 이유는, 컴포넌트가 사용자 데이터를 필요로 할 때 마다 DB에 접근하는 것이 아닌 상태정보를 그대로 사용 할 수 있게 하기 위함이다.  --빛이 있으면 어둠이 있고, 장점이 있으면 단점도 있다. 이 모듈을 사용할 때에도 주의해야 할 점이 있다. 첫번째는, 성능저하를 불러온다는 것이다. 이는 개발자가 테스트 후 공인한 문제점으로, 그냥 일반적인 store를 사용하는 것에 비해 상태를 변경하거나 가져오는 속도가 느리다고 하는데, 이는 결국 전체적인 퍼포먼스 저하로 이어지게 된다. 엄청나게 걱정할 만큼 느려지는 것은 아닌 것 같지만 남발할 만큼 영향이 적은 것도 아닌 것 같으니 주의할 필요가 있어보인다. 두번째는, 보안에 대한 문제인데, 사실 나는 보안에 대해서는 자세하게 아는 편은 아니기 때문에 보고 들은 것을 얘기 하자면. localStorage는 어떠한 암호화 없이 그대로 데이터를 저장하는데 이는 상당히 보안에 취약하게 작용할 수 있다. 나는 아직 상업용 대규모 서비스를 제작하고 있는 것은 아니기 때문에 이러한 문제점에 대한 것을 크게 신경쓰지 않지만, 만약 그러한 서비스에 사용할 것을 염두해 둔다면 보완할 방법을 찾아보는 것이 좋을 것이다."},{title:"노벨 문학상의 부재",date:1538617560690,topic:"Chat",text:"--올해는 노벨 문학상 수상자가 없다. 문학상을 선정해야할 스웨덴 한림원이 미투에 휘말리며 수상자 선정을 할 수 없는 상황에 놓였기 때문이다. 우리나라의 많은 작가들도 성추행 파문을 불러온 적이 있기 때문에 남의 얘기 같지가 않다. 문학을 공부했고 또 좋아하는 사람의 입장에서 말하자면 요즘의 이러한 문학계의 모습들이 그렇게 부끄러운 수가 없다. 다른 모든 사람들도 행실을 조심함은 당연한 일이지만 문학을 하는 사람은 더 조심해야 한다. 지금의 문학은 그저 책과 글일 뿐이지만 원래 문학이란 지식의 전달, 저항의 수단, 문제를 알리는 역할을 하는 등 그 무게가 결코 가볍지 않다. 우리나라만 보더라도 일제 강점기 당시에 지식인이라고 불리는 많은 사람들은 실제로 문학인인 동시에 운동가이기도 했다. 직접적으로 일제를 비판하거나 행동하지 못하는 자신의 모습에 부끄러워 하기도 하고 나아가야 할 방향을 제시하기도 했다. 이러한 문학들이 당시는 물론이고 현대에도 영향을 주게 되는 것이다. 따라서 작가란 고민하고 생각하고 신중해야하는 인간 군상이다. 그런 그들이 범죄를 저지르는 건 말도 안되는 일인 것이다.  --물론 요즈음의 작가들이 모두 지식인이라 칭하는 것은 아니다. 현대의 문학이란 지식의 전달이나 유익한 움직임을 떠나 놀이문화의 하나로 자리잡고 있으며 재미는 또한 문학의 다른 역할이기도 하다. 하지만 그렇다고 해도, 문학을 하는 작가는 수많은 고민과 고뇌를 지나온 이성적인 사람이어야 한다. 감성적인 말과 인물을 만들어도 그 머리는 차갑고 논리적이어야 한다. 골방에 앉아 담배연기를 뿜고 소주와 함께 잠들더라도 밖을 나돌며 성적인 범죄를 저지르는 만행을 해서는 안된다는 것이다. 작가는 남에게는 살갑고 인정이 많은 사람이어야 하며 동시에 스스로만 고고한 사람이어야 한다. 자기 자신은 무결하고 한치의 흠도 없으며 이 시대를 이끄는 지식인인 양 생각해야 한다. 그러면 자연히 행동을 바르게 하게 되고 자신의 올바른 모습을 고민하게 될 것이다. 이는 개인의 작가론일 뿐이지만 동시에 모든 작가들이 가져야 할 행동 규범이기도 하다고 생각한다.  --작가는 꼭 그렇게 완벽한 것 처럼 행동해야 해? 무슨 바른생활 인간처럼 살아야 되는거야? 꼭 그래야 하는거야? 꼭 그래야 한다. 작가는 글로 말하는 사람이기 때문에 그의 글이 신뢰를 받으려면 작가 본인이 우선 신뢰를 받는 사람이어야 한다. 살인자가 살인을 비판하는 것 만큼 웃기는 일도 없고, 범죄자가 세상을 비판하는 것 만큼 웃기는 것도 없다. 그렇다면 성범죄자가 쓴 세상에 대한 글은 얼마나 웃기겠느냐 이 말이다. 그들 스스로가 옳바르지 않은데 그들의 글을 누가 옳다고 생각하며 읽을 것인가? 또한 그들이 섞인 문학계라는 집단을 과연 누가 믿는다는 말인가? 아무리 좋은 말이라도 양치기 소년의 입에서 나온 말이라면 아무 의미도 없는 것이다.  --나는 그 모든 범죄자 문학인들에게 반성하고 앞으로 잘 하라고 얘기하고 싶지 않다. 이미 일은 저질렀고 되돌릴 수 없으며 다른 인간에게 큰 고통을 줬다. 신뢰는 바닦에 떨어졌고 다시 주워올리는 것은 의미가 없는 일이다. 선행은 악행을 지울 수 없다. 무게추에 아무리 선행을 올리고 반성하더라도 이미 기울어진 접시는 돌아오지 않는다. 하지만 남은 사람들은 적어도 그 일을 통해 나는 저러지 말아야지 하는 다짐을 할 수는 있다. 어떠한 기회로 삼으려는 노력을 할 수는 있다. 아니, 단언컨데, 그들은 그래야만 할 것이다. 내년의 노벨 문학상이 다시 우리에게 돌아올지는 두고볼 일이다."},{title:"React에서 FCM적용하기",date:1540191550109,topic:U,text:"--React로 일종의 이메일 클라이언트를 만들고 있다. SMTP서버를 쓰는 뭐 새로운 이메일 서비스를 만드는게 아니라 IMAP를 이용한 chat-like한 형태의 일종의 스킨이라고 생각하면 쉽겠다. 처음해보는 기술들이 많았으며 굉장히 막 시작했고 기반 지식은 없었다. 하지만 나는 이런 스타일의 - 일단 시작하고 프로젝트를 진행하면서 필요한 부분에 대해서는 그떄 공부하는 - 방식을 좋아하기 때문에 잘 진행됐는데 생각보다 FCM으로 새로운 메일이 오면 푸시알림을 주는 부분에서 애를 먹었다. 아니 애를 먹을 것도 없는 파트였는데 React에 FCM을 적용하는건 다른가? 하는 의문으로 시작하는 바람에 시간을 많이 잡아먹었다. 솔직히 말하자면 차이가 없었다. 다만 어느 타이밍에 어떤 설정을 할 것인지를 React의 컴포넌트를 통해서 조절한다는 정도?  --영어로 된 자료는 많아도 한글로 된 정보가 거의 없는 것 같아서 설명글을 기스트에 써보았다. 관심이 있는 사람은 <a href='https://gist.github.com/ninanung/3c3520359abed543a2bb8e09e49212e4'>React에서 FCM사용하기</a> 를 통해 조금 접해봐도 좋을 것 같다.  "},{title:"Github로 로그인하기! 그리고 영어와 개발자에 대한 잡담",date:1545982595723,topic:U,text:"<img src='./static/photos/new_year.jpg' style='width: 100%; height: auto;' />  --를 여기서 설명하는 건 아니고 <a href='https://gist.github.com/ninanung/2ad24c760e81401ed65f13f634a25e73'>Github의 gist</a>에서 확인할 수 있다. 저장소를 보고싶다면 <a href='https://github.com/ninanung/signin-with-other-services'>Github 저장소</a>에서 확인하시라. 요즘 많은 웹 서비스들이 OAuth2를 이용한 인증 방식을 기본으로 이용하는 것 같아서 한번 사용해 보았다. 다른 말로는 3 legged OAuth 라고도 하는 모양이다. 아마 인증을 위해 데이터를 주고받는 방식을 보고 그렇게 얘기하는 듯 하다. 이번에는 관련 기능을 사용해 보는 예제였지만 나중에는 직접 서버에 인증 방식을 구현해 보는 것도 재미있을 것 같다.  --잡담으로 넘어가면, 해피해피 뉴이어. 이게 올해의 마지막 블로그 포스팅이 될 것이다.--뜬급없지만, 개발을 하면 할수록 개발자에게 있어서 영어는 중요하다고 생각하게 된다. 당장 알 수 없는 에러가 발생하면 에러로그를 확인하고, 그래도 모르겠으면 많은 개발자들이 구글에서 정보를 찾는다. 이는 나쁜 방법이 전혀 아니고 이미 해당 버그를 경험한 사람이 있다면 그 사람의 글을 참고하는 것은 오히려 효율적인 일이다. 많은 개발자들이 코드의 재사용에 목숨을 거는 걸 보면, 이미 있는 것을 사용한다는 것은 개발에 있어서 중요한 일이다. 하지만, 구글에서 정보를 찾을경우, 그것이 한글로 적혀있다는 보장이 없다. 아니 단언컨데 아주 간단하고 누구나 물어볼 수준의 정보가 아닌이상 한글로 적혀있는 경우는 거의 없다. 수많은 프래임워크나 모듈들, 프로그램들의 공식문서만 보더라도 이미 대부분 영어다. 만약 그걸 읽을 수 없다면? 아쉽게도, 당신은 하루종일 번역된 무언가를 찾아서 인터넷 세상을 떠돌거나 왈도체를 알아보기 위해 노력해야 한다.  --같은 맥락으로, 내가 Github로 로그인하는 방법을 왜 한글로 만들었을까? 제대로 작성된 한글 설명글이 없었기 때문이다. 제대로 된 글은 영어 뿐이었고, 그것을 참고해서 해당 글을 적었다. 결국, 만약 당신이 영어를 할 줄 모른다면, 다른 영어를 하는 개발자들에 비해 정보력이 부족해 진다는 뜻이다. 이렇게 말하는 나는 영어를 잘하느냐? 나는 개인적으로 말하기에 자신이 있고 좋은 웹 사전 하나만 있으면 문서나 글을 읽는 것에도 문제가 없다고 생각하지만, 이것이 내가 생각하는 '잘'은 아니다.  --영어의 필요성에 대해서 다른 관점도 생각해보자, 우선 코드가 있다, 모두가 이미 아는 사실이지만 코드는 영어다. 모든 변수명은 영어고, 함수명도 영어이며, 객체명도 영어다. 프로그래밍 언어로 코딩을 하고 있지만 사실 우리는 영어로 코딩을 하고 있는 것이나 다름없다. 다른 개발자들이 내 코드를 알기쉽게 하려면, 영어로 된 함수명이나 변수명을 잘 적어야 한다. '아무렇게나 적으면 되지!' 라고 말할수도 있지만 잘 만들어진 변수명의 장점을 무시할 수는 없을 것이다. 만약 코드에 대해서 설명하기 위해 각주라도 영어로 달아야 한다면, 그건 뭐 당연히 영어로 적어야 할 것이다. 프로그래밍 언어를 한글로 만들지 않는이상, 개발자인 나와 당신은 평생 영어로 코드를 쓰고 영어로 문서를 보는 생활을 하게 될 것이다.  --자, 이쯤에서는 인정하자, 개발자는 영어를 잘해야 한다. '영어를 못하는 개발자는 후진 개발자야!' 라고는 말할 수 없다. 개발을 아주 잘하면 누군가는 당신을 쓰고 싶을 것이다. 하지만 여태까지 내가 말한 사실들로 미루어 봤을때, 영어를 잘하는 개발자가 더 좋은 개발자가 될 확률이 높지 않을까? 다른 프로젝트에도 기여하고, 컨퍼런스에서 맥주마시면서 외국인과 영어로 기술적인 대화를 하는 믓찐 개발자가 되고싶지 않은가? 당장 공부를 시작하자. 돈을 들여서 학원을 다니는 것도 좋은 방법이지만, 조금 더 개발자 스러운 방식으로 공부를 할 수 있다. 당신의 Github 저장소의 README파일들, 그것을 영어로 적는 것부터 실천해 보자. 그렇게 할 경우 몇가지 장점이 있는데,    1. 개인적인 영어 연습이 된다. 모르는 단어를 찾고 어떻게 쓸지를 고민하는 그 과정 자체가 연습이다.  2. 골방 개발자가 되지 않는다. 내가 언젠가 좋은 뭔가를 만들게 된다면, 언어가 다른 개발자가 그것을 보고 평가할 수 있으면 좋지 않겠는가?  3. 외국에서 일하는 것을 배제하지 않는다. 외국 회사에 지원한다면, 내 깃허브 상태, 내가 만든 무언가는 보고싶을 것이다. 그게 얼마나 허접한 것이든, 적어도 무엇인지는 알아야지 않겠는가.    --이런 개인적인 이유가 아니라도 공적인 부분에서 영어는 도움이 될 것이다. 영어로 된 좋은 개발관련 글이 있다면, 영어 공부도 할겸 번역해서 올리자. 이미 몇몇 개발자들은 그런 고마운 일을 개별적으로 하고있다. 커뮤니티를 통해 영어로 된 프로그램이나 문서의 번역에 기여하는 것도 좋다. 유명한 프래임워크나 개발툴이 한글화 되어 있으면 그렇게 손쉽고 고마울 때가 없다. 개발자에게 커뮤니티, 공생, 협업은 중요하다. 당신의 노력으로 한국 개발자가 인정받고, 한국 개발문화가 선진화되어 목소리를 높일 수 있다면, 나중에라도 당신의 월급이 오를지 누가 알겠는가?  --사실 나한테 영어공부를 하라고 난리를 쳤던 사람이 있었는데, 그건 우리 형이었다. 형은 먼저 개발자의 영역에 발을 올리고서는 나한테 일장연설을 하는 걸 좋아하는 편인데, 이번처럼 도움이 되는 말을 할 떄가 종종 있다. 나는 앞으로도 유용한 무언가가 한글로 번역되거나 설명된 것이 없다면 번역하거나 설명하는 작업을 종종 할 것이다. 다시 정리하면서 공부도 되고 나름 재미있다. 한국의 많은 개발자들이 동참했으면 하는 바람이 있다. 돌고 돌아서 도움이 될 것이다.  "},{title:"블로그 포스트의 타이틀에 배지 추가",date:1546570660754,topic:T,text:"--새해 첫 블로그 포스트가 테스트가 될줄은 몰랐다.  --블로그에 색이 조금 부족한 것 같아서 글에 토픽을 부여하고 타이틀에 배지를 붙여봤다. 이전에는 내가 작성한 글이라도 도대체 뭐에 대해서 쓴건지 알아보기 힘들었는데, 지금은 그나마 어떤 종류의 글인지를 알아볼 수 있게 된 것 같다. 현재 토픽의 종류는 4가지인데, Chat, Dev, Travel 그리고 Test가 있다. 쉬운 영어이기 때문에 못 알아들을 이유는 없을 것이다. 내가 블로그에 글을 작성하는 이유들 중 가장 보편적인 네가지를 우선적으로 배치했다. 이 글은 테스트를 위한 글이기 때문에 당연히 테스트 배지가 붙을 것이다.  --사실 이 블로그는 그냥 취미 본위이기 때문에 크게 바꾸거나 할 일은 없을 것 같지만 이런 식으로 작은 기능들이 추가될 가능성이 있지 않을까 싶다.  "}]},N=!0,z=!1,Y=void 0;try{for(var H,q=$()(G.postList);!(N=(H=q.next()).done);N=!0){var K=H.value;B.postlist.push(K)}}catch(t){z=!0,Y=t}finally{try{!N&&q.return&&q.return()}finally{if(z)throw Y}}var J=B;a.a.use(c.a);var Q=new c.a.Store({state:J}),W=s("P6sg");a.a.config.productionTip=!1,new a.a({el:"#app",router:M,store:Q,vuePrism:W.a,components:{App:b},template:"<App/>"})},RVGQ:function(t,e){},Vezq:function(t,e){},ZzzK:function(t,e){},bpgc:function(t,e){},kvT1:function(t,e,s){t.exports=s.p+"static/img/404.224f7f0.jpg"},niL8:function(t,e){},p6JS:function(t,e){},qIEg:function(t,e,s){t.exports=s.p+"static/img/main.26a98a4.png"},s3ga:function(t,e){},unEd:function(t,e){},vsEE:function(t,e){},"x+s5":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4a645a355632f0445bda.js.map