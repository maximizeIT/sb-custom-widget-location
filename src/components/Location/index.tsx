import React from "react";
// https://www.npmjs.com/package/react-geolocated
import { geolocated, geoPropTypes } from "react-geolocated";

const getDirection = (degrees, isLongitude) =>
    degrees > 0 ? (isLongitude ? "E" : "N") : isLongitude ? "W" : "S";

// adapted from http://stackoverflow.com/a/5786281/2546338
const formatDegrees = (degrees, isLongitude) =>
    `${0 | degrees}° ${
        0 | (((degrees < 0 ? (degrees = -degrees) : degrees) % 1) * 60)
    }' ${0 | (((degrees * 60) % 1) * 60)}" ${getDirection(
        degrees,
        isLongitude,
    )}`;

const Location = (props) => (
    <div
        style={{
            margin: "2rem",
        }}
    >
        {!props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation.</div>
        ) : !props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled.</div>
        ) : props.coords ? (
            <div>
                You are at{" "}
                <span className="coordinate">
                    {formatDegrees(props.coords.latitude, false)}
                </span>
                ,{" "}
                <span className="coordinate">
                    {formatDegrees(props.coords.longitude, true)}
                </span>
                {props.coords.altitude ? (
                    <span>
                        , approximately {props.coords.altitude} meters above sea
                        level
                    </span>
                ) : null}
                .
            </div>
        ) : (
            <div>Getting the location data&hellip;</div>
        )}
        {!!props.positionError && (
            <div>
                <br />
                Last position error:
                <pre>{JSON.stringify(props.positionError)}</pre>
            </div>
        )}
    </div>
);

Location.propTypes = { ...Location.propTypes, ...geoPropTypes };

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Location);