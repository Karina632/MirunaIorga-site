/* ================= COOKIE SYSTEM ================= */

function initCookieSystem() {

  const banner = document.getElementById("cookie-banner");

  if (!banner) return;

  const acceptBtn = document.getElementById("acceptCookies");
  const necessaryBtn = document.getElementById("necessaryCookies");
  const declineBtn = document.getElementById("declineCookies");
  const closeBtn = document.getElementById("closeCookies");

  /* Prima vizită */
  if (!localStorage.getItem("cookieConsent")) {
    banner.classList.add("show");
  }

  function hideBanner() {
    banner.classList.remove("show");
  }

  function loadGoogleAnalytics() {
    if (window.gaLoaded) return;

    window.gaLoaded = true;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";

    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag("js", new Date());

    gtag("config", "G-XXXXXXXXXX", {
      anonymize_ip: true
    });
  }

  acceptBtn?.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    loadGoogleAnalytics();
    hideBanner();
  });

  necessaryBtn?.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "necessary");
    hideBanner();
  });

  declineBtn?.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "declined");
    hideBanner();
  });

  closeBtn?.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "necessary");
    hideBanner();
  });

  if (localStorage.getItem("cookieConsent") === "accepted") {
    loadGoogleAnalytics();
  }

}


/* ================= FLOATING BUTTON ================= */
document.addEventListener("click", (e) => {
  const cookieBtn = e.target.closest("#cookieFloatingBtn");

  if (!cookieBtn) return;

  const banner = document.getElementById("cookie-banner");

  if (banner) {
    banner.classList.add("show");
  }
});