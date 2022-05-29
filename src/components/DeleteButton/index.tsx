import { Button } from "./styles";

import trashSVG from '../../assets/trash.svg';

export const DeleteButton = () => {
  return (
    <Button>
      <img src={trashSVG} alt="Delete card" />
    </Button>
  )
}