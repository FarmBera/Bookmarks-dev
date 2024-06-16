import { React } from "react";
import styled from "styled-components";

// colors
// import ColorFolder from "./styles/colors";
// import Variable from "./data/Variables";

function TwistingSquares() {
  return (
    <SampleStyle>
      <div class="container">
        <div class="square black">
          <div class="square">
            <div class="square black">
              <div class="square">
                <div class="square black">
                  <div class="square">
                    <div class="square black">
                      <div class="square">
                        <div class="square black">
                          <div class="square">
                            <div class="square black">
                              <div class="square">
                                <div class="square black">
                                  <div class="square">
                                    <div class="square black">
                                      <div class="square">
                                        <div class="square black">
                                          <div class="square">
                                            <div class="square black">
                                              <div class="square">
                                                <div class="square black">
                                                  <div class="square">
                                                    <div class="square black">
                                                      <div class="square">
                                                        <div class="square black">
                                                          <div class="square">
                                                            <div class="square black">
                                                              <div class="square">
                                                                <div class="square black"></div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SampleStyle>
  );
}

const SampleStyle = styled.div`
  html {
    background: black;
    height: 100%;
    /* position: relative; */
    overflow: hidden;
  }

  .container {
    height: 200px;
    width: 200px;
    position: absolute;
    /* top: 50%;
    left: 50%; */
    /* margin: -150px 0 0 -150px; */
  }

  .square {
    height: 94%;
    width: 94%;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -47% 0 0 -47%;
  }

  .black {
    background: black;
    animation: rotate 10s infinite linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default TwistingSquares;
