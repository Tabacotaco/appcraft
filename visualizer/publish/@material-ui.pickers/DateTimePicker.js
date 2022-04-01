const PropTypes = require('prop-types');
const { DateTimePicker } = require('@material-ui/pickers/DateTimePicker');

DateTimePicker.propTypes = {
  ampm: PropTypes.bool,
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
  openTo: PropTypes.oneOf(['year', 'month', 'date', 'hours', 'minutes']),
  orientation: PropTypes.oneOf(['portrait', 'landscape']),
  size: PropTypes.oneOf(['medium', 'small']),
  variant: PropTypes.oneOf(['dialog', 'inline', 'static']),

  views: PropTypes.arrayOf(
    PropTypes.oneOf(['year', 'month', 'date', 'hours', 'minutes'])
  ),

  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.instanceOf(Date).isRequired
  ]).isRequired,

  onChange: PropTypes.func.isRequired
};

module.exports = { default: DateTimePicker };
