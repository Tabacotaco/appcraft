const PropTypes = require('prop-types');
const { DatePicker } = require('@material-ui/pickers/DatePicker');

DatePicker.propTypes = {
  autoOk: PropTypes.bool,
  disabled: PropTypes.bool,
  disableFuture: PropTypes.bool,
  disablePast: PropTypes.bool,
  format: PropTypes.string,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,

  color: PropTypes.oneOf(['primary', 'secondary']),
  inputVariant: PropTypes.oneOf(['standard', 'filled', 'outlined']),
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),
  openTo: PropTypes.oneOf(['year', 'month', 'date']),
  orientation: PropTypes.oneOf(['portrait', 'landscape']),
  size: PropTypes.oneOf(['medium', 'small']),
  variant: PropTypes.oneOf(['dialog', 'inline', 'static']),

  views: PropTypes.arrayOf(
    PropTypes.oneOf(['year', 'month', 'date'])
  ),

  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.instanceOf(Date).isRequired
  ]).isRequired,

  onChange: PropTypes.func.isRequired
};

module.exports = { default: DatePicker };
