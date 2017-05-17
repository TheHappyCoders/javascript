import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    Platform
} from 'react-native';
import {
    StackRouter,
    TabRouter,
    createNavigator,
    NavigationActions,
    addNavigationHelpers
} from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const router = this.props.router;
        console.log(router)
        console.log(router.getActionForPathAndParams())

        return (
            <View>
                <Text>Hello, Navigation!</Text>
                <Button

                    title="Chat with Lucy"
                />
            </View>

        )

    }
}

class ChatScreen extends React.Component {
    static navigationOptions = (props) => {
        console.log("props:", props)
        console.log(props.navigation.state.params)
        return {
            title:  "Chat with ${props.navigation.state.params.name}"
        }

    };

    render() {
        console.log(this.props.navigation, this.props.navigation.state)
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

////////link
const isModifiedEvent = event =>
    !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const Linkable = Inner => {
    class LinkableWrapped extends Component {
        render() {
            return (
                <Inner href={this.getURL()} onClick={this.onClick} {...this.props} />
            );
        }

        getAction = () => {
            const {to, href} = this.props;
            if (typeof to === 'string') {
                return NavigationActions.navigate({routeName: to});
            } else if (typeof to === 'object' && typeof to.type === 'string') {
                return to;
            } else if (href) {
                const match = href.match(/^\/(.*)/);
                if (match) {
                    const pathParts = match[1].split('#');
                    const path = pathParts[0];
                    let params = {};
                    if (pathParts.length) {
                        params.hash = pathParts[1];
                    }
                    const action = this.context.getActionForPathAndParams(path, params);
                    return action;
                }
                return null;
            }
        };
        onClick = e => {
            const action = this.getAction();
            if (!isModifiedEvent(e) && action) {
                this.context.dispatch(action);
                e.preventDefault();
            }
        };

        getURL() {
            const action = this.getAction();
            if (!action) return '#';
            return this.context.getURIForAction(action);
        }

        /*static contextTypes = {
         dispatch: PropTypes.func.isRequired,
         getURIForAction: PropTypes.func.isRequired,
         getActionForPathAndParams: PropTypes.func.isRequired,
         };*/
    }
    return LinkableWrapped;
};

const Link = Linkable(props => <a {...props} />);

Link.Linkable = Linkable;
//////////footer
const Footer = () => (
    <div className="footer">
        <div className="inner-footer">

            <section className="copyright">
                <a href="https://github.com/react-community/react-navigation">
                    React Navigation
                </a>
                ·
                <a href="https://github.com/react-community/react-navigation/blob/master/LICENSE">
                    Distributed under BSD License
                </a>
            </section>

        </div>
    </div>
);


const NavigationLinks = ({navigation, className, reverse}) => {
    let links = [
        ...navigation.state.routes.map((route, i) => {
            if (route.routeName === 'Home' || route.routeName === 'NotFound') {
                return null;
            }
            return (
                <Link
                    to={route.routeName}
                    className={i === navigation.state.index ? 'active' : ''}
                    key={route.routeName}
                >
                    {route.routeName}
                </Link>
            );
        }),

        <a
            href="https://exp.host/@react-navigation/NavigationPlayground"
            key="demo"
        >
            Demo
        </a>,

        <a href="https://github.com/react-community/react-navigation" key="github">
            GitHub
        </a>,
    ];
    if (reverse) {
        links = links.reverse();
    }
    return (
        <div className={className}>
            {links}
        </div>
    );
};

class AppFrame extends React.Component {
    state = {isMobileMenuOpen: false};

    componentWillReceiveProps(props) {
        if (this.props.navigation.state !== props.navigation.state) {
            this.setState({isMobileMenuOpen: false});
            window.scrollTo(0, 0);
        }
    }

    render() {
        const {navigation, router} = this.props;
        const {isMobileMenuOpen} = this.state;
        const childNavigation = addNavigationHelpers({
            ...navigation,
            state: navigation.state.routes[navigation.state.index],
        });
        const {state} = navigation;
        const ScreenView = router.getComponentForRouteName(
            state.routes[state.index].routeName
        );
        const {routes, index} = state;
        const route = routes[index];
        const hasChildNavigation = !!route.routes;
        return (
            <div className={"main-app ${isMobileMenuOpen ? 'mobileMenuActive' : ''}"}>

                <nav className="pt-navbar" id="navbar">
                    <div className="inner-navbar">

                        <Link
                            className="pt-navbar-group pt-align-left project-title"
                            to="Home"
                        >
                            <img
                                src="/assets/react-nav-logo.svg"
                                role="presentation"
                                className="logo"
                            />
                            <h1 className="pt-navbar-heading">
                                React Navigation
                            </h1>
                        </Link>

                        <NavigationLinks navigation={navigation} className="navbuttons"/>

                        {hasChildNavigation &&
                        <span
                            className={"pt-icon-properties openMenuButton ${isMobileMenuOpen ? 'active' : ''}"}
                            onClick={() => {
                                this.setState(s => ({
                                    isMobileMenuOpen: !s.isMobileMenuOpen,
                                }));
                                window.scrollTo(0, 0);
                            }}
                        />}

                    </div>
                </nav>

                <NavigationLinks
                    navigation={navigation}
                    className="mobile-navbuttons"
                    reverse
                />

                <ScreenView navigation={childNavigation}/>

                <Footer />
            </div>
        );
    }
}

const SimpleApp = createNavigator(
    StackRouter({
        Home: {screen: HomeScreen, path: "home"},
        Chat: {screen: ChatScreen, path: "chat"}
    })
)(AppFrame);


AppRegistry.registerComponent('SimpleApp', () => SimpleApp);

//web插入组件
if (Platform.OS === "web") {
    AppRegistry.runApplication('SimpleApp', {
        initialProps: {},
        rootTag: document.getElementById("react-root")
    });
}

module.exports = SimpleApp;
