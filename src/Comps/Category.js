import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
    const message = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    const statusCheck = () => {
      dispatch(checkStatus());
    };

    return(
        <div>
            <h3>This page is coming soon!</h3>
            <button  type="button" onClick={statusCheck}>Check status</button>
            <h1>{message}</h1>
        </div>
    )
}

export default Category