import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  size?: number;
}

const Icons: React.FC<Props> = ({ Icon, size }) => {
  return <Icon size={size} />;
};

export default Icons;
