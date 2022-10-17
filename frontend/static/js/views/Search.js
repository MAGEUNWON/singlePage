import AbstractView from "./AbstractView.js";
// import Search from "../jsScript/allMoviePage.js";
import "../../css/search.css";




export default class extends AbstractView{
  constructor(){
    super();
    this.setTitle("Search");
    // this는 생성된 인스턴스를 가리킴. super가 반환한 인스턴스가 this에 바인딩 됨.
  }
  // 서브클래스


  async getHtml(){
    return `
    <main id = "main">
      
    <div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div>
      <div></div>
    </div>

  </main>
    `;
  }
  // 메서드 오버라이딩
}