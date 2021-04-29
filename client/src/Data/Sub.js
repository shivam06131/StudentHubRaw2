import FingerprintIcon from "@material-ui/icons/Fingerprint";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import AirplayIcon from "@material-ui/icons/Airplay";
import RouterIcon from "@material-ui/icons/Router";

const subjects = [
  { sub: "Artificial Intellengece", id: 3161608, icon: <FingerprintIcon /> },
  { sub: "Data WareHouse Mining", id: 3161610, icon: <DataUsageIcon /> },
  {
    sub: "Mobile Application Development",
    id: 3161612,
    icon: <MobileFriendlyIcon />,
    hidden: true,
  },
  { sub: "Software Engineering", id: 3161605, icon: <AirplayIcon /> },
  { sub: "Cryptography Network Security", id: 3161609, icon: <RouterIcon /> },
];

export default subjects;
