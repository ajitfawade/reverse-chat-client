import React from 'react';
import { Growl } from 'primereact/growl';

export default class Notification extends React.PureComponent {
  showSuccessNotification(successMessage, detail) {
    this.growl.show({
      severity: 'success',
      summary: successMessage,
      detail: detail
    });
  }

  shoWarningNotification(warningMessage, detail) {
    this.growl.show({
      severity: 'warn',
      summary: warningMessage,
      detail: detail
    });
  }

  shoInfoNotification(infoMessage, detail) {
    this.growl.show({
      severity: 'info',
      summary: infoMessage,
      detail: detail
    });
  }

  shoErrorNotification(errorMessage, detail) {
    this.growl.show({
      severity: 'error',
      summary: errorMessage,
      detail: detail
    });
  }

  render() {
    return (
      <div className="content-section implementation p-fluid">
        <Growl ref={el => (this.growl = el)} />
      </div>
    );
  }
}
