import React from "react";

const WaveGradient = () => {
  return (
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 490"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.path-0{\nanimation:pathAnim-0 4s;\nanimation-timing-function: linear;\nanimation-iteration-count: infinite;\n}\n@keyframes pathAnim-0{\n0%{\nd: path("M 0,500 C 0,500 0,125 0,125 C 114,125.93333333333334 228,126.86666666666666 396,115 C 564,103.13333333333334 786,78.46666666666667 969,78 C 1152,77.53333333333333 1296,101.26666666666667 1440,125 C 1440,125 1440,500 1440,500 Z");\n}\n25%{\nd: path("M 0,500 C 0,500 0,125 0,125 C 185.46666666666664,119.53333333333333 370.9333333333333,114.06666666666668 549,115 C 727.0666666666667,115.93333333333332 897.7333333333333,123.26666666666665 1045,126 C 1192.2666666666667,128.73333333333335 1316.1333333333332,126.86666666666667 1440,125 C 1440,125 1440,500 1440,500 Z");\n}\n50%{\nd: path("M 0,500 C 0,500 0,125 0,125 C 124.53333333333336,138.86666666666667 249.06666666666672,152.73333333333332 429,142 C 608.9333333333333,131.26666666666668 844.2666666666667,95.93333333333332 1022,89 C 1199.7333333333333,82.06666666666668 1319.8666666666668,103.53333333333333 1440,125 C 1440,125 1440,500 1440,500 Z");\n}\n75%{\nd: path("M 0,500 C 0,500 0,125 0,125 C 124.26666666666665,149.93333333333334 248.5333333333333,174.86666666666665 416,163 C 583.4666666666667,151.13333333333335 794.1333333333334,102.46666666666667 972,90 C 1149.8666666666666,77.53333333333333 1294.9333333333334,101.26666666666667 1440,125 C 1440,125 1440,500 1440,500 Z");\n}\n100%{\nd: path("M 0,500 C 0,500 0,125 0,125 C 114,125.93333333333334 228,126.86666666666666 396,115 C 564,103.13333333333334 786,78.46666666666667 969,78 C 1152,77.53333333333333 1296,101.26666666666667 1440,125 C 1440,125 1440,500 1440,500 Z");\n}\n}',
        }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#F78DA7" />
          <stop offset="95%" stopColor="#8ED1FC" />
        </linearGradient>
      </defs>
      <path
        d="M 0,500 C 0,500 0,125 0,125 C 114,125.93333333333334 228,126.86666666666666 396,115 C 564,103.13333333333334 786,78.46666666666667 969,78 C 1152,77.53333333333333 1296,101.26666666666667 1440,125 C 1440,125 1440,500 1440,500 Z"
        stroke="none"
        strokeWidth={0}
        fill="url(#gradient)"
        fillOpacity="0.4"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.path-1{\nanimation:pathAnim-1 4s;\nanimation-timing-function: linear;\nanimation-iteration-count: infinite;\n}\n@keyframes pathAnim-1{\n0%{\nd: path("M 0,500 C 0,500 0,250 0,250 C 164.8,259.6 329.6,269.2 484,274 C 638.4,278.8 782.4000000000001,278.8 940,274 C 1097.6,269.2 1268.8,259.6 1440,250 C 1440,250 1440,500 1440,500 Z");\n}\n25%{\nd: path("M 0,500 C 0,500 0,250 0,250 C 130.53333333333336,254.66666666666666 261.0666666666667,259.3333333333333 413,260 C 564.9333333333333,260.6666666666667 738.2666666666667,257.33333333333337 913,255 C 1087.7333333333333,252.66666666666666 1263.8666666666668,251.33333333333331 1440,250 C 1440,250 1440,500 1440,500 Z");\n}\n50%{\nd: path("M 0,500 C 0,500 0,250 0,250 C 131.73333333333335,259.8666666666667 263.4666666666667,269.73333333333335 406,257 C 548.5333333333333,244.26666666666668 701.8666666666666,208.93333333333334 876,204 C 1050.1333333333334,199.06666666666666 1245.0666666666666,224.53333333333333 1440,250 C 1440,250 1440,500 1440,500 Z");\n}\n75%{\nd: path("M 0,500 C 0,500 0,250 0,250 C 193.59999999999997,254.26666666666668 387.19999999999993,258.53333333333336 525,267 C 662.8000000000001,275.46666666666664 744.8000000000002,288.1333333333333 888,286 C 1031.1999999999998,283.8666666666667 1235.6,266.93333333333334 1440,250 C 1440,250 1440,500 1440,500 Z");\n}\n100%{\nd: path("M 0,500 C 0,500 0,250 0,250 C 164.8,259.6 329.6,269.2 484,274 C 638.4,278.8 782.4000000000001,278.8 940,274 C 1097.6,269.2 1268.8,259.6 1440,250 C 1440,250 1440,500 1440,500 Z");\n}\n}',
        }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#F78DA7" />
          <stop offset="95%" stopColor="#8ED1FC" />
        </linearGradient>
      </defs>
      <path
        d="M 0,500 C 0,500 0,250 0,250 C 164.8,259.6 329.6,269.2 484,274 C 638.4,278.8 782.4000000000001,278.8 940,274 C 1097.6,269.2 1268.8,259.6 1440,250 C 1440,250 1440,500 1440,500 Z"
        stroke="none"
        strokeWidth={0}
        fill="url(#gradient)"
        fillOpacity="0.53"
        className="transition-all duration-300 ease-in-out delay-150 path-1"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.path-2{\nanimation:pathAnim-2 4s;\nanimation-timing-function: linear;\nanimation-iteration-count: infinite;\n}\n@keyframes pathAnim-2{\n0%{\nd: path("M 0,500 C 0,500 0,375 0,375 C 184.40000000000003,353.5333333333333 368.80000000000007,332.06666666666666 523,339 C 677.1999999999999,345.93333333333334 801.2,381.2666666666667 949,392 C 1096.8,402.7333333333333 1268.4,388.8666666666667 1440,375 C 1440,375 1440,500 1440,500 Z");\n}\n25%{\nd: path("M 0,500 C 0,500 0,375 0,375 C 172.93333333333334,367.93333333333334 345.8666666666667,360.8666666666667 489,368 C 632.1333333333333,375.1333333333333 745.4666666666667,396.46666666666664 899,400 C 1052.5333333333333,403.53333333333336 1246.2666666666667,389.26666666666665 1440,375 C 1440,375 1440,500 1440,500 Z");\n}\n50%{\nd: path("M 0,500 C 0,500 0,375 0,375 C 143.86666666666667,356.73333333333335 287.73333333333335,338.46666666666664 441,339 C 594.2666666666667,339.53333333333336 756.9333333333334,358.8666666666667 925,368 C 1093.0666666666666,377.1333333333333 1266.5333333333333,376.06666666666666 1440,375 C 1440,375 1440,500 1440,500 Z");\n}\n75%{\nd: path("M 0,500 C 0,500 0,375 0,375 C 123.46666666666664,391.5333333333333 246.93333333333328,408.06666666666666 402,417 C 557.0666666666667,425.93333333333334 743.7333333333333,427.26666666666665 922,419 C 1100.2666666666667,410.73333333333335 1270.1333333333332,392.8666666666667 1440,375 C 1440,375 1440,500 1440,500 Z");\n}\n100%{\nd: path("M 0,500 C 0,500 0,375 0,375 C 184.40000000000003,353.5333333333333 368.80000000000007,332.06666666666666 523,339 C 677.1999999999999,345.93333333333334 801.2,381.2666666666667 949,392 C 1096.8,402.7333333333333 1268.4,388.8666666666667 1440,375 C 1440,375 1440,500 1440,500 Z");\n}\n}',
        }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stopColor="#F78DA7" />
          <stop offset="95%" stopColor="#8ED1FC" />
        </linearGradient>
      </defs>
      <path
        d="M 0,500 C 0,500 0,375 0,375 C 184.40000000000003,353.5333333333333 368.80000000000007,332.06666666666666 523,339 C 677.1999999999999,345.93333333333334 801.2,381.2666666666667 949,392 C 1096.8,402.7333333333333 1268.4,388.8666666666667 1440,375 C 1440,375 1440,500 1440,500 Z"
        stroke="none"
        strokeWidth={0}
        fill="url(#gradient)"
        fillOpacity={1}
        className="transition-all duration-300 ease-in-out delay-150 path-2"
      />
    </svg>
  );
};

export default WaveGradient;
