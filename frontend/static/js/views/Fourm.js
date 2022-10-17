import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor(){
    super();
    this.setTitle("Fourm");
    // this는 생성된 인스턴스를 가리킴. super가 반환한 인스턴스가 this에 바인딩 됨.
  }
  // 서브클래스

  async getHtml(){
    return `
        <h1>게시판 화면</h1>
        <a href = "/" data-link>
            메인으로 가기
        </a>
    `;
  }
  // 메서드 오버라이딩
}