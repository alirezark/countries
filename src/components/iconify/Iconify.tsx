import type { IconProps } from "@iconify/react";
import { Icon } from "@iconify/react";

// ----------------------------------------------------------------------

type Props = IconProps & {};

const Iconify = ({ icon, width = 20, ...other }: Props) => (
  <Icon icon={icon} width={width} height={width} {...other} />
);

export default Iconify;
