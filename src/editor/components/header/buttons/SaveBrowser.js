import {
  Button,
  ButtonSize,
  ButtonType,
  ButtonVariant,
  useSnackbar,
  Icons,
} from "@googleforcreators/design-system";
import { Tooltip, useStory } from "@googleforcreators/story-editor";
import { __ } from '@googleforcreators/i18n';

function SaveBrowser() {
  const { isSaving, saveStory } = useStory(
    ({
      state: {
        meta: { isSaving },
      },
      actions: { saveStory },
    }) => ({
      isSaving,
      saveStory,
    }),
  );

  const { showSnackbar } = useSnackbar();

  const handleSaveButton = () => {
    saveStory().then(() => {
      showSnackbar({
        message: "Story Saved",
      });
    });
  };

  const label = __('Save in Browser', 'web-stories');
  return (
    <>
      <Tooltip title={label} hasTail>
        <Button
          variant={ButtonVariant.Square}
          type={ButtonType.Quaternary}
          size={ButtonSize.Small}
          onClick={handleSaveButton}
          disabled={isSaving}
          aria-label={label}
        >
          <Icons.FloppyDisk />
        </Button>
      </Tooltip>
    </>
  );
}

export default SaveBrowser;
