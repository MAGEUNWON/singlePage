export default class{
  constructor(){

  }

  setTitle(title){
    document.title = title;
  }
  // 페이지 타이틀

  // async (){
  //   return"";
  // }

  async getHtml(){
    return"";
  }
  // 뿌려질 Html

}
// 수퍼클래스

// 이 파일을 통해 모든 페이지의 초기 세팅을 해줌. 
// Default Page Class를 생성해 두고 클래스 상속을 통해 AbstractView클래스를 다시 확장. 클래스를 상속받아 페이지를 구성. 
