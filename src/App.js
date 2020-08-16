// import React from "react";
// import Products from "./components/Products";
// import Filter from "./components/Filter";
// import Cart from "./components/Cart";
// import store from "./store";
// import { Provider } from "react-redux";

// class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <div className="grid-container">
//           <header>
//             <a href="/">React Shopping Cart</a>
//           </header>
//           <main>
//             <div className="content">
//               <div className="main">
//                 <Filter />
//                 <Products />
//               </div>
//               <div className="sidebar">
//                 <Cart />
//               </div>
//             </div>
//           </main>
//           <footer>All rights reserved.</footer>
//         </div>
//       </Provider>
//     );
//   }
// }

// export default App;

import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">React Shopping Cart</Link>
              <Link to="/admin" style={{ float: "right" }}>
                Admin
              </Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <footer>All right is reserved.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
