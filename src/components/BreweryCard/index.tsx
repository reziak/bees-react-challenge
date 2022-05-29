import { Brewery } from "../../pages/Breweries";
import { CardTag } from "../CardTag";

import { Container, DeleteButton } from "./styles"

import trashSVG from '../../assets/trash.svg';

interface BreweryCardProps {
  breweryData: Brewery;
  onDeleteCard: (id: string) => void;
}

export const BreweryCard = ({ breweryData, onDeleteCard }: BreweryCardProps) => {
  return (
    <Container>
      <DeleteButton onClick={() => onDeleteCard(breweryData.id)}>
        <img src={trashSVG} alt="Delete card" />
      </DeleteButton>
      <strong>{breweryData.name}</strong>
      <p>
        {breweryData.street ? breweryData.street : 'No address provided'}<br />
        {breweryData.city}, {breweryData.state} - {breweryData.country}
      </p>
      <div>
        {breweryData.tags && Object.entries(breweryData.tags).map(([key, value]) => {
          return value && <CardTag key={key} type={key} value={value} />
        })}
        <CardTag key="addMore" type="plus" value="add more" />
      </div>
    </Container>
  )
}