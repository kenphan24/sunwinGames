!(function () {
  var e,
    t,
    n,
    o,
    i = {
      5237: function () {
        Flatsome.behavior("back-to-top", {
          attach(e) {
            const t = jQuery(".back-to-top", e);
            if (!t.length) return;
            let n = null;
            window.addEventListener(
              "scroll",
              () => {
                var e;
                const o = jQuery(window).scrollTop();
                (n =
                  null !== (e = n) && void 0 !== e
                    ? e
                    : jQuery(window).height()),
                  t.toggleClass("active", o >= n);
              },
              { passive: !0 }
            );
          },
        });
      },
      1094: function () {
        Flatsome.behavior("commons", {
          attach(e) {
            jQuery("select.resizeselect").resizeselect(),
              jQuery("[data-parallax]", e).flatsomeParallax(),
              jQuery.fn.packery &&
                (jQuery("[data-packery-options], .has-packery", e).each(
                  function () {
                    let e = jQuery(this);
                    e.packery({ originLeft: !flatsomeVars.rtl }),
                      setTimeout(function () {
                        e.imagesLoaded(function () {
                          e.packery("layout");
                        });
                      }, 100);
                  }
                ),
                jQuery(".banner-grid-wrapper").imagesLoaded(function () {
                  jQuery(this.elements).removeClass("processing");
                })),
              "objectFitPolyfill" in window && window.objectFitPolyfill();
          },
          detach(e) {},
        });
      },
      4206: function () {
        const e = "ux-body-overlay--hover-active";
        Flatsome.behavior("nav-hover", {
          attach(t) {
            const n = jQuery(".ux-body-overlay");
            n.length &&
              (n.removeClass(e),
              jQuery(
                [
                  ".nav-prompts-overlay li.menu-item",
                  ".nav-prompts-overlay .header-vertical-menu__opener",
                ].join(", "),
                t
              ).on({
                mouseenter: () => n.addClass(e),
                mouseleave: () => n.removeClass(e),
              }));
          },
        });
      },
      6241: function () {
        function e(e) {
          e.attr("aria-hidden", "true"),
            e.find("> li > a, > li > button").attr("tabindex", "-1");
        }
        Flatsome.behavior("sidebar-slider", {
          attach(t) {
            const n = jQuery("body").hasClass("mobile-submenu-toggle");
            jQuery(".mobile-sidebar-slide", t).each((t, o) => {
              const i = parseInt(jQuery(o).data("levels"), 10) || 1,
                a = jQuery(".sidebar-menu", o),
                r = jQuery(".nav-sidebar", o);
              jQuery(
                [
                  "> li > ul.children",
                  "> li > .sub-menu",
                  i > 1 ? "> li > ul.children > li > ul" : null,
                ]
                  .filter(Boolean)
                  .join(", "),
                r
              ).each((t, o) => {
                const i = jQuery(o),
                  r = i.parent(),
                  s = r.parents("ul:first"),
                  l = jQuery(
                    ["> .toggle", '> a[href="#"]', n && "> a"]
                      .filter(Boolean)
                      .join(","),
                    r
                  ),
                  c = r.find("> a").text().trim(),
                  u = i.parents("ul").length,
                  d = Boolean(window.flatsomeVars.rtl),
                  h = jQuery(
                    `\n            <li class="nav-slide-header pt-half pb-half">\n              <button class="toggle">\n                <i class="icon-angle-left"></i>\n                ${
                      c || window.flatsomeVars.i18n.mainMenu
                    }\n              </button>\n            </li>\n          `
                  );
                i.prepend(h), e(i);
                let f = null;
                l.off("click").on("click", (e) => {
                  var t;
                  r.attr("aria-expanded", "true"),
                    s.addClass("is-current-parent"),
                    i.addClass("is-current-slide"),
                    a.css(
                      "transform",
                      `translateX(${d ? "" : "-"}${100 * u}%)`
                    ),
                    (t = i).attr("aria-hidden", "false"),
                    t.find("> li > a, > li > button").attr("tabindex", ""),
                    clearTimeout(f),
                    e.preventDefault();
                }),
                  h.find(".toggle").on("click", () => {
                    a.css(
                      "transform",
                      `translateX(${d ? "" : "-"}${100 * (u - 1)}%)`
                    ),
                      e(i),
                      (f = setTimeout(() => {
                        i.removeClass("is-current-slide"),
                          s.removeClass("is-current-parent");
                      }, 300)),
                      r.removeClass("active"),
                      r.attr("aria-expanded", "false");
                  });
              });
            });
          },
        });
      },
      8131: function () {
        Flatsome.behavior("sidebar-tabs", {
          attach(e) {
            jQuery(".sidebar-menu-tabs", e).each((e, t) => {
              const n = jQuery(t),
                o = n.find(".sidebar-menu-tabs__tab"),
                i = n.parent().find("ul.nav-sidebar");
              o.each((e, t) => {
                jQuery(t).on("click", function (t) {
                  !(function (e, t, n) {
                    t.each((t, n) => jQuery(n).toggleClass("active", t === e)),
                      n.each((t, n) =>
                        jQuery(n).toggleClass("hidden", t === e)
                      );
                  })(e, o, i),
                    t.preventDefault(),
                    t.stopPropagation();
                });
              });
            });
          },
        });
      },
      4113: function () {
        Flatsome.behavior("scroll-to", {
          attach() {
            const e = jQuery("span.scroll-to"),
              t = parseInt(flatsomeVars.sticky_height, 10),
              n = jQuery("#wpadminbar");
            if (!e.length) return;
            let o = jQuery(".scroll-to-bullets");
            o.length
              ? (o.children().lazyTooltipster("destroy"), o.empty())
              : ((o = jQuery(
                  '<div class="scroll-to-bullets hide-for-medium"/>'
                )),
                jQuery("body").append(o)),
              jQuery("li.scroll-to-link").remove(),
              e.each(function (e, t) {
                const i = jQuery(t),
                  a = i.data("link"),
                  r = i.data("title"),
                  s = `a[href*="${a || "<nolink>"}"]`;
                if (i.data("bullet")) {
                  const e = jQuery(
                    `\n          <a href="${a}" data-title="${r}" title="${r}">\n          <strong></strong>\n          </a>\n        `
                  );
                  e.lazyTooltipster({
                    position: "left",
                    delay: 50,
                    contentAsHTML: !0,
                    touchDevices: !1,
                  }),
                    o.append(e);
                }
                const l = jQuery(
                  `\n          <li class="scroll-to-link"><a data-animate="fadeIn" href="${a}" data-title="${r}" title="${r}">\n          ${r}\n          </a></li>\n        `
                );
                jQuery("li.nav-single-page").before(l),
                  setTimeout(function () {
                    jQuery(".scroll-to-link a").attr("data-animated", "true");
                  }, 300),
                  jQuery(s)
                    .off("click")
                    .on("click", function (e) {
                      const t = jQuery(this).attr("href").split("#")[1];
                      if (!t) return;
                      let o = i.attr("data-offset");
                      o &&
                        n.length &&
                        n.is(":visible") &&
                        (o = Number(o) + Number(n.height())),
                        setTimeout(() => {
                          jQuery.scrollTo(`a[name="${t}"]`, {
                            ...(!isNaN(o) && { offset: -o }),
                          });
                        }, 0),
                        jQuery.fn.magnificPopup && jQuery.magnificPopup.close(),
                        e.preventDefault();
                    });
              });
            let i = 0;
            const a = () => {
              clearTimeout(i),
                (i = setTimeout(() => {
                  const n = e.get().map((e) => e.getBoundingClientRect().y);
                  o.find("a").each((e, o) => {
                    const i = n[e],
                      a = n[e + 1] || window.innerHeight,
                      r = i <= t + 100 && a > t + 100;
                    jQuery(o).toggleClass("active", r);
                  });
                }, 100));
            };
            if (
              (window.addEventListener("scroll", a, { passive: !0 }),
              window.addEventListener("resize", a),
              a(),
              location.hash)
            ) {
              const e = decodeURIComponent(location.hash.replace("#", ""));
              let t = jQuery(`a[name="${e}"]`)
                .closest(".scroll-to")
                .attr("data-offset");
              t &&
                n.length &&
                n.is(":visible") &&
                (t = Number(t) + Number(n.height())),
                jQuery.scrollTo(`a[name="${e}"]`, {
                  ...(!isNaN(t) && { offset: -t }),
                });
            }
          },
          detach() {
            jQuery("span.scroll-to").length && setTimeout(this.attach, 0);
          },
        });
      },
      5414: function () {
        function e(e, t, n) {
          t.each((t, n) => {
            jQuery(n).toggleClass("active", t === e),
              jQuery(n)
                .find("> a")
                .attr("aria-selected", t === e ? "true" : "false")
                .attr("tabindex", t === e ? null : "-1");
          }),
            n.each((t, n) => jQuery(n).toggleClass("active", t === e)),
            jQuery.fn.packery &&
              jQuery("[data-packery-options]", n[e]).packery("layout");
        }
        Flatsome.behavior("tabs", {
          attach(t) {
            const n = window.location.hash;
            let o = !1;
            jQuery(".tabbed-content", t).each(function (t, i) {
              const a = jQuery(i),
                r = a.find("> .nav > li"),
                s = a.find("> .tab-panels > .panel"),
                l = a.find("> .nav").hasClass("active-on-hover"),
                c = a.find("> .nav").hasClass("nav-vertical");
              s.removeAttr("style"),
                r.each(function (t, i) {
                  const u = jQuery(i).find("a");
                  u.on("click", function (n) {
                    e(t, r, s), n.preventDefault(), n.stopPropagation();
                  }),
                    u.on("keydown", (e) => {
                      let n;
                      switch (e.key) {
                        case c ? "ArrowDown" : "ArrowRight":
                          n = r.eq((t + 1) % r.length);
                          break;
                        case c ? "ArrowUp" : "ArrowLeft":
                          n = r.eq((t - 1) % r.length);
                          break;
                        case "Home":
                          n = r.first();
                          break;
                        case "End":
                          n = r.last();
                      }
                      n &&
                        (n.find("> a").trigger("focus"),
                        e.stopPropagation(),
                        e.preventDefault());
                    }),
                    l &&
                      u.hoverIntent({
                        sensitivity: 3,
                        interval: 20,
                        timeout: 70,
                        over(n) {
                          e(t, r, s);
                        },
                        out() {},
                      }),
                    !n.substring(1).length ||
                      (decodeURIComponent(n.substring(1)) !==
                        u.attr("href")?.split("#")[1] &&
                        n.substring(1) !== u.attr("href")?.split("#")[1]) ||
                      (e(t, r, s),
                      o ||
                        ((o = !0),
                        setTimeout(() => {
                          jQuery.scrollTo(a);
                        }, 500)));
                });
            });
          },
        });
      },
      5958: function () {
        Flatsome.behavior("toggle", {
          attach(e) {
            function t(e) {
              const t = jQuery(e.currentTarget).parent();
              t.toggleClass("active"),
                t.attr(
                  "aria-expanded",
                  "false" === t.attr("aria-expanded") ? "true" : "false"
                ),
                e.preventDefault();
            }
            jQuery(
              [
                ".widget ul.children",
                ".nav ul.children",
                ".menu .sub-menu",
                ".mobile-sidebar-levels-2 .nav ul.children > li > ul",
              ].join(", "),
              e
            ).each(function () {
              const e = jQuery(this).parents(".nav-slide").length
                ? "right"
                : "down";
              jQuery(this)
                .parent()
                .addClass("has-child")
                .attr("aria-expanded", "false"),
                jQuery(this).before(
                  `<button class="toggle" aria-label="${window.flatsomeVars.i18n.toggleButton}"><i class="icon-angle-${e}"></i></button>`
                );
            }),
              jQuery(".current-cat-parent", e)
                .addClass("active")
                .attr("aria-expanded", "true")
                .removeClass("current-cat-parent"),
              jQuery(".toggle", e).on("click", t);
            const n = jQuery("body").hasClass("mobile-submenu-toggle");
            jQuery(".sidebar-menu li.menu-item.has-child", e).each(function () {
              let e = jQuery(this),
                o = e.find("> a:first");
              "#" === o.attr("href")
                ? o.on("click", function (t) {
                    t.preventDefault(),
                      e.toggleClass("active"),
                      e.attr(
                        "aria-expanded",
                        "false" === e.attr("aria-expanded") ? "true" : "false"
                      );
                  })
                : n && o.next(".toggle").length && o.on("click", t);
            });
          },
        });
      },
      9417: function () {
        Flatsome.behavior("youtube", {
          attach(e) {
            var t,
              n,
              o,
              i,
              a,
              r = jQuery(".ux-youtube", e);
            0 !== r.length &&
              ((window.onYouTubePlayerAPIReady = function () {
                r.each(function () {
                  var e = jQuery(this),
                    t = e.attr("id"),
                    n = e.data("videoid"),
                    o = e.data("loop"),
                    i = e.data("audio");
                  new YT.Player(t, {
                    height: "100%",
                    width: "100%",
                    playerVars: {
                      html5: 1,
                      autoplay: 1,
                      controls: 0,
                      rel: 0,
                      modestbranding: 1,
                      playsinline: 1,
                      showinfo: 0,
                      fs: 0,
                      loop: o,
                      el: 0,
                      playlist: o ? n : void 0,
                    },
                    videoId: n,
                    events: {
                      onReady: function (e) {
                        0 === i && e.target.mute();
                      },
                    },
                  });
                });
              }),
              (n = "script"),
              (o = "youtube-jssdk"),
              (a = (t = document).getElementsByTagName(n)[0]),
              t.getElementById(o) ||
                (((i = t.createElement(n)).id = o),
                (i.src = "https://www.youtube.com/player_api"),
                a.parentNode.insertBefore(i, a)));
          },
        });
      },
      3094: function (e, t, n) {
        n.g.Flatsome = {
          behaviors: {},
          plugin(e, t, n) {
            (n = n || {}),
              (jQuery.fn[e] = function (o) {
                if ("string" == typeof arguments[0]) {
                  var i = null,
                    a = arguments[0],
                    r = Array.prototype.slice.call(arguments, 1);
                  return (
                    this.each(function () {
                      if (
                        !jQuery.data(this, "plugin_" + e) ||
                        "function" != typeof jQuery.data(this, "plugin_" + e)[a]
                      )
                        throw new Error(
                          "Method " + a + " does not exist on jQuery." + e
                        );
                      i = jQuery.data(this, "plugin_" + e)[a].apply(this, r);
                    }),
                    "destroy" === a &&
                      this.each(function () {
                        jQuery(this).removeData("plugin_" + e);
                      }),
                    void 0 !== i ? i : this
                  );
                }
                if ("object" == typeof o || !o)
                  return this.each(function () {
                    jQuery.data(this, "plugin_" + e) ||
                      ((o = jQuery.extend({}, n, o)),
                      jQuery.data(this, "plugin_" + e, new t(this, o)));
                  });
              });
          },
          behavior(e, t) {
            this.behaviors[e] = t;
          },
          attach(e, t = e) {
            if ("string" == typeof e)
              return this.behaviors.hasOwnProperty(e) &&
                "function" == typeof this.behaviors[e].attach
                ? this.behaviors[e].attach(t || document)
                : null;
            for (let e in this.behaviors)
              "function" == typeof this.behaviors[e].attach &&
                this.behaviors[e].attach(t || document);
          },
          detach(e, t = e) {
            if ("string" == typeof e)
              return this.behaviors.hasOwnProperty(e) &&
                "function" == typeof this.behaviors[e].detach
                ? this.behaviors[e].detach(t || document)
                : null;
            for (let e in this.behaviors)
              "function" == typeof this.behaviors[e].detach &&
                this.behaviors[e].detach(t || document);
          },
        };
      },
      3484: function () {
        jQuery(
          ".section .loading-spin, .banner .loading-spin, .page-loader"
        ).fadeOut(),
          jQuery("#top-link").on("click", function (e) {
            jQuery.scrollTo(0), e.preventDefault();
          }),
          jQuery(".scroll-for-more").on("click", function () {
            jQuery.scrollTo(jQuery(this));
          }),
          jQuery(".search-dropdown button").on("click", function (e) {
            jQuery(this).parent().find("input").trigger("focus"),
              e.preventDefault();
          }),
          jQuery(".current-cat").addClass("active"),
          jQuery("html").removeClass("loading-site"),
          setTimeout(function () {
            jQuery(".page-loader").remove();
          }, 1e3),
          jQuery(".resize-select").resizeselect(),
          flatsomeVars.user.can_edit_pages &&
            jQuery(".block-edit-link").each(function () {
              const e = jQuery(this);
              let t = e.data("link");
              const n = e.data("backend"),
                o = e.data("title"),
                i = e.parents('[id^="menu-item-"]');
              if (i.length && i.hasClass("menu-item-has-block")) {
                const e = i.attr("id").match(/menu-item-(\d+)/);
                e && e[1] && (t += `&menu_id=${e[1]}`);
              }
              jQuery(this)
                .next()
                .addClass("has-block")
                .lazyTooltipster({
                  distance: -15,
                  repositionOnScroll: !0,
                  interactive: !0,
                  contentAsHTML: !0,
                  content:
                    o +
                    '<br/><a class="button edit-block-button edit-block-button-builder" href="' +
                    t +
                    '">UX Builder</a><a class="button edit-block-button edit-block-button edit-block-button-backend" href="' +
                    n +
                    '">WP Editor</a>',
                }),
                jQuery(this).remove();
            }),
          document.addEventListener("uxb_app_ready", () => {
            const e = new URLSearchParams(window.top.location.search),
              t = parseInt(e.get("menu_id"));
            t &&
              setTimeout(() => {
                const e = jQuery(`#menu-item-${t}`),
                  n = e.parent().hasClass("ux-nav-vertical-menu");
                e.hasClass("menu-item-has-block has-dropdown") &&
                  !e.hasClass("current-dropdown") &&
                  (n &&
                    jQuery(".header-vertical-menu__fly-out").addClass(
                      "header-vertical-menu__fly-out--open"
                    ),
                  jQuery(`#menu-item-${t} a:first`).trigger("click"));
              }, 1e3);
          }),
          jQuery("#hotspot").on("click", function (e) {
            e.preventDefault();
          }),
          jQuery(".wpcf7-form .wpcf7-submit").on("click", function (e) {
            jQuery(this).parent().parent().addClass("processing");
          }),
          jQuery(".wpcf7").on(
            "wpcf7invalid wpcf7spam wpcf7mailsent wpcf7mailfailed",
            function (e) {
              jQuery(".processing").removeClass("processing");
            }
          ),
          jQuery(document).ajaxComplete(function (e, t, n) {
            jQuery(".processing").removeClass("processing");
          });
      },
      1711: function (e, t, n) {
        jQuery.fn.lazyTooltipster = function (e) {
          return this.each((t, o) => {
            const i = jQuery(o);
            "string" == typeof e
              ? jQuery.fn.tooltipster &&
                i.hasClass("tooltipstered") &&
                i.tooltipster(e)
              : i.one("mouseenter", (t) => {
                  !(function (e, t) {
                    (jQuery.fn.tooltipster
                      ? Promise.resolve()
                      : n.e(635).then(n.t.bind(n, 2650, 23))
                    ).then(() => {
                      e.hasClass("tooltipstered") ||
                        e.tooltipster({
                          theme: "tooltipster-default",
                          delay: 10,
                          animationDuration: 300,
                          ...t,
                        }),
                        e.tooltipster("show");
                    });
                  })(i, e);
                });
          });
        };
      },
      9207: function () {
        Flatsome.plugin("resizeselect", function (e, t) {
          jQuery(e)
            .on("change", function () {
              var e = jQuery(this),
                t = e.find("option:selected").val(),
                n = e.find("option:selected").text(),
                o = jQuery('<span class="select-resize-ghost">').html(n);
              o.appendTo(e.parent());
              var i = o.width();
              o.remove(),
                e.width(i + 7),
                t && e.parent().parent().find("input.search-field").focus();
            })
            .trigger("change");
        });
      },
      3404: function (e, t, n) {
        var o, i;
        "undefined" != typeof window && window,
          void 0 ===
            (i =
              "function" ==
              typeof (o = function () {
                "use strict";
                function e() {}
                var t = e.prototype;
                return (
                  (t.on = function (e, t) {
                    if (e && t) {
                      var n = (this._events = this._events || {}),
                        o = (n[e] = n[e] || []);
                      return -1 == o.indexOf(t) && o.push(t), this;
                    }
                  }),
                  (t.once = function (e, t) {
                    if (e && t) {
                      this.on(e, t);
                      var n = (this._onceEvents = this._onceEvents || {});
                      return ((n[e] = n[e] || {})[t] = !0), this;
                    }
                  }),
                  (t.off = function (e, t) {
                    var n = this._events && this._events[e];
                    if (n && n.length) {
                      var o = n.indexOf(t);
                      return -1 != o && n.splice(o, 1), this;
                    }
                  }),
                  (t.emitEvent = function (e, t) {
                    var n = this._events && this._events[e];
                    if (n && n.length) {
                      (n = n.slice(0)), (t = t || []);
                      for (
                        var o = this._onceEvents && this._onceEvents[e], i = 0;
                        i < n.length;
                        i++
                      ) {
                        var a = n[i];
                        o && o[a] && (this.off(e, a), delete o[a]),
                          a.apply(this, t);
                      }
                      return this;
                    }
                  }),
                  (t.allOff = function () {
                    delete this._events, delete this._onceEvents;
                  }),
                  e
                );
              })
                ? o.call(t, n, t, e)
                : o) || (e.exports = i);
      },
      3959: function () {
        !(function () {
          var e = window.MutationObserver || window.WebKitMutationObserver,
            t =
              "ontouchstart" in window ||
              (window.DocumentTouch && document instanceof DocumentTouch);
          if (
            void 0 === document.documentElement.style["touch-action"] &&
            !document.documentElement.style["-ms-touch-action"] &&
            t &&
            e
          ) {
            window.Hammer = window.Hammer || {};
            var n = /touch-action[:][\s]*(none)[^;'"]*/,
              o = /touch-action[:][\s]*(manipulation)[^;'"]*/,
              i = /touch-action/,
              a =
                /(iP(ad|hone|od))/.test(navigator.userAgent) &&
                ("indexedDB" in window || !!window.performance);
            (window.Hammer.time = {
              getTouchAction: function (e) {
                return this.checkStyleString(e.getAttribute("style"));
              },
              checkStyleString: function (e) {
                if (i.test(e))
                  return n.test(e) ? "none" : !o.test(e) || "manipulation";
              },
              shouldHammer: function (e) {
                var t = e.target.hasParent;
                return (
                  !(!t || (a && !(Date.now() - e.target.lastStart < 125))) && t
                );
              },
              touchHandler: function (e) {
                var t = this.shouldHammer(e);
                if ("none" === t) this.dropHammer(e);
                else if ("manipulation" === t) {
                  var n = e.target.getBoundingClientRect();
                  n.top === this.pos.top &&
                    n.left === this.pos.left &&
                    this.dropHammer(e);
                }
                (this.scrolled = !1),
                  delete e.target.lastStart,
                  delete e.target.hasParent;
              },
              dropHammer: function (e) {
                "touchend" === e.type &&
                  (e.target.focus(),
                  setTimeout(function () {
                    e.target.click();
                  }, 0)),
                  e.preventDefault();
              },
              touchStart: function (e) {
                (this.pos = e.target.getBoundingClientRect()),
                  (e.target.hasParent = this.hasParent(e.target)),
                  a && e.target.hasParent && (e.target.lastStart = Date.now());
              },
              styleWatcher: function (e) {
                e.forEach(this.styleUpdater, this);
              },
              styleUpdater: function (e) {
                if (e.target.updateNext) e.target.updateNext = !1;
                else {
                  var t = this.getTouchAction(e.target);
                  t
                    ? "none" !== t && (e.target.hadTouchNone = !1)
                    : !t &&
                      ((e.oldValue && this.checkStyleString(e.oldValue)) ||
                        e.target.hadTouchNone) &&
                      ((e.target.hadTouchNone = !0),
                      (e.target.updateNext = !1),
                      e.target.setAttribute(
                        "style",
                        e.target.getAttribute("style") + " touch-action: none;"
                      ));
                }
              },
              hasParent: function (e) {
                for (var t, n = e; n && n.parentNode; n = n.parentNode)
                  if ((t = this.getTouchAction(n))) return t;
                return !1;
              },
              installStartEvents: function () {
                document.addEventListener(
                  "touchstart",
                  this.touchStart.bind(this)
                ),
                  document.addEventListener(
                    "mousedown",
                    this.touchStart.bind(this)
                  );
              },
              installEndEvents: function () {
                document.addEventListener(
                  "touchend",
                  this.touchHandler.bind(this),
                  !0
                ),
                  document.addEventListener(
                    "mouseup",
                    this.touchHandler.bind(this),
                    !0
                  );
              },
              installObserver: function () {
                this.observer = new e(this.styleWatcher.bind(this)).observe(
                  document,
                  {
                    subtree: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    attributeFilter: ["style"],
                  }
                );
              },
              install: function () {
                this.installEndEvents(),
                  this.installStartEvents(),
                  this.installObserver();
              },
            }),
              window.Hammer.time.install();
          }
        })();
      },
      8279: function (e, t, n) {
        var o, i;
        !(function (a, r) {
          "use strict";
          (o = [n(3404)]),
            (i = function (e) {
              return (function (e, t) {
                var n = e.jQuery,
                  o = e.console;
                function i(e, t) {
                  for (var n in t) e[n] = t[n];
                  return e;
                }
                var a = Array.prototype.slice;
                function r(e, t, s) {
                  if (!(this instanceof r)) return new r(e, t, s);
                  var l,
                    c = e;
                  "string" == typeof e && (c = document.querySelectorAll(e)),
                    c
                      ? ((this.elements =
                          ((l = c),
                          Array.isArray(l)
                            ? l
                            : "object" == typeof l &&
                              "number" == typeof l.length
                            ? a.call(l)
                            : [l])),
                        (this.options = i({}, this.options)),
                        "function" == typeof t ? (s = t) : i(this.options, t),
                        s && this.on("always", s),
                        this.getImages(),
                        n && (this.jqDeferred = new n.Deferred()),
                        setTimeout(this.check.bind(this)))
                      : o.error("Bad element for imagesLoaded " + (c || e));
                }
                (r.prototype = Object.create(t.prototype)),
                  (r.prototype.options = {}),
                  (r.prototype.getImages = function () {
                    (this.images = []),
                      this.elements.forEach(this.addElementImages, this);
                  }),
                  (r.prototype.addElementImages = function (e) {
                    "IMG" == e.nodeName && this.addImage(e),
                      !0 === this.options.background &&
                        this.addElementBackgroundImages(e);
                    var t = e.nodeType;
                    if (t && s[t]) {
                      for (
                        var n = e.querySelectorAll("img"), o = 0;
                        o < n.length;
                        o++
                      ) {
                        var i = n[o];
                        this.addImage(i);
                      }
                      if ("string" == typeof this.options.background) {
                        var a = e.querySelectorAll(this.options.background);
                        for (o = 0; o < a.length; o++) {
                          var r = a[o];
                          this.addElementBackgroundImages(r);
                        }
                      }
                    }
                  });
                var s = { 1: !0, 9: !0, 11: !0 };
                function l(e) {
                  this.img = e;
                }
                function c(e, t) {
                  (this.url = e), (this.element = t), (this.img = new Image());
                }
                return (
                  (r.prototype.addElementBackgroundImages = function (e) {
                    var t = getComputedStyle(e);
                    if (t)
                      for (
                        var n = /url\((['"])?(.*?)\1\)/gi,
                          o = n.exec(t.backgroundImage);
                        null !== o;

                      ) {
                        var i = o && o[2];
                        i && this.addBackground(i, e),
                          (o = n.exec(t.backgroundImage));
                      }
                  }),
                  (r.prototype.addImage = function (e) {
                    var t = new l(e);
                    this.images.push(t);
                  }),
                  (r.prototype.addBackground = function (e, t) {
                    var n = new c(e, t);
                    this.images.push(n);
                  }),
                  (r.prototype.check = function () {
                    var e = this;
                    function t(t, n, o) {
                      setTimeout(function () {
                        e.progress(t, n, o);
                      });
                    }
                    (this.progressedCount = 0),
                      (this.hasAnyBroken = !1),
                      this.images.length
                        ? this.images.forEach(function (e) {
                            e.once("progress", t), e.check();
                          })
                        : this.complete();
                  }),
                  (r.prototype.progress = function (e, t, n) {
                    this.progressedCount++,
                      (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
                      this.emitEvent("progress", [this, e, t]),
                      this.jqDeferred &&
                        this.jqDeferred.notify &&
                        this.jqDeferred.notify(this, e),
                      this.progressedCount == this.images.length &&
                        this.complete(),
                      this.options.debug && o && o.log("progress: " + n, e, t);
                  }),
                  (r.prototype.complete = function () {
                    var e = this.hasAnyBroken ? "fail" : "done";
                    if (
                      ((this.isComplete = !0),
                      this.emitEvent(e, [this]),
                      this.emitEvent("always", [this]),
                      this.jqDeferred)
                    ) {
                      var t = this.hasAnyBroken ? "reject" : "resolve";
                      this.jqDeferred[t](this);
                    }
                  }),
                  (l.prototype = Object.create(t.prototype)),
                  (l.prototype.check = function () {
                    this.getIsImageComplete()
                      ? this.confirm(
                          0 !== this.img.naturalWidth,
                          "naturalWidth"
                        )
                      : ((this.proxyImage = new Image()),
                        this.proxyImage.addEventListener("load", this),
                        this.proxyImage.addEventListener("error", this),
                        this.img.addEventListener("load", this),
                        this.img.addEventListener("error", this),
                        (this.proxyImage.src = this.img.src));
                  }),
                  (l.prototype.getIsImageComplete = function () {
                    return this.img.complete && this.img.naturalWidth;
                  }),
                  (l.prototype.confirm = function (e, t) {
                    (this.isLoaded = e),
                      this.emitEvent("progress", [this, this.img, t]);
                  }),
                  (l.prototype.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                  }),
                  (l.prototype.onload = function () {
                    this.confirm(!0, "onload"), this.unbindEvents();
                  }),
                  (l.prototype.onerror = function () {
                    this.confirm(!1, "onerror"), this.unbindEvents();
                  }),
                  (l.prototype.unbindEvents = function () {
                    this.proxyImage.removeEventListener("load", this),
                      this.proxyImage.removeEventListener("error", this),
                      this.img.removeEventListener("load", this),
                      this.img.removeEventListener("error", this);
                  }),
                  (c.prototype = Object.create(l.prototype)),
                  (c.prototype.check = function () {
                    this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this),
                      (this.img.src = this.url),
                      this.getIsImageComplete() &&
                        (this.confirm(
                          0 !== this.img.naturalWidth,
                          "naturalWidth"
                        ),
                        this.unbindEvents());
                  }),
                  (c.prototype.unbindEvents = function () {
                    this.img.removeEventListener("load", this),
                      this.img.removeEventListener("error", this);
                  }),
                  (c.prototype.confirm = function (e, t) {
                    (this.isLoaded = e),
                      this.emitEvent("progress", [this, this.element, t]);
                  }),
                  (r.makeJQueryPlugin = function (t) {
                    (t = t || e.jQuery) &&
                      ((n = t).fn.imagesLoaded = function (e, t) {
                        return new r(this, e, t).jqDeferred.promise(n(this));
                      });
                  }),
                  r.makeJQueryPlugin(),
                  r
                );
              })(a, e);
            }.apply(t, o)),
            void 0 === i || (e.exports = i);
        })("undefined" != typeof window ? window : this);
      },
      7461: function (e, t, n) {
        var o, i, a;
        !(function (r) {
          "use strict";
          (i = [n(428)]),
            void 0 ===
              (a =
                "function" ==
                typeof (o = function (e) {
                  var t = (e.scrollTo = function (t, n, o) {
                    return e(window).scrollTo(t, n, o);
                  });
                  function n(t) {
                    return (
                      !t.nodeName ||
                      -1 !==
                        e.inArray(t.nodeName.toLowerCase(), [
                          "iframe",
                          "#document",
                          "html",
                          "body",
                        ])
                    );
                  }
                  function o(e) {
                    return "function" == typeof e;
                  }
                  function i(t) {
                    return o(t) || e.isPlainObject(t) ? t : { top: t, left: t };
                  }
                  return (
                    (t.defaults = { axis: "xy", duration: 0, limit: !0 }),
                    (e.fn.scrollTo = function (a, r, s) {
                      "object" == typeof r && ((s = r), (r = 0)),
                        "function" == typeof s && (s = { onAfter: s }),
                        "max" === a && (a = 9e9),
                        (s = e.extend({}, t.defaults, s)),
                        (r = r || s.duration);
                      var l = s.queue && s.axis.length > 1;
                      return (
                        l && (r /= 2),
                        (s.offset = i(s.offset)),
                        (s.over = i(s.over)),
                        this.each(function () {
                          if (null !== a) {
                            var c,
                              u = n(this),
                              d = u ? this.contentWindow || window : this,
                              h = e(d),
                              f = a,
                              p = {};
                            switch (typeof f) {
                              case "number":
                              case "string":
                                if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                                  f = i(f);
                                  break;
                                }
                                f = u ? e(f) : e(f, d);
                              case "object":
                                if (0 === f.length) return;
                                (f.is || f.style) && (c = (f = e(f)).offset());
                            }
                            var y = (o(s.offset) && s.offset(d, f)) || s.offset;
                            e.each(s.axis.split(""), function (e, n) {
                              var o = "x" === n ? "Left" : "Top",
                                i = o.toLowerCase(),
                                a = "scroll" + o,
                                r = h[a](),
                                g = t.max(d, n);
                              if (c)
                                (p[a] = c[i] + (u ? 0 : r - h.offset()[i])),
                                  s.margin &&
                                    ((p[a] -=
                                      parseInt(f.css("margin" + o), 10) || 0),
                                    (p[a] -=
                                      parseInt(
                                        f.css("border" + o + "Width"),
                                        10
                                      ) || 0)),
                                  (p[a] += y[i] || 0),
                                  s.over[i] &&
                                    (p[a] +=
                                      f["x" === n ? "width" : "height"]() *
                                      s.over[i]);
                              else {
                                var v = f[i];
                                p[a] =
                                  v.slice && "%" === v.slice(-1)
                                    ? (parseFloat(v) / 100) * g
                                    : v;
                              }
                              s.limit &&
                                /^\d+$/.test(p[a]) &&
                                (p[a] = p[a] <= 0 ? 0 : Math.min(p[a], g)),
                                !e &&
                                  s.axis.length > 1 &&
                                  (r === p[a]
                                    ? (p = {})
                                    : l && (m(s.onAfterFirst), (p = {})));
                            }),
                              m(s.onAfter);
                          }
                          function m(t) {
                            var n = e.extend({}, s, {
                              queue: !0,
                              duration: r,
                              complete:
                                t &&
                                function () {
                                  t.call(d, f, s);
                                },
                            });
                            h.animate(p, n);
                          }
                        })
                      );
                    }),
                    (t.max = function (t, o) {
                      var i = "x" === o ? "Width" : "Height",
                        a = "scroll" + i;
                      if (!n(t)) return t[a] - e(t)[i.toLowerCase()]();
                      var r = "client" + i,
                        s = t.ownerDocument || t.document,
                        l = s.documentElement,
                        c = s.body;
                      return Math.max(l[a], c[a]) - Math.min(l[r], c[r]);
                    }),
                    (e.Tween.propHooks.scrollLeft =
                      e.Tween.propHooks.scrollTop =
                        {
                          get: function (t) {
                            return e(t.elem)[t.prop]();
                          },
                          set: function (t) {
                            var n = this.get(t);
                            if (t.options.interrupt && t._last && t._last !== n)
                              return e(t.elem).stop();
                            var o = Math.round(t.now);
                            n !== o &&
                              (e(t.elem)[t.prop](o), (t._last = this.get(t)));
                          },
                        }),
                    t
                  );
                })
                  ? o.apply(t, i)
                  : o) || (e.exports = a);
        })();
      },
      428: function (e) {
        "use strict";
        e.exports = window.jQuery;
      },
    },
    a = {};
  function r(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var n = (a[e] = { exports: {} });
    return i[e].call(n.exports, n, n.exports, r), n.exports;
  }
  (r.m = i),
    (t = Object.getPrototypeOf
      ? function (e) {
          return Object.getPrototypeOf(e);
        }
      : function (e) {
          return e.__proto__;
        }),
    (r.t = function (n, o) {
      if ((1 & o && (n = this(n)), 8 & o)) return n;
      if ("object" == typeof n && n) {
        if (4 & o && n.__esModule) return n;
        if (16 & o && "function" == typeof n.then) return n;
      }
      var i = Object.create(null);
      r.r(i);
      var a = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var s = 2 & o && n; "object" == typeof s && !~e.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach(function (e) {
          a[e] = function () {
            return n[e];
          };
        });
      return (
        (a.default = function () {
          return n;
        }),
        r.d(i, a),
        i
      );
    }),
    (r.d = function (e, t) {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.f = {}),
    (r.e = function (e) {
      return Promise.all(
        Object.keys(r.f).reduce(function (t, n) {
          return r.f[n](e, t), t;
        }, [])
      );
    }),
    (r.u = function (e) {
      return (
        "js/chunk." +
        {
          230: "popups",
          436: "slider",
        }[e] +
        ".js"
      );
    }),
    (r.miniCssF = function (e) {}),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n = {}),
    (o = "flatsome:"),
    (r.l = function (e, t, i, a) {
      if (n[e]) n[e].push(t);
      else {
        var s, l;
        if (void 0 !== i)
          for (
            var c = document.getElementsByTagName("script"), u = 0;
            u < c.length;
            u++
          ) {
            var d = c[u];
            if (
              d.getAttribute("src") == e ||
              d.getAttribute("data-webpack") == o + i
            ) {
              s = d;
              break;
            }
          }
        s ||
          ((l = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          r.nc && s.setAttribute("nonce", r.nc),
          s.setAttribute("data-webpack", o + i),
          (s.src = e)),
          (n[e] = [t]);
        var h = function (t, o) {
            (s.onerror = s.onload = null), clearTimeout(f);
            var i = n[e];
            if (
              (delete n[e],
              s.parentNode && s.parentNode.removeChild(s),
              i &&
                i.forEach(function (e) {
                  return e(o);
                }),
              t)
            )
              return t(o);
          },
          f = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          );
        (s.onerror = h.bind(null, s.onerror)),
          (s.onload = h.bind(null, s.onload)),
          l && document.head.appendChild(s);
      }
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function () {
      const e = r.u;
      r.u = (t) => {
        const n = e(t),
          o = globalThis.flatsomeVars?.theme.version;
        return n + (o ? "?ver=" + o : "");
      };
    })(),
    (r.p = globalThis.flatsomeVars?.assets_url ?? "/"),
    (function () {
      var e = { 816: 0 };
      r.f.j = function (t, n) {
        var o = r.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else {
            var i = new Promise(function (n, i) {
              o = e[t] = [n, i];
            });
            n.push((o[2] = i));
            var a = r.p + r.u(t),
              s = new Error();
            r.l(
              a,
              function (n) {
                if (r.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    a = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = a),
                    o[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, n) {
          var o,
            i,
            a = n[0],
            s = n[1],
            l = n[2],
            c = 0;
          if (
            a.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in s) r.o(s, o) && (r.m[o] = s[o]);
            l && l(r);
          }
          for (t && t(n); c < a.length; c++)
            (i = a[c]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        n = (self.flatsomeChunks = self.flatsomeChunks || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (function () {
      "use strict";
      function e() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
          navigator.userAgent
        );
      }
      r(8279), r(3959), r(7461), r(3094);
      const t = document.body,
        n = "body-scroll-lock--active",
        o = e();
      let i = 0;
      function a() {
        if (!o) return;
        i = window.pageYOffset;
        const e = document.getElementById("wpadminbar"),
          a = i - (e ? e.offsetHeight : 0);
        (t.style.overflow = "hidden"),
          (t.style.position = "fixed"),
          (t.style.top = `-${a}px`),
          (t.style.width = "100%"),
          t.classList.add(n);
      }
      function s() {
        o &&
          (t.style.removeProperty("overflow"),
          t.style.removeProperty("position"),
          t.style.removeProperty("top"),
          t.style.removeProperty("width"),
          window.scrollTo(0, i),
          t.classList.remove(n));
      }
      function l(e, t = {}) {
        let n = 0;
        const o = (t) => {
          const o = window.scrollY;
          e(t, { direction: o > n ? "down" : "up", scrollY: o }), (n = o);
        };
        return (
          window.addEventListener("scroll", o, { ...t, passive: !0 }),
          () => {
            window.removeEventListener("scroll", o);
          }
        );
      }
      let c,
        u,
        d,
        h = jQuery("#header"),
        f = h.find(".header-wrapper"),
        p = jQuery(".header-top", h),
        y = jQuery(".header-main", h),
        m = h.hasClass("has-sticky"),
        g = h.hasClass("sticky-hide-on-scroll");
      function v(e, t = "down", n = !1) {
        void 0 === u &&
          void 0 === d &&
          (h.hasClass("sticky-shrink")
            ? ((u = p.hasClass("hide-for-sticky") ? p.height() : 0),
              (u += y.hasClass("hide-for-sticky") ? y.height() : 0),
              (d = 1 + u))
            : ((u = f.height() + 100),
              (d = p.hasClass("hide-for-sticky") ? p.height() + 1 : 1))),
          g
            ? "down" === t || e < d
              ? e < d
                ? j()
                : ((c = setTimeout(j, 100)),
                  h.addClass("sticky-hide-on-scroll--active"))
              : e > u &&
                ((c = setTimeout(() => b(n), 100)),
                h.removeClass("sticky-hide-on-scroll--active"))
            : e > u
            ? b(n)
            : e < d && j();
      }
      function b(e = !1) {
        if (f.hasClass("stuck")) return;
        const t = h.height();
        jQuery(document).trigger("flatsome-header-sticky"),
          f.addClass("stuck"),
          f.toggleClass("ux-no-animation", e),
          h.height(t),
          jQuery(".has-transparent").removeClass("transparent"),
          jQuery(".toggle-nav-dark").removeClass("nav-dark");
      }
      function j() {
        f.hasClass("stuck") &&
          (h.height(""),
          f.removeClass(["stuck", "ux-no-animation"]),
          jQuery(".has-transparent").addClass("transparent"),
          jQuery(".toggle-nav-dark").addClass("nav-dark"));
      }
      m &&
        (document.addEventListener("DOMContentLoaded", () => {
          l((e, { scrollY: o, direction: i }) => {
            c && (clearTimeout(c), (c = void 0)),
              t.classList.contains(n) || v(o, i);
          }),
            (c = setTimeout(() => {
              window.scrollY && v(window.scrollY);
            }, 100));
        }),
        jQuery("body").on("experimental-flatsome-pjax-request-done", () => {
          (h = jQuery("#header")),
            (f = h.find(".header-wrapper")),
            (p = jQuery(".header-top", h)),
            (y = jQuery(".header-main", h)),
            (m = h.hasClass("has-sticky")),
            (g = h.hasClass("sticky-hide-on-scroll")),
            window.scrollY && v(window.scrollY, void 0, !0);
        }));
      const w = window.matchMedia("(prefers-reduced-motion: reduce)");
      let k = !1;
      function Q() {
        k = "undefined" == typeof UxBuilder && w.matches;
      }
      Q(), w.addEventListener?.("change", Q);
      const x = [];
      let C;
      function E() {
        x.length &&
          (cancelAnimationFrame(C),
          (C = requestAnimationFrame(() => {
            for (let e = 0; e < x.length; e++)
              x[e].element.offsetParent ? T(x[e]) : x.splice(e, 1);
          })));
      }
      function T(e) {
        !(function ({ element: e, type: t }) {
          let n = F(e.dataset.parallax),
            o = P(e),
            i = (window.innerHeight - o.offsetHeight) * n;
          switch (t) {
            case "backgroundImage":
              e.style.backgroundSize = n ? "100% auto" : null;
              break;
            case "backgroundElement":
              e.style.height = n ? `${o.offsetHeight + i}px` : null;
          }
        })(e),
          (function ({ element: e, type: t }) {
            let n = F(e.dataset.parallax || e.dataset.parallaxBackground),
              o = window.innerHeight,
              i = P(e),
              a = e.offsetHeight - i.offsetHeight,
              r = e.getBoundingClientRect(),
              s = i !== e ? i.getBoundingClientRect() : r,
              l = r.top + e.offsetHeight / 2,
              c = o / 2 - l,
              u = o / 2 - (s.top + i.offsetHeight / 2),
              d = l + _() < o / 2 ? _() : c,
              h = (Math.abs(c), Math.abs(d) / (o / 2)),
              f = 0;
            var p;
            if (!(s.top > o || s.top + i.offsetHeight < 0))
              switch (t) {
                case "backgroundImage":
                  (f = s.top * n),
                    (e.style.backgroundPosition = n
                      ? `50% ${f.toFixed(0)}px`
                      : null),
                    (e.style.backgroundAttachment = n ? "fixed" : null);
                  break;
                case "backgroundElement":
                  (f = u * n - a / 2),
                    (e.style.transform = n
                      ? `translate3d(0, ${f.toFixed(2)}px, 0)`
                      : null),
                    (e.style.backfaceVisibility = n ? "hidden" : null);
                  break;
                case "element":
                  (f = d * n),
                    (e.style.transform = n
                      ? `translate3d(0, ${f.toFixed(2)}px, 0)`
                      : null),
                    (e.style.backfaceVisibility = n ? "hidden" : null),
                    void 0 !== e.dataset.parallaxFade &&
                      (e.style.opacity = n
                        ? ((p = 1 - h), p * (2 - p)).toFixed(2)
                        : null);
              }
          })(e);
      }
      function L(e) {
        return void 0 !== e.dataset.parallaxBackground
          ? "backgroundElement"
          : void 0 !== e.dataset.parallaxElemenet
          ? "element"
          : "" !== e.style.backgroundImage
          ? "backgroundImage"
          : "element";
      }
      function _() {
        return document.documentElement.scrollTop || document.body.scrollTop;
      }
      function P(e) {
        return (
          (function (e, t = null) {
            for (; e && !I(e).call(e, t); ) e = e.parentElement;
            return e;
          })(e, e.dataset.parallaxContainer || "[data-parallax-container]") || e
        );
      }
      function I(e) {
        return (
          e.matches ||
          e.webkitMatchesSelector ||
          e.mozMatchesSelector ||
          e.msMatchesSelector
        );
      }
      function F(e) {
        return ((e / 10) * -1) / (2 - Math.abs(e) / 10);
      }
      function O(e, t = {}) {
        return new IntersectionObserver(
          function (t) {
            for (let n = 0; n < t.length; n++) e(t[n]);
          },
          { rootMargin: "0px", threshold: 0.1, ...t }
        );
      }
      function M() {
        return (
          console.warn(
            "Flatsome: Flickity is lazy loaded. Use 'lazyFlickity()' to instantiate and 'flatsome-flickity-ready' event to interact with Flickity instead."
          ),
          this
        );
      }
      function A() {
        return jQuery.fn.magnificPopup
          ? Promise.resolve()
          : r.e(230).then(r.t.bind(r, 2801, 23));
      }
      window.addEventListener("scroll", E, { passive: !0 }),
        window.addEventListener("resize", E),
        new MutationObserver(E).observe(document.body, { childList: !0 }),
        window.jQuery &&
          (window.jQuery.fn.flatsomeParallax = function (t) {
            k ||
              ("destroy" !== t &&
                this.each((t, n) =>
                  (function (t) {
                    t.classList.add("parallax-active"),
                      (!document
                        .querySelector("body")
                        .classList.contains("parallax-mobile") &&
                        e()) ||
                        (t.classList &&
                          t.dataset &&
                          (x.push({ element: t, type: L(t) }),
                          T(x[x.length - 1])));
                  })(n)
                ));
          }),
        r(9207),
        jQuery.fn.flickity ||
          ((M.isFlickityStub = !0), (jQuery.fn.flickity = M)),
        (jQuery.fn.lazyFlickity = function (e) {
          const t = O((n) => {
            if (n.isIntersecting) {
              if (
                (t.unobserve(n.target),
                !jQuery.fn.flickity || jQuery.fn.flickity === M)
              )
                return r
                  .e(436)
                  .then(r.t.bind(r, 8026, 23))
                  .then(() => {
                    jQuery(n.target).flickity(e),
                      jQuery(n.target).trigger("flatsome-flickity-ready");
                  });
              jQuery(n.target).flickity(e),
                jQuery(n.target).trigger("flatsome-flickity-ready");
            }
          });
          return this.each((n, o) => {
            "string" == typeof e
              ? jQuery.fn.flickity && jQuery(o).flickity(e)
              : t.observe(o);
          });
        }),
        (jQuery.loadMagnificPopup = A),
        (jQuery.fn.lazyMagnificPopup = function (e) {
          const t = jQuery(this),
            n = e.delegate ? t.find(e.delegate) : t;
          return (
            n.one("click", (o) => {
              o.preventDefault(),
                A().then(() => {
                  t.data("magnificPopup") || t.magnificPopup(e),
                    t.magnificPopup("open", n.index(o.currentTarget) || 0);
                });
            }),
            t
          );
        }),
        r(1711),
        r(3484);
      const D = O((e) => {
        if (e.intersectionRatio > 0) {
          D.unobserve(e.target);
          const t = jQuery(e.target);
          t.removeAttr("data-animate-transition"),
            t.removeAttr("data-animated"),
            window.requestAnimationFrame(() => {
              t.attr("data-animate-transform", "true"),
                window.requestAnimationFrame(() => {
                  t.attr("data-animate-transition", "true"),
                    setTimeout(() => {
                      t.attr("data-animated", "true");
                    }, 300);
                });
            });
        }
      });
      Flatsome.behavior("animate", {
        attach(e) {
          const t = "uxBuilder" === jQuery("html").attr("ng-app");
          jQuery("[data-animate]", e).each((e, n) => {
            const o = jQuery(n),
              i = o.data("animate");
            if (t || 0 === i.length || k)
              return o.attr("data-animated", "true");
            D.observe(n);
          });
        },
        detach(e) {
          jQuery("[data-animate]", e).each((e, t) => {
            jQuery(t).attr("data-animated", "false"), D.unobserve(t);
          });
        },
      }),
        r(1094);
      const B = O((e) => {
        if (e.intersectionRatio > 0) {
          B.unobserve(e.target);
          const t = jQuery(e.target);
          r.e(987)
            .then(r.bind(r, 3748))
            .then(({ CountUp: e }) => {
              const n = parseInt(t.text());
              new e(t.get(0), n, { decimalPlaces: 0, duration: 4 }).start(),
                t.addClass("active");
            });
        }
      });
      function S(e) {
        e.addClass("current-dropdown"),
          e.find(".nav-top-link").attr("aria-expanded", !0),
          (function (e) {
            const t = e,
              n = t.closest(".container").width(),
              o = t.closest("li.menu-item"),
              i = o.hasClass("menu-item-design-full-width"),
              a = o.hasClass("menu-item-design-container-width"),
              s = o.parent().hasClass("ux-nav-vertical-menu"),
              l = !i && !a,
              c = r.g.flatsomeVars.rtl;
            if (l && !s) {
              if (n < 750) return !1;
              var u = t.outerWidth(),
                d = t.offset(),
                h = Math.max(
                  document.documentElement.clientWidth,
                  window.innerWidth || 0
                ),
                f = d.left - (h - n) / 2;
              c && (f = jQuery(window).width() - (d.left + u) - (h - n) / 2);
              var p = t.width(),
                y = n - (f + p),
                m = !1;
              f > y && f < p && (m = (f + y) / 3),
                y < 0 && (m = -y),
                m && c
                  ? t.css("margin-right", -m)
                  : m && t.css("margin-left", -m),
                p > n && t.addClass("nav-dropdown-full");
            }
            if (a) {
              t.css({ inset: "0" });
              const e = t.closest(".container").get(0).getBoundingClientRect(),
                i = t.get(0).getBoundingClientRect();
              t.css({
                width: s ? n - o.width() : n,
                ...(!c && { left: e.left - i.left + 15 }),
                ...(c && { right: 15 - (e.right - i.right) }),
              });
            }
            if (i) {
              t.css({ inset: "0" });
              const e = document.body,
                n = e.getBoundingClientRect(),
                i = t.get(0).getBoundingClientRect(),
                a = e.clientWidth;
              t.css({
                ...(!c && {
                  width: s ? a - o.get(0).getBoundingClientRect().right : a,
                }),
                ...(c && {
                  width: s ? o.get(0).getBoundingClientRect().left : a,
                }),
                ...(!c && { left: n.left - i.left }),
                ...(c && { right: -(n.right - i.right) }),
              });
            }
            if ((a || i) && !s) {
              let e = null;
              if (
                (o.closest("#top-bar").length &&
                  (e = document.querySelector("#top-bar")),
                o.closest("#masthead").length &&
                  (e = document.querySelector("#masthead")),
                o.closest("#wide-nav").length &&
                  (e = document.querySelector("#wide-nav")),
                null !== e)
              ) {
                const n = e.getBoundingClientRect(),
                  i = o.get(0).getBoundingClientRect();
                t.css({ top: n.bottom - i.bottom + i.height });
              }
            }
            s &&
              /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
              t.css({
                minHeight: t
                  .closest(".header-vertical-menu__fly-out")
                  .outerHeight(),
              });
          })(e.find(".nav-dropdown"));
      }
      function $(e) {
        e.removeClass("current-dropdown"),
          e.find(".nav-top-link").attr("aria-expanded", !1),
          e.find(".nav-dropdown").attr("style", "");
      }
      function z(e) {
        e.each((e, t) => {
          const n = jQuery(t);
          n.hasClass("current-dropdown") && $(n);
        });
      }
      function H(e, t) {
        e.length && e.addClass(`ux-body-overlay--${t}-active`);
      }
      function V(e, t) {
        e.length && e.removeClass(`ux-body-overlay--${t}-active`);
      }
      Flatsome.behavior("count-up", {
        attach(e) {
          jQuery("span.count-up", e).each((e, t) => {
            B.observe(t);
          });
        },
      }),
        Flatsome.behavior("dropdown", {
          attach(e) {
            const t = jQuery(".nav li.has-dropdown", e),
              n = "uxBuilder" === jQuery("html").attr("ng-app"),
              o = jQuery(".ux-body-overlay"),
              i = "ontouchstart" in window;
            let a = !1,
              r = null;
            jQuery(".header-nav > li > a, .top-bar-nav > li > a", e).on(
              "focus",
              () => {
                z(t);
              }
            ),
              t.each(function (e, s) {
                const l = jQuery(s),
                  c = l.hasClass("nav-dropdown-toggle") && !i;
                let u = !1,
                  d = !1;
                l.on("touchstart click", function (e) {
                  "touchstart" === e.type && (u = !0),
                    "click" === e.type &&
                      u &&
                      (u && !d && e.preventDefault(), (d = !0));
                }),
                  n || c
                    ? ((a = !0),
                      l.on("click", "a:first", function (e) {
                        if (
                          (e.preventDefault(),
                          (r = l),
                          l.hasClass("current-dropdown"))
                        )
                          return $(l), void V(o, "click");
                        z(t),
                          S(l),
                          H(o, "click"),
                          jQuery(document).trigger("flatsome-dropdown-opened", [
                            l,
                          ]);
                      }))
                    : (l.on("keydown", "a:first", function (e) {
                        "Space" === e.code &&
                          (e.preventDefault(),
                          l.hasClass("current-dropdown")
                            ? ($(l), V(o, "click"))
                            : (z(t),
                              S(l),
                              H(o, "click"),
                              jQuery(document).trigger(
                                "flatsome-dropdown-opened",
                                [l]
                              )));
                      }),
                      l.hoverIntent({
                        sensitivity: 3,
                        interval: 20,
                        timeout: 70,
                        over(e) {
                          z(t),
                            S(l),
                            V(o, "click"),
                            jQuery(document).trigger(
                              "flatsome-dropdown-opened",
                              [l]
                            );
                        },
                        out() {
                          (d = !1), (u = !1), $(l);
                        },
                      }));
              }),
              !n &&
                a &&
                jQuery(document).on("click", function (e) {
                  null === r ||
                    r === e.target ||
                    r.has(e.target).length ||
                    ($(r), V(o, "click"));
                }),
              jQuery(document).on("flatsome-dropdown-opened", function (e, t) {
                t.hasClass("menu-item-has-block") &&
                  jQuery.fn.packery &&
                  t.find("[data-packery-options]").packery("layout");
              }),
              jQuery(document).on("flatsome-header-sticky", function () {
                z(t), V(o, "click");
              });
          },
        }),
        Flatsome.behavior("instagram", {
          attach(e) {
            const t = O((e) => {
              if (e.intersectionRatio > 0) {
                t.unobserve(e.target);
                const n = jQuery(e.target),
                  o = n.data("flatsome-instagram"),
                  i = (e) => {
                    jQuery("body").hasClass("admin-bar") &&
                      n.before(
                        '<div class="container error"><p>Instagram error: ' +
                          e +
                          "</p></div>"
                      ),
                      console.error("Instagram error:", e);
                  };
                if ("string" != typeof o) return i("Invalid data");
                jQuery.ajax({
                  url: flatsomeVars.ajaxurl,
                  data: { action: "flatsome_load_instagram", data: o },
                  success(e) {
                    if (!e.success) return i(e.data);
                    if ("string" != typeof e.data)
                      return console.error(
                        "Invalid Instagram response:",
                        e.data
                      );
                    const t = jQuery(e.data);
                    Flatsome.detach(n), n.replaceWith(t), Flatsome.attach(t);
                  },
                  error(e) {
                    i(e);
                  },
                });
              }
            });
            jQuery("[data-flatsome-instagram]", e).each((e, n) => {
              t.observe(n);
            });
          },
        }),
        Flatsome.behavior("lightbox-gallery", {
          attach(e) {
            const t = {
              delegate: "a",
              type: "image",
              closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
              closeMarkup: flatsomeVars.lightbox.close_markup,
              tLoading: '<div class="loading-spin centered dark"></div>',
              removalDelay: 300,
              gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                arrowMarkup:
                  '<button class="mfp-arrow mfp-arrow-%dir%" title="%title%"><i class="icon-angle-%dir%"></i></button>',
                preload: [0, 1],
              },
              image: {
                tError:
                  '<a href="%url%">The image #%curr%</a> could not be loaded.',
                verticalFit: !1,
              },
              callbacks: {
                beforeOpen: function () {
                  a();
                },
                beforeClose: function () {
                  s();
                },
              },
            };
            jQuery(
              '.lightbox .gallery a[href*=".jpg"], .lightbox .gallery a[href*=".jpeg"], .lightbox .gallery a[href*=".png"], .lightbox a.lightbox-gallery',
              e
            )
              .parent()
              .lazyMagnificPopup(t),
              jQuery(".lightbox .lightbox-multi-gallery", e).length &&
                jQuery(".lightbox-multi-gallery", e).each(function () {
                  jQuery(this).lazyMagnificPopup(t);
                });
          },
        }),
        Flatsome.behavior("lightbox-image", {
          attach(e) {
            jQuery(
              [
                '.lightbox *[id^="attachment"] a[href*=".jpg"]',
                '.lightbox *[id^="attachment"] a[href*=".jpeg"]',
                '.lightbox *[id^="attachment"] a[href*=".png"]',
                '.lightbox .wp-block-image a[href*=".jpg"]:not([target="_blank"])',
                '.lightbox .wp-block-image a[href*=".jpeg"]:not([target="_blank"])',
                '.lightbox .wp-block-image a[href*=".png"]:not([target="_blank"])',
                ".lightbox a.image-lightbox",
                '.lightbox .entry-content a[href*=".jpg"]',
                '.lightbox .entry-content a[href*=".jpeg"]',
                '.lightbox .entry-content a[href*=".png"]',
              ].join(","),
              e
            )
              .not(
                [
                  ".lightbox a.lightbox-gallery",
                  '.lightbox .gallery a[href*=".jpg"]',
                  '.lightbox .gallery a[href*=".jpeg"]',
                  '.lightbox .gallery a[href*=".png"]',
                  '.lightbox .lightbox-multi-gallery a[href*=".jpg"]',
                  '.lightbox .lightbox-multi-gallery a[href*=".jpeg"]',
                  '.lightbox .lightbox-multi-gallery a[href*=".png"]',
                ].join(",")
              )
              .lazyMagnificPopup({
                type: "image",
                tLoading: '<div class="loading-spin centered dark"></div>',
                closeOnContentClick: !0,
                closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                closeMarkup: flatsomeVars.lightbox.close_markup,
                removalDelay: 300,
                image: { verticalFit: !1 },
                callbacks: {
                  beforeOpen: function () {
                    a();
                  },
                  beforeClose: function () {
                    s();
                  },
                },
              });
          },
        }),
        Flatsome.behavior("lightboxes-link", {
          attach(e) {
            jQuery(".lightbox-by-id", e).each(function () {
              const t = jQuery(this).attr("id");
              jQuery('a[href="#' + t + '"]', e).on("click", (e) => {
                e.preventDefault();
                const t = jQuery(e.currentTarget);
                A().then(() => {
                  let e = t.attr("href").substring(1),
                    n = jQuery(`#${e}.lightbox-by-id`);
                  if (e && n.length > 0) {
                    let e = n[0],
                      t = jQuery.magnificPopup.open ? 300 : 0;
                    t && jQuery.magnificPopup.close(),
                      setTimeout(function () {
                        jQuery.magnificPopup.open({
                          removalDelay: 300,
                          closeBtnInside:
                            flatsomeVars.lightbox.close_btn_inside,
                          closeMarkup: flatsomeVars.lightbox.close_markup,
                          items: {
                            src: e,
                            type: "inline",
                            tLoading: '<div class="loading-spin dark"></div>',
                          },
                          callbacks: {
                            beforeOpen: function () {
                              a();
                            },
                            open: function () {
                              if (
                                (Flatsome.attach(this.content),
                                jQuery.fn.flickity &&
                                  jQuery(
                                    "[data-flickity-options].flickity-enabled",
                                    this.content
                                  ).each((e, t) => {
                                    jQuery(t).flickity("resize");
                                  }),
                                jQuery.fn.packery)
                              ) {
                                const e = jQuery(
                                  "[data-packery-options]",
                                  this.content
                                );
                                e &&
                                  e.imagesLoaded(function () {
                                    e.packery("layout");
                                  });
                              }
                            },
                            beforeClose: function () {
                              s();
                            },
                          },
                        });
                      }, t);
                  }
                });
              });
            });
          },
        }),
        Flatsome.behavior("lightbox-video", {
          attach(e) {
            jQuery(
              'a.open-video, a.button[href*="vimeo"]:not(.product_type_external), a.button[href*="youtube.com/watch"]:not(.product_type_external)',
              e
            ).lazyMagnificPopup({
              type: "iframe",
              closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
              mainClass: "my-mfp-video",
              closeMarkup: flatsomeVars.lightbox.close_markup,
              tLoading: '<div class="loading-spin centered dark"></div>',
              removalDelay: 300,
              preloader: !0,
              callbacks: {
                elementParse: function (e) {
                  /^.*\.(mp4)$/i.test(e.src) &&
                    ((e.type = "inline"),
                    (e.src =
                      '<div class="ux-mfp-inline-content ux-mfp-inline-content--video"><video autoplay controls playsinline width="100%" height="auto" name="media"><source src="' +
                      e.src +
                      '" type="video/mp4"></video></div>'));
                },
                beforeOpen: function () {
                  a();
                },
                open: function () {
                  jQuery(".slider .is-selected .video").trigger("pause");
                },
                beforeClose: function () {
                  s();
                },
                close: function () {
                  jQuery(".slider .is-selected .video").trigger("play");
                },
              },
            });
          },
        }),
        Flatsome.behavior("lightboxes", {
          attach(e) {
            jQuery("[data-open]", e).on("click", (e) => {
              e.preventDefault();
              const t = jQuery(e.currentTarget);
              A().then(() => {
                var e = t.data("open"),
                  n = t.data("color"),
                  o = t.data("bg"),
                  i = t.data("pos"),
                  r = t.data("visible-after"),
                  l = t.data("class"),
                  c = t.attr("data-focus");
                t.offset(),
                  t.addClass("current-lightbox-clicked"),
                  "#product-sidebar" === e &&
                    void 0 === r &&
                    (r = !jQuery(e).hasClass("mfp-hide")),
                  jQuery.magnificPopup.open({
                    items: {
                      src: e,
                      type: "inline",
                      tLoading: '<div class="loading-spin dark"></div>',
                    },
                    removalDelay: 300,
                    closeBtnInside: flatsomeVars.lightbox.close_btn_inside,
                    closeMarkup: flatsomeVars.lightbox.close_markup,
                    focus: c,
                    callbacks: {
                      beforeOpen: function () {
                        (this.st.mainClass = `off-canvas ${
                          n || ""
                        } off-canvas-${i}`),
                          a();
                      },
                      open: function () {
                        jQuery("html").addClass("has-off-canvas"),
                          jQuery("html").addClass("has-off-canvas-" + i),
                          l && jQuery(".mfp-content").addClass(l),
                          o && jQuery(".mfp-bg").addClass(o),
                          jQuery(".mfp-content .resize-select").change(),
                          jQuery.fn.packery &&
                            jQuery(
                              "[data-packery-options], .has-packery"
                            ).packery("layout"),
                          jQuery(".equalize-box", this.content).length &&
                            Flatsome.attach("equalize-box", this.content);
                      },
                      beforeClose: function () {
                        jQuery("html").removeClass("has-off-canvas"), s();
                      },
                      afterClose: function () {
                        jQuery("html").removeClass("has-off-canvas-" + i),
                          jQuery(".current-lightbox-clicked").removeClass(
                            "current-lightbox-clicked"
                          ),
                          r && jQuery(e).removeClass("mfp-hide");
                      },
                    },
                  });
              });
            });
          },
        }),
        Flatsome.behavior("slider", {
          attach(e) {
            var t;
            (t = jQuery(e).data("flickityOptions")
              ? jQuery(e)
              : jQuery("[data-flickity-options]", e)).length &&
              t.each((e, t) => {
                var n = jQuery(t),
                  o = n.closest(".slider-wrapper"),
                  i = n.data("flickity-options");
                if (
                  ("undefined" != typeof UxBuilder && (i.draggable = !1),
                  !0 === i.watchCSS)
                )
                  return;
                let a = !1,
                  r = !1;
                const s = (e) => {
                  try {
                    (a = t.contains(e.target)),
                      "number" != typeof i.autoPlay ||
                        !i.pauseAutoPlayOnHover ||
                        a ||
                        r ||
                        n.flickity("playPlayer");
                  } catch (e) {}
                };
                n.on("flatsome-flickity-ready", function () {
                  n
                    .find(".flickity-slider > :not(.is-selected) .video-bg")
                    .trigger("pause"),
                    n.find(".is-selected .video-bg").trigger("play"),
                    "requestAnimationFrame" in window &&
                      (n.removeClass("flickity-enabled"),
                      window.requestAnimationFrame(() => {
                        n.addClass("flickity-enabled");
                      }));
                  const e = n.data("flickity");
                  if (e && i.parallax) {
                    const t = n.find(".bg, .flickity-slider > .img img");
                    n.addClass("slider-has-parallax"),
                      n.on("scroll.flickity", function (n, o) {
                        e.slides.forEach(function (n, o) {
                          const a = t[o],
                            r = (-1 * (n.target + e.x)) / i.parallax;
                          a && (a.style.transform = "translateX( " + r + "px)");
                        });
                      });
                  }
                  document.addEventListener("touchstart", s, { passive: !0 });
                }),
                  k &&
                    ((i.friction = 1),
                    (i.selectedAttraction = 1),
                    (i.autoPlay = !1)),
                  n.lazyFlickity(i),
                  n.imagesLoaded(function () {
                    o.find(".loading-spin").fadeOut();
                  }),
                  n.on("change.flickity", function () {
                    a && (r = !0),
                      n
                        .find(".flickity-slider > :not(.is-selected) .video-bg")
                        .trigger("pause"),
                      n.find(".is-selected .video-bg").trigger("play");
                  }),
                  n.on("dragStart.flickity", function () {
                    (document.ontouchmove = (e) => e.preventDefault()),
                      n.addClass("is-dragging");
                  }),
                  n.on("dragEnd.flickity", function () {
                    (document.ontouchmove = () => !0),
                      n.removeClass("is-dragging");
                  }),
                  n.on("destroy.flickity", () => {
                    document.removeEventListener("touchstart", s);
                  });
              });
          },
          detach(e) {
            jQuery.fn.flickity &&
              !jQuery.fn.flickity.isFlickityStub &&
              (jQuery(e).data("flickityOptions")
                ? jQuery(e).flickity("destroy")
                : jQuery("[data-flickity-options]", e).each(function () {
                    jQuery(this).data("flickity") &&
                      jQuery(this).flickity("destroy");
                  }));
          },
        }),
        r(5414),
        r(5958),
        r(6241),
        r(8131),
        r(4206),
        r(5237),
        r(4113),
        Flatsome.behavior("accordion-title", {
          attach(t) {
            const n = window.location.hash;
            let o = !1;
            jQuery(".accordion-title", t).each(function () {
              jQuery(this)
                .off("click.flatsome")
                .on("click.flatsome", function (t) {
                  const n = k ? 0 : 200;
                  jQuery(this).next().is(":hidden")
                    ? (jQuery(this)
                        .parent()
                        .parent()
                        .find(".accordion-title")
                        .attr("aria-expanded", !1)
                        .removeClass("active")
                        .next()
                        .slideUp(n),
                      jQuery(this)
                        .attr("aria-expanded", !jQuery(this).hasClass("active"))
                        .toggleClass("active")
                        .next()
                        .slideDown(n, function () {
                          e() && jQuery.scrollTo(jQuery(this).prev());
                        }),
                      window.requestAnimationFrame(() => {
                        jQuery.fn.flickity &&
                          jQuery(this)
                            .next()
                            .find("[data-flickity-options].flickity-enabled")
                            .each((e, t) => {
                              jQuery(t).flickity("resize");
                            }),
                          jQuery.fn.packery &&
                            jQuery(this)
                              .next()
                              .find("[data-packery-options]")
                              .packery("layout");
                      }))
                    : jQuery(this)
                        .parent()
                        .parent()
                        .find(".accordion-title")
                        .attr("aria-expanded", !1)
                        .removeClass("active")
                        .next()
                        .slideUp(n),
                    t.preventDefault();
                }),
                !n.substring(1).length ||
                  (decodeURIComponent(n.substring(1)) !==
                    jQuery(this).attr("href")?.split("#")[1] &&
                    n.substring(1) !==
                      jQuery(this).attr("href")?.split("#")[1]) ||
                  (jQuery(this).hasClass("active") ||
                    jQuery(this).trigger("click"),
                  o ||
                    ((o = !0),
                    setTimeout(() => {
                      jQuery.scrollTo(jQuery(this).parent());
                    }, 500)));
            });
          },
        }),
        Flatsome.behavior("tooltips", {
          attach(t) {
            jQuery(
              ".tooltip:not(.hotspot), .has-tooltip, .tip-top, li.chosen a",
              t
            ).lazyTooltipster(),
              jQuery(".tooltip-as-html", t).lazyTooltipster({
                interactive: !0,
                contentAsHTML: !0,
              }),
              e()
                ? jQuery(
                    ".hotspot.tooltip:not(.quick-view)",
                    t
                  ).lazyTooltipster({ trigger: "click" })
                : jQuery(".hotspot.tooltip", t).lazyTooltipster();
          },
        });
      const q = "flatsome-sticky-sidebar";
      function R(e) {
        const t = e.getBoundingClientRect();
        return new DOMRect(t.width, t.top + window.scrollY, 0, t.height);
      }
      Flatsome.behavior("sticky-sidebar", {
        attach(e) {
          jQuery('.is-sticky-column[data-sticky-mode="javascript"]', e).each(
            (e, t) => {
              "ResizeObserver" in window &&
              t.offsetParent &&
              t.offsetParent !== document.body
                ? jQuery(t).data(
                    q,
                    (function (e) {
                      const { offsetParent: t } = e,
                        n = parseInt(flatsomeVars.sticky_height, 10) + 30,
                        o = { passive: !0, capture: !1 };
                      if (!t || t === document.body) return;
                      let { innerHeight: i } = window,
                        a = null,
                        r = null,
                        s = 0,
                        c = null,
                        u = null;
                      const d = (t = "down") => {
                          const o = window.scrollY + n - Math.round(a?.top),
                            l = i + s - n - Math.round(r?.height),
                            d = Math.max(
                              Math.min(l, Math.round(a?.height - r?.height)),
                              0
                            );
                          let h = null,
                            f = null;
                          !a || r?.height < i - n
                            ? (f = n)
                            : "down" === t
                            ? o <= s
                              ? (h = d)
                              : r?.height - o <= i &&
                                ((f = i - Math.round(r?.height)), (s = o))
                            : "up" === t &&
                              (o <= l
                                ? ((f = n),
                                  (s = o + Math.round(r?.height) - i + n))
                                : (h = d)),
                            (h === c && f === u) ||
                              ((e.style.top =
                                "number" == typeof f ? `${f}px` : f),
                              (e.style.transform =
                                "number" == typeof h
                                  ? `translateY(${h}px)`
                                  : h)),
                            (u = f),
                            (c = h);
                        },
                        h = (function (e) {
                          if ("ResizeObserver" in window)
                            return new ResizeObserver(function (t) {
                              for (let n = 0; n < t.length; n++) e(t[n]);
                            });
                        })(({ target: n, contentRect: o }) => {
                          if (n === t) {
                            const e = R(t),
                              { x: n, y: i, width: r, height: s } = o;
                            a = new DOMRect(e.x + n, e.y + i, r, s);
                          } else n === e && ((r = R(e)), d());
                        }),
                        f = l((e, { direction: t }) => d(t), o),
                        p = () => {
                          (i = window.innerHeight), d();
                        };
                      return (
                        h?.observe(t),
                        h?.observe(e),
                        window.addEventListener("resize", p, o),
                        () => {
                          f(),
                            h?.disconnect(),
                            window.removeEventListener("resize", p);
                        }
                      );
                    })(t)
                  )
                : jQuery(t).removeAttr("data-sticky-mode");
            }
          );
        },
        detach(e) {
          jQuery('.is-sticky-column[data-sticky-mode="javascript"]', e).each(
            (e, t) => {
              jQuery(t).data(q)?.();
            }
          );
        },
      }),
        r(9417),
        Flatsome.behavior("lottie", {
          attach(e) {
            if ("uxBuilder" === jQuery("html").attr("ng-app")) return;
            const t = jQuery(".ux-lottie__player", e);
            if (0 === t.length) return;
            const n = O((e) => {
              e.isIntersecting &&
                (n.unobserve(e.target),
                (function (e) {
                  const t = e,
                    n = JSON.parse(t.dataset.params);
                  let o = null,
                    i = null,
                    a = !1;
                  function s(e) {
                    if (0 === parseInt(e)) return i.ip;
                    if (100 === parseInt(e)) return i.op;
                    const t = parseInt(i.ip),
                      n = (e * (parseInt(i.op) - t)) / 100 + t;
                    return Math.ceil(n);
                  }
                  Promise.all([
                    r.e(970).then(r.bind(r, 9371)),
                    r.e(970).then(r.bind(r, 1204)),
                  ]).then(([, { create: e }]) => {
                    t.load(n.src),
                      t.addEventListener("ready", () => {
                        (o = t.getLottie()), (i = o.animationData);
                        const {
                          autoplay: r,
                          controls: l,
                          direction: c,
                          end: u,
                          id: d,
                          loop: h,
                          mouseout: f,
                          speed: p,
                          start: y,
                          trigger: m,
                          scrollActionType: g,
                          visibilityEnd: v,
                          visibilityStart: b,
                        } = n;
                        (t.__controls = l),
                          t.setLooping(h),
                          t.setSpeed(parseFloat(p)),
                          t.setDirection(c),
                          ("true" !== r && "scroll" === m) ||
                            o.playSegments([s(y), s(u)], !0),
                          r ||
                            (t.pause(),
                            "scroll" === m &&
                              e({
                                player: `#${d} .ux-lottie__player`,
                                mode: "scroll",
                                actions: [
                                  {
                                    visibility: [b / 100, v / 100],
                                    type: g,
                                    frames: [s(y), s(u)],
                                  },
                                ],
                              }),
                            "hover" === m &&
                              (t.addEventListener("mouseenter", () => {
                                "reverse" === f
                                  ? (t.setDirection(c), t.play())
                                  : t.play();
                              }),
                              t.addEventListener("mouseleave", () => {
                                "reverse" === f
                                  ? (t.setDirection(-1 === c ? 1 : -1),
                                    t.play())
                                  : t.pause();
                              })),
                            "click" === m &&
                              t.addEventListener("click", () => {
                                if (a) return t.pause(), void (a = !1);
                                t.play(), (a = !0);
                              }));
                      });
                  });
                })(e.target));
            });
            t.each((e, t) => {
              n.observe(t);
            });
          },
        }),
        k &&
          window.flatsomeVars.user.can_edit_pages &&
          ("Prefer reduced motion is active on your OS",
          "The prefers-reduced-motion media feature is used to detect if the user has requested the system minimize the amount of non-essential motion it uses. With this option enabled, slides & animations are reduced on the frontend.\nCheck your OS documentation on how to disable reduced motion.",
          console.groupCollapsed(
            "%cFlatsome%c: Prefer reduced motion is active on your OS",
            "color: #0693e3; font-weight: bold;",
            "color: inherit;"
          ),
          console.log(
            "The prefers-reduced-motion media feature is used to detect if the user has requested the system minimize the amount of non-essential motion it uses. With this option enabled, slides & animations are reduced on the frontend.\nCheck your OS documentation on how to disable reduced motion."
          ),
          console.groupEnd());
      let N = 0;
      let W = 0;
      const U = "scrollBehavior" in document.documentElement.style,
        Y = window.getComputedStyle(document.documentElement)[
          "scroll-behavior"
        ];
      function X() {
        window.removeEventListener("keydown", X),
          window.removeEventListener("pointermove", X),
          window.removeEventListener("touchstart", X),
          (function () {
            const e = jQuery("#header");
            if (!e.hasClass("has-sticky")) return;
            const t = e.clone();
            t.attr("id", "header-clone").css("visibility", "hidden");
            const n = t.find(".header-wrapper");
            n.addClass("stuck"),
              jQuery("body").append(t),
              (N = Math.round(n.height())),
              t.remove(),
              (window.flatsomeVars.stickyHeaderHeight = N),
              (function (e, t = "") {
                t && document.documentElement.style.setProperty(e, t),
                  window
                    .getComputedStyle(document.documentElement)
                    .getPropertyValue(e);
              })("--flatsome--header--sticky-height", `${N}px`);
          })(),
          (function () {
            const e = jQuery("#wpadminbar"),
              t = e.length && e.is(":visible") ? e.height() : 0;
            (W = Math.round(window.flatsomeVars.stickyHeaderHeight + t)),
              (window.flatsomeVars.scrollPaddingTop = W),
              jQuery.extend(jQuery.easing, {
                fsEaseInOutExpo: function (e) {
                  return 0 === e
                    ? 0
                    : 1 === e
                    ? 1
                    : e < 0.5
                    ? Math.pow(2, 20 * e - 10) / 2
                    : (2 - Math.pow(2, -20 * e + 10)) / 2;
                },
              }),
              jQuery.extend(jQuery.scrollTo.defaults, {
                axis: "y",
                duration: k || (U && "smooth" === Y) ? 0 : 1e3,
                offset: -W,
                easing: "fsEaseInOutExpo",
              });
          })();
      }
      document.addEventListener("DOMContentLoaded", () => {
        window.location.hash || window.scrollY > 200
          ? X()
          : (window.addEventListener("keydown", X, { once: !0 }),
            window.addEventListener("pointermove", X, { once: !0 }),
            window.addEventListener("touchstart", X, { once: !0 }));
      });
      for (const e of ["touchstart", "touchmove"])
        jQuery.event.special[e] = {
          setup(t, n, o) {
            this.addEventListener &&
              this.addEventListener(e, o, {
                passive: !n.includes("noPreventDefault"),
              });
          },
        };
      for (const e of ["wheel", "mousewheel"])
        jQuery.event.special[e] = {
          setup(t, n, o) {
            this.addEventListener &&
              this.addEventListener(e, o, { passive: !0 });
          },
        };
      jQuery(() => r.g.Flatsome.attach(document)),
        (r.g.Flatsome.cookie = function (e, t, n) {
          if (void 0 === t) {
            const t = ("; " + window.document.cookie).split(`; ${e}=`);
            return 2 === t.length ? t.pop().split(";").shift() : null;
          }
          {
            !1 === t && (n = -1);
            let o = "";
            if (n) {
              const e = new Date();
              e.setTime(e.getTime() + 24 * n * 60 * 60 * 1e3),
                (o = `; expires=${e.toGMTString()}`);
            }
            window.document.cookie = `${e}=${t}${o}; path=/`;
          }
        });
    })();
})();
