const HomePage = () => {
  return (
    <div
      className="home"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 100px)",
      }}
    >
      <p size="xl" weight="bold" align="center">
        Welcome to our fantastic Web App
      </p>
    </div>
  );
};

export default HomePage;
