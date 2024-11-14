import { Vortex } from "react-loader-spinner";
const styles = {
    blurOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backdropFilter: "blur(10px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
      zIndex: 9999,
    },
  };

const LoadingBars = () => {
    return (
    <div style={styles.blurOverlay}>
        <Vortex width="200" color="#007bff" />
      </div>
    )
}

export default LoadingBars