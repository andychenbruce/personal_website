import React from "react";
import {MakeMath} from "../../render_math.js";


import Wrapper from "../../wrapper.js";

function Boltzman({title}: {title: string}) {
  let new_head = (
    <script type="module" src="./main.js"></script>
  );

  return (
    <Wrapper head={new_head} title={title}>
      <div className="boltzmanCanvases" >
	<canvas
          id="graph_canvas"
          width="800"
          height="400"
        ></canvas>
        <canvas
          id="andy_canvas"
          width="800"
          height="800"
        ></canvas>
      </div>
      <hr className="clearLeft" />
      <h2>Thermodynamics simulation from AP chem</h2>
      <p>
        {" "}
        When atoms or molecules bounce they are basically exchange velocity
        equivelent to an elastic collision{" "}
      </p>
      <br />
      <p>
        I got the equation for 3d elastic collissions of spheres from{" "}
        <a href="https://www.sjsu.edu/faculty/watkins/collision.htm">here</a>, I
        don't really understand the proof other than the mass, momentum, and
        energy conservation equations but I implemented the vector math and it
        works. There is also a similar equation from this{" "}
        <a href="https://en.wikipedia.org/wiki/Elastic_collision#Two-dimensional">
          wikipedia page
        </a>{" "}
        on 2d elastic collissions, but because they just use vectors as a whole
        and not their individual compnents, applying the same equation to 3d
        also works perfectly, intentional or not. I only use the first one
        because it's proof is based of thermodynamics and kinetic energy but
        they are probably the exact same equation just in different form.
      </p>
      <br />
      <br />
      <p>
        The{" "}
        <a href="https://en.wikipedia.org/wiki/Maxwell%E2%80%93Boltzmann_distribution#Distribution_function">
          equation
        </a>{" "}
        for the maxwell boltzman distribution is
      </p>
      <div style={{ textAlign: "center" }}>
        <MakeMath
          tex={
            "f(v) = {({m \\over 2\\pi kT})^{3/2}}4\\pi v^2e^{-{{mv^2} \\over {2kT}}}"
          }
        />
      </div>
      <br />
      where
      <br />
      <MakeMath tex={"f(v)"} /> is the probability
      <br />
      <MakeMath tex={"v"} /> is the velocity
      <br />
      <MakeMath tex={"m"} /> is the mass
      <br />
      <MakeMath tex={"k"} /> is the boltzmann constant
      <br />
      <MakeMath tex={"T"} /> is the temperature
      <br />
      <p>
        the blue graph isn't actually exactly the correct equation for this
        system since the units didn't convert nicely when I did it.
      </p>
      <br />
      <p>
        the bar graph starts form a velocity of zero and each bucket is 1/700
        distance units per 1/30th of a second since it does one physics tick per
        frame which is 1/30th of a second. The units of velocity are quite small
        since one unit of distance is one square on the cage, or see it as the
        floor is 4x4 units
      </p>
      <br />
      <p>
        basically just shows the maxwell botzman distribution as an emergent
        propery
      </p>
      <hr className="clearLeft" />
    </Wrapper>
  );
}

export default Boltzman;
