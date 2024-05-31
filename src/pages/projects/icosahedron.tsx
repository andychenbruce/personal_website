import React from "react";

import Wrapper from "../../wrapper.js";
import Navbar from "../../includes/navbar.js";
import { AndyCodeBlock } from "../../include_code.js";

function Icosahedron(props) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/style.css" />
        <meta charSet="UTF-8" />
        <script type="module" src="./main.js"></script>
        <title>
          Drawing a Sphere by Recursive Segmentation of an Icosahedron
        </title>
      </head>
      <body>
        <Navbar />
        <h1>Drawing a Sphere by Recursive Segmentation of an Icosahedron</h1>
        <hr />
        <canvas width="600" height="600" id="big_canvas"></canvas>
        <hr />
        <div>
          <canvas width="400" height="400" id="small_canvas0"></canvas>
          First, we draw three orthoganal golden rectangles centered on the
          origin.
          <hr />
          <canvas width="400" height="400" id="small_canvas1"></canvas>
          Then connect the corners of the golden rectangles.
          <hr />
          <canvas width="400" height="400" id="small_canvas2"></canvas>
          Then add a triangle face to each adjacent triplet of corners. Now we
          have a 20 face icosahedron.
          <hr />
          <canvas width="400" height="400" id="small_canvas3"></canvas>
          Then split each triangle into 4, and normalize all the corners to be
          the same distance away. Since each face is now 4 faces, ther are now
          80 faces.
          <hr />
          <canvas width="400" height="400" id="small_canvas4"></canvas>
          Do it again to get 320 faces.
          <hr />
          <canvas width="400" height="400" id="small_canvas5"></canvas>
          Then again to get 1280 faces. Now it looks like a sphere.
          <hr />
          <canvas width="400" height="400" id="small_canvas6"></canvas>
          Then we can remove the rectangles and fill in the faces of the
          triangles.
          <hr />
          <canvas width="400" height="400" id="small_canvas7"></canvas>
          To we can light and modify the shader to diffusive the light linearly
          on the cosine of the angle between the light and the normal vector for
          the surface.
          <hr />
          <canvas width="400" height="400" id="small_canvas8"></canvas>
          Then also add a spectral effect.
          <hr />
          <canvas width="400" height="400" id="small_canvas9"></canvas>
          Now we turn off the wireframe.
          <hr />
          <canvas width="400" height="400" id="small_canvas10"></canvas>
          Then we can add a beach ball as the base color.
          <hr />
        </div>
      </body>
    </html>
  );
}

export default Icosahedron;
