import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { api } from '../../services/api';
import { AuthContext } from "../../contexts/AuthContext";
import { BreweryCard } from "../../components/BreweryCard";

import { BreweriesList, Container, Header } from "./styles"

import arrowCircleLeftSVG from '../../assets/arrow-circle-left.svg';
import { BreweryContext } from "../../contexts/BreweryContext";

export const Breweries = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const { breweries, setBreweries } = useContext(BreweryContext);
  const [cookies, setCookies] = useCookies(['user']);

  const handleReturnToSignIn = () => {
    setUser('');
    setCookies('user', '');
    navigate('/');
  }

  const handleDeleteCard = (id: string) => {
    const currentBreweries = [...breweries];
    const filteredBrewery = currentBreweries.filter(brewery => {
      return brewery.id !== id;
    });
    setBreweries(filteredBrewery);
  }

  useEffect(() => {
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

    fetchData();
  }, [setBreweries]);

  useEffect(() => {
    if (!user) {
      if (cookies.user) {
        setUser(cookies.user);
      }
    }
  }, [user, cookies.user, setUser]);

  if (!user) {
    return <Navigate to="/" />
  }

  return (
    <Container>
      <Header>
        <div>
          <button type="button" onClick={handleReturnToSignIn}>
            <img src={arrowCircleLeftSVG} alt="Go back" />
            <span>Go back</span>
          </button>
          <span>{user}</span>
        </div>
      </Header>
      <BreweriesList>
        {breweries.map(location => (
          <BreweryCard
            key={location.id}
            breweryData={location} 
            onDeleteCard={handleDeleteCard}
          />
        ))}
      </BreweriesList>
    </Container>
  )
}