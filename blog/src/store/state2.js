/* eslint-disable */
const topic = {
    test: 'Test',
    chat: 'Chat',
    dev: 'Dev',
    tra: 'Travel',
}

export default {
    postList: [
        {
            title: 'pm2 모듈과 멍청이',
            date: 1547716087708,
            topic: topic.dev,
            text: '--토픽을 Dev로 골랐는데 사실 그렇게 개발스러운 얘기를 하지는 않을 것 같다. 근황과 근황과 관련된 몇가지 코딩관련 얘기들을 해볼까 한다.  ' +
            '<h3>1. 멍청이</h3>  ' +
            '  ' +
            '--얼마전, 갑자기 무슨 바람이 불었는지 ES6에서 변경된 Javascript문법들을 한번 본적이 있다. 그렇게 이런? 생각한 것보다 내가 놓치고 있던 것들이 너무 많았다. 지나간 코드들이 영화처럼 눈앞을 지나가면서 그때 그 코드를 썼으면 10줄은 줄였을 텐데, 하는 생각이 들었던 것이다. 특히 for문에 초가되었던 for-of구문이 있는데, 그게 그렇게 눈에 들어왔다.  ' +
            '--지금까지 아무것도 모르고 일반 for문으로 배열에 length를 구해서 돌렸던 루프를 생각하면 지구 세바퀴 반은 돌았을 것이다. 그것 말고도 나머지 연산자나 템플릿 문자열과 같이 유용해 보이는 것들이 너무 많았다. 사실 지금까지는 급하게 코드만 짜내는 일을 해왔다. 실력도 초보고 아는것도 없으니 일단 많이 해야한다는 강박이 있었는데, 지금부터는 알아야 할 것들을 파악하고 다시 확인하는 시간이 필요할 것 같다.  ' +
            '--아마 시간이 된다면, 개인적으로 문법을 정리하거나, 지나간 프로젝트들에서 ES6문법을 사용하면 코드를 줄일 수 있는 부분을 찾아서 수정하면서 공부를 진행할 수 있지 않을까 싶다.  ' +
            '  ' +
            '<h3>2. pm2</h3>  ' +
            '  ' +
            '--내가 현재 일하는 회사는 특정 소프트웨어를 판매하고 관리하고 커스텀하는 일들을 많이 한다. 그 과정에서 여러가지 테스트를 위한 서버들이나 관리를 위한 서버들이 많은데, 그러한 서버들이 평소에 살아있는지 아닌지 사실 접속하기 전까지는 알 방법이 없다. 그래서 TCP ping을 이용한 서버 생존보고 봇을 만들어 Mattermost에서 알림을 받을 수 있게 했는데, 그 과정에서 서버를 올리기 위해 사용한게 바로 pm2였다.  ' +
            '--pm2를 간단하게 말하면, Node.js서버를 관리해 주는 툴이다. 몇가지 커맨드를 실행해서 서버를 실행하거나 멈추거나 재시작하거나 리스트를 받아볼 수 있다. 그 중에서도 가장 마음에 드는 기능은, 자동 재시작 기능이다. 기본적으로 Node.js서버는 코드에 문제가 있을경우 서버가 꺼져버린다. 죽어버힌다는 얘기다. 테스트 환경에서는 상관이 없지만 불안정한 임시 릴리즈 상황에라면? 이렇게 죽어버려서는 안된다.  ' +
            '--바로 그럴때 pm2는 해다 서버를 다시 살리고 카운트를 표시한다. 그걸 통해서 나는 해당 서버에 문제가 있음을 짐작할 수 있다. 완벽한 서버 호스팅 서비스! 라고 말하는 건 아니다. 단지 그 단계를 도와줄 수 있을 것 같다. 아직 사용하는 도중이라 잘 모르지만, 서버 클러스터링 기능도 있기는 한 것 같았다. Docker + pm2를 이용한 간단한 서버 호스팅도 고려해 볼 만 할 것같다.' +
            '  ' +
            '<h3>3. Github private repository</h3>  ' +
            '  ' +
            '--깃허브의 클라우드 서버 서비스(그냥 깃허브 페이지)는 일반등급 유저에 대해서는 원래 개인저장소 기능을 지원하지 않았었다. 모두 퍼블릭으로만 가능했는데, 이번달-아니면 저번달 일지도-에 일반 사용자도 몇개의 개인저장소를 만들 수 있도록 변경되었다. 이걸 원래 알고는 있었는데, 사실 나는 그렇게 보안에 유의해야할 작업을 하는 편은 아니라서 쓸 일이 없었다.  ' +
            '--그런데 이번에 위에서 말한 ping 봇을 만들면서 테스트를 하다가, 회사의 서버정보가 담긴 파일을 커밋하고 푸시해버렸던 것이다. 멍청이라고 밝힌 바 이미 벌어진 일이니 수습을 해야겠는데, 만들기 바빠서 고치기가 너무 귀찮았다. 깃으로 rebase해서 해당 커밋 변경하고 하기가 귀찮았던 것이다. 그래서 그냥 개인저장소로 돌려버리자 라는 생각을 했던 것이다.  ' +
            '--실제로 해보니 잘 동작하는 것 같았다. 그런데 이게 버그인지 아니면 의도한건지 모르겠으나, 커밋 이력을 보여주는 초록색 표시에서 master branch에 대한 커밋만 표시가 되는 모양이다. 정작 커밋은 거진 여섯일곱은 했는데 보여지는건 달랑 하나면 뭔가 기분이 좀 그렇다. 초록색을 채우는 맛이 또 있는 것인데 말이다.  ' +
            '--아, 무슨 상태를 표시하는 status기능이 생겼는데, 사실 그리 쓸모있고 기능이 좋은 부분은 아닌 것 같다. 그냥 그렇구나 싶은 정도?  '
        }
    ]
}