import React from 'react';
import SilverStripeComponent from 'lib/SilverStripeComponent';
import { Tab } from 'react-bootstrap-ss';

class TabItem extends SilverStripeComponent {
  getTabProps() {
    return {
      eventKey: this.props.name,
      title: this.props.title,
      disabled: this.props.disabled,
      className: [this.props.extraClass, this.props.className].join(' '),
    };
  }

  render() {
    const tabProps = this.getTabProps();

    return (
      <Tab.Pane {...tabProps}>
        {this.props.children}
      </Tab.Pane>
    );
  }
}

TabItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  extraClass: React.PropTypes.string,
};

export default TabItem;
