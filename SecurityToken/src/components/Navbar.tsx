const Navbar = () => {
  return (
    <div id="navbar-container">
      <div id="navbar">
        <h3>Security Token</h3>
      </div>

      <div id="connect-btn">
        <radix-connect-button />
      </div>
    </div>
  );
};

export default Navbar;
