import React from 'react'
import { useState } from "react";

function Content() {
  const [index, setIndex] = useState(0);

  const Xigmado = [
 
    "1. Beentaada hore runtaada danbay u baas baxdaa ",
    "2. Ama afeef hore lahow, ama adkeysi dambe lahow ",
    "3. Dheri ninkii ag jooga ayaa lafta kala baxa ",
    "4. Geeljire geela waa wada jiraa, waana kala jiraa ",
    "5. Abaal nin gala waa la arkay, nin gudase lama arag"
  ];

  function PrevousBtn() {
 
    if (index > 0) {
        setIndex(index - 1);
      }
  }
  function NextBtn() {
    if (index < Xigmado.length - 1) {
        setIndex(index + 1);
      }
  }
  return (
 


<div className="flex flex-col justify-center items-center gap-6 p-8 mt-26">
		<h4 className="text-xl rounded-md shadow-lg bg-red-500 text-center p-16 text-white">{Xigmado[index]}</h4>
		<div className="flex flex-row justify-center items-center gap-5 p-2">
			<button className="text-md text-center px-6 py-4 rounded shadow  bg-blue-600 text-white"
			onClick={()=>PrevousBtn()}>Prevous</button>
			<button className="text-md text-center px-6 py-4 rounded shadow  bg-blue-600 text-white"
			onClick={()=>NextBtn()}>Next</button>
		</div>
	</div>
  );
}

export default Content