// Editorial Raffle Logic: WhatsApp Purchase & Rules Focus

document.addEventListener("DOMContentLoaded", () => {
  const DEFAULT_CONFIG = window.RAFFLE_CONFIG || {
    whatsappUrl: "https://wa.me/?text=Hi!%20I%20would%20like%20to%20purchase%20tickets%20for%20the%20Friends%20Raffle%20Draw."
  };

  // Check saved WhatsApp URL or phone
  let currentWhatsAppUrl = localStorage.getItem("raffle_whatsapp_target") || DEFAULT_CONFIG.whatsappUrl;

  const heroPurchaseBtn = document.getElementById("hero-purchase-btn");
  const footerPurchaseBtn = document.getElementById("footer-purchase-btn");

  const openSettingsBtn = document.getElementById("open-settings-btn");
  const footerSettingsBtn = document.getElementById("footer-settings-btn");
  const closeSettingsBtn = document.getElementById("close-settings-btn");
  const settingsModal = document.getElementById("settings-modal");
  const whatsappPhoneInput = document.getElementById("whatsapp-phone-input");
  const customUrlInput = document.getElementById("custom-url-input");
  const saveSettingsBtn = document.getElementById("save-settings-btn");

  function applyWhatsAppLink(url) {
    currentWhatsAppUrl = url;
    if (heroPurchaseBtn) heroPurchaseBtn.href = url;
    if (footerPurchaseBtn) footerPurchaseBtn.href = url;
  }

  applyWhatsAppLink(currentWhatsAppUrl);

  // Settings Modal Handlers
  function openSettings() {
    if (customUrlInput) customUrlInput.value = currentWhatsAppUrl || "";
    if (settingsModal) settingsModal.classList.remove("hidden");
  }

  function closeSettings() {
    if (settingsModal) settingsModal.classList.add("hidden");
  }

  if (openSettingsBtn) openSettingsBtn.addEventListener("click", openSettings);
  if (footerSettingsBtn) footerSettingsBtn.addEventListener("click", openSettings);
  if (closeSettingsBtn) closeSettingsBtn.addEventListener("click", closeSettings);

  if (settingsModal) {
    settingsModal.addEventListener("click", (e) => {
      if (e.target === settingsModal) closeSettings();
    });
  }

  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener("click", () => {
      const phone = whatsappPhoneInput ? whatsappPhoneInput.value.trim().replace(/\D/g, "") : "";
      const customUrl = customUrlInput ? customUrlInput.value.trim() : "";

      let finalUrl = "";
      if (phone) {
        const countryCode = phone.length === 10 ? "91" : "";
        finalUrl = `https://wa.me/${countryCode}${phone}?text=Hi!%20I%20would%20like%20to%20purchase%20tickets%20for%20the%20Friends%20Raffle%20Draw.`;
      } else if (customUrl) {
        finalUrl = customUrl;
      } else {
        finalUrl = DEFAULT_CONFIG.whatsappUrl;
      }

      localStorage.setItem("raffle_whatsapp_target", finalUrl);
      applyWhatsAppLink(finalUrl);
      closeSettings();

      alert("WhatsApp link updated! The 'Purchase Now' button will now open your WhatsApp chat.");
    });
  }
});
