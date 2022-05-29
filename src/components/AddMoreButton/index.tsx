import { FormEvent, useContext, useState } from 'react';

import { BreweryContext } from '../../contexts/BreweryContext';

import { Container } from './styles';

import plusCircleSVG from '../../assets/plus-circle.svg';
import checkCircleSVG from '../../assets/check-circle.svg';

interface AddMoreButtonProps {
  breweryId: string;
}

export const AddMoreButton = ({ breweryId }: AddMoreButtonProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTag, setNewTag] = useState('');
  const { breweries, setBreweries } = useContext(BreweryContext);

  const handleAddNewTag = (event: FormEvent) => {
    event.preventDefault();
    if (!newTag) {
      setIsAdding(false);
      return;
    }
    const currentBreweries = [...breweries];
    const updatedBreweries = currentBreweries.map(brewery => {
      if (brewery.id === breweryId) {
        brewery.tags.userAdded = newTag;
      }
      return brewery; 
    })
    setBreweries(updatedBreweries);
    setIsAdding(false);
  }

  return (
    <Container>
      {!isAdding ? (
        <>
          <button type='button' onClick={() => setIsAdding(true)}>
            <img src={plusCircleSVG} alt="Add more" />
          </button>
          <span>add more</span>
        </>
      ) : (
        <form onSubmit={handleAddNewTag}>
          <button type="submit">
            <img src={checkCircleSVG} alt="Confirm new tag" />
          </button>
          <input type="text" onChange={event => setNewTag(event.target.value.trim())} />
        </form>
      )}
    </Container>
  )
}