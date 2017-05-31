import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data, type) {
  if(type) {
    return _.round((_.sum(data)/data.length) * 0.75006375541921);
  } else {
    return _.round(_.sum(data)/data.length);
  }
}

export default (props) => {
  return (
    <div>
      <Sparklines height={100} width={150} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>Average value: {average(props.data, props.type)} {props.units}</div>
    </div>
  );
}
