import React, {useEffect} from "react";

const Background = () => {

  useEffect(() => {
      const svg1 = document.querySelector('#svg1')
      const svg2 = document.querySelector('#svg2')
      const svg3 = document.querySelector('#svg3')

      if(svg1) {
        setTimeout(() => {
          svg1.classList.add("animate__bounceInUp")
          svg1.classList.remove("hidden")
        }, 4000)
      }
      if(svg2) {
        setTimeout(() => {
          svg2.classList.add("animate__bounceInUp")
          svg2.classList.remove("hidden")
        }, 4400)
      }
      if(svg3) {
        setTimeout(() => {
          svg3.classList.add("animate__bounceInUp")
          svg3.classList.remove("hidden")
        }, 4800)
      }
  }, [])

  return (
    <>
      <div className="fixed -z-50 bottom-16 md:bottom-36">
        <svg
          
          id='svg1'
          className="fixed -z-50 -mt-7 md:-mt-20 overflow-hidden animate__animated hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#e2e8f0"
            fillOpacity="1"
            d="M0,320L26.7,314.7C53.3,309,107,299,160,272C213.3,245,267,203,320,186.7C373.3,171,427,181,480,197.3C533.3,213,587,235,640,202.7C693.3,171,747,85,800,69.3C853.3,53,907,107,960,128C1013.3,149,1067,139,1120,117.3C1173.3,96,1227,64,1280,42.7C1333.3,21,1387,11,1413,5.3L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
        <svg
          id='svg2'
          className="fixed -z-40 bottom md:-mt-7 animate__animated hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#64748b"
            fillOpacity="1"
            d="M0,320L26.7,314.7C53.3,309,107,299,160,272C213.3,245,267,203,320,186.7C373.3,171,427,181,480,197.3C533.3,213,587,235,640,202.7C693.3,171,747,85,800,69.3C853.3,53,907,107,960,128C1013.3,149,1067,139,1120,117.3C1173.3,96,1227,64,1280,42.7C1333.3,21,1387,11,1413,5.3L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
        <svg
          id='svg3'
          className="fixed -z-30 bottom mt-4 animate__animated hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1e293b"
            fillOpacity="1"
            d="M0,320L26.7,314.7C53.3,309,107,299,160,272C213.3,245,267,203,320,186.7C373.3,171,427,181,480,197.3C533.3,213,587,235,640,202.7C693.3,171,747,85,800,69.3C853.3,53,907,107,960,128C1013.3,149,1067,139,1120,117.3C1173.3,96,1227,64,1280,42.7C1333.3,21,1387,11,1413,5.3L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Background;
