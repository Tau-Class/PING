/*import React from 'react';
import { Route, withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0)
        }
    }
    render() {
        const { component: Component, ...rest } = this.props;
        return <Route {...rest} render={props => (<Component {...props} />)} />;
        }
    }
export default withRouter(ScrollToTop);*/

/*import { useEffect} from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}*/

/*import React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0,0)
      }
    }
    render() {
      return this.props.children
    }
  }
  export default withRouter(ScrollToTop);*/

/*import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends PureComponent {
  componentDidMount = () => window.scrollTo(0, 0);
  componentDidUpdate = prevProps => {
    if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
  };
  render = () => this.props.children;
}

export default withRouter(ScrollToTop);*/

import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]);
  return children || null;
};

export default withRouter(ScrollToTop);