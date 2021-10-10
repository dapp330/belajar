import react from "react";

const NavComponent = () => {
  return (
    <header class="sans-serif">
      <div
        className="cover bg-left bg-center-l"
        style={{
          backgroundImage: 'url("http://mrmrs.github.io/photos/u/011.jpg")',
        }}
      >
        <div class="bg-black-80 pb5 pb6-m pb7-l">
          <nav class="dt w-100 mw8 center">
            <div class="dtc w2 v-mid pa3">
              <a
                href="/"
                class="dib w2 h2 pa1 ba b--white-90 grow-large border-box"
              >
                <svg
                  class="link white-90 hover-white"
                  data-icon="skull"
                  viewBox="0 0 32 32"
                  style={{ fill: "currentcolor" }}
                >
                  <title>skull icon</title>
                </svg>
              </a>
            </div>
            <div class="dtc v-mid tr pa3">
              <a
                class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                href="/"
              >
                How it Works
              </a>
              <a
                class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                href="/"
              >
                Pricing
              </a>
              <a
                class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
                href="/"
              >
                About
              </a>
              <a
                class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
                href="/"
              >
                Careers
              </a>
              <a
                class="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba"
                href="/"
              >
                Sign Up
              </a>
            </div>
          </nav>
          <div class="tc-l mt4 mt5-m mt6-l ph3">
            <h1 class="f2 f1-l fw2 white-90 mb0 lh-title">
              This is your super impressive headline
            </h1>
            <h2 class="fw1 f3 white-80 mt3 mb4">
              Now a subheadline where explain your wonderful new startup even
              more
            </h2>
            <a
              class="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
              href="https://facebook.com"
              title="Facebook"
            >
              <svg
                class="dib h2 w2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.414"
              >
                <path
                  d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"
                  fill-rule="nonzero"
                />
              </svg>
              <span class="f6 ml3 pr2">Facebook</span>
            </a>
            <span class="dib v-mid ph3 white-70 mb3">or</span>
            <a
              class="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
              href="https://twitter.com/mrmrs_"
              title="Twitter"
            >
              <svg
                class="dib h2 w2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.414"
              >
                <path
                  d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z"
                  fill-rule="nonzero"
                />
              </svg>
              <span class="f6 ml3 pr2">Twitter</span>
            </a>
          </div>
          <div className="flex justify-center">
            <a
              className="no-underlane near-white bg-animate bg-near-black  hover-bg-gray inline-flex flex items-center ma2 tc br2 pa3 "
              href="#"
              title="instagram"
            >
              <svg
                class="dib h2 w2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.414"
              >
                <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z" />
              </svg>
              <span class="f6 ml3 pr2">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export { NavComponent };
