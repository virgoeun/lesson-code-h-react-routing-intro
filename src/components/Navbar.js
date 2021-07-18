// // 1.
function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
}

export default Navbar;

// // 2. & 3.
// import { Link } from "react-router-dom";
// import { Link, NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="Navbar">
//       <ul>
//         {/* 2. */}
//         {/* <Link to="/"> Home </Link> */}
//         {/* <Link to="/about"> About </Link> */}
//         {/* <Link to="/projects"> Projects </Link> */}

//         {/* 3. */}
//         <NavLink to="/" exact activeClassName="selected-link">
//           Home
//         </NavLink>
//         <NavLink to="/about" activeClassName="selected-link">
//           About
//         </NavLink>
//         <NavLink to="/projects" activeClassName="selected-link">
//           Projects
//         </NavLink>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
