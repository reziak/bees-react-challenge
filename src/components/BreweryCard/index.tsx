import { Brewery } from '../../contexts/BreweryContext';
import { CardTag } from "../CardTag";

import { Container, DeleteButton } from "./styles"

import trashSVG from '../../assets/trash.svg';
import { AddMoreButton } from '../AddMoreButton';

interface BreweryCardProps {
  breweryData: Brewery;
  onDeleteCard: (id: string) => void;
}

export const BreweryCard = ({ breweryData, onDeleteCard }: BreweryCardProps) => {
  return (
    <Container>
      <div>
        <DeleteButton onClick={() => onDeleteCard(breweryData.id)}>
          <img src={trashSVG} alt="Delete card" />
        </DeleteButton>
        <strong>{breweryData.name}</strong>
        <p>
          {breweryData.street ? breweryData.street : 'No address provided'}<br />
          {breweryData.city}, {breweryData.state} - {breweryData.country}
        </p>
      </div>
      <div className='tags'>
        {breweryData.tags && Object.entries(breweryData.tags).map(([key, value]) => {
          return value && <CardTag key={key} type={key} value={value} />
        })}
        {!breweryData.tags.userAdded && <AddMoreButton breweryId={breweryData.id} />}
      </div>
    </Container>
  )
}