import React from 'react';
import QRCode from 'qrcode.react';

const Console = (props) => {
  return (
    <div className="center console">
      <button type="button" class="btn btn-primary" onClick={props.beginDoubleJeopardy}>Begin Double Jeopardy</button>
      <a href={`https://${window.location.host}/play`}>
        <div className="center">
          <QRCode includeMargin={true} className="center" value={`https://${window.location.host}/play`} />
        </div>
      </a>
      <p className="normal font-weight-light">Scan to join!</p>
    </div>
  )
}

export default Console;
