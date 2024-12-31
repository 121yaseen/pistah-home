import PistahIcon from "./icons/pistahIcon";

const HeaderComponent = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100px",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 60px",
        zIndex: 1000,
      }}
    >
      <a href="/">
        <PistahIcon />
      </a>

      {/* Right Button: Contact Us */}
      <button
        style={{
          position: "relative",
          right: "50px",
          top: "7px",
          padding: "10px 20px",
          backgroundColor: "transparent",
          color: "white",
          border: "none",
          fontWeight: "bold",
          fontSize: "14px",
          cursor: "pointer",
          transition: "all 0.2s ease",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLElement;
          target.style.color = "#0b57d0";
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLElement;
          target.style.color = "white";
        }}
      >
        Contact Us
      </button>
    </div>
  );
};

export default HeaderComponent;