'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ubuntu/StephenGrider/kickstart/pages/campaigns/new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimunContribution: '',
            errorMessage: '',
            loading: false
        }, _this.onChange = function (event) {
            _this.setState({ minimunContribution: event.target.value });
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createCampaign(_this.state.minimunContribution).send({
                                    from: accounts[0]
                                });

                            case 8:
                                _context.next = 13;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 13:

                                _this.setState({ loading: false });

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 10]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'Create a Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'Minimun Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                value: this.state.minimunContribution,
                onChange: this.onChange,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            })), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: 'Error!',
                content: this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Create')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bkNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvbkNoYW5nZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBR2pCLEFBQVEsQUFBTSxBQUFRLEFBQU87Ozs7Ozs7SSxBQUV2Qjs7Ozs7Ozs7Ozs7Ozs7OzBOLEFBQ0Y7aUNBQVEsQUFDaUIsQUFDckI7MEJBRkksQUFFVSxBQUNkO3FCQUhJLEEsQUFHSztBQUhMLEFBQ0osaUJBS0osQSxXQUFXLFVBQUEsQUFBQyxPQUFVLEFBQ2xCO2tCQUFBLEFBQUssU0FBUyxFQUFDLHFCQUFxQixNQUFBLEFBQU0sT0FBMUMsQUFBYyxBQUFtQyxBQUNwRDtBLGlCQUVELEE7aUdBQVcsaUJBQUEsQUFBTyxPQUFQO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFFTjs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sY0FIdkIsQUFHUCxBQUFjLEFBQThCOztnREFIckM7Z0RBQUE7dUNBTW9CLGNBQUEsQUFBSyxJQU56QixBQU1vQixBQUFTOztpQ0FBMUI7QUFOSCxvREFBQTtnREFBQTt5REFPRyxBQUFRLFFBQVIsQUFBZ0IsZUFBZSxNQUFBLEFBQUssTUFBcEMsQUFBMEMscUJBQTFDLEFBQ0w7MENBQ1MsU0FUUCxBQU9HLEFBQ0EsQUFDSSxBQUFTO0FBRGIsQUFDRixpQ0FGRTs7aUNBUEg7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBWUg7O3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUFaMUIsQUFZSCxBQUFjLEFBQW1COztpQ0FHckM7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBZlIsQUFlUCxBQUFjLEFBQVU7O2lDQWZqQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQWtCSCxBQUNKO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHNDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlDQUFBLEFBQUM7dUJBQUQsQUFDVSxBQUNOOytCQUZKLEFBRWtCLEFBQ2Q7dUJBQU8sS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ2xCOzBCQUFVLEtBSmQsQUFJbUI7OzhCQUpuQjtnQ0FIUixBQUNJLEFBRUksQUFPSjtBQVBJO0FBQ0ksaUNBTVIsQUFBQzt1QkFBRCxBQUVJO3dCQUZKLEFBRVcsQUFDUDt5QkFBUyxLQUFBLEFBQUssTUFIbEIsQUFHd0I7OzhCQUh4QjtnQ0FWSixBQVVJLEFBS0E7QUFMQTtBQUNJLGdDQUlKLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQzs4QkFBQTtnQ0FBQTtBQUFBO2VBbEJaLEFBQ0ksQUFFSSxBQWVJLEFBTWY7Ozs7O0FBdERxQixBLEFBeUQxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvdWJ1bnR1L1N0ZXBoZW5HcmlkZXIva2lja3N0YXJ0In0=