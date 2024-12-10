import { useCallback, useEffect, useMemo } from '@googleforcreators/react';
import { useAPI } from '@googleforcreators/story-editor';
import PropTypes from 'prop-types';

// @TODO: Define mediapicker for BSP CMS.
function useMediaPicker() {
  const {
    actions: { updateMedia },
  } = useAPI();

  useEffect(() => {
    try {
      // @TODO: Define window.cms.Uploader.success function.
    } catch (e) {
      console.error("useMediaPicker >> useEffect", e);
    }
  }, [updateMedia]);

  // @TODO: Need openMediaDialog definition.
  const openMediaDialog = useCallback(
    (evt) => {
      window.alert("Hooray!!! Open your own CMS media picker.");
      console.log("useMediaPicker >> evt >> openMediaDialog", evt);
    },
    []
  );

  return useMemo(() => {
    return openMediaDialog;
  }, [openMediaDialog]);
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