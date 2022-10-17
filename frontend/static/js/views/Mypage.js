import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(){
    super();
    this.setTitle("Mypage");
  }
  
  async getHtml(){
    return  `
      <h1>내 정보</h1>
      <a href = "/" data-link>
            메인으로 가기
        </a>
      `;
  }
}
