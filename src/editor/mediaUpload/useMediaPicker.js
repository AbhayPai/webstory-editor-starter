// import { useCallback, useEffect, useMemo } from '@googleforcreators/react';
import { __ } from '@googleforcreators/i18n';
// import { trackEvent } from '@googleforcreators/tracking';
// import { useSnackbar } from '@googleforcreators/design-system';
// import { useConfig, useAPI } from '@googleforcreators/story-editor';
import PropTypes from 'prop-types';

function useMediaPicker({
  title = __('Upload to Story', 'web-stories'),
  buttonInsertText = __('Insert into page', 'web-stories'),
  onSelect,
  onSelectErrorMessage = __('Unable to use this file type.', 'web-stories'),
  onClose,
  onPermissionError,
  type = '',
  multiple = false,
  cropParams,
}) {

  // @TODO: Define mediapicker.
  return () => ({});
}

useMediaPicker.propTypes = {
  title: PropTypes.string,
  buttonInsertText: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onSelectErrorMessage: PropTypes.string,
  onClose: PropTypes.func,
  onPermissionError: PropTypes.func,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  cropParams: PropTypes.object,
  multiple: PropTypes.bool,
};

export default useMediaPicker;