import{  React,  useState , useRef } from "react";



export const Tags = () => {

  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };



    return(
       
       
      <div className=" flex  "   style={{  }} > 

      {scrollX !== 0 && (
        <button className="prev" onClick={() => slide(-50)}>
          <i className="fa fa-angle-left"></i>
        </button>
      )}
       
       
        <div className=" flex scroll  " ref={scrl} onScroll={scrollCheck}>
          <div className="tag"> All</div>
          <div className="tag" > Music</div>
          <div className="tag"> Contemporary Worship Music</div>
          <div className="tag"> News</div>
          <div className="tag"> Live</div>
          <div className="tag"> Chill-out music</div>
          <div className="tag"> Mixes</div>
          <div className="tag"> Blessings</div>
          <div className="tag"> Courts</div>
          <div className="tag"> Javascript</div>
          <div className="tag"> Debates</div>
          <div className="tag"> Computer Science</div>
          <div className="tag"> Thanks Giving</div>
          <div className="tag"> Javascript</div>
          <div className="tag"> Debates</div>
          <div className="tag"> Computer Science</div>
          <div className="tag"> Thanks Giving</div>
          <div className="tag"> Debates</div>
          <div className="tag"> Computer Science</div>
          <div className="tag"> Thanks Giving</div>
          <div className="tag"> Javascript</div>
          <div className="tag"> Debates</div>
          <div className="tag"> Computer Science</div>
          <div className="tag"> Thanks Giving</div>
          </div>
              
      {!scrolEnd && (
        <button className="next" onClick={() => slide(+50)}>
          <i className="fa fa-angle-right"></i>
        </button>
      )}

      </div>

    )
  }
  