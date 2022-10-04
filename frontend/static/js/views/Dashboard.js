import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor(){
    super();
    this.setTitle("Dashboard");
    // this는 생성된 인스턴스를 가리킴. super가 반환한 인스턴스가 this에 바인딩 됨.
  }
  // 서브클래스

  async getHtml(){
    return `
        <h1>Welcome!</h1>
        <p>This is Dashboard page.</p>
        <a href = "/posts" data-link>
            View recent posts
        </a>
    `;
  }
  // 메서드 오버라이딩
}
// 클래스는 상속을 통해 다른 클래스를 확장할 수 있는 문법인 extends키워드가 기본적으로 제공. 하지만 생성자 함수는 클래스와 같이 상속을 통해 다른 생성자 함수를 확장할 수 있는 문법이 제공되지 않음. 

// 클래스 상속을 통해 AbstractView클래스를 다시 확장

// 메서드 내에서 super를 참조하면 수퍼클래스의 메서드를 호출할 수 있음. getHtml()은 수퍼클래스의 프로토타입 메서드 getHtml을 가리킴. 단, super GetHtml 즉, AbstractView.prototype.getHtml을 호출할 때 call 메서드를 사용해 this를 전달해야 함. 

