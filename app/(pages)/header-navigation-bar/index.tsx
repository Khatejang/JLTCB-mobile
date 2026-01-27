import GuestNavBar from "./GuestNavBar";
import ClientNavBar from "./ClientNavBar";
import LeadASNavBar from "./employee/LeasASNavBar";
import MarketingNavBar from "./employee/MarketingNavBar";

type Props = { user: string };

export default function index({ user }: Props) {
  if (user === "Client") return <ClientNavBar />;
  if (user === "LeadAS") return <LeadASNavBar />;
  if (user === "Marketing") return <MarketingNavBar/>
  return <GuestNavBar />;
}