/* eslint-disable */
export default {
    postlist: [ 
        {
            title: "첫글",
            date: 1530148416937,
            text: "--대망의 첫 글이자 테스트를 위한 글이다.  " +
            "--블로그를 만들면서 느낀점을 한가지 말하자면, 데이터 베이스나 서버가 없는 페이지를 만드는 게 이렇게 고민이 필요한 일이라고는 생각하지 못했다는 것이다. 오히려 백엔드를 구축할 필요가 없으니 간단하겠다고만 생각했지 작성한 포스트를 어떻게 관리해야 할 지에 대한 생각이 부족했다. 지금까지 소홀했던 Vue공부나 하면서 천천히 만들어야지 개꿀. 이렇게 생각했는데 생각보다 귀찮은 일이었다.  " +
            "--서버는 괜찮다. 어차피 Vue를 통해 라우팅도 하고 간단한 데이터를 조절할 수 있으니까, 하지만 데이터베이스는 조금 고민을 하지 않을 수 없었다. 물론 그냥 글을 HTML로 전부 작성할 수는 있다. 하지만 그렇게 하면 라우팅이 복잡해지고 나중에 글을 수정하거나 할 때 많은 부분을 수정해야 한다. 따라서 데이터베이스처럼 하나의 공간에 데이터를 밀어넣고 수정하고 싶을 때 수정할 수 있는 방법이 필요했다.  " +
            "--사실을 말하자면 그다지 어려운 방법을 사용하지는 않았다. vuex를 이용해서 state에 글과 제목을 저장하고 데이터 베이스처럼 사용했다. 이 역시 그다지 스마트한 방법은 아니라고 생각하지만 더 이상 복잡하게 생각하기 보다는 일단 시작해 보자는 생각으로 선택했다. 아마 이 방법이 불편해지면 나서서 바꾸게 될지도 모를 일이겠다.  " +
            "--코드하이라이트도 적용을 해 보았다. 어쨌든 개발자의 블로그인데 코드를 써야 할 일이 당연히 있겠지 싶다. 해당 코드는 코드하이라이트를 Vue에 적용할 때 사용한 코드의 일부이다.  " +
            "<pre class='language-js'><code class='language-js'>" +
            "import Vue from 'vue'\n" +
            "import VuePrism from 'vue-prism'\n" +
            "Vue.use(VuePrism)\n" +
            "import 'prismjs/themes/prism.css'\n" +
            "</code></pre>" +
            "--썩 유쾌하지 않게도, 위의 코드박스의 하이라이트기능이 처음 랜더링 시 적용되지 않고있다. 아마도 처음 vuex의 state로부터 값을 받고 적용시킬 때 Prismjs의 스타일이 적용되지 않은 상태로 보여지는 것 같다. mounted를 이용하여 적용시키는 것이 문제일지도 모르겠다고는 생각중이나 딱히 해결방법이 떠오르지 않아서 이것저것 시도해 보는 중이다.  "
        }, 
        {
            title: "두번째 테스트",
            date: 1530238051467,
            text: "--두번째 테스트 글이자 결과보고 같은 것이다.  " +
            "--확실히 Vue를 너무 오래 사용하지 않은 것 같다. 회사를 다니면서 계속 React만 사용하다 보니 Vue에 대한 지식이 많이 빠져나갔다. 만드는 도중에 route를 할 때 URL은 param값에 따라 분명히 변하는데 내용이 변하지를 않는 버그가 있어서 고치는데 시간을 허비했다. 사실 생각해보니 간단한 문제였다.  " +
            "--Vue는 퍼포먼스를 위해서 컴포넌트를 렌더링하고 같은 컴포넌트를 또 렌더링 하면 처음부터 다시 렌더링 하지 않는다. 결국 created함수에서 data필드를 변화시키도록 코드를 짰다고 해도, param값만 다르게 같은 컴포넌트로 라우트 할 경우 data필드는 변화하지 않는다. 왜냐하면 새로 created되지 않기 때문이다.  " +
            "<pre class='language-js'><code class='language-js'>" +
            "created: function() {\n" +
            "--this.title = this.$route.params.title\n" +
            "}\n" +
            "</code></pre>" +
            "--만약 이런 코드가 있다면 실제로 'title'은 변하지 않을 것이다.  " +
            "--이 바보같은 행동을 변명하자면 이 사실을 원래는 알고 있었는데 세월이 흘러서 까먹어 버린 것이다. 그래서 멍청하게 그걸 알아차리지 못하고, 엄한 router에 대해서만 검색하고 있었다. 이런 점을 보면 컴퓨터기술은 언어와 비슷하다. 사용하지 않으면 당연한 것 처럼 까먹는다. 심지어 비슷한 기술을 사용하고 있다고 해도 말이다. 앞으로도 계속해서 리마인드 시킬 필요가 있을 것 같다.  " +
            "--글들에 대한 네비게이션을 그냥 리스트로 쭉 늘어놓으려고 했는데 그러면 당연히 너무 길어질 것 같다. 어떻게 할까 생각하다가 형이 만든 개인 블로그를 보니 연도별로 포스트를 나눠놓은 방식이 좋아보여서 그냥 가져다 써보려고 한다. 덕분에 처음에는 index값만 라우터 param으로 넘겼는데 연도에 대한 정보도 같이 넘기도록 수정했다.  " +
            "--연도에 따라서 접고 펴는 기능도 만들 생각이고 지금은 그냥 연도에 따라서 글이 나눠진 것 뿐이다. 접고 펴는 기능은 사실 어렵지 않다. 그냥 선택된 연도만 보여주도록 값을 넘기면 되니까. 오늘 안에 만드는 건 어려울 것 같고 아마 내일?  " +
            "--아니 내일은 주말이구나. 주말에는 코딩을 안한다. 이 얘기도 나중에 한번 해볼 생각이다. 어쨌든 금방 만들어질 것이다.  "
        },
        {
            title: "Back to the past",
            date: 1500000000000,
            text: "--연도별 네비게이션 기능을 테스트 하기 위해 과거로 와서 글을 쓰고있는 중이다. 2017년도의 7월, 2018년 7월인 원래의 시간보다 딱 1년 전으로 돌아온 것이다. 시간이동에 의한 미래의 간섭을 피하기 위해 나 몰래 우리집 방에서 이 글을 쓰고있다. 이 시간대의 나는 아침 11시인 지금까지도 내 뒤에서 잠을 자고 있고, 우리집 멍멍이인 이 시대의 멍제는 나한테 별 관심이 없는지 이 시대의 나와 나란히 누워서 자고있다. 웃기는 관경이다.  " +
            "--이 여름에 내가 무었을 했던가가 잘 기억이 나지를 않는다. 꽤 즐겁게 보낸 것 같은데 돌아보니 크게 기억에 남는 일이 있지는 않았던 모양이다. 공연을 하고 합주하고 한 기억은 나지만 사실 거의 까먹고 있었다. 그렇다면 2018년의 여름은 과연 기억에 남을만 한 여름이 될 것인가 하는 생각도 든다. 이젠 더이상 학생도 아니고 여름방학도 없다. 그렇다면 나는 무엇을 할 것인가?  " +
            "--계획은 없다. 휴가며 일이며 공부며 게임이며 자잘한 일들을 하기는 하겠지만 내년 여름이 되면 또 모르지, 기억이 안날지도 모르겠다.  " +
            "--사실 기억에 남느냐는 그다지 상관 없을지도 모른다. 나는 애초에 뭔가를 자세하게 기억하면서 사는 편도 아니다. 오히려 좋았던 일 보다는 안좋았던 일을 더 자세히, 오래 기억하는 편이다. 그 기억으로 인해 스트레스를 받거나 하지는 않지만 이따금씩 스쳐지나가면서 기분을 상하게 만든다. 웃기는 것은, 그렇게 떠오른 안좋은 기억도 금새 까먹는다는 것이다." +
            "--편한 성격이고 나는 이 성격이 좋다.  " +
            "--2017년의 내가 슬슬 깨어날 것 같으니 이만 돌아가야겠다. 타임페트롤도 시간이동의 징후를 알아차리고 슬슬 나를 잡으러 올 시간이다!  " +
            "--같은 상상을 하는 건 즐거운 일이다. 재미있는 과거지만 재미있는 미래가 되기를 더 희망해 본다. 테스트 결과는 만족스럽다. 제대로 연도에 따라 리스트 시키고 있다.  "
        },
        {
            title: "한국의 대기업, 그리고 소프트웨어",
            date: 1530680351754,
            text: "--대기업은 어디에나 있다. 꼭 한국에만 있는 것도 아니고 외국의 유명한 대기업을 들어보라고 해도 몇 가지는 나올 수 있다. 하지만 나는 한국인이고 다른 나라의 대기업에 대해서는 모른다. 그러니 내가 아는 그 치들을 생각해 보고자 한다. 사실 이는 고찰이라고 하기 보다는 푸념이기도 하고 의문이기도 하다.  " +
            "--내가 한국의 대기업에 대해서 이상하게 생각하는 것 중 하나가 높은 자리의 사람들이 너무 많은 결정권을 가지고 그 결정에 대한 파급력이 너무 강하다는 사실이다. 예를들어 타이어를 만드는 대기업이 있을 때 그 회사의 사장이 오늘 부로 타이어는 빨간색으로 만듭니다. 라고 하면 정말로 다들 다음날부터 빨간색으로 타이어를 생산하기 시작할 것이다. 물론 이는 극단적인 예를 든 것이지만 계곡 물 흐르듯이 명령이 전달된다는 것은 분명히 사실이다.  " +
            "--명령이 잘 전달된다는 것은 반드시 단점만은 아니다. 꼭 군대가 아니라도 위의 입장을 빠르게 밑으로 전달하는 건 중요한 일이다. 하지만 다들 느끼겠지만 타이어를 빨간색으로 만들라는 것은 무리한 일이다. 그런 이상한 명령까지(혹은 이런 이상한 명령일수록) 순조롭게 밑으로 전달된다는 것은 분명히 잘못된 것이다. 타이어 공장을 생각해보자, 이미 까만색으로 타이어를 만드는 제조라인이 다 만들어져 있는데 당장에 공정을 바꿔야 할 판인 것이다. 그런데 웃기는 것은 다들 그게 어려운 일이라고 욕을 하면서도 어떻게 해서든 해낸다. 이는 결코 좋은 일이 아니다. 한국 대기업의 머리들은 대부분 실무를 정말로 제대로 해본 사람이 아니다. 그런 사람들은 무리한 업무를 명령 -> 무리한 업무를 무리해서 처리 -> 무리한 명령도 되는구나! 라고 생각하게 될 것이다.  " +
            "--이를 소프트웨어로 생각해보면, 소프트웨어를 관리함에 있어서 버전과 순차적 업그레이드는 중요하다. 1.0버전이 갑자기 1.5버전으로 업그레이드 되는 것은 분명히 이상하며 불가능하다. 여러 기능들이 한번에 업그레이드되면 좋기는 하겠지만 그 side effect를 소프트웨어와 개발자들이 감당하기에는 너무 많은 시간과 노력을(순차적으로 업그레이드 한 것보다 더 많은 시간과 노력을) 필요로 할 것이다. 아마 대부분의 실무자들은 이런 사실을 알고 있을 것다. 하지만 여기에 대기업이 껴버리면 얘기가 복잡해진다.  " +
            "--머리들, 그들은 일단 명령을 내리고 본다. 애초에 그들은 소프트웨어를 잘 모른다. 그렇기 때문에 1.5버전을 2.0버전으로, 2.0버전을 2.5버전으로 업그레이드 시켜줄 것을 간단히 요구할 수 있다. 만약 작은 기업이었다면, 그건 안돼요, 불가능합니다 라고 얘기 하는 사람이 있었을지도 모른다. 하지만 한국의 대기업은 그들에게 너무 많은 힘을 준다. 때문에 실무자라고 해도 암요, 하고 말고요. 라고 해버리고 마는 것이다. 그렇게 잘못된 명령은 아무런 방어라인 없이 그대로 실무자의 손에 떨어지게 된다.  " +
            "--사실 나는 그러한 잘못된 명령을 막아야 하는 입장에 있는 사람들을 잘 모른다. 그들이 어떤 개발자이고 어떤 자리에 있는지는 더더욱 모른다. 아무리 실력좋은 개발자라도 위에서 말하면 어쩔 수 없는거야, 라고 생각할지도 모른다. 하지만 일단 그러한 명령이 옳은 소프트웨어 관리 방식은 절대 아니기 때문에, 그리고 이걸 그들도 알고 있다는 걸 내가 알기 때문에, 그들을 좋은 개발자라고 부르기가 꺼려진다. 나는 그들보다 좋은 개발자야! 라고 말하는 게 아니다. 다만 그 무리한 일을 같이 해야하는 내 입장에서 그들을 절대 좋게 말할 수 없을 따름인 것이다. 심지어 지금 이 순간까지 버전 업그레이드의 필요성을 계속해서 어필해온 우리의 입장에서는 더 말이다.  "
        },
        {
            title: "일본, 후쿠오카, 2018 7 14 ~ 17",
            date: 1531993600997,
            text: "--회사에서 여름휴가를 받아서 후쿠오카를 다녀왔다. 나는 원래 계획을 다 짜고 그거에 맞게 돌아다니는 걸 좋아하는 편이지만 이번 후쿠오카 여행은 그러지 않았다. 날이 너무 더울 것 같아서 일부러 돌아다닐 계획을 만들지 않기도 했고 사실 이미 한 번 다녀온 적이 있는 후쿠오카를 또 계획을 만들고 해서까지 가야 할 필요가 없었다. 이미 다 아는 곳이었다는 얘기다.  " +
            "--그렇다고 재미없었다는 말은 아니다. 물론 내가 가보지 않은 곳을 돌아다니는 걸 익숙한 것 보다 좋아하기는 하지만 일본이라면 조금 얘기가 달라진다. 나도 어차피 어느정도는 오타쿠 기질이 있기 때문에 여러 상품들을 보러다니는 것을 좋아하기도 하고 우선 음식이 입에 맞는다. 후쿠오카를 생각하면 나한테 가장 먼저 떠오르는 건 먹을거리다. 관광? 으로 생각하면 후쿠오카 시내는 그다지 볼 게 없다. 뭔가 보려고 하면 멀리 나가야 하고 34도의 날씨를 생각하면 마음의 거리도 멀어진다.  " +
            "  " +
            "<img src='https://postfiles.pstatic.net/MjAxODA3MjBfOTMg/MDAxNTMyMDc5OTE2MzAx.37k3WQ4L2p3BuUcjoQDMvHImDEFB-PYD4phvOeFzqB0g.tpdRdLU6YgqWW7nMbmhiXu0TjP_nigciG3BqcUSZN9Yg.JPEG.ninanung/1.jpg?type=w773' style='width: 100%; height: auto;' />  " +
            "--첫날은 저녁 6시나 되어서야 숙소에 도착했기 때문에 저녁을 바로 먹으러 나갔다. 사진은 하카타 라면 스타디움에 있는 많은 라면집 중 하나의 라면. 설명이 이상한 걸 보면 짐작이 가지만, 저번 후쿠오카 여행에서 갔다가 맛있어서 장소만 기억하고 있었다. 가게 이름도 모르고 라면 이름도 모른다.  " +
            "  " +
            "--그 날은 딱히 예정이 없었다. 저녁을 먹은 캐널시티에서 숙소로 천천히 걸어서 돌아가다가 편의점을 터는게 예정이라면 예정이었다. 그런데 분위기가 좀 이상했다. 주말이라 사람이 많은 건 이해하지만 거대한 가마가 전시되어 있는 것은 물론, 전통의상을 입고 돌아다니는 사람들도 있었다. 여름과 유카타, 어지간히 일본만화륾 많이 본 우리 일행이 축제가 있을지도 모른다는 사실을 깨닫는 것에 많은 시간이 걸리지 않았다. 인터넷을 뒤져보니 7월 15일 까지 '하카타 기온 야마카사' 라는 마츠리가 있다는 걸 알아냈다. 장소는 캐널시티와 가까운 쿠시다 신사. 우리는 바로 방향을 바꿨다.  " +
            "  " +
            "<img src='https://postfiles.pstatic.net/MjAxODA3MjBfMTMg/MDAxNTMyMDc5OTE2MzQ3.vzLXW-6NVt2Z4iETPqIn9k2Su7Ysd0vHbAtsf6AR6FUg.ZBk9arF5WHqbiL4dlIBSRS0SGZS_5Esrnf2lHIUSFPgg.JPEG.ninanung/6.jpg?type=w773' style='width: 100%; height: auto;' />  " +
            "<img src='https://postfiles.pstatic.net/MjAxODA3MjBfMTcw/MDAxNTMyMDc5OTE2NTcz.x-N0fX2sjg_9GhkOTLA2iUBXuW57yhEZ3NehOw2uNLcg.NyanRMUe3L514RiC3nwiDvQXt4I_i9xZVmYa-GJGB20g.JPEG.ninanung/7.jpg?type=w773' style='width: 100%; height: auto;' />  " +
            "--첫번째 사진이 캐널시티에 전시되어 있던 축제용 가마, 애니메이션 캐릭터, 장수 등이 알록달록 꾸며져 있다. 이런 가마가 후쿠오카 시내 여기저기에 14개가 있다는데 다 보지는 못했다. 이 가마는 일본의 괴수영화인 고질라가 장식되어 있는데, 가마 뒤를 보면 건물 유리에 고질라를 홍보하는 영상을 틀고있다. 캐널시티에서 하는 일종의 행사인 모양. 재미있는 건, 중간에 스마트폰으로 캐널시티 홈페이지로 접속하라는 문구가 나오고 페이지에 들어가보면 버튼이 있는데 그 버튼을 누르면 고질라를 공격할 수 있다. 내가 행사를 보고있을 때는 사람들이 영상만 찍느라 공격을 안해서 결국 졌다.  " +
            "--두번째 사진이 쿠시다 신사에 있던 노점이다. 규모는 작지만 오코노미야끼나 타코야끼나 가면같은 일본느낌 나는 것들을 팔고 있었다. 맛있어 보였는데 배가 너무 불러서 못먹었다.  " +
            "  " +
            "--신사까지 걸어가면서 마츠리에 대한 정보를 모았는데 알고보니 본 행사 시작이 다음날 새벽 5시였다. 행사에는 여러 팀들이 있는데, 각 팀은 가마를 들고 5km를 얼마나 빨리 가느냐를 경쟁하는 모양이었다. 일행과 얘기를 하면서도 새벽 5시가 너무 마음에 걸렸다. 그렇게 일찍 일어나서 행사를 보면 그날 여행이 너무 피곤하지 않겠느냐, 그래도 좋은 경험이고 기회인데 보는게 좋지 않겠느냐 하는 얘기를 하다가 그냥 보기로 결정을 내렸다. 일행은 몰라도 나는 볼건 다 보자는 주의이기 때문에 내가 조금 밀고나간 감도 없지는 않았다. 신사를 둘러본 우리는 다시 예정대로 숙소로 돌아가서 사온 맥주와 안주를 먹으면서 첫날을 마무리 했다.  " +
            "--결론부터 말하자면, 늦게 일어나서 보지 못했습니다 하는 일은 일어나지 않았다. 제때 일어나서 잘 나갔다. 도시 전체의 행사인 건지, 그 새벽에도 사람들과 차들이 모두 같은 방향으로 가는 모습이 흥미로웠다.  " +
            "  " +
            "<img src='https://postfiles.pstatic.net/MjAxODA3MjBfMjkw/MDAxNTMyMDc5OTE2NjU2.uGdc5p-Z6udVz2Sx2kqAmHRqMi9UplJL6ZBDPEbTS9Ag.DqDLCnB6e7ZinJO3TGSXDTJ93pr1330TTPZ8GqLVhegg.JPEG.ninanung/8.jpg?type=w773' style='width: 100%; height: auto;' />  " +
            "--이 사진이 행사에 사용할 가마와 사람들이다, 사람이 옮겨야 하기 때문에 캐널시티에 있던 그 가마보다는 작다. 저 가마만 해도 무게가 엄청나디고 한다.  "
        }
    ]
}