function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts": function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 146,
      vars: 0,
      consts: [[1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], ["href", "index.html"], ["data-aos", "fade-up", 1, "about"], [1, "row"], [1, "col-lg-6"], ["src", "assets/img/about.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-6", "pt-4", "pt-lg-0"], [1, "font-italic"], [1, "icofont-check-circled"], ["data-aos", "fade-up", 1, "facts", "section-bg"], [1, "row", "counters"], [1, "col-lg-3", "col-6", "text-center"], ["data-toggle", "counter-up"], ["data-aos", "fade-up", 1, "skills"], [1, "section-title"], [1, "skills-content"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success"], [1, "skill"], [1, "val"], ["role", "progressbar", "aria-valuenow", "90", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning"], ["role", "progressbar", "aria-valuenow", "55", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger"], ["data-aos", "fade-up", 1, "testimonials"], [1, "owl-carousel", "testimonials-carousel"], [1, "testimonial-item"], ["src", "assets/img/testimonials/testimonials-1.jpg", "alt", "", 1, "testimonial-img"], [1, "bx", "bxs-quote-alt-left", "quote-icon-left"], [1, "bx", "bxs-quote-alt-right", "quote-icon-right"], ["src", "assets/img/testimonials/testimonials-2.jpg", "alt", "", 1, "testimonial-img"], ["src", "assets/img/testimonials/testimonials-3.jpg", "alt", "", 1, "testimonial-img"], ["src", "assets/img/testimonials/testimonials-4.jpg", "alt", "", 1, "testimonial-img"], ["src", "assets/img/testimonials/testimonials-5.jpg", "alt", "", 1, "testimonial-img"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Ullamco laboris nisi ut aliquip ex ea commodo consequat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Duis aute irure dolor in reprehenderit in voluptate velit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "232");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "521");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "1,463");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Hours Of Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Hard Workers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Our Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "HTML ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "CSS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "90%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "JavaScript ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "75%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Photoshop ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "55%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "section", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Tetstimonials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Saul Goodman");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Ceo & Founder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Sara Wilsson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Jena Karlis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Store Owner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Matt Brandon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Freelancer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "John Larson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Entrepreneur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _play_play_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./play/play.component */
    "./src/app/play/play.component.ts");
    /* harmony import */


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./portfolio/portfolio.component */
    "./src/app/portfolio/portfolio.component.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/team/team.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }, {
      path: 'blog',
      component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    }, {
      path: 'play',
      component: _play_play_component__WEBPACK_IMPORTED_MODULE_7__["PlayComponent"]
    }, {
      path: 'portfolio',
      component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"]
    }, {
      path: 'services',
      component: _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"]
    }, {
      path: 'team',
      component: _team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"]
    }, {
      path: '**',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'moderna';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.hclass-1[_ngcontent-%COMP%] {\r\n    color: #2a81ea;\r\n    font-size: 20px;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n.hclass-5[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    font-weight: 900;\r\n    color: #50658e;\r\n    text-transform: uppercase;\r\n    padding-bottom: 10px;\r\n    padding-left: 6px;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.hclass-6[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    color: #3d4b69;\r\n    padding-bottom: 40px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.hclass-10[_ngcontent-%COMP%] {\r\n    color: #2a81ea;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n    text-align: left;\r\n}\r\n\r\n\r\n.hclass-11[_ngcontent-%COMP%] {\r\n    color: #2a81ea;\r\n    font-size: 18px;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n    padding-top: 50px;\r\n    padding-bottom: 10px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.hclass-15[_ngcontent-%COMP%] {\r\n    color: #2a81ea;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n    text-align: left;\r\n}\r\n\r\n\r\n.hclass-20[_ngcontent-%COMP%] {\r\n    color: #2a81ea;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    text-align: center;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.about-paragraph5[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    margin: 10px;\r\n    text-align: left;\r\n}\r\n\r\n\r\n.about-paragraph50[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    margin: 20px;\r\n    text-align: center;\r\n    margin-top: 0;\r\n}\r\n\r\n\r\n.text-texttt[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #2a81ea;\r\n}\r\n\r\n\r\n.text-texttt2[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    color: #50658e;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.none[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n\r\n.home[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: fixed;\r\n    right: 5%;\r\n    top: 20px;\r\n    z-index: 3;\r\n    width: 35px;\r\n    height: 35px;\r\n    padding: 4px 9px;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n.home[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n    color: #50658e;\r\n\r\n}\r\n\r\n\r\n.home[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n    background-color: rgba(27, 71, 161, 0.8);\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.sticky.is-sticky[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 1000;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.navbar-light[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\r\n    background: rgba(30, 67, 86, 0.8);\r\n    min-height: 65px;\r\n}\r\n\r\n\r\n.home[_ngcontent-%COMP%]   .top-navbar[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #1e4356;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n.navmenu[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    position: fixed;\r\n    z-index: 5;\r\n    width: 250px;\r\n    height: 700px;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 30px;\r\n    color: #1e4356;\r\n}\r\n\r\n\r\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    color: #1e4356;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    padding: 10px 10px;\r\n\r\n}\r\n\r\n\r\n.home[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .top-icon[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    padding: 2px;\r\n    right: 2.5%;\r\n    bottom: 3.5%;\r\n    width: 45px;\r\n    height: 45px;\r\n    line-height: 45px;\r\n    text-align: center;\r\n    background-color: #2b56f5;\r\n    border-radius: 10px;\r\n    z-index: 256255;\r\n    display: none;\r\n}\r\n\r\n\r\n.home[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .top-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 25px;\r\n}\r\n\r\n\r\n.headerContent[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n\r\n.headerContent-heading[_ngcontent-%COMP%] {\r\n    padding: 50px 0 50px;\r\n}\r\n\r\n\r\n.headerContent-heading[_ngcontent-%COMP%]   .headerContent-title[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.headerContent-heading[_ngcontent-%COMP%]   .headerContent-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 72px;\r\n    font-weight: 900;\r\n    color: #50658e;\r\n    text-transform: uppercase;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n.headerContent-heading[_ngcontent-%COMP%]   .headerContent-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 23px;\r\n    font-weight: 600;\r\n    color: #FF5363;\r\n    text-transform: uppercase;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n.headerContent-heading[_ngcontent-%COMP%]   .headerContent-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    color: #50658e;\r\n    text-transform: uppercase;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n.headerContent-heading[_ngcontent-%COMP%]   .headerContent-paragraph[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.headerContent-heading[_ngcontent-%COMP%]   .headerContent-btns[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.fa-shield-alt[_ngcontent-%COMP%] {\r\n    color: white;\r\n    width: 20px;\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\n.fa-arrow-right[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\n.headerContent-heading[_ngcontent-%COMP%]   .headerContent-btns[_ngcontent-%COMP%]   .btn-readmore[_ngcontent-%COMP%] {\r\n    background-color: #2a81ea;\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n    border-radius: 50px;\r\n\r\n}\r\n\r\n\r\n.headerContent-heading[_ngcontent-%COMP%]   .headerContent-btns[_ngcontent-%COMP%]   .btn-readmore[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n\r\n}\r\n\r\n\r\n.headerContent-heading[_ngcontent-%COMP%]   .headerContent-update[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #465675;\r\n\r\n}\r\n\r\n\r\n.headerContent-numbers[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    margin: 50px 10px;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.headerContent-numbers[_ngcontent-%COMP%]   .headerContent-number[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #50658e;\r\n    letter-spacing: 2px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.headerContent-numbers[_ngcontent-%COMP%]   .headerContent-number[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #465675;\r\n    letter-spacing: 2px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.headerContent-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 50px 0 50px;\r\n    border-radius: 20%;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .about-heading[_ngcontent-%COMP%] {\r\n    padding: 50px 20px;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .about-heading[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   .hclass-1[_ngcontent-%COMP%] {\r\n    color: #2a81ea;\r\n    font-size: 18px;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .about-heading[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   .hclass-2[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    font-weight: 900;\r\n    color: #50658e;\r\n    text-transform: uppercase;\r\n    padding-bottom: 10px;\r\n    padding-left: 6px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .about-heading[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   .hclass-3[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    color: #3d4b69;\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .about-menu[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .about-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    border: 1px solid #37235480;\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .about-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    color: #50658e;\r\n    font-size: 18px;\r\n    padding: 20px 20px;\r\n    font-weight: bold;\r\n    border-bottom: 1px solid #2a81ea;\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .about-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .about-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .last-li[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    color: #2a81ea;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border-bottom: none;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .about-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    color: #2a81ea;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.transmission-container[_ngcontent-%COMP%] {\r\n    background-color: #faf7fe;\r\n}\r\n\r\n\r\n.transmission[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.transmission[_ngcontent-%COMP%]   .transmission-heading[_ngcontent-%COMP%]   .transmission-text[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding-top: 50px;\r\n}\r\n\r\n\r\n.transmission[_ngcontent-%COMP%]   .transmission-heading[_ngcontent-%COMP%]   .transmission-text[_ngcontent-%COMP%]   .hclass-2[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    font-weight: 900;\r\n    color: #50658e;\r\n    text-transform: uppercase;\r\n    padding-bottom: 10px;\r\n    padding-left: 6px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.transmission[_ngcontent-%COMP%]   .transmission-heading[_ngcontent-%COMP%]   .transmission-text[_ngcontent-%COMP%]   .hclass-3[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    color: #3d4b69;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n.transmission[_ngcontent-%COMP%]   .transmission-heading[_ngcontent-%COMP%]   .transmission-layout[_ngcontent-%COMP%]   .transmission-content[_ngcontent-%COMP%] {\r\n    padding: 30px 10px;\r\n}\r\n\r\n\r\n.transmission[_ngcontent-%COMP%]   .transmission-heading[_ngcontent-%COMP%]   .transmission-layout[_ngcontent-%COMP%]   .transmission-content[_ngcontent-%COMP%]   .transmission-text[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n.transmission[_ngcontent-%COMP%]   .transmission-heading[_ngcontent-%COMP%]   .transmission-layout[_ngcontent-%COMP%]   .transmission-content[_ngcontent-%COMP%]   .transmission-img[_ngcontent-%COMP%] {\r\n    border-bottom: 10px solid #2a81ea;\r\n    border-radius: 15px;\r\n\r\n}\r\n\r\n\r\n.transmission[_ngcontent-%COMP%]   .transmission-heading[_ngcontent-%COMP%]   .transmission-layout[_ngcontent-%COMP%]   .transmission-content[_ngcontent-%COMP%]   .transmission-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n\r\n.transmission[_ngcontent-%COMP%]   .transmission-heading[_ngcontent-%COMP%]   .transmission-layout[_ngcontent-%COMP%]   .transmission-content[_ngcontent-%COMP%]   .about-paragraph4[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    margin: 10px;\r\n    text-align: left;\r\n\r\n}\r\n\r\n\r\n.transmission[_ngcontent-%COMP%]   .transmission-heading[_ngcontent-%COMP%]   .transmission-layout[_ngcontent-%COMP%]   .transmission-btn[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: auto;\r\n    padding: 50px 30px;\r\n}\r\n\r\n\r\n.transmission[_ngcontent-%COMP%]   .transmission-heading[_ngcontent-%COMP%]   .transmission-layout[_ngcontent-%COMP%]   .transmission-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px 30px;\r\n    background-color: #2a81ea;\r\n    border-radius: 20px;\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.symptoms[_ngcontent-%COMP%] {\r\n    padding-bottom: 50px;\r\n}\r\n\r\n\r\n.symptoms[_ngcontent-%COMP%]   .symptoms-heading[_ngcontent-%COMP%]   .contentmain[_ngcontent-%COMP%] {\r\n    margin-bottom: 120px;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n\r\n.symptoms[_ngcontent-%COMP%]   .symptoms-layout[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n\r\n.symptoms[_ngcontent-%COMP%]   .symptoms-layout[_ngcontent-%COMP%]   .symptoms-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n\r\n.symptoms[_ngcontent-%COMP%]   .symptoms-layout[_ngcontent-%COMP%]   .symptoms-content[_ngcontent-%COMP%]   .symptoms-img[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    position: absolute;\r\n    top: 0%;\r\n    right: -20%;\r\n}\r\n\r\n\r\n.symptoms[_ngcontent-%COMP%]   .symptoms-layout[_ngcontent-%COMP%]   .symptoms-content[_ngcontent-%COMP%]   .symptoms-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    height: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n.symptoms[_ngcontent-%COMP%]   .symptoms-layout[_ngcontent-%COMP%]   .symptoms-content[_ngcontent-%COMP%]   .symptoms-text[_ngcontent-%COMP%] {\r\n    background-color: #faf7fe;\r\n    margin-top: 50px;\r\n    text-align: center;\r\n\r\n}\r\n\r\n\r\n.symptoms[_ngcontent-%COMP%]   .symptoms-btn[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    width: 100%;\r\n    flex-wrap: wrap;\r\n\r\n}\r\n\r\n\r\n.symptoms[_ngcontent-%COMP%]   .symptoms-btn[_ngcontent-%COMP%]   .text-btn[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 60%;\r\n    color: #2a81ea;\r\n    padding: 20px 0;\r\n\r\n}\r\n\r\n\r\n.symptoms[_ngcontent-%COMP%]   .symptoms-btn[_ngcontent-%COMP%]   .text-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n\r\n}\r\n\r\n\r\n.symptoms-btn[_ngcontent-%COMP%]   .help-btn[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px 20px;\r\n    background-color: #2a81ea;\r\n    border-radius: 20px;\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.protect[_ngcontent-%COMP%] {\r\n    background-color: #faf7fe;\r\n\r\n}\r\n\r\n\r\n.protect-layout[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n\r\n.protect-layout[_ngcontent-%COMP%]   .protect-content[_ngcontent-%COMP%]   .protect-img[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n    margin: auto;\r\n}\r\n\r\n\r\n.protect-layout[_ngcontent-%COMP%]   .protect-content[_ngcontent-%COMP%]   .protect-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n\r\n.protect[_ngcontent-%COMP%]   .protect-btns[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    padding-bottom: 50px;\r\n\r\n}\r\n\r\n\r\n.protect[_ngcontent-%COMP%]   .protect-btn[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n\r\n.protect[_ngcontent-%COMP%]   .protect1-btn[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #2a81ea;\r\n}\r\n\r\n\r\n.protect[_ngcontent-%COMP%]   .protect-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 10px 30px;\r\n    background-color: #2a81ea;\r\n    border-radius: 20px;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.protect[_ngcontent-%COMP%]   .protect-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    padding-left: 20px;\r\n}\r\n\r\n\r\n.protect[_ngcontent-%COMP%]   .protect-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .protect[_ngcontent-%COMP%]   .protect1-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #2a81ea;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.healthsafety[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n}\r\n\r\n\r\n.healthsafety[_ngcontent-%COMP%]   .healthsafety-content[_ngcontent-%COMP%]   .healthsafety-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    font-weight: 900;\r\n    color: #50658e;\r\n    text-transform: uppercase;\r\n    margin-top: 50px;\r\n    padding: 10px 10px;\r\n}\r\n\r\n\r\n.healthsafety[_ngcontent-%COMP%]   .healthsafety-content[_ngcontent-%COMP%]   .healthsafety-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin-top: 40px;\r\n}\r\n\r\n\r\n.healthsafety[_ngcontent-%COMP%]   .healthsafety-content[_ngcontent-%COMP%]   .healthsafety-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n\r\n.healthsafety[_ngcontent-%COMP%]   .healthsafety-imgs[_ngcontent-%COMP%]   .healthsafety-img[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 30px 0;\r\n}\r\n\r\n\r\n.healthsafety[_ngcontent-%COMP%]   .healthsafety-imgs[_ngcontent-%COMP%]   .healthsafety-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    width: 70%;\r\n    height: 70%;\r\n}\r\n\r\n\r\n.healthsafety[_ngcontent-%COMP%]   .healthsafety-content[_ngcontent-%COMP%]   .healthsafety-text[_ngcontent-%COMP%]   .hs-li[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    line-height: 1.5em;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n.healthsafety[_ngcontent-%COMP%]   .healthsafety-content[_ngcontent-%COMP%]   .healthsafety-text[_ngcontent-%COMP%]   .hs-li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    color: #2a81ea;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.handwash[_ngcontent-%COMP%] {\r\n    padding-bottom: 100px;\r\n}\r\n\r\n\r\n.handwash[_ngcontent-%COMP%]   .handwash-imgs[_ngcontent-%COMP%]   .handwash-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: 90%;\r\n    border-radius: 50%;\r\n    padding: 20px 0;\r\n}\r\n\r\n\r\n.handwash[_ngcontent-%COMP%]   .handwash-imgs[_ngcontent-%COMP%]   .handwash-img[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n    color: #394B6C;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.treatment[_ngcontent-%COMP%] {\r\n    background-color: #2766bb;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding: 50px 0;\r\n}\r\n\r\n\r\n.treatment[_ngcontent-%COMP%]   .treatment-heading[_ngcontent-%COMP%] {\r\n    padding: 50px 0;\r\n}\r\n\r\n\r\n.treatment[_ngcontent-%COMP%]   .treatment-menu[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    background-color: #1b47a1;\r\n    padding: 30px;\r\n    color: white;\r\n}\r\n\r\n\r\n.treatment[_ngcontent-%COMP%]   .treatment-menu[_ngcontent-%COMP%]   .treatment-submenu[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.treatment[_ngcontent-%COMP%]   .treatment-menu[_ngcontent-%COMP%]   .treatment-submenu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n.treatment[_ngcontent-%COMP%]   .treatment-menu[_ngcontent-%COMP%]   .treatment-submenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    color: white;\r\n}\r\n\r\n\r\n.treatment[_ngcontent-%COMP%]   .treatment-menu[_ngcontent-%COMP%]   .treatment-submenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n\r\n.treatment[_ngcontent-%COMP%]   .treatment-menu[_ngcontent-%COMP%]   .treatment-submenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n\r\n.treatment[_ngcontent-%COMP%]   .treatment-heading[_ngcontent-%COMP%]   .treatment-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    color: #73e3ff;\r\n    text-align: left;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n\r\n.treatment[_ngcontent-%COMP%]   .treatment-heading[_ngcontent-%COMP%]   .treatment-text[_ngcontent-%COMP%] {\r\n    color: white;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n\r\n.treatment[_ngcontent-%COMP%]   .treatment-heading[_ngcontent-%COMP%]   .about-paragraph1[_ngcontent-%COMP%] {\r\n    color: white;\r\n    text-align: left;\r\n    margin-bottom: 25px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.protection[_ngcontent-%COMP%] {\r\n    background-color: #f7f9fe;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n\r\n.protection[_ngcontent-%COMP%]   .protection-imgs[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n    display: flex;\r\n}\r\n\r\n\r\n.protection-imgs1[_ngcontent-%COMP%] {\r\n    order: 1;\r\n}\r\n\r\n\r\n.protection-imgs2[_ngcontent-%COMP%] {\r\n    order: 2;\r\n}\r\n\r\n\r\n.protection-imgs3[_ngcontent-%COMP%] {\r\n    order: 3;\r\n}\r\n\r\n\r\n.protection-imgs[_ngcontent-%COMP%]   .protection-imgs2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.protection-imgs[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n}\r\n\r\n\r\n.protection-imgs[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    border: 2px solid #2a81ea;\r\n    background-color: white;\r\n}\r\n\r\n\r\n.protection-imgs[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 25px;\r\n    position: relative;\r\n    justify-content: flex-end;\r\n}\r\n\r\n\r\n.protection-imgs[_ngcontent-%COMP%]   .protection-imgs3[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    color: #3dca93;\r\n    right: 160px;\r\n}\r\n\r\n\r\n.protection-imgs[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    font-size: 20px;\r\n    top: -5px;\r\n}\r\n\r\n\r\n.protection-imgs[_ngcontent-%COMP%]   .protection-imgs1[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    color: #f86168;\r\n    left: 170px;\r\n    top: 5px;\r\n}\r\n\r\n\r\n.protection-imgs[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\n\r\n.protection-imgs[_ngcontent-%COMP%]   .protection-imgs3[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\r\n    justify-content: flex-start;\r\n}\r\n\r\n\r\n.protection-imgs[_ngcontent-%COMP%]   .protection-imgs3[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n}\r\n\r\n\r\n.protection-imgs[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #2a81ea;\r\n    font-size: 14px;\r\n    margin-right: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.frequent[_ngcontent-%COMP%] {\r\n    padding: 100px 0;\r\n}\r\n\r\n\r\n.frequent[_ngcontent-%COMP%]   .frequent-text[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n\r\n.frequent[_ngcontent-%COMP%]   .frequent-box-select[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 95%;\r\n    color: #50658e;\r\n    font-size: 14px;\r\n    padding: 15px 20px;\r\n    margin-bottom: 10px;\r\n    cursor: pointer;\r\n    border: 2px solid #e7e8ff;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n.frequent[_ngcontent-%COMP%]   .frequent-box-select[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.color-frequent.active[_ngcontent-%COMP%] {\r\n    color: #2a81ea;\r\n    border-color: #2a81ea;\r\n}\r\n\r\n\r\n.frequent[_ngcontent-%COMP%]   .frequent-box-select[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    color: #2a81ea;\r\n    border-color: #2a81ea;\r\n}\r\n\r\n\r\n.frequent[_ngcontent-%COMP%]   .frequent-box-select[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n\r\n.frequent-text[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n\r\n.frequent[_ngcontent-%COMP%]   .frequent-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    border: 1px solid #e7e8ff;\r\n    border-bottom: none;\r\n    padding: 0;\r\n    border-radius: 5px;\r\n\r\n}\r\n\r\n\r\n.frequent-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #e7e8ff;\r\n    list-style: none;\r\n    padding: 15px 30px 0;\r\n    color: #465675;\r\n    font-weight: bold;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: #f7fafe;\r\n}\r\n\r\n\r\n.frequent-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding-right: 15px;\r\n    text-align: left;\r\n}\r\n\r\n\r\n.frequent-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    height: 35px;\r\n    padding: 6px 10px;\r\n    margin-bottom: 10px;\r\n    align-items: center;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n.frequent[_ngcontent-%COMP%]   .frequent-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    color: #2a81ea;\r\n}\r\n\r\n\r\n.frequent-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.style-li[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    color: #2a81ea;\r\n    border-bottom: none;\r\n}\r\n\r\n\r\n.hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n\r\n.frequent-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .ul-text[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #e7e8ff;\r\n    padding: 0 20px;\r\n    text-align: left;\r\n}\r\n\r\n\r\n.frequent-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .ul-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #3d4b69;\r\n    line-height: 1.5em;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.frequent-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .ul-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #007bff;\r\n}\r\n\r\n\r\n.frequent-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .ul-text[_ngcontent-%COMP%]   .style-ul[_ngcontent-%COMP%] {\r\n    border: none;\r\n    list-style-type: disc;\r\n    margin-left: 20px;\r\n    border-radius: 0;\r\n}\r\n\r\n\r\n.frequent-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .ul-text[_ngcontent-%COMP%]   .style-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border-bottom: none;\r\n    list-style-type: disc;\r\n    padding: 0;\r\n    cursor: text;\r\n    color: #465675;\r\n    font-weight: normal;\r\n    display: inline-block;\r\n    background-color: white;\r\n}\r\n\r\n\r\n.frequent-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .ul-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span.bold[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    color: #465675;\r\n}\r\n\r\n\r\nsvg[_ngcontent-%COMP%] {\r\n    width: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.blog[_ngcontent-%COMP%] {\r\n    padding-bottom: 50px;\r\n    background-color: #f7f9fe;\r\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-text[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-content[_ngcontent-%COMP%]   .latest-blog[_ngcontent-%COMP%] {\r\n    padding: 12px;\r\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-content[_ngcontent-%COMP%]   .latest-blog[_ngcontent-%COMP%]   .blog-content[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    padding: 30px;\r\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-content[_ngcontent-%COMP%]   .latest-blog[_ngcontent-%COMP%]   .blog-content[_ngcontent-%COMP%]   .blog-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-content[_ngcontent-%COMP%]   .latest-blog[_ngcontent-%COMP%]   .blog-content[_ngcontent-%COMP%]   .blog-text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    color: #465675;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    margin: 20px 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    background-color: #151c2e;\r\n    color: white;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n\r\nfooter[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid rgba(247, 248, 255, 0.1);\r\n    padding: 50px 0;\r\n\r\n}\r\n\r\n\r\nfooter[_ngcontent-%COMP%]   .footer-content1[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n    padding-top: 25px;\r\n\r\n}\r\n\r\n\r\nfooter[_ngcontent-%COMP%]   .footer-content1[_ngcontent-%COMP%] {\r\n    padding-bottom: 50px;\r\n    border-bottom: 1px solid rgba(247, 248, 255, 0.1);\r\n}\r\n\r\n\r\nfooter[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    list-style: none;\r\n    color: white\r\n}\r\n\r\n\r\nfooter[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 5px 0;\r\n\r\n}\r\n\r\n\r\nfooter[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-size: 16px;\r\n}\r\n\r\n\r\nfooter[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #b2bfe0;\r\n    font-size: 14px;\r\n}\r\n\r\n\r\nfooter[_ngcontent-%COMP%]   .footer-up[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n}\r\n\r\n\r\nfooter[_ngcontent-%COMP%]   .footer-down[_ngcontent-%COMP%] {\r\n    padding: 20px 0\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.fa-virus[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    color: #FF5363;\r\n}\r\n\r\n\r\n.fa-phone-square[_ngcontent-%COMP%] {\r\n    padding-right: 20px;\r\n}\r\n\r\n\r\n.fa-question-circle[_ngcontent-%COMP%] {\r\n    margin-right: 15px;\r\n}\r\n\r\n\r\n.fa-check-circle[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    margin-right: 10px;\r\n    margin-top: 15px;\r\n    color: green;\r\n}\r\n\r\n\r\n.fa-times-circle[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (max-width: 990px) {\r\n\r\n    .headerContent-heading[_ngcontent-%COMP%]   .headerContent-numbers[_ngcontent-%COMP%], .headerContent-heading[_ngcontent-%COMP%]   .headerContent-btns[_ngcontent-%COMP%], .headerContent-heading[_ngcontent-%COMP%]   .headerContent-title[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        justify-content: space-evenly;\r\n    }\r\n\r\n    .headerContent-heading[_ngcontent-%COMP%]   .headerContent-btns[_ngcontent-%COMP%]   .btn-readmore[_ngcontent-%COMP%] {\r\n        margin: 20px 0;\r\n    }\r\n\r\n    .protection-imgs1[_ngcontent-%COMP%] {\r\n        order: 2;\r\n    }\r\n\r\n    .protection-imgs2[_ngcontent-%COMP%] {\r\n        order: 1;\r\n    }\r\n\r\n    .protection-imgs3[_ngcontent-%COMP%] {\r\n        order: 3;\r\n    }\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs[_ngcontent-%COMP%]   .protection-imgs3[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        left: 62px;\r\n    }\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs1[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        left: 129px;\r\n    }\r\n\r\n    .symptoms[_ngcontent-%COMP%]   .symptoms-layout[_ngcontent-%COMP%]   .symptoms-content[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        margin-bottom: 50px;\r\n    }\r\n\r\n    .symptoms[_ngcontent-%COMP%]   .symptoms-layout[_ngcontent-%COMP%]   .symptoms-content[_ngcontent-%COMP%]   .symptoms-img[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 0%;\r\n        right: -10%;\r\n    }\r\n\r\n    .about[_ngcontent-%COMP%]   .about-heading[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%], .treatment[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .treatment[_ngcontent-%COMP%]   .treatment-heading[_ngcontent-%COMP%]   .about-paragraph1[_ngcontent-%COMP%], .treatment[_ngcontent-%COMP%]   .treatment-heading[_ngcontent-%COMP%]   .treatment-text[_ngcontent-%COMP%]   .hclass-1[_ngcontent-%COMP%], .headerContent-heading[_ngcontent-%COMP%]   .headerContent-update[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .headerContent-numbers[_ngcontent-%COMP%]   .headerContent-number[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n\r\n    .treatment[_ngcontent-%COMP%]   .treatment-menu[_ngcontent-%COMP%]   .treatment-submenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n\r\n}\r\n\r\n\r\n@media screen and (max-width: 768px) {\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs3[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        color: #3dca93;\r\n        right: 235px;\r\n    }\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs1[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        left: 244px;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 1024px) {\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs3[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        color: #3dca93;\r\n        right: 185px;\r\n    }\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs1[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        left: 195px;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n\r\n    .headerContent-heading[_ngcontent-%COMP%]   .headerContent-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 62px;\r\n    }\r\n\r\n    .headerContent-heading[_ngcontent-%COMP%]   .headerContent-update[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n\r\n    .headerContent-numbers[_ngcontent-%COMP%]   .headerContent-number[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        font-size: 15px;\r\n    }\r\n\r\n    .home[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .top-icon[_ngcontent-%COMP%] {\r\n        right: 10.5%;\r\n    }\r\n\r\n}\r\n\r\n\r\n@media screen and (max-width: 540px) {\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs3[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        color: #3dca93;\r\n        right: 147px;\r\n    }\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs1[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        left: 154px;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 480px) {\r\n\r\n    .navbar-toggler[_ngcontent-%COMP%] {\r\n        margin-right: 50px;\r\n    }\r\n\r\n    .home[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\r\n        right: 14%;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 460px) {\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs[_ngcontent-%COMP%]   .protection-imgs3[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        left: 50px;\r\n    }\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs1[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        left: 109px;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 400px) {\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs3[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        left: 50px;\r\n    }\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs3[_ngcontent-%COMP%], .protection-imgs[_ngcontent-%COMP%]   .protection-imgs1[_ngcontent-%COMP%] {\r\n        padding-right: 5px;\r\n        padding-left: 24px;\r\n    }\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs2[_ngcontent-%COMP%] {\r\n        padding-bottom: 20px;\r\n    }\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs1[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        left: 104px;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 415px) {\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs3[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        right: 100px;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 376px) {\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs3[_ngcontent-%COMP%], .protection-imgs[_ngcontent-%COMP%]   .protection-imgs1[_ngcontent-%COMP%] {\r\n        padding-right: 4px;\r\n        padding-left: 15px;\r\n    }\r\n\r\n}\r\n\r\n\r\n@media screen and (max-width: 360px) {\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs3[_ngcontent-%COMP%], .protection-imgs[_ngcontent-%COMP%]   .protection-imgs1[_ngcontent-%COMP%] {\r\n        padding-right: 0;\r\n        padding-left: 8px;\r\n    }\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs1[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        left: 103px;\r\n    }\r\n\r\n    .protection-imgs[_ngcontent-%COMP%]   .protection-imgs3[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n        left: 45px;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  color: #444;\n}\r\n\r\n\r\na[_ngcontent-%COMP%] {\n  color: #4fa6d5;\n}\r\n\r\n\r\na[_ngcontent-%COMP%]:hover {\n  color: #45beff;\n  text-decoration: none;\n}\r\n\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .font-primary[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\r\n\r\n\r\n\r\n\r\n\r\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  display: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 3px;\n  right: 15px;\n  bottom: 15px;\n  background: #68A4C4;\n  color: #fff;\n  transition: display 0.5s ease-in-out;\n  z-index: 99999;\n}\r\n\r\n\r\n.back-to-top[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  position: absolute;\n  top: 8px;\n  left: 8px;\n}\r\n\r\n\r\n.back-to-top[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #85b6cf;\n  transition: background 0.2s ease-in-out;\n}\r\n\r\n\r\n\r\n\r\n\r\n#header[_ngcontent-%COMP%] {\n  height: 80px;\n  transition: all 0.5s;\n  z-index: 997;\n  transition: all 0.5s;\n  padding: 20px 0;\n  background: white;\n  color: #1e4356;\n}\r\n\r\n\r\n#header.header-transparent[_ngcontent-%COMP%] {\n  background: none;\n}\r\n\r\n\r\n#header.header-scrolled[_ngcontent-%COMP%] {\n  background: rgba(30, 67, 86, 0.8);\n  height: 60px;\n  padding: 10px 0;\n}\r\n\r\n\r\n#header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin: 0;\n  padding: 4px 0;\n  line-height: 1;\n  font-weight: 400;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\r\n\r\n\r\n#header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1e4356;\n  text-decoration: none;\n}\r\n\r\n\r\n#header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  max-height: 40px;\n}\r\n\r\n\r\n#main[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n  position: relative;\n  white-space: nowrap;\n  float: left;\n}\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  color: #1e4356;\n  padding: 10px 15px;\n  transition: 0.3s;\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif;\n}\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav-menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%] {\n  color: #a2cce3;\n  text-decoration: none;\n}\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: calc(100% - 30px);\n  z-index: 99;\n  opacity: 0;\n  visibility: hidden;\n  padding: 10px 0;\n  background: #fff;\n  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\n  transition: ease all 0.3s;\n}\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]:hover > ul[_ngcontent-%COMP%] {\n  opacity: 1;\n  top: 100%;\n  visibility: visible;\n}\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-width: 180px;\n  position: relative;\n}\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  color: #1c3745;\n}\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%] {\n  color: #68A4C4;\n}\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after {\n  content: \"\\ea99\";\n  font-family: IcoFont;\n  padding-left: 5px;\n}\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  top: 0;\n  left: calc(100% - 30px);\n}\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]:hover > ul[_ngcontent-%COMP%] {\n  opacity: 1;\n  top: 0;\n  left: 100%;\n}\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n  padding-right: 35px;\n}\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after {\n  content: \"\\eaa0\";\n  font-family: IcoFont;\n  position: absolute;\n  right: 15px;\n}\r\n\r\n\r\n@media (max-width: 1366px) {\n  .nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    left: -90%;\n  }\n\n  .nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]:hover > ul[_ngcontent-%COMP%] {\n    left: -100%;\n  }\n\n  .nav-menu[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after {\n    content: \"\\ea9d\";\n  }\n}\r\n\r\n\r\n\r\n\r\n\r\n.mobile-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 9999;\n  overflow-y: auto;\n  left: -260px;\n  width: 260px;\n  padding-top: 18px;\n  background: #1e4356;\n  transition: 0.4s;\n}\r\n\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\r\n\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  color: #ddecf5;\n  padding: 10px 20px;\n  font-weight: 500;\n}\r\n\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .mobile-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .mobile-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%] {\n  color: #a2cce3;\n  text-decoration: none;\n}\r\n\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after {\n  content: \"\\ea99\";\n  font-family: IcoFont;\n  padding-left: 10px;\n  position: absolute;\n  right: 15px;\n}\r\n\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   .active.drop-down[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after {\n  content: \"\\eaa0\";\n}\r\n\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n  padding-right: 35px;\n}\r\n\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: none;\n  overflow: hidden;\n}\r\n\r\n\r\n.mobile-nav[_ngcontent-%COMP%]   .drop-down[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\r\n\r\n\r\n.mobile-nav-toggle[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 15px;\n  top: 15px;\n  z-index: 9998;\n  border: 0;\n  background: none;\n  font-size: 24px;\n  transition: all 0.4s;\n  outline: none !important;\n  line-height: 1;\n  cursor: pointer;\n  text-align: right;\n}\r\n\r\n\r\n.mobile-nav-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\r\n\r\n\r\n.mobile-nav-overly[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 9997;\n  top: 0;\n  left: 0;\n  position: fixed;\n  background: rgba(30, 67, 86, 0.9);\n  overflow: hidden;\n  display: none;\n}\r\n\r\n\r\n.mobile-nav-active[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\r\n\r\n\r\n.mobile-nav-active[_ngcontent-%COMP%]   .mobile-nav[_ngcontent-%COMP%] {\n  left: 0;\n}\r\n\r\n\r\n.mobile-nav-active[_ngcontent-%COMP%]   .mobile-nav-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\r\n\r\n\r\n\r\n\r\n\r\n#hero[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90vh;\n  overflow: hidden;\n  position: relative;\n}\r\n\r\n\r\n#hero[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 130%;\n  height: 95%;\n  background: linear-gradient(to right, rgba(30, 67, 86, 0.8), rgba(30, 67, 86, 0.6)), url('hero-bg.jpg') center top no-repeat;\n  z-index: 0;\n  border-radius: 0 0 50% 50%;\n  transform: translateX(-50%) rotate(0deg);\n}\r\n\r\n\r\n#hero[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 130%;\n  height: 96%;\n  background: #68A4C4;\n  opacity: 0.3;\n  z-index: 0;\n  border-radius: 0 0 50% 50%;\n  transform: translateX(-50%) translateY(18px) rotate(2deg);\n}\r\n\r\n\r\n#hero[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n}\r\n\r\n\r\n#hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 30px;\n  font-size: 48px;\n  font-weight: 700;\n}\r\n\r\n\r\n#hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 80%;\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n  margin: 0 auto 30px auto;\n  color: #fff;\n}\r\n\r\n\r\n#hero[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n  width: 10%;\n}\r\n\r\n\r\n#hero[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%] {\n  background: none;\n  font-size: 48px;\n  line-height: 1;\n  width: auto;\n  height: auto;\n}\r\n\r\n\r\n#hero[_ngcontent-%COMP%]   .btn-get-started[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  letter-spacing: 1px;\n  display: inline-block;\n  padding: 12px 32px;\n  border-radius: 50px;\n  transition: 0.5s;\n  line-height: 1;\n  margin: 10px;\n  color: #fff;\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s;\n  border: 2px solid #68A4C4;\n}\r\n\r\n\r\n#hero[_ngcontent-%COMP%]   .btn-get-started[_ngcontent-%COMP%]:hover {\n  background: #68A4C4;\n  color: #fff;\n  text-decoration: none;\n}\r\n\r\n\r\n@media (min-width: 1024px) {\n  #hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n\n  #hero[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n    width: 5%;\n  }\n}\r\n\r\n\r\n@media (max-width: 768px) {\n  #hero[_ngcontent-%COMP%]::after {\n    width: 180%;\n    height: 95%;\n    border-radius: 0 0 50% 50%;\n    transform: translateX(-50%) rotate(0deg);\n  }\n\n  #hero[_ngcontent-%COMP%]::before {\n    top: 0;\n    width: 180%;\n    height: 94%;\n    border-radius: 0 0 50% 50%;\n    transform: translateX(-50%) translateY(20px) rotate(4deg);\n  }\n}\r\n\r\n\r\n@media (max-width: 575px) {\n  #hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  #hero[_ngcontent-%COMP%]::after {\n    left: 40%;\n    top: 0;\n    width: 200%;\n    height: 95%;\n    border-radius: 0 0 50% 50%;\n    transform: translateX(-50%) rotate(0deg);\n  }\n\n  #hero[_ngcontent-%COMP%]::before {\n    left: 50%;\n    top: 0;\n    width: 200%;\n    height: 94%;\n    border-radius: 0 0 50% 50%;\n    transform: translateX(-50%) translateY(20px) rotate(4deg);\n  }\n}\r\n\r\n\r\n\r\n\r\n\r\n#hero-no-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n}\r\n\r\n\r\n#hero-no-slider[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(to right, rgba(30, 67, 86, 0.8), rgba(30, 67, 86, 0.6)), url('hero-bg.jpg') center top no-repeat;\n}\r\n\r\n\r\n#hero-no-slider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 15px;\n  font-size: 48px;\n  font-weight: 700;\n}\r\n\r\n\r\n#hero-no-slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\r\n\r\n\r\n#hero-no-slider[_ngcontent-%COMP%]   .btn-get-started[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  letter-spacing: 1px;\n  display: inline-block;\n  padding: 12px 32px;\n  border-radius: 50px;\n  transition: 0.5s;\n  line-height: 1;\n  margin: 10px;\n  color: #fff;\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s;\n  border: 2px solid #68A4C4;\n}\r\n\r\n\r\n#hero-no-slider[_ngcontent-%COMP%]   .btn-get-started[_ngcontent-%COMP%]:hover {\n  background: #68A4C4;\n  color: #fff;\n  text-decoration: none;\n}\r\n\r\n\r\n@media (max-width: 575px) {\n  #hero-no-slider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\r\n\r\n\r\n\r\n\r\n\r\nsection[_ngcontent-%COMP%] {\n  padding: 60px 0;\n}\r\n\r\n\r\n.section-bg[_ngcontent-%COMP%] {\n  background-color: #f3f8fa;\n}\r\n\r\n\r\n.section-title[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 30px;\n}\r\n\r\n\r\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 400;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  position: relative;\n}\r\n\r\n\r\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 120px;\n  height: 1px;\n  background: #ddd;\n  bottom: 1px;\n  left: calc(50% - 60px);\n}\r\n\r\n\r\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 3px;\n  background: #68A4C4;\n  bottom: 0;\n  left: calc(50% - 20px);\n}\r\n\r\n\r\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\r\n\r\n\r\n\r\n\r\n\r\n.breadcrumbs[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  background-color: #f3f8fa;\n  min-height: 40px;\n}\r\n\r\n\r\n.breadcrumbs[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 300;\n}\r\n\r\n\r\n.breadcrumbs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\r\n\r\n\r\n.breadcrumbs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\r\n\r\n\r\n.breadcrumbs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  padding-right: 10px;\n  color: #6c757d;\n  content: \"/\";\n}\r\n\r\n\r\n@media (max-width: 768px) {\n  .breadcrumbs[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  .breadcrumbs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .breadcrumbs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\r\n\r\n\r\n\r\n\r\n\r\n.services[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  padding: 30px;\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 40px 0;\n  background: #fff;\n  box-shadow: 0 5px 26px 0 rgba(68, 88, 144, 0.14);\n  transition: all 0.3s ease-in-out;\n  text-align: center;\n  border: 1px solid #fff;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin: 0 auto 20px auto;\n  padding-top: 17px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 50%;\n  width: 72px;\n  height: 72px;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  line-height: 1;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 15px;\n  font-size: 18px;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #111;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 28px;\n  margin-bottom: 0;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box-pink[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: #fceef3;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box-pink[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ff689b;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box-pink[_ngcontent-%COMP%]:hover {\n  border-color: #ff689b;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box-cyan[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: #e6fdfc;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box-cyan[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3fcdc7;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box-cyan[_ngcontent-%COMP%]:hover {\n  border-color: #3fcdc7;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box-green[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: #eafde7;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box-green[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #41cf2e;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box-green[_ngcontent-%COMP%]:hover {\n  border-color: #41cf2e;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box-blue[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: #e1eeff;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box-blue[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #2282ff;\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .icon-box-blue[_ngcontent-%COMP%]:hover {\n  border-color: #2282ff;\n}\r\n\r\n\r\n\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  box-shadow: 0 5px 25px 0 rgba(214, 215, 216, 0.6);\n  background: #fff;\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] + .icon-box[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  float: left;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 72px;\n  height: 72px;\n  background: #f3f8fa;\n  border-radius: 6px;\n  transition: 0.5s;\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #68A4C4;\n  font-size: 32px;\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  background: #68A4C4;\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-left: 95px;\n  font-weight: 700;\n  margin-bottom: 10px;\n  font-size: 18px;\n  text-transform: uppercase;\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #343a40;\n  transition: 0.3s;\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #68A4C4;\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-left: 95px;\n  line-height: 24px;\n  font-size: 14px;\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%] {\n  position: relative;\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%] {\n  width: 94px;\n  height: 94px;\n  background: radial-gradient(#68A4C4 50%, rgba(104, 164, 196, 0.4) 52%);\n  border-radius: 50%;\n  display: block;\n  position: absolute;\n  left: calc(50% - 47px);\n  top: calc(50% - 47px);\n  overflow: hidden;\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-40%) translateY(-50%);\n  width: 0;\n  height: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 15px solid #fff;\n  z-index: 100;\n  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n  -webkit-animation: pulsate-btn 2s;\n  animation: pulsate-btn 2s;\n  -webkit-animation-direction: forwards;\n  animation-direction: forwards;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-timing-function: steps;\n  animation-timing-function: steps;\n  opacity: 1;\n  border-radius: 50%;\n  border: 5px solid rgba(104, 164, 196, 0.7);\n  top: -15%;\n  left: -15%;\n  background: rgba(198, 16, 0, 0);\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]:hover::after {\n  border-left: 15px solid #68A4C4;\n  transform: scale(20);\n}\r\n\r\n\r\n.why-us[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]:hover::before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-40%) translateY(-50%);\n  width: 0;\n  height: 0;\n  border: none;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 15px solid #fff;\n  z-index: 200;\n  -webkit-animation: none;\n  animation: none;\n  border-radius: 0;\n}\r\n\r\n\r\n@-webkit-keyframes pulsate-btn {\n  0% {\n    transform: scale(0.6, 0.6);\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(1, 1);\n    opacity: 0;\n  }\n}\r\n\r\n\r\n@keyframes pulsate-btn {\n  0% {\n    transform: scale(0.6, 0.6);\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(1, 1);\n    opacity: 0;\n  }\n}\r\n\r\n\r\n\r\n\r\n\r\n.features[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] + .row[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\r\n\r\n\r\n.features[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 24px;\n}\r\n\r\n\r\n.features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\r\n\r\n\r\n.features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\r\n\r\n\r\n.features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-right: 4px;\n  color: #68A4C4;\n}\r\n\r\n\r\n.features[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\r\n\r\n\r\n\r\n\r\n\r\n.about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 26px;\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-right: 4px;\n  color: #68A4C4;\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\r\n\r\n\r\n\r\n\r\n\r\n.facts[_ngcontent-%COMP%]   .counters[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  color: #68A4C4;\n}\r\n\r\n\r\n.facts[_ngcontent-%COMP%]   .counters[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 0 20px 0;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n}\r\n\r\n\r\n\r\n\r\n\r\n.skills[_ngcontent-%COMP%] {\n  padding: 60px 0;\n}\r\n\r\n\r\n.skills[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 35px;\n  margin-bottom: 10px;\n}\r\n\r\n\r\n.skills[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%] {\n  line-height: 35px;\n  padding: 0;\n  margin: 0 0 0 20px;\n  text-transform: uppercase;\n}\r\n\r\n\r\n.skills[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  float: right;\n  font-style: normal;\n  margin: 0 20px 0 0;\n}\r\n\r\n\r\n.skills[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 1px;\n  text-align: left;\n  transition: .9s;\n}\r\n\r\n\r\n\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%] {\n  padding: 60px 0;\n}\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .testimonial-img[_ngcontent-%COMP%] {\n  width: 120px;\n  border-radius: 50%;\n  border: 4px solid #fff;\n  margin: 0 auto;\n}\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  margin: 10px 0 5px 0;\n  color: #111;\n}\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #999;\n  margin: 0 0 15px 0;\n}\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .quote-icon-left[_ngcontent-%COMP%], .testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .quote-icon-right[_ngcontent-%COMP%] {\n  color: #fbfcfd;\n  font-size: 26px;\n}\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .quote-icon-left[_ngcontent-%COMP%] {\n  display: inline-block;\n  left: -5px;\n  position: relative;\n}\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   .quote-icon-right[_ngcontent-%COMP%] {\n  display: inline-block;\n  right: -5px;\n  position: relative;\n  top: 10px;\n}\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  margin: 0 auto 15px auto;\n}\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%], .testimonials[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  text-align: center;\n}\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 5px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #ddd !important;\n}\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%] {\n  background-color: #68A4C4 !important;\n}\r\n\r\n\r\n@media (min-width: 992px) {\n  .testimonials[_ngcontent-%COMP%]   .testimonial-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\r\n\r\n\r\n\r\n\r\n\r\n.service-details[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\r\n\r\n\r\n.service-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0 30px;\n  margin-bottom: 60px;\n  position: relative;\n}\r\n\r\n\r\n.service-details[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  width: calc(100% + 60px);\n  margin-left: -30px;\n  overflow: hidden;\n  z-index: 9;\n  border-radius: 0;\n}\r\n\r\n\r\n.service-details[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  transition: all 0.3s ease-in-out;\n}\r\n\r\n\r\n.service-details[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  z-index: 10;\n  background: #fff;\n  border-top: 4px solid #fff;\n  padding: 30px;\n  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\n  margin-top: -60px;\n  transition: 0.3s;\n}\r\n\r\n\r\n.service-details[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 20px;\n}\r\n\r\n\r\n.service-details[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1e4356;\n  transition: 0.3s;\n}\r\n\r\n\r\n.service-details[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  color: #5e5e5e;\n}\r\n\r\n\r\n.service-details[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #777777;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 12px;\n  transition: 0.3s;\n}\r\n\r\n\r\n.service-details[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #68A4C4;\n}\r\n\r\n\r\n.service-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\r\n\r\n\r\n.service-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  border-color: #68A4C4;\n}\r\n\r\n\r\n.service-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #68A4C4;\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding-top: 40px;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding: 40px;\n  margin-bottom: 30px;\n  box-shadow: 0px 0px 30px rgba(73, 78, 92, 0.15);\n  background: #fff;\n  text-align: center;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 300;\n  margin-bottom: 15px;\n  font-size: 28px;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 46px;\n  color: #68A4C4;\n  font-weight: 400;\n  font-family: \"Open Sans\", sans-serif;\n  margin-bottom: 25px;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #bababa;\n  font-size: 18px;\n  display: block;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  color: #999;\n  text-align: left;\n  line-height: 20px;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #68A4C4;\n  font-size: 18px;\n  padding-right: 4px;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .na[_ngcontent-%COMP%] {\n  color: #ccc;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .na[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ccc;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .na[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .get-started-btn[_ngcontent-%COMP%] {\n  background: #1e4356;\n  display: inline-block;\n  padding: 6px 30px;\n  border-radius: 20px;\n  color: #fff;\n  transition: none;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: \"Roboto\", sans-serif;\n  transition: 0.3s;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .get-started-btn[_ngcontent-%COMP%]:hover {\n  background: #68A4C4;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .featured[_ngcontent-%COMP%] {\n  z-index: 10;\n  margin: -30px -5px 0 -5px;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .featured[_ngcontent-%COMP%]   .get-started-btn[_ngcontent-%COMP%] {\n  background: #68A4C4;\n}\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .featured[_ngcontent-%COMP%]   .get-started-btn[_ngcontent-%COMP%]:hover {\n  background: #85b6cf;\n}\r\n\r\n\r\n@media (max-width: 992px) {\n  .pricing[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    max-width: 60%;\n    margin: 0 auto 30px auto;\n  }\n}\r\n\r\n\r\n@media (max-width: 767px) {\n  .pricing[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    max-width: 80%;\n    margin: 0 auto 30px auto;\n  }\n}\r\n\r\n\r\n@media (max-width: 420px) {\n  .pricing[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 0 auto 30px auto;\n  }\n}\r\n\r\n\r\n\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%] {\n  padding-bottom: 60px;\n}\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 0 35px 0;\n  list-style: none;\n  text-align: center;\n}\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 0 12px 5px 12px;\n  display: inline-block;\n  padding: 0 4px 6px 4px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  color: #444;\n  transition: all 0.3s ease-in-out;\n  border-bottom: 2px solid #fff;\n  font-family: \"Roboto\", sans-serif;\n}\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .portfolio[_ngcontent-%COMP%]   #portfolio-flters[_ngcontent-%COMP%]   li.filter-active[_ngcontent-%COMP%] {\n  border-color: #68A4C4;\n  color: #68A4C4;\n}\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%] {\n  background: #1e4356;\n  overflow: hidden;\n  min-height: 200px;\n  position: relative;\n  border-radius: 4px;\n  margin: 0 0 30px 0;\n}\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out;\n}\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  transition: all .3s linear;\n  text-align: center;\n  top: 10%;\n  left: 0;\n  right: 0;\n}\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: bold;\n}\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 28px;\n  transition: 0.3s;\n}\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: white;\n}\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  transform: scale(1.1);\n}\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:hover   .portfolio-info[_ngcontent-%COMP%] {\n  opacity: 1;\n  top: calc(50% - 30px);\n}\r\n\r\n\r\n\r\n\r\n\r\n.portfolio-details[_ngcontent-%COMP%] {\n  padding-top: 40px;\n}\r\n\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-details-container[_ngcontent-%COMP%] {\n  position: relative;\n}\r\n\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-details-carousel[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\r\n\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-details-carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%], .portfolio-details[_ngcontent-%COMP%]   .portfolio-details-carousel[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  text-align: left;\n}\r\n\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-details-carousel[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 10px 0 0;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #ddd !important;\n}\r\n\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-details-carousel[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%] {\n  background-color: #68A4C4 !important;\n}\r\n\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%] {\n  padding: 30px;\n  position: absolute;\n  right: 0;\n  bottom: -70px;\n  background: #fff;\n  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\n  z-index: 2;\n}\r\n\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #eee;\n}\r\n\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  font-size: 15px;\n}\r\n\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\r\n\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\r\n\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 50%;\n  font-size: 26px;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\r\n\r\n\r\n.portfolio-details[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 0 0 0;\n}\r\n\r\n\r\n@media (max-width: 768px) {\n  .portfolio-details[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .portfolio-details[_ngcontent-%COMP%]   .portfolio-info[_ngcontent-%COMP%] {\n    position: static;\n    margin-top: 30px;\n  }\n}\r\n\r\n\r\n\r\n\r\n\r\n.team[_ngcontent-%COMP%] {\n  background: #fff;\n  padding-bottom: 30px;\n}\r\n\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  overflow: hidden;\n}\r\n\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .member-img[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\r\n\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: -40px;\n  right: 0;\n  height: 40px;\n  opacity: 0;\n  transition: bottom ease-in-out 0.4s;\n  text-align: center;\n  background: rgba(30, 67, 86, 0.8);\n}\r\n\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: color 0.3s;\n  color: #fff;\n  margin: 0 10px;\n  padding-top: 8px;\n  display: inline-block;\n}\r\n\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #68A4C4;\n}\r\n\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0 2px;\n}\r\n\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 15px 0 5px 0;\n  font-size: 18px;\n}\r\n\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: 400;\n  margin-bottom: 15px;\n  color: #68A4C4;\n}\r\n\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .member-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 14px;\n  line-height: 26px;\n  color: #666;\n}\r\n\r\n\r\n.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]:hover   .social[_ngcontent-%COMP%] {\n  bottom: 0;\n  opacity: 1;\n  transition: bottom ease-in-out 0.4s;\n}\r\n\r\n\r\n\r\n\r\n\r\n.contact[_ngcontent-%COMP%] {\n  padding-bottom: 30px;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  color: #444;\n  text-align: center;\n  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);\n  padding: 20px 0 30px 0;\n  margin-bottom: 30px;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #68A4C4;\n  border-radius: 50%;\n  padding: 8px;\n  border: 2px dotted #a2cce3;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #666;\n  font-weight: 700;\n  margin: 10px 0;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0;\n  line-height: 24px;\n  font-size: 14px;\n  margin-bottom: 0;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%] {\n  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);\n  padding: 30px;\n  margin-bottom: 30px;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .validate[_ngcontent-%COMP%] {\n  display: none;\n  color: red;\n  margin: 0 0 15px 0;\n  font-weight: 400;\n  font-size: 13px;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: none;\n  color: #fff;\n  background: #ed3c0d;\n  text-align: left;\n  padding: 15px;\n  font-weight: 600;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] + br[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .sent-message[_ngcontent-%COMP%] {\n  display: none;\n  color: #fff;\n  background: #18d26e;\n  text-align: center;\n  padding: 15px;\n  font-weight: 600;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  display: none;\n  background: #fff;\n  text-align: center;\n  padding: 15px;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: inline-block;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  margin: 0 10px -6px 0;\n  border: 3px solid #18d26e;\n  border-top-color: #eee;\n  -webkit-animation: animate-loading 1s linear infinite;\n  animation: animate-loading 1s linear infinite;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 0;\n  box-shadow: none;\n  font-size: 14px;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::focus, .contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::focus {\n  background-color: #68A4C4;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 20px 15px;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\n  background: #68A4C4;\n  border: 0;\n  padding: 10px 24px;\n  color: #fff;\n  transition: 0.4s;\n}\r\n\r\n\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%]:hover {\n  background: #8dbad2;\n}\r\n\r\n\r\n@-webkit-keyframes animate-loading {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\r\n\r\n\r\n@keyframes animate-loading {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\r\n\r\n\r\n\r\n\r\n\r\n.map[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-bottom: -6px;\n}\r\n\r\n\r\n.map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 380px;\n}\r\n\r\n\r\n\r\n\r\n\r\n.blog[_ngcontent-%COMP%] {\n  padding: 40px 0 20px 0;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%] {\n  padding: 30px;\n  margin-bottom: 60px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-img[_ngcontent-%COMP%] {\n  max-height: 400px;\n  margin: -30px -30px 20px -30px;\n  overflow: hidden;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: bold;\n  padding: 0;\n  margin: 0 0 20px 0;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #32627b;\n  transition: 0.3s;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #68A4C4;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  color: #dddddd;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding-right: 4px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #aaaaaa;\n  font-size: 14px;\n  display: inline-block;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%] {\n  -moz-text-align-last: right;\n  text-align-last: right;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #68A4C4;\n  color: #fff;\n  padding: 6px 20px;\n  transition: 0.3s;\n  font-size: 14px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #32627b;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-top: 30px;\n  font-weight: bold;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #fafafa;\n  padding: 60px;\n  position: relative;\n  text-align: center;\n  margin: 20px 0;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #444;\n  line-height: 1.6;\n  margin-bottom: 0;\n  font-style: italic;\n  font-weight: 500;\n  font-size: 22px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   .quote-left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  font-size: 36px;\n  color: #e7e7e7;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   .quote-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  font-size: 36px;\n  color: #e7e7e7;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background-color: #32627b;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  border-top: 1px solid #e6e6e6;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4c99c1;\n  display: inline;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #90c0d8;\n  transition: 0.3s;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #68A4C4;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .cats[_ngcontent-%COMP%] {\n  list-style: none;\n  display: inline;\n  padding: 0 20px 0 0;\n  font-size: 14px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .cats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  list-style: none;\n  display: inline;\n  padding: 0;\n  font-size: 14px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]::before {\n  padding-right: 6px;\n  color: #6c757d;\n  content: \",\";\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .entry-single[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 30px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-left: 140px;\n  font-weight: 600;\n  font-size: 22px;\n  margin-bottom: 0px;\n  padding: 0;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  margin: 0 0 5px 140px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #72afce;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 140px;\n  font-style: italic;\n  color: #b7b7b7;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comments-count[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  position: relative;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .comment-img[_ngcontent-%COMP%] {\n  width: 50px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-left: 65px;\n  font-size: 16px;\n  margin-bottom: 2px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #444;\n  transition: 0.3s;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #68A4C4;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  color: #32627b;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  margin-left: 65px;\n  display: block;\n  font-size: 14px;\n  color: #72afce;\n  margin-bottom: 5px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 65px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment.comment-reply[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 30px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 22px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 0;\n  padding: 20px 10px;\n  font-size: 14px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  border-color: #a2cce3;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 0;\n  padding: 10px 10px;\n  font-size: 14px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  border-color: #a2cce3;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  border-radius: 0;\n  padding: 10px 20px;\n  border: 0;\n  background-color: #32627b;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #68A4C4;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%] {\n  color: #7b9bab;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  margin: 0 5px;\n  transition: 0.3s;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: white;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #aaaaaa;\n  padding: 7px 16px;\n  display: inline-block;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #68A4C4;\n  border: 1px solid #68A4C4;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid white;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f1f1f1;\n  padding: 10px 16px;\n  display: inline-block;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  padding: 30px;\n  margin: 0 0 60px 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  padding: 0 0 0 0;\n  margin: 0 0 15px 0;\n  color: #32627b;\n  position: relative;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-item[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ddd;\n  padding: 3px 10px;\n  position: relative;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\n  border: 0;\n  padding: 4px;\n  width: calc(100% - 40px);\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  border: 0;\n  background: none;\n  font-size: 16px;\n  padding: 0 15px;\n  margin: -1px;\n  background: #32627b;\n  color: #fff;\n  transition: 0.3s;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #68A4C4;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3f8db5;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #68A4C4;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  color: #bedae8;\n  font-size: 14px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%] + .post-item[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  float: left;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-left: 95px;\n  font-weight: bold;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0d2735;\n  transition: 0.3s;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #68A4C4;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 95px;\n  font-style: italic;\n  font-size: 14px;\n  color: #72afce;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  margin-bottom: -10px;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3f8db5;\n  font-size: 14px;\n  padding: 6px 14px;\n  margin: 0 6px 8px 0;\n  border: 1px solid #e4eff5;\n  display: inline-block;\n  transition: 0.3s;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border: 1px solid #32627b;\n  background: #32627b;\n}\r\n\r\n\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  color: #bedae8;\n  font-size: 14px;\n}\r\n\r\n\r\n\r\n\r\n\r\n#footer[_ngcontent-%COMP%] {\n  background: #0b212d;\n  padding: 0 0 30px 0;\n  color: #fff;\n  font-size: 14px;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%] {\n  padding: 50px 0;\n  background: #0d2735;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0 0 20px 0;\n  padding: 0;\n  line-height: 1;\n  font-weight: 600;\n  color: #a2cce3;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  background: #fff;\n  padding: 6px 10px;\n  position: relative;\n  border-radius: 50px;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\n  border: 0;\n  padding: 4px;\n  width: calc(100% - 100px);\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  border: 0;\n  background: none;\n  font-size: 16px;\n  padding: 0 20px;\n  margin: 3px;\n  background: #68A4C4;\n  color: #fff;\n  transition: 0.3s;\n  border-radius: 50px;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\n  background: #468db3;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\n  background: #0d2735;\n  border-top: 1px solid #17455e;\n  border-bottom: 1px solid #123649;\n  padding: 60px 0 30px 0;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-info[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0 0 20px 0;\n  padding: 2px 0 2px 0;\n  line-height: 1;\n  color: #a2cce3;\n  font-weight: 600;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 24px;\n  margin-bottom: 0;\n  font-family: \"Roboto\", sans-serif;\n  color: #fff;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: inline-block;\n  background: #1e4356;\n  color: #fff;\n  line-height: 1;\n  padding: 8px 0;\n  margin-right: 4px;\n  border-radius: 50%;\n  text-align: center;\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #68A4C4;\n  color: #fff;\n  text-decoration: none;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #a2cce3;\n  position: relative;\n  padding-bottom: 12px;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 2px;\n  color: #a2cce3;\n  font-size: 18px;\n  line-height: 1;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  transition: 0.3s;\n  display: inline-block;\n  line-height: 1;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #a2cce3;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 30px;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .credits[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 13px;\n  color: #fff;\n}\r\n\r\n\r\n#footer[_ngcontent-%COMP%]   .credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a2cce3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL21haW4uY3NzIiwic3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixpQ0FBaUM7QUFDckM7OztBQUdBLGdCQUFnQjs7O0FBQ2hCO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0Qjs7O0FBRUEsbUJBQW1COzs7QUFFbkI7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJ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LGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuLyoqY2xhc3NlcyB0ZXh0Ki9cclxuLmhjbGFzcy0xIHtcclxuICAgIGNvbG9yOiAjMmE4MWVhO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5oY2xhc3MtNSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICM1MDY1OGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oY2xhc3MtNiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMzZDRiNjk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhjbGFzcy0xMCB7XHJcbiAgICBjb2xvcjogIzJhODFlYTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmhjbGFzcy0xMSB7XHJcbiAgICBjb2xvcjogIzJhODFlYTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGNsYXNzLTE1IHtcclxuICAgIGNvbG9yOiAjMmE4MWVhO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaGNsYXNzLTIwIHtcclxuICAgIGNvbG9yOiAjMmE4MWVhO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi8qY2xhc3NlcyB0ZXh0IGVuZCovXHJcblxyXG4uYWJvdXQtcGFyYWdyYXBoNSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmFib3V0LXBhcmFncmFwaDUwIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4udGV4dC10ZXh0dHQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMyYTgxZWE7XHJcbn1cclxuXHJcbi50ZXh0LXRleHR0dDIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM1MDY1OGU7XHJcbn1cclxuXHJcblxyXG4vKioqKi9cclxuLm5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmhvbWUgLm5hdmJhciAuY2xvc2UtaWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5ob21lIC5uYXZiYXIgLmNsb3NlLWljb24gaSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogIzUwNjU4ZTtcclxuXHJcbn1cclxuXHJcbi5ob21lIC5uYXZiYXIgLm92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNywgNzEsIDE2MSwgMC44KTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5cclxuLnN0aWNreS5pcy1zdGlja3kge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMCwgNjcsIDg2LCAwLjgpO1xyXG4gICAgbWluLWhlaWdodDogNjVweDtcclxufVxyXG4uaG9tZSAudG9wLW5hdmJhciAudG9wLW5hdiAubG9nbyAubG9nby10ZXh0IGF7XHJcbiAgICBjb2xvcjogIzFlNDM1NjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ubmF2bWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBjb2xvcjogIzFlNDM1NjtcclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjMWU0MzU2O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcblxyXG59XHJcblxyXG4uaG9tZSAubmF2YmFyIC50b3AtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICByaWdodDogMi41JTtcclxuICAgIGJvdHRvbTogMy41JTtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI1NmY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHotaW5kZXg6IDI1NjI1NTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5ob21lIC5uYXZiYXIgLnRvcC1pY29uIGkge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyQ29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG5cclxuLmhlYWRlckNvbnRlbnQtaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDAgNTBweDtcclxufVxyXG5cclxuXHJcbi5oZWFkZXJDb250ZW50LWhlYWRpbmcgLmhlYWRlckNvbnRlbnQtdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXJDb250ZW50LWhlYWRpbmcgLmhlYWRlckNvbnRlbnQtdGl0bGUgaDEge1xyXG4gICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjNTA2NThlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJDb250ZW50LWhlYWRpbmcgLmhlYWRlckNvbnRlbnQtdGl0bGUgc3BhbiBoMyB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNGRjUzNjM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmhlYWRlckNvbnRlbnQtaGVhZGluZyAuaGVhZGVyQ29udGVudC10aXRsZSBzcGFuIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzUwNjU4ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyQ29udGVudC1oZWFkaW5nIC5oZWFkZXJDb250ZW50LXBhcmFncmFwaCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXJDb250ZW50LWhlYWRpbmcgLmhlYWRlckNvbnRlbnQtYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZhLXNoaWVsZC1hbHQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmZhLWFycm93LXJpZ2h0IHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJDb250ZW50LWhlYWRpbmcgLmhlYWRlckNvbnRlbnQtYnRucyAuYnRuLXJlYWRtb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTgxZWE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHJcbn1cclxuXHJcbi5oZWFkZXJDb250ZW50LWhlYWRpbmcgLmhlYWRlckNvbnRlbnQtYnRucyAuYnRuLXJlYWRtb3JlIGkge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcblxyXG59XHJcblxyXG4uaGVhZGVyQ29udGVudC1oZWFkaW5nIC5oZWFkZXJDb250ZW50LXVwZGF0ZSBoNiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzQ2NTY3NTtcclxuXHJcbn1cclxuXHJcbi5oZWFkZXJDb250ZW50LW51bWJlcnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDUwcHggMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXJDb250ZW50LW51bWJlcnMgLmhlYWRlckNvbnRlbnQtbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNTA2NThlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmhlYWRlckNvbnRlbnQtbnVtYmVycyAuaGVhZGVyQ29udGVudC1udW1iZXIgLm51bWJlcnMge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM0NjU2NzU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5oZWFkZXJDb250ZW50LWltZyBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDAgNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuXHJcbn1cclxuXHJcbi8qaGVhZGVyIGVuZCovXHJcbi5hYm91dCAuYWJvdXQtaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHg7XHJcbn1cclxuXHJcbi5hYm91dCAuYWJvdXQtaGVhZGluZyAuYWJvdXQtdGV4dCAuaGNsYXNzLTEge1xyXG4gICAgY29sb3I6ICMyYTgxZWE7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmFib3V0IC5hYm91dC1oZWFkaW5nIC5hYm91dC10ZXh0IC5oY2xhc3MtMiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICM1MDY1OGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5hYm91dCAuYWJvdXQtaGVhZGluZyAuYWJvdXQtdGV4dCAuaGNsYXNzLTMge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjM2Q0YjY5O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5hYm91dCAuYWJvdXQtbWVudSB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbn1cclxuXHJcbi5hYm91dCAuYWJvdXQtbWVudSB1bCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNzIzNTQ4MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5hYm91dCAuYWJvdXQtbWVudSB1bCBsaSB7XHJcbiAgICBjb2xvcjogIzUwNjU4ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyYTgxZWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLmFib3V0IC5hYm91dC1tZW51IHVsIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYWJvdXQgLmFib3V0LW1lbnUgdWwgYSAubGFzdC1saSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY29sb3I6ICMyYTgxZWE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5hYm91dCAuYWJvdXQtbWVudSB1bCBhIGxpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBjb2xvcjogIzJhODFlYTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKmVuZCBvZiBhYm91dCovXHJcbi50cmFuc21pc3Npb24tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWY3ZmU7XHJcbn1cclxuXHJcbi50cmFuc21pc3Npb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmFuc21pc3Npb24gLnRyYW5zbWlzc2lvbi1oZWFkaW5nIC50cmFuc21pc3Npb24tdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuXHJcbi50cmFuc21pc3Npb24gLnRyYW5zbWlzc2lvbi1oZWFkaW5nIC50cmFuc21pc3Npb24tdGV4dCAuaGNsYXNzLTIge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjNTA2NThlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLnRyYW5zbWlzc2lvbiAudHJhbnNtaXNzaW9uLWhlYWRpbmcgLnRyYW5zbWlzc2lvbi10ZXh0IC5oY2xhc3MtMyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMzZDRiNjk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4udHJhbnNtaXNzaW9uIC50cmFuc21pc3Npb24taGVhZGluZyAudHJhbnNtaXNzaW9uLWxheW91dCAudHJhbnNtaXNzaW9uLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xyXG59XHJcblxyXG4udHJhbnNtaXNzaW9uIC50cmFuc21pc3Npb24taGVhZGluZyAudHJhbnNtaXNzaW9uLWxheW91dCAudHJhbnNtaXNzaW9uLWNvbnRlbnQgLnRyYW5zbWlzc2lvbi10ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnRyYW5zbWlzc2lvbiAudHJhbnNtaXNzaW9uLWhlYWRpbmcgLnRyYW5zbWlzc2lvbi1sYXlvdXQgLnRyYW5zbWlzc2lvbi1jb250ZW50IC50cmFuc21pc3Npb24taW1nIHtcclxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgIzJhODFlYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG59XHJcblxyXG4udHJhbnNtaXNzaW9uIC50cmFuc21pc3Npb24taGVhZGluZyAudHJhbnNtaXNzaW9uLWxheW91dCAudHJhbnNtaXNzaW9uLWNvbnRlbnQgLnRyYW5zbWlzc2lvbi1pbWcgaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi50cmFuc21pc3Npb24gLnRyYW5zbWlzc2lvbi1oZWFkaW5nIC50cmFuc21pc3Npb24tbGF5b3V0IC50cmFuc21pc3Npb24tY29udGVudCAuYWJvdXQtcGFyYWdyYXBoNCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxufVxyXG5cclxuLnRyYW5zbWlzc2lvbiAudHJhbnNtaXNzaW9uLWhlYWRpbmcgLnRyYW5zbWlzc2lvbi1sYXlvdXQgLnRyYW5zbWlzc2lvbi1idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogNTBweCAzMHB4O1xyXG59XHJcblxyXG4udHJhbnNtaXNzaW9uIC50cmFuc21pc3Npb24taGVhZGluZyAudHJhbnNtaXNzaW9uLWxheW91dCAudHJhbnNtaXNzaW9uLWJ0biAuYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTgxZWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKmVuZCBvZiB0cmFuc21pc3Npb24qL1xyXG4uc3ltcHRvbXMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5zeW1wdG9tcyAuc3ltcHRvbXMtaGVhZGluZyAuY29udGVudG1haW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3ltcHRvbXMgLnN5bXB0b21zLWxheW91dCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zeW1wdG9tcyAuc3ltcHRvbXMtbGF5b3V0IC5zeW1wdG9tcy1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5zeW1wdG9tcyAuc3ltcHRvbXMtbGF5b3V0IC5zeW1wdG9tcy1jb250ZW50IC5zeW1wdG9tcy1pbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwJTtcclxuICAgIHJpZ2h0OiAtMjAlO1xyXG59XHJcblxyXG4uc3ltcHRvbXMgLnN5bXB0b21zLWxheW91dCAuc3ltcHRvbXMtY29udGVudCAuc3ltcHRvbXMtaW1nIGltZyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zeW1wdG9tcyAuc3ltcHRvbXMtbGF5b3V0IC5zeW1wdG9tcy1jb250ZW50IC5zeW1wdG9tcy10ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWY3ZmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnN5bXB0b21zIC5zeW1wdG9tcy1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbn1cclxuXHJcbi5zeW1wdG9tcyAuc3ltcHRvbXMtYnRuIC50ZXh0LWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGNvbG9yOiAjMmE4MWVhO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG5cclxufVxyXG5cclxuLnN5bXB0b21zIC5zeW1wdG9tcy1idG4gLnRleHQtYnRuIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG59XHJcblxyXG4uc3ltcHRvbXMtYnRuIC5oZWxwLWJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE4MWVhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyplbmQgb2Ygc3ltcHRvbXMqL1xyXG5cclxuLnByb3RlY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjdmZTtcclxuXHJcbn1cclxuXHJcbi5wcm90ZWN0LWxheW91dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ucHJvdGVjdC1sYXlvdXQgLnByb3RlY3QtY29udGVudCAucHJvdGVjdC1pbWcge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucHJvdGVjdC1sYXlvdXQgLnByb3RlY3QtY29udGVudCAucHJvdGVjdC1pbWcgaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5wcm90ZWN0IC5wcm90ZWN0LWJ0bnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG5cclxufVxyXG5cclxuLnByb3RlY3QgLnByb3RlY3QtYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvdGVjdCAucHJvdGVjdDEtYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMmE4MWVhO1xyXG59XHJcblxyXG4ucHJvdGVjdCAucHJvdGVjdC1idG4gLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE4MWVhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJvdGVjdCAucHJvdGVjdC1idG4gLmJ0biBpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLnByb3RlY3QgLnByb3RlY3QtYnRuIGEsXHJcbi5wcm90ZWN0IC5wcm90ZWN0MS1idG4gYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzJhODFlYTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLyplbmQgcHJvdGVjdCovXHJcblxyXG4uaGVhbHRoc2FmZXR5IHtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxufVxyXG5cclxuLmhlYWx0aHNhZmV0eSAuaGVhbHRoc2FmZXR5LWNvbnRlbnQgLmhlYWx0aHNhZmV0eS10ZXh0IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogIzUwNjU4ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcblxyXG4uaGVhbHRoc2FmZXR5IC5oZWFsdGhzYWZldHktY29udGVudCAuaGVhbHRoc2FmZXR5LXRleHQgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uaGVhbHRoc2FmZXR5IC5oZWFsdGhzYWZldHktY29udGVudCAuaGVhbHRoc2FmZXR5LXRleHQgdWwgbGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmhlYWx0aHNhZmV0eSAuaGVhbHRoc2FmZXR5LWltZ3MgLmhlYWx0aHNhZmV0eS1pbWcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG59XHJcblxyXG4uaGVhbHRoc2FmZXR5IC5oZWFsdGhzYWZldHktaW1ncyAuaGVhbHRoc2FmZXR5LWltZyBpbWcge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogNzAlO1xyXG59XHJcblxyXG4uaGVhbHRoc2FmZXR5IC5oZWFsdGhzYWZldHktY29udGVudCAuaGVhbHRoc2FmZXR5LXRleHQgLmhzLWxpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFsdGhzYWZldHkgLmhlYWx0aHNhZmV0eS1jb250ZW50IC5oZWFsdGhzYWZldHktdGV4dCAuaHMtbGkgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMmE4MWVhO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vKmhzYWZ0ZXkgZW5kKi9cclxuLmhhbmR3YXNoIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLmhhbmR3YXNoIC5oYW5kd2FzaC1pbWdzIC5oYW5kd2FzaC1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuLmhhbmR3YXNoIC5oYW5kd2FzaC1pbWdzIC5oYW5kd2FzaC1pbWcgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzM5NEI2QztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyplbmQgaGFuZHdhc2gqL1xyXG4udHJlYXRtZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzY2YmI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxufVxyXG5cclxuLnRyZWF0bWVudCAudHJlYXRtZW50LWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG59XHJcblxyXG4udHJlYXRtZW50IC50cmVhdG1lbnQtbWVudSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI0N2ExO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRyZWF0bWVudCAudHJlYXRtZW50LW1lbnUgLnRyZWF0bWVudC1zdWJtZW51IGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udHJlYXRtZW50IC50cmVhdG1lbnQtbWVudSAudHJlYXRtZW50LXN1Ym1lbnUgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50cmVhdG1lbnQgLnRyZWF0bWVudC1tZW51IC50cmVhdG1lbnQtc3VibWVudSB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udHJlYXRtZW50IC50cmVhdG1lbnQtbWVudSAudHJlYXRtZW50LXN1Ym1lbnUgdWwgbGkge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udHJlYXRtZW50IC50cmVhdG1lbnQtbWVudSAudHJlYXRtZW50LXN1Ym1lbnUgdWwgbGkgc3BhbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRyZWF0bWVudCAudHJlYXRtZW50LWhlYWRpbmcgLnRyZWF0bWVudC10ZXh0IGg2IHtcclxuICAgIGNvbG9yOiAjNzNlM2ZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi50cmVhdG1lbnQgLnRyZWF0bWVudC1oZWFkaW5nIC50cmVhdG1lbnQtdGV4dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4udHJlYXRtZW50IC50cmVhdG1lbnQtaGVhZGluZyAuYWJvdXQtcGFyYWdyYXBoMSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4vKmVuZCB0cmVhdG1lbnQqL1xyXG4ucHJvdGVjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5wcm90ZWN0aW9uIC5wcm90ZWN0aW9uLWltZ3Mge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wcm90ZWN0aW9uLWltZ3MxIHtcclxuICAgIG9yZGVyOiAxO1xyXG59XHJcblxyXG4ucHJvdGVjdGlvbi1pbWdzMiB7XHJcbiAgICBvcmRlcjogMjtcclxufVxyXG5cclxuLnByb3RlY3Rpb24taW1nczMge1xyXG4gICAgb3JkZXI6IDM7XHJcbn1cclxuXHJcbi5wcm90ZWN0aW9uLWltZ3MgLnByb3RlY3Rpb24taW1nczIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucHJvdGVjdGlvbi1pbWdzIC5jb3VudCAuaW1nIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4ucHJvdGVjdGlvbi1pbWdzIC5pbWcgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJhODFlYTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvdGVjdGlvbi1pbWdzIC5jb3VudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ucHJvdGVjdGlvbi1pbWdzIC5wcm90ZWN0aW9uLWltZ3MzIC5jb3VudCAuaWNvbiB7XHJcbiAgICBjb2xvcjogIzNkY2E5MztcclxuICAgIHJpZ2h0OiAxNjBweDtcclxufVxyXG5cclxuLnByb3RlY3Rpb24taW1ncyAuY291bnQgLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdG9wOiAtNXB4O1xyXG59XHJcblxyXG4ucHJvdGVjdGlvbi1pbWdzIC5wcm90ZWN0aW9uLWltZ3MxIC5jb3VudCAuaWNvbiB7XHJcbiAgICBjb2xvcjogI2Y4NjE2ODtcclxuICAgIGxlZnQ6IDE3MHB4O1xyXG4gICAgdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5wcm90ZWN0aW9uLWltZ3MgLmNvdW50IC5pY29uIHN2ZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnByb3RlY3Rpb24taW1ncyAucHJvdGVjdGlvbi1pbWdzMyAuY291bnQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ucHJvdGVjdGlvbi1pbWdzIC5wcm90ZWN0aW9uLWltZ3MzIC5oZWFkaW5nIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm90ZWN0aW9uLWltZ3MgLmhlYWRpbmcgcCB7XHJcbiAgICBjb2xvcjogIzJhODFlYTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKmVuZCBwcm90ZWN0aW9uKi9cclxuLypcclxuLmZyZXF1ZW50e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuLm5hdi1waWxscyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyYTgxZWE7XHJcbiAgICBjb2xvcjogIzJhODFlYTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XHJcblxyXG59XHJcblxyXG4ubmF2LXBpbGxzIC5uYXYtbGluayB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyYTgxZWE7XHJcbiAgICBib3JkZXI6IDFweCAjMmE4MWVhIHNvbGlkO1xyXG4gICAgY29sb3I6ICMyYTgxZWE7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG5cclxufVxyXG5cclxuI2FjY29yZGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWxpbmsge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5idG4tbGluazpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmZhLWNhcmV0LXJpZ2h0IHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5mYS1taW51cyB7XHJcbiAgICB3aWR0aDogMTVweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn0qL1xyXG5cclxuLmZyZXF1ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcbn1cclxuXHJcbi5mcmVxdWVudCAuZnJlcXVlbnQtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uZnJlcXVlbnQgLmZyZXF1ZW50LWJveC1zZWxlY3QgdWwgbGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgY29sb3I6ICM1MDY1OGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U3ZThmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmZyZXF1ZW50IC5mcmVxdWVudC1ib3gtc2VsZWN0IHVsIGxpLmNvbG9yLWZyZXF1ZW50LmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzJhODFlYTtcclxuICAgIGJvcmRlci1jb2xvcjogIzJhODFlYTtcclxufVxyXG5cclxuLmZyZXF1ZW50IC5mcmVxdWVudC1ib3gtc2VsZWN0IHVsIGxpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMmE4MWVhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMmE4MWVhO1xyXG59XHJcblxyXG4uZnJlcXVlbnQgLmZyZXF1ZW50LWJveC1zZWxlY3QgdWwgbGkgcCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZnJlcXVlbnQtdGV4dCAuaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZnJlcXVlbnQgLmZyZXF1ZW50LXRleHQgdWwge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U3ZThmZjtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxufVxyXG5cclxuLmZyZXF1ZW50LXRleHQgdWwgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U4ZmY7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4IDA7XHJcbiAgICBjb2xvcjogIzQ2NTY3NTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmYWZlO1xyXG59XHJcblxyXG4uZnJlcXVlbnQtdGV4dCB1bCBsaSBwIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZnJlcXVlbnQtdGV4dCB1bCBsaSBkaXYge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5mcmVxdWVudCAuZnJlcXVlbnQtdGV4dCB1bCBsaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzJhODFlYTtcclxufVxyXG5cclxuLmZyZXF1ZW50LXRleHQgdWwgbGkuc3R5bGUtbGkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogIzJhODFlYTtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mcmVxdWVudC10ZXh0IHVsIC51bC10ZXh0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlOGZmO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmZyZXF1ZW50LXRleHQgdWwgLnVsLXRleHQgcCB7XHJcbiAgICBjb2xvcjogIzNkNGI2OTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5mcmVxdWVudC10ZXh0IHVsIC51bC10ZXh0IHAgc3BhbiB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLmZyZXF1ZW50LXRleHQgdWwgLnVsLXRleHQgLnN0eWxlLXVsIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLmZyZXF1ZW50LXRleHQgdWwgLnVsLXRleHQgLnN0eWxlLXVsIGxpIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgY29sb3I6ICM0NjU2NzU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mcmVxdWVudC10ZXh0IHVsIC51bC10ZXh0IHAgc3Bhbi5ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM0NjU2NzU7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgICB3aWR0aDogMTVweDtcclxufVxyXG5cclxuLyplbmQgZnJlcXVlbnQqL1xyXG5cclxuLmJsb2cge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZlO1xyXG59XHJcblxyXG4uYmxvZyAuYmxvZy10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJsb2cgLmJsb2ctY29udGVudCAubGF0ZXN0LWJsb2cge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLmJsb2cgLmJsb2ctY29udGVudCAubGF0ZXN0LWJsb2cgLmJsb2ctY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uYmxvZyAuYmxvZy1jb250ZW50IC5sYXRlc3QtYmxvZyAuYmxvZy1jb250ZW50IC5ibG9nLWltZyBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5ibG9nIC5ibG9nLWNvbnRlbnQgLmxhdGVzdC1ibG9nIC5ibG9nLWNvbnRlbnQgLmJsb2ctdGV4dCBoNSB7XHJcbiAgICBjb2xvcjogIzQ2NTY3NTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi8qZW5kIGJsb2cqL1xyXG5cclxuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTFjMmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuZm9vdGVyIC5mb290ZXItY29udGVudCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNDcsIDI0OCwgMjU1LCAwLjEpO1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG5cclxufVxyXG5cclxuZm9vdGVyIC5mb290ZXItY29udGVudDEgLmxvZ28ge1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcblxyXG59XHJcblxyXG5mb290ZXIgLmZvb3Rlci1jb250ZW50MSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI0NywgMjQ4LCAyNTUsIDAuMSk7XHJcbn1cclxuXHJcbmZvb3RlciAuZm9vdGVyLWNvbnRlbnQgdWwge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG5mb290ZXIgLmZvb3Rlci1jb250ZW50IHVsIGxpIHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG5cclxufVxyXG5cclxuZm9vdGVyIC5mb290ZXItY29udGVudCBoMyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5mb290ZXIgLmZvb3Rlci1jb250ZW50IHVsIGxpIGEge1xyXG4gICAgY29sb3I6ICNiMmJmZTA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmZvb3RlciAuZm9vdGVyLXVwIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuZm9vdGVyIC5mb290ZXItZG93biB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBcclxufVxyXG5cclxuLyplbmQgZm9vdGVyKi9cclxuXHJcbi5mYS12aXJ1cyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGNvbG9yOiAjRkY1MzYzO1xyXG59XHJcblxyXG4uZmEtcGhvbmUtc3F1YXJlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mYS1xdWVzdGlvbi1jaXJjbGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uZmEtY2hlY2stY2lyY2xlIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmZhLXRpbWVzLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLyoqaWNvbnMqKi9cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xyXG5cclxuICAgIC5oZWFkZXJDb250ZW50LWhlYWRpbmcgLmhlYWRlckNvbnRlbnQtbnVtYmVycyxcclxuICAgIC5oZWFkZXJDb250ZW50LWhlYWRpbmcgLmhlYWRlckNvbnRlbnQtYnRucyxcclxuICAgIC5oZWFkZXJDb250ZW50LWhlYWRpbmcgLmhlYWRlckNvbnRlbnQtdGl0bGUge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlckNvbnRlbnQtaGVhZGluZyAuaGVhZGVyQ29udGVudC1idG5zIC5idG4tcmVhZG1vcmUge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm90ZWN0aW9uLWltZ3MxIHtcclxuICAgICAgICBvcmRlcjogMjtcclxuICAgIH1cclxuXHJcbiAgICAucHJvdGVjdGlvbi1pbWdzMiB7XHJcbiAgICAgICAgb3JkZXI6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb3RlY3Rpb24taW1nczMge1xyXG4gICAgICAgIG9yZGVyOiAzO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm90ZWN0aW9uLWltZ3MgLnByb3RlY3Rpb24taW1ncyAucHJvdGVjdGlvbi1pbWdzMyAuY291bnQgLmljb24ge1xyXG4gICAgICAgIGxlZnQ6IDYycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb3RlY3Rpb24taW1ncyAucHJvdGVjdGlvbi1pbWdzMSAuY291bnQgLmljb24ge1xyXG4gICAgICAgIGxlZnQ6IDEyOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zeW1wdG9tcyAuc3ltcHRvbXMtbGF5b3V0IC5zeW1wdG9tcy1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3ltcHRvbXMgLnN5bXB0b21zLWxheW91dCAuc3ltcHRvbXMtY29udGVudCAuc3ltcHRvbXMtaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICByaWdodDogLTEwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQgLmFib3V0LWhlYWRpbmcgLmFib3V0LXRleHQsXHJcbiAgICAudHJlYXRtZW50IC5jb250YWluZXIsXHJcbiAgICAudHJlYXRtZW50IC50cmVhdG1lbnQtaGVhZGluZyAuYWJvdXQtcGFyYWdyYXBoMSxcclxuICAgIC50cmVhdG1lbnQgLnRyZWF0bWVudC1oZWFkaW5nIC50cmVhdG1lbnQtdGV4dCAuaGNsYXNzLTEsXHJcbiAgICAuaGVhZGVyQ29udGVudC1oZWFkaW5nIC5oZWFkZXJDb250ZW50LXVwZGF0ZSBoNixcclxuICAgIC5oZWFkZXJDb250ZW50LW51bWJlcnMgLmhlYWRlckNvbnRlbnQtbnVtYmVyIC5udW1iZXJzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRyZWF0bWVudCAudHJlYXRtZW50LW1lbnUgLnRyZWF0bWVudC1zdWJtZW51IHVsIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICAucHJvdGVjdGlvbi1pbWdzIC5wcm90ZWN0aW9uLWltZ3MzIC5jb3VudCAuaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICMzZGNhOTM7XHJcbiAgICAgICAgcmlnaHQ6IDIzNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm90ZWN0aW9uLWltZ3MgLnByb3RlY3Rpb24taW1nczEgLmNvdW50IC5pY29uIHtcclxuICAgICAgICBsZWZ0OiAyNDRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgLnByb3RlY3Rpb24taW1ncyAucHJvdGVjdGlvbi1pbWdzMyAuY291bnQgLmljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjM2RjYTkzO1xyXG4gICAgICAgIHJpZ2h0OiAxODVweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvdGVjdGlvbi1pbWdzIC5wcm90ZWN0aW9uLWltZ3MxIC5jb3VudCAuaWNvbiB7XHJcbiAgICAgICAgbGVmdDogMTk1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG4gICAgLmhlYWRlckNvbnRlbnQtaGVhZGluZyAuaGVhZGVyQ29udGVudC10aXRsZSBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2MnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXJDb250ZW50LWhlYWRpbmcgLmhlYWRlckNvbnRlbnQtdXBkYXRlIGg2IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlckNvbnRlbnQtbnVtYmVycyAuaGVhZGVyQ29udGVudC1udW1iZXIgLm51bWJlcnMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWUgLm5hdmJhciAudG9wLWljb24ge1xyXG4gICAgICAgIHJpZ2h0OiAxMC41JTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcblxyXG4gICAgLnByb3RlY3Rpb24taW1ncyAucHJvdGVjdGlvbi1pbWdzMyAuY291bnQgLmljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjM2RjYTkzO1xyXG4gICAgICAgIHJpZ2h0OiAxNDdweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvdGVjdGlvbi1pbWdzIC5wcm90ZWN0aW9uLWltZ3MxIC5jb3VudCAuaWNvbiB7XHJcbiAgICAgICAgbGVmdDogMTU0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgLm5hdmJhci10b2dnbGVyIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWUgLm5hdmJhciAuY2xvc2UtaWNvbiB7XHJcbiAgICAgICAgcmlnaHQ6IDE0JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcclxuXHJcbiAgICAucHJvdGVjdGlvbi1pbWdzIC5wcm90ZWN0aW9uLWltZ3MgLnByb3RlY3Rpb24taW1nczMgLmNvdW50IC5pY29uIHtcclxuICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm90ZWN0aW9uLWltZ3MgLnByb3RlY3Rpb24taW1nczEgLmNvdW50IC5pY29uIHtcclxuICAgICAgICBsZWZ0OiAxMDlweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHJcbiAgICAucHJvdGVjdGlvbi1pbWdzIC5wcm90ZWN0aW9uLWltZ3MzIC5jb3VudCAuaWNvbiB7XHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvdGVjdGlvbi1pbWdzIC5wcm90ZWN0aW9uLWltZ3MzLFxyXG4gICAgLnByb3RlY3Rpb24taW1ncyAucHJvdGVjdGlvbi1pbWdzMSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvdGVjdGlvbi1pbWdzIC5wcm90ZWN0aW9uLWltZ3MyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvdGVjdGlvbi1pbWdzIC5wcm90ZWN0aW9uLWltZ3MxIC5jb3VudCAuaWNvbiB7XHJcbiAgICAgICAgbGVmdDogMTA0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNXB4KSB7XHJcblxyXG4gICAgLnByb3RlY3Rpb24taW1ncyAucHJvdGVjdGlvbi1pbWdzMyAuY291bnQgLmljb24ge1xyXG4gICAgICAgIHJpZ2h0OiAxMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NnB4KSB7XHJcblxyXG4gICAgLnByb3RlY3Rpb24taW1ncyAucHJvdGVjdGlvbi1pbWdzMyxcclxuICAgIC5wcm90ZWN0aW9uLWltZ3MgLnByb3RlY3Rpb24taW1nczEge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG5cclxuICAgIC5wcm90ZWN0aW9uLWltZ3MgLnByb3RlY3Rpb24taW1nczMsXHJcbiAgICAucHJvdGVjdGlvbi1pbWdzIC5wcm90ZWN0aW9uLWltZ3MxIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm90ZWN0aW9uLWltZ3MgLnByb3RlY3Rpb24taW1nczEgLmNvdW50IC5pY29uIHtcclxuICAgICAgICBsZWZ0OiAxMDNweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvdGVjdGlvbi1pbWdzIC5wcm90ZWN0aW9uLWltZ3MzIC5jb3VudCAuaWNvbiB7XHJcbiAgICAgICAgbGVmdDogNDVweDtcclxuICAgIH1cclxuXHJcbn0iLCIvKipcbiogVGVtcGxhdGUgTmFtZTogTW9kZXJuYSAtIHYyLjIuMVxuKiBUZW1wbGF0ZSBVUkw6IGh0dHBzOi8vYm9vdHN0cmFwbWFkZS5jb20vZnJlZS1ib290c3RyYXAtdGVtcGxhdGUtY29ycG9yYXRlLW1vZGVybmEvXG4qIEF1dGhvcjogQm9vdHN0cmFwTWFkZS5jb21cbiogTGljZW5zZTogaHR0cHM6Ly9ib290c3RyYXBtYWRlLmNvbS9saWNlbnNlL1xuKi9cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyBHZW5lcmFsXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNDQ0O1xufVxuXG5hIHtcbiAgY29sb3I6ICM0ZmE2ZDU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzQ1YmVmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG4uZm9udC1wcmltYXJ5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiMgQmFjayB0byB0b3AgYnV0dG9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uYmFjay10by10b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogIzY4QTRDNDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGRpc3BsYXkgMC41cyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogOTk5OTk7XG59XG5cbi5iYWNrLXRvLXRvcCBpIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiA4cHg7XG59XG5cbi5iYWNrLXRvLXRvcDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjODViNmNmO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiMgSGVhZGVyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4jaGVhZGVyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgei1pbmRleDogOTk3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgcGFkZGluZzogMjBweCAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMxZTQzNTY7XG59XG5cbiNoZWFkZXIuaGVhZGVyLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuI2hlYWRlci5oZWFkZXItc2Nyb2xsZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMwLCA2NywgODYsIDAuOCk7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4jaGVhZGVyIC5sb2dvIGgxIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI2hlYWRlciAubG9nbyBoMSBhLFxuI2hlYWRlciAubG9nbyBoMSBhOmhvdmVyIHtcbiAgY29sb3I6ICMxZTQzNTY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2hlYWRlciAubG9nbyBpbWcge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG59XG5cbiNtYWluIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyBOYXZpZ2F0aW9uIE1lbnVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qIERlc2t0b3AgTmF2aWdhdGlvbiAqL1xuLm5hdi1tZW51LFxuLm5hdi1tZW51ICoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5uYXYtbWVudT51bD5saSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5uYXYtbWVudSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMxZTQzNTY7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm5hdi1tZW51IGE6aG92ZXIsXG4ubmF2LW1lbnUgLmFjdGl2ZT5hLFxuLm5hdi1tZW51IGxpOmhvdmVyPmEge1xuICBjb2xvcjogI2EyY2NlMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubmF2LW1lbnUgLmRyb3AtZG93biB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogY2FsYygxMDAlIC0gMzBweCk7XG4gIHotaW5kZXg6IDk5O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IHJnYmEoMTI3LCAxMzcsIDE2MSwgMC4yNSk7XG4gIHRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XG59XG5cbi5uYXYtbWVudSAuZHJvcC1kb3duOmhvdmVyPnVsIHtcbiAgb3BhY2l0eTogMTtcbiAgdG9wOiAxMDAlO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ubmF2LW1lbnUgLmRyb3AtZG93biBsaSB7XG4gIG1pbi13aWR0aDogMTgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdi1tZW51IC5kcm9wLWRvd24gdWwgYSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICMxYzM3NDU7XG59XG5cbi5uYXYtbWVudSAuZHJvcC1kb3duIHVsIGE6aG92ZXIsXG4ubmF2LW1lbnUgLmRyb3AtZG93biB1bCAuYWN0aXZlPmEsXG4ubmF2LW1lbnUgLmRyb3AtZG93biB1bCBsaTpob3Zlcj5hIHtcbiAgY29sb3I6ICM2OEE0QzQ7XG59XG5cbi5uYXYtbWVudSAuZHJvcC1kb3duPmE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcZWE5OVwiO1xuICBmb250LWZhbWlseTogSWNvRm9udDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5uYXYtbWVudSAuZHJvcC1kb3duIC5kcm9wLWRvd24gdWwge1xuICB0b3A6IDA7XG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xufVxuXG4ubmF2LW1lbnUgLmRyb3AtZG93biAuZHJvcC1kb3duOmhvdmVyPnVsIHtcbiAgb3BhY2l0eTogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxMDAlO1xufVxuXG4ubmF2LW1lbnUgLmRyb3AtZG93biAuZHJvcC1kb3duPmEge1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xufVxuXG4ubmF2LW1lbnUgLmRyb3AtZG93biAuZHJvcC1kb3duPmE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcZWFhMFwiO1xuICBmb250LWZhbWlseTogSWNvRm9udDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAubmF2LW1lbnUgLmRyb3AtZG93biAuZHJvcC1kb3duIHVsIHtcbiAgICBsZWZ0OiAtOTAlO1xuICB9XG5cbiAgLm5hdi1tZW51IC5kcm9wLWRvd24gLmRyb3AtZG93bjpob3Zlcj51bCB7XG4gICAgbGVmdDogLTEwMCU7XG4gIH1cblxuICAubmF2LW1lbnUgLmRyb3AtZG93biAuZHJvcC1kb3duPmE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxlYTlkXCI7XG4gIH1cbn1cblxuLyogTW9iaWxlIE5hdmlnYXRpb24gKi9cbi5tb2JpbGUtbmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk5OTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbGVmdDogLTI2MHB4O1xuICB3aWR0aDogMjYwcHg7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjMWU0MzU2O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubW9iaWxlLW5hdiAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubW9iaWxlLW5hdiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNkZGVjZjU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1vYmlsZS1uYXYgYTpob3Zlcixcbi5tb2JpbGUtbmF2IC5hY3RpdmU+YSxcbi5tb2JpbGUtbmF2IGxpOmhvdmVyPmEge1xuICBjb2xvcjogI2EyY2NlMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubW9iaWxlLW5hdiAuZHJvcC1kb3duPmE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcZWE5OVwiO1xuICBmb250LWZhbWlseTogSWNvRm9udDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG4ubW9iaWxlLW5hdiAuYWN0aXZlLmRyb3AtZG93bj5hOmFmdGVyIHtcbiAgY29udGVudDogXCJcXGVhYTBcIjtcbn1cblxuLm1vYmlsZS1uYXYgLmRyb3AtZG93bj5hIHtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbn1cblxuLm1vYmlsZS1uYXYgLmRyb3AtZG93biB1bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb2JpbGUtbmF2IC5kcm9wLWRvd24gbGkge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5tb2JpbGUtbmF2LXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbiAgei1pbmRleDogOTk5ODtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubW9iaWxlLW5hdi10b2dnbGUgaSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubW9iaWxlLW5hdi1vdmVybHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5OTk3O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogcmdiYSgzMCwgNjcsIDg2LCAwLjkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubW9iaWxlLW5hdi1hY3RpdmUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubW9iaWxlLW5hdi1hY3RpdmUgLm1vYmlsZS1uYXYge1xuICBsZWZ0OiAwO1xufVxuXG4ubW9iaWxlLW5hdi1hY3RpdmUgLm1vYmlsZS1uYXYtdG9nZ2xlIGkge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyBIZXJvIFNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiNoZXJvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jaGVybzo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEzMCU7XG4gIGhlaWdodDogOTUlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMzAsIDY3LCA4NiwgMC44KSwgcmdiYSgzMCwgNjcsIDg2LCAwLjYpKSwgdXJsKFwiLi4vaW1nL2hlcm8tYmcuanBnXCIpIGNlbnRlciB0b3Agbm8tcmVwZWF0O1xuICB6LWluZGV4OiAwO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNTAlIDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgwZGVnKTtcbn1cblxuI2hlcm86OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTMwJTtcbiAgaGVpZ2h0OiA5NiU7XG4gIGJhY2tncm91bmQ6ICM2OEE0QzQ7XG4gIG9wYWNpdHk6IDAuMztcbiAgei1pbmRleDogMDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDUwJSA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDE4cHgpIHJvdGF0ZSgyZGVnKTtcbn1cblxuI2hlcm8gLmNhcm91c2VsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuI2hlcm8gaDIge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jaGVybyBwIHtcbiAgd2lkdGg6IDgwJTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgbWFyZ2luOiAwIGF1dG8gMzBweCBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI2hlcm8gLmNhcm91c2VsLWNvbnRyb2wtcHJldixcbiNoZXJvIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICB3aWR0aDogMTAlO1xufVxuXG4jaGVybyAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24sXG4jaGVybyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jaGVybyAuYnRuLWdldC1zdGFydGVkIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMnB4IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNjhBNEM0O1xufVxuXG4jaGVybyAuYnRuLWdldC1zdGFydGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzY4QTRDNDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAjaGVybyBwIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgI2hlcm8gLmNhcm91c2VsLWNvbnRyb2wtcHJldixcbiAgI2hlcm8gLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgd2lkdGg6IDUlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjaGVybzo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxODAlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAjaGVybzo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDE4MCU7XG4gICAgaGVpZ2h0OiA5NCU7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDUwJSA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoMjBweCkgcm90YXRlKDRkZWcpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAjaGVybyBoMiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgI2hlcm86OmFmdGVyIHtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAjaGVybzo6YmVmb3JlIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIGhlaWdodDogOTQlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDIwcHgpIHJvdGF0ZSg0ZGVnKTtcbiAgfVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIEhlcm8gTm8gU2xpZGVyIFNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiNoZXJvLW5vLXNsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2hlcm8tbm8tc2xpZGVyOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgzMCwgNjcsIDg2LCAwLjgpLCByZ2JhKDMwLCA2NywgODYsIDAuNikpLCB1cmwoXCIuLi9pbWcvaGVyby1iZy5qcGdcIikgY2VudGVyIHRvcCBuby1yZXBlYXQ7XG59XG5cbiNoZXJvLW5vLXNsaWRlciBoMiB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNoZXJvLW5vLXNsaWRlciBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNoZXJvLW5vLXNsaWRlciAuYnRuLWdldC1zdGFydGVkIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMnB4IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNjhBNEM0O1xufVxuXG4jaGVyby1uby1zbGlkZXIgLmJ0bi1nZXQtc3RhcnRlZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM2OEE0QzQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAjaGVyby1uby1zbGlkZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIFNlY3Rpb25zIEdlbmVyYWxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiA2MHB4IDA7XG59XG5cbi5zZWN0aW9uLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjhmYTtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uc2VjdGlvbi10aXRsZSBoMiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlY3Rpb24tdGl0bGUgaDI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICBib3R0b206IDFweDtcbiAgbGVmdDogY2FsYyg1MCUgLSA2MHB4KTtcbn1cblxuLnNlY3Rpb24tdGl0bGUgaDI6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogIzY4QTRDNDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xufVxuXG4uc2VjdGlvbi10aXRsZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyBCcmVhZGNydW1ic1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmJyZWFkY3J1bWJzIHtcbiAgcGFkZGluZzogMTVweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmOGZhO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4uYnJlYWRjcnVtYnMgaDIge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5icmVhZGNydW1icyBvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnJlYWRjcnVtYnMgb2wgbGkrbGkge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5icmVhZGNydW1icyBvbCBsaStsaTo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgY29udGVudDogXCIvXCI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnJlYWRjcnVtYnMgLmQtZmxleCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5icmVhZGNydW1icyBvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuYnJlYWRjcnVtYnMgb2wgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIE91ciBTZXJ2aWNlc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnNlcnZpY2VzIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5zZXJ2aWNlcyAuaWNvbi1ib3gge1xuICBwYWRkaW5nOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAwIDQwcHggMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA1cHggMjZweCAwIHJnYmEoNjgsIDg4LCAxNDQsIDAuMTQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4uc2VydmljZXMgLmljb24ge1xuICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzJweDtcbiAgaGVpZ2h0OiA3MnB4O1xufVxuXG4uc2VydmljZXMgLmljb24gaSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5zZXJ2aWNlcyAudGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zZXJ2aWNlcyAudGl0bGUgYSB7XG4gIGNvbG9yOiAjMTExO1xufVxuXG4uc2VydmljZXMgLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnNlcnZpY2VzIC5pY29uLWJveC1waW5rIC5pY29uIHtcbiAgYmFja2dyb3VuZDogI2ZjZWVmMztcbn1cblxuLnNlcnZpY2VzIC5pY29uLWJveC1waW5rIC5pY29uIGkge1xuICBjb2xvcjogI2ZmNjg5Yjtcbn1cblxuLnNlcnZpY2VzIC5pY29uLWJveC1waW5rOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY2ODliO1xufVxuXG4uc2VydmljZXMgLmljb24tYm94LWN5YW4gLmljb24ge1xuICBiYWNrZ3JvdW5kOiAjZTZmZGZjO1xufVxuXG4uc2VydmljZXMgLmljb24tYm94LWN5YW4gLmljb24gaSB7XG4gIGNvbG9yOiAjM2ZjZGM3O1xufVxuXG4uc2VydmljZXMgLmljb24tYm94LWN5YW46aG92ZXIge1xuICBib3JkZXItY29sb3I6ICMzZmNkYzc7XG59XG5cbi5zZXJ2aWNlcyAuaWNvbi1ib3gtZ3JlZW4gLmljb24ge1xuICBiYWNrZ3JvdW5kOiAjZWFmZGU3O1xufVxuXG4uc2VydmljZXMgLmljb24tYm94LWdyZWVuIC5pY29uIGkge1xuICBjb2xvcjogIzQxY2YyZTtcbn1cblxuLnNlcnZpY2VzIC5pY29uLWJveC1ncmVlbjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzQxY2YyZTtcbn1cblxuLnNlcnZpY2VzIC5pY29uLWJveC1ibHVlIC5pY29uIHtcbiAgYmFja2dyb3VuZDogI2UxZWVmZjtcbn1cblxuLnNlcnZpY2VzIC5pY29uLWJveC1ibHVlIC5pY29uIGkge1xuICBjb2xvcjogIzIyODJmZjtcbn1cblxuLnNlcnZpY2VzIC5pY29uLWJveC1ibHVlOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjI4MmZmO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIFdoeSBVc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLndoeS11cyAuY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMCA1cHggMjVweCAwIHJnYmEoMjE0LCAyMTUsIDIxNiwgMC42KTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLndoeS11cyAuaWNvbi1ib3grLmljb24tYm94IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLndoeS11cyAuaWNvbi1ib3ggLmljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA3MnB4O1xuICBoZWlnaHQ6IDcycHg7XG4gIGJhY2tncm91bmQ6ICNmM2Y4ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLndoeS11cyAuaWNvbi1ib3ggLmljb24gaSB7XG4gIGNvbG9yOiAjNjhBNEM0O1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi53aHktdXMgLmljb24tYm94OmhvdmVyIC5pY29uIHtcbiAgYmFja2dyb3VuZDogIzY4QTRDNDtcbn1cblxuLndoeS11cyAuaWNvbi1ib3g6aG92ZXIgLmljb24gaSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ud2h5LXVzIC5pY29uLWJveCAudGl0bGUge1xuICBtYXJnaW4tbGVmdDogOTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ud2h5LXVzIC5pY29uLWJveCAudGl0bGUgYSB7XG4gIGNvbG9yOiAjMzQzYTQwO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ud2h5LXVzIC5pY29uLWJveCAudGl0bGUgYTpob3ZlciB7XG4gIGNvbG9yOiAjNjhBNEM0O1xufVxuXG4ud2h5LXVzIC5pY29uLWJveCAuZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tbGVmdDogOTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLndoeS11cyAudmlkZW8tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ud2h5LXVzIC52aWRlby1ib3ggaW1nIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4ud2h5LXVzIC5wbGF5LWJ0biB7XG4gIHdpZHRoOiA5NHB4O1xuICBoZWlnaHQ6IDk0cHg7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjNjhBNEM0IDUwJSwgcmdiYSgxMDQsIDE2NCwgMTk2LCAwLjQpIDUyJSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSA0N3B4KTtcbiAgdG9wOiBjYWxjKDUwJSAtIDQ3cHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2h5LXVzIC5wbGF5LWJ0bjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgI2ZmZjtcbiAgei1pbmRleDogMTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG59XG5cbi53aHktdXMgLnBsYXktYnRuOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNhdGUtYnRuIDJzO1xuICBhbmltYXRpb246IHB1bHNhdGUtYnRuIDJzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGZvcndhcmRzO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzO1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMTA0LCAxNjQsIDE5NiwgMC43KTtcbiAgdG9wOiAtMTUlO1xuICBsZWZ0OiAtMTUlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5OCwgMTYsIDAsIDApO1xufVxuXG4ud2h5LXVzIC5wbGF5LWJ0bjpob3Zlcjo6YWZ0ZXIge1xuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjNjhBNEM0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDIwKTtcbn1cblxuLndoeS11cyAucGxheS1idG46aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNmZmY7XG4gIHotaW5kZXg6IDIwMDtcbiAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XG4gIGFuaW1hdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNhdGUtYnRuIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzYXRlLWJ0biB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiMgRmVhdHVyZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mZWF0dXJlcyAucm93Ky5yb3cge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmZlYXR1cmVzIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZmVhdHVyZXMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZmVhdHVyZXMgdWwgbGkge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmZlYXR1cmVzIHVsIGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgY29sb3I6ICM2OEE0QzQ7XG59XG5cbi5mZWF0dXJlcyBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIEFib3V0XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uYWJvdXQgaDMge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5hYm91dCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5hYm91dCB1bCBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uYWJvdXQgdWwgaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICBjb2xvcjogIzY4QTRDNDtcbn1cblxuLmFib3V0IHA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiMgRmFjdHNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYWN0cyAuY291bnRlcnMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNjhBNEM0O1xufVxuXG4uZmFjdHMgLmNvdW50ZXJzIHAge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiMgT3VyIFNraWxsc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnNraWxscyB7XG4gIHBhZGRpbmc6IDYwcHggMDtcbn1cblxuLnNraWxscyAucHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5za2lsbHMgLnByb2dyZXNzIC5za2lsbCB7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5za2lsbHMgLnByb2dyZXNzIC5za2lsbCAudmFsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbn1cblxuLnNraWxscyAucHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDFweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogLjlzO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIFRldHN0aW1vbmlhbHNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi50ZXN0aW1vbmlhbHMge1xuICBwYWRkaW5nOiA2MHB4IDA7XG59XG5cbi50ZXN0aW1vbmlhbHMgLnNlY3Rpb24taGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWwtaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWwtaXRlbSAudGVzdGltb25pYWwtaW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udGVzdGltb25pYWxzIC50ZXN0aW1vbmlhbC1pdGVtIGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxMHB4IDAgNXB4IDA7XG4gIGNvbG9yOiAjMTExO1xufVxuXG4udGVzdGltb25pYWxzIC50ZXN0aW1vbmlhbC1pdGVtIGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xufVxuXG4udGVzdGltb25pYWxzIC50ZXN0aW1vbmlhbC1pdGVtIC5xdW90ZS1pY29uLWxlZnQsXG4udGVzdGltb25pYWxzIC50ZXN0aW1vbmlhbC1pdGVtIC5xdW90ZS1pY29uLXJpZ2h0IHtcbiAgY29sb3I6ICNmYmZjZmQ7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWwtaXRlbSAucXVvdGUtaWNvbi1sZWZ0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsZWZ0OiAtNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50ZXN0aW1vbmlhbHMgLnRlc3RpbW9uaWFsLWl0ZW0gLnF1b3RlLWljb24tcmlnaHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHJpZ2h0OiAtNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbn1cblxuLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWwtaXRlbSBwIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDAgYXV0byAxNXB4IGF1dG87XG59XG5cbi50ZXN0aW1vbmlhbHMgLm93bC1uYXYsXG4udGVzdGltb25pYWxzIC5vd2wtZG90cyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGVzdGltb25pYWxzIC5vd2wtZG90IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgNXB4O1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQgIWltcG9ydGFudDtcbn1cblxuLnRlc3RpbW9uaWFscyAub3dsLWRvdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhBNEM0ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAudGVzdGltb25pYWxzIC50ZXN0aW1vbmlhbC1pdGVtIHAge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyBTZXJ2aWNlIERldGFpbHNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5zZXJ2aWNlLWRldGFpbHMge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnNlcnZpY2UtZGV0YWlscyAuY2FyZCB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZXJ2aWNlLWRldGFpbHMgLmNhcmQtaW1nIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDYwcHgpO1xuICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5zZXJ2aWNlLWRldGFpbHMgLmNhcmQtaW1nIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5zZXJ2aWNlLWRldGFpbHMgLmNhcmQtYm9keSB7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5zZXJ2aWNlLWRldGFpbHMgLmNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zZXJ2aWNlLWRldGFpbHMgLmNhcmQtdGl0bGUgYSB7XG4gIGNvbG9yOiAjMWU0MzU2O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc2VydmljZS1kZXRhaWxzIC5jYXJkLXRleHQge1xuICBjb2xvcjogIzVlNWU1ZTtcbn1cblxuLnNlcnZpY2UtZGV0YWlscyAucmVhZC1tb3JlIGEge1xuICBjb2xvcjogIzc3Nzc3NztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uc2VydmljZS1kZXRhaWxzIC5yZWFkLW1vcmUgYTpob3ZlciB7XG4gIGNvbG9yOiAjNjhBNEM0O1xufVxuXG4uc2VydmljZS1kZXRhaWxzIC5jYXJkOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnNlcnZpY2UtZGV0YWlscyAuY2FyZDpob3ZlciAuY2FyZC1ib2R5IHtcbiAgYm9yZGVyLWNvbG9yOiAjNjhBNEM0O1xufVxuXG4uc2VydmljZS1kZXRhaWxzIC5jYXJkOmhvdmVyIC5jYXJkLWJvZHkgLmNhcmQtdGl0bGUgYSB7XG4gIGNvbG9yOiAjNjhBNEM0O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIFByaWNpbmdcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5wcmljaW5nIC5yb3cge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuLnByaWNpbmcgLmJveCB7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCByZ2JhKDczLCA3OCwgOTIsIDAuMTUpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcmljaW5nIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4ucHJpY2luZyBoNCB7XG4gIGZvbnQtc2l6ZTogNDZweDtcbiAgY29sb3I6ICM2OEE0QzQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ucHJpY2luZyBoNCBzcGFuIHtcbiAgY29sb3I6ICNiYWJhYmE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcmljaW5nIHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICM5OTk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ucHJpY2luZyB1bCBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG4ucHJpY2luZyB1bCBpIHtcbiAgY29sb3I6ICM2OEE0QzQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG4ucHJpY2luZyB1bCAubmEge1xuICBjb2xvcjogI2NjYztcbn1cblxuLnByaWNpbmcgdWwgLm5hIGkge1xuICBjb2xvcjogI2NjYztcbn1cblxuLnByaWNpbmcgdWwgLm5hIHNwYW4ge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnByaWNpbmcgLmdldC1zdGFydGVkLWJ0biB7XG4gIGJhY2tncm91bmQ6ICMxZTQzNTY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ucHJpY2luZyAuZ2V0LXN0YXJ0ZWQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzY4QTRDNDtcbn1cblxuLnByaWNpbmcgLmZlYXR1cmVkIHtcbiAgei1pbmRleDogMTA7XG4gIG1hcmdpbjogLTMwcHggLTVweCAwIC01cHg7XG59XG5cbi5wcmljaW5nIC5mZWF0dXJlZCAuZ2V0LXN0YXJ0ZWQtYnRuIHtcbiAgYmFja2dyb3VuZDogIzY4QTRDNDtcbn1cblxuLnByaWNpbmcgLmZlYXR1cmVkIC5nZXQtc3RhcnRlZC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjODViNmNmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnByaWNpbmcgLmJveCB7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwIGF1dG8gMzBweCBhdXRvO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucHJpY2luZyAuYm94IHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0byAzMHB4IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5wcmljaW5nIC5ib3gge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0byAzMHB4IGF1dG87XG4gIH1cbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyBQb3J0Zm9saW9cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5wb3J0Zm9saW8ge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLnBvcnRmb2xpbyAjcG9ydGZvbGlvLWZsdGVycyB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAwIDM1cHggMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9ydGZvbGlvICNwb3J0Zm9saW8tZmx0ZXJzIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgMTJweCA1cHggMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDRweCA2cHggNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzQ0NDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBvcnRmb2xpbyAjcG9ydGZvbGlvLWZsdGVycyBsaTpob3Zlcixcbi5wb3J0Zm9saW8gI3BvcnRmb2xpby1mbHRlcnMgbGkuZmlsdGVyLWFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzY4QTRDNDtcbiAgY29sb3I6ICM2OEE0QzQ7XG59XG5cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIHtcbiAgYmFja2dyb3VuZDogIzFlNDM1NjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDAgMCAzMHB4IDA7XG59XG5cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIGltZyB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ucG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSAucG9ydGZvbGlvLWluZm8ge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLnBvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1pbmZvIGgzIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ucG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbSAucG9ydGZvbGlvLWluZm8gaDMgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1pbmZvIGEgaSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnBvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1pbmZvIGEgaTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW06aG92ZXIgaW1nIHtcbiAgb3BhY2l0eTogMC42O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtOmhvdmVyIC5wb3J0Zm9saW8taW5mbyB7XG4gIG9wYWNpdHk6IDE7XG4gIHRvcDogY2FsYyg1MCUgLSAzMHB4KTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyBQb3J0Zm9saW8gRGV0YWlsc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnBvcnRmb2xpby1kZXRhaWxzIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5wb3J0Zm9saW8tZGV0YWlscyAucG9ydGZvbGlvLWRldGFpbHMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1kZXRhaWxzLWNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1kZXRhaWxzLWNhcm91c2VsIC5vd2wtbmF2LFxuLnBvcnRmb2xpby1kZXRhaWxzIC5wb3J0Zm9saW8tZGV0YWlscy1jYXJvdXNlbCAub3dsLWRvdHMge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5wb3J0Zm9saW8tZGV0YWlscyAucG9ydGZvbGlvLWRldGFpbHMtY2Fyb3VzZWwgLm93bC1kb3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XG59XG5cbi5wb3J0Zm9saW8tZGV0YWlscyAucG9ydGZvbGlvLWRldGFpbHMtY2Fyb3VzZWwgLm93bC1kb3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4QTRDNCAhaW1wb3J0YW50O1xufVxuXG4ucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1pbmZvIHtcbiAgcGFkZGluZzogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAtNzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgei1pbmRleDogMjtcbn1cblxuLnBvcnRmb2xpby1kZXRhaWxzIC5wb3J0Zm9saW8taW5mbyBoMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuXG4ucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1pbmZvIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ucG9ydGZvbGlvLWRldGFpbHMgLnBvcnRmb2xpby1pbmZvIHVsIGxpK2xpIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBvcnRmb2xpby1kZXRhaWxzIC5wb3J0Zm9saW8tZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLnBvcnRmb2xpby1kZXRhaWxzIC5wb3J0Zm9saW8tZGVzY3JpcHRpb24gaDIge1xuICB3aWR0aDogNTAlO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wb3J0Zm9saW8tZGV0YWlscyAucG9ydGZvbGlvLWRlc2NyaXB0aW9uIHAge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBvcnRmb2xpby1kZXRhaWxzIC5wb3J0Zm9saW8tZGVzY3JpcHRpb24gaDIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnBvcnRmb2xpby1kZXRhaWxzIC5wb3J0Zm9saW8taW5mbyB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiMgVGVhbVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnRlYW0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLnRlYW0gLm1lbWJlciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZWFtIC5tZW1iZXIgLm1lbWJlci1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZWFtIC5tZW1iZXIgLnNvY2lhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtNDBweDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNDBweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYm90dG9tIGVhc2UtaW4tb3V0IDAuNHM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgzMCwgNjcsIDg2LCAwLjgpO1xufVxuXG4udGVhbSAubWVtYmVyIC5zb2NpYWwgYSB7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAgMTBweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udGVhbSAubWVtYmVyIC5zb2NpYWwgYTpob3ZlciB7XG4gIGNvbG9yOiAjNjhBNEM0O1xufVxuXG4udGVhbSAubWVtYmVyIC5zb2NpYWwgaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwIDJweDtcbn1cblxuLnRlYW0gLm1lbWJlciAubWVtYmVyLWluZm8gaDQge1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDE1cHggMCA1cHggMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGVhbSAubWVtYmVyIC5tZW1iZXItaW5mbyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICM2OEE0QzQ7XG59XG5cbi50ZWFtIC5tZW1iZXIgLm1lbWJlci1pbmZvIHAge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4udGVhbSAubWVtYmVyOmhvdmVyIC5zb2NpYWwge1xuICBib3R0b206IDA7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGJvdHRvbSBlYXNlLWluLW91dCAwLjRzO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIENvbnRhY3Rcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5jb250YWN0IHtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5jb250YWN0IC5pbmZvLWJveCB7XG4gIGNvbG9yOiAjNDQ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjE0LCAyMTUsIDIxNiwgMC42KTtcbiAgcGFkZGluZzogMjBweCAwIDMwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmNvbnRhY3QgLmluZm8tYm94IGkge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiAjNjhBNEM0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAycHggZG90dGVkICNhMmNjZTM7XG59XG5cbi5jb250YWN0IC5pbmZvLWJveCBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uY29udGFjdCAuaW5mby1ib3ggcCB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jb250YWN0IC5waHAtZW1haWwtZm9ybSB7XG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjE0LCAyMTUsIDIxNiwgMC42KTtcbiAgcGFkZGluZzogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmNvbnRhY3QgLnBocC1lbWFpbC1mb3JtIC52YWxpZGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY29udGFjdCAucGhwLWVtYWlsLWZvcm0gLmVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2VkM2MwZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNvbnRhY3QgLnBocC1lbWFpbC1mb3JtIC5lcnJvci1tZXNzYWdlIGJyK2JyIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmNvbnRhY3QgLnBocC1lbWFpbC1mb3JtIC5zZW50LW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzE4ZDI2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY29udGFjdCAucGhwLWVtYWlsLWZvcm0gLmxvYWRpbmcge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5jb250YWN0IC5waHAtZW1haWwtZm9ybSAubG9hZGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwIDEwcHggLTZweCAwO1xuICBib3JkZXI6IDNweCBzb2xpZCAjMThkMjZlO1xuICBib3JkZXItdG9wLWNvbG9yOiAjZWVlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS1sb2FkaW5nIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlLWxvYWRpbmcgMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uY29udGFjdCAucGhwLWVtYWlsLWZvcm0gaW5wdXQsXG4uY29udGFjdCAucGhwLWVtYWlsLWZvcm0gdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb250YWN0IC5waHAtZW1haWwtZm9ybSBpbnB1dDo6Zm9jdXMsXG4uY29udGFjdCAucGhwLWVtYWlsLWZvcm0gdGV4dGFyZWE6OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4QTRDNDtcbn1cblxuLmNvbnRhY3QgLnBocC1lbWFpbC1mb3JtIGlucHV0IHtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xufVxuXG4uY29udGFjdCAucGhwLWVtYWlsLWZvcm0gdGV4dGFyZWEge1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG59XG5cbi5jb250YWN0IC5waHAtZW1haWwtZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGJhY2tncm91bmQ6ICM2OEE0QzQ7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMTBweCAyNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmNvbnRhY3QgLnBocC1lbWFpbC1mb3JtIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzhkYmFkMjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtbG9hZGluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBhbmltYXRlLWxvYWRpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiMgTWFwXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ubWFwIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogLTZweDtcbn1cblxuLm1hcCBpZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzODBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyBCbG9nXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uYmxvZyB7XG4gIHBhZGRpbmc6IDQwcHggMCAyMHB4IDA7XG59XG5cbi5ibG9nIC5lbnRyeSB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYmxvZyAuZW50cnkgLmVudHJ5LWltZyB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW46IC0zMHB4IC0zMHB4IDIwcHggLTMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ibG9nIC5lbnRyeSAuZW50cnktdGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG59XG5cbi5ibG9nIC5lbnRyeSAuZW50cnktdGl0bGUgYSB7XG4gIGNvbG9yOiAjMzI2MjdiO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uYmxvZyAuZW50cnkgLmVudHJ5LXRpdGxlIGE6aG92ZXIge1xuICBjb2xvcjogIzY4QTRDNDtcbn1cblxuLmJsb2cgLmVudHJ5IC5lbnRyeS1tZXRhIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICNkZGRkZGQ7XG59XG5cbi5ibG9nIC5lbnRyeSAuZW50cnktbWV0YSB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYmxvZyAuZW50cnkgLmVudHJ5LW1ldGEgdWwgbGkrbGkge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5ibG9nIC5lbnRyeSAuZW50cnktbWV0YSBpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cbi5ibG9nIC5lbnRyeSAuZW50cnktbWV0YSBhIHtcbiAgY29sb3I6ICNhYWFhYWE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYmxvZyAuZW50cnkgLmVudHJ5LWNvbnRlbnQgcCB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uYmxvZyAuZW50cnkgLmVudHJ5LWNvbnRlbnQgLnJlYWQtbW9yZSB7XG4gIC1tb3otdGV4dC1hbGlnbi1sYXN0OiByaWdodDtcbiAgdGV4dC1hbGlnbi1sYXN0OiByaWdodDtcbn1cblxuLmJsb2cgLmVudHJ5IC5lbnRyeS1jb250ZW50IC5yZWFkLW1vcmUgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzY4QTRDNDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ibG9nIC5lbnRyeSAuZW50cnktY29udGVudCAucmVhZC1tb3JlIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzI2MjdiO1xufVxuXG4uYmxvZyAuZW50cnkgLmVudHJ5LWNvbnRlbnQgaDMge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmxvZyAuZW50cnkgLmVudHJ5LWNvbnRlbnQgYmxvY2txdW90ZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIHBhZGRpbmc6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmJsb2cgLmVudHJ5IC5lbnRyeS1jb250ZW50IGJsb2NrcXVvdGUgcCB7XG4gIGNvbG9yOiAjNDQ0O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmJsb2cgLmVudHJ5IC5lbnRyeS1jb250ZW50IGJsb2NrcXVvdGUgLnF1b3RlLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwcHg7XG4gIHRvcDogMjBweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogI2U3ZTdlNztcbn1cblxuLmJsb2cgLmVudHJ5IC5lbnRyeS1jb250ZW50IGJsb2NrcXVvdGUgLnF1b3RlLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAjZTdlN2U3O1xufVxuXG4uYmxvZyAuZW50cnkgLmVudHJ5LWNvbnRlbnQgYmxvY2txdW90ZTo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNjI3YjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmJsb2cgLmVudHJ5IC5lbnRyeS1mb290ZXIge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG5cbi5ibG9nIC5lbnRyeSAuZW50cnktZm9vdGVyIGkge1xuICBjb2xvcjogIzRjOTljMTtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uYmxvZyAuZW50cnkgLmVudHJ5LWZvb3RlciBhIHtcbiAgY29sb3I6ICM5MGMwZDg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5ibG9nIC5lbnRyeSAuZW50cnktZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogIzY4QTRDNDtcbn1cblxuLmJsb2cgLmVudHJ5IC5lbnRyeS1mb290ZXIgLmNhdHMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJsb2cgLmVudHJ5IC5lbnRyeS1mb290ZXIgLmNhdHMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5ibG9nIC5lbnRyeSAuZW50cnktZm9vdGVyIC50YWdzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ibG9nIC5lbnRyeSAuZW50cnktZm9vdGVyIC50YWdzIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYmxvZyAuZW50cnkgLmVudHJ5LWZvb3RlciAudGFncyBsaStsaTo6YmVmb3JlIHtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgY29udGVudDogXCIsXCI7XG59XG5cbi5ibG9nIC5lbnRyeSAuZW50cnktZm9vdGVyIC5zaGFyZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmJsb2cgLmVudHJ5IC5lbnRyeS1mb290ZXIgLnNoYXJlIGkge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmJsb2cgLmVudHJ5LXNpbmdsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5ibG9nIC5ibG9nLWF1dGhvciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYmxvZyAuYmxvZy1hdXRob3IgaW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4uYmxvZyAuYmxvZy1hdXRob3IgaDQge1xuICBtYXJnaW4tbGVmdDogMTQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYmxvZyAuYmxvZy1hdXRob3IgLnNvY2lhbC1saW5rcyB7XG4gIG1hcmdpbjogMCAwIDVweCAxNDBweDtcbn1cblxuLmJsb2cgLmJsb2ctYXV0aG9yIC5zb2NpYWwtbGlua3MgYSB7XG4gIGNvbG9yOiAjNzJhZmNlO1xufVxuXG4uYmxvZyAuYmxvZy1hdXRob3IgcCB7XG4gIG1hcmdpbi1sZWZ0OiAxNDBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogI2I3YjdiNztcbn1cblxuLmJsb2cgLmJsb2ctY29tbWVudHMge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uYmxvZyAuYmxvZy1jb21tZW50cyAuY29tbWVudHMtY291bnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJsb2cgLmJsb2ctY29tbWVudHMgLmNvbW1lbnQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ibG9nIC5ibG9nLWNvbW1lbnRzIC5jb21tZW50IC5jb21tZW50LWltZyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uYmxvZyAuYmxvZy1jb21tZW50cyAuY29tbWVudCBoNSB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmJsb2cgLmJsb2ctY29tbWVudHMgLmNvbW1lbnQgaDUgYSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzQ0NDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmJsb2cgLmJsb2ctY29tbWVudHMgLmNvbW1lbnQgaDUgYTpob3ZlciB7XG4gIGNvbG9yOiAjNjhBNEM0O1xufVxuXG4uYmxvZyAuYmxvZy1jb21tZW50cyAuY29tbWVudCBoNSAucmVwbHkge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjMzI2MjdiO1xufVxuXG4uYmxvZyAuYmxvZy1jb21tZW50cyAuY29tbWVudCB0aW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzJhZmNlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5ibG9nIC5ibG9nLWNvbW1lbnRzIC5jb21tZW50IHAge1xuICBtYXJnaW4tbGVmdDogNjVweDtcbn1cblxuLmJsb2cgLmJsb2ctY29tbWVudHMgLmNvbW1lbnQuY29tbWVudC1yZXBseSB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLmJsb2cgLmJsb2ctY29tbWVudHMgLnJlcGx5LWZvcm0ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJsb2cgLmJsb2ctY29tbWVudHMgLnJlcGx5LWZvcm0gaDQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uYmxvZyAuYmxvZy1jb21tZW50cyAucmVwbHktZm9ybSBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYmxvZyAuYmxvZy1jb21tZW50cyAucmVwbHktZm9ybSBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYmxvZyAuYmxvZy1jb21tZW50cyAucmVwbHktZm9ybSBpbnB1dDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2EyY2NlMztcbn1cblxuLmJsb2cgLmJsb2ctY29tbWVudHMgLnJlcGx5LWZvcm0gdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJsb2cgLmJsb2ctY29tbWVudHMgLnJlcGx5LWZvcm0gdGV4dGFyZWE6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItY29sb3I6ICNhMmNjZTM7XG59XG5cbi5ibG9nIC5ibG9nLWNvbW1lbnRzIC5yZXBseS1mb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmJsb2cgLmJsb2ctY29tbWVudHMgLnJlcGx5LWZvcm0gLmJ0bi1wcmltYXJ5IHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjYyN2I7XG59XG5cbi5ibG9nIC5ibG9nLWNvbW1lbnRzIC5yZXBseS1mb3JtIC5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OEE0QzQ7XG59XG5cbi5ibG9nIC5ibG9nLXBhZ2luYXRpb24ge1xuICBjb2xvcjogIzdiOWJhYjtcbn1cblxuLmJsb2cgLmJsb2ctcGFnaW5hdGlvbiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmJsb2cgLmJsb2ctcGFnaW5hdGlvbiBsaSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBtYXJnaW46IDAgNXB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uYmxvZyAuYmxvZy1wYWdpbmF0aW9uIGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYmxvZyAuYmxvZy1wYWdpbmF0aW9uIGxpIGEge1xuICBjb2xvcjogI2FhYWFhYTtcbiAgcGFkZGluZzogN3B4IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJsb2cgLmJsb2ctcGFnaW5hdGlvbiBsaS5hY3RpdmUsXG4uYmxvZyAuYmxvZy1wYWdpbmF0aW9uIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzY4QTRDNDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY4QTRDNDtcbn1cblxuLmJsb2cgLmJsb2ctcGFnaW5hdGlvbiBsaS5hY3RpdmUgYSxcbi5ibG9nIC5ibG9nLXBhZ2luYXRpb24gbGk6aG92ZXIgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYmxvZyAuYmxvZy1wYWdpbmF0aW9uIGxpLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5ibG9nIC5ibG9nLXBhZ2luYXRpb24gbGkuZGlzYWJsZWQgaSB7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJsb2cgLnNpZGViYXIge1xuICBwYWRkaW5nOiAzMHB4O1xuICBtYXJnaW46IDAgMCA2MHB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYmxvZyAuc2lkZWJhciAuc2lkZWJhci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMCAwIDAgMDtcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xuICBjb2xvcjogIzMyNjI3YjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmxvZyAuc2lkZWJhciAuc2lkZWJhci1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmJsb2cgLnNpZGViYXIgLnNlYXJjaC1mb3JtIGZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmxvZyAuc2lkZWJhciAuc2VhcmNoLWZvcm0gZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogNHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG59XG5cbi5ibG9nIC5zaWRlYmFyIC5zZWFyY2gtZm9ybSBmb3JtIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIGJhY2tncm91bmQ6ICMzMjYyN2I7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uYmxvZyAuc2lkZWJhciAuc2VhcmNoLWZvcm0gZm9ybSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNjhBNEM0O1xufVxuXG4uYmxvZyAuc2lkZWJhciAuY2F0ZWdvcmllcyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ibG9nIC5zaWRlYmFyIC5jYXRlZ29yaWVzIHVsIGxpK2xpIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5ibG9nIC5zaWRlYmFyIC5jYXRlZ29yaWVzIHVsIGEge1xuICBjb2xvcjogIzNmOGRiNTtcbn1cblxuLmJsb2cgLnNpZGViYXIgLmNhdGVnb3JpZXMgdWwgYTpob3ZlciB7XG4gIGNvbG9yOiAjNjhBNEM0O1xufVxuXG4uYmxvZyAuc2lkZWJhciAuY2F0ZWdvcmllcyB1bCBhIHNwYW4ge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgY29sb3I6ICNiZWRhZTg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJsb2cgLnNpZGViYXIgLnJlY2VudC1wb3N0cyAucG9zdC1pdGVtKy5wb3N0LWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uYmxvZyAuc2lkZWJhciAucmVjZW50LXBvc3RzIGltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmJsb2cgLnNpZGViYXIgLnJlY2VudC1wb3N0cyBoNCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDk1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmxvZyAuc2lkZWJhciAucmVjZW50LXBvc3RzIGg0IGEge1xuICBjb2xvcjogIzBkMjczNTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmJsb2cgLnNpZGViYXIgLnJlY2VudC1wb3N0cyBoNCBhOmhvdmVyIHtcbiAgY29sb3I6ICM2OEE0QzQ7XG59XG5cbi5ibG9nIC5zaWRlYmFyIC5yZWNlbnQtcG9zdHMgdGltZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogOTVweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzJhZmNlO1xufVxuXG4uYmxvZyAuc2lkZWJhciAudGFncyB7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuXG4uYmxvZyAuc2lkZWJhciAudGFncyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ibG9nIC5zaWRlYmFyIC50YWdzIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYmxvZyAuc2lkZWJhciAudGFncyB1bCBhIHtcbiAgY29sb3I6ICMzZjhkYjU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIG1hcmdpbjogMCA2cHggOHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGVmZjU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmJsb2cgLnNpZGViYXIgLnRhZ3MgdWwgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzI2MjdiO1xuICBiYWNrZ3JvdW5kOiAjMzI2MjdiO1xufVxuXG4uYmxvZyAuc2lkZWJhciAudGFncyB1bCBhIHNwYW4ge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgY29sb3I6ICNiZWRhZTg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyBGb290ZXJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiNmb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMGIyMTJkO1xuICBwYWRkaW5nOiAwIDAgMzBweCAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4jZm9vdGVyIC5mb290ZXItbmV3c2xldHRlciB7XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgYmFja2dyb3VuZDogIzBkMjczNTtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLW5ld3NsZXR0ZXIgaDQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjYTJjY2UzO1xufVxuXG4jZm9vdGVyIC5mb290ZXItbmV3c2xldHRlciBmb3JtIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLW5ld3NsZXR0ZXIgZm9ybSBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDRweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLW5ld3NsZXR0ZXIgZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbjogM3B4O1xuICBiYWNrZ3JvdW5kOiAjNjhBNEM0O1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLW5ld3NsZXR0ZXIgZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzQ2OGRiMztcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCB7XG4gIGJhY2tncm91bmQ6ICMwZDI3MzU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMTc0NTVlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzEyMzY0OTtcbiAgcGFkZGluZzogNjBweCAwIDMwcHggMDtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItaW5mbyBoMyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBwYWRkaW5nOiAycHggMCAycHggMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjYTJjY2UzO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItaW5mbyBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5zb2NpYWwtbGlua3MgYSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjMWU0MzU2O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLnNvY2lhbC1saW5rcyBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzY4QTRDNDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNhMmNjZTM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGkge1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIGNvbG9yOiAjYTJjY2UzO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCBsaTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgYTpob3ZlciB7XG4gIGNvbG9yOiAjYTJjY2UzO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItY29udGFjdCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1jb250YWN0IHAge1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2Zvb3RlciAuY29weXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuI2Zvb3RlciAuY3JlZGl0cyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNmb290ZXIgLmNyZWRpdHMgYSB7XG4gIGNvbG9yOiAjYTJjY2UzO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _play_play_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./play/play.component */
    "./src/app/play/play.component.ts");
    /* harmony import */


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./portfolio/portfolio.component */
    "./src/app/portfolio/portfolio.component.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/team/team.component.ts");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _shared_body_body_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/body/body.component */
    "./src/app/shared/body/body.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"], _play_play_component__WEBPACK_IMPORTED_MODULE_9__["PlayComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_12__["TeamComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _shared_body_body_component__WEBPACK_IMPORTED_MODULE_15__["BodyComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"], _play_play_component__WEBPACK_IMPORTED_MODULE_9__["PlayComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_12__["TeamComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _shared_body_body_component__WEBPACK_IMPORTED_MODULE_15__["BodyComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog.component.ts": function srcAppBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent() {
        _classCallCheck(this, BlogComponent);
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)();
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 260,
      vars: 0,
      consts: [[1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], ["href", "index.html"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-out", "data-aos-duration", "500", 1, "blog"], [1, "row"], [1, "col-lg-8", "entries"], [1, "entry"], [1, "entry-img"], ["src", "assets/img/blog-post-1.jpg", "alt", "", 1, "img-fluid"], [1, "entry-title"], ["href", "blog-single.html"], [1, "entry-meta"], [1, "d-flex", "align-items-center"], [1, "icofont-user"], [1, "icofont-wall-clock"], ["datetime", "2020-01-01"], [1, "icofont-comment"], [1, "entry-content"], [1, "read-more"], ["src", "assets/img/blog-post-2.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/blog-post-3.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/blog-post-4.jpg", "alt", "", 1, "img-fluid"], [1, "blog-pagination"], [1, "justify-content-center"], [1, "disabled"], [1, "icofont-rounded-left"], ["href", "#"], [1, "active"], [1, "icofont-rounded-right"], [1, "col-lg-4"], [1, "sidebar"], [1, "sidebar-title"], [1, "sidebar-item", "search-form"], ["action", ""], ["type", "text"], ["type", "submit"], [1, "icofont-search"], [1, "sidebar-item", "categories"], [1, "sidebar-item", "recent-posts"], [1, "post-item", "clearfix"], ["src", "assets/img/recent-posts-1.jpg", "alt", ""], ["src", "assets/img/recent-posts-2.jpg", "alt", ""], ["src", "assets/img/recent-posts-3.jpg", "alt", ""], ["src", "assets/img/recent-posts-4.jpg", "alt", ""], ["src", "assets/img/recent-posts-5.jpg", "alt", ""], [1, "sidebar-item", "tags"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia reiciendis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "time", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Jan 1, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "12 Comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Nisi magni odit consequatur autem nulla dolorem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "time", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Jan 1, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "12 Comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "time", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Jan 1, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "12 Comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem. Veniam eius velit ab ipsa quidem rem.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "time", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Jan 1, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "12 Comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h3", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "form", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h3", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "General ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "(25)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Lifestyle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "(12)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Travel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "(5)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Design ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "(22)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Creative ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "(8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Educaion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "(14)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h3", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Recent Posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Nihil blanditiis at in nihil autem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "time", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Jan 1, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Quidem autem et impedit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "time", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Jan 1, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Id quia et et ut maxime similique occaecati ut");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "time", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Jan 1, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Laborum corporis quo dara net para");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "time", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Jan 1, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Et dolores corrupti quae illo quod dolor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "time", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Jan 1, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h3", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "IT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Business");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Business");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Mac");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Office");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Creative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Studio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Smart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Tips");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Marketing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts": function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 44,
      vars: 0,
      consts: [[1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], ["href", "index.html"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-out", "data-aos-duration", "500", 1, "contact"], [1, "row"], [1, "col-12"], [1, "col-md-12"], [1, "info-box"], [1, "bx", "bx-map"], [1, "col-md-6"], [1, "bx", "bx-envelope"], [1, "bx", "bx-phone-call"], [1, "map", "mt-2"], [1, "container-fluid", "p-0"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sbg!4v1579767901424!5m2!1sen!2sbg", "frameborder", "0", "allowfullscreen", "", 2, "border", "0"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Our Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "A108 Adam Street, New York, NY 535022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "info@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "contact@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Call Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "+1 5589 55488 55");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "+1 6678 254445 41");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "iframe", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/error/error.component.ts": function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ErrorComponent = /*#__PURE__*/function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
      return new (t || ErrorComponent)();
    };

    ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorComponent,
      selectors: [["app-error"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container-fluid"], ["src", "assets/img/404.svg", "alt", "", 1, "img-fluid"]],
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error',
          templateUrl: './error.component.html',
          styleUrls: ['./error.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts": function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_body_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/body/body.component */
    "./src/app/shared/body/body.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 1,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-body");
        }
      },
      directives: [_shared_body_body_component__WEBPACK_IMPORTED_MODULE_1__["BodyComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/play/play.component.ts": function srcAppPlayPlayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayComponent", function () {
      return PlayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PlayComponent_li_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_li_26_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var data_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.removeNames(data_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r1, " ");
      }
    }

    var PlayComponent = /*#__PURE__*/function () {
      function PlayComponent() {
        _classCallCheck(this, PlayComponent);

        this.names = ['ahmed', 'mostafa', 'mohamed', 'anwar'];
      }

      _createClass(PlayComponent, [{
        key: "addName",
        value: function addName() {
          this.names.push(this.newValue);
          this.newValue = "";
        }
      }, {
        key: "removeNames",
        value: function removeNames(data) {
          var index = this.names.indexOf(data);
          this.names.splice(index, 1);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlayComponent;
    }();

    PlayComponent.ɵfac = function PlayComponent_Factory(t) {
      return new (t || PlayComponent)();
    };

    PlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayComponent,
      selectors: [["app-play"]],
      decls: 27,
      vars: 28,
      consts: [[1, "container", "play-body"], [1, "row", "justify-content-center", "bg-primary", "mg-2"], [1, "text-center", "text-light", "my-2"], [1, "row", "justify-content-center"], ["type", "text", "placeholder", "Write here", 1, "inputtt", "bg-info", "text-light", 3, "ngModel", "ngModelChange"], [1, "col", "col-12", "play-data"], [1, "text-primary", "text-center", "display-4"], ["type", "text", "placeholder", "Width px", 1, "bg-dark", "text-light", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Height px", 1, "bg-warning", "text-light", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "BackgroundColor", 1, "inputtall", "bg-info", "text-light", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Margin px", 1, "bg-primary", "text-light", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Padding px", 1, "bg-secondary", "text-light", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "border-radius %", 1, "inputmed", "bg-success", "text-light", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "border px type color", 1, "inputtall", "bg-danger", "text-light", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "outline color type px", 1, "inputtall", "bg-dark", "text-light", 3, "ngModel", "ngModelChange"], [1, "play2-data"], ["type", "text", "placeholder", "add names.", 1, "inputtt", "bg-info", "text-light", 3, "ngModel", "ngModelChange"], [1, "btnnnn", "btn", "btn-primary", 3, "click"], ["class", "textttt text-primary display-4", 4, "ngFor", "ngForOf"], [1, "textttt", "text-primary", "display-4"], [1, "col", "justify-content-end", "btnremoveee"], [1, "btnremove", "btn-danger", 3, "click"]],
      template: function PlayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PLAY TIME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.myData = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.w = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.h = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.bg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.margin = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.padding = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.borderradius = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.border = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.outline = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.newValue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayComponent_Template_button_click_22_listener() {
            return ctx.addName();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Click ME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PlayComponent_li_26_Template, 5, 1, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.myData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.w);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.h);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.margin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.padding);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.borderradius);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.border);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.outline);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.w)("height", ctx.h)("background", ctx.bg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"])("margin", ctx.margin)("padding", ctx.padding)("border-radius", ctx.borderradius)("border", ctx.border)("outline", ctx.outline);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.names);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".play-body[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  padding-top: 50px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.play-data[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.play2-data[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  width: 100%;\r\n  transition: all 2s;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  padding-right: 5px;\r\n  width: 11%;\r\n  color: white;\r\n}\r\n\r\n.inputmed[_ngcontent-%COMP%] {\r\n  width: 11.3%;\r\n}\r\n\r\n.inputtall[_ngcontent-%COMP%] {\r\n  width: 14%;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: white;\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n  color: white;\r\n}\r\n\r\n.inputtt[_ngcontent-%COMP%] {\r\n  width: 1000%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btnnnn[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  width: 100%;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n.btnremove[_ngcontent-%COMP%] {\r\n  width: 24px;\r\n  height: 26px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.btnremoveee[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-self: flex-end;\r\n  margin-left: 50px;\r\n}\r\n\r\n.textttt[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  display: flex;\r\n  align-self: flex-start;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS9wbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRkE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcGxheS9wbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheS1ib2R5IHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5wbGF5LWRhdGEge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wbGF5Mi1kYXRhIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAycztcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB3aWR0aDogMTElO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmlucHV0bWVkIHtcclxuICB3aWR0aDogMTEuMyU7XHJcbn1cclxuXHJcbi5pbnB1dHRhbGwge1xyXG4gIHdpZHRoOiAxNCU7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmlucHV0dHQge1xyXG4gIHdpZHRoOiAxMDAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnRubm5uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxudWwgbGkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5idG5yZW1vdmUge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmJ0bnJlbW92ZWVlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4udGV4dHR0dCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-play',
          templateUrl: './play.component.html',
          styleUrls: ['./play.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/portfolio/portfolio.component.ts": function srcAppPortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PortfolioComponent = /*#__PURE__*/function () {
      function PortfolioComponent() {
        _classCallCheck(this, PortfolioComponent);
      }

      _createClass(PortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
      return new (t || PortfolioComponent)();
    };

    PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioComponent,
      selectors: [["app-portfolio"]],
      decls: 133,
      vars: 0,
      consts: [[1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], ["href", "index.html"], [1, "portfolio"], [1, "row"], [1, "col-lg-12"], ["id", "portfolio-flters"], ["data-filter", "*", 1, "filter-active"], ["data-filter", ".filter-app"], ["data-filter", ".filter-card"], ["data-filter", ".filter-web"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-out", "data-aos-duration", "500", 1, "row", "portfolio-container"], [1, "col-lg-4", "col-md-6", "filter-app"], [1, "portfolio-item"], ["src", "assets/img/portfolio/portfolio-1.jpg", "alt", "", 1, "img-fluid"], [1, "portfolio-info"], ["href", "assets/img/portfolio/portfolio-1.jpg", "data-gall", "portfolioGallery", "title", "App 1", 1, "venobox"], [1, "bx", "bx-plus"], ["href", "portfolio-details.html", "title", "Portfolio Details"], [1, "bx", "bx-link"], [1, "col-lg-4", "col-md-6", "filter-web"], ["src", "assets/img/portfolio/portfolio-2.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-2.jpg", "data-gall", "portfolioGallery", "title", "Web 3", 1, "venobox"], ["src", "assets/img/portfolio/portfolio-3.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-3.jpg", "data-gall", "portfolioGallery", "title", "App 2", 1, "venobox"], [1, "col-lg-4", "col-md-6", "filter-card"], ["src", "assets/img/portfolio/portfolio-4.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-4.jpg", "data-gall", "portfolioGallery", "title", "Card 2", 1, "venobox"], ["src", "assets/img/portfolio/portfolio-5.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-5.jpg", "data-gall", "portfolioGallery", "title", "Web 2", 1, "venobox"], ["src", "assets/img/portfolio/portfolio-6.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-6.jpg", "data-gall", "portfolioGallery", "title", "App 3", 1, "venobox"], ["src", "assets/img/portfolio/portfolio-7.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-7.jpg", "data-gall", "portfolioGallery", "title", "Card 1", 1, "venobox"], ["src", "assets/img/portfolio/portfolio-8.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-8.jpg", "data-gall", "portfolioGallery", "title", "Card 3", 1, "venobox"], ["src", "assets/img/portfolio/portfolio-9.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-9.jpg", "data-gall", "portfolioGallery", "title", "Web 1", 1, "venobox"]],
      template: function PortfolioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Our Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "App 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Web 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "App 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Card 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Web 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "App 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Card 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Card 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Web 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portfolio',
          templateUrl: './portfolio.component.html',
          styleUrls: ['./portfolio.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/services.component.ts": function srcAppServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };

    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-services"]],
      decls: 217,
      vars: 0,
      consts: [[1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], ["href", "index.html"], [1, "services"], [1, "row"], ["data-aos", "fade-up", 1, "col-md-6", "col-lg-3", "d-flex", "align-items-stretch"], [1, "icon-box", "icon-box-pink"], [1, "icon"], [1, "bx", "bxl-dribbble"], [1, "title"], ["href", ""], [1, "description"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-md-6", "col-lg-3", "d-flex", "align-items-stretch"], [1, "icon-box", "icon-box-cyan"], [1, "bx", "bx-file"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-md-6", "col-lg-3", "d-flex", "align-items-stretch"], [1, "icon-box", "icon-box-green"], [1, "bx", "bx-tachometer"], [1, "icon-box", "icon-box-blue"], [1, "bx", "bx-world"], ["data-aos", "fade-up", "date-aos-delay", "200", 1, "why-us", "section-bg"], [1, "col-lg-6", "video-box"], ["src", "assets/img/why-us.jpg", "alt", "", 1, "img-fluid"], ["href", "https://www.youtube.com/watch?v=jDDaplaOz7Q", "data-vbtype", "video", "data-autoplay", "true", 1, "venobox", "play-btn", "mb-4"], [1, "col-lg-6", "d-flex", "flex-column", "justify-content-center", "p-5"], [1, "icon-box"], [1, "bx", "bx-fingerprint"], [1, "bx", "bx-gift"], [1, "service-details"], ["data-aos", "fade-up", 1, "col-md-6", "d-flex", "align-items-stretch"], [1, "card"], [1, "card-img"], ["src", "assets/img/service-details-1.jpg", "alt", "..."], [1, "card-body"], [1, "card-title"], ["href", "#"], [1, "card-text"], [1, "read-more"], [1, "icofont-arrow-right"], ["src", "assets/img/service-details-2.jpg", "alt", "..."], ["src", "assets/img/service-details-3.jpg", "alt", "..."], ["src", "assets/img/service-details-4.jpg", "alt", "..."], ["data-aos", "fade-up", 1, "pricing", "section-bg"], [1, "section-title"], [1, "row", "no-gutters"], [1, "col-lg-4", "box"], [1, "bx", "bx-check"], [1, "na"], [1, "bx", "bx-x"], ["href", "#", 1, "get-started-btn"], [1, "col-lg-4", "box", "featured"]],
      template: function ServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Our Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lorem Ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sed ut perspiciatis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Magni Dolores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Nemo Enim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Lorem Ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Nemo Enim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "section", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Our Mission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h5", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Our Plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h5", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Our Vision");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h5", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Our Care");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem. In molestiae earum ab sit esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil aut incidunt aut");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "section", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Free");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "$0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "per month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Quam adipiscing vitae proin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Nec feugiat nisl pretium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Nulla at volutpat diam uteera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Pharetra massa massa ultricies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Massa ultricies mi quis hendrerit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Business");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "$29");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "per month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Quam adipiscing vitae proin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Nec feugiat nisl pretium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Nulla at volutpat diam uteera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Pharetra massa massa ultricies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Massa ultricies mi quis hendrerit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "$49");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "per month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Quam adipiscing vitae proin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " Nec feugiat nisl pretium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " Nulla at volutpat diam uteera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " Pharetra massa massa ultricies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Massa ultricies mi quis hendrerit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-services',
          templateUrl: './services.component.html',
          styleUrls: ['./services.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/body/body.component.ts": function srcAppSharedBodyBodyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BodyComponent", function () {
      return BodyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BodyComponent = /*#__PURE__*/function () {
      function BodyComponent() {
        _classCallCheck(this, BodyComponent);
      }

      _createClass(BodyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BodyComponent;
    }();

    BodyComponent.ɵfac = function BodyComponent_Factory(t) {
      return new (t || BodyComponent)();
    };

    BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BodyComponent,
      selectors: [["app-body"]],
      decls: 158,
      vars: 0,
      consts: [["id", "hero", 1, "d-flex", "justify-cntent-center", "align-items-center"], ["id", "heroCarousel", "data-ride", "carousel", 1, "container", "carousel", "carousel-fade"], [1, "carousel-item", "active"], [1, "carousel-container"], [1, "animate__animated", "animate__fadeInDown"], [1, "animate__animated", "animate__fadeInUp"], ["href", "", 1, "btn-get-started", "animate__animated", "animate__fadeInUp"], [1, "carousel-item"], ["href", "#heroCarousel", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon", "bx", "bx-chevron-left"], [1, "sr-only"], ["href", "#heroCarousel", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon", "bx", "bx-chevron-right"], [1, "services"], [1, "container"], [1, "row"], ["data-aos", "fade-up", 1, "col-md-6", "col-lg-3", "d-flex", "align-items-stretch"], [1, "icon-box", "icon-box-pink"], [1, "icon"], [1, "bx", "bxl-dribbble"], [1, "title"], ["href", ""], [1, "description"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-md-6", "col-lg-3", "d-flex", "align-items-stretch"], [1, "icon-box", "icon-box-cyan"], [1, "bx", "bx-file"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-md-6", "col-lg-3", "d-flex", "align-items-stretch"], [1, "icon-box", "icon-box-green"], [1, "bx", "bx-tachometer"], [1, "icon-box", "icon-box-blue"], [1, "bx", "bx-world"], ["data-aos", "fade-up", "date-aos-delay", "200", 1, "why-us", "section-bg"], [1, "col-lg-6", "video-box"], ["src", "assets/img/why-us.jpg", "alt", "", 1, "img-fluid"], ["href", "https://www.youtube.com/watch?v=jDDaplaOz7Q", "data-vbtype", "video", "data-autoplay", "true", 1, "venobox", "play-btn", "mb-4"], [1, "col-lg-6", "d-flex", "flex-column", "justify-content-center", "p-5"], [1, "icon-box"], [1, "bx", "bx-fingerprint"], [1, "bx", "bx-gift"], [1, "features"], [1, "section-title"], ["data-aos", "fade-up", 1, "row"], [1, "col-md-5"], ["src", "assets/img/features-1.svg", "alt", "", 1, "img-fluid"], [1, "col-md-7", "pt-4"], [1, "font-italic"], [1, "icofont-check"], [1, "col-md-5", "order-1", "order-md-2"], ["src", "assets/img/features-2.svg", "alt", "", 1, "img-fluid"], [1, "col-md-7", "pt-5", "order-2", "order-md-1"], ["src", "assets/img/features-3.svg", "alt", "", 1, "img-fluid"], [1, "col-md-7", "pt-5"], ["src", "assets/img/features-4.svg", "alt", "", 1, "img-fluid"]],
      template: function BodyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Moderna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem Ipsum Dolor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sequi ea ut et est quaerat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Lorem Ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sed ut perspiciatis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Magni Dolores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Nemo Enim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "section", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Lorem Ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Nemo Enim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "section", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Ullamco laboris nisi ut aliquip ex ea commodo consequat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Duis aute irure dolor in reprehenderit in voluptate velit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Corporis temporibus maiores provident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Ullamco laboris nisi ut aliquip ex ea commodo consequat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Duis aute irure dolor in reprehenderit in voluptate velit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ib2R5L2JvZHkuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-body',
          templateUrl: './body.component.html',
          styleUrls: ['./body.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/footer/footer.component.ts": function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 110,
      vars: 0,
      consts: [["id", "footer", "data-aos", "fade-up", "data-aos-easing", "ease-in-out", "data-aos-duration", "500"], [1, "footer-newsletter"], [1, "container"], [1, "row"], [1, "col-lg-6"], ["action", "", "method", "post"], ["type", "email", "name", "email"], ["type", "submit", "value", "Subscribe"], [1, "footer-top"], [1, "col-lg-3", "col-md-6", "footer-links"], [1, "bx", "bx-chevron-right"], ["href", "#"], [1, "col-lg-3", "col-md-6", "footer-contact"], [1, "col-lg-3", "col-md-6", "footer-info"], [1, "social-links", "mt-3"], ["href", "#", 1, "twitter"], [1, "bx", "bxl-twitter"], ["href", "#", 1, "facebook"], [1, "bx", "bxl-facebook"], ["href", "#", 1, "instagram"], [1, "bx", "bxl-instagram"], ["href", "#", 1, "linkedin"], [1, "bx", "bxl-linkedin"], [1, "copyright"], [1, "credits"], ["href", "https://bootstrapmade.com/"], ["href", "#", 1, "back-to-top"], [1, "icofont-simple-up"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Our Newsletter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tamen quem nulla quae legam multos aute sint culpa legam noster magna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Useful Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Terms of service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Privacy policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Our Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Web Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Web Development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Product Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Marketing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Graphic Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " A108 Adam Street ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " New York, NY 535022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " United States ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " +1 5589 55488 55");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " info@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "About Moderna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " \xA9 Copyright ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Moderna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, ". All Rights Reserved ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Designed by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "BootstrapMade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/navbar/navbar.component.ts": function srcAppSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 38,
      vars: 0,
      consts: [["id", "navbar", 1, "home"], ["data-toggle", "sticky-onscroll", 1, "navbar", "navbar-expand-lg", "navbar-light", "top-navbar"], [1, "container"], [1, "top-nav"], [1, "logo"], [1, "overlay", "none"], [1, "close-icon", "icon", "none"], [1, "fas", "fa-times"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "pull-right"], [1, "nav-item", "active"], ["routerLink", "home", 1, "nav-link", "active"], [1, "nav-item"], ["routerLink", "about", 1, "nav-link"], ["routerLink", "services", 1, "nav-link"], ["routerLink", "portfolio", 1, "nav-link"], ["routerLink", "team", 1, "nav-link"], ["routerLink", "blog", 1, "nav-link"], ["routerLink", "play", 1, "nav-link"], ["routerLink", "contact", 1, "nav-link"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Moderna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Play");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/team/team.component.ts": function srcAppTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TeamComponent = /*#__PURE__*/function () {
      function TeamComponent() {
        _classCallCheck(this, TeamComponent);
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TeamComponent;
    }();

    TeamComponent.ɵfac = function TeamComponent_Factory(t) {
      return new (t || TeamComponent)();
    };

    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamComponent,
      selectors: [["app-team"]],
      decls: 134,
      vars: 0,
      consts: [[1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], ["href", "index.html"], ["data-aos", "fade-up", "data-aos-easing", "ease-in-out", "data-aos-duration", "500", 1, "team"], [1, "row"], [1, "col-lg-4", "col-md-6", "d-flex", "align-items-stretch"], [1, "member"], [1, "member-img"], ["src", "assets/img/team/team-1.jpg", "alt", "", 1, "img-fluid"], [1, "social"], ["href", ""], [1, "icofont-twitter"], [1, "icofont-facebook"], [1, "icofont-instagram"], [1, "icofont-linkedin"], [1, "member-info"], ["src", "assets/img/team/team-2.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/team/team-3.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/team/team-4.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/team/team-5.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/team/team-6.jpg", "alt", "", 1, "img-fluid"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Our Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Walter White");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Chief Executive Officer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis repudiandae perferendis qui. Neque non quidem sit sed pariatur quia modi ea occaecati. Incidunt ea non est corporis in.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Sarah Jhonson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Product Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Aspernatur iste esse aliquam enim et corporis. Molestiae voluptatem aut eligendi quis aut. Libero vel amet voluptatem eos rerum non doloremque. Dolores eum non.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "William Anderson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "CTO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Ut enim possimus nihil cupiditate beatae. Veniam facere quae non qui necessitatibus rerum eos vero. Maxime sit sunt quo dolor autem est qui quaerat aliquid. Tenetur possimus qui enim.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Amanda Jepson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Accountant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Sint qui cupiditate. Asperiores fugit impedit aspernatur et mollitia. Molestiae qui placeat labore assumenda id qui nesciunt quo reprehenderit. Rem dolores similique quis soluta culpa enim quia ratione ea.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Niall Katz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Marketing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Aut ex esse explicabo quia harum ea accusamus excepturi. Temporibus at quia quisquam veritatis impedit. Porro laborum voluptatum sed necessitatibus a saepe. Deserunt laborum quasi consequatur voluptatum iusto sint qui fuga vel. Enim eveniet sed quibusdam rerum in. Non dicta architecto consequatur quo praesentium nesciunt.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Demi Lewis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Financing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Amet labore numquam corrupti est. Nostrum amet voluptas consectetur dolor voluptatem architecto distinctio consequuntur eligendi. Quam impedit enim aut nesciunt aut dicta quam exercitationem. Reprehenderit exercitationem magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-team',
          templateUrl: './team.component.html',
          styleUrls: ['./team.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\instant\z\ngPr\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map