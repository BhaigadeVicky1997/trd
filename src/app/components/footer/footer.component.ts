import { Component } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
/** footer component*/
export class FooterComponent {
    /** footer ctor */
    constructor() {

    }
    ngOnInit(){
      var btt = $("#back-to-top");
        $(window).scroll(function () {
          if ($(window).scrollTop() > 300) {
            btt.addClass("show");
          } else {
            btt.removeClass("show");
          }
        });
        btt.on("click", function (e) {
          e.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, "300");
        });
    }
}
