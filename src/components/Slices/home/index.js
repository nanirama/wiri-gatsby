import HomeHero from "./HomeHero"
// import WowClients from "./WowClients"
// import AppScreenshots from "./AppScreenshots"
// import WebsiteWidgets from "./WebsiteWidgets"
// import CallToAction from "./CallToAction"
// import DashboardScreenshots from "./DashboardScreenshots"
// import PricingTable from "./PricingTable"
// import FaqSlice from "./Faq"


const WowClients = loadable(() => import("./WowClients"))
const AppScreenshots = loadable(() => import("./AppScreenshots"))
const WebsiteWidgets = loadable(() => import("./WebsiteWidgets"))
const CallToAction = loadable(() => import("./CallToAction"))
const DashboardScreenshots = loadable(() => import("./DashboardScreenshots"))
const PricingTable = loadable(() => import("./PricingTable"))
const FaqSlice = loadable(() => import("./Faq"))

export const components = {
  hero_section: HomeHero,
  wow_clients: WowClients,
  app_screenshots: AppScreenshots,
  website_widgets: WebsiteWidgets,
  cta_block: CallToAction,
  dashboard_screenshots: DashboardScreenshots,
  pricing_tables: PricingTable,
  faq_block: FaqSlice
}