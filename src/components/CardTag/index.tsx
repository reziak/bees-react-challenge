import { Container } from "./styles"

import chartSquareBarSVG from '../../assets/chart-square-bar.svg';
import locationMarkerSVG from '../../assets/location-marker.svg';
import phoneSVG from '../../assets/phone.svg';

interface CardTagProps {
  type: string;
  value: string | null;
}

const iconTypes = {
  breweryType: chartSquareBarSVG,
  postalCode: locationMarkerSVG,
  phone: phoneSVG,
} as any;

export const CardTag = ({ type, value }: CardTagProps) => {
  return (
    <Container>
      { type !== 'userAdded' && <img src={iconTypes[type]} alt={type} />}
      <span>{value}</span>
    </Container>
  )
}