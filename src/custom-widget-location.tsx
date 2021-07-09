/*!
 * Copyright 2020, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement, useRef } from "react";
import { BlockAttributes } from "widget-sdk";
import Location from "./components/Location";

/**
 * React Component
 */
export interface CustomWidgetLocationProps extends BlockAttributes {
  message: string;
}

export const CustomWidgetLocation = ({ props }: CustomWidgetLocationProps): ReactElement => {
  
  const innerRef = useRef();

  const getLocation = () => {
      innerRef.current && innerRef.current.getLocation();
  };

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Using react-geolocated to access the geolocation JavaScript API in React.</h4>
      <article style={{ textAlign: "center" }}>
          {/* eslint-disable-next-line no-console*/}
          <Location onError={(error) => console.log(error)} ref={innerRef} />
          <button
              className="pure-button pure-button-primary"
              onClick={getLocation}
              type="button"
          >
              Get location
          </button>
      </article>
    </div>
  );
};

