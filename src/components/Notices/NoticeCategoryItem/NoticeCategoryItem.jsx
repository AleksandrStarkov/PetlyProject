import { helpers } from 'utils/helpers';
import {
  Title,
  AnimalsImg,
  AnimalsUl,
  AnimalsLi,
  AnimalsBtnMore,
  AnimalsDiv,
  AnimalsCategory,
  AnimalsBox,
  AnimalsCategoryDiv,
  AnimalsSpan,
  AnimalsSpanTitle,
  AnimalsBtnDel,
  AnimalsCategoryBox,
} from './NoticeCategoryItem.styled';

function NoticeCategoryItem({
  id,
  category,
  img,
  title,
  breed,
  location,
  birthday,
  getNotice,
}) {
  // console.log(img)
  const getIdForModal = e => {
    e.preventDefault();
    getNotice(e.target.id);
  };

  return (
    <AnimalsBox>
      <AnimalsCategoryBox>
        <AnimalsImg src={img[0].photoURL} alt="Animal" />
        <AnimalsCategoryDiv>
          <AnimalsCategory>{category}</AnimalsCategory>
        </AnimalsCategoryDiv>
      </AnimalsCategoryBox>
       
      <AnimalsDiv>
        <Title>{title}</Title>

        <AnimalsUl>
          <AnimalsLi>
            <AnimalsSpanTitle>Breed:</AnimalsSpanTitle>
            <AnimalsSpan>{breed}</AnimalsSpan>
          </AnimalsLi>
          <AnimalsLi>
            <AnimalsSpanTitle>Place:</AnimalsSpanTitle>
            <AnimalsSpan>{location}</AnimalsSpan>
          </AnimalsLi>
          <AnimalsLi>
            <AnimalsSpanTitle> Age:</AnimalsSpanTitle>
            <AnimalsSpan>{helpers.getAge(birthday)}</AnimalsSpan>
          </AnimalsLi>
        </AnimalsUl>
      </AnimalsDiv>
      <AnimalsBtnMore type="button" id={id} onClick={getIdForModal}>
        Learn more
      </AnimalsBtnMore>
      <AnimalsBtnDel>Delete</AnimalsBtnDel>
    </AnimalsBox>
  );
}

export default NoticeCategoryItem;

//TODO прописати пропси.
