import * as React from "react";

interface IOtherProps {
    value: number;
}

const Other: React.SFC<IOtherProps>= ({value}) => (
    <label>{value}</label>
);

export default Other;