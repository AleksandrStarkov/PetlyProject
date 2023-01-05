import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';

import useToggleModal from 'hooks/toggleModal';

import { selectAccessToken } from 'redux/auth/authSelectors';
import { fetchByCategory } from 'redux/notice/noticeOperations';
import { selectNoticeState } from 'redux/notice/noticeSelectors';
import {
  addFavoriteNotice,
  deleteFavoriteNotice,
} from 'redux/auth/authOperations';

// Components
import Container from 'components/Common/Container';
import Modal from 'components/Common/Modal/Modal';
import ModalNotice from 'components/Notices/ModalLearnMoreNotice/ModalNotice';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList';
// import NoticeNotFound from 'components/Notices/NoticeNotFound';
import Loader from 'components/Loader';
import DelNoticeItem from 'components/Notices/DelNoticeItem';

// import ModalNotice from '../../components/Notices/ModalNotice/ModalNotice';
import { Title } from './NoticesPage.styled';
import ModalAddNotice from 'components/Notices/ModalAddNotice';
import { toast } from 'react-toastify';
import Section from 'components/Common/Section';

const initialState = {
  search: '',
  btnType: '',
  btnId: '',
  favorite: '',
};

function NoticesPage() {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const token = useSelector(selectAccessToken);
  const { resultNotice, isLoading } = useSelector(selectNoticeState);
  const [searchParams, setSearchParams] = useSearchParams();

  const { isOpen, openModal, closeModal, handleBackdropClick, handleKeyDown } =
    useToggleModal();

  // const [search, setSearch] = useState(
  //   '', // searchParams.get('q') === null ? '' : searchParams.get('q')
  // );

  const path = useLocation().pathname;

  console.log('notices', resultNotice);

  useEffect(() => {
    const q = searchParams.get('q');
    if (Boolean(q)) {
      // console.log(111111, { category, q: search });
      //TOTO dispatch /api/notices/:category?q=search
      // dispatch({ category, q: search });
      // setSearch('');
    } else {
      const category = path.split('/')[2];
      dispatch(fetchByCategory(category));
      // }
    }
  }, [state.search, path, searchParams, dispatch]);

  /**Select notice by id  */
  const getNoticeById = useMemo(() => {
    const notice = resultNotice?.find(item => item._id === state.btnId);
    return notice;
  }, [resultNotice, state.btnId]);

  /**Search info by search form */
  const handleSearch = q => {
    setState(prevState => ({
      ...prevState,
      search: q,
    }));
    setSearchParams({ q });
  };

  /**Get button-id and button-dataset*/
  const getBtnInfo = (btnId, btnType, favorite) => {
    //TODO прописати логіку в залежності від кнопки
    setState(prevState => ({
      ...prevState,
      btnType,
      btnId,
      favorite,
    }));

    if (
      !Boolean(token) &&
      (btnType?.favorite || btnType?.add || btnType?.delete)
    ) {
      toast.warn('You are not a registered user!');
      return;
    }

    if (btnType?.modal || btnType?.add) {
      openModal();
      return;
    }

    if (btnType?.favorite) {
      if (!favorite) {
        dispatch(addFavoriteNotice(btnId));
      } else {
        dispatch(deleteFavoriteNotice(btnId));
      }
    }
    return;
  };

  return (
    <>
      <Section>
        {isOpen && (
          <Modal
            handleBackdropClick={handleBackdropClick}
            handleKeyDown={handleKeyDown}
          >
            {state.btnType?.modal && (
              <>
                <ModalNotice
                  notices={getNoticeById}
                  token={token}
                  closeModal={closeModal}
                />
              </>
            )}
            {state.btnType?.delete && (
              <DelNoticeItem notices={resultNotice} closeModal={closeModal} />
            )}
            {state.btnType?.add && (
              <>
                <ModalAddNotice closeModal={closeModal} />
              </>
            )}
          </Modal>
        )}

        <Container>
          <Title>Find your favorite pet</Title>
          <NoticesSearch handleSearch={handleSearch} />
          <NoticesCategoriesNav getBtnInfo={getBtnInfo} />
          {isLoading && <Loader />}
          {Boolean(resultNotice?.length > 0) ? (
            <NoticesCategoriesList
              notices={resultNotice}
              getBtnInfo={getBtnInfo}
            />
          ) : (
            <p style={{ fontSize: '100px' }}>TODO Not Found</p>
            // <NoticeNotFound />
          )}
          {/* <ModalAddNotice /> */}
          {/* <AddNoticeButton getBtnInfo={getBtnInfo} /> */}
          {/* <ModalNotice /> */}
        </Container>
      </Section>
    </>
  );
}

export default NoticesPage;
