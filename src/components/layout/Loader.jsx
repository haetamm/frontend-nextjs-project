import React from "react";

const Loader = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.loader}></div>
    </div>
  );
};

export default Loader;

const styles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    width: "100%",
  },
  loader: {
    width: "30px",
    height: "30px",
    border: "6px solid #fff",
    borderTop: "6px solid #3498db",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};
