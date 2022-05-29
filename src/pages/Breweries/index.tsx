import { useEffect, useState } from "react";

import { api } from '../../services/api';
import { BreweryCard } from "../../components/BreweryCard";

import { BreweriesList, Container, Header } from "./styles"

import arrowCircleLeftSVG from '../../assets/arrow-circle-left.svg';

export type BreweryTags = {
  breweryType: string;
  postalCode: string;
  phone: string;
  userAdded: string | null;
}

export type Brewery = {
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
          userAdded: null,
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
          <button type="button">
            <img src={arrowCircleLeftSVG} alt="Go back" />
            <span>Go back</span>
          </button>
          <span>Full Name</span>
        </div>
      </Header>
      <BreweriesList>
        {breweries.map(location => (
          <BreweryCard key={location.id} breweryData={location} />
        ))}
      </BreweriesList>
    </Container>
  )
}