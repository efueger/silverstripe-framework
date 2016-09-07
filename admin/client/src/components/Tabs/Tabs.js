import React from 'react';
import SilverStripeComponent from 'lib/SilverStripeComponent';
import { Tab, Nav, NavItem } from 'react-bootstrap-ss';

class Tabs extends SilverStripeComponent {
  /**
   * Determines a default tab to be opened and validates the given default tab.
   * Replaces the given default tab if it is invalid with a valid tab.
   *
   * @returns {string|undefined}
   */
  getDefaultActiveKey() {
    let active;

    if (typeof this.props.defaultActive === 'string') {
      const activeChild = React.Children.toArray(this.props.children)
        .find((child) => child.props.name === this.props.defaultActive);

      if (activeChild) {
        active = activeChild.props.name
      }
    }

    if (typeof active !== 'string') {
      React.Children.forEach(this.props.children, (child) => {
        if (active === null) {
          active = child.props.name;
        }
      });
    }

    return active;
  }

  /**
   * Properties for the container.
   *
   * @returns {object}
   */
  getContainerProps() {
    return {
      defaultActiveKey: this.getDefaultActiveKey(),
      activeKey: this.props.active,
      id: this.props.id,
      onSelect: this.props.onSelect,
      className: [this.props.className, this.props.extraClass].join(' '),
    };
  }

  /**
   * Render an individual link for the tabset
   *
   * @param child
   * @returns {ReactElement}
   */
  renderTab(child) {
    if (child.props.title === null) {
      return null;
    }
    return <NavItem eventKey={child.props.name}
      disabled={child.props.disabled}
      className={child.props.className}
    >
      {child.props.title}
    </NavItem>;
  }

  /**
   * Builds the tabset navigation links, will hide the links if there is only one child
   *
   * @returns {ReactElement|null}
   */
  renderNav() {
    const tabs = React.Children
      .map(this.props.children, this.renderTab);

    if (tabs.length <= 1) {
      return null;
    }

    return (
      <Nav bsStyle="tabs">
        {tabs}
      </Nav>
    );
  }

  render() {
    const containerProps = this.getContainerProps();
    const nav = this.renderNav();

    return (
      <Tab.Container {...containerProps}>
        <div className="wrapper">
          { nav }
          <Tab.Content animation={this.props.animation}>
            {this.props.children}
          </Tab.Content>
        </div>
      </Tab.Container>
    );
  }
}

Tabs.propTypes = {
  id: React.PropTypes.string.isRequired,
  defaultActive: React.PropTypes.string,
  active: React.PropTypes.string,
  onSelect: React.PropTypes.func,
  extraClass: React.PropTypes.string,
};

export default Tabs;
