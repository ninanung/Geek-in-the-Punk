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
            text: "<img src='./static/photos/japan-20180714/1.jpg' style='width: 100%; height: auto;' />  " +
            "--첫날 저녁, 여섯시에 숙소에 도착하고 바로 나가서 하카타 라면 스타디움에서 먹은 돈코츠 라면. 2년전에 후쿠오카를 왔을 때 먹고 기억하고 있던 맛이었다. 항정살로 만든 두껍지만 부드러운 차슈와 냉동시켜둔 잔에 따라주는 생맥주가 정말 좋았다.  " +
            "  " +
            "<img src='./static/photos/japan-20180714/2.jpg' style='width: 100%; height: auto;' />  " +
            "--둘째 날 점심으로 먹은 100엔스시, 여기도 2년전에 왔던 곳인데 가성비가 좋고 맛있다. 개인적으로 여행에서 갔던 곳을 또 가는걸 좋아하지 않지만 음식이라면 얘기가 다르다. 새로운 맛도 좋지만 모험은 사절이다.  " +
            "  " +
            "<img src='./static/photos/japan-20180714/3.jpg' style='width: 100%; height: auto;' />  " +
            "--둘째 날 저녁에 먹은 야끼니쿠, 주문한 양에 따라 계산하는 방식이 아니라 기본이 '타베호다이'이고 '노미호다이'를 추가 가능하다. 한마디로 고기 무한리필과 술무한리필집. 여긴 이번 여행으로 처음 가본 곳이지만 좋았다. 다시 후쿠오카를 간다면 가는걸 고려해 볼 만 하다.  " +
            "  " +
            "<img src='./static/photos/japan-20180714/4.jpg' style='width: 100%; height: auto;' />  " +
            "--셋째 날 저녁에 먹은 모츠나베, 곱창전골이다. 이 가게도 처음 가본 곳이었다. 문이 옛날 방식이라 굉장히 낮아서 처음에는 우리가 뒷문으로 들어가는게 아닌가 하는 의문이 들었지만 거기가 문이 맞았다. 2년전에는 된장맛 국물을 먹었는데 이번에는 간장맛 국물로 먹었다. 개인적으로는 된장이 더 맛있는 것 같다. 간장은 스키야끼와 맛이 비슷하다.  " +
            "  " +
            "<img src='./static/photos/japan-20180714/5.jpg' style='width: 100%; height: auto;' />  " +
            "--마지막 날 먹은 돈까스, 가게 이름이 기억 안나는데 유명한 체인점이다. 체인점의 장점은 보증된 맛과 가격. 나는 가츠동을 먹었는데 한국에서 먹는 것에 비해 더 짜지만 전체적으로 부드러운 맛이었다. 만족스러운 마지막 식사였다.  " +
            "  " +
            "<img src='./static/photos/japan-20180714/6.jpg' style='width: 100%; height: auto;' />  " +
            "--첫날 간 캐널시티에서 하던 고질라 영화 관련 행사와 '하카타 기온 야마카사'라는 후쿠오카의 마츠리에서 쓰는 장식용 가마를 찍은 것이다. 고질라 행사라서 그런지 가마에도 고질라가 장식되어 있었다. 행사중에 고질라와 싸우는 시나리오로 영상을 건물 벽으로 쏴서 틀어주는데 중간에 스마트폰으로 캐널시티 홈페이지에 접속하면 고질라를 공격할 수 있는 이벤트가 있다. 주변 사람들이 핸드폰으로 영상만 찍고 공격을 안해서 결국 졌다.  " +
            "  " +
            "<img src='./static/photos/japan-20180714/7.jpg' style='width: 100%; height: auto;' />  " +
            "--위의 사진에서 얘기한 마츠리가 시작되는 쿠시다 신사의 노점. 가게가 몇 없기는 하지만 오코노미야끼나 타코야끼, 가면, 꼬치 등 일본스러운 것들을 팔고있었다. 맛있어 보이긴 했지만 저녁을 먹은 직후라 배가 불러서 못먹었다.  " +
            "  " +
            "<img src='./static/photos/japan-20180714/8.jpg' style='width: 100%; height: auto;' />  " +
            "--첫날 저녁 우연히 알게된 '하카타 기온 야마카사' 마츠리에서 실행하는 가마옮기기 장면. 위의 사진에서 얘기한 장식용 가마는 사람이 옮기기에 너무 무겁고 더 작은 가마를 사용한다. 몇개의 팀이 있는데 남자들이 가마를 매고 5km를 얼마나 빨리 가느냐를 경쟁한다. 참고로 행사 시작은 새벽5시, 신기하고 새로운 경험이었지만 피곤했다."
        },
        {
            title: "docker",
            data: 1532943067331,
            text: "<img src='./static/photos/docker.jpg' style='width: 100%; height: auto;' />  " +
            "--docker는 흥미롭다. 왜인지 잘 모르겠으나 docker는 내 흥미를 불러 일으킨다. 재미있는 장난감을 발견한 기분이기도 하다. 시작하면서 말하자면 참고로 이 글은 docker에 대한 사용설명서가 아니라 나의 개인적인 감상이다.  " +
            "--docker는 컨테이너라고 하는 일종의 VM을 만들어서(하지만 엄밀히 말하면 VM하고는 다르다.) 개발환경을 구성하는 데 도움을 준다. 각각의 컨테이너는 독립적이며 서로 분리되어 있다. 물론 설정을 통해 컨테이너끼리 연결시키거나 인터넷 환경, 파일을 공유할 수 있지만 기본적으로는 하나의 개별적인 존재로 보는게 맞다. 나는 이 개념을 처음 생각할 때 '하나의 컨테이너 = 하나의 컴퓨터'로 이해했는데 완전히 틀린 이해는 아니었다. docker의 기본적인 사용목적인 서버로 생각해 본다면, docker는 하나의 컴퓨터에 여러개의 컨테이너를 구축해서 여러개의 서버를 '안정적'으로 구성할 수 있다. 이 을마나 믓찐 일인가?  " +
            "--docker에 대한 설명을 이 글에서 하려면 image, Dockerfile, docker-compose, docker swarm, docker machine 등등 해야 할 얘기가 너무 많고 처음에 얘기했듯이 이건 설명글이 아니다. 그럼 무슨 글이냐? 내가 왜 docker에 흥미를 가지는가에 대한 얘기이다.  " +
            "--나는 표면적으로 프론트엔드 개발자다. 실제로도 그 분야의 기술을 익히고 익숙하게 사용할 수 있게 되는 것에 많은 시간을(혹은 대부분의 시간을) 썼다. 하지만 엄밀히 말하자면 프론트엔드에 크나큰 흥미를 보이는 것은 아니다. 물론 프론트엔드도 좋아하지만, 그것뿐인 것만은 아니라는 얘기다. 내가 가장 좋아하는 건 뭔가를 내 손으로 '전부'만드는 것이다. 정확히는 뭔가 만들고 싶은 것이 있을 때 그걸 전부 혼자서 만들 수 있는가?에 흥미가 있다. 웹 서비스를 만든다고 하면(실제로 그게 내 일이니까) 나는 '~만 할 수 있는 사람'이기가 싫다. 어린애같은 투정일지도 모르지만 나는 다 알고싶다.  " +  
            "--이 생각은 회사에 와서 더 커졌는데, 서버에 문제가 생겼을 때 나는 아무것도 하지 못했다. 그야 신입사원이니까 라고도 생각은 하지만, 심지어 로컬환경에 서버를 구축하는 것 조차 못하는 사람이었다. 그야말로 '프론트엔드 만'하는 사람이었다. 사실 프론트엔드만 보더라도 공부할 것이 잔뜩있고 어려운 분야라는 것을 알고는 있다. 하지만 나는 기술보다는 뭔가를 만드는 것에 더 흥미가 있고 혼자 '전부'만드는 것에 흥미가 있다. 사실상 이게 내가 docker에 흥미를 가지는 이유다. docker가 있으면 나는 서버를 혼자 구축할 수 있다. docker는 그런 물건이고 아주 흥미롭다.  " +
            "--지금은 docker를 이용한 서버 클러스터링을 보고있는데 일단 현재 목표는 docker를 이용해서 jenkins서버를 그럴듯 하게 구축하여 개인적으로 사용하는 것이다. 배포에는 GCP이나 AWS, 혹은 MS Azure중에 하나를 골라서 쓸 것 같다. 그 작업이 끝나면 아마 Grafana같은 모니터링을 구축하는 시도를 하지 않을까 싶다. 그것도 썩 재미있어 보인다.  "
        }
    ]
}