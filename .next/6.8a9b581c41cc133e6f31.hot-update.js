webpackHotUpdate(6,{

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(948);

var _factory2 = _interopRequireDefault(_factory);

var _Layout = __webpack_require__(723);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(464);

var _routes = __webpack_require__(1132);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ubuntu/StephenGrider/kickstart/pages/index.js?entry';


var CampaignIndex = function (_React$Component) {
    (0, _inherits3.default)(CampaignIndex, _React$Component);

    function CampaignIndex(props) {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call(this, props));
    }

    // async componentDidMount(){
    //     // this function not executed on nextjs server
    //     const campaigns = await factory.methods.getDeployedCampaigns().call();
    //     console.log(campaigns);
    // }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: 'campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        }
                    }, 'View Campaign')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Create Campaign', icon: 'add circle', primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }))), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;

                                console.log(campaigns);
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react2.default.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmFjdG9yeSIsIkxheW91dCIsIkNhcmQiLCJCdXR0b24iLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsInByb3BzIiwiaXRlbXMiLCJjYW1wYWlnbnMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBUyxBQUFNOztBQUNmLEFBQVEsQUFBVzs7Ozs7OztJQUViLEE7MkNBQ0Y7OzJCQUFBLEFBQVksT0FBTTs0Q0FBQTs7bUpBQUEsQUFDUixBQUNUO0FBRUQ7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OzBDQVFpQixBQUNiO2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLFVBQUEsQUFBQyxTQUFVLEFBQzlDOzs0QkFBTyxBQUNLLEFBQ1I7aURBQ0ksQUFBQyw4QkFBSyxzQkFBTixBQUEwQjtzQ0FBMUI7d0NBQUEsQUFDSTtBQURKO3FCQUFBLGtCQUNJLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFKTCxBQUdDLEFBQ0ksQUFHUjsyQkFQSixBQUFPLEFBT0ksQUFFZDtBQVRVLEFBQ0g7QUFGUixBQUFjLEFBWWQsYUFaYzs7aURBWVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHSCxBQUNKO21DQUNBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG1DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3lCQUFELEFBQ1ksQUFDUjt5QkFGSixBQUVZLG1CQUFrQixNQUY5QixBQUVtQyxjQUFhLFNBRmhEOzs4QkFBQTtnQ0FKWixBQUVJLEFBQ0ksQUFDSSxBQU1QO0FBTk87QUFDSSx1QkFQcEIsQUFDQSxBQUNJLEFBVUssQUFBSyxBQUtqQjs7Ozs7Ozs7Ozs7O3VDQXZDMkIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUF1QixBLEFBQXZDOztpQ0FBbEI7QSxxREFDTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVk7aUVBQ0wsRUFBQyxXQUFELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFkYSxnQkFBTSxBLEFBc0RsQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS91YnVudHUvU3RlcGhlbkdyaWRlci9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/ubuntu/StephenGrider/kickstart/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/ubuntu/StephenGrider/kickstart/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi44YTliNTgxYzQxY2MxMzNlNmYzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YTRhODYyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcyc7XG5cbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIC8vIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgLy8gICAgIC8vIHRoaXMgZnVuY3Rpb24gbm90IGV4ZWN1dGVkIG9uIG5leHRqcyBzZXJ2ZXJcbiAgICAvLyAgICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhjYW1wYWlnbnMpO1xuICAgIC8vIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcbiAgICAgICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhjYW1wYWlnbnMpO1xuICAgICAgICByZXR1cm4ge2NhbXBhaWduc307XG4gICAgfVxuXG4gICAgcmVuZGVyQ2FtcGFpZ25zKCl7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5jYW1wYWlnbnMubWFwKChhZGRyZXNzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2BjYW1wYWlnbnMvJHthZGRyZXNzfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+VmlldyBDYW1wYWlnbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZmx1aWQ6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMz5PcGVuIENhbXBhaWduczwvaDM+XG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9Jy9jYW1wYWlnbnMvbmV3Jz5cbiAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkNyZWF0ZSBDYW1wYWlnblwiIGljb249XCJhZGQgY2lyY2xlXCIgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYW1wYWlnbnMoKX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFTQTtBQUFBOztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBUkE7QUFVQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7O0FBRkE7QUFNQTtBQU5BO0FBQ0E7Ozs7Ozs7Ozs7OztBQTdCQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFmQTtBQUNBO0FBcURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=