import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getDetails } from '../slices/details-slice';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const { details } = useAppSelector((state) => state.details);
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDetails(params.id));
  }, [dispatch, params.id]);

  return <p>{JSON.stringify(details)}</p>;
};
