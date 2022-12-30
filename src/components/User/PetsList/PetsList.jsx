import { useDispatch, useSelector } from 'react-redux';
import {
  UlWrap, LiItem, Text, LiWrap, Img, LiWrapComment, Button, Span
} from './PatsList.styled';
import {ReactComponent as DeleteIcon} from 'assets/icons/delete.svg';

import { deletePet } from '../../../redux/userData/userDataOperation';

function PetsList() {
const dispatch = useDispatch();
const pets = useSelector((state) => state.userData.data.myPets)

  const onDeleteHandler = (_id) => () => {
      dispatch(deletePet(_id));
  };

  if (!pets.length) return null;

  return (
      <ul>
        {
          pets.map((pet) => (
            <LiItem key={pet._id}>
              <Img src={pet.avatarURL} alt='cat' />
              <UlWrap>
                <LiWrap>
                  <Text> <Span>Name:</Span> {pet.name}</Text>
                </LiWrap>
                <LiWrap>
                  <Text><Span>Date of birth:</Span> {pet.birthday}</Text>
                </LiWrap>
                <LiWrap>
                  <Text><Span>Breed:</Span> {pet.breed}</Text>
                </LiWrap>
                <LiWrapComment>
                  <Text><Span>Comments:</Span>{pet.comments}</Text>
                </LiWrapComment>
              </UlWrap>
              <Button onClick={onDeleteHandler(pet._id)}><DeleteIcon width="24" height="24"/></Button>
            </LiItem>
          ))
        }
      </ul>
  );
}

export default PetsList;
