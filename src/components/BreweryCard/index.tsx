import { Brewery } from "../../pages/Breweries";
import { CardTag } from "../CardTag";
import { DeleteButton } from "../DeleteButton";
import { Container } from "./styles"

interface BreweryCardProps {
  breweryData: Brewery;
}

export const BreweryCard = ({ breweryData }: BreweryCardProps) => {
  return (
    <Container>
      <DeleteButton />
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