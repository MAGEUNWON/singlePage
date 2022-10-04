import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";
import NotFound from "./views/NotFound.js";

const navigateTo = url=>{
  history.pushState(null,null,url);
  // history.pushState()를 사용하면 새로고침 없이 페이지 전환을 할 수 있고 뒤로가기, 앞으로가기도 활성화 됨.
  router();
}
// 페이지 전환 함수


const router = async () => {
  const routes = [
    // {path:"/", view: ()=> console.log("Viewing Dashboard")},
    // {path:"/posts", view:()=> console.log("Viewing Posts")},
    // {path:"/settings", view:()=>console.log("Viewing Settings")},
    // {path:"/404", view:()=>console.log("Not Found")}
    // 각 route의 경로와 현재 페이지 확인용 콘솔
    {path: "/", view : Dashboard},
    {path: "/posts", view : Posts},
    {path: "/settings", view : Settings},
    {path: "/404", view : NotFound},
    // view 변경
  ];
  
  // async를 사용하는 이유는, 어떤 페이지에서는 렌더링 전에 서버 단 요청을 먼저 받아야하는 경우가 있기 때문

  const potentialMatches = routes.map(route => {
    return{
      route: route,
      isMatch: location.pathname === route.path
    };
  });
  // 현재 route와 현재 페이지 경로가 일치하는지 테스트 
  // console.log(potentialMatches);

  let match = potentialMatches.find(potentialMatches=>potentialMatches.isMatch);
  // find 메서드를 사용해 isMatch가 true인 객체를 찾음.

  if(!match){
    match = {
      // route: routes[0],
      // isMatch true인 객체가 없을 때 메인 페이지로 이동
      route: routes[routes.length -1],
      // isMatch ture인 객체가 없을 때 404 페이지로 이동
      isMatch: true
    }
  }
  const view = new match.route.view();
  // 활성화된 view 담기

  document.querySelector('#app').innerHTML = await view.getHtml();
  // #app 엘리먼트에 활성화된 view의 html 삽입

  // console.log(match.route.view());
};

window.addEventListener("popstate", router);
// 뒤로가기 하거나 새로고침 했을 때 router도 그 페이지에 맞게 동작하도록 하는 것

document.addEventListener("DOMContentLoaded", () =>{
// DOM이 렌더링 되면 router 함수 실행

  document.body.addEventListener("click", e=>{
    if(e.target.matches("[data-link]")){
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  // data- Attrivute를 활용하여 A태그 이벤트 중단 후 만들어놓은 Custom Route로 보내기
  // 클릭 이벤트가 발생했을 때, 해당 target이 'data-link' attribute가 있으면 페이지 이동 함수 실행

  router();
});

// posts들어가서 콘솔창 확인, URL과 일치하는 route만 true라면 정상적으로 동작한 것.
// match에 아무것도 담기지 않으면 undefined가 출력, routes에 정의되지 않은 경로로 이동할 경우 강제로 default경로로 이동시키거나 Not fonded 404 route 만들어서 보여줄 수 있음. 

// *matches(css선택자): css 선택자로 특정 엘리먼트를 찾음.

// *history.pushState(state, title, URL): 리액트에서는 페이지 전환시 react-router를 사용함. react-router는 history.push를 통해 마치 SSR(Server Side Rendering) 처럼 새로고침 없이 URL도 바꿔주고 루트 엘리먼트의 콘텐츠도 바꿔줌. 이를 Vanilla JavaScript에서 구현하려면 history.pushState를 사용하면 됨.
// *state: 페이지 전환 시 넘겨줄 데이터(없으면 null)
// *title: 변경할 브라우저 title(바꿀 필요 없으면 null)
// *URL: 변경할 URL

// *페이지 이동시 window.onpopstate라는 이벤트가 발생하는데 history.pushState동작시에는 이 이벤트가 발생하지 않음. popstate 이벤트는 뒤로가기나 history.back()을 통해서만 발생. 
// *history.pushState로 페이지 전환 후, 뒤로가기 버튼을 클릭했을 때 라우터가 인식하지 못함. 즉 URL만 바뀌고 페이지 전환은 되지 않음. 따라서 popstate 이벤트 발생 시 (뒤로가기) router도 같이 실행시키는 코드를 작성하는 것.






