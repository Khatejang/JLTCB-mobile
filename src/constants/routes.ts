import type { Href } from "expo-router";

export const routes = {
	HOME: "/(pages)/home",
	ABOUT: "/(pages)/about-us",
	CONTACT: "/(pages)/contact-us",
	SERVICES: "/(pages)/services",
	PORTS: "/(pages)/ports-catered",
	QUOTE: "/(pages)/get-quote",
	APPOINTMENT: "/(pages)/get-appointment",
	AHTN: "/(pages)/ahtn-checker",
	LANDING_PAGE: "/(pages)/landing-page",
	LANDING_PAGE2: "/(pages)/landing-page/customs-brokerage",
	CAREERS: "/(pages)/careers",
	SIGN_IN: "/(pages)/sign-in",
	CLIENT_DB: "/(client)/dashboard",
	CLIENT_QUOTATION_RECORDS: "/(client)/requested-quote",
	CLIENT_QUOTATION_RECORD: "/(client)/requested-quote/QuoteDetails",
	AS_DB: "/(employee-account-specialist)/dashboard",
	MARKETING_DB: "/(employee-marketing)/dashboard",
	QUEOTE_REQUEST: "/(client)/get-quote-request-form",
	CHATBOX: "/(client)/chatbox",
	UNAUTHORIZED: "/(pages)/Unauthorized",
} as const satisfies Record<string, Href>;
