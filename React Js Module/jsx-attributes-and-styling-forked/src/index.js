import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img
        className="food-img"
        src="https://imgs.search.brave.com/s1DLsKjzP9zzKsKZWmQsxduiahC-ivU8z8GYnzlrR2E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvbDUzazE4/d211OHozMS5qcGc"
        alt="chapati"
      />
      <br />
      <img
        className="food-img"
        src="https://imgs.search.brave.com/udvdYlJeqevzRt3H94NcvEQwmitXOq1kOnKwpl6fgNo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/NTA0NzE4My9waG90/by91a3JhaW5pYW4t/cGxvdi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9V2puVVUx/UEZlS00xaC1WOTY0/YTRtQmFvcV9peUQ3/cGI3d05LSUhoSW5h/QT0"
        alt="pilau"
      />
      <br />
      <img
        className="food-img"
        src="https://imgs.search.brave.com/oUXbM2piCh7NVce6gNY3AtEnTy6MA37E_zobSel371c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by90b3Atdmll/dy10YXN0eS1sYXJn/ZS1mcmllZC0yNjBu/dy0xNzkyNzg0MzI5/LmpwZw"
        alt="tilapia"
      />
    </div>
    <div>
      <img src={img} alt="" />
      <img src={img + "?grayscale"} alt="" />
    </div>
  </div>,
  document.getElementById("root")
);
