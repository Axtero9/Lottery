/**
 * Configuration for Friends Event Raffle Draw
 */
const RAFFLE_CONFIG = {
  eventName: "Friends Raffle Draw",
  eventSubtitle: "Local Community & Friends Gathering",
  
  // Pricing & Currency
  ticketPrice: 50,
  currencySymbol: "₹",
  
  // Prize Pool
  prizes: {
    first: { rank: "1st Prize", amount: "1,000", tag: "Winner" },
    second: { rank: "2nd Prize", amount: "800", tag: "Runner Up" },
    third: { rank: "3rd Prize", amount: "500", tag: "3rd Place" }
  },

  /**
   * WhatsApp Purchase URL
   * You can replace this with your phone number anytime:
   * e.g. "https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20purchase%20tickets%20for%20the%20Friends%20Raffle%20Draw"
   */
  contactNumber: "9310650945",
  whatsappUrl: "https://wa.me/919310650945?text=Hi!%20I%20would%20like%20to%20purchase%20tickets%20for%20the%20Friends%20Raffle%20Draw.",

  // Draw deadline
  deadline: "30th November 2026"
};

window.RAFFLE_CONFIG = RAFFLE_CONFIG;
