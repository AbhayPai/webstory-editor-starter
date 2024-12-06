import { Tooltip, useStory } from "@googleforcreators/story-editor";
import {
  Button,
  ButtonSize,
  ButtonType,
  ButtonVariant,
  Icons,
} from "@googleforcreators/design-system";
import { __ } from '@googleforcreators/i18n';

function ExternalPreview() {
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

  const openPreviewLink = async () => {
    await saveStory();

    const previewLink = "https://abhaypai.github.io/webstory-editor-starter/preview.html";

    // Start a about:blank popup with waiting message until saving operation
    // is done. That way, we will not bust the popup timeout.
    try {
      const popup = window.open("about:blank", "story-preview");

      if (popup) {
        popup.document.write("<!DOCTYPE html><html><head>");
        popup.document.write("<title>");
        popup.document.write("Generating the preview…");
        popup.document.write("</title>");
        popup.document.write("</head><body>");
        popup.document.write("Please wait. Generating the preview…"); // Output "waiting" message.

        // Force redirect to the preview URL after 5 seconds. The saving tab
        // might get frozen by the browser.
        popup.document.write(
          `<script>
            setTimeout(function() {
              location.replace(${JSON.stringify(previewLink)});
            }, 5000);
          </script>`,
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  const label = __('External Preview', 'web-stories');
  return (
    <>
      <Tooltip title={label} hasTail>
        <Button
          variant={ButtonVariant.Square}
          type={ButtonType.Quaternary}
          size={ButtonSize.Small}
          onClick={openPreviewLink}
          disabled={isSaving}
          aria-label={label}
        >
          <Icons.ExternalLink />
        </Button>
      </Tooltip>
    </>
  );
}

export default ExternalPreview;