import React from "react";
import {MakeMath} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function NavierStokes({title}: {title: string}) {
  let new_heads = (
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
      integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
      crossOrigin="anonymous"
    />
  );

  return (
    <Wrapper head={new_heads} title={title}>
      <div id="dvMain">
        <div id="dvSmallButtons" className="dvB"></div>
        <div id="dvLargeButtons" className="dvB"></div>
        <canvas
          id="canvas"
          width="800"
          height="800"
          onContextMenu={(event) => event.preventDefault()}
        ></canvas>
      </div>
      <hr className="clearLeft" />
      <h2>Tap and drag to add turbulence to the simulation.</h2>
      <p>
        <a href="https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_equations">
          Wikipeida
        </a>{" "}
        says that the Navier-Stokes equation is
      </p>
      <div style={{ textAlign: "center" }}>
        <MakeMath
          tex={
            "\\rho{D\\mathbf{u} \\over Dt} = -\\nabla p + \\nabla \\cdotp \\mathbf{ \\tau } + \\rho \\mathbf{g}"
          }
        />
      </div>
      <p>where</p>
      <br />
      <p>
        <MakeMath tex={"\\rho"} /> is density
      </p>
      <br />
      <MakeMath tex={"\\mathbf{u}"} /> is the velocity vector
      <br />
      <MakeMath tex={"p"} /> is the pressure
      <br />
      <MakeMath tex={"mathbf{\tau}"} /> stress tensor
      <br />
      <MakeMath tex={"g"} /> is any other acceleration, basically the "other"
      category like walls, gravity, surface tension, diffusion, ect
      <br />
      <MakeMath tex={"\\nabla"} /> is the gradient, equal to{" "}
      <MakeMath
        tex={
          "({\\partial \\over \\partial x}, {\\partial \\over \\partial y}, {\\partial \\over \\partial z}, ...)"
        }
      />{" "}
      for however many dimentions. This simulation is only 2 dimentional for
      display purpouses so in this case it is just{" "}
      <MakeMath
        tex={
          "({\\partial \\over \\partial x}, {\\partial \\over \\partial y})"
        }
      />
      .
      <br />
      <MakeMath tex={"{\\nabla \\cdotp}"} /> is the divergence and is just the
      dot product of the gradient with the origional vector so it is equal to to
      <MakeMath
        tex={
          "({\\partial \\over \\partial x}, {\\partial \\over \\partial y}, {\\partial \\over \\partial z} ...) \\cdotp (F_x, F_y, F_z, ...) = {\\partial F_x\\over \\partial x} + {\\partial F_y\\over \\partial y} + {\\partial F_z\\over \\partial z}, ..."
        }
      />{" "}
      for however many dimentions. Again this one is 2 dimentions so it's just
      <MakeMath
        tex={
          "{\\partial F_x\\over \\partial x} + {\\partial F_y\\over \\partial y}"
        }
      />
      .
      <br />
      <MakeMath tex={"D\\mathbf{} \\over Dt"} /> is the material vector which
      is just{" "}
      <MakeMath
        tex={
          "{\\partial  \\over \\partial t} + \\mathbf{u} \\cdotp \\nabla"
        }
      />
      , basically meaning how a material follows its velocity field
      <br />
      here it is taking the matieral derivative of the velocity, or saying how
      the velocity follows itself
      <br />
      <MakeMath
        tex={
          "{D\\mathbf{u} \\over Dt} = {\\partial\\mathbf{u} \\over \\partial t} + \\mathbf{u} \\cdotp \\nabla \\mathbf{u}"
        }
      />
      <br />
      which expanded further makes
      <br />
      <MakeMath
        tex={
          "{\\partial\\mathbf{u} \\over \\partial t} + {u_x}{\\partial\\mathbf{u} \\over \\partial x} + {u_y}{\\partial\\mathbf{u} \\over \\partial y}"
        }
      />
      <br />
      which is actually just equal to
      <br />
      <MakeMath tex={"d\\mathbf{u} \\over dt"} /> which the acceleration
      vector, so the velocity moving based on the velocity field (iteself) is
      just the acceleration field
      <br />
      let
      <MakeMath tex={"\\mathbf{a}"} /> be the acceleration vector
      <br />
      <MakeMath tex={"\\mathbf{a} = {D\\mathbf{u} \\over Dt}"} />
      <br />
      so the origional equation becomes
      <br />
      <div style={{ textAlign: "center" }}>
        <MakeMath
          tex={
            "\\rho{\\mathbf{a}} = -\\nabla p + \\nabla \\cdotp \\mathbf{ \\tau } + \\rho \\mathbf{g}"
          }
        />
      </div>
      <br />
      next,
      <br />
      <MakeMath tex={"\\mathbf{\\tau}"} /> basically doesn't matter here since
      it is the stress tensor used for viscosity and when the shape of the box
      is changing size and volume, stuff like that is ignored for this
      simulation
      <br />
      now the equation is getting easier and looks like
      <br />
      <div style={{ textAlign: "center" }}>
        <MakeMath
          tex={"\\rho{\\mathbf{a}} = -\\nabla p + \\rho \\mathbf{g}"}
        />
      </div>
      <br />
      also just ignore extra forces for now so
      <br />
      <div style={{ textAlign: "center" }}>
        <MakeMath tex={"\\rho{\\mathbf{a}} = -\\nabla p"} />
      </div>
      <br />
      now this is easy, acceleration time density (fluid equivelent of force,
      F=ma) is just the oppossite of the gradient in pressure, which makes sense
      since it would flow from large pressure to small pressure, or where and in
      the direction the derivative/gradient is negative.
      <br />
      In incompressable fluids, density is constant so
      <MakeMath tex={"\\rho"} /> is basically a constant and can be ignored
      too. Because
      <MakeMath tex={"\\rho"} /> is constant,
      <MakeMath tex={"{d\\rho \\over dt} = 0"} />
      <br />
      conservation of mass equation is
      <div style={{ textAlign: "center" }}>
        <MakeMath
          tex={
            "{d\\rho \\over dt} + \\nabla \\cdotp (\\rho \\mathbf{u}) = 0"
          }
        />
      </div>
      <br />
      but because
      <MakeMath tex={"{d\\rho \\over dt} = 0"} /> it is just
      <MakeMath tex={"\\nabla \\cdotp (\\rho \\mathbf{u}) = 0"} />, and since
      <MakeMath tex={"\\rho"} /> doesnt change it can be divided out of the
      divergence since it is the same at every point to where
      <MakeMath tex={"\\nabla \\cdotp \\mathbf{u} = 0"} />, which also makes
      sense. One point can't have 2 neighboring points both pulling from it or
      else that means it is going in 2 directions and creating new mass, or if a
      cell has 2 neighbors going into it mass is deleted since density can't
      change, so the divergence at every point must equal zero.
      <br />
      The opposite of divergence is curl, and every vector field can be
      reresented as a vector field of just the divergence plus a field of just
      the curl,
      <MakeMath
        tex={
          "\\mathbf{u_{divergence}} + \\mathbf{u_{curl}} = \\mathbf{u}"
        }
      />
      . To get just the curl one takes the origional vector field and subtracts
      the divergence to leave the curl,
      <MakeMath
        tex={
          "\\mathbf{u_{curl}} = \\mathbf{u} - \\mathbf{u_{divergence}}"
        }
      />
      . The divergence only field,
      <MakeMath tex={"\\mathbf{u_{divergence}}"} /> is really complicated to
      calculate and would take like 10 pages to explain but basically it's just:
      <br />
      <MakeMath
        tex={
          "p(x, y) = {p(x-1, y) + (p(x+1, y) + p(x, y-1) + p(x, y+1) -  {\\nabla \\cdotp \\mathbf{u}(x, y)} \\over 4}"
        }
      />
      <br />
      (think the reverse the gradient by taking an integral instead of partial
      derivative)
      <br />
      and with that system of equations
      <br />
      <MakeMath tex={"\\mathbf{u_d} = \\nabla p(x,y)"} />
      <br />
      to then calculate
      <MakeMath tex={"\\mathbf{u_c} = \\mathbf{u} - \\mathbf{u_d}"} /> and
      then use
      <MakeMath tex={"\\mathbf{u_c}"} /> as the new
      <MakeMath tex={"\\mathbf{u}"} /> for the next time step
      <br />
      <br />
      In the code this systems of equations could be solved with a massive
      matrix with each voxel as a variable and have very perfect calculations,
      or just do it iteratevly and approximate with an iterative solver. This
      code uses the{" "}
      <a href="https://en.wikipedia.org/wiki/Gauss%E2%80%93Seidel_method">
        Gauss Seidel
      </a>{" "}
      method, basically just putting random numbers in to start, then going
      through each
      <MakeMath tex={"p"} />
      -value and substituting the other
      <MakeMath tex={"p"} />
      -values over and over and hope it converges to the right solution (I'm not
      even joking this is literatly what the code does).
      <br />
      After the divergence is cleared, the velocities just need to move both the
      color, themselves, and any other values in the direction they are
      pointing.
      <br />
      In code this is optimised by pulling instead from behind instead of
      pushing out in front because the end point of the velicity will be
      inbetween 4 squares and writing values is almost always more expensive
      than reading values, so instead it will read the 4 values of the squares
      if the velocity vector was rotated 180 degrees or muliplied by -1, linear
      interpolate the expected value at the sub-voxel position, then write it
      into only one square saving time and making the simulation faster at about
      the same accuracy as the intuitive method.
      <br />
      <br />
      Now the hardest part is done, but there is still diffusion where quares
      take the average values of their neighbors over time this is modeled by
      <br />
      <div style={{ textAlign: "center" }}>
        <MakeMath
          tex={
            "a_n(x, y) = a_c(x, y) + k*({a_n(x-1, y) + a_n(x+1, y) + a_n(x, y-1) + a_n(x, y+1)\\over 4} - a_c(x, y))"
          }
        />
      </div>
      <br />
      between the new and the current attrubute,
      <MakeMath tex={"a"} /> and the percent it goes towards it in that time
      tick,
      <MakeMath tex={"k"} />
      <br />
      this is again a system of equations that can easily be solved with the
      Gauss-Seidel method
      <br />
      <br />
      For boundaries and walls, the velocity in that voxel must be both 0 in the
      y and x direction, so when divergence clearing is calculated it will make
      the velocity near only be able to flow parrallel to obsticles and the
      boundary. Since the divergence clearing isn't perfect it doesn't make
      velocity exacly parralel so some fluid leaks off the edge or into walls,
      so a script should iterate through every voxel and make the x velocity 0
      if there are obstacles or boundaries to the left or right, and y velocity
      0 if there are up or down, exept a more computationally efficient way is
      to just set the voxels which are considered boundaries to have a x and y
      velocity of 0, then the divergence clearing will automatically make flow
      parralel to them
      <br />
      <br />
      This is probably obvious but for the numerical implementation of
      derivatives it is just
      <br />
      <MakeMath
        tex={"{df(x) \\over dx} = lim_{h \\to 0}{f(x+h)-f(x) \\over h}"}
      />
      <br />
      <br />
      which can also be
      <br />
      <br />
      <MakeMath
        tex={
          "{df(x) \\over dx} = lim_{h \\to 0}{f(x+h)-f(x-0) \\over h-(-0)}"
        }
      />
      <br />
      <br />
      then to
      <br />
      <br />
      <MakeMath
        tex={
          "{df(x) \\over dx} = lim_{h \\to 0}{f(x+h)-f(x-h) \\over h-(-h)}"
        }
      />
      <br />
      <br />
      <MakeMath
        tex={
          "{df(x) \\over dx} = lim_{h \\to 0}{f(x+h)-f(x-h) \\over 2h}"
        }
      />
      <br />
      <br />
      and in code form with the voxels where the position must be integers the
      most accurate would be would be
      <br />
      <MakeMath tex={"{df(x) \\over dx} = {f(x+1)-f(x-1) \\over 2}"} />
      <br />
      <br />
      <br />
      used sources:
      <br />
      https://www.autodesk.com/research/publications/real-time-fluid-dynamics
      <br />
      my brain
      <br />
      <hr className="clearLeft" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
      var g = {};
      g.smallButtons = true;
      g.buttonArray = [
	  [ 0, 'R', 'Reset' ],
	  [ 0, 'r', 'Run' ],
	  [ 0, 'S', 'Pause' ],
      ];
      var Module = {
	  canvas: document.getElementById("canvas"),
	  arguments: ["-tab", "26", "-smallButtons" ]
		  };`,
        }}
      ></script>
      <script src="/wasm/readfile.js"></script>
      <script src="/wasm/buttons.js"></script>
      <script src="/wasm/index.js"></script>
    </Wrapper>
  );
}

export default NavierStokes;
