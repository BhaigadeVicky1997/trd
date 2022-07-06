import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SharedUtils } from './utils/shared-utils';

declare var $: any;

// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterContentInit {
  resetPasswordForm: FormGroup;
  otpForm: FormGroup;
  isSubmitted: boolean = false;
  passwordVisible = false;
  confirmPasswordVisible = false;
  @ViewChild('signInButton') signInButton;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    public _sharedUtils: SharedUtils,
    private _authService: AuthService
  ) {}
  ngAfterContentInit(): void {
    setTimeout(() => {
      this.owlSetup();
    }, 1000);
  }

  ngOnInit(): void {}

  owlSetup() {
    //faq toggle stuff
    $('.wrap-toggle').click(function (e: any) {
      e.preventDefault();
      var notthis = $('.active').not(this);
      notthis.find('.bx-minus').addClass('bx-plus').removeClass('bx-minus');
      notthis.toggleClass('active').next('.wrap-ans').slideToggle(300);
      $(this).toggleClass('active').next().slideToggle('fast');
      $(this).children('i').toggleClass('bx-plus bx-minus');
    });
    $('.partners-owl').owlCarousel({
      loop: false,
      margin: 0,
      dots: false,
      autoplay: true,
      autoPlaySpeed: 5000,
      autoPlayTimeout: 5000,
      autoplayHoverPause: true,
      nav: true,
      navText: [
        '<i class="bx bx-chevron-left"></i>',
        '<i class="bx bx-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
    // hero
    $('.bannerslider').owlCarousel({
      loop: true,
      margin: 10,
      dots: true,
      // nav: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    // testimonials
    $('.testimonials-slider').owlCarousel({
      loop: true,
      margin: 10,
      dots: true,
      // nav: true,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    // policies-slider
    $('.policies-slider').owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      navText: [
        "<div class='nav-btn prev-slide'><i class='bx bx-chevron-left' ></i></div>",
        "<div class='nav-btn next-slide'><i class='bx bx-chevron-right'></i></div>",
      ],
      dots: false,
      autoplay: false,
      slideBy: 'page',
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    // sidebar
    $(function () {
      var $ul = $('.sidebar-navigation > ul');

      $ul.find('li a').click(function (e) {
        var $li = $(this).parent();

        if ($li.find('ul').length > 0) {
          e.preventDefault();

          if ($li.hasClass('selected')) {
            $li.removeClass('selected').find('li').removeClass('selected');
            $li.find('ul').slideUp(400);
            $li.find('a em').addClass('bx-plus');
          } else {
            if ($li.parents('li.selected').length == 0) {
              $ul.find('li').removeClass('selected');
              $ul.find('ul').slideUp(400);
              $ul.find('li a em').addClass('bx-plus');
            } else {
              $li.parent().find('li').removeClass('selected');
              $li.parent().find('> li ul').slideUp(400);
              $li
                .parent()
                .find('> li a em')
                .removeClass('bx-plus')
                .addClass('bx-minus');
            }

            $li.addClass('selected');
            $li.find('>ul').slideDown(400);
            $li.find('>a>em').addClass('bx-minus').removeClass('bx-plus');
          }
        }
      });
    });
    $('.nested-accordion').find('.comment').slideUp();
    $('.nested-accordion')
      .find('h3')
      .click(function () {
        $(this).next('.comment').slideToggle(100);
        $(this).toggleClass('selected');
      });
  }
}
