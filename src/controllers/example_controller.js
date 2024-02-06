import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "It works!"
    this.element.addEventListener("share-point", this.sharePoint.bind(this));
  }

  sharePoint(point) {    
    console.log("Received point data from Geowidget: ", point);
  }
}
