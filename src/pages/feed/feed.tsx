import React, { FC, useEffect } from "react";
import styles from "./feed.module.css";
import { useAppDispatch, useAppSelector } from "../../utils/types";
import { useNavigate, useLocation } from "react-router-dom";

import { PreLoader } from "../../components/app/preloader";

const Feed: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();


  useEffect(() => {

  }, []);

  return  (
      <>
        <div className={styles.container}>

        </div>       
      </>
    )
};

export default Feed;
