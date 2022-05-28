import { useEffect, useState } from "react";

import { api } from '../../services/api';
import { BreweriesList, Container, Header } from "./styles"

import ArrowCircleLeftSVG from '../../assets/arrow-circle-left.svg';

type BreweryTags = {
  breweryType: string;
  postalCode: string;
  phone: string;
  userAdded: string[];
}

type Brewery = {
  id: string;
  name: string;
  street: string | null;
  city: string;
  state: string;
  country: string;
  tags: BreweryTags;
}

export const Breweries = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);


  const fetchData = async () => {
    const locations = [];
    const response = await api.get('?per_page=6');

    for (const location of response.data) {
      locations.push({
        id: location.id,
        name: location.name,
        street: location.street || null,
        city: location.city,
        state: location.state,
        country: location.country,
        tags: {
          breweryType: location.brewery_type,
          postalCode: location.postal_code,
          phone: location.phone,
          userAdded: [],
        }
      });
    }

    setBreweries(locations);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Container>
      <Header>
        <div>
          <img src={ArrowCircleLeftSVG} alt="Go back" />
          <span>Go back</span>
        </div>
        <span>Full Name</span>
      </Header>
      <BreweriesList>
        <ul>
          {breweries.length > 0 && breweries.map(brewery => (
            <li key={brewery.id}>
              <p>{brewery.name}</p>
            </li>
          ))}
        </ul>
      </BreweriesList>
    </Container>
  )
}