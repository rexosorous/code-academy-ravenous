import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = props => {
  const businesses = props.businesses.map(n => Business(n));
  return (
    <div className={styles.BusinessList}>
      {businesses}
    </div>
  );
};

export default BusinessList;
