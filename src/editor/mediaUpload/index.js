import PropTypes from 'prop-types';

import  useMediaPicker from './useMediaPicker';

function MediaUpload({ render, ...rest }) {
  const openModal = useMediaPicker(rest);

  return render(openModal);
}

MediaUpload.propTypes = {
  render: PropTypes.func.isRequired,
  ...useMediaPicker.propTypes,
};

export default MediaUpload;
