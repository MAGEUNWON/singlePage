import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor(){
    super();
    this.setTitle("Setting");
  }

  async getHtml(){
    return `
      <h1>Posts</h1>
      <p>Yor're viewing the Setting!</p>
      `;
  }
}